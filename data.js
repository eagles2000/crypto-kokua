/* Crypto Kōkua content: lessons (T), exchanges (EX), wallets and IRA (WA). Edit text here. */
const I={coin:'<circle cx="12" cy="12" r="9"/><path d="M9 8h4.5a2 2 0 0 1 0 4H9h5a2 2 0 0 1 0 4H9V8zM11 6v2m0 8v2"/>',
fire:'<path d="M12 3c2 4 6 5 6 10a6 6 0 0 1-12 0c0-3 2-4 2-7 2 1 3 2 4 4 1-2 0-5 0-7z"/>',
key:'<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9m-4 4 3 3m-5-1 2 2"/>',
shield:'<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z"/><path d="m9 12 2 2 4-4"/>',
bank:'<path d="M3 10h18L12 4 3 10zM5 10v8m4-8v8m6-8v8m4-8v8M3 20h18"/>',
send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
gift:'<rect x="3" y="8" width="18" height="13" rx="1"/><path d="M12 8v13M3 12h18M12 8S10 3 7.5 4 8 8 12 8zm0 0s2-5 4.5-4S16 8 12 8z"/>',
lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
cash:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 12h.01M18 12h.01"/>',
card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
tax:'<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h6m-6 4h4"/>',
loan:'<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>',
ira:'<path d="M3 21h18M5 21V10l7-5 7 5v11"/><path d="M10 21v-6h4v6"/>',
chart:'<path d="M4 20V10m6 10V4m6 16v-8m4 8H2"/>',
book:'<path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z"/>'};
const ico=k=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${I[k]}</svg>`;

const T=[
{id:'basics',cat:'Basics',ic:'coin',title:'Crypto in plain English',blurb:'Blockchains, coins, stablecoins and networks, and the difference between an exchange and a wallet.',body:`
<p>Cryptocurrency is digital money that lives on a public, shared record called a <b>blockchain</b>. No bank holds it for you. Whoever controls the secret key to an address controls the coins at that address.</p>
<ul><li><b>Blockchain:</b> a public ledger of every transaction. Once confirmed, a transaction cannot be reversed or charged back.</li>
<li><b>Coin or token:</b> the asset itself, such as Bitcoin (BTC), Ethereum (ETH), Solana (SOL), XRP or USDC.</li>
<li><b>Stablecoin:</b> a token designed to stay worth $1, such as USDC. Handy for moving dollars quickly without price swings.</li>
<li><b>Network:</b> the blockchain a coin travels on. Some tokens exist on several networks. Always send on the network the receiver supports.</li></ul>
<h4>Exchange vs. wallet</h4>
<p><b>An exchange</b> (Kraken, Coinbase, Uphold, Crypto.com) connects to your bank so you can buy, sell and cash out. The company holds your crypto for you, like a brokerage holds stocks. It requires ID verification.</p>
<p><b>A wallet</b> (Exodus, Ledger, Trezor) is where you alone hold the keys. No company can freeze or lose your coins, but no company can rescue you if you lose your recovery phrase.</p>
<div class="box"><b class="l">The saying to remember</b>"Not your keys, not your coins." Crypto on an exchange is an IOU from that company. Crypto in a wallet whose recovery phrase you hold is truly yours.</div>`},
{id:'hot-cold',cat:'Basics',ic:'fire',title:'Hot wallets vs. cold wallets',blurb:'Your pocket wallet and your home safe. Which to use, when, and what they cost.',body:`
<div class="tbl"><table><thead><tr><th></th><th>Hot wallet</th><th>Cold wallet (hardware)</th></tr></thead><tbody>
<tr><td><b>What it is</b></td><td>Software on an internet-connected phone or computer</td><td>A small device that keeps your keys offline</td></tr>
<tr><td><b>Examples</b></td><td>Exodus, exchange wallets, browser wallets</td><td>Ledger, Trezor</td></tr>
<tr><td><b>Cost</b></td><td>Free</td><td>About $59 to $399, one time</td></tr>
<tr><td><b>Convenience</b></td><td>Very high. Send and swap in seconds</td><td>Lower. You press a button on the device to approve</td></tr>
<tr><td><b>Security</b></td><td>Good, but exposed to malware and phishing</td><td>Best. A hacked computer still cannot sign for you</td></tr>
<tr><td><b>Best for</b></td><td>Spending and smaller amounts</td><td>Long-term savings and larger amounts</td></tr></tbody></table></div>
<div class="box"><b class="l">Rule of thumb</b>Keep a few hundred or a few thousand dollars in Exodus for everyday use, and everything you plan to hold for years on a Ledger or Trezor. Exodus can connect to a Trezor (desktop) or Ledger (mobile), so you get the easy Exodus screen with hardware protection.</div>`},
{id:'keys',cat:'Basics',ic:'key',title:'Your keys and codes explained',blurb:'Public address, private key, 12 and 24-word recovery phrases, the passphrase, PIN and 2FA.',body:`
<p>Every wallet uses the same handful of codes. Know which are safe to share and which must never leave your hands.</p>
<div class="tbl"><table><thead><tr><th>Code</th><th>What it does</th><th>Share it?</th></tr></thead><tbody>
<tr><td><b>Public address</b></td><td>Like an account number. The string (or QR code) people use to <b>send you</b> crypto. Bitcoin addresses often start with bc1, Ethereum with 0x.</td><td><b style="color:var(--up)">Yes</b></td></tr>
<tr><td><b>Private key</b></td><td>The secret that lets you spend from an address. Wallets usually keep it hidden and build it from your recovery phrase.</td><td><b style="color:var(--down)">Never</b></td></tr>
<tr><td><b>Secret recovery phrase</b></td><td>12 or 24 ordinary words, in order, that are the <b>master key</b> to the whole wallet. Anyone with them can take everything. Exodus uses 12 words, Ledger 24, Trezor 12, 20 or 24.</td><td><b style="color:var(--down)">Never</b></td></tr>
<tr><td><b>Passphrase ("25th word")</b></td><td>An optional extra word you add on a Ledger or Trezor. It opens a separate hidden wallet. If you forget it, that wallet is gone forever. Use it only once you are comfortable with the basics.</td><td><b style="color:var(--down)">Never</b></td></tr>
<tr><td><b>PIN</b></td><td>Unlocks the physical device. Too many wrong tries wipe it, which is fine because your recovery phrase restores it.</td><td>No</td></tr>
<tr><td><b>2FA code</b></td><td>A six-digit code from an authenticator app that protects exchange logins. Safer than text messages.</td><td>No</td></tr>
<tr><td><b>Memo or tag</b></td><td>An extra number some coins (XRP, XLM, ATOM) need when sending to an exchange.</td><td>Yes, include it</td></tr></tbody></table></div>
<h4>Storing your recovery phrase</h4>
<ol><li>Write the words by hand, in order, on paper or a steel backup plate.</li><li>Never photograph it, type it into notes, email it or save it to the cloud.</li><li>Keep it fire-safe and private: a home safe or safe deposit box.</li><li>Make sure one trusted person knows <i>where</i> it is (not what it says) as part of your estate plan.</li></ol>`},
{id:'safety',cat:'Basics',ic:'shield',title:'The golden safety rules',blurb:'Eight rules that stop almost every scam and costly mistake. Read before you buy.',body:`
<div class="box warn"><b class="l">No real company will ever ask for your recovery phrase</b>Not Exodus, Ledger, Trezor, Kraken or Coinbase. Anyone who asks is a scammer, every time.</div>
<ol><li><b>Send a small test amount first</b> to any new address.</li>
<li><b>Check the first and last 4 to 6 characters</b> of every pasted address. Some malware swaps copied addresses.</li>
<li><b>Match the network.</b> The wrong network can lose funds permanently.</li>
<li><b>Buy hardware wallets only from the maker</b> (ledger.com, trezor.io) or an official reseller. Never used, and never one that arrives with words already written down.</li>
<li><b>Bookmark the real websites.</b> Fake sites, search ads and fake "support" accounts are the most common traps.</li>
<li><b>Ignore guaranteed returns,</b> "double your crypto" offers and urgent pressure. Romance and investment scams often start with a friendly stranger.</li>
<li><b>Turn on app-based 2FA</b> for every exchange and your email.</li>
<li><b>Keep records</b> from day one.</li></ol>`},
{id:'buy',cat:'How-to',ic:'bank',title:'Link your bank and buy',blurb:'Step by step on Kraken, with the same flow for Coinbase, Uphold and Crypto.com.',links:[['https://www.kraken.com','Open Kraken']],body:`
<ol><li>Open Kraken and tap <b>Deposit</b>, then choose <b>USD</b>.</li>
<li>Choose <b>ACH</b> (free) and connect your bank through the secure login screen. Some banks use small test deposits instead.</li>
<li>Enter an amount and confirm. Funds usually arrive in 1 to 5 business days. New accounts may have a short hold before crypto bought with ACH can be withdrawn.</li>
<li>Open <b>Kraken Pro</b> (same login, much lower fees), search the coin, for example BTC/USD, choose Buy and confirm.</li>
<li>Optional: set up <b>recurring buys</b>, such as $50 a week. Buying on a schedule, called dollar-cost averaging, takes the guesswork out of timing.</li></ol>
<p class="mut">Same idea elsewhere: Coinbase under Settings, Payment methods. Uphold under Transact, From: Bank. Crypto.com under Transfer, Deposit, Fiat.</p>`},
{id:'exodus-to-kraken',cat:'How-to',ic:'send',title:'Send from Exodus to Kraken',blurb:'Move crypto from your Exodus wallet to an exchange safely, with a test send first.',links:[['https://www.exodus.com','Exodus'],['https://www.kraken.com','Kraken']],body:`
<ol><li><b>In Kraken:</b> tap Deposit, pick the coin, and choose the <b>network</b>. Copy the deposit address, plus any memo or tag shown.</li>
<li><b>In Exodus:</b> tap the same coin, then Send. Paste the Kraken address (and memo, if needed).</li>
<li><b>Check:</b> the coin and network match on both sides, and the first and last characters of the address match exactly.</li>
<li><b>Send a small test</b>, about $20 worth. Review the network fee and confirm.</li>
<li>Wait for confirmations. Bitcoin can take 10 to 60 minutes; many networks take seconds to minutes.</li>
<li>Once the test arrives, send the rest the same way.</li></ol>
<div class="box"><b class="l">Good to know</b>Moving crypto between your own wallets and accounts is not a taxable event. Keep a record of what you originally paid, because the exchange only knows the cost of coins bought on its platform.</div>`},
{id:'gift',cat:'How-to',ic:'gift',title:'Help a beginner receive crypto',blurb:'The safe way to send crypto to someone who has never used it, plus gift tax basics.',body:`
<p>The safest way is for them to set up <b>their own</b> wallet or account and give you only their public receive address.</p>
<ol><li><b>They choose where to receive it.</b> Exodus is easiest for holding; Kraken or Coinbase is easiest if they may cash out to a bank.</li>
<li><b>They back up their 12 words</b> (Exodus) or turn on 2FA (exchange) before anything is sent. Sit with them if you can.</li>
<li><b>They tap the coin, then Receive,</b> and send you the address. For an exchange they also confirm the network and any memo.</li>
<li><b>You send a small test.</b> They confirm it arrived.</li>
<li><b>You send the rest</b> and save the transaction ID as your record.</li>
<li><b>Share this site</b> with them. New crypto owners are prime scam targets.</li></ol>
<div class="box warn"><b class="l">Avoid handing over your wallet</b>Giving someone your recovery phrase means you both control it forever, and either of you could empty it. A fresh wallet they create is cleaner and safer.</div>
<div class="box"><b class="l">Gift tax basics</b>A gift is not income to the person receiving it. In 2026 you can give up to $19,000 per person per year without filing anything. Above that, the giver files IRS Form 709, though tax is rarely owed. The recipient takes over your original cost basis, so tell them what you paid and when.</div>`},
{id:'cold-move',cat:'How-to',ic:'lock',title:'Move savings to a hardware wallet',blurb:'Get long-term holdings off the exchange and onto your Ledger or Trezor.',body:`
<ol><li>Set up the Ledger or Trezor, write down its recovery words, and open Ledger Wallet or Trezor Suite.</li>
<li>Choose Receive. <b>Confirm the address on the device screen</b>, not just the computer.</li>
<li>On your exchange choose Withdraw or Send, paste the address, select the matching network, and send a test amount.</li>
<li>After the test arrives, send the rest. Exchanges may charge a small withdrawal fee.</li></ol>`},
{id:'cash-out',cat:'How-to',ic:'cash',title:'Cash out to your bank',blurb:'Sell crypto for dollars and withdraw to your bank account.',body:`
<ol><li>If your crypto is in a wallet, send it to your exchange first.</li>
<li>On the exchange, <b>sell</b> the coin for USD.</li>
<li>Choose <b>Withdraw, USD</b> to your linked bank. ACH is usually free and takes 1 to 3 business days; wires are faster for a fee.</li>
<li>Save the trade confirmation. Selling is a taxable event.</li></ol>`},
{id:'cards',cat:'Money',ic:'card',title:'Crypto debit and credit cards',blurb:'Krak, Coinbase, Uphold and Crypto.com cards: costs, rewards and what it takes.',body:`
<div class="tbl"><table><thead><tr><th>Card</th><th>Type</th><th>Cost</th><th>Rewards</th><th>What it takes</th></tr></thead><tbody>
<tr><td><b>Krak Card</b> (Kraken)</td><td>Visa debit</td><td>Free</td><td>Up to 2% in USD or BTC</td><td>Krak app. Rate depends on your average balance across Kraken; small balances earn little or nothing.</td></tr>
<tr><td><b>Coinbase Card</b></td><td>Visa debit</td><td>Free</td><td>Crypto back</td><td>Coinbase account. <b>Not available in Hawaiʻi.</b></td></tr>
<tr><td><b>Coinbase One Card</b></td><td>Amex credit</td><td>Needs Coinbase One, from $4.99/mo</td><td>2% to 4% in BTC</td><td>Membership and credit approval; 50 states and D.C.</td></tr>
<tr><td><b>Uphold Essential</b></td><td>Visa debit</td><td>No annual fee</td><td>2% in XRP, monthly cap</td><td>No credit check. Not in LA, NY or territories.</td></tr>
<tr><td><b>Uphold Elite</b></td><td>Visa debit, metal</td><td>$99.99/yr</td><td>3% to 4% in XRP, monthly cap</td><td>Same as Essential.</td></tr>
<tr><td><b>Crypto.com Visa</b></td><td>Visa prepaid</td><td>Free basic tier</td><td>CRO cashback by tier</td><td>Higher tiers need a subscription or a 12-month CRO lockup.</td></tr></tbody></table></div>
<div class="box"><b class="l">Tax tip</b>Every time a card spends crypto, you are selling that crypto, which can create a small taxable gain. Funding everyday spending from dollars or a stablecoin keeps records simple.</div>`},
{id:'taxes',cat:'Money',ic:'tax',title:'Taxes: what you owe and when',blurb:'What is taxable, short vs. long term, 2026 brackets, Hawaiʻi tax and Form 1099-DA.',links:[['https://www.irs.gov/digital-assets','IRS digital assets']],body:`
<p>The IRS treats crypto as <b>property</b>, like stock. You owe tax when you dispose of it at a gain, not when it goes up.</p>
<h4>Taxable</h4><ul><li>Selling for dollars</li><li>Trading or swapping one coin for another</li><li>Spending crypto</li><li>Earning crypto (staking, mining, airdrops, pay): income when received</li><li>A loan being liquidated</li></ul>
<h4>Not taxable</h4><ul><li>Buying with dollars and holding</li><li>Moving between your own wallets</li><li>Giving a gift (Form 709 may apply above $19,000)</li><li>Borrowing against your crypto</li><li>Any trading inside a Roth IRA</li></ul>
<h4>Short term vs. long term</h4><p>Held one year or less: taxed as ordinary income (10% to 37%). Held more than one year: 0%, 15% or 20%. Waiting past the one-year mark can cut the bill dramatically.</p>
<div class="tbl"><table><thead><tr><th>2026 rate</th><th>Single</th><th>Married jointly</th></tr></thead><tbody>
<tr><td>0%</td><td>Up to $49,450</td><td>Up to $98,900</td></tr><tr><td>15%</td><td>$49,451 to $545,500</td><td>$98,901 to $613,700</td></tr><tr><td>20%</td><td>Over $545,500</td><td>Over $613,700</td></tr></tbody></table></div>
<ul><li><b>Net Investment Income Tax:</b> an extra 3.8% above $200,000 (single) or $250,000 (joint).</li>
<li><b>State:</b> Hawaiʻi taxes long-term gains at a top rate of 7.25%.</li>
<li><b>Losses</b> offset gains plus up to $3,000 of other income a year.</li></ul>
<h4>Form 1099-DA</h4><p>Exchanges now report your sales to the IRS. Starting with 2026 sales, they also report cost basis, but only for coins bought on and never moved off that exchange since January 1, 2026. For coins you transferred in, you supply the cost basis on Form 8949. Tools like Koinly, CoinTracker or TokenTax can build the form for you.</p>`},
{id:'borrow',cat:'Money',ic:'loan',title:'Borrowing against your crypto',blurb:'Get cash without selling. How loans work, where to borrow and how to stay safe.',links:[['https://www.coinbase.com/loans','Coinbase loans']],body:`
<p>Pledge crypto as collateral and borrow against it. You keep the coins and their upside, and borrowing itself is not taxable.</p>
<ol><li>You lock crypto, such as Bitcoin, as collateral.</li><li>You borrow a percentage of its value, the <b>loan-to-value (LTV)</b>. $25,000 against $100,000 is 25% LTV.</li><li>Interest accrues. Some lenders need no monthly payments.</li><li>If prices fall and LTV passes the limit, your collateral is sold automatically (<b>liquidated</b>). That counts as a sale for taxes.</li></ol>
<h4>Where U.S. customers can borrow</h4>
<ul><li><b>Coinbase:</b> borrow USDC against Bitcoin (up to $5 million) and other coins. Rates advertised from around 5% to 6%, variable or fixed. Liquidation at 86% LTV. Not in New York.</li>
<li><b>Kraken Flexline:</b> fixed 10% to 25% APR, two days to two years, high-net-worth users only.</li>
<li><b>Specialist lenders</b> such as Ledn: fixed Bitcoin-backed loans around 9% to 12% APR at up to 50% LTV.</li></ul>
<div class="box warn"><b class="l">Borrow conservatively</b>Crypto can fall 50% or more in a bad year. At 25% LTV on Coinbase, your collateral would have to fall about 70% before liquidation. Set price alerts and be ready to add collateral or repay.</div>`},
{id:'roth',cat:'Retirement',ic:'ira',title:'Crypto in a Roth IRA',blurb:'Trade crypto tax-free and withdraw it all tax-free after 59½ with iTrustCapital.',links:[['https://www.itrustcapital.com','Visit iTrustCapital']],body:`
<ul><li>Buy, sell and trade inside the IRA with <b>no taxable events</b>.</li><li>After age 59½, with the Roth open at least five years, <b>every dollar you withdraw, gains included, is tax-free</b>.</li><li>No annual account fees at iTrustCapital; 1% per crypto buy or sell.</li></ul>
<div class="tbl"><table><thead><tr><th>Rule</th><th>2026 detail</th></tr></thead><tbody>
<tr><td>Contribution limit</td><td>$7,500, or $8,600 at age 50+</td></tr>
<tr><td>Who can contribute</td><td>You need <b>earned income</b> (wages or self-employment). Social Security and pensions don't count. A working spouse can fund a spousal Roth.</td></tr>
<tr><td>Income limit</td><td>Full contribution under $153,000 single or $242,000 joint</td></tr>
<tr><td>Rollovers</td><td>Moving an existing IRA or 401(k) doesn't count toward the limit and needs no earned income. Pre-tax money converted to Roth is taxed that year.</td></tr>
<tr><td>Tax-free withdrawals</td><td>Age 59½ <b>and</b> five years since your first Roth contribution. Contributions themselves can come out anytime.</td></tr>
<tr><td>Funding</td><td>Dollars only. You cannot deposit crypto from Exodus or an exchange.</td></tr></tbody></table></div>
<h4>iTrustCapital at a glance</h4>
<ul><li>Roth, Traditional and SEP IRAs, plus a non-IRA custody account</li><li>100+ cryptocurrencies, gold, silver, stocks and ETFs; 24/7 crypto trading</li><li>$1,000 to open; additional deposits generally $500+</li><li>Phone: (562) 600-8399, Monday to Friday, 7 AM to 5 PM Pacific (4 AM to 2 PM Hawaiʻi)</li><li>Email: info@itrustcapital.com &nbsp;|&nbsp; Help: help.itrustcapital.com</li><li>Based in Irvine, California</li></ul>
<h4>Opening an account</h4><ol><li>At itrustcapital.com click Create Account and verify your email.</li><li>Start an application and choose Roth IRA.</li><li>Add details, beneficiaries and ID.</li><li>Fund with a contribution, an IRA transfer or a 401(k) rollover.</li><li>Buy crypto from the dashboard.</li><li>Switch 2FA from text messages to an authenticator app.</li></ol>`},
{id:'scenarios',cat:'Retirement',ic:'chart',title:'Five years out: $100K, $500K, $1M',blurb:'What selling, borrowing or a Roth IRA could look like at three portfolio sizes.',body:`
<p class="mut">Assumes a single filer with $40,000 of other taxable income, 40% of today's value paid in, held over a year, 2026 federal rates. Use the calculator on this page to try your own numbers.</p>
<h4>Sell everything (taxable account)</h4>
<div class="tbl"><table><thead><tr><th>Value</th><th class="n">Gain</th><th class="n">Federal tax</th><th class="n">Hawaiʻi (up to)</th><th class="n">You keep</th></tr></thead><tbody>
<tr><td>$100,000</td><td class="n">$60,000</td><td class="n">$7,583</td><td class="n">$4,350</td><td class="n">~$88,000</td></tr>
<tr><td>$500,000</td><td class="n">$300,000</td><td class="n">$48,903</td><td class="n">$21,750</td><td class="n">~$429,000</td></tr>
<tr><td>$1,000,000</td><td class="n">$600,000</td><td class="n">$110,028</td><td class="n">$43,500</td><td class="n">~$846,000</td></tr></tbody></table></div>
<h4>Borrow instead (25% LTV)</h4>
<div class="tbl"><table><thead><tr><th>Value</th><th class="n">Cash</th><th class="n">Interest/yr at 6%</th><th class="n">at 10%</th><th class="n">Tax</th></tr></thead><tbody>
<tr><td>$100,000</td><td class="n">$25,000</td><td class="n">$1,500</td><td class="n">$2,500</td><td class="n">$0</td></tr>
<tr><td>$500,000</td><td class="n">$125,000</td><td class="n">$7,500</td><td class="n">$12,500</td><td class="n">$0</td></tr>
<tr><td>$1,000,000</td><td class="n">$250,000</td><td class="n">$15,000</td><td class="n">$25,000</td><td class="n">$0</td></tr></tbody></table></div>
<h4>Inside a Roth IRA</h4><p>A qualified withdrawal of $100,000, $500,000 or $1,000,000 owes <b>$0</b> in federal or state tax. Only the 1% trading fee applies along the way.</p>`},
{id:'research',cat:'Basics',ic:'chart',title:'Where to check prices and research coins',blurb:'CoinGecko, CoinMarketCap, TradingView and block explorers: the free sites to look things up.',links:[['https://www.coingecko.com','CoinGecko'],['https://coinmarketcap.com','CoinMarketCap']],body:`
<p>Before you buy any coin, look it up. These free sites show live prices, charts and the basic facts about thousands of cryptocurrencies.</p>
<h4>Price and coin information</h4>
<ul><li><b><a href="https://www.coingecko.com" target="_blank" rel="noopener">CoinGecko</a>:</b> prices, charts, market size and which exchanges list each coin. The live prices on this site come from CoinGecko.</li>
<li><b><a href="https://coinmarketcap.com" target="_blank" rel="noopener">CoinMarketCap</a>:</b> similar to CoinGecko, with rankings by market size and a watchlist.</li>
<li><b><a href="https://www.tradingview.com" target="_blank" rel="noopener">TradingView</a>:</b> detailed charts for crypto, stocks and metals if you want to go deeper.</li>
<li><b><a href="markets.html">Crypto Kōkua Markets</a>:</b> a quick look at crypto, stocks and metals, up or down.</li></ul>
<h4>Check a transaction yourself</h4>
<p>A <b>block explorer</b> is a public search engine for a blockchain. Paste in an address or a transaction ID to see whether a send went through.</p>
<ul><li>Bitcoin: <a href="https://mempool.space" target="_blank" rel="noopener">mempool.space</a></li><li>Ethereum: <a href="https://etherscan.io" target="_blank" rel="noopener">etherscan.io</a></li><li>Solana: <a href="https://solscan.io" target="_blank" rel="noopener">solscan.io</a></li><li>XRP: <a href="https://xrpscan.com" target="_blank" rel="noopener">xrpscan.com</a></li></ul>
<h4>What to look at before you buy</h4>
<ol><li><b>Market size (market cap):</b> bigger, older coins tend to swing less than tiny new ones.</li><li><b>Where it trades:</b> if it isn't on Kraken, Coinbase or another major exchange, be extra careful.</li><li><b>How long it has existed:</b> brand-new coins are where most scams happen.</li><li><b>Who is promoting it:</b> strangers, influencers and "guaranteed" returns are red flags.</li></ol>
<div class="box warn"><b class="l">Watch for fake look-alikes</b>Scammers copy the names of real coins. Always check a coin's official page on CoinGecko or CoinMarketCap before buying, and never buy because a stranger told you to.</div>`},
{id:'glossary',cat:'Basics',ic:'book',title:'Glossary',blurb:'Airdrop to TXID: the crypto words you will hear, in plain English.',body:`
<ul><li><b>Airdrop:</b> free tokens sent to wallets; taxable as income.</li><li><b>Cold storage:</b> keys kept offline on a hardware wallet.</li><li><b>Cost basis:</b> what you paid, including fees.</li><li><b>Custodial:</b> a company holds your crypto.</li><li><b>Dollar-cost averaging:</b> buying a fixed amount on a schedule.</li><li><b>Gas or network fee:</b> the fee paid to process a transaction.</li><li><b>KYC:</b> the ID check exchanges must do.</li><li><b>Liquidation:</b> automatic sale of loan collateral.</li><li><b>LTV:</b> loan amount divided by collateral value.</li><li><b>Self-custody:</b> you hold your own keys.</li><li><b>Spread:</b> the hidden cost built into a price.</li><li><b>Stablecoin:</b> a token designed to hold $1.</li><li><b>Staking:</b> locking coins to help run a network for rewards.</li><li><b>Swap:</b> trading one coin for another; taxable.</li><li><b>TXID:</b> a transaction's receipt number.</li></ul>`}
];

const EX=[
{n:'Kraken',k:'Exchange',c:'#5741d9',u:'https://www.kraken.com',s:'https://support.kraken.com',d:'Founded 2011 and known for security. Three apps: Kraken for simple buys, Kraken Pro for much lower fees, and Krak for the debit card and payments.',pts:['Kraken Pro fees start around 0.25% to 0.40%','Krak Card: free Visa debit, up to 2% back','Flexline loans for high-net-worth users'],tags:['Best overall pick','Low fees']},
{n:'Coinbase',k:'Exchange',c:'#0052ff',u:'https://www.coinbase.com',s:'https://help.coinbase.com',d:'The largest U.S. exchange and a public company, with the most beginner-friendly app. Use Coinbase Advanced (same login) for lower fees.',pts:['Borrow USDC against Bitcoin, from about 5% to 6%','Coinbase One Card: Amex credit, 2% to 4% in BTC','Coinbase debit card not offered in Hawaiʻi'],tags:['Easiest to start','Loans']},
{n:'Uphold',k:'Exchange',c:'#49cc68',u:'https://uphold.com',s:'https://support.uphold.com',d:'Trade anything to anything in one step: dollars to crypto, crypto to gold. Popular with XRP holders. Fees are built into the quoted price.',pts:['Essential card: no annual fee, 2% in XRP','Elite metal card: $99.99/yr, 3% to 4% in XRP','Direct deposit supported'],tags:['XRP rewards','Metals']},
{n:'Crypto.com',k:'Exchange',c:'#103f68',u:'https://crypto.com',s:'https://help.crypto.com',d:'A mobile-first app headquartered in Singapore with U.S. operations. Its CRO token powers card tiers and perks.',pts:['Visa prepaid card with a free basic tier','Higher tiers need a subscription or 12-month CRO lockup','Visa Signature credit card in the U.S.'],tags:['Card perks','Mobile app']}];
const WA=[
{n:'Exodus',k:'Hot wallet',c:'#1f1b3a',u:'https://www.exodus.com',s:'https://support.exodus.com',d:'Free, beginner-friendly self-custody wallet from a U.S. company. No account or ID needed. Phone, desktop and browser extension.',pts:['12-word secret recovery phrase','Swaps, staking and hundreds of coins','Pairs with Trezor (desktop) and Ledger (mobile)'],tags:['Free','Easiest wallet']},
{n:'Ledger',k:'Cold wallet',c:'#141010',u:'https://www.ledger.com',s:'https://support.ledger.com',d:'Best-selling hardware wallet, made in France. Keys stay inside a certified secure chip; you approve every send on the device.',pts:['Nano S Plus $79, Nano X $149, Nano Gen5 $179','Flex $249, Stax $399','24-word phrase, optional passphrase; app: Ledger Wallet'],tags:['Buy only at ledger.com']},
{n:'Trezor',k:'Cold wallet',c:'#0f6148',u:'https://trezor.io',s:'https://trezor.io/support',d:'The original hardware wallet (2014), from the Czech Republic, with fully open-source firmware.',pts:['Safe 3 about $59 to $79, Safe 5 about $129 to $169','Safe 7 $249 with Bluetooth for iPhone','12, 20 or 24 words; multi-share backup; app: Trezor Suite'],tags:['Open source','Buy only at trezor.io']},
{n:'iTrustCapital',k:'Crypto Roth IRA',c:'#0e5a8a',u:'https://www.itrustcapital.com',s:'https://help.itrustcapital.com',d:'Hold and trade crypto, gold and silver inside a Roth, Traditional or SEP IRA. No monthly fees, 1% per crypto trade.',pts:['$1,000 minimum to open','Phone (562) 600-8399, weekdays 7 to 5 Pacific','Tax-free withdrawals after 59½ and five years'],tags:['Tax-free growth'],topic:'roth'}];

