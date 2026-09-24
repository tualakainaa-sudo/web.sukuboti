const menu=document.getElementById('menu'),nav=document.getElementById('navLinks'),progress=document.getElementById('progress'),top=document.getElementById('top');
menu.onclick=()=>nav.classList.toggle('open');
document.querySelectorAll('#navLinks a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
function scrollUI(){let h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h?scrollY/h*100:0)+'%';top.classList.toggle('show',scrollY>600)}
addEventListener('scroll',scrollUI,{passive:true});scrollUI();top.onclick=()=>scrollTo({top:0,behavior:'smooth'});