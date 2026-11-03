// Set both values once the Weight Balance Klaviyo account and list exist.
const SIGNUP={publicKey:'',listId:''};
document.querySelectorAll('.signup').forEach(f=>{
 const s=f.querySelector('.status'),b=f.querySelector('button'),i=f.querySelector('input[type=email]');
 f.addEventListener('submit',async e=>{e.preventDefault();
  if(f.querySelector('.hp input').value)return;
  if(!i.checkValidity()){s.textContent='Enter a valid email address, like name@example.com.';i.focus();return}
  if(!SIGNUP.publicKey||!SIGNUP.listId){s.textContent='Staging only: signups are not connected, so this email was not saved.';return}
  b.disabled=true;s.textContent='Sending...';
  try{const r=await fetch('https://a.klaviyo.com/client/subscriptions?company_id='+encodeURIComponent(SIGNUP.publicKey),{method:'POST',headers:{'Content-Type':'application/vnd.api+json',revision:'2024-10-15'},
   body:JSON.stringify({data:{type:'subscription',attributes:{custom_source:'Early access: '+f.dataset.place,profile:{data:{type:'profile',attributes:{email:i.value,subscriptions:{email:{marketing:{consent:'SUBSCRIBED'}}}}}}},relationships:{list:{data:{type:'list',id:SIGNUP.listId}}}}})});
   if(!r.ok)throw 0;s.textContent="You're on the list. We'll email you to schedule your free consultation.";f.reset()}
  catch{s.textContent='Your email was not sent. Check your connection and try again.'}
  b.disabled=false})});
const tabs=[...document.querySelectorAll('[role=tab]')];
function pick(x,focus){tabs.forEach(t=>{const on=t===x;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!on});if(focus)x.focus()}
tabs.forEach((t,n)=>{t.addEventListener('click',()=>pick(t));t.addEventListener('keydown',e=>{const d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(d){e.preventDefault();pick(tabs[(n+d+tabs.length)%tabs.length],true)}})});
if(tabs.length)pick(tabs[0]);
