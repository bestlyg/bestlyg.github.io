"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[37968],{280:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/2501-2600/\u68c0\u67e5\u9a91\u58eb\u5de1\u89c6\u65b9\u6848","title":"2596.\u68c0\u67e5\u9a91\u58eb\u5de1\u89c6\u65b9\u6848","description":"\u94fe\u63a5\uff1a2596.\u68c0\u67e5\u9a91\u58eb\u5de1\u89c6\u65b9\u6848","source":"@site/docs/leetcode/2501-2600/2596.\u68c0\u67e5\u9a91\u58eb\u5de1\u89c6\u65b9\u6848.md","sourceDirName":"leetcode/2501-2600","slug":"/leetcode/2501-2600/\u68c0\u67e5\u9a91\u58eb\u5de1\u89c6\u65b9\u6848","permalink":"/docs/leetcode/2501-2600/\u68c0\u67e5\u9a91\u58eb\u5de1\u89c6\u65b9\u6848","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2596,"frontMatter":{},"sidebar":"journal","previous":{"title":"2595.\u5947\u5076\u4f4d\u6570","permalink":"/docs/leetcode/2501-2600/\u5947\u5076\u4f4d\u6570"},"next":{"title":"2597.\u7f8e\u4e3d\u5b50\u96c6\u7684\u6570\u76ee","permalink":"/docs/leetcode/2501-2600/\u7f8e\u4e3d\u5b50\u96c6\u7684\u6570\u76ee"}}');var s=r(25105),l=r(8556);const c={},t="2596.\u68c0\u67e5\u9a91\u58eb\u5de1\u89c6\u65b9\u6848",o={},d=[{value:"\u9898\u89e3 1 - rust",id:"\u9898\u89e3-1---rust",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2},{value:"\u9898\u89e3 4 - python",id:"\u9898\u89e3-4---python",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"2596\u68c0\u67e5\u9a91\u58eb\u5de1\u89c6\u65b9\u6848",children:"2596.\u68c0\u67e5\u9a91\u58eb\u5de1\u89c6\u65b9\u6848"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/check-knight-tour-configuration",children:"2596.\u68c0\u67e5\u9a91\u58eb\u5de1\u89c6\u65b9\u6848"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u77e9\u9635\u3001\u6a21\u62df",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5982\u679c grid \u8868\u793a\u4e86\u9a91\u58eb\u7684\u6709\u6548\u5de1\u89c6\u65b9\u6848\uff0c\u8fd4\u56de true\uff1b\u5426\u5219\u8fd4\u56de false\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---rust",children:"\u9898\u89e3 1 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-19"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a1.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn check_valid_grid(grid: Vec<Vec<i32>>) -> bool {\n        const dirs: [[i32; 2]; 8] = [\n            [-2, -1],\n            [-1, -2],\n            [-2, 1],\n            [-1, 2],\n            [1, -2],\n            [2, -1],\n            [1, 2],\n            [2, 1],\n        ];\n        let n = grid.len();\n        let mut cur = (0, 0);\n        for i in 0..n * n {\n            if grid[cur.0][cur.1] != i as i32 {\n                return false;\n            }\n            for dir in dirs {\n                let (nrow, ncol) = (cur.0 as i32 + dir[0], cur.1 as i32 + dir[1]);\n                if nrow >= 0\n                    && (nrow as usize) < n\n                    && ncol >= 0\n                    && (ncol as usize) < n\n                    && grid[nrow as usize][ncol as usize] == i as i32 + 1\n                {\n                    cur = (nrow as usize, ncol as usize);\n                    break;\n                }\n            }\n        }\n        true\n    }\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-19"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a27MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4ece0\u5230\u672b\u5c3e\uff0c\u7528\u65b9\u5411\u6570\u7ec4\u904d\u5386\u6240\u6709\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"int dirs[8][2] = {\n    {-2, -1}, {-1, -2},\n    {-2, 1}, {-1, 2},\n    {1, -2}, {2, -1},\n    {1, 2}, {2, 1},\n};\nclass Solution {\npublic:\n    typedef pair<int, int> pii;\n    bool checkValidGrid(vector<vector<int>>& grid) {\n        int n = grid.size();\n        pii cur = make_pair(0,0);\n        for (int i = 0; i < n * n; i++) {\n            if (grid[cur.first][cur.second] != i) return false;\n            for (int j = 0; j < 8; j++) {\n                int nrow = cur.first + dirs[j][0], ncol = cur.second + dirs[j][1];\n                if (nrow < 0 || nrow >= n || ncol < 0 || ncol >= n) continue;\n                if (grid[nrow][ncol] == i + 1) {\n                    cur = make_pair(nrow, ncol);\n                    break;\n                }\n            }\n        }\n        return true;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-13"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"dirs = [(1, 2), (1, -2), (2, 1), (2, -1), (-1, 2), (-1, -2), (-2, 1), (-2, -1)]\nclass Solution:\n    def checkValidGrid(self, grid: List[List[int]]) -> bool:\n        n = len(grid)\n        cur = (0, 0)\n        if grid[0][0] != 0: return False\n        for i in range(n * n - 1):\n            f = False\n            for dir in dirs:\n                x = cur[0] + dir[0]\n                y = cur[1] + dir[1]\n                if 0 <= x < n and 0 <= y < n and grid[x][y] == i + 1:\n                    f = True\n                    cur = (x, y)\n            if not f:\n                return False\n        return True\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-4---python",children:"\u9898\u89e3 4 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-19"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a32ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def checkValidGrid(self, grid: List[List[int]]) -> bool:\n        dirs = [\n            [-2, -1], [-1, -2],\n            [-2, 1], [-1, 2],\n            [1, -2], [2, -1],\n            [1, 2], [2, 1],\n        ]\n        n = len(grid)\n        cur = (0, 0)\n        for i in range(n*n):\n            if grid[cur[0]][cur[1]] != i:\n                return False\n            for j in range(8):\n                nrow, ncol = cur[0] + dirs[j][0], cur[1]+dirs[j][1]\n                if 0 <= nrow < n and 0 <= ncol < n and grid[nrow][ncol] == i + 1:\n                    cur = (nrow, ncol)\n                    break\n        return True\n"})})]})}function a(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},8556:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>t});var i=r(58101);const s={},l=i.createContext(s);function c(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);