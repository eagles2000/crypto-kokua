/* Crypto Kōkua markets page: live tables with hover (desktop) or tap (phone) detail panels. */
(()=>{
const {$,$$}=CK, P=CKP;
const canHover=matchMedia('(hover: hover) and (pointer: fine)').matches;
const ABOUT={
 BTC:'The first cryptocurrency (2009). A fixed supply of 21 million coins makes it "digital gold" for many holders.',
 ETH:'The leading smart-contract network. Apps for lending, stablecoins, NFTs and more run on Ethereum and its layer-2 networks.',
 XRP:'The native coin of the XRP Ledger, built for fast, low-cost payments. Closely associated with Ripple.',
 SOL:'A high-speed network known for very low fees. Home to many apps, tokens and meme coins.',
 ADA:'The coin of Cardano, a research-driven network that uses peer-reviewed design and proof of stake.',
 DOGE:'Started as a joke in 2013 and became one of the most popular coins. No supply cap.',
 LTC:'One of the oldest coins (2011), often called "silver to Bitcoin\'s gold," with faster blocks and an 84 million coin cap.',
 DGB:'A fast, decentralized network launched in 2014 with a 21 billion coin cap.',
 SPX:'Tracks 500 of the largest U.S. companies. The most widely followed measure of the U.S. stock market.',
 NDX:'The Nasdaq Composite, heavy in technology companies.',
 DJI:'The Dow Jones Industrial Average: 30 large, well-known U.S. companies.',
 NVDA:'Maker of the graphics chips that power AI data centers and gaming.',
 AAPL:'Maker of the iPhone, Mac and Apple services.',
 MSFT:'Maker of Windows, Office and the Azure cloud.',
 TSLA:'Electric vehicles, batteries and energy storage. Also holds some Bitcoin.',
 COIN:'Coinbase, the largest U.S. crypto exchange. Its stock often moves with crypto prices.',
 MSTR:'Strategy (formerly MicroStrategy), the public company holding the most Bitcoin.',
 XAU:'Gold, priced per troy ounce from the futures market. A traditional store of value.',
 XAG:'Silver, priced per troy ounce. Used in industry and as a store of value.',
 XPT:'Platinum, priced per troy ounce. Used heavily in car catalytic converters and jewelry.'};
const LESSON={BTC:['borrow','Borrowing against Bitcoin'],ETH:['borrow-eth','Borrowing against Ethereum'],XRP:['borrow-xrp','Borrowing against XRP'],SOL:['borrow-sol','Borrowing against Solana'],ADA:['borrow-more','Borrowing against Cardano'],DOGE:['borrow-more','Borrowing against Dogecoin'],LTC:['borrow-more','Borrowing against Litecoin'],COIN:['more-exchanges','Compare exchanges'],MSTR:['basics','Crypto basics']};

const big=v=>v==null?'n/a':v>=1e12?'$'+(v/1e12).toFixed(2)+'T':v>=1e9?'$'+(v/1e9).toFixed(1)+'B':v>=1e6?'$'+(v/1e6).toFixed(1)+'M':'$'+Math.round(v).toLocaleString('en-US');
const num=v=>v==null?'n/a':v>=1e9?(v/1e9).toFixed(2)+'B':v>=1e6?(v/1e6).toFixed(2)+'M':Math.round(v).toLocaleString('en-US');
const chip=(lab,v)=>v==null?'':`<span class="chg ${v>=0?'up':'down'}"><em>${lab}</em>${P.pct(v)}</span>`;
const range=(lab,lo,hi,p,a)=>{if(lo==null||hi==null||hi<=lo)return'';const k=Math.max(0,Math.min(1,(p-lo)/(hi-lo)));
 return `<div class="rng"><div class="rl"><span>${lab}</span></div><div class="bar"><i style="width:${(k*100).toFixed(1)}%"></i><b style="left:${(k*100).toFixed(1)}%"></b></div><div class="rv2"><span>${P.fmt(a,lo)}</span><span>${P.fmt(a,hi)}</span></div></div>`};
const tile=(lab,val,sub='')=>`<div class="st"><span>${lab}</span><b>${val}</b>${sub?`<small>${sub}</small>`:''}</div>`;

function chart(a){const w=560,h=150,arr=a.spark||[];if(arr.length<2)return'';
 const mn=Math.min(...arr),mx=Math.max(...arr),col=arr[arr.length-1]>=arr[0]?'#22c55e':'#ef4444';const d=P.sparkPath(arr,w,h);
 return `<svg class="bigc" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="bg${a.k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${col}" stop-opacity=".32"/><stop offset="1" stop-color="${col}" stop-opacity="0"/></linearGradient></defs><path d="${d} L${w} ${h} L0 ${h}Z" fill="url(#bg${a.k})"/><path class="ln" d="${d}" fill="none" stroke="${col}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" pathLength="1"/></svg>
 <div class="cl"><span>High ${P.fmt(a,mx)}</span><span>Low ${P.fmt(a,mn)}</span></div>`}

function panel(a){
 const crypto=a.g==='crypto', m=a.m, q=a.q;
 let stats='',chips='',ranges='';
 if(crypto&&m){
  chips=chip('1h',m.c1h)+chip('24h',a.ch)+chip('7d',m.c7)+chip('30d',m.c30)+chip('1y',m.c1y);
  ranges=range('24-hour range',m.lo,m.hi,a.p,a)+(m.ath?range('Price vs. all-time high',0,m.ath,a.p,a):'');
  const sup=m.circ?num(m.circ)+' '+a.k:'n/a', supSub=m.max?`of ${num(m.max)} max (${(m.circ/m.max*100).toFixed(1)}%)`:'No maximum supply';
  stats=tile('Market cap',big(m.mc),m.rank?`Rank #${m.rank}`:'')+tile('24h trading volume',big(m.vol))+tile('All-time high',P.fmt(a,m.ath),m.athd?`${new Date(m.athd).toLocaleDateString('en-US',{month:'short',year:'numeric'})} · ${m.athp.toFixed(1)}% from it`:'')+tile('Circulating supply',sup,supSub);
 }else if(!crypto&&q){
  chips=chip('Today',a.ch);
  ranges=range("Today's range",q.dayLow,q.dayHigh,a.p,a)+range('52-week range',q.yearLow,q.yearHigh,a.p,a);
  stats=tile('Previous close',q.prevClose!=null?P.fmt(a,q.prevClose):'n/a')+tile('52-week high',q.yearHigh!=null?P.fmt(a,q.yearHigh):'n/a',q.yearHigh?`${((a.p/q.yearHigh-1)*100).toFixed(1)}% from it`:'')+(q.volume?tile('Volume today',num(q.volume)):'')+(q.exchange?tile('Market',q.exchange):'');
 }else{
  chips=chip('24h',a.ch);
  stats=`<p class="mut small" style="grid-column:1/-1;margin:0">More details appear once live prices load.</p>`;
 }
 const cg=P.url(a), cmc=crypto?P.cmc(a):null, les=LESSON[a.k];
 const btns=(crypto?`<a class="btn pri sm" href="${cg}" target="_blank" rel="noopener">CoinGecko ↗</a>${cmc?`<a class="btn sm" href="${cmc}" target="_blank" rel="noopener">CoinMarketCap ↗</a>`:''}`:`<a class="btn pri sm" href="${cg}" target="_blank" rel="noopener">Yahoo Finance ↗</a>`)+(les?`<button class="btn sm ghost2" data-open="${les[0]}">Lesson: ${les[1]}</button>`:'');
 const span=crypto?'Last 7 days':a.g==='stocks'?'Today':'Today';
 return `<div class="dxc">
  <div class="dxh"><div><h3>${a.n} <span class="mut">${a.k}</span></h3><div class="chips">${chips}</div></div><div class="dxp"><b>${P.fmt(a)}</b>${a.unit?'<small>per troy ounce</small>':''}</div></div>
  <div class="dxg"><div class="dxchart"><div class="cap">${span}</div>${chart(a)}${ranges}</div><div class="stats">${stats}</div></div>
  <p class="about">${ABOUT[a.k]||''}</p>
  <div class="act">${btns}</div></div>`}

/* build tables */
$$('[data-group]').forEach(t=>{const g=t.dataset.group;
 t.innerHTML='<thead><tr><th>Asset</th><th class="n">Price</th><th class="n">Change</th><th class="n hide-sm">Trend</th></tr></thead><tbody>'+
 P.assets.filter(a=>a.g===g).map((a,i)=>`<tr class="mrow" data-k="${a.k}" tabindex="0" aria-expanded="false" style="--d:${i*45}ms"><td><div class="who"><span class="coin" data-coin="${a.k}"></span><div><a href="${P.url(a)}" target="_blank" rel="noopener">${a.n}</a><span>${a.k}${a.unit?' · per ounce':''} · <span class="ext">${canHover?'hover or click for details':'tap for details'}</span></span></div></div></td><td class="n"><b data-px="${a.k}"></b></td><td class="n"><b data-ch="${a.k}"></b></td><td class="n hide-sm"><svg class="spark" data-spark="${a.k}" width="110" height="34" viewBox="0 0 110 34" preserveAspectRatio="none"></svg></td></tr>
 <tr class="dx" data-dx="${a.k}"><td colspan="4"><div class="dxw"><div class="dxi"></div></div></td></tr>`).join('')+'</tbody>'});

let openK=null,tOpen=null,tClose=null;
const rowOf=k=>$(`.mrow[data-k="${k}"]`), dxOf=k=>$(`.dx[data-dx="${k}"]`);
function open(k){if(openK===k)return;if(openK)close(openK);const a=P.by(k),dx=dxOf(k);if(!a||!dx)return;
 dx.querySelector('.dxi').innerHTML=panel(a);dx.classList.add('open');rowOf(k).classList.add('on');rowOf(k).setAttribute('aria-expanded','true');openK=k}
function close(k){const dx=dxOf(k);if(dx)dx.classList.remove('open');const r=rowOf(k);if(r){r.classList.remove('on');r.setAttribute('aria-expanded','false')}if(openK===k)openK=null}
document.addEventListener('ck:prices',()=>{if(openK){const a=P.by(openK),dx=dxOf(openK);if(a&&dx){const c=dx.querySelector('.dxi');const y=scrollY;c.innerHTML=panel(a);c.querySelectorAll('.ln').forEach(l=>l.style.animation='none');scrollTo(0,y)}}});

/* hover opens on any mouse, even on touchscreen laptops; taps toggle */
let lastPointer=canHover?'mouse':'touch';
document.addEventListener('pointerdown',e=>{lastPointer=e.pointerType||'mouse'},true);
$$('.mrow').forEach(r=>{const k=r.dataset.k;
 r.addEventListener('pointerenter',e=>{if(e.pointerType!=='mouse')return;lastPointer='mouse';clearTimeout(tClose);clearTimeout(tOpen);tOpen=setTimeout(()=>open(k),220)});
 r.addEventListener('mouseenter',()=>{if(lastPointer!=='mouse')return;clearTimeout(tClose);clearTimeout(tOpen);tOpen=setTimeout(()=>open(k),220)});
 r.addEventListener('mouseleave',()=>clearTimeout(tOpen))});
$$('.mtable').forEach(t=>t.addEventListener('mouseleave',()=>{if(lastPointer!=='mouse')return;clearTimeout(tOpen);tClose=setTimeout(()=>{if(openK)close(openK)},600)}));
$$('.dx').forEach(d=>d.addEventListener('mouseenter',()=>{clearTimeout(tClose);clearTimeout(tOpen)}));
document.addEventListener('click',e=>{const r=e.target.closest('.mrow');if(!r||e.target.closest('a'))return;const k=r.dataset.k;
 if(lastPointer==='mouse'&&openK===k){window.open(P.url(P.by(k)),'_blank','noopener')}else{openK===k?close(k):open(k)}});
document.addEventListener('keydown',e=>{const r=e.target.closest&&e.target.closest('.mrow');if(r&&(e.key==='Enter'||e.key===' ')){e.preventDefault();const k=r.dataset.k;openK===k?close(k):open(k)}});

/* market pulse */
async function pulse(){const box=$('#pulse');if(!box)return;
 const cr=P.assets.filter(a=>a.g==='crypto');const best=[...cr].sort((x,y)=>y.ch-x.ch)[0],worst=[...cr].sort((x,y)=>x.ch-y.ch)[0];
 let g=null;try{const r=await fetch('https://api.coingecko.com/api/v3/global',{cache:'no-store'});if(r.ok)g=(await r.json()).data}catch(e){}
 const card=(lab,val,sub,cls='')=>`<div class="pc2 rv in"><span>${lab}</span><b class="${cls}">${val}</b><small>${sub}</small></div>`;
 box.innerHTML=(g?card('Total crypto market',big(g.total_market_cap.usd),P.pct(g.market_cap_change_percentage_24h_usd)+' in 24h',g.market_cap_change_percentage_24h_usd>=0?'up':'down')+card('Bitcoin dominance',g.market_cap_percentage.btc.toFixed(1)+'%','Bitcoin\'s share of all crypto value'):card('Bitcoin',P.fmt(P.by('BTC')),P.pct(P.by('BTC').ch)+' in 24h'))+
  card('Best performer today',best.n,P.pct(best.ch),best.ch>=0?'up':'down')+card('Weakest today',worst.n,P.pct(worst.ch),worst.ch>=0?'up':'down')}
document.addEventListener('ck:prices',()=>{clearTimeout(pulse.t);pulse.t=setTimeout(pulse,200)});

P.paint();$('#rf').onclick=()=>P.refresh();pulse();
})();
