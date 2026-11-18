// Vercel serverless function: latest crypto headlines from several news sites' public RSS feeds.
// Runs at /api/news. No API key needed. Cached by Vercel for 15 minutes.
// To add or remove a source, edit FEEDS.
const FEEDS = [
  ['The Block', 'https://www.theblock.co/rss.xml'],
  ['CoinDesk', 'https://www.coindesk.com/arc/outboundfeeds/rss/'],
  ['Decrypt', 'https://decrypt.co/feed'],
  ['Cointelegraph', 'https://cointelegraph.com/rss']
];

const decode = s => s
  .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
  .replace(/<[^>]+>/g, '')
  .replace(/&#x([0-9a-f]+);/gi, (m, h) => String.fromCodePoint(parseInt(h, 16)))
  .replace(/&#(\d+);/g, (m, n) => String.fromCodePoint(+n))
  .replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
  .replace(/\s+/g, ' ').trim();

const tag = (xml, name) => {
  const m = xml.match(new RegExp('<' + name + '(?:\\s[^>]*)?>([\\s\\S]*?)</' + name + '>', 'i'));
  return m ? decode(m[1]) : '';
};

const iso = d => { const t = Date.parse(d); return isNaN(t) ? null : new Date(t).toISOString(); };

async function feed([source, url]) {
  const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; CryptoKokua/1.0; +https://www.cryptokokua.com)', 'Accept': 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8' } });
  if (!r.ok) throw new Error(source + ' ' + r.status);
  const xml = await r.text();
  return xml.split(/<item[\s>]/i).slice(1).map(it => {
    let link = tag(it, 'link');
    if (!/^https?:/.test(link)) { const m = it.match(/<link[^>]*href="([^"]+)"/i); link = m ? m[1] : (tag(it, 'guid') || ''); }
    return { source, title: tag(it, 'title'), link, date: iso(tag(it, 'pubDate') || tag(it, 'dc:date') || tag(it, 'published')) };
  }).filter(i => i.title && /^https?:\/\//.test(i.link)).slice(0, 15);
}

module.exports = async (req, res) => {
  const settled = await Promise.allSettled(FEEDS.map(feed));
  const seen = new Set();
  const items = settled.flatMap(s => s.status === 'fulfilled' ? s.value : [])
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    .filter(i => { const k = i.title.toLowerCase(); if (seen.has(k)) return false; seen.add(k); return true; })
    .slice(0, 40);
  res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=1800');
  res.setHeader('Content-Type', 'application/json');
  res.status(items.length ? 200 : 502).send(JSON.stringify({
    updated: new Date().toISOString(),
    sources: FEEDS.map(([name], i) => ({ name, ok: settled[i].status === 'fulfilled' })),
    items
  }));
};
