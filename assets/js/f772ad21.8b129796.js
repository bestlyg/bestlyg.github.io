"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[36113],{94155:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=t(86070),s=t(25710);const c={},i="397.\u6574\u6570\u66ff\u6362",o={id:"leetcode/301-400/\u6574\u6570\u66ff\u6362",title:"397.\u6574\u6570\u66ff\u6362",description:"\u94fe\u63a5\uff1a397.\u6574\u6570\u66ff\u6362",source:"@site/docs/leetcode/301-400/397.\u6574\u6570\u66ff\u6362.md",sourceDirName:"leetcode/301-400",slug:"/leetcode/301-400/\u6574\u6570\u66ff\u6362",permalink:"/web/site/docs/leetcode/301-400/\u6574\u6570\u66ff\u6362",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:397,frontMatter:{},sidebar:"journal",previous:{title:"396.\u65cb\u8f6c\u51fd\u6570",permalink:"/web/site/docs/leetcode/301-400/\u65cb\u8f6c\u51fd\u6570"},next:{title:"398.\u968f\u673a\u6570\u7d22\u5f15",permalink:"/web/site/docs/leetcode/301-400/\u968f\u673a\u6570\u7d22\u5f15"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"397\u6574\u6570\u66ff\u6362",children:"397.\u6574\u6570\u66ff\u6362"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/integer-replacement",children:"397.\u6574\u6570\u66ff\u6362"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u4f4d\u8fd0\u7b97\u3001\u8bb0\u5fc6\u5316\u641c\u7d22\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6b63\u6574\u6570 n \uff0cn \u53d8\u4e3a 1 \u6240\u9700\u7684\u6700\u5c0f\u66ff\u6362\u6b21\u6570\u662f\u591a\u5c11\uff1f\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-19"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.4MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const map: Record<number, number> = { 1: 0 };\nfunction integerReplacement(n: number): number {\n  if (map[n] !== undefined) return map[n];\n  const ans =\n    (n & 1\n      ? Math.min(integerReplacement(n + 1), integerReplacement(n - 1))\n      : integerReplacement(n / 2)) + 1;\n  return (map[n] = ans);\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(30758);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);