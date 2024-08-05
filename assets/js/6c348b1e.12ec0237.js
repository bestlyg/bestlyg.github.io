"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[51707],{8597:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=t(86070),i=t(25710);const r={},c="274.H\u6307\u6570",o={id:"leetcode/201-300/H\u6307\u6570",title:"274.H\u6307\u6570",description:"\u94fe\u63a5\uff1a274.H\u6307\u6570",source:"@site/docs/leetcode/201-300/274.H\u6307\u6570.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/H\u6307\u6570",permalink:"/web/site/docs/leetcode/201-300/H\u6307\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:274,frontMatter:{},sidebar:"journal",previous:{title:"273.\u6574\u6570\u8f6c\u6362\u82f1\u6587\u8868\u793a",permalink:"/web/site/docs/leetcode/201-300/\u6574\u6570\u8f6c\u6362\u82f1\u6587\u8868\u793a"},next:{title:"275.H\u6307\u6570II",permalink:"/web/site/docs/leetcode/201-300/H\u6307\u6570II"}},l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"274h\u6307\u6570",children:"274.H\u6307\u6570"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/h-index",children:"274.H\u6307\u6570"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u8ba1\u6570\u6392\u5e8f\u3001\u6392\u5e8f",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4f4d\u7814\u7a76\u8005\u8bba\u6587\u88ab\u5f15\u7528\u6b21\u6570\u7684\u6570\u7ec4\uff08\u88ab\u5f15\u7528\u6b21\u6570\u662f\u975e\u8d1f\u6574\u6570\uff09\u3002\u7f16\u5199\u4e00\u4e2a\u65b9\u6cd5\uff0c\u8ba1\u7b97\u51fa\u7814\u7a76\u8005\u7684 h \u6307\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-11"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a64ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.5MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8ba1\u6570\u6392\u5e8f\uff0c\u50a8\u5b58\u6bcf\u4e2a\u6570\u51fa\u73b0\u7684\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function hIndex(citations: number[]): number {\n  if (citations.every(v => v === 0)) return 0;\n  const max = Math.max(...citations);\n  const arr = new Array(max + 1).fill(0);\n  citations.forEach(num => arr[num]++);\n  let sum = 0;\n  let ans = 0;\n  for (let num = max; num >= 0; num--) {\n    const count = arr[num];\n    if (count === 0) continue;\n    ans = Math.max(ans, Math.min((sum += count), num));\n  }\n  return ans;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-29"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def hIndex(self, citations: List[int]) -> int:\n        n = len(citations)\n        citations.sort()\n        res = 0\n        for i in range(n):\n            if n - i <= citations[i]: res = max(res, n - i)\n        return res\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var s=t(30758);const i={},r=s.createContext(i);function c(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);