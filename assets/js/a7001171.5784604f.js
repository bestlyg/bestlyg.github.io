"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[35693],{46529:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(86070),r=t(31503);const i={},c="115.\u4e0d\u540c\u7684\u5b50\u5e8f\u5217",o={id:"leetcode/101-200/\u4e0d\u540c\u7684\u5b50\u5e8f\u5217",title:"115.\u4e0d\u540c\u7684\u5b50\u5e8f\u5217",description:"\u94fe\u63a5\uff1a115.\u4e0d\u540c\u7684\u5b50\u5e8f\u5217",source:"@site/docs/leetcode/101-200/115.\u4e0d\u540c\u7684\u5b50\u5e8f\u5217.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u4e0d\u540c\u7684\u5b50\u5e8f\u5217",permalink:"/docs/leetcode/101-200/\u4e0d\u540c\u7684\u5b50\u5e8f\u5217",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:115,frontMatter:{},sidebar:"journal",previous:{title:"114.\u4e8c\u53c9\u6811\u5c55\u5f00\u4e3a\u94fe\u8868",permalink:"/docs/leetcode/101-200/\u4e8c\u53c9\u6811\u5c55\u5f00\u4e3a\u94fe\u8868"},next:{title:"116.\u586b\u5145\u6bcf\u4e2a\u8282\u70b9\u7684\u4e0b\u4e00\u4e2a\u53f3\u4fa7\u8282\u70b9\u6307\u9488",permalink:"/docs/leetcode/101-200/\u586b\u5145\u6bcf\u4e2a\u8282\u70b9\u7684\u4e0b\u4e00\u4e2a\u53f3\u4fa7\u8282\u70b9\u6307\u9488"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"115\u4e0d\u540c\u7684\u5b50\u5e8f\u5217",children:"115.\u4e0d\u540c\u7684\u5b50\u5e8f\u5217"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/distinct-subsequences",children:"115.\u4e0d\u540c\u7684\u5b50\u5e8f\u5217"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32 s \u548c\u4e00\u4e2a\u5b57\u7b26\u4e32 t \uff0c\u8ba1\u7b97\u5728 s \u7684\u5b50\u5e8f\u5217\u4e2d t \u51fa\u73b0\u7684\u4e2a\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-17"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a100ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.6MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","[\u53c2\u8003\u94fe\u63a5](https://leetcode-cn.com/problems/distinct-subsequences/solution/bu-tong-de-zi-xu-lie-by-leetcode-solutio-urw3/)\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function generateMatrix(n: number): number[][] {\n        const ans: number[][] = new Array(n).fill(0).map(_ => new Array(n));\n        let num = 1;\n        dfs(0, n - 1);\n        retfunction numDistinct(s: string, t: string): number {\n          const sLen = s.length;\n          const tLen = t.length;\n          if (sLen < tLen) return 0;\n          const dp = new Array(sLen + 1).fill(0).map(_ => new Array(tLen + 1).fill(0));\n          for (let i = 0; i <= sLen; i++) dp[i][tLen] = 1;\n          for (let i = sLen - 1; i >= 0; i--) {\n            for (let j = tLen - 1; j >= 0; j--) {\n              if (s[i] === t[j]) {\n                dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];\n              } else {\n                dp[i][j] = dp[i + 1][j];\n              }\n            }\n          }\n          return dp[0][0];\n        }\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(30758);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);