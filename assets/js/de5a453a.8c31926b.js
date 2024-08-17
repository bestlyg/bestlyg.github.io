"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[88997],{2445:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=t(86070),s=t(25710);const c={},i="629.K\u4e2a\u9006\u5e8f\u5bf9\u6570\u7ec4",o={id:"leetcode/601-700/K\u4e2a\u9006\u5e8f\u5bf9\u6570\u7ec4",title:"629.K\u4e2a\u9006\u5e8f\u5bf9\u6570\u7ec4",description:"\u94fe\u63a5\uff1a629.K\u4e2a\u9006\u5e8f\u5bf9\u6570\u7ec4",source:"@site/docs/leetcode/601-700/629.K\u4e2a\u9006\u5e8f\u5bf9\u6570\u7ec4.md",sourceDirName:"leetcode/601-700",slug:"/leetcode/601-700/K\u4e2a\u9006\u5e8f\u5bf9\u6570\u7ec4",permalink:"/docs/leetcode/601-700/K\u4e2a\u9006\u5e8f\u5bf9\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:629,frontMatter:{},sidebar:"journal",previous:{title:"628.\u4e09\u4e2a\u6570\u7684\u6700\u5927\u4e58\u79ef",permalink:"/docs/leetcode/601-700/\u4e09\u4e2a\u6570\u7684\u6700\u5927\u4e58\u79ef"},next:{title:"630.\u8bfe\u7a0b\u8868III",permalink:"/docs/leetcode/601-700/\u8bfe\u7a0b\u8868III"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"629k\u4e2a\u9006\u5e8f\u5bf9\u6570\u7ec4",children:"629.K\u4e2a\u9006\u5e8f\u5bf9\u6570\u7ec4"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/k-inverse-pairs-array",children:"629.K\u4e2a\u9006\u5e8f\u5bf9\u6570\u7ec4"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u52a8\u6001\u89c4\u5212",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u51fa\u4e24\u4e2a\u6574\u6570 n \u548c k\uff0c\u627e\u51fa\u6240\u6709\u5305\u542b\u4ece 1 \u5230 n \u7684\u6570\u5b57\uff0c\u4e14\u6070\u597d\u62e5\u6709 k \u4e2a\u9006\u5e8f\u5bf9\u7684\u4e0d\u540c\u7684\u6570\u7ec4\u7684\u4e2a\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-11"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a5508ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.3MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function kInversePairs(n: number, k: number): number {\n  if (k === 0) return 1;\n  const MOD = 10 ** 9 + 7;\n  const dp: Map<number, number>[] = new Array(2).fill(0).map(_ => new Map());\n  dp[0].set(0, 1);\n  for (let i = 1; i < n; i++) {\n    const map = dp[i % 2];\n    map.clear();\n    for (const [num, cnt] of dp[(i - 1) % 2].entries()) {\n      for (let j = 0; j <= i; j++) {\n        if (num + j > k) break;\n        const cur = map.get(num + j) ?? 0;\n        map.set(num + j, (cur + cnt) % MOD);\n      }\n    }\n  }\n  return dp[(n - 1) % 2].get(k) ?? 0;\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(30758);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);