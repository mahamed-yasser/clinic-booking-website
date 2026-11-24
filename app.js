const f=document.getElementById('f'),msg=document.getElementById('msg');
f.addEventListener('submit',e=>{e.preventDefault();let ok=true;
for(const id of ['n','p','d']){const i=document.getElementById(id);const v=i.checkValidity();i.classList.toggle('bad',!v);if(!v)ok=false}
msg.className=ok?'ok':'err';
msg.textContent=ok?'تم تسجيل الطلب (تجريبي). في الموقع الحقيقي سيصلك تأكيد على الهاتف.':'راجع الحقول المظللة: الاسم 3 أحرف على الأقل، رقم هاتف صحيح، وتاريخ.'});
