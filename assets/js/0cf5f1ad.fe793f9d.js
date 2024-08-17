"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[88227],{9290:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var r=t(86070),s=t(25710);const c={},o="696.\u8ba1\u6570\u4e8c\u8fdb\u5236\u5b50\u4e32",i={id:"leetcode/601-700/\u8ba1\u6570\u4e8c\u8fdb\u5236\u5b50\u4e32",title:"696.\u8ba1\u6570\u4e8c\u8fdb\u5236\u5b50\u4e32",description:"\u94fe\u63a5\uff1a696.\u8ba1\u6570\u4e8c\u8fdb\u5236\u5b50\u4e32",source:"@site/docs/leetcode/601-700/696.\u8ba1\u6570\u4e8c\u8fdb\u5236\u5b50\u4e32.md",sourceDirName:"leetcode/601-700",slug:"/leetcode/601-700/\u8ba1\u6570\u4e8c\u8fdb\u5236\u5b50\u4e32",permalink:"/docs/leetcode/601-700/\u8ba1\u6570\u4e8c\u8fdb\u5236\u5b50\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:696,frontMatter:{},sidebar:"journal",previous:{title:"693.\u4ea4\u66ff\u4f4d\u4e8c\u8fdb\u5236\u6570",permalink:"/docs/leetcode/601-700/\u4ea4\u66ff\u4f4d\u4e8c\u8fdb\u5236\u6570"},next:{title:"697.\u6570\u7ec4\u7684\u5ea6",permalink:"/docs/leetcode/601-700/\u6570\u7ec4\u7684\u5ea6"}},l={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"696\u8ba1\u6570\u4e8c\u8fdb\u5236\u5b50\u4e32",children:"696.\u8ba1\u6570\u4e8c\u8fdb\u5236\u5b50\u4e32"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/count-binary-substrings",children:"696.\u8ba1\u6570\u4e8c\u8fdb\u5236\u5b50\u4e32"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32 s\uff0c\u8ba1\u7b97\u5177\u6709\u76f8\u540c\u6570\u91cf 0 \u548c 1 \u7684\u975e\u7a7a(\u8fde\u7eed)\u5b50\u5b57\u7b26\u4e32\u7684\u6570\u91cf\uff0c\u5e76\u4e14\u8fd9\u4e9b\u5b50\u5b57\u7b26\u4e32\u4e2d\u7684\u6240\u6709 0 \u548c\u6240\u6709 1 \u90fd\u662f\u7ec4\u5408\u5728\u4e00\u8d77\u7684\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-08-10"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.5MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u540e\u83b7\u53d6\u6bcf\u6b21 0 \u6216 1 \u540c\u65f6\u51fa\u73b0\u7684\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function countBinarySubstrings(s: string): number {\n  const arr: number[] = [];\n  let count = 0;\n  let prev = '';\n  for (const c of s) {\n    if (c !== prev) {\n      arr.push(count);\n      count = 1;\n    } else {\n      count++;\n    }\n    prev = c;\n  }\n  arr.push(count);\n  let ans = 0;\n  for (let i = 0, l = arr.length; i < l - 1; i++) {\n    const num1 = arr[i];\n    const num2 = arr[i + 1];\n    ans += Math.min(num1, num2);\n  }\n  return ans;\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>i});var r=t(30758);const s={},c=r.createContext(s);function o(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);