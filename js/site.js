/* Crypto Kōkua shared site script: header and mega menu, ticker, live prices, lessons dialog, read-aloud voice, search, theme, install, footer.
   To add a page to the menu, edit NAV below. To add a coin, stock or metal, edit ASSETS. */
{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const page=(location.pathname.split('/').pop()||'index.html').replace('.html','')||'index';
const svgI=p=>`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const chev='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m6 9 6 6 6-6"/></svg>';
const L=id=>{const t=T.find(x=>x.id===id);return [t.title,`learn.html#${id}`,id]};

/* ---------- navigation (edit here to grow the site) ---------- */
const NAV=[
 {label:'Learn',cols:[
   {h:'The basics',links:['basics','hot-cold','keys','safety','research','glossary'].map(L)},
   {h:'How-to guides',links:['buy','exodus-to-kraken','gift','cold-move','cash-out'].map(L)},
   {h:'Money and retirement',links:[...['cards','taxes','borrow','roth','scenarios'].map(L),['All lessons','learn.html']]}]},
 {label:'Platforms',cols:[
   {h:'Exchanges',links:[['Kraken','platforms.html#kraken','','Low fees, strong security'],['Coinbase','platforms.html#coinbase','','Easiest to start'],['Uphold','platforms.html#uphold','','Anything-to-anything trades'],['Crypto.com','platforms.html#cryptocom','','Mobile app and card perks']]},
   {h:'Wallets and IRA',links:[['Exodus','platforms.html#exodus','','Free hot wallet'],['Ledger','platforms.html#ledger','','Hardware cold wallet'],['Trezor','platforms.html#trezor','','Open-source cold wallet'],['iTrustCapital','platforms.html#itrustcapital','','Crypto Roth IRA']]},
   {h:'Compare',links:[['Debit and credit cards','platforms.html#cards','','Rewards, fees, requirements'],['Exchange comparison','platforms.html#compare','','Side by side']]}]},
 {label:'Markets',cols:[
   {h:'Live prices',links:[['Crypto','markets.html#crypto','','Bitcoin, Ethereum, XRP and more'],['Stocks and indexes','markets.html#stocks','','S&P 500, Nasdaq, NVIDIA'],['Precious metals','markets.html#metals','','Gold, silver, platinum']]},
   {h:'News',links:[['Crypto news','news.html','','Headlines from The Block, CoinDesk and more']]}]},
 {label:'Tools',cols:[
   {h:'Calculators',links:[['Sell, borrow or Roth','tools.html','','Compare your options'],['Dollar-cost averaging','#','soon','']]},
   {h:'Downloads',links:[['Free starter guide (PDF)','downloads/Crypto_Kokua_Starter_Guide.pdf','','Print it or email it'],['Install the app','#install','','Chrome, Brave, iPhone']]}]},
 {label:'Company',cols:[
   {h:'About',links:[['About Crypto Kōkua','index.html#about','','Why this site exists'],['Shaka Software LLC','https://shakasoftware.com','','Veteran-owned, Kapolei'],['Transparency','#','soon',''],['Marketplace','#','soon','']]}]}
];
const linkHTML=([t,h,id,sub])=>id==='soon'?`<a class="soon" href="#" tabindex="-1">${t}</a>`:`<a href="${h}"${id?` data-open="${id}"`:''}${/^https?:/.test(h)?' target="_blank" rel="noopener"':''}${/\.pdf$/.test(h)?' download':''}>${t}${sub?`<span>${sub}</span>`:''}</a>`;

/* ---------- header ---------- */
const hdr=document.createElement('header');hdr.className='hdr';
hdr.innerHTML=`<div class="in">
 <a class="logo" href="index.html"><img src="icons/icon.svg" alt="">Crypto Kōkua</a>
 <ul class="nav">${NAV.map((n,i)=>`<li data-i="${i}"><button class="top" aria-expanded="false">${n.label}${chev}</button><div class="mega">${n.cols.map(c=>`<div class="col"><h5>${c.h}</h5>${c.links.map(linkHTML).join('')}</div>`).join('')}</div></li>`).join('')}</ul>
 <div class="right">
  <button class="icb" id="voiceBtn" aria-label="Voice settings">${svgI('<path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>')}<span class="lbl">Voice</span></button>
  <button class="icb" id="themeBtn" aria-label="Switch theme">${svgI('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>')}</button>
  <button class="btn pri" id="installBtn">${svgI('<path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16"/>')}<span class="lbl">Install app</span></button>
  <button class="icb burger" id="burger" aria-label="Menu">${svgI('<path d="M3 6h18M3 12h18M3 18h18"/>')}</button>
 </div></div>`;
const ticker=document.createElement('div');ticker.className='ticker';ticker.setAttribute('aria-label','Market prices');ticker.innerHTML='<div class="track" id="tickTrack"></div>';
const mnav=document.createElement('nav');mnav.className='mnav';mnav.setAttribute('aria-label','Mobile menu');
mnav.innerHTML=NAV.map(n=>`<details><summary>${n.label}</summary>${n.cols.map(c=>`<h5>${c.h}</h5>${c.links.map(linkHTML).join('')}`).join('')}</details>`).join('');
document.body.prepend(hdr,ticker,mnav);
const closeMenus=()=>$$('.nav li').forEach(li=>{li.classList.remove('open');$('.top',li).setAttribute('aria-expanded','false')});
$$('.nav li').forEach(li=>{
  const b=$('.top',li);
  b.addEventListener('click',e=>{e.stopPropagation();const o=li.classList.contains('open');closeMenus();if(!o){li.classList.add('open');b.setAttribute('aria-expanded','true')}});
  li.addEventListener('mouseenter',()=>{if(matchMedia('(hover:hover)').matches){closeMenus();li.classList.add('open')}});
  li.addEventListener('mouseleave',()=>{if(matchMedia('(hover:hover)').matches)li.classList.remove('open')});
});
document.addEventListener('click',e=>{if(!e.target.closest('.nav'))closeMenus()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenus()});
$('#burger').onclick=()=>mnav.classList.toggle('show');
mnav.addEventListener('click',e=>{if(e.target.closest('a'))mnav.classList.remove('show')});

/* ---------- footer ---------- */
const F=document.createElement('footer');F.className='ftr';
F.innerHTML=`<div class="wrap"><div class="cols">
 <div class="brand"><a class="logo" href="index.html"><img src="icons/icon.svg" alt="">Crypto Kōkua</a>
  <p>Kōkua means help. A plain-English guide to getting started with crypto safely, with live prices and read-aloud lessons.</p>
  <p>Made in Kapolei, Oʻahu by <a href="https://shakasoftware.com" target="_blank" rel="noopener" style="display:inline;color:#ff6a3d">Shaka Software LLC</a>. Veteran-owned business.</p>
  <div class="flags" aria-label="United States and Hawaiʻi flags">       <svg viewBox="0 0 190 100" role="img" aria-label="Flag of the United States"><defs><polygon id="st" points="0,-2.6 .76,-.8 2.47,-.8 1.1,.3 1.6,2.1 0,1 -1.6,2.1 -1.1,.3 -2.47,-.8 -.76,-.8" fill="#fff"/></defs>         <rect width="190" height="100" fill="#fff"/><rect y="0.00" width="190" height="7.69" fill="#b31942"/><rect y="15.38" width="190" height="7.69" fill="#b31942"/><rect y="30.77" width="190" height="7.69" fill="#b31942"/><rect y="46.15" width="190" height="7.69" fill="#b31942"/><rect y="61.54" width="190" height="7.69" fill="#b31942"/><rect y="76.92" width="190" height="7.69" fill="#b31942"/><rect y="92.31" width="190" height="7.69" fill="#b31942"/><rect width="76" height="53.85" fill="#0a3161"/><use href="#st" x="6.33" y="5.38"/><use href="#st" x="18.99" y="5.38"/><use href="#st" x="31.65" y="5.38"/><use href="#st" x="44.31" y="5.38"/><use href="#st" x="56.97" y="5.38"/><use href="#st" x="69.63" y="5.38"/><use href="#st" x="12.66" y="10.77"/><use href="#st" x="25.32" y="10.77"/><use href="#st" x="37.98" y="10.77"/><use href="#st" x="50.64" y="10.77"/><use href="#st" x="63.30" y="10.77"/><use href="#st" x="6.33" y="16.16"/><use href="#st" x="18.99" y="16.16"/><use href="#st" x="31.65" y="16.16"/><use href="#st" x="44.31" y="16.16"/><use href="#st" x="56.97" y="16.16"/><use href="#st" x="69.63" y="16.16"/><use href="#st" x="12.66" y="21.54"/><use href="#st" x="25.32" y="21.54"/><use href="#st" x="37.98" y="21.54"/><use href="#st" x="50.64" y="21.54"/><use href="#st" x="63.30" y="21.54"/><use href="#st" x="6.33" y="26.92"/><use href="#st" x="18.99" y="26.92"/><use href="#st" x="31.65" y="26.92"/><use href="#st" x="44.31" y="26.92"/><use href="#st" x="56.97" y="26.92"/><use href="#st" x="69.63" y="26.92"/><use href="#st" x="12.66" y="32.31"/><use href="#st" x="25.32" y="32.31"/><use href="#st" x="37.98" y="32.31"/><use href="#st" x="50.64" y="32.31"/><use href="#st" x="63.30" y="32.31"/><use href="#st" x="6.33" y="37.70"/><use href="#st" x="18.99" y="37.70"/><use href="#st" x="31.65" y="37.70"/><use href="#st" x="44.31" y="37.70"/><use href="#st" x="56.97" y="37.70"/><use href="#st" x="69.63" y="37.70"/><use href="#st" x="12.66" y="43.08"/><use href="#st" x="25.32" y="43.08"/><use href="#st" x="37.98" y="43.08"/><use href="#st" x="50.64" y="43.08"/><use href="#st" x="63.30" y="43.08"/><use href="#st" x="6.33" y="48.46"/><use href="#st" x="18.99" y="48.46"/><use href="#st" x="31.65" y="48.46"/><use href="#st" x="44.31" y="48.46"/><use href="#st" x="56.97" y="48.46"/><use href="#st" x="69.63" y="48.46"/></svg>       <svg viewBox="0 0 120 60" role="img" aria-label="Flag of Hawaiʻi"><defs><clipPath id="cj"><rect width="60" height="30"/></clipPath></defs>         <rect y="0.0" width="120" height="7.6" fill="#fff"/><rect y="7.5" width="120" height="7.6" fill="#c8102e"/><rect y="15.0" width="120" height="7.6" fill="#012169"/><rect y="22.5" width="120" height="7.6" fill="#fff"/><rect y="30.0" width="120" height="7.6" fill="#c8102e"/><rect y="37.5" width="120" height="7.6" fill="#012169"/><rect y="45.0" width="120" height="7.6" fill="#fff"/><rect y="52.5" width="120" height="7.6" fill="#c8102e"/>         <g clip-path="url(#cj)"><rect width="60" height="30" fill="#012169"/><path d="M0 0 60 30M60 0 0 30" stroke="#fff" stroke-width="6"/><path d="M0 0 60 30M60 0 0 30" stroke="#c8102e" stroke-width="2"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#c8102e" stroke-width="6"/></g></svg>     </div></div>
 ${NAV.slice(0,4).map(n=>`<div><h5>${n.label}</h5>${n.cols.flatMap(c=>c.links).slice(0,7).map(([t,h,id])=>id==='soon'?`<a class="soon">${t} (soon)</a>`:`<a href="${h}"${id?` data-open="${id}"`:''}${/^https?:/.test(h)?' target="_blank" rel="noopener"':''}>${t}</a>`).join('')}</div>`).join('')}
 </div>
 <div class="legal"><p><b>Good to know:</b> Crypto Kōkua is for general education only and is not financial, investment, legal or tax advice. Crypto, stocks and metals can lose value. Fees, rates, card rewards, state availability and tax figures change often, so confirm details with each company and a qualified tax professional. Information current as of November 2026. Company names are used for identification only; no company sponsors this site and it contains no affiliate links.</p>
 <p>Crypto prices from CoinGecko. Stock and metal prices may be delayed. © 2026 Shaka Software LLC.</p></div></div>`;
document.body.append(F);

/* ---------- dialogs ---------- */
document.body.insertAdjacentHTML('beforeend',`
<dialog id="dlg" aria-labelledby="dT"><div class="dh"><div class="t"><div class="cat" id="dC"></div><h2 id="dT"></h2>
 <div class="dacts"><button class="btn pri" id="listen">${svgI('<path d="M8 5v14l11-7z" fill="currentColor"/>')}<span>Listen</span></button><span id="dLinks"></span></div></div>
 <button class="x" id="dX" aria-label="Close">✕</button></div><div class="db" id="dB"></div>
 <div class="dnav"><button class="btn sm" id="prev">← Previous</button><button class="btn sm" id="next">Next →</button></div></dialog>
<dialog id="vdlg" aria-labelledby="vT"><div class="dh"><div class="t"><h2 id="vT">Voice settings</h2></div><button class="x" data-close aria-label="Close">✕</button></div>
 <div class="db vset"><p class="mut">Choose who reads the lessons to you. Voices come from your device, so the list varies by browser and phone.</p>
 <label>Quick pick</label><div class="chips"><button class="btn sm" data-g="f">Woman's voice</button><button class="btn sm" data-g="m">Man's voice</button></div>
 <label for="vSel">All voices</label><select id="vSel"></select>
 <label for="vRate">Speed: <span id="vRateL">1.0</span>×</label><input id="vRate" type="range" min="0.6" max="1.6" step="0.1" value="1">
 <label style="display:flex;gap:10px;align-items:center;font-weight:600"><input type="checkbox" id="vAuto" style="width:22px;height:22px;accent-color:var(--ember)"> Read lessons aloud automatically when I open them</label>
 <p class="small mut" style="margin-top:6px">Questions you ask with the microphone are always read aloud.</p>
 <div class="btns"><button class="btn pri" id="vTest">Test voice</button><button class="btn" data-close>Done</button></div></div></dialog>
<dialog id="idlg" aria-labelledby="iT"><div class="dh"><div class="t"><h2 id="iT">Install Crypto Kōkua</h2></div><button class="x" data-close aria-label="Close">✕</button></div>
 <div class="db"><p>Crypto Kōkua installs like an app straight from your browser. No app store needed.</p>
 <h4>Chrome or Brave on a computer</h4><ol><li>Click the install icon at the right end of the address bar, or open the browser menu.</li><li>Choose <b>Install Crypto Kōkua</b> (Brave may say <b>Install app</b>).</li></ol>
 <h4>Chrome or Brave on Android</h4><ol><li>Tap the three-dot menu.</li><li>Tap <b>Install app</b> or <b>Add to Home screen</b>.</li></ol>
 <h4>iPhone or iPad</h4><ol><li>Tap <b>Share</b>.</li><li>Tap <b>Add to Home Screen</b>.</li></ol>
 <p class="mut small">Don't see the option? The app may already be installed, or the site needs to be opened from its own web address.</p></div></dialog>`);
document.addEventListener('click',e=>{const c=e.target.closest('[data-close]');if(c)c.closest('dialog').close()});
$$('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));

/* lessons */
const dlg=$('#dlg');let idx=0;
const openLesson=id=>{const i=T.findIndex(t=>t.id===id);if(i<0)return false;idx=i;const t=T[i];stop();
 $('#dC').textContent=t.cat;$('#dT').textContent=t.title;$('#dB').innerHTML=t.body;
 $('#dLinks').innerHTML=(t.links||[]).map(([u,l])=>`<a class="btn" href="${u}" target="_blank" rel="noopener">${l} ↗</a>`).join(' ');
 if(!dlg.open)dlg.showModal();dlg.scrollTop=0;if(location.hash!=='#'+id)history.replaceState(null,'','#'+id);return true};
$('#dX').onclick=()=>dlg.close();
dlg.addEventListener('close',()=>{stop();if(T.some(t=>'#'+t.id===location.hash))history.replaceState(null,'',location.pathname)});
$('#prev').onclick=()=>openLesson(T[(idx-1+T.length)%T.length].id);$('#next').onclick=()=>openLesson(T[(idx+1)%T.length].id);
document.addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(b&&openLesson(b.dataset.open)){e.preventDefault();closeMenus();if(autoRead)readOpen()}});

/* ---------- voice ---------- */
const ss=window.speechSynthesis;let voices=[],vName=null,rate=1;
try{vName=localStorage.getItem('ck-voice');rate=+(localStorage.getItem('ck-rate')||1)}catch(e){}
const FV=/(female|woman|samantha|victoria|karen|moira|tessa|zira|aria|jenny|susan|allison|ava|serena|fiona|kate|libby|sonia|natasha|michelle|emma|joanna|salli|kendra|kimberly|ivy|nicky|google us english)/i;
const MV=/(male|\bman\b|alex|daniel|david|mark|guy|fred|ryan|thomas|oliver|arthur|aaron|tom|rishi|george|james|matthew|joey|justin|brian|christopher|eric|roger|andrew|google uk english male)/i;
const gender=v=>/female/i.test(v.name)?'f':/\bmale\b/i.test(v.name)?'m':FV.test(v.name)?'f':MV.test(v.name)?'m':'';
const loadV=()=>{if(!ss)return;voices=ss.getVoices().filter(v=>/^en/i.test(v.lang));
 $('#vSel').innerHTML=voices.length?voices.map(v=>{const g=gender(v);return `<option value="${v.name}" ${v.name===vName?'selected':''}>${v.name}${g?(g==='f'?' (woman)':' (man)'):''} · ${v.lang}</option>`}).join(''):'<option>No voices available on this device</option>'};
if(ss){loadV();ss.onvoiceschanged=loadV}
const pickV=()=>voices.find(v=>v.name===vName)||voices.find(v=>/en-US/i.test(v.lang))||voices[0];
let speakingBtn=null;
function stop(){if(ss)ss.cancel();if(speakingBtn){speakingBtn.classList.remove('speaking');$('span',speakingBtn).textContent='Listen'}speakingBtn=null}
const speak=(text,btn)=>{if(!ss)return;stop();const parts=text.replace(/\s+/g,' ').match(/[^.!?]+[.!?]*/g)||[text];const v=pickV();
 parts.forEach((p,i)=>{const u=new SpeechSynthesisUtterance(p.trim());if(v)u.voice=v;u.rate=rate;if(i===parts.length-1)u.onend=()=>{if(speakingBtn===btn)stop()};ss.speak(u)});
 if(btn){speakingBtn=btn;btn.classList.add('speaking');$('span',btn).textContent='Stop'}};
$('#listen').onclick=e=>{const b=e.currentTarget;if(speakingBtn===b){stop();return}speak($('#dT').textContent+'. '+$('#dB').innerText,b)};
$('#voiceBtn').onclick=()=>{loadV();$('#vAuto').checked=autoRead;$('#vRate').value=rate;$('#vRateL').textContent=(+rate).toFixed(1);$('#vdlg').showModal()};
$('#vSel').onchange=e=>{vName=e.target.value;try{localStorage.setItem('ck-voice',vName)}catch(x){}};
$('#vRate').oninput=e=>{rate=+e.target.value;$('#vRateL').textContent=rate.toFixed(1);try{localStorage.setItem('ck-rate',rate)}catch(x){}};
$$('[data-g]').forEach(b=>b.onclick=()=>{const v=voices.find(x=>gender(x)===b.dataset.g&&/en-US/i.test(x.lang))||voices.find(x=>gender(x)===b.dataset.g);
 $$('[data-g]').forEach(x=>x.setAttribute('aria-pressed',x===b));if(v){vName=v.name;$('#vSel').value=v.name;try{localStorage.setItem('ck-voice',vName)}catch(x){}speak('Aloha. This is how I will sound when I read the lessons.')}});
$('#vAuto').onchange=e=>{autoRead=e.target.checked;try{localStorage.setItem('ck-autoread',autoRead?'1':'0')}catch(x){}};
$('#vTest').onclick=()=>speak('Aloha. Welcome to Crypto Kōkua. Never share your secret recovery phrase with anyone.');
$('#vdlg').addEventListener('close',()=>{if(!speakingBtn&&ss)ss.cancel()});

/* ---------- theme ---------- */
const root=document.documentElement;
const setTheme=t=>{root.dataset.ck=t;$('#themeBtn').setAttribute('aria-label',t==='dark'?'Switch to light mode':'Switch to dark mode');
 $('#themeBtn').innerHTML=t==='dark'?svgI('<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'):svgI('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>');
 try{localStorage.setItem('ck-theme',t)}catch(e){}};
let saved=null;try{saved=localStorage.getItem('ck-theme')}catch(e){}
setTheme(saved||(root.dataset.theme==='dark'||root.dataset.theme==='light'?root.dataset.theme:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')));
$('#themeBtn').onclick=()=>setTheme(root.dataset.ck==='dark'?'light':'dark');

/* ---------- search ---------- */
const plain=h=>{const d=document.createElement('div');d.innerHTML=h;return d.textContent.toLowerCase()};
const IDX=T.map(t=>({t,s:(t.title+' '+t.blurb+' '+plain(t.body)).toLowerCase()}));
const syn={ledger:'hot-cold',trezor:'hot-cold',hardware:'hot-cold',cold:'hot-cold',seed:'keys',phrase:'keys',words:'keys',password:'keys',address:'keys',scam:'safety',fraud:'safety',ira:'roth',itrust:'roth',retire:'roth',roth:'roth',loan:'borrow',borrow:'borrow',debit:'cards',card:'cards',tax:'taxes',irs:'taxes',1099:'taxes',sell:'cash-out',cash:'cash-out',withdraw:'cash-out',send:'exodus-to-kraken',transfer:'exodus-to-kraken',gift:'gift',coingecko:'research',coinmarketcap:'research',marketcap:'research',tradingview:'research',chart:'research',research:'research',explorer:'research',price:'research',prices:'research',buy:'buy',bank:'buy',glossary:'glossary',meaning:'glossary'};
const STOP=new Set('a an and are as at be best can could do does for from get go good great how i if in is it its like look looking me my of on or place places should site sites some that the there this to use want what whats when where which who why will with would you your about tell explain'.split(' '));
const search=q=>{q=q.toLowerCase().replace(/[^a-z0-9\s.]/g,' ').trim();if(!q)return[];const w=q.split(/\s+/).filter(x=>x.length>1&&!STOP.has(x));if(!w.length)return[];
 return IDX.map(o=>{let sc=0;const tl=o.t.title.toLowerCase();w.forEach(x=>{if(tl.includes(x))sc+=4;if(o.s.includes(x))sc+=1;for(const k in syn)if(x.startsWith(k)&&syn[k]===o.t.id)sc+=7});return{...o,sc}}).filter(o=>o.sc>=3).sort((a,b)=>b.sc-a.sc).slice(0,5)};
let autoRead=false;try{autoRead=localStorage.getItem('ck-autoread')==='1'}catch(e){}
const readOpen=()=>setTimeout(()=>{const b=$('#listen');if(b&&dlg.open&&speakingBtn!==b)b.click()},250);
$$('form.ask').forEach(f=>{const q=$('input',f),res=$('.results',f),mic=$('.mic',f);let viaVoice=false,rec=null,silence=null;
 const show=()=>{const r=search(q.value);res.innerHTML=r.length?r.map(o=>`<button type="button" data-ask="${o.t.id}">${o.t.title}<span>${o.t.blurb}</span></button>`).join(''):(q.value.trim()?'<button type="button" disabled>No lesson on that yet. Try words like "wallet", "taxes", "Kraken" or "prices".</button>':'');res.style.display=res.innerHTML?'block':'none'};
 let typing=null;q.addEventListener('input',()=>{viaVoice=false;clearTimeout(typing);typing=setTimeout(show,350)});
 const go=id=>{res.style.display='none';if(openLesson(id)&&(viaVoice||autoRead))readOpen();viaVoice=false};
 res.addEventListener('click',e=>{const b=e.target.closest('[data-ask]');if(b){e.stopPropagation();go(b.dataset.ask)}});
 f.addEventListener('submit',e=>{e.preventDefault();stopRec();const r=search(q.value);if(r[0])go(r[0].t.id);else show()});
 const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 const setMic=on=>{if(!mic)return;mic.classList.toggle('on',on);mic.setAttribute('aria-label',on?'Stop listening':'Speak your question');q.placeholder=on?'Listening… tap the mic when you are done':'Ask about wallets, taxes, Kraken…'};
 function stopRec(){clearTimeout(silence);if(rec){try{rec.stop()}catch(e){}rec=null}setMic(false)}
 if(mic)mic.onclick=()=>{if(rec){stopRec();return}if(!SR){q.placeholder='Voice questions work in Chrome, Edge and Safari';return}
  try{rec=new SR();rec.lang='en-US';rec.continuous=true;rec.interimResults=true;let finalText='';
   rec.onresult=ev=>{let interim='';for(let i=ev.resultIndex;i<ev.results.length;i++){const tx=ev.results[i][0].transcript;if(ev.results[i].isFinal)finalText+=tx+' ';else interim+=tx}
    q.value=(finalText+interim).trim();viaVoice=true;clearTimeout(silence);silence=setTimeout(()=>{stopRec();show();viaVoice=true},2500)};
   rec.onerror=()=>stopRec();rec.onend=()=>{if(rec){rec=null;setMic(false);if(q.value.trim()){show();viaVoice=true}}};
   q.value='';res.style.display='none';rec.start();setMic(true)}catch(err){q.placeholder='Microphone not available here';rec=null}};
});
document.addEventListener('click',e=>{if(!e.target.closest('form.ask'))$$('.results').forEach(r=>r.style.display='none')});

/* ---------- prices ---------- */
const ASSETS=[
 {k:'BTC',n:'Bitcoin',g:'crypto',cg:'bitcoin',c:'#f7931a',p:95000,ch:1.2},
 {k:'ETH',n:'Ethereum',g:'crypto',cg:'ethereum',c:'#627eea',p:3400,ch:-0.8},
 {k:'XRP',n:'XRP',g:'crypto',cg:'ripple',c:'#23292f',p:2.3,ch:2.1},
 {k:'SOL',n:'Solana',g:'crypto',cg:'solana',c:'#9945ff',p:180,ch:-1.4},
 {k:'ADA',n:'Cardano',g:'crypto',cg:'cardano',c:'#0033ad',p:0.75,ch:0.6},
 {k:'DOGE',n:'Dogecoin',g:'crypto',cg:'dogecoin',c:'#c2a633',p:0.2,ch:-2.2},
 {k:'LTC',n:'Litecoin',g:'crypto',cg:'litecoin',c:'#345d9d',p:95,ch:0.9},
 {k:'DGB',n:'DigiByte',g:'crypto',cg:'digibyte',c:'#006ad2',p:0.012,ch:1.7},
 {b:'S',k:'SPX',n:'S&P 500',g:'stocks',y:'^GSPC',c:'#121014',p:6700,ch:0.4,idx:1},
 {b:'N',k:'NDX',n:'Nasdaq',g:'stocks',y:'^IXIC',c:'#0b6bcb',p:22800,ch:0.6,idx:1},
 {b:'D',k:'DJI',n:'Dow Jones',g:'stocks',y:'^DJI',c:'#1f3a93',p:46500,ch:0.2,idx:1},
 {k:'NVDA',n:'NVIDIA',g:'stocks',y:'NVDA',c:'#76b900',p:190,ch:1.8},
 {k:'AAPL',n:'Apple',g:'stocks',y:'AAPL',c:'#555',p:260,ch:-0.3},
 {k:'MSFT',n:'Microsoft',g:'stocks',y:'MSFT',c:'#00a4ef',p:510,ch:0.5},
 {k:'TSLA',n:'Tesla',g:'stocks',y:'TSLA',c:'#cc0000',p:430,ch:-1.1},
 {k:'COIN',n:'Coinbase',g:'stocks',y:'COIN',c:'#0052ff',p:330,ch:2.4},
 {k:'MSTR',n:'Strategy',g:'stocks',y:'MSTR',c:'#d9232d',p:300,ch:3.1},
 {b:'Au',k:'XAU',n:'Gold',g:'metals',y:'GC=F',cg:'pax-gold',c:'#d4a017',p:4000,ch:0.3,unit:'/oz'},
 {b:'Ag',k:'XAG',n:'Silver',g:'metals',y:'SI=F',cg:'kinesis-silver',c:'#9ea3a8',p:48,ch:-0.5,unit:'/oz'},
 {b:'Pt',k:'XPT',n:'Platinum',g:'metals',y:'PL=F',c:'#7d8a96',p:1500,ch:0.7,unit:'/oz'}];
const seedSpark=(p,ch,i)=>{const a=[];let v=1;for(let j=0;j<40;j++){v*=1+Math.sin((j+i*7)/4)*0.004+(ch/100)/40+(((j*37+i*11)%7)-3)/1400;a.push(v)}const k=p/a[a.length-1];return a.map(x=>x*k)};
ASSETS.forEach((a,i)=>{a.sample=true;a.spark=seedSpark(a.p,a.ch,i)});
const P={assets:ASSETS,live:{crypto:false,stocks:false},updated:null,by:k=>ASSETS.find(a=>a.k===k)};
window.CKP=P;
const fmt=(a,v=a.p)=>a.idx?v.toLocaleString('en-US',{maximumFractionDigits:0}):v>=1000?'$'+v.toLocaleString('en-US',{maximumFractionDigits:0}):v>=1?'$'+v.toFixed(2):'$'+v.toPrecision(3);
const pct=ch=>(ch>=0?'▲ ':'▼ ')+Math.abs(ch).toFixed(2)+'%';
const sparkPath=(arr,w,h)=>{if(!arr||arr.length<2)return'';const mn=Math.min(...arr),mx=Math.max(...arr),r=mx-mn||1;return arr.map((v,i)=>`${i?'L':'M'}${(i/(arr.length-1)*w).toFixed(1)} ${(h-2-(v-mn)/r*(h-4)).toFixed(1)}`).join(' ')};
P.fmt=fmt;P.pct=pct;P.sparkPath=sparkPath;
P.url=a=>a.cg&&a.g==='crypto'?`https://www.coingecko.com/en/coins/${a.cg}`:a.y?`https://finance.yahoo.com/quote/${encodeURIComponent(a.y)}`:'#';
P.where=a=>a.g==='crypto'?'CoinGecko':'Yahoo Finance';
const tween=(el,from,to,a)=>{if(!from||matchMedia('(prefers-reduced-motion: reduce)').matches||from===to){el.textContent=fmt(a,to);return}
 const t0=performance.now(),d=700;const step=t=>{const k=Math.min(1,(t-t0)/d),e=1-Math.pow(1-k,3);el.textContent=fmt(a,from+(to-from)*e);if(k<1)requestAnimationFrame(step)};requestAnimationFrame(step);
 el.classList.remove('flash-up','flash-down');void el.offsetWidth;el.classList.add(to>=from?'flash-up':'flash-down')};
const paint=()=>{
 $$('[data-px]').forEach(el=>{const a=P.by(el.dataset.px);if(!a)return;const old=+el.dataset.v||0;tween(el,old,a.p,a);el.dataset.v=a.p});
 $$('[data-ch]').forEach(el=>{const a=P.by(el.dataset.ch);if(!a)return;el.textContent=pct(a.ch);el.classList.toggle('up',a.ch>=0);el.classList.toggle('down',a.ch<0)});
 $$('[data-spark]').forEach(svg=>{const a=P.by(svg.dataset.spark);if(!a)return;const w=+svg.getAttribute('width')||100,h=+svg.getAttribute('height')||30;const col=a.ch>=0?'#22c55e':'#ef4444';
  const area=svg.hasAttribute('data-area');const d=sparkPath(a.spark,w,h);
  svg.innerHTML=(area?`<defs><linearGradient id="g${a.k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${col}" stop-opacity=".3"/><stop offset="1" stop-color="${col}" stop-opacity="0"/></linearGradient></defs><path d="${d} L${w} ${h} L0 ${h}Z" fill="url(#g${a.k})"/>`:'')+`<path d="${d}" fill="none" stroke="${col}" stroke-width="${area?2.2:1.8}" stroke-linejoin="round" stroke-linecap="round"/>`});
 $$('[data-coin]').forEach(el=>{const a=P.by(el.dataset.coin);if(!a)return;if(a.img){el.style.background='#fff';el.innerHTML=`<img src="${a.img}" alt="" width="30" height="30" style="border-radius:50%;width:100%;height:100%">`}else{el.style.background=a.c;el.textContent=a.b||a.n[0]}});
 const anyLive=P.live.crypto||P.live.stocks;
 $$('[data-status]').forEach(el=>{el.classList.toggle('live',anyLive);el.innerHTML=`<span class="dt"></span>${anyLive?'Live · updated '+P.updated.toLocaleTimeString([],{hour:'numeric',minute:'2-digit'}):'Sample prices · live prices load on the published site'}`});
 const groups=[['Crypto','crypto'],['Stocks','stocks'],['Metals','metals']];
 const tk=groups.map(([lab,g])=>`<span class="tk grp">${lab}</span>`+ASSETS.filter(a=>a.g===g).map(a=>`<span class="tk"><span class="dt ${a.ch>=0?'up':'down'}"></span><b>${a.n}</b><span class="px">${fmt(a)}</span><span class="ch ${a.ch>=0?'up':'down'}">${pct(a.ch)}</span></span>`).join('')).join('')+(anyLive?'':'<span class="tk grp">Sample prices</span>');
 $('#tickTrack').innerHTML=tk+tk;
 document.dispatchEvent(new CustomEvent('ck:prices'));
};
P.paint=paint;
const loadCrypto=async()=>{const ids=ASSETS.filter(a=>a.cg).map(a=>a.cg).join(',');
 const r=await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&sparkline=true&price_change_percentage=24h`,{cache:'no-store'});
 if(!r.ok)throw new Error('cg');const d=await r.json();let n=0;
 d.forEach(x=>{const a=ASSETS.find(a=>a.cg===x.id);if(!a||x.current_price==null)return;if(a.g==='metals'&&a.yLive)return;
  a.p=x.current_price;a.ch=x.price_change_percentage_24h||0;a.img=a.g==='crypto'?x.image:null;const sp=x.sparkline_in_7d&&x.sparkline_in_7d.price;if(sp&&sp.length)a.spark=sp.filter((_,i)=>i%4===0).concat([a.p]);a.sample=false;n++});
 if(n){P.live.crypto=true;P.updated=new Date()}};
const loadQuotes=async()=>{const r=await fetch('/api/quotes',{cache:'no-store'});if(!r.ok)throw new Error('q');const d=await r.json();let n=0;
 (d.quotes||[]).forEach(q=>{const a=ASSETS.find(a=>a.y===q.symbol);if(!a||q.price==null)return;a.p=q.price;a.ch=q.change??0;if(q.spark&&q.spark.length>2)a.spark=q.spark;a.sample=false;if(a.g==='metals')a.yLive=true;n++});
 if(n){P.live.stocks=true;P.updated=new Date()}};
const refresh=async()=>{await Promise.allSettled([loadCrypto(),loadQuotes()]);paint()};
P.refresh=refresh;
paint();refresh();setInterval(refresh,60000);

/* ---------- reveal on scroll ---------- */
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.08});$$('.rv').forEach(el=>io.observe(el))}else $$('.rv').forEach(el=>el.classList.add('in'));

/* ---------- install ---------- */
let deferred=null;
addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferred=e});
const doInstall=async()=>{if(deferred){deferred.prompt();try{await deferred.userChoice}catch(e){}deferred=null}else $('#idlg').showModal()};
document.addEventListener('click',e=>{const b=e.target.closest('#installBtn,[data-install],a[href="#install"]');if(b){e.preventDefault();doInstall()}});
if(matchMedia('(display-mode: standalone)').matches)$('#installBtn').style.display='none';
try{if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{})}catch(e){}

/* ---------- helpers for pages ---------- */
const slug=p=>p.n.toLowerCase().replace(/[^a-z]/g,'');
const ago=d=>{if(!d)return'';const m=Math.max(1,Math.round((Date.now()-new Date(d))/60000));return m<60?m+' min ago':m<1440?Math.round(m/60)+' hr ago':Math.round(m/1440)+' days ago'};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let newsCache=null;
const loadNews=async()=>{if(newsCache&&Date.now()-newsCache.t<5*60000)return newsCache.d;const r=await fetch('/api/news',{cache:'no-store'});if(!r.ok)throw new Error('news');const d=await r.json();newsCache={t:Date.now(),d};return d};
const newsCard=i=>`<a class="news" href="${esc(i.link)}" target="_blank" rel="noopener"><span class="src">${esc(i.source)}<em>${ago(i.date)}</em></span><b>${esc(i.title)}</b><span class="go">Read at ${esc(i.source)} ↗</span></a>`;
const renderNews=async(el,limit,filter)=>{try{const d=await loadNews();const items=d.items.filter(i=>!filter||filter==='All'||i.source===filter).slice(0,limit);el.innerHTML=items.length?items.map(newsCard).join(''):'<p class="mut">No headlines right now. Check back soon.</p>';return d}catch(e){el.innerHTML='<p class="mut">Headlines load on the published site. If they don\'t appear, try again in a few minutes.</p>';return null}};
window.CK={$,$$,openLesson,speak,slug,renderNews,ago,
 lessonCard:t=>`<button class="tcard" data-open="${t.id}"><div class="ic">${ico(t.ic)}</div><div class="cat">${t.cat}</div><h3>${t.title}</h3><p>${t.blurb}</p><span class="more">Open lesson →</span></button>`,
 platformCard:(p,full)=>`<article class="pc" id="${slug(p)}"><div class="mk" style="background:${p.c}">${p.n[0]}</div><div><h3>${p.n}</h3><div class="kind">${p.k}</div></div>
  <div>${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div><p>${p.d}</p>${full?`<ul>${p.pts.map(x=>`<li>${x}</li>`).join('')}</ul>`:''}
  <div class="act"><a class="btn pri sm" href="${p.u}" target="_blank" rel="noopener">Go to ${p.n} ↗</a>${full?`<a class="btn sm" href="${p.s}" target="_blank" rel="noopener">Help center</a>`:''}${p.topic?`<button class="btn sm" data-open="${p.topic}">Lesson</button>`:''}</div></article>`};

/* open a lesson from the URL hash (works on every page) */
const fromHash=()=>{const h=location.hash.slice(1);if(T.some(t=>t.id===h))openLesson(h)};
addEventListener('hashchange',fromHash);setTimeout(fromHash,0);
}
