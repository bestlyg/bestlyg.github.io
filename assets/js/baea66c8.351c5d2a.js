"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[45339],{5011:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var i=t(86070),s=t(25710);const c={},r="LCR091.\u7c89\u5237\u623f\u5b50",d={id:"leetcode/LCR/LCR091.\u7c89\u5237\u623f\u5b50",title:"LCR091.\u7c89\u5237\u623f\u5b50",description:"\u94fe\u63a5\uff1aLCR091.\u7c89\u5237\u623f\u5b50",source:"@site/docs/leetcode/LCR/LCR091.\u7c89\u5237\u623f\u5b50.md",sourceDirName:"leetcode/LCR",slug:"/leetcode/LCR/LCR091.\u7c89\u5237\u623f\u5b50",permalink:"/docs/leetcode/LCR/LCR091.\u7c89\u5237\u623f\u5b50",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"LCR074.\u5408\u5e76\u533a\u95f4",permalink:"/docs/leetcode/LCR/LCR074.\u5408\u5e76\u533a\u95f4"},next:{title:"LCR114.\u706b\u661f\u8bcd\u5178",permalink:"/docs/leetcode/LCR/LCR114.\u706b\u661f\u8bcd\u5178"}},o={},l=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"lcr091\u7c89\u5237\u623f\u5b50",children:"LCR091.\u7c89\u5237\u623f\u5b50"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/JEj789",children:"LCR091.\u7c89\u5237\u623f\u5b50"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u8ba1\u7b97\u51fa\u7c89\u5237\u5b8c\u6240\u6709\u623f\u5b50\u6700\u5c11\u7684\u82b1\u8d39\u6210\u672c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-03"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a108ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.5MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function minCost(costs: number[][]): number {\n  const n = costs.length;\n  const dp: number[][] = new Array(2).fill(0).map(_ => new Array(3).fill(Infinity));\n  for (let i = 0; i < 3; i++) dp[0][i] = costs[0][i];\n  for (let i = 1; i < n; i++) {\n    const idx = i % 2;\n    const prevIdx = idx ^ 1;\n    dp[idx][0] = Math.min(dp[prevIdx][1], dp[prevIdx][2]) + costs[i][0];\n    dp[idx][1] = Math.min(dp[prevIdx][0], dp[prevIdx][2]) + costs[i][1];\n    dp[idx][2] = Math.min(dp[prevIdx][1], dp[prevIdx][0]) + costs[i][2];\n  }\n  return Math.min(...dp[(n - 1) % 2]);\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-06-25"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.6MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int minCost(vector<vector<int>>& costs) {\n        int n = costs.size(), ans = INT_MAX;\n        vector<vector<int>> dp(3, vector<int>(n, 0));\n        for (int i = 0; i < 3; i++) dp[i][0] = costs[0][i];\n        for (int j = 1; j < n; j++) {\n            dp[0][j] = min(dp[1][j - 1], dp[2][j - 1]) + costs[j][0];\n            dp[1][j] = min(dp[0][j - 1], dp[2][j - 1]) + costs[j][1];\n            dp[2][j] = min(dp[0][j - 1], dp[1][j - 1]) + costs[j][2];\n        }\n        for (int i = 0; i < 3; i++) ans = min(ans, dp[i][n - 1]);\n        return ans;\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>d});var i=t(30758);const s={},c=i.createContext(s);function r(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);