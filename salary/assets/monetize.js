// ONE-FILE monetization config. Fill values when accounts are approved, redeploy. Nothing renders while empty.
const MONETIZE={
  adsenseClient:"",           // e.g. "ca-pub-1234567890123456"
  affiliates:[                // fill url to activate, e.g. Impact tracking links
    {name:"Gusto",url:"",blurb:"Full-service payroll that files federal and state taxes automatically."},
    {name:"OnPay",url:"",blurb:"Flat-fee payroll built for small businesses and restaurants."}
  ]};
(function(){
  var slot=document.getElementById("affiliate-slot");
  var act=MONETIZE.affiliates.filter(a=>a.url);
  if(slot&&act.length){
    var h='<div style="border:1px solid #dbe4ec;padding:16px 20px;background:#f4f7fa;font:14px/1.6 -apple-system,Segoe UI,Arial,sans-serif"><strong>Running payroll for a business?</strong> Tools that calculate this automatically for every employee:<ul style="margin:8px 0 0">';
    act.forEach(a=>{h+='<li><a href="'+a.url+'" rel="sponsored nofollow" target="_blank">'+a.name+'</a> — '+a.blurb+'</li>'});
    slot.innerHTML=h+'</ul><div style="font-size:11px;color:#5b6b7b;margin-top:6px">Disclosure: we may earn a commission from these links.</div></div>';
  }
  if(MONETIZE.adsenseClient){
    var s=document.createElement("script");s.async=true;
    s.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+MONETIZE.adsenseClient;
    s.crossOrigin="anonymous";document.head.appendChild(s);
  }
})();