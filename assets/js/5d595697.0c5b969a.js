"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[81251],{39333:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(86070),s=t(25710);const o={},c="748.\u6700\u77ed\u8865\u5168\u8bcd",i={id:"leetcode/701-800/\u6700\u77ed\u8865\u5168\u8bcd",title:"748.\u6700\u77ed\u8865\u5168\u8bcd",description:"\u94fe\u63a5\uff1a748.\u6700\u77ed\u8865\u5168\u8bcd",source:"@site/docs/leetcode/701-800/748.\u6700\u77ed\u8865\u5168\u8bcd.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u6700\u77ed\u8865\u5168\u8bcd",permalink:"/docs/leetcode/701-800/\u6700\u77ed\u8865\u5168\u8bcd",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:748,frontMatter:{},sidebar:"journal",previous:{title:"747.\u81f3\u5c11\u662f\u5176\u4ed6\u6570\u5b57\u4e24\u500d\u7684\u6700\u5927\u6570",permalink:"/docs/leetcode/701-800/\u81f3\u5c11\u662f\u5176\u4ed6\u6570\u5b57\u4e24\u500d\u7684\u6700\u5927\u6570"},next:{title:"752.\u6253\u5f00\u8f6c\u76d8\u9501",permalink:"/docs/leetcode/701-800/\u6253\u5f00\u8f6c\u76d8\u9501"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"748\u6700\u77ed\u8865\u5168\u8bcd",children:"748.\u6700\u77ed\u8865\u5168\u8bcd"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/shortest-completing-word",children:"748.\u6700\u77ed\u8865\u5168\u8bcd"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 licensePlate \u548c\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4 words \uff0c\u8bf7\u4f60\u627e\u51fa\u5e76\u8fd4\u56de words \u4e2d\u7684 \u6700\u77ed\u8865\u5168\u8bcd \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-10"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.9MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function shortestCompletingWord(licensePlate: string, words: string[]): string {\n  const reg_lowchar = /[a-z]/;\n  const map: Record<string, number> = {};\n  for (const ch of licensePlate.toLowerCase()) {\n    if (reg_lowchar.test(ch)) map[ch] = (map[ch] ?? 0) + 1;\n  }\n  return words\n    .filter(word => {\n      const wmap = { ...map };\n      for (const ch of word) {\n        if (wmap[ch]) wmap[ch]--;\n      }\n      return Object.values(wmap).every(v => v <= 0);\n    })\n    .sort((a, b) => a.length - b.length)[0];\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(30758);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);