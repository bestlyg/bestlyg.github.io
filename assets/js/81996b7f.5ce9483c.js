"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[20947],{88346:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=r(86070),o=r(25710);const l={},t="2711.\u5bf9\u89d2\u7ebf\u4e0a\u4e0d\u540c\u503c\u7684\u6570\u91cf\u5dee",c={id:"leetcode/2701-2800/\u5bf9\u89d2\u7ebf\u4e0a\u4e0d\u540c\u503c\u7684\u6570\u91cf\u5dee",title:"2711.\u5bf9\u89d2\u7ebf\u4e0a\u4e0d\u540c\u503c\u7684\u6570\u91cf\u5dee",description:"\u94fe\u63a5\uff1a2711.\u5bf9\u89d2\u7ebf\u4e0a\u4e0d\u540c\u503c\u7684\u6570\u91cf\u5dee",source:"@site/docs/leetcode/2701-2800/2711.\u5bf9\u89d2\u7ebf\u4e0a\u4e0d\u540c\u503c\u7684\u6570\u91cf\u5dee.md",sourceDirName:"leetcode/2701-2800",slug:"/leetcode/2701-2800/\u5bf9\u89d2\u7ebf\u4e0a\u4e0d\u540c\u503c\u7684\u6570\u91cf\u5dee",permalink:"/docs/leetcode/2701-2800/\u5bf9\u89d2\u7ebf\u4e0a\u4e0d\u540c\u503c\u7684\u6570\u91cf\u5dee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2711,frontMatter:{},sidebar:"journal",previous:{title:"2710.\u79fb\u9664\u5b57\u7b26\u4e32\u4e2d\u7684\u5c3e\u968f\u96f6",permalink:"/docs/leetcode/2701-2800/\u79fb\u9664\u5b57\u7b26\u4e32\u4e2d\u7684\u5c3e\u968f\u96f6"},next:{title:"2712.\u4f7f\u6240\u6709\u5b57\u7b26\u76f8\u7b49\u7684\u6700\u5c0f\u6210\u672c",permalink:"/docs/leetcode/2701-2800/\u4f7f\u6240\u6709\u5b57\u7b26\u76f8\u7b49\u7684\u6700\u5c0f\u6210\u672c"}},s={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"2711\u5bf9\u89d2\u7ebf\u4e0a\u4e0d\u540c\u503c\u7684\u6570\u91cf\u5dee",children:"2711.\u5bf9\u89d2\u7ebf\u4e0a\u4e0d\u540c\u503c\u7684\u6570\u91cf\u5dee"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"hthttps://leetcode.cn/problems/difference-of-number-of-distinct-values-on-diagonals",children:"2711.\u5bf9\u89d2\u7ebf\u4e0a\u4e0d\u540c\u503c\u7684\u6570\u91cf\u5dee"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u77e9\u9635",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u3001\u5927\u5c0f\u4e3a m x n \u7684\u4e8c\u7ef4\u77e9\u9635 grid \uff0c\u8bf7\u4f60\u6c42\u89e3\u5927\u5c0f\u540c\u6837\u4e3a m x n \u7684\u7b54\u6848\u77e9\u9635 answer \u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-28"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a56ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a32.2MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4ee5\u6bcf\u4e2a\u9876\u70b9\u5f00\u59cb\u5411\u53f3\u4e0b\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<vector<int>> differenceOfDistinctValues(vector<vector<int>>& grid) {\n        int n = grid.size(), m = grid[0].size();\n        vector<vector<int>> res(n, vector<int>(m, 0));\n        auto comp = [&](int row, int col) {\n            unordered_map<int, int> l, r;\n            int nrow = row + 1, ncol = col + 1;\n            while (nrow < n && ncol < m) {\n                r[grid[nrow][ncol]]++;\n                nrow++;\n                ncol++;\n            }\n            res[row][col] = abs((int)l.size() - (int)r.size());\n            while (row + 1 < n && col + 1 < m) {\n                l[grid[row][col]]++;\n                row++;\n                col++;\n                r[grid[row][col]]--;\n                if (r[grid[row][col]] == 0) r.erase(grid[row][col]);\n                res[row][col] = abs((int)l.size() - (int)r.size());\n            }\n        };\n        for (int j = 0; j < m; j++)  comp(0, j);\n        for (int i = 1; i < n; i++)  comp(i, 0);\n        return res;\n    }\n};;\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-28"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a112ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.2MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def differenceOfDistinctValues(self, grid: List[List[int]]) -> List[List[int]]:\n        n = len(grid)\n        m = len(grid[0])\n        res = [[0 for _ in range(m)] for _ in range(n)]\n\n        def comp(row: int, col: int):\n            l = Counter()\n            r = Counter()\n            nrow = row + 1\n            ncol = col + 1\n            while nrow < n and ncol < m:\n                r[grid[nrow][ncol]] += 1\n                nrow += 1\n                ncol += 1\n            res[row][col] = abs(len(l) - len(r))\n            while row + 1 < n and col + 1 < m:\n                l[grid[row][col]] += 1\n                row += 1\n                col += 1\n                r[grid[row][col]] -= 1\n                if r[grid[row][col]] == 0:\n                    r.pop(grid[row][col])\n                res[row][col] = abs(len(l) - len(r))\n        for j in range(m):\n            comp(0, j)\n        for i in range(1, n):\n            comp(i, 0)\n        return res\n\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-28"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn difference_of_distinct_values(grid: Vec<Vec<i32>>) -> Vec<Vec<i32>> {\n        use std::collections::HashMap;\n        let n = grid.len();\n        let m = grid[0].len();\n        let mut res = vec![vec![0; m]; n];\n        let mut comp = |mut row: usize, mut col: usize| {\n            let mut l = HashMap::<i32, i32>::new();\n            let mut r = HashMap::<i32, i32>::new();\n            let mut nrow = row + 1;\n            let mut ncol = col + 1;\n            while nrow < n && ncol < m {\n                *r.entry(grid[nrow][ncol]).or_insert(0) += 1;\n                nrow += 1;\n                ncol += 1;\n            }\n            res[row][col] = (l.len() as i32 - r.len() as i32).abs();\n            while row + 1 < n && col + 1 < m {\n                *l.entry(grid[row][col]).or_insert(0) += 1;\n                row += 1;\n                col += 1;\n                let item = r.get_mut(&grid[row][col]).unwrap();\n                *item -= 1;\n                if *item == 0 {\n                    r.remove(&grid[row][col]);\n                }\n                res[row][col] = (l.len() as i32 - r.len() as i32).abs();\n            }\n        };\n        for j in 0..m {\n            comp(0, j);\n        }\n        for i in 1..n {\n            comp(i, 0);\n        }\n        res\n    }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>t,x:()=>c});var i=r(30758);const o={},l=i.createContext(o);function t(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:t(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);