// Vercel serverless function: stock index, stock and metal futures quotes for the ticker.
// Runs on Vercel at /api/quotes. No API key needed. Results are cached by Vercel for 60 seconds.
const SYMBOLS = ['^GSPC','^IXIC','^DJI','NVDA','AAPL','MSFT','TSLA','COIN','MSTR','GC=F','SI=F','PL=F'];

async function quote(symbol) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=1d&interval=15m`;
  const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; CryptoKokua/1.0)' } });
  if (!r.ok) throw new Error(symbol + ' ' + r.status);
  const j = await r.json();
  const res = j && j.chart && j.chart.result && j.chart.result[0];
  if (!res) throw new Error(symbol + ' empty');
  const m = res.meta || {};
  const price = m.regularMarketPrice;
  const prev = m.chartPreviousClose ?? m.previousClose;
  const closes = ((res.indicators && res.indicators.quote && res.indicators.quote[0] && res.indicators.quote[0].close) || []).filter(v => v != null);
  return {
    symbol,
    price,
    change: prev ? ((price - prev) / prev) * 100 : 0,
    spark: closes.length > 2 ? [prev, ...closes] : null,
    prevClose: prev ?? null,
    dayHigh: m.regularMarketDayHigh ?? null,
    dayLow: m.regularMarketDayLow ?? null,
    yearHigh: m.fiftyTwoWeekHigh ?? null,
    yearLow: m.fiftyTwoWeekLow ?? null,
    volume: m.regularMarketVolume ?? null,
    exchange: m.fullExchangeName || m.exchangeName || null
  };
}

module.exports = async (req, res) => {
  const settled = await Promise.allSettled(SYMBOLS.map(quote));
  const quotes = settled.filter(s => s.status === 'fulfilled').map(s => s.value);
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
  res.setHeader('Content-Type', 'application/json');
  res.status(quotes.length ? 200 : 502).send(JSON.stringify({ updated: new Date().toISOString(), quotes }));
};
