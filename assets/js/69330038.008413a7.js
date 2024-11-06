"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[72711],{43798:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(86070),r=t(31503);const i={},c="459.\u91cd\u590d\u7684\u5b50\u5b57\u7b26\u4e32",l={id:"leetcode/401-500/\u91cd\u590d\u7684\u5b50\u5b57\u7b26\u4e32",title:"459.\u91cd\u590d\u7684\u5b50\u5b57\u7b26\u4e32",description:"\u94fe\u63a5\uff1a459.\u91cd\u590d\u7684\u5b50\u5b57\u7b26\u4e32",source:"@site/docs/leetcode/401-500/459.\u91cd\u590d\u7684\u5b50\u5b57\u7b26\u4e32.md",sourceDirName:"leetcode/401-500",slug:"/leetcode/401-500/\u91cd\u590d\u7684\u5b50\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/401-500/\u91cd\u590d\u7684\u5b50\u5b57\u7b26\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:459,frontMatter:{},sidebar:"journal",previous:{title:"457.\u73af\u5f62\u6570\u7ec4\u662f\u5426\u5b58\u5728\u5faa\u73af",permalink:"/docs/leetcode/401-500/\u73af\u5f62\u6570\u7ec4\u662f\u5426\u5b58\u5728\u5faa\u73af"},next:{title:"460.LFU\u7f13\u5b58",permalink:"/docs/leetcode/401-500/LFU\u7f13\u5b58"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"459\u91cd\u590d\u7684\u5b50\u5b57\u7b26\u4e32",children:"459.\u91cd\u590d\u7684\u5b50\u5b57\u7b26\u4e32"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/repeated-substring-pattern",children:"459.\u91cd\u590d\u7684\u5b50\u5b57\u7b26\u4e32"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u5b57\u7b26\u4e32\u5339\u914d",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u975e\u7a7a\u7684\u5b57\u7b26\u4e32\uff0c\u5224\u65ad\u5b83\u662f\u5426\u53ef\u4ee5\u7531\u5b83\u7684\u4e00\u4e2a\u5b50\u4e32\u91cd\u590d\u591a\u6b21\u6784\u6210\u3002\u7ed9\u5b9a\u7684\u5b57\u7b26\u4e32\u53ea\u542b\u6709\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\uff0c\u5e76\u4e14\u957f\u5ea6\u4e0d\u8d85\u8fc7 10000\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-08-24"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a100ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u83b7\u53d6\u6bcf\u4e2a\u5b50\u5b57\u7b26\u4e32\u8fdb\u884c\u5224\u65ad"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function repeatedSubstringPattern(s: string): boolean {\n  const l = s.length;\n  for (let i = 1; i < l; i++) {\n    if (\n      s[i - 1] === s[l - 1] &&\n      l % i === 0 &&\n      s.replace(new RegExp(s.substring(0, i), 'g'), '') === ''\n    )\n      return true;\n  }\n  return false;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-15"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.7MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","kmp\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function repeatedSubstringPattern(s: string): boolean {\n  const next = [-1];\n  const n = s.length;\n  for (let i = 1, j = -1; i < n; i++) {\n    while (j !== -1 && s[j + 1] !== s[i]) j = next[j];\n    if (s[j + 1] === s[i]) j++;\n    next[i] = j;\n  }\n  const idx = next[n - 1];\n  return idx !== -1 && n % (n - idx - 1) === 0;\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var s=t(30758);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);