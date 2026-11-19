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
<tr><td><b>Examples</b></td><td>Exodus, exchange wallets, browser wallets</td><td>Ledger, Trezor, Tangem</td></tr>
<tr><td><b>Cost</b></td><td>Free</td><td>About $55 to $399, one time</td></tr>
<tr><td><b>Convenience</b></td><td>Very high. Send and swap in seconds</td><td>Lower. You press a button on the device to approve</td></tr>
<tr><td><b>Security</b></td><td>Good, but exposed to malware and phishing</td><td>Best. A hacked computer still cannot sign for you</td></tr>
<tr><td><b>Best for</b></td><td>Spending and smaller amounts</td><td>Long-term savings and larger amounts</td></tr></tbody></table></div>
<div class="box"><b class="l">Rule of thumb</b>Keep a few hundred or a few thousand dollars in Exodus for everyday use, and everything you plan to hold for years on a Ledger, Trezor or Tangem. Exodus can connect to a Trezor (desktop) or Ledger (mobile), so you get the easy Exodus screen with hardware protection.</div>
<p>New to cold wallets? <a href="learn.html#tangem" data-open="tangem">Tangem</a> is the simplest: a card you tap to your phone.</p>`},
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
<ol><li>Write the words by hand, in order, on paper or a steel backup plate.</li><li>Never photograph it, type it into notes, email it or save it to the cloud.</li><li>Keep it fire-safe and private: a home safe or safe deposit box.</li><li>Make sure one trusted person knows <i>where</i> it is (not what it says) as part of your estate plan.</li></ol>
<div class="box"><b class="l">Want more protection?</b>See <a href="learn.html#multisig" data-open="multisig">Multisig and split backups</a> for ways to remove the single point of failure, and <a href="learn.html#inheritance" data-open="inheritance">Crypto inheritance</a> so your family can reach your crypto.</div>`},
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
<li>Open <b>Kraken Pro</b> (same login, much lower fees), search the coin, for example BTC/USD, choose Buy and confirm. For the lowest fee, use a <a href="learn.html#limit-orders" data-open="limit-orders">limit order</a>.</li>
<li>Optional: set up <b>recurring buys</b>, such as $50 a week. Buying on a schedule, called dollar-cost averaging, takes the guesswork out of timing.</li></ol>
<p class="mut">Same idea elsewhere: Coinbase under Settings, Payment methods. Uphold under Transact, From: Bank. Crypto.com under Transfer, Deposit, Fiat.</p>`},
{id:'limit-orders',cat:'How-to',ic:'chart',title:'Limit orders: the cheapest way to buy and sell',blurb:'Pick your own price, pay the lower maker fee, and avoid the hidden markups of simple Buy buttons.',links:[['https://pro.kraken.com','Kraken Pro'],['https://crypto.com/exchange','Crypto.com Exchange']],body:`
<p>A <b>limit order</b> lets you choose the exact price you will pay or accept. A buy limit fills only at your price <b>or lower</b>. A sell limit fills only at your price <b>or higher</b>. If the market never reaches your price, nothing happens; the order simply waits until you cancel it.</p>
<h4>Why it saves money: maker vs. taker</h4>
<ul><li><b>Maker:</b> your order waits on the order book. This is the <b>cheaper</b> fee.</li><li><b>Taker:</b> your order fills instantly against someone else's. This is the <b>more expensive</b> fee. Market orders are always taker.</li></ul>
<div class="tbl"><table><thead><tr><th>Platform (starting tier)</th><th class="n">Maker</th><th class="n">Taker</th><th class="n">On a $1,000 buy</th></tr></thead><tbody>
<tr><td>Kraken Pro</td><td class="n">0.40%</td><td class="n">0.80%</td><td class="n">About $4 vs. $8</td></tr>
<tr><td>Crypto.com Exchange</td><td class="n">0.25%</td><td class="n">0.50%</td><td class="n">About $2.50 vs. $5</td></tr>
<tr><td>Simple app "Buy" buttons</td><td class="n" colspan="2">Fee plus hidden spread</td><td class="n">Often $10 to $25+</td></tr></tbody></table></div>
<div class="box"><b class="l">The golden rule for the maker fee</b>When <b>buying</b>, set your price a little <b>below</b> the current price. When <b>selling</b>, set it a little <b>above</b>. Then turn on <b>Post Only</b>, which means "only place this order if it will wait on the book." If your price would fill instantly at the taker fee, the exchange cancels it instead of charging you more.</div>
<div class="box warn"><b class="l">Common mistake</b>Setting a buy price above the current market price (or a sell price below it) makes the order fill immediately at the taker fee. Post Only protects you from this.</div>
<h4>Reading the order book</h4>
<ul><li>The order book has two sides: <b>Bids</b> (buyers, usually green) and <b>Asks</b> (sellers, usually red).</li><li>The gap between the highest bid and the lowest ask is the <b>spread</b>.</li><li>For a maker buy, use a price at or below the highest bid. For a maker sell, use a price at or above the lowest ask.</li></ul>
<h4>On Kraken Pro (pro.kraken.com)</h4>
<p class="mut">Same login as your regular Kraken account; the Kraken Pro phone app works the same way. Fund your account first with a free ACH deposit. Kraken may hold new ACH deposits from being withdrawn for up to 7 days, but you can trade with them right away.</p>
<ol><li><b>Pick your market</b> with the search near the top left, for example BTC/USD.</li>
<li><b>Open the order form</b> on the right and click <b>Buy</b>.</li>
<li><b>Choose Limit</b> as the order type (not Market).</li>
<li><b>Enter your limit price</b> at or slightly below the highest bid.</li>
<li><b>Enter how much:</b> the coin amount in <i>Quantity</i>, or the dollars to spend in <i>Total</i>.</li>
<li><b>Check Post only</b> and leave <i>Time in force</i> on <b>GTC</b> (good until canceled).</li>
<li><b>Review</b> the estimated total and fee, then click the green <b>Buy</b> button and confirm.</li>
<li><b>Track it</b> under <b>Open orders</b> at the bottom. You can edit or cancel it there at no cost.</li></ol>
<h4>On the Crypto.com Exchange (crypto.com/exchange)</h4>
<p class="mut">This is the Exchange, not the Crypto.com App. Your account must be verified. Fund it by moving USD or crypto over from the App, or with an ACH Instant Deposit on the Exchange. Make sure the money shows in your Exchange spot balance first.</p>
<ol><li><b>Log in</b> at crypto.com/exchange.</li>
<li><b>Click Trade, then Spot,</b> and pick your pair, for example BTC/USD.</li>
<li><b>In the order panel,</b> click <b>Buy</b> and choose <b>Limit</b>.</li>
<li><b>Enter your price</b> at or slightly below the highest bid.</li>
<li><b>Enter the quantity</b> or the dollar amount. The minimum order is $1.</li>
<li><b>Turn on Post Only</b> and set <i>Time in Force</i> to <b>GTC</b>.</li>
<li><b>Click Buy BTC</b> (it names your coin), review, and confirm.</li>
<li><b>Track it</b> under <b>Open Orders</b> below the chart, where you can cancel it.</li></ol>
<h4>Selling with a limit order</h4>
<p>Same steps with three changes: choose <b>Sell</b>, set your price at or slightly <b>above</b> the lowest ask, and keep <b>Post Only</b> on.</p>
<div class="box"><b class="l">Before-you-click checklist</b><ul style="margin:0"><li>Am I on Kraken Pro or the Crypto.com Exchange, not a simple app buy screen?</li><li>Is the order type Limit, and did I pick Buy or Sell correctly?</li><li>Is my buy price below the current price, or my sell price above it?</li><li>Is Post Only on, and Time in Force set to GTC?</li><li>Did I double-check the quantity and dollar total? An extra zero is the most expensive typo in crypto.</li></ul></div>
<p class="mut">If an order doesn't fill, the price hasn't reached your number yet. Leave it, move it closer, or cancel for free. If a Post Only order vanishes right away, your price would have filled instantly, so the exchange canceled it; move your price a little further from the market and try again. Fees are starting-tier rates as of November 2026.</p>`},
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
{id:'borrow',cat:'Money',ic:'loan',title:'Borrowing against your crypto',blurb:'Get cash without selling. How loans work, where to borrow and how to stay safe.',links:[['https://www.coinbase.com/loans','Coinbase loans'],['https://ledn.io','Ledn'],['https://archlending.com/crypto-loans','Arch Lending']],body:`
<p>Pledge crypto as collateral and borrow against it. You keep the coins and their upside, and borrowing itself is not taxable.</p>
<ol><li>You lock crypto, such as Bitcoin, as collateral.</li><li>You borrow a percentage of its value, the <b>loan-to-value (LTV)</b>. $25,000 against $100,000 is 25% LTV.</li><li>Interest accrues. Some lenders need no monthly payments.</li><li>If prices fall and LTV passes the limit, your collateral is sold automatically (<b>liquidated</b>). That counts as a sale for taxes.</li></ol>
<h4>Where U.S. customers can borrow</h4>
<ul><li><b>Coinbase:</b> borrow USDC against Bitcoin (up to $5 million) and other coins. Rates advertised from around 5% to 6%, variable or fixed. Liquidation at 86% LTV. Not in New York.</li>
<li><b>Kraken Flexline:</b> fixed 10% to 25% APR, two days to two years, for qualified high-net-worth Kraken Pro users.</li>
<li><b>Uphold, Arch and Figure:</b> also lend against Ethereum, and Uphold and Arch against XRP.</li>
<li><b>Specialist lenders</b> such as Ledn: fixed Bitcoin-backed loans around 9% to 12% APR at up to 50% LTV.</li></ul>
<div class="box warn"><b class="l">Borrow conservatively</b>Crypto can fall 50% or more in a bad year. At 25% LTV on Coinbase, your collateral would have to fall about 70% before liquidation. Set price alerts and be ready to add collateral or repay.</div>
<h4>Don't have Bitcoin?</h4><p>You don't need to swap. See the lessons on <a href="#borrow-xrp">borrowing against XRP</a>, <a href="#borrow-eth">Ethereum</a>, <a href="#borrow-sol">Solana</a>, and <a href="#borrow-more">Dogecoin, Cardano, Litecoin and more</a>.</p>`},
{id:'borrow-xrp',cat:'Money',ic:'loan',title:'Borrowing against XRP',blurb:'Keep your XRP and borrow cash or USDC on Coinbase, Uphold, Arch or Flare. No swap to Bitcoin needed.',links:[['https://www.coinbase.com/loans','Coinbase loans'],['https://uphold.com/en-us/exa-card','Uphold Instant Credit'],['https://archlending.com/crypto-loans','Arch Lending'],['https://flare.network','Flare Network']],body:`
<p>You don't have to swap XRP into Bitcoin to borrow. Since 2026, four kinds of places accept XRP itself as collateral. Rates and rules change often, so treat these numbers as a starting point and check the lender's site before you apply.</p>
<div class="tbl"><table><thead><tr><th>Where</th><th>You get</th><th>How much you can borrow</th><th>Interest</th></tr></thead><tbody>
<tr><td><b>Coinbase</b></td><td>USDC, up to $100,000</td><td>Up to 49% of your XRP's value. Liquidation at 62.5%.</td><td>Variable, set by the Morpho lending market. No fixed payment schedule.</td></tr>
<tr><td><b>Uphold</b> Instant Credit</td><td>USDC or dollars in your Uphold account, or spending on the Exa Visa credit card</td><td>Set in the app</td><td>Fixed when you borrow, from 4.28% APR. No credit check, no early repayment penalty. Select U.S. states only.</td></tr>
<tr><td><b>Arch Lending</b></td><td>USD or USDC, loans up to 12 months</td><td>Starts at 45% for XRP</td><td>About 13.5% interest plus a 1.5% origination fee for $25,000 to $2 million</td></tr>
<tr><td><b>Flare Network</b> (DeFi)</td><td>Stablecoins such as USDT0</td><td>Set by each lending pool</td><td>Variable. Borrow rates rise when a pool is busy.</td></tr></tbody></table></div>
<h4>The easiest route: Coinbase</h4>
<ol><li>Hold your XRP in your Coinbase account.</li><li>Open the app and go to <b>Borrow</b> (or visit coinbase.com/loans).</li><li>Pick XRP as collateral, enter the amount, and review the liquidation price.</li><li>USDC lands in your account in about a minute. Convert it to dollars and withdraw to your bank if you need cash.</li><li>Repay any time, in part or in full. Your XRP comes back when the loan is paid.</li></ol>
<p>Coinbase loans are open to eligible U.S. customers except New York residents.</p>
<h4>Uphold, if your XRP already lives there</h4><p>Uphold's loans run through the Exactly Protocol. Your XRP is deposited as collateral and you can take USDC, convert it to dollars, or spend on the Exa card. The rate is locked when you borrow. Deferring payments is allowed, but it raises the total you pay, and late payments add default interest.</p>
<h4>Arch Lending, for larger fixed loans</h4><p>Arch is a U.S. lender that holds collateral with Anchorage Digital, a qualified custodian. XRP loans cost more than its Bitcoin loans and start at a lower LTV. One review site lists Hawaiʻi among the states Arch doesn't serve, so confirm your state on its site before applying.</p>
<h4>Flare and FXRP, for experienced users</h4><p>Flare lets you turn XRP into <b>FXRP</b>, a token that tracks XRP on the Flare blockchain. You can then use FXRP as collateral on lending apps such as <b>Kinetic</b>, or on Morpho markets through the <b>Mystic</b> app. This keeps you in control of your own wallet, but you take on bridge and smart-contract risk, gas fees and no customer support line. Start with a small amount if you try it.</p>
<h4>What about Kraken and Crypto.com?</h4><p>Kraken's Flexline loans (10% to 25% fixed APR) are only for qualified high-net-worth Kraken Pro users. We couldn't confirm a current U.S. crypto-backed loan at Crypto.com, so check the app or ask support.</p>
<div class="box warn"><b class="l">Example: how far XRP can fall</b>You put $10,000 of XRP on Coinbase and borrow $3,000, which is 30% LTV. Liquidation happens at 62.5%, so your XRP would have to fall to $4,800, a drop of about 52%. Borrow $4,900 (the 49% maximum) and a drop of only about 22% triggers liquidation. XRP has fallen more than that in a single month, so borrow well under the limit.</div>`},
{id:'borrow-eth',cat:'Money',ic:'loan',title:'Borrowing against Ethereum',blurb:'ETH has the most choices: Coinbase, Figure, Arch, Uphold, Kraken and Aave, with rates and limits side by side.',links:[['https://www.coinbase.com/loans','Coinbase loans'],['https://www.figure.com/crypto-backed-loan/crypto-loan-calculator/','Figure loan calculator'],['https://archlending.com/crypto-loans','Arch Lending'],['https://uphold.com/en-us/exa-card','Uphold Instant Credit'],['https://aave.com','Aave']],body:`
<p>After Bitcoin, Ethereum is the easiest coin to borrow against. Lenders treat it as less risky than smaller coins, so you can usually borrow a larger share of its value.</p>
<div class="tbl"><table><thead><tr><th>Where</th><th>Limits</th><th>Interest</th><th>Good to know</th></tr></thead><tbody>
<tr><td><b>Coinbase</b></td><td>Up to $1 million in USDC. Up to 75% LTV, liquidation at 86%.</td><td>Variable, set by Morpho</td><td>Fastest. Repay anytime. Not in New York.</td></tr>
<tr><td><b>Figure</b></td><td>Up to 75% LTV, 12-month term</td><td>Fixed: 8.91% (9.999% APR) at 50% LTV, 11.50% (12.62% APR) up to 75%</td><td>Paid in dollars. Not offered in DC, ID, IL, KY, MD, MS, SD, TX, VT or VA.</td></tr>
<tr><td><b>Arch Lending</b></td><td>Starts at 55% LTV. Margin call at 65%, partial liquidation at 75%. $5,000 minimum.</td><td>Fixed, 10.49% APR for 12-month loans under $250,000</td><td>Check your state; Hawaiʻi may not be served.</td></tr>
<tr><td><b>Uphold</b></td><td>Set in the app</td><td>Fixed, from 4.28% APR</td><td>Select U.S. states</td></tr>
<tr><td><b>Kraken Flexline</b></td><td>Two days to two years</td><td>Fixed, 10% to 25% APR</td><td>Qualified high-net-worth Kraken Pro users only</td></tr>
<tr><td><b>Aave</b> (DeFi)</td><td>About 80.5% max LTV, liquidation threshold 83% (mid-2026)</td><td>Variable, changes with demand</td><td>You use your own wallet. No company, no support line.</td></tr></tbody></table></div>
<h4>Fixed or variable?</h4><ul><li><b>Fixed</b> (Figure, Arch, Uphold, Kraken): your rate won't move, so you know the cost up front.</li><li><b>Variable</b> (Coinbase, Aave): often cheaper to start, but can jump when many people want to borrow. One DeFi guide gives the example of a 3% rate reaching 15% during market turmoil.</li></ul>
<h4>Aave and the "health factor"</h4><p>On Aave you deposit ETH, then borrow USDC against it. The app shows a <b>health factor</b>: your collateral times the liquidation threshold, divided by your debt. Above 1 is safe. At 1 or below, part of your ETH is sold. Aim to keep it above 2. Aave is for people comfortable with self-custody wallets and network fees.</p>
<div class="box warn"><b class="l">Example</b>You put $20,000 of ETH on Coinbase and borrow $5,000, or 25% LTV. With liquidation at 86%, ETH would have to fall about 71% before your coins are sold. Borrow the full 75% and a drop of only about 13% does it.</div>`},
{id:'borrow-sol',cat:'Money',ic:'loan',title:'Borrowing against Solana',blurb:'Where U.S. holders can borrow against SOL today, what it costs, and why the big Solana app is off-limits.',links:[['https://www.figure.com/crypto-backed-loan/crypto-loan-calculator/','Figure loan calculator'],['https://archlending.com/crypto-loans','Arch Lending'],['https://kamino.com','Kamino (non-U.S.)']],body:`
<p>Fewer lenders take Solana, mostly because it swings more in price than Bitcoin or Ethereum. In the U.S. there are two main choices.</p>
<div class="tbl"><table><thead><tr><th>Where</th><th>Limits</th><th>Interest</th></tr></thead><tbody>
<tr><td><b>Figure</b></td><td>Up to 75% LTV, 12-month term, paid in dollars</td><td>8.91% (9.999% APR) at 50% LTV, 11.50% (12.62% APR) up to 75%</td></tr>
<tr><td><b>Arch Lending</b></td><td>Starts at 45% LTV. Margin call at 55%, partial liquidation at 65%. $5,000 minimum.</td><td>10.49% APR for 12-month loans under $250,000</td></tr></tbody></table></div>
<p>Figure also offers optional <b>Liquidation Protection</b> in some states: you pay a fee up front and avoid margin calls from price moves during the loan. Ask whether it is available where you live.</p>
<h4>What about Coinbase?</h4><p>Coinbase's loan list covers Bitcoin, Ethereum, XRP, Dogecoin, Cardano and Litecoin. Solana wasn't on it as of this writing.</p>
<h4>Kamino, the big Solana lending app</h4><p>Kamino is Solana's largest lending market. You deposit SOL and borrow USDC, at up to about 75% LTV. However, its terms of use bar U.S. persons, so U.S. residents shouldn't use it. Large institutions can borrow against staked SOL through Anchorage Digital and Kamino while the coins stay in regulated custody, but that isn't open to individuals.</p>
<div class="box warn"><b class="l">Example with Arch</b>You put up $20,000 of SOL and borrow $6,000, or 30% LTV. A margin call comes if SOL falls about 45%, to roughly $10,900. If you don't add collateral or repay, part of your SOL is sold when it falls about 54%. Solana has dropped that much more than once, so keep your loan small and set a price alert.</div>`},
{id:'borrow-more',cat:'Money',ic:'loan',title:'Dogecoin, Cardano, Litecoin and more',blurb:'Which coins you can borrow against, and where, with a one-page cheat sheet and a checklist.',links:[['https://www.coinbase.com/loans','Coinbase loans'],['https://nexo.com','Nexo'],['https://archlending.com/crypto-loans','Arch Lending'],['https://ledn.io','Ledn']],body:`
<h4>Dogecoin, Cardano and Litecoin</h4><p>Coinbase accepts DOGE, ADA and LTC on the same terms as XRP: up to $100,000 in USDC, up to 49% LTV, liquidation at 62.5%, variable rate.</p>
<h4>Nexo: 100+ coins</h4><p>Nexo returned to the U.S. on February 16, 2026, working through licensed U.S. partners including Bakkt. It offers credit lines against Bitcoin, Ethereum and 100+ other tokens and advertises rates from 2.9% APR, usually for the best loyalty tier. Nexo left the U.S. in 2022 and later paid a $45 million settlement with regulators, so read its current U.S. terms carefully.</p>
<h4>Gold tokens</h4><p>Arch also lends against PAX Gold (PAXG) and Tether Gold (XAUT), starting at 75% LTV.</p>
<h4>Cheat sheet: which coin, where</h4>
<div class="tbl"><table><thead><tr><th>Coin</th><th>U.S. places to borrow</th></tr></thead><tbody>
<tr><td>Bitcoin</td><td>Coinbase, Uphold, Arch, Figure, Ledn, Strike, Kraken Flexline</td></tr>
<tr><td>Ethereum</td><td>Coinbase, Uphold, Arch, Figure, Kraken Flexline, Aave</td></tr>
<tr><td>XRP</td><td>Coinbase, Uphold, Arch, Flare (FXRP)</td></tr>
<tr><td>Solana</td><td>Figure, Arch</td></tr>
<tr><td>Dogecoin, Cardano, Litecoin</td><td>Coinbase</td></tr>
<tr><td>Many smaller coins</td><td>Nexo</td></tr></tbody></table></div>
<h4>Before you borrow</h4><ol><li><b>Check your state.</b> Several lenders skip some states. Look for yours on the lender's site.</li><li><b>Compare the APR,</b> not just the interest rate. APR includes origination fees.</li><li><b>Borrow 25% to 30% LTV or less,</b> especially with smaller coins.</li><li><b>Know your liquidation price</b> and set a price alert above it.</li><li><b>Plan your repayment.</b> Variable rates can rise, and unpaid interest grows the loan.</li><li><b>Remember taxes.</b> Borrowing isn't taxable, but a liquidation is a sale.</li></ol>
<div class="box"><b class="l">Smaller coins, smaller loans</b>Lenders let you borrow less against XRP, DOGE, ADA, LTC and SOL than against Bitcoin because these coins can fall faster. That is a hint to be even more careful.</div>`},
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
{id:'tangem',cat:'Basics',ic:'card',title:'Tangem: the tap-to-sign card wallet',blurb:'A cold wallet the size of a credit card. Tap it to your phone to approve. No battery, no cables, seed phrase optional.',links:[['https://tangem.com','Visit Tangem']],body:`
<p><b>Tangem</b> is a hardware (cold) wallet made by Tangem AG of Zug, Switzerland, founded in 2017. Instead of a gadget with buttons and a screen, it is a set of <b>credit-card-sized cards</b>, or a ring, with a secure chip inside. You tap a card to the back of your phone to approve each transaction. It is one of the most popular cold wallets for everyday people because it is simple and inexpensive.</p>
<h4>How it works</h4>
<ul><li><b>Secure chip:</b> each card has a certified EAL6+ secure element (the same class of chip used in passports and bank cards), developed with Samsung. Your private key is created inside the card and never leaves it.</li>
<li><b>NFC tap:</b> the card talks to your phone wirelessly when you hold it near. It has no battery; the phone powers it during the tap.</li>
<li><b>Backup cards:</b> a set comes with 2 or 3 cards that all hold the same wallet. If one card is lost, any other card in the set still works.</li>
<li><b>Seed phrase optional:</b> by default there are no words to write down. Newer cards also let you create a standard 12 or 24-word recovery phrase if you want a Ledger or Trezor-style backup too.</li>
<li><b>Phone only:</b> it works through the free Tangem app on an NFC-capable iPhone or Android phone. There is no desktop app.</li></ul>
<h4>What it costs (U.S. store, November 2026)</h4>
<div class="tbl"><table><thead><tr><th>Pack</th><th class="n">Price</th><th>Notes</th></tr></thead><tbody>
<tr><td>2-card set</td><td class="n">$54.90 to $59.90</td><td>One main card and one backup</td></tr>
<tr><td>3-card set</td><td class="n">$69.90</td><td>The best choice for most people: two backups</td></tr>
<tr><td>Tangem Ring + 2 cards</td><td class="n">About $140 to $160</td><td>A ceramic ring with the same chip, worn on your finger</td></tr></tbody></table></div>
<p class="mut">No subscription. Cards carry a 25-year warranty and are water and dust resistant. Prices change; check tangem.com.</p>
<h4>Setting it up</h4>
<ol><li>Install the <b>Tangem</b> app from the official App Store or Google Play listing.</li>
<li>Open the app and hold your first card flat against the back of your phone until it reads.</li>
<li>Choose <b>Create wallet</b>. The keys are generated inside the card.</li>
<li>Choose how to back up: <b>backup cards</b> (scan each extra card when asked) and, if you want, also <b>generate a seed phrase</b> and write the words on paper.</li>
<li>Set an <b>access code</b>. You will enter it when you use a card, so a stolen card is useless without it. Write it down and keep it safe.</li>
<li>To receive, tap the coin, then <b>Receive</b>, and share the address. To send, enter the details and <b>tap your card</b> to approve.</li>
<li>Store the backup cards in <b>different safe places</b>, such as a home safe and a safe deposit box.</li></ol>
<div class="box warn"><b class="l">Know the limits</b>If you lose <b>every</b> card and did not create a seed phrase, the crypto is gone for good. With a 2-card set, losing one card and forgetting your access code can also lock you out, which is why the 3-card set is recommended. The card has no screen, so you check addresses on your phone, and its firmware is closed-source (it has been independently audited instead). Buy only from tangem.com or an authorized reseller.</div>
<h4>Tangem vs. Ledger and Trezor</h4>
<div class="tbl"><table><thead><tr><th></th><th>Tangem</th><th>Ledger / Trezor</th></tr></thead><tbody>
<tr><td><b>Price</b></td><td>About $55 to $70</td><td>About $59 to $399</td></tr>
<tr><td><b>Backup</b></td><td>Extra cards; seed optional</td><td>12 to 24-word seed phrase</td></tr>
<tr><td><b>Screen</b></td><td>No (uses your phone)</td><td>Yes, on the device</td></tr>
<tr><td><b>Works with</b></td><td>Phone only</td><td>Computer and phone</td></tr>
<tr><td><b>Best for</b></td><td>Simple, low-cost cold storage</td><td>Larger holdings, more control</td></tr></tbody></table></div>`},
{id:'multisig',cat:'Security',ic:'shield',title:'Multisig and split backups: no single point of failure',blurb:'Require 2 of 3 keys to move your crypto, or split a backup into pieces. How it works and who offers it.',links:[['https://casa.io','Casa'],['https://www.unchained.com','Unchained']],body:`
<p>A normal wallet has one recovery phrase. If someone steals it, they take everything. If you lose it, it is gone. That one phrase is a <b>single point of failure</b>. There are two ways to remove it.</p>
<h4>1. Multisig (multi-signature)</h4>
<p>A multisig wallet needs <b>several separate keys</b> to approve a transaction. The most common setup is <b>2-of-3</b>: there are three keys, each on its own device with its own recovery phrase, and any two of them can move the money.</p>
<ul><li><b>A thief</b> who steals one key, or one recovery phrase, still cannot spend anything.</li><li><b>If you lose</b> one key, the other two can still move your funds to safety.</li><li>Keys are kept in <b>different places</b>, such as one at home, one in a safe deposit box, and one with a trusted company.</li></ul>
<h4>2. Split backups (Shamir backup)</h4>
<p>This is different from multisig. You still have <b>one wallet</b>, but its backup is split into several shares, for example 3 shares where any 2 can rebuild the wallet. Trezor's Safe models offer this as <b>multi-share backup</b>. One share alone reveals nothing.</p>
<div class="box warn"><b class="l">Don't cut your 24 words in half yourself</b>Splitting a normal recovery phrase by hand (words 1 to 12 in one place, 13 to 24 in another) is risky. Each half gives a thief a big head start, and losing either half can lock you out. Use a real multisig wallet or Shamir backup instead.</div>
<h4>Where to get multisig</h4>
<div class="tbl"><table><thead><tr><th>Service</th><th>Setup</th><th class="n">Cost</th><th>Notes</th></tr></thead><tbody>
<tr><td><b>Casa</b></td><td>2-of-3 (you hold 2, Casa holds 1 backup key); 3-of-5 on Premium</td><td class="n">About $250/yr; Premium about $2,100/yr</td><td>Easiest phone app; Bitcoin, also Ethereum</td></tr>
<tr><td><b>Unchained</b></td><td>2-of-3 (you hold 2 on hardware wallets, Unchained holds 1)</td><td class="n">About $250/yr per vault</td><td>Bitcoin only; also offers Bitcoin IRAs and inheritance help</td></tr>
<tr><td><b>Nunchuk</b></td><td>Do it yourself, or assisted 2-of-3</td><td class="n">Free; assisted from about $120/yr</td><td>Bitcoin; phone and desktop</td></tr>
<tr><td><b>Sparrow Wallet</b></td><td>Do it yourself with your own hardware wallets</td><td class="n">Free</td><td>Bitcoin; desktop; for confident users</td></tr></tbody></table></div>
<p class="mut">With Casa and Unchained the company holds only a backup key. It cannot move your coins by itself, and you can still spend if the company disappears. Prices as of 2026; check each site.</p>
<h4>Is it right for you?</h4>
<p>Multisig adds steps and usually a yearly fee. It makes the most sense for <b>larger amounts you plan to hold for years</b>, mainly Bitcoin. For smaller amounts, one well-protected hardware wallet (Ledger, Trezor or Tangem) is usually enough.</p>`},
{id:'custody',cat:'Security',ic:'lock',title:'Custody explained: exchange, self, premium and institutional',blurb:'Who actually holds your crypto? The four kinds of custody, what a qualified custodian is, and options for businesses and trusts.',links:[['https://www.itrustcapital.com','iTrustCapital']],body:`
<p><b>Custody</b> means who holds the keys that control your crypto. There are four main kinds.</p>
<div class="tbl"><table><thead><tr><th>Type</th><th>Who holds the keys</th><th>Examples</th><th>Main risk</th></tr></thead><tbody>
<tr><td><b>Exchange custody</b></td><td>The exchange</td><td>Kraken, Coinbase, Uphold, Crypto.com accounts</td><td>Hacks, account takeovers, or the company failing</td></tr>
<tr><td><b>Self-custody</b></td><td>You alone</td><td>Exodus, Ledger, Trezor, Tangem</td><td>Losing your recovery phrase or cards</td></tr>
<tr><td><b>Collaborative custody</b></td><td>You plus a company (multisig)</td><td>Casa, Unchained</td><td>More steps; yearly fee</td></tr>
<tr><td><b>Qualified / institutional custody</b></td><td>A regulated bank or trust company</td><td>Coinbase Custody, BitGo, Anchorage Digital, Fidelity Digital Assets, Kraken Custody</td><td>You can't move coins to your own wallet; fees</td></tr></tbody></table></div>
<h4>What is a qualified custodian?</h4>
<p>A <b>qualified custodian</b> is a regulated bank or trust company allowed to hold other people's assets. It keeps each client's crypto <b>separate</b>, mostly in <b>offline cold storage</b>, is examined by regulators and outside auditors, and usually carries insurance. Assets are typically held so they stay the client's property even if the custodian goes bankrupt. Investment advisers, crypto ETFs and many funds are required to use one.</p>
<ul><li><b>Coinbase Custody</b> (part of Coinbase Prime): holds the Bitcoin for many of the U.S. spot Bitcoin ETFs.</li>
<li><b>BitGo:</b> a trust company serving institutions since 2013, with up to $250 million of insurance on assets in qualified custody.</li>
<li><b>Anchorage Digital:</b> in 2021 it became the first crypto company with a federal (OCC) national trust charter.</li>
<li><b>Fidelity Digital Assets:</b> the crypto custody arm of Fidelity Investments.</li>
<li><b>Kraken Custody:</b> launched in 2024 through Kraken Financial, Kraken's Wyoming state-chartered bank, for institutional clients.</li></ul>
<p class="mut">These services are built for institutions, funds and wealthy clients, usually with large minimums and custom pricing. Most individuals reach institutional-grade custody through a platform that uses these partners.</p>
<h4>Premium custody for individuals: iTrustCapital</h4>
<ul><li><b>Premium Custody Account (PCA):</b> a regular (non-IRA, taxable) account to buy, sell and hold crypto 24/7 with institutional custody behind it. It uses a <b>closed-loop</b> system: money goes in and out only as U.S. dollars to your own bank account. Crypto can't be sent to an outside wallet, which helps protect you if your login is ever stolen. Fees are similar to the 1% IRA trading fee.</li>
<li><b>Crypto IRA:</b> the tax-advantaged retirement account (see the Roth IRA lesson).</li>
<li><b>Treasury Account:</b> for <b>businesses, trusts and non-profits</b>. Fund it by bank wire or by depositing crypto in kind; withdrawals go only to the entity's U.S. bank account. Opening one requires the entity's legal name and federal tax ID (FEIN).</li></ul>
<p class="mut">iTrustCapital is a technology platform; it states it is not itself a custodian and holds assets through regulated bank, trust and institutional storage partners.</p>
<h4>Which is right for you?</h4>
<ul><li><b>Spending money and active trading:</b> an exchange account.</li><li><b>Long-term savings you control:</b> a hardware wallet (self-custody).</li><li><b>Large Bitcoin holdings:</b> collaborative multisig.</li><li><b>Hands-off, no keys to manage, or holding for a business or trust:</b> a premium or institutional custody account.</li></ul>`},
{id:'inheritance',cat:'Security',ic:'gift',title:'Crypto inheritance: making sure your family can get it',blurb:'If something happens to you, can your family reach your crypto? A simple plan that keeps it safe and findable.',body:`
<p>Crypto has no "forgot password" button. If you pass away or become unable to manage your accounts and nobody knows how to reach your crypto, it can be lost forever. A little planning prevents that without putting your coins at risk today.</p>
<h4>1. Make an inventory (no secrets in it)</h4>
<ul><li>List every place you hold crypto: exchanges (Kraken, Coinbase, Uphold, Crypto.com), wallets (Exodus, Ledger, Trezor, Tangem), and IRAs or custody accounts (iTrustCapital).</li>
<li>Note roughly what is in each and how to contact the company.</li>
<li>Note <b>where</b> the recovery phrases, hardware wallets, backup cards and PINs are kept, but <b>not the words or codes themselves</b>.</li></ul>
<h4>2. Write a letter of instruction</h4>
<p>A plain-English letter to your family explaining what each item is and the steps to reach it, written as if they know nothing about crypto. Point them to this site. Keep it with your estate papers.</p>
<h4>3. Keep the keys safe but findable</h4>
<ul><li>Store recovery phrases (or Tangem backup cards) in secure places such as a home safe or safe deposit box, and make sure a trusted person or your executor can access them when the time comes.</li>
<li><b>Never put recovery phrases in a will.</b> Wills can become public during probate, and anyone who reads the words can take the crypto.</li>
<li>If you use a passphrase or access code, record where it is kept, separately from the recovery phrase.</li></ul>
<h4>4. Use the tools built for this</h4>
<ul><li><b>Name beneficiaries</b> wherever an account allows it. IRAs, including crypto IRAs, always let you name beneficiaries; ask each company about its other accounts.</li>
<li>Exchanges have an <b>estate process</b>: heirs usually provide a death certificate and court or trust documents to claim the account.</li>
<li>A <b>living trust</b> can hold crypto and pass it on privately without probate. iTrustCapital's Treasury Account can be opened for a trust.</li>
<li>Multisig services such as <b>Casa</b> and <b>Unchained</b> offer inheritance features that let heirs recover funds with help, without the company ever being able to take them.</li></ul>
<h4>5. Review it once a year</h4>
<p>Update the inventory when you open or close accounts or move coins. Make sure your family still knows where the letter is.</p>
<div class="box"><b class="l">Talk to a professional</b>For larger amounts, work with an estate-planning attorney who understands crypto. In Hawaiʻi, look for one licensed in the state who can set up a trust and make sure your instructions follow Hawaiʻi law.</div>`},
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
<ul><li><b>Airdrop:</b> free tokens sent to wallets; taxable as income.</li><li><b>Cold storage:</b> keys kept offline on a hardware wallet.</li><li><b>Cost basis:</b> what you paid, including fees.</li><li><b>Custodial:</b> a company holds your crypto.</li><li><b>Dollar-cost averaging:</b> buying a fixed amount on a schedule.</li><li><b>Gas or network fee:</b> the fee paid to process a transaction.</li><li><b>KYC:</b> the ID check exchanges must do.</li><li><b>Multisig:</b> a wallet that needs several keys (for example 2 of 3) to approve a transaction.</li><li><b>NFC:</b> the short-range wireless tap a Tangem card uses to talk to your phone.</li><li><b>Qualified custodian:</b> a regulated bank or trust company that holds assets for others.</li><li><b>Liquidation:</b> automatic sale of loan collateral.</li><li><b>LTV:</b> loan amount divided by collateral value.</li><li><b>Self-custody:</b> you hold your own keys.</li><li><b>Spread:</b> the hidden cost built into a price.</li><li><b>Stablecoin:</b> a token designed to hold $1.</li><li><b>Staking:</b> locking coins to help run a network for rewards.</li><li><b>Swap:</b> trading one coin for another; taxable.</li><li><b>TXID:</b> a transaction's receipt number.</li></ul>`}
];

const EX=[
{n:'Kraken',k:'Exchange',c:'#5741d9',u:'https://www.kraken.com',s:'https://support.kraken.com',d:'Founded 2011 and known for security. Three apps: Kraken for simple buys, Kraken Pro for much lower fees, and Krak for the debit card and payments.',pts:['Kraken Pro: 0.40% maker, 0.80% taker at the starting tier','Krak Card: free Visa debit, up to 2% back','Flexline loans for high-net-worth users'],tags:['Best overall pick','Low fees']},
{n:'Coinbase',k:'Exchange',c:'#0052ff',u:'https://www.coinbase.com',s:'https://help.coinbase.com',d:'The largest U.S. exchange and a public company, with the most beginner-friendly app. Use Coinbase Advanced (same login) for lower fees.',pts:['Borrow USDC against Bitcoin, from about 5% to 6%','Coinbase One Card: Amex credit, 2% to 4% in BTC','Coinbase debit card not offered in Hawaiʻi'],tags:['Easiest to start','Loans']},
{n:'Uphold',k:'Exchange',c:'#49cc68',u:'https://uphold.com',s:'https://support.uphold.com',d:'Trade anything to anything in one step: dollars to crypto, crypto to gold. Popular with XRP holders. Fees are built into the quoted price.',pts:['Essential card: no annual fee, 2% in XRP','Elite metal card: $99.99/yr, 3% to 4% in XRP','Direct deposit supported'],tags:['XRP rewards','Metals']},
{n:'Crypto.com',k:'Exchange',c:'#103f68',u:'https://crypto.com',s:'https://help.crypto.com',d:'A mobile-first app headquartered in Singapore with U.S. operations. Its CRO token powers card tiers and perks.',pts:['Visa prepaid card with a free basic tier','Higher tiers need a subscription or 12-month CRO lockup','Visa Signature credit card in the U.S.'],tags:['Card perks','Mobile app']}];
const WA=[
{n:'Exodus',k:'Hot wallet',c:'#1f1b3a',u:'https://www.exodus.com',s:'https://support.exodus.com',d:'Free, beginner-friendly self-custody wallet from a U.S. company. No account or ID needed. Phone, desktop and browser extension.',pts:['12-word secret recovery phrase','Swaps, staking and hundreds of coins','Pairs with Trezor (desktop) and Ledger (mobile)'],tags:['Free','Easiest wallet']},
{n:'Ledger',k:'Cold wallet',c:'#141010',u:'https://www.ledger.com',s:'https://support.ledger.com',d:'Best-selling hardware wallet, made in France. Keys stay inside a certified secure chip; you approve every send on the device.',pts:['Nano S Plus $79, Nano X $149, Nano Gen5 $179','Flex $249, Stax $399','24-word phrase, optional passphrase; app: Ledger Wallet'],tags:['Buy only at ledger.com']},
{n:'Trezor',k:'Cold wallet',c:'#0f6148',u:'https://trezor.io',s:'https://trezor.io/support',d:'The original hardware wallet (2014), from the Czech Republic, with fully open-source firmware.',pts:['Safe 3 about $59 to $79, Safe 5 about $129 to $169','Safe 7 $249 with Bluetooth for iPhone','12, 20 or 24 words; multi-share backup; app: Trezor Suite'],tags:['Open source','Buy only at trezor.io']},
{n:'Tangem',k:'Cold wallet',c:'#0d0d0f',u:'https://tangem.com',s:'https://tangem.com/en/learning-hub/',d:'A cold wallet the size of a credit card, made in Switzerland. Tap a card to your phone to approve; backup cards replace the seed phrase.',pts:['2-card set about $55 to $60, 3-card set $69.90','Tangem Ring + 2 cards about $140 to $160','EAL6+ chip, no battery, phone app; seed phrase optional'],tags:['Easiest cold wallet','Buy only at tangem.com'],topic:'tangem'},
{n:'iTrustCapital',k:'Crypto Roth IRA',c:'#0e5a8a',u:'https://www.itrustcapital.com',s:'https://help.itrustcapital.com',d:'Hold and trade crypto, gold and silver inside a Roth, Traditional or SEP IRA. No monthly fees, 1% per crypto trade.',pts:['$1,000 minimum to open','Phone (562) 600-8399, weekdays 7 to 5 Pacific','Tax-free withdrawals after 59½ and five years'],tags:['Tax-free growth'],topic:'roth'}];

