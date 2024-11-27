"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[47516],{36795:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>s,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"leetcode/1701-1800/\u7403\u4f1a\u843d\u4f55\u5904","title":"1706.\u7403\u4f1a\u843d\u4f55\u5904","description":"\u94fe\u63a5\uff1a1706.\u7403\u4f1a\u843d\u4f55\u5904","source":"@site/docs/leetcode/1701-1800/1706.\u7403\u4f1a\u843d\u4f55\u5904.md","sourceDirName":"leetcode/1701-1800","slug":"/leetcode/1701-1800/\u7403\u4f1a\u843d\u4f55\u5904","permalink":"/docs/leetcode/1701-1800/\u7403\u4f1a\u843d\u4f55\u5904","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1706,"frontMatter":{},"sidebar":"journal","previous":{"title":"1705.\u5403\u82f9\u679c\u7684\u6700\u5927\u6570\u76ee","permalink":"/docs/leetcode/1701-1800/\u5403\u82f9\u679c\u7684\u6700\u5927\u6570\u76ee"},"next":{"title":"1707.\u4e0e\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u6700\u5927\u5f02\u6216\u503c","permalink":"/docs/leetcode/1701-1800/\u4e0e\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u6700\u5927\u5f02\u6216\u503c"}}');var r=c(86070),l=c(31503);const i={},t="1706.\u7403\u4f1a\u843d\u4f55\u5904",s={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"1706\u7403\u4f1a\u843d\u4f55\u5904",children:"1706.\u7403\u4f1a\u843d\u4f55\u5904"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/where-will-the-ball-fall",children:"1706.\u7403\u4f1a\u843d\u4f55\u5904"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u77e9\u9635\u3001\u6a21\u62df",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4e00\u4e2a\u5927\u5c0f\u4e3a n \u7684\u6570\u7ec4 answer \uff0c\u5176\u4e2d answer[i] \u662f\u7403\u653e\u5728\u9876\u90e8\u7684\u7b2c i \u5217\u540e\u4ece\u5e95\u90e8\u6389\u51fa\u6765\u7684\u90a3\u4e00\u5217\u5bf9\u5e94\u7684\u4e0b\u6807\uff0c\u5982\u679c\u7403\u5361\u5728\u76d2\u5b50\u91cc\uff0c\u5219\u8fd4\u56de -1 \u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-24"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a28ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a13MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int n, m, check[100][100][4] = {0}, mmap[100][100][4] = {0};\n    int dfs(vector<vector<int>>& grid, int row, int col, int idx) {\n        if (mmap[row][col][idx]) return mmap[row][col][idx];\n        int ans = -1;\n        check[row][col][idx] = 1;\n        if (grid[row][col] == 1) {\n            if ((idx == 0 || idx == 3) && col < m - 1 &&\n                check[row][col + 1][1] == 0) {\n                ans = dfs(grid, row, col + 1, 1);\n            } else if ((idx == 1 || idx == 2) && row < n - 1 &&\n                       check[row + 1][col][0] == 0) {\n                ans = dfs(grid, row + 1, col, 0);\n            }\n        } else {\n            if ((idx == 0 || idx == 1) && col > 0 &&\n                check[row][col - 1][3] == 0) {\n                ans = dfs(grid, row, col - 1, 3);\n            } else if ((idx == 2 || idx == 3) && row < n - 1 &&\n                       check[row + 1][col][0] == 0) {\n                ans = dfs(grid, row + 1, col, 0);\n            }\n        }\n        check[row][col][idx] = 0;\n        return mmap[row][col][idx] = ans;\n    }\n    vector<int> findBall(vector<vector<int>>& grid) {\n        n = grid.size();\n        m = grid[0].size();\n        vector<int> ans(m);\n        for (int col = 0; col < m; col++) {\n            if (grid[n - 1][col] == 1) {\n                mmap[n - 1][col][1] = mmap[n - 1][col][2] = col + 1;\n            } else {\n                mmap[n - 1][col][2] = mmap[n - 1][col][3] = col + 1;\n            }\n        }\n        for (int col = 0; col < m; col++) {\n            int val = dfs(grid, 0, col, 0);\n            if (val > 0) val -= 1;\n            ans[col] = val;\n        }\n        return ans;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},31503:(n,e,c)=>{c.d(e,{R:()=>i,x:()=>t});var o=c(30758);const r={},l=o.createContext(r);function i(n){const e=o.useContext(l);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),o.createElement(l.Provider,{value:e},n.children)}}}]);