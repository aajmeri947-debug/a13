(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var SYN=29.530588853,REF=Date.UTC(2000,0,6,18,14);function age(d){var a=((d-REF)/864e5)%SYN;return a<0?a+SYN:a;}
function mpath(cx,cy,r,f){if(f<.01||f>.99)return '';var k=Math.cos(2*Math.PI*f),rx=Math.abs(k)*r;if(f<.5)return 'M'+cx+' '+(cy-r)+'A'+r+' '+r+' 0 0 1 '+cx+' '+(cy+r)+'A'+rx+' '+r+' 0 0 '+(k<0?1:0)+' '+cx+' '+(cy-r)+'z';return 'M'+cx+' '+(cy-r)+'A'+r+' '+r+' 0 0 0 '+cx+' '+(cy+r)+'A'+rx+' '+r+' 0 0 '+(k<0?0:1)+' '+cx+' '+(cy-r)+'z';}
function pname(f){return f<.03||f>.97?'New moon':f<.22?'Waxing crescent':f<.28?'First quarter':f<.47?'Waxing gibbous':f<.53?'Full moon':f<.72?'Waning gibbous':f<.78?'Last quarter':'Waning crescent';}
var hm=$('tb-hm');if(hm){var f0=age(Date.now())/SYN;$('tb-ht').textContent=pname(f0);var sh=f0<.5?(1-f0*2)*18:-(f0-.5)*2*18;hm.style.boxShadow='inset '+(f0<.5?-1:1)*Math.round(18-Math.abs(sh))+'px 0 0 0 #F5F1EA';}
function fmt(d){return d.toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'});}
var md=$('mn-d');if(md){var t=new Date();md.value=t.getFullYear()+'-'+String(t.getMonth()+1).padStart(2,'0')+'-'+String(t.getDate()).padStart(2,'0');
 function mn(){var p=md.value.split('-'),d=Date.UTC(+p[0],+p[1]-1,+p[2],12);if(isNaN(d))return;var a=age(d),f=a/SYN,ill=Math.round((1-Math.cos(2*Math.PI*f))/2*100);$('mn-lit').setAttribute('d',mpath(100,100,90,f));$('mn-p').textContent=pname(f);$('mn-a').textContent='Day '+Math.round(a)+' of 29.5';$('mn-i').textContent=ill+'%';
  var toFull=((SYN/2-a)%SYN+SYN)%SYN,toNew=SYN-a;$('mn-f').textContent=fmt(new Date(d+toFull*864e5));$('mn-nw').textContent=fmt(new Date(d+toNew*864e5));}
 md.addEventListener('input',mn);md.addEventListener('change',mn);mn();}
var cc=$('cp-c');if(cc){var C=[['date','Date','Shows the day of the month through a small window, usually at three o’clock. Most need correcting at the end of 30-day months.','Everyday convenience',2],['moon','Moon phase','A disc with two moons turns slowly behind an arched window, following the 29.5-day lunar cycle.','Beauty, tides, the night sky',3],['chrono','Chronograph','A built-in stopwatch. Pushers start, stop and reset a seconds hand; subdials count minutes and hours.','Timing events and intervals',4],['gmt','GMT','A fourth hand turns once every 24 hours, pointing to a second time zone on the bezel.','Travel and calls abroad',3],['power','Power reserve','A small gauge shows how much energy is left in the mainspring, so you know when to wind.','Knowing when to wind',2],['tourb','Tourbillon','The escapement rides in a cage that turns once a minute, averaging out gravity’s pull on the balance.','A showcase of craft',5]];
 var bs=[].slice.call(cc.querySelectorAll('button'));function cp(i){var c=C[i];bs.forEach(function(b,k){b.classList.toggle('on',k===i);b.setAttribute('aria-pressed',k===i);});[].forEach.call(document.querySelectorAll('.cx'),function(g){g.classList.toggle('on',g.classList.contains('cx-'+c[0]));});
  $('cp-t').textContent=c[1];$('cp-d').textContent=c[2];$('cp-u').textContent=c[3];$('cp-s').textContent='★'.repeat(c[4])+'☆'.repeat(5-c[4]);
  if(c[0]==='moon'){var f=age(Date.now())/SYN;var m=$('dl-mn');m.setAttribute('cx',(96+f*48).toFixed(1));}}
 bs.forEach(function(b,k){b.addEventListener('click',function(){cp(k);});});cp(1);}
})();
