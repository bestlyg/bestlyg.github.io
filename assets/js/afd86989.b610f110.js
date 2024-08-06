"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[3468],{83269:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(86070),r=t(25710);const s={},c="279.\u5b8c\u5168\u5e73\u65b9\u6570",l={id:"leetcode/201-300/\u5b8c\u5168\u5e73\u65b9\u6570",title:"279.\u5b8c\u5168\u5e73\u65b9\u6570",description:"\u94fe\u63a5\uff1a279.\u5b8c\u5168\u5e73\u65b9\u6570",source:"@site/docs/leetcode/201-300/279.\u5b8c\u5168\u5e73\u65b9\u6570.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u5b8c\u5168\u5e73\u65b9\u6570",permalink:"/docs/leetcode/201-300/\u5b8c\u5168\u5e73\u65b9\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:279,frontMatter:{},sidebar:"journal",previous:{title:"278.\u7b2c\u4e00\u4e2a\u9519\u8bef\u7684\u7248\u672c",permalink:"/docs/leetcode/201-300/\u7b2c\u4e00\u4e2a\u9519\u8bef\u7684\u7248\u672c"},next:{title:"282.\u7ed9\u8868\u8fbe\u5f0f\u6dfb\u52a0\u8fd0\u7b97\u7b26",permalink:"/docs/leetcode/201-300/\u7ed9\u8868\u8fbe\u5f0f\u6dfb\u52a0\u8fd0\u7b97\u7b26"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"279\u5b8c\u5168\u5e73\u65b9\u6570",children:"279.\u5b8c\u5168\u5e73\u65b9\u6570"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/perfect-squares",children:"279.\u5b8c\u5168\u5e73\u65b9\u6570"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u5b66\u3001\u52a8\u6001\u89c4\u5212",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570 n \uff0c\u8fd4\u56de\u548c\u4e3a n \u7684\u5b8c\u5168\u5e73\u65b9\u6570\u7684 \u6700\u5c11\u6570\u91cf \u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-06-11"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a292ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.8MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u80cc\u5305\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function numSquares(n: number): number {\n  let MAX = 1;\n  const dp = new Array(n + 1).fill(Infinity);\n  dp[0] = 0;\n  dp[1] = 1;\n  for (let i = 2; i <= n; i++) {\n    while (MAX ** 2 <= i) MAX++;\n    for (let j = MAX - 1; j >= 1; j--) {\n      const num = j ** 2;\n      if (num > i) continue;\n      const count = ~~(i / num);\n      dp[i] = Math.min(dp[i], dp[i - num * count] + count);\n    }\n  }\n  return dp[n];\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-22"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a200ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.9MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u80cc\u5305\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function numSquares(n: number): number {\n  const dp = new Array(n + 1).fill(Infinity);\n  dp[0] = 0;\n  dp[1] = 1;\n  for (let i = 2; i < n + 1; i++) {\n    for (let j = 1; j ** 2 <= i; j++) {\n      dp[i] = Math.min(dp[i - j ** 2] + 1, dp[i]);\n    }\n  }\n  return dp[n];\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var i=t(30758);const r={},s=i.createContext(r);function c(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);