"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[97047],{49448:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>j,frontMatter:()=>m,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"\u5e94\u7528/ledger","title":"\u8d26\u672c","description":"","source":"@site/docs/\u5e94\u7528/ledger.mdx","sourceDirName":"\u5e94\u7528","slug":"/\u5e94\u7528/ledger","permalink":"/docs/\u5e94\u7528/ledger","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"\u56fe\u50cf\u8f6c\u9634\u5f71","permalink":"/docs/\u5e94\u7528/image2shadow"},"next":{"title":"24 \u70b9","permalink":"/docs/\u5e94\u7528/point24"}}');var n=r(25105),a=r(8556),i=r(8669),o=r(23793),d=r(50945),c=r(56287),l=r.n(c),u=r(92935),h=r.n(u);function g(e){return e?1:-1}function f(){const e=(0,i.b)(),{data:t}=(0,o.A)((async()=>e("/api/data/ledger")));return(0,n.jsx)(d.A,{onPanelChange:(e,t)=>{console.log(e.format("YYYY-MM-DD"),t)},cellRender:(e,r)=>"date"===r.type?(e=>{const r=t?.filter((t=>0===l()(t.date).diff(e,"day")))??[];return 0===r.length?null:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:`\u603b${(h().sumBy(r,(e=>e.balance*g(e.io)))/100).toFixed(2)}\u5143`}),r.map(((e,t)=>(0,n.jsx)("li",{children:`${(e.balance*g(e.io)/100).toFixed(2)}\u5143 ${e.comment}`},t)))]})})(e):"month"===r.type?(e=>{const r=t?.filter((t=>0===l()(t.date).diff(e,"month")))??[];return(0,n.jsx)("div",{children:(0,n.jsx)("section",{children:(h().sum(r.flatMap((e=>g(e.io)*e.balance)))/100).toFixed(2)})})})(e):r.originNode})}r(729);const m={},p="\u8d26\u672c",b={},x=[];function y(e){const t={h1:"h1",header:"header",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"\u8d26\u672c",children:"\u8d26\u672c"})}),"\n",(0,n.jsx)(f,{})]})}function j(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(y,{...e})}):y(e)}},8669:(e,t,r)=>{r.d(t,{S:()=>s,b:()=>o});const s="undefined"==typeof window;var n=r(34417);class a{static of(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return new a(...t)}static ofSuccess(e){return new a(0,e)}static ofFailure(e,t){return void 0===t&&(t=1),new a(t,e?.message??e?.toString()??"Server Error")}static from(e){return this.of(0).setCode(e.code).setData(e.data).setMsg(e.msg).setRetriable(e.retriable)}code;msg;data;retriable;constructor(e,t,r,s){this.code=e,this.data=t,this.msg=r,this.retriable=s}getCode(){return this.code}setCode(e){return this.code=e,this}getData(){return this.data}setData(e){return this.data=e,this}getMsg(){return this.msg}setMsg(e){return this.msg=e,this}getRetriable(){return this.retriable}setRetriable(e){return this.retriable=e,this}}var i=r(15338);function o(){const{siteConfig:e}=(0,i.A)(),t=e.customFields.apiUrl;return async function(){const e=localStorage.getItem("x-token");for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];"string"==typeof s[0]&&(s[0]=t+s[0]),s[1]??={},s[1].headers??={},s[1].headers["Content-Type"]="application/json",e&&(s[1].headers.Authorization=`Bearer ${e}`),s[1].body=JSON.stringify(s[1].body);const o=await fetch(...s),d=a.from(await o.json());if(0===d.getCode())return d.getData();n.Ay.error(d.getMsg())}}}}]);