import{s as X,f as I,n as B,r as $}from"../chunks/scheduler.63274e7e.js";import{S as A,i as H,g as f,s as S,m as V,h as m,j as x,y as J,c as T,n as z,f as _,k as s,l as K,a as L,x as a,z as D}from"../chunks/index.e159bb4a.js";const Q=!1,te=Object.freeze(Object.defineProperty({__proto__:null,ssr:Q},Symbol.toStringTag,{value:"Module"}));function W(c){let e,r,h="Never Gank Top",b,v,p,t,w,O,d,o,g,G,P,y,k,i,N,u,R,E,C,q;return{c(){e=f("div"),r=f("h1"),r.textContent=h,b=S(),v=V(F),p=S(),t=f("iframe"),O=S(),d=f("div"),o=f("button"),g=f("img"),P=V(`
            PREVIOUS`),k=S(),i=f("button"),N=V(`NEXT
            `),u=f("img"),this.h()},l(n){e=m(n,"DIV",{class:!0});var l=x(e);r=m(l,"H1",{class:!0,"data-svelte-h":!0}),J(r)!=="svelte-1hstwza"&&(r.textContent=h),b=T(l),v=z(l,F),p=T(l),t=m(l,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0}),x(t).forEach(_),O=T(l),d=m(l,"DIV",{class:!0});var j=x(d);o=m(j,"BUTTON",{class:!0});var M=x(o);g=m(M,"IMG",{class:!0,src:!0,alt:!0}),P=z(M,`
            PREVIOUS`),M.forEach(_),k=T(j),i=m(j,"BUTTON",{class:!0});var U=x(i);N=z(U,`NEXT
            `),u=m(U,"IMG",{class:!0,style:!0,src:!0,alt:!0}),U.forEach(_),j.forEach(_),l.forEach(_),this.h()},h(){s(r,"class","text-center font-bold text-7xl"),s(t,"class","max-w-2xl w-full aspect-video"),I(t.src,w=`https://www.youtube.com/embed/${c[0][c[1]]}`)||s(t,"src",w),s(t,"title","video"),s(t,"frameborder","0"),t.allowFullscreen=!0,s(g,"class","h-6 w-6"),I(g.src,G="./angles-left-solid.svg")||s(g,"src",G),s(g,"alt","Previous video"),s(o,"class","flex justify-center items-center w-36 rounded-lg p-2 gap-x-2 font-semibold text-xl bg-teal-600 hover:bg-teal-700 transition-colors disabled:bg-gray-400 disabled:opacity-50"),o.disabled=y=c[1]===0,s(u,"class","h-6 w-6 fill-slate-50"),K(u,"color","#ffffff"),I(u.src,R="./angles-right-solid.svg")||s(u,"src",R),s(u,"alt","Previous video"),s(i,"class","flex justify-center items-center w-36 rounded-lg p-2 gap-x-2 font-semibold text-xl bg-teal-600 hover:bg-teal-700 transition-colors disabled:bg-gray-400 disabled:opacity-50"),i.disabled=E=c[1]===c[0].length-1,s(d,"class","flex flex-row max-w-2xl w-full justify-between"),s(e,"class","h-screen w-screen text-gray-200 bg-slate-900 gap-y-5 flex flex-col justify-center items-center")},m(n,l){L(n,e,l),a(e,r),a(e,b),a(e,v),a(e,p),a(e,t),a(e,O),a(e,d),a(d,o),a(o,g),a(o,P),a(d,k),a(d,i),a(i,N),a(i,u),C||(q=[D(o,"click",c[3]),D(i,"click",c[2])],C=!0)},p(n,[l]){l&3&&!I(t.src,w=`https://www.youtube.com/embed/${n[0][n[1]]}`)&&s(t,"src",w),l&2&&y!==(y=n[1]===0)&&(o.disabled=y),l&3&&E!==(E=n[1]===n[0].length-1)&&(i.disabled=E)},i:B,o:B,d(n){n&&_(e),C=!1,$(q)}}}let F="";function Y(c,e,r){let h=[],b=0;const v=()=>r(1,b+=1),p=()=>r(1,b-=1);return fetch("./videos.json").then(t=>t.json()).then(t=>{r(0,h=t)}),[h,b,v,p]}class se extends A{constructor(e){super(),H(this,e,Y,W,X,{})}}export{se as component,te as universal};