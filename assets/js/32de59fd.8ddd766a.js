"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[20753],{32455:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var r=t(86070),c=t(25710);const s={},o="1002.\u67e5\u627e\u5171\u7528\u5b57\u7b26",i={id:"leetcode/1001-1100/\u67e5\u627e\u5171\u7528\u5b57\u7b26",title:"1002.\u67e5\u627e\u5171\u7528\u5b57\u7b26",description:"\u94fe\u63a5\uff1a1002.\u67e5\u627e\u5171\u7528\u5b57\u7b26",source:"@site/docs/leetcode/1001-1100/1002.\u67e5\u627e\u5171\u7528\u5b57\u7b26.md",sourceDirName:"leetcode/1001-1100",slug:"/leetcode/1001-1100/\u67e5\u627e\u5171\u7528\u5b57\u7b26",permalink:"/docs/leetcode/1001-1100/\u67e5\u627e\u5171\u7528\u5b57\u7b26",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1002,frontMatter:{},sidebar:"journal",previous:{title:"1001.\u7f51\u683c\u7167\u660e",permalink:"/docs/leetcode/1001-1100/\u7f51\u683c\u7167\u660e"},next:{title:"1003.\u68c0\u67e5\u66ff\u6362\u540e\u7684\u8bcd\u662f\u5426\u6709\u6548",permalink:"/docs/leetcode/1001-1100/\u68c0\u67e5\u66ff\u6362\u540e\u7684\u8bcd\u662f\u5426\u6709\u6548"}},l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1002\u67e5\u627e\u5171\u7528\u5b57\u7b26",children:"1002.\u67e5\u627e\u5171\u7528\u5b57\u7b26"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/find-common-characters",children:"1002.\u67e5\u627e\u5171\u7528\u5b57\u7b26"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4ec5\u6709\u5c0f\u5199\u5b57\u6bcd\u7ec4\u6210\u7684\u5b57\u7b26\u4e32\u6570\u7ec4 A\uff0c\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u6bcf\u4e2a\u5b57\u7b26\u4e32\u4e2d\u90fd\u663e\u793a\u7684\u5168\u90e8\u5b57\u7b26\uff08\u5305\u62ec\u91cd\u590d\u5b57\u7b26\uff09\u7ec4\u6210\u7684\u5217\u8868\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4e00\u4e2a\u5b57\u7b26\u5728\u6bcf\u4e2a\u5b57\u7b26\u4e32\u4e2d\u51fa\u73b0 3 \u6b21\uff0c\u4f46\u4e0d\u662f 4 \u6b21\uff0c\u5219\u9700\u8981\u5728\u6700\u7ec8\u7b54\u6848\u4e2d\u5305\u542b\u8be5\u5b57\u7b26 3 \u6b21\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-10-14"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a120ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.7MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8ba1\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function commonChars(A: string[]): string[] {\n  if (A.length === 0) return [];\n  else if (A.length === 1) return A[0].split('');\n  const cache: number[] = new Array(26).fill(Infinity);\n  const compIndex = (c: string) => c.charCodeAt(0) - 'a'.charCodeAt(0);\n  for (const str of A) {\n    const count: number[] = new Array(26).fill(0);\n    const addCount = (i: number) => (count[i] = 1 + (count[i] ?? 0));\n    for (const c of str) {\n      addCount(compIndex(c));\n    }\n    count.forEach((v, i) => (cache[i] = Math.min(cache[i], v)));\n  }\n  const ans: string[] = [];\n  for (let i = 0; i < 26; i++) {\n    const v = cache[i];\n    if (v === Infinity) continue;\n    new Array(v).fill(0).forEach(_ => ans.push(String.fromCharCode(i + 97)));\n  }\n  return ans;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(30758);const c={},s=r.createContext(c);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);