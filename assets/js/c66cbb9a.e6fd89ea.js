"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[48339],{18761:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=t(86070),s=t(25710);const c={},i="387.\u5b57\u7b26\u4e32\u4e2d\u7684\u7b2c\u4e00\u4e2a\u552f\u4e00\u5b57\u7b26",o={id:"leetcode/301-400/\u5b57\u7b26\u4e32\u4e2d\u7684\u7b2c\u4e00\u4e2a\u552f\u4e00\u5b57\u7b26",title:"387.\u5b57\u7b26\u4e32\u4e2d\u7684\u7b2c\u4e00\u4e2a\u552f\u4e00\u5b57\u7b26",description:"\u94fe\u63a5\uff1a387.\u5b57\u7b26\u4e32\u4e2d\u7684\u7b2c\u4e00\u4e2a\u552f\u4e00\u5b57\u7b26",source:"@site/docs/leetcode/301-400/387.\u5b57\u7b26\u4e32\u4e2d\u7684\u7b2c\u4e00\u4e2a\u552f\u4e00\u5b57\u7b26.md",sourceDirName:"leetcode/301-400",slug:"/leetcode/301-400/\u5b57\u7b26\u4e32\u4e2d\u7684\u7b2c\u4e00\u4e2a\u552f\u4e00\u5b57\u7b26",permalink:"/docs/leetcode/301-400/\u5b57\u7b26\u4e32\u4e2d\u7684\u7b2c\u4e00\u4e2a\u552f\u4e00\u5b57\u7b26",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:387,frontMatter:{},sidebar:"journal",previous:{title:"386.\u5b57\u5178\u5e8f\u6392\u6570",permalink:"/docs/leetcode/301-400/\u5b57\u5178\u5e8f\u6392\u6570"},next:{title:"388.\u6587\u4ef6\u7684\u6700\u957f\u7edd\u5bf9\u8def\u5f84",permalink:"/docs/leetcode/301-400/\u6587\u4ef6\u7684\u6700\u957f\u7edd\u5bf9\u8def\u5f84"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"387\u5b57\u7b26\u4e32\u4e2d\u7684\u7b2c\u4e00\u4e2a\u552f\u4e00\u5b57\u7b26",children:"387.\u5b57\u7b26\u4e32\u4e2d\u7684\u7b2c\u4e00\u4e2a\u552f\u4e00\u5b57\u7b26"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/first-unique-character-in-a-string",children:"387.\u5b57\u7b26\u4e32\u4e2d\u7684\u7b2c\u4e00\u4e2a\u552f\u4e00\u5b57\u7b26"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u961f\u5217\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u8ba1\u6570",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u627e\u5230\u5b83\u7684\u7b2c\u4e00\u4e2a\u4e0d\u91cd\u590d\u7684\u5b57\u7b26\uff0c\u5e76\u8fd4\u56de\u5b83\u7684\u7d22\u5f15\u3002\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de -1\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-12-23"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a160ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43.4MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u540e\u50a8\u5b58\u6210 set\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function firstUniqChar(s: string): number {\n  const dict: Record<string, number> = {};\n  for (const c of s) {\n    dict[c] = (dict[c] ?? 0) + 1;\n  }\n  const set = new Set(\n    Object.entries(dict)\n      .filter(([, v]) => v === 1)\n      .map(([k]) => k)\n  );\n  for (let i = 0, l = s.length; i < l; i++) {\n    if (set.has(s[i])) return i;\n  }\n  return -1;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(30758);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);