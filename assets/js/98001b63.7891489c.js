"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[88400],{41853:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>o});var l=i(86070),r=i(31503);const d={},s="LCR166.\u73e0\u5b9d\u7684\u6700\u9ad8\u4ef7\u503c",t={id:"leetcode/LCR/LCR166.\u73e0\u5b9d\u7684\u6700\u9ad8\u4ef7\u503c",title:"LCR166.\u73e0\u5b9d\u7684\u6700\u9ad8\u4ef7\u503c",description:"\u94fe\u63a5\uff1aLCR166.\u73e0\u5b9d\u7684\u6700\u9ad8\u4ef7\u503c",source:"@site/docs/leetcode/LCR/LCR166.\u73e0\u5b9d\u7684\u6700\u9ad8\u4ef7\u503c.md",sourceDirName:"leetcode/LCR",slug:"/leetcode/LCR/LCR166.\u73e0\u5b9d\u7684\u6700\u9ad8\u4ef7\u503c",permalink:"/docs/leetcode/LCR/LCR166.\u73e0\u5b9d\u7684\u6700\u9ad8\u4ef7\u503c",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"LCR165.\u89e3\u5bc6\u6570\u5b57",permalink:"/docs/leetcode/LCR/LCR165.\u89e3\u5bc6\u6570\u5b57"},next:{title:"LCR169.\u62db\u5f0f\u62c6\u89e3II",permalink:"/docs/leetcode/LCR/LCR169.\u62db\u5f0f\u62c6\u89e3II"}},c={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function j(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"lcr166\u73e0\u5b9d\u7684\u6700\u9ad8\u4ef7\u503c",children:"LCR166.\u73e0\u5b9d\u7684\u6700\u9ad8\u4ef7\u503c"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(e.a,{href:"https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof",children:"LCR166.\u73e0\u5b9d\u7684\u6700\u9ad8\u4ef7\u503c"}),(0,l.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,l.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u77e9\u9635",(0,l.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u68cb\u76d8\u53ca\u5176\u4e0a\u9762\u7684\u793c\u7269\u7684\u4ef7\u503c\uff0c\u8bf7\u8ba1\u7b97\u4f60\u6700\u591a\u80fd\u62ff\u5230\u591a\u5c11\u4ef7\u503c\u7684\u793c\u7269\uff1f\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-08"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i][j]\u8868\u793ai\u884cj\u5217\u65f6\u6700\u591a\u80fd\u62ff\u591a\u5c11\u793c\u7269\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxValue(vector<vector<int>>& grid) {\n        int n = grid.size(), m = grid[0].size(), dp[205][205] = {0};\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < m; j++) {\n                dp[i][j] = grid[i][j];\n                if (i == 0 && j != 0) dp[i][j] += dp[i][j - 1];\n                else if (i != 0 && j == 0) dp[i][j] += dp[i - 1][j];\n                else if (i != 0 && j != 0)dp[i][j] += max(dp[i - 1][j], dp[i][j - 1]);\n            }\n        }\n        return dp[n - 1][m - 1];\n    }\n};\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-08"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a64ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.6MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def maxValue(self, grid: List[List[int]]) -> int:\n        n, m = len(grid), len(grid[0])\n        dp = [[grid[i][j] for j in range(m)] for i in range(n)]\n        for i in range(n):\n            for j in range(m):\n                if i == 0 and j != 0:\n                    dp[i][j] += dp[i][j - 1]\n                elif i != 0 and j == 0:\n                    dp[i][j] += dp[i - 1][j]\n                elif i != 0 and j != 0:\n                    dp[i][j] += max(dp[i - 1][j], dp[i][j - 1])\n        return dp[n-1][m-1]\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-08"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.5MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n        pub fn max_value(grid: Vec<Vec<i32>>) -> i32 {\n            let (n, m) = (grid.len(), grid[0].len());\n            let mut dp = vec![vec![0; m]; n];\n            for i in 0..n {\n                for j in 0..m {\n                    dp[i][j] = grid[i][j];\n                    if i == 0 && j != 0 {\n                        dp[i][j] += dp[i][j - 1];\n                    } else if i != 0 && j == 0 {\n                        dp[i][j] += dp[i - 1][j];\n                    } else if i != 0 && j != 0 {\n                        dp[i][j] += dp[i - 1][j].max(dp[i][j - 1]);\n                    }\n                }\n            }\n            dp[n - 1][m - 1]\n        }\n    }\n"})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(j,{...n})}):j(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>t});var l=i(30758);const r={},d=l.createContext(r);function s(n){const e=l.useContext(d);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);