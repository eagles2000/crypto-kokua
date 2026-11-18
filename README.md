# Crypto Kōkua

Plain-English crypto education site and installable web app by Shaka Software LLC.

## Pages
- `index.html` home, `learn.html` lessons, `platforms.html` exchanges/wallets/cards, `markets.html` live prices, `tools.html` calculator.

## Where to edit
- Lesson text, exchanges and wallets: `js/data.js`
- Menu, footer, ticker assets (coins, stocks, metals): top of `js/site.js` (`NAV` and `ASSETS`)
- Colors and layout: `css/site.css`
- Stock and metal prices: `api/quotes.js` (runs on Vercel, no API key)
- After changing files, bump `CACHE` in `sw.js` (for example v4 to v5) so installed apps update.

## Adding a page
Copy `tools.html`, change its content inside `<main>`, then add a link in `NAV` in `js/site.js`.
