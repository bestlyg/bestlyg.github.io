"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[13165],{74935:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=i(86070),s=i(25710);const r={},l="410.\u5206\u5272\u6570\u7ec4\u7684\u6700\u5927\u503c",c={id:"leetcode/401-500/\u5206\u5272\u6570\u7ec4\u7684\u6700\u5927\u503c",title:"410.\u5206\u5272\u6570\u7ec4\u7684\u6700\u5927\u503c",description:"\u94fe\u63a5\uff1a410.\u5206\u5272\u6570\u7ec4\u7684\u6700\u5927\u503c",source:"@site/docs/leetcode/401-500/410.\u5206\u5272\u6570\u7ec4\u7684\u6700\u5927\u503c.md",sourceDirName:"leetcode/401-500",slug:"/leetcode/401-500/\u5206\u5272\u6570\u7ec4\u7684\u6700\u5927\u503c",permalink:"/web/site/docs/leetcode/401-500/\u5206\u5272\u6570\u7ec4\u7684\u6700\u5927\u503c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:410,frontMatter:{},sidebar:"journal",previous:{title:"409.\u6700\u957f\u56de\u6587\u4e32",permalink:"/web/site/docs/leetcode/401-500/\u6700\u957f\u56de\u6587\u4e32"},next:{title:"412.FizzBuzz",permalink:"/web/site/docs/leetcode/401-500/FizzBuzz"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"410\u5206\u5272\u6570\u7ec4\u7684\u6700\u5927\u503c",children:"410.\u5206\u5272\u6570\u7ec4\u7684\u6700\u5927\u503c"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/split-array-largest-sum",children:"410.\u5206\u5272\u6570\u7ec4\u7684\u6700\u5927\u503c"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u52a8\u6001\u89c4\u5212\u3001\u524d\u7f00\u548c",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u975e\u8d1f\u6574\u6570\u6570\u7ec4 nums \u548c\u4e00\u4e2a\u6574\u6570 k \uff0c\u4f60\u9700\u8981\u5c06\u8fd9\u4e2a\u6570\u7ec4\u5206\u6210 k \u4e2a\u975e\u7a7a\u7684\u8fde\u7eed\u5b50\u6570\u7ec4\u3002\u8bbe\u8ba1\u4e00\u4e2a\u7b97\u6cd5\u4f7f\u5f97\u8fd9 k \u4e2a\u5b50\u6570\u7ec4\u5404\u81ea\u548c\u7684\u6700\u5927\u503c\u6700\u5c0f\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-07-25"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a188ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.68MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i][j] = \u5206\u6210i\u4efd\u65f6\uff0c\u53ea\u6709\u524dj\u4e2a\u5143\u7d20\u65f6\u7684\u6700\u5c0f\u503c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function splitArray(nums: number[], m: number): number {\n    const n = nums.length;\n    const dp = new Array(n + 1)\n        .fill(0)\n        .map((_) => new Array(m + 1).fill(Infinity));\n    dp[0][0] = 0;\n    const sub = new Array(n + 1).fill(0);\n    for (let i = 0; i < n; i++) sub[i + 1] = sub[i] + nums[i];\n    for (let i = 1; i <= n; i++) {\n        for (let j = 1; j <= Math.min(i, m); j++) {\n        for (let k = 0; k < i; k++) {\n            dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j - 1], sub[i] - sub[k]));\n        }\n        }\n    }\n    return dp[n][m];\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-01-21"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a7699ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.83MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i][j] = \u5206\u6210i\u4efd\u65f6\uff0c\u53ea\u6709\u524dj\u4e2a\u5143\u7d20\u65f6\u7684\u6700\u5c0f\u503c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def splitArray(self, nums: List[int], k: int) -> int:\n        n = len(nums)\n        dp = [[inf] * (n + 1) for _ in range(k + 1)]\n        dp[1][0] = 0\n        for i in range(1, n + 1): dp[1][i] = dp[1][i - 1] + nums[i - 1]\n        for k in range(2, k + 1):\n            for i in range(k, n + 1):\n                num = 0\n                for j in range(i, k - 1, -1):\n                    num += nums[j - 1]\n                    dp[k][i] = min(dp[k][i], max(dp[k - 1][j - 1], num))\n        return dp[k][n]\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var t=i(30758);const s={},r=t.createContext(s);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);