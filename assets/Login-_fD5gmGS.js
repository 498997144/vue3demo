var d=(n,o,s)=>new Promise((p,e)=>{var r=a=>{try{t(s.next(a))}catch(i){e(i)}},w=a=>{try{t(s.throw(a))}catch(i){e(i)}},t=a=>a.done?p(a.value):Promise.resolve(a.value).then(r,w);t((s=s.apply(n,o)).next())});import{r as v,c as f,a as l,w as u,v as m,u as b,b as x}from"./index-BA9AZ_zR.js";import"./common-OTHa987t.js";const B={__name:"Login",setup(n){b();const o=v({email:"test@example.com",password:"password"});function s(){return d(this,null,function*(){alert(123)})}return(p,e)=>(x(),f("div",null,[l("div",null,[e[2]||(e[2]=l("label",{for:"email"},"Email",-1)),u(l("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>o.value.email=r),type:"email",id:"email",name:"email",placeholder:"email"},null,512),[[m,o.value.email]])]),l("div",null,[e[3]||(e[3]=l("label",{for:"password"},"password",-1)),u(l("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>o.value.password=r),type:"password",id:"password",name:"password",placeholder:"password"},null,512),[[m,o.value.password]])]),l("div",null,[l("button",{onClick:s},"登入")])]))}};export{B as default};
