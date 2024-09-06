"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[18779],{99694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var c=t(86070),s=t(25710);const r={},o="242.\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd",i={id:"leetcode/201-300/\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd",title:"242.\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd",description:"\u94fe\u63a5\uff1a242.\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd",source:"@site/docs/leetcode/201-300/242.\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd",permalink:"/docs/leetcode/201-300/\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:242,frontMatter:{},sidebar:"journal",previous:{title:"241.\u4e3a\u8fd0\u7b97\u8868\u8fbe\u5f0f\u8bbe\u8ba1\u4f18\u5148\u7ea7",permalink:"/docs/leetcode/201-300/\u4e3a\u8fd0\u7b97\u8868\u8fbe\u5f0f\u8bbe\u8ba1\u4f18\u5148\u7ea7"},next:{title:"257.\u4e8c\u53c9\u6811\u7684\u6240\u6709\u8def\u5f84",permalink:"/docs/leetcode/201-300/\u4e8c\u53c9\u6811\u7684\u6240\u6709\u8def\u5f84"}},l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"242\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd",children:"242.\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,c.jsx)(n.a,{href:"https://leetcode.cn/problems/valid-anagram",children:"242.\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd"}),(0,c.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,c.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u6392\u5e8f",(0,c.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32 s \u548c t \uff0c\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\u6765\u5224\u65ad t \u662f\u5426\u662f s \u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-11-22"}),"\n",(0,c.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a108ms"}),"\n",(0,c.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.4MB"}),"\n",(0,c.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,c.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528 cache \u50a8\u5b58\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"function isAnagram(s: string, t: string): boolean {\n  const cache: Record<string, number> = {};\n  const setCache = (c: string) => {\n    cache[c] = 1 + (cache[c] ?? 0);\n  };\n  const delCache = (c: string) => {\n    cache[c]--;\n  };\n  for (const c of s) setCache(c);\n  for (const c of t) delCache(c);\n  return Object.entries(cache).every(([, c]) => c === 0);\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var c=t(30758);const s={},r=c.createContext(s);function o(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);