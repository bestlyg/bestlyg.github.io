"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[85058],{16586:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=i(86070),r=i(25710);const s={},l="132.\u5206\u5272\u56de\u6587\u4e32II",c={id:"leetcode/101-200/\u5206\u5272\u56de\u6587\u4e32II",title:"132.\u5206\u5272\u56de\u6587\u4e32II",description:"\u94fe\u63a5\uff1a132.\u5206\u5272\u56de\u6587\u4e32II",source:"@site/docs/leetcode/101-200/132.\u5206\u5272\u56de\u6587\u4e32II.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u5206\u5272\u56de\u6587\u4e32II",permalink:"/docs/leetcode/101-200/\u5206\u5272\u56de\u6587\u4e32II",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:132,frontMatter:{},sidebar:"journal",previous:{title:"131.\u5206\u5272\u56de\u6587\u4e32",permalink:"/docs/leetcode/101-200/\u5206\u5272\u56de\u6587\u4e32"},next:{title:"133.\u514b\u9686\u56fe",permalink:"/docs/leetcode/101-200/\u514b\u9686\u56fe"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"132\u5206\u5272\u56de\u6587\u4e32ii",children:"132.\u5206\u5272\u56de\u6587\u4e32II"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/palindrome-partitioning-ii",children:"132.\u5206\u5272\u56de\u6587\u4e32II"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 s\uff0c\u8bf7\u4f60\u5c06 s \u5206\u5272\u6210\u4e00\u4e9b\u5b50\u4e32\uff0c\u4f7f\u6bcf\u4e2a\u5b50\u4e32\u90fd\u662f\u56de\u6587\u3002\u8fd4\u56de\u7b26\u5408\u8981\u6c42\u7684 \u6700\u5c11\u5206\u5272\u6b21\u6570 \u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-08"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a160ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a57.68MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function minCut(s: string): number {\n  const len = s.length;\n  if (len <= 1) return 0;\n  const f = new Array(len).fill(0).map(() => new Array(len).fill(true));\n  for (let i = len - 1; i >= 0; --i) {\n    for (let j = i + 1; j < len; ++j) {\n      f[i][j] = s[i] === s[j] && f[i + 1][j - 1];\n    }\n  }\n  const dp: number[] = new Array(len).fill(Infinity);\n  for (let i = 0; i < len; i++) {\n    if (f[0][i]) {\n      dp[i] = 0;\n    } else {\n      for (let j = 0; j < i; j++) {\n        if (f[j + 1][i]) {\n          dp[i] = Math.min(dp[i], dp[j] + 1);\n        }\n      }\n    }\n  }\n  return dp[len - 1];\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-12"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a220ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a76.6MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5148\u7edf\u8ba1\u6240\u6709\u7684\u4ee5 i \u5f00\u5934 j \u7ed3\u5c3e\u7684\u56de\u6587\u5b57\u7b26\u4e32\uff0c\u8fdb\u884c\u52a8\u6001\u89c4\u5212\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function getArr(s: string) {\n  const n = s.length;\n  const ans = new Array(n).fill(0).map(_ => new Array(n).fill(false));\n  const load = (l: number, r: number) => {\n    while (l >= 0 && r < n && s[l] === s[r]) ans[l--][r++] = true;\n  };\n  for (let i = 0; i < n; i++) {\n    load(i, i);\n    if (i < n - 1) load(i, i + 1);\n  }\n  return ans;\n}\nfunction minCut(s: string): number {\n  const n = s.length;\n  const arr = getArr(s);\n  const dp = new Array(n).fill(0).map((_, i) => i);\n  for (let i = 0; i < n; i++) {\n    if (arr[0][i]) {\n      dp[i] = 0;\n      continue;\n    }\n    for (let j = 0; j + 1 <= i; j++) {\n      if (!arr[j + 1][i]) continue;\n      dp[i] = Math.min(dp[i], dp[j] + 1);\n    }\n  }\n  return dp[n - 1];\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var t=i(30758);const r={},s=t.createContext(r);function l(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);