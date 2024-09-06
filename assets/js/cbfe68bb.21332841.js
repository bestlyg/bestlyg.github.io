"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[41289],{45663:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var t=r(86070),c=r(25710);const s={},i="50.Pow(x,n)",o={id:"leetcode/1-100/Pow(x,n)",title:"50.Pow(x,n)",description:"\u94fe\u63a5\uff1a50.Pow(x,n)",source:"@site/docs/leetcode/1-100/50.Pow(x,n).md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/Pow(x,n)",permalink:"/docs/leetcode/1-100/Pow(x,n)",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:50,frontMatter:{},sidebar:"journal",previous:{title:"49.\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4",permalink:"/docs/leetcode/1-100/\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4"},next:{title:"51.N\u7687\u540e",permalink:"/docs/leetcode/1-100/N\u7687\u540e"}},l={},a=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - javascript",id:"\u9898\u89e3-2---javascript",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"50powxn",children:"50.Pow(x,n)"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/powx-n",children:"50.Pow(x,n)"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u9012\u5f52\u3001\u6570\u5b66",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5b9e\u73b0 pow(x, n) \uff0c\u5373\u8ba1\u7b97 x \u7684 n \u6b21\u5e42\u51fd\u6570\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-11"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a5424ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a35.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u901a\u8fc7\u5bf9\u534a\u62c6\u5206\u8fdb\u884c\u8ba1\u7b97\u540e\u5408\u5e76\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {number} x\n * @param {number}\n * @return {number}\n */\nvar myPow = function (x, n) {\n  const cache = { 0: 1, 1: x };\n  function comp(n) {\n    if (!cache[n]) {\n      const mid = Math.floor(n / 2);\n      cache[n] = comp(mid) * comp(n - mid);\n    }\n    return cache[n];\n  }\n  return n >= 0 ? comp(n) : 1 / comp(-n);\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---javascript",children:"\u9898\u89e3 2 - javascript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-11"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a60ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a33.6MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u76f4\u63a5\u8c03\u7528\u539f\u751f\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {number} x\n * @param {number} n\n * @return {number}\n */\nvar myPow = function (x, n) {\n  return Math.pow(x, n);\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>o});var t=r(30758);const c={},s=t.createContext(c);function i(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);