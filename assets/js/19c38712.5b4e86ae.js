"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[48537],{27145:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var i=c(86070),s=c(25710);const t={},o="1595.\u8fde\u901a\u4e24\u7ec4\u70b9\u7684\u6700\u5c0f\u6210\u672c",r={id:"leetcode/1501-1600/\u8fde\u901a\u4e24\u7ec4\u70b9\u7684\u6700\u5c0f\u6210\u672c",title:"1595.\u8fde\u901a\u4e24\u7ec4\u70b9\u7684\u6700\u5c0f\u6210\u672c",description:"\u94fe\u63a5\uff1a1595.\u8fde\u901a\u4e24\u7ec4\u70b9\u7684\u6700\u5c0f\u6210\u672c",source:"@site/docs/leetcode/1501-1600/1595.\u8fde\u901a\u4e24\u7ec4\u70b9\u7684\u6700\u5c0f\u6210\u672c.md",sourceDirName:"leetcode/1501-1600",slug:"/leetcode/1501-1600/\u8fde\u901a\u4e24\u7ec4\u70b9\u7684\u6700\u5c0f\u6210\u672c",permalink:"/docs/leetcode/1501-1600/\u8fde\u901a\u4e24\u7ec4\u70b9\u7684\u6700\u5c0f\u6210\u672c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1595,frontMatter:{},sidebar:"journal",previous:{title:"1592.\u91cd\u65b0\u6392\u5217\u5355\u8bcd\u95f4\u7684\u7a7a\u683c",permalink:"/docs/leetcode/1501-1600/\u91cd\u65b0\u6392\u5217\u5355\u8bcd\u95f4\u7684\u7a7a\u683c"},next:{title:"1598.\u6587\u4ef6\u5939\u64cd\u4f5c\u65e5\u5fd7\u641c\u96c6\u5668",permalink:"/docs/leetcode/1501-1600/\u6587\u4ef6\u5939\u64cd\u4f5c\u65e5\u5fd7\u641c\u96c6\u5668"}},l={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"1595\u8fde\u901a\u4e24\u7ec4\u70b9\u7684\u6700\u5c0f\u6210\u672c",children:"1595.\u8fde\u901a\u4e24\u7ec4\u70b9\u7684\u6700\u5c0f\u6210\u672c"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/minimum-cost-to-connect-two-groups-of-points",children:"1595.\u8fde\u901a\u4e24\u7ec4\u70b9\u7684\u6700\u5c0f\u6210\u672c"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u72b6\u6001\u538b\u7f29\u3001\u77e9\u9635",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e24\u7ec4\u70b9\uff0c\u5176\u4e2d\u7b2c\u4e00\u7ec4\u4e2d\u6709 size1 \u4e2a\u70b9\uff0c\u7b2c\u4e8c\u7ec4\u4e2d\u6709 size2 \u4e2a\u70b9\uff0c\u4e14 size1 >= size2 \u3002\u4efb\u610f\u4e24\u70b9\u95f4\u7684\u8fde\u63a5\u6210\u672c cost \u7531\u5927\u5c0f\u4e3a size1 x size2 \u77e9\u9635\u7ed9\u51fa\uff0c\u5176\u4e2d cost[i][j] \u662f\u7b2c\u4e00\u7ec4\u4e2d\u7684\u70b9 i \u548c\u7b2c\u4e8c\u7ec4\u4e2d\u7684\u70b9 j \u7684\u8fde\u63a5\u6210\u672c\u3002\u5982\u679c\u4e24\u4e2a\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u70b9\u90fd\u4e0e\u53e6\u4e00\u7ec4\u4e2d\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u70b9\u8fde\u63a5\uff0c\u5219\u79f0\u8fd9\u4e24\u7ec4\u70b9\u662f\u8fde\u901a\u7684\u3002\u6362\u8a00\u4e4b\uff0c\u7b2c\u4e00\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u70b9\u5fc5\u987b\u81f3\u5c11\u4e0e\u7b2c\u4e8c\u7ec4\u4e2d\u7684\u4e00\u4e2a\u70b9\u8fde\u63a5\uff0c\u4e14\u7b2c\u4e8c\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u70b9\u5fc5\u987b\u81f3\u5c11\u4e0e\u7b2c\u4e00\u7ec4\u4e2d\u7684\u4e00\u4e2a\u70b9\u8fde\u63a5\u3002\u8fd4\u56de\u8fde\u901a\u4e24\u7ec4\u70b9\u6240\u9700\u7684\u6700\u5c0f\u6210\u672c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-20"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.8MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i][j]\u8868\u793a\u53ea\u6709i\u4e2a\u7b2c\u4e00\u884c\u5143\u7d20\u7684\u65f6\u5019\uff0c\u5df2\u7ecf\u4f7f\u7528\u4e86bitcount(j)\u4e2a\u7b2c\u4e8c\u884c\u5143\u7d20\u65f6\u7684\u6700\u5c0f\u5f00\u9500\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int connectTwoGroups(vector<vector<int>>& cost) {\n        int n = cost.size(), m = cost[0].size();\n        vector<vector<int>>cache(n + 1, vector<int>(1 << m, 0x3f3f3f3f));\n        cache[0][0] = 0;\n        for (int i = 1; i <= n; i++) {\n            for (int mask = 0; mask < (1 << m); mask++) {\n                for (int j = 0; j < m; j++) {\n                    if (mask & (1 << j)) {\n                        cache[i][mask] = min(cache[i][mask], cache[i][mask & ~(1 << j)] + cost[i - 1][j]);\n                        cache[i][mask] = min(cache[i][mask], cache[i - 1][mask] + cost[i - 1][j]);\n                        cache[i][mask] = min(cache[i][mask], cache[i - 1][mask & ~(1 << j)] + cost[i - 1][j]);\n                    }\n                }\n            }\n        }\n        return cache[n][(1 << m) - 1];\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-20"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1308ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.8MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def connectTwoGroups(self, cost: List[List[int]]) -> int:\n        n = len(cost)\n        m = len(cost[0])\n        cache = [[inf for _ in range(1 << m)] for _ in range(n + 1)]\n        cache[0][0] = 0\n        for i in range(1, n+1):\n            for mask in range(1 << m):\n                for j in range(m):\n                    if mask & (1 << j):\n                        cache[i][mask] = min(\n                            cache[i][mask], cache[i][mask & ~(1 << j)] + cost[i - 1][j])\n                        cache[i][mask] = min(\n                            cache[i][mask], cache[i - 1][mask] + cost[i - 1][j])\n                        cache[i][mask] = min(\n                            cache[i][mask], cache[i - 1][mask & ~(1 << j)] + cost[i - 1][j])\n        return cache[n][(1 << m) - 1]\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-20"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.3MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn connect_two_groups(cost: Vec<Vec<i32>>) -> i32 {\n        let n = cost.len();\n        let m = cost[0].len();\n        let mut cache = vec![vec![0x3f3f3f3f; 1 << m]; n + 1];\n        cache[0][0] = 0;\n        for i in 1..=n {\n            for mask in 0..(1 << m) {\n                for j in 0..m {\n                    if (mask & (1 << j)) != 0 {\n                        cache[i][mask] = cache[i][mask]\n                            .min(cache[i][mask & !(1 << j)] + cost[i - 1][j])\n                            .min(cache[i - 1][mask] + cost[i - 1][j])\n                            .min(cache[i - 1][mask & !(1 << j)] + cost[i - 1][j]);\n                    }\n                }\n            }\n        }\n        return cache[n][(1 << m) - 1];\n    }\n}\n"})})]})}function m(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},25710:(n,e,c)=>{c.d(e,{R:()=>o,x:()=>r});var i=c(30758);const s={},t=i.createContext(s);function o(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);