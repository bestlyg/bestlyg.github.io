"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[35139],{75638:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>x,contentTitle:()=>s,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>a});const c=JSON.parse('{"id":"leetcode/1201-1300/\u7a7f\u8fc7\u8ff7\u5bab\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570","title":"1210.\u7a7f\u8fc7\u8ff7\u5bab\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570","description":"\u94fe\u63a5\uff1a1210.\u7a7f\u8fc7\u8ff7\u5bab\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570","source":"@site/docs/leetcode/1201-1300/1210.\u7a7f\u8fc7\u8ff7\u5bab\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570.md","sourceDirName":"leetcode/1201-1300","slug":"/leetcode/1201-1300/\u7a7f\u8fc7\u8ff7\u5bab\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570","permalink":"/docs/leetcode/1201-1300/\u7a7f\u8fc7\u8ff7\u5bab\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1210,"frontMatter":{},"sidebar":"journal","previous":{"title":"1208.\u5c3d\u53ef\u80fd\u4f7f\u5b57\u7b26\u4e32\u76f8\u7b49","permalink":"/docs/leetcode/1201-1300/\u5c3d\u53ef\u80fd\u4f7f\u5b57\u7b26\u4e32\u76f8\u7b49"},"next":{"title":"1217.\u73a9\u7b79\u7801","permalink":"/docs/leetcode/1201-1300/\u73a9\u7b79\u7801"}}');var r=i(25105),d=i(8556);const t={},s="1210.\u7a7f\u8fc7\u8ff7\u5bab\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570",x={},a=[{value:"\u9898\u89e3 1 - rust",id:"\u9898\u89e3-1---rust",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function l(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"1210\u7a7f\u8fc7\u8ff7\u5bab\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570",children:"1210.\u7a7f\u8fc7\u8ff7\u5bab\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/minimum-moves-to-reach-target-with-rotations",children:"1210.\u7a7f\u8fc7\u8ff7\u5bab\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u77e9\u9635",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u86c7\u62b5\u8fbe\u76ee\u7684\u5730\u6240\u9700\u7684\u6700\u5c11\u79fb\u52a8\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---rust",children:"\u9898\u89e3 1 - rust"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-05"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.7MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn minimum_moves(grid: Vec<Vec<i32>>) -> i32 {\n        use std::collections::VecDeque;\n        let n = grid.len();\n        let mut cache = vec![vec![vec![false; 2]; n]; n];\n        cache[0][0][0] = true;\n        let mut q = VecDeque::<(usize, usize, usize)>::new();\n        q.push_back((0, 0, 0));\n        let (mut step, mut size) = (0, 1);\n        while !q.is_empty() {\n            let (x, y, dir) = q.pop_front().unwrap();\n            if x == n - 1 && y == n - 2 && dir == 0 {\n                return step;\n            }\n            if dir == 0 && y + 2 < n && grid[x][y + 2] == 0 && !cache[x][y + 1][0] {\n                q.push_back((x, y + 1, 0));\n                cache[x][y + 1][0] = true;\n            }\n            if dir == 0\n                && x + 1 < n\n                && grid[x + 1][y + 1] == 0\n                && grid[x + 1][y] == 0\n                && !cache[x][y][1]\n            {\n                q.push_back((x, y, 1));\n                cache[x][y][1] = true;\n            }\n            if dir == 0\n                && x + 1 < n\n                && grid[x + 1][y] == 0\n                && grid[x + 1][y + 1] == 0\n                && !cache[x + 1][y][0]\n            {\n                q.push_back((x + 1, y, 0));\n                cache[x + 1][y][0] = true;\n            }\n            if dir == 1 && x + 2 < n && grid[x + 2][y] == 0 && !cache[x + 1][y][1] {\n                q.push_back((x + 1, y, 1));\n                cache[x + 1][y][1] = true;\n            }\n            if dir == 1\n                && y + 1 < n\n                && grid[x + 1][y + 1] == 0\n                && grid[x][y + 1] == 0\n                && !cache[x][y][0]\n            {\n                q.push_back((x, y, 0));\n                cache[x][y][0] = true;\n            }\n            if dir == 1\n                && y + 1 < n\n                && grid[x + 1][y + 1] == 0\n                && grid[x][y + 1] == 0\n                && !cache[x][y + 1][1]\n            {\n                q.push_back((x, y + 1, 1));\n                cache[x][y + 1][1] = true;\n            }\n            size -= 1;\n            if size == 0 {\n                step += 1;\n                size = q.len();\n            }\n        }\n        -1\n    }\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-05"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a12.9MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bfs\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"struct Node {\n    int x, y, dir;\n    Node(int x, int y, int dir): x(x), y(y), dir(dir) {}\n};\nclass Solution {\npublic:\n    int minimumMoves(vector<vector<int>>& grid) {\n        int n = grid.size();\n        bool cache[n][n][2];\n        memset(cache, false, sizeof(bool) * n * n * 2);\n        cache[0][0][0] = true;\n        queue<Node> q;\n        q.push(Node(0, 0, 0));\n        int step = 0, size = 1;\n        while (q.size()) {\n            Node node = q.front();\n            q.pop();\n            int x = node.x, y = node.y, dir = node.dir;\n            if (x == n - 1 && y == n - 2 && dir == 0) return step;\n            if (dir == 0 && y + 2 < n && grid[x][y + 2] == 0 && !cache[x][y + 1][0]) {\n                q.push(Node(x, y + 1, 0));\n                cache[x][y + 1][0] = true;\n            }\n            if (dir == 0 && x + 1 < n && grid[x + 1][y + 1] == 0 && grid[x + 1][y] == 0 && !cache[x][y][1]) {\n                q.push(Node(x, y, 1));\n                cache[x][y][1] = true;\n            }\n            if (dir == 0 && x + 1 < n && grid[x + 1][y] == 0 && grid[x + 1][y + 1] == 0 && !cache[x + 1][y][0]) {\n                q.push(Node(x + 1, y, 0));\n                cache[x + 1][y][0] = true;\n            }\n            if (dir == 1 && x + 2 < n && grid[x + 2][y] == 0 && !cache[x + 1][y][1]) {\n                q.push(Node(x + 1, y, 1));\n                cache[x + 1][y][1] = true;\n            }\n            if (dir == 1 && y + 1 < n && grid[x + 1][y + 1] == 0 && grid[x][y + 1] == 0 && !cache[x][y][0]) {\n                q.push(Node(x, y, 0));\n                cache[x][y][0] = true;\n            }\n            if (dir == 1 && y + 1 < n && grid[x + 1][y + 1] == 0 && grid[x][y + 1] == 0 && !cache[x][y + 1][1]) {\n                q.push(Node(x, y + 1, 1));\n                cache[x][y + 1][1] = true;\n            }\n            if (--size == 0) step += 1, size = q.size();\n        }\n        return -1;\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-05"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a364ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.4MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"from queue import Queue\nclass Solution:\n    def minimumMoves(self, grid: List[List[int]]) -> int:\n        n = len(grid)\n        cache = [[[False for _ in range(2)] for _ in range(n)] for _ in range(n)]\n        cache[0][0][0] = True\n        q = Queue()\n        q.put((0, 0, 0))\n        step, size = 0, 1\n        while q.qsize():\n            (x, y, d) = q.get()\n            if x == n - 1 and y == n - 2 and d == 0:\n                return step\n            if d == 0 and y + 2 < n and grid[x][y + 2] == 0 and not cache[x][y + 1][0]:\n                q.put((x, y + 1, 0))\n                cache[x][y + 1][0] = True\n            if d == 0 and x + 1 < n and grid[x + 1][y + 1] == 0 and grid[x + 1][y] == 0 and not cache[x][y][1]:\n                q.put((x, y, 1))\n                cache[x][y][1] = True\n            if d == 0 and x + 1 < n and grid[x + 1][y] == 0 and grid[x + 1][y + 1] == 0 and not cache[x + 1][y][0]:\n                q.put((x + 1, y, 0))\n                cache[x + 1][y][0] = True\n            if d == 1 and x + 2 < n and grid[x + 2][y] == 0 and not cache[x + 1][y][1]:\n                q.put((x + 1, y, 1))\n                cache[x + 1][y][1] = True\n            if d == 1 and y + 1 < n and grid[x + 1][y + 1] == 0 and grid[x][y + 1] == 0 and not cache[x][y][0]:\n                q.put((x, y, 0))\n                cache[x][y][0] = True\n            if d == 1 and y + 1 < n and grid[x + 1][y + 1] == 0 and grid[x][y + 1] == 0 and not cache[x][y + 1][1]:\n                q.put((x, y + 1, 1))\n                cache[x][y + 1][1] = True\n            size -= 1\n            if size == 0:\n                 step += 1\n                 size = q.qsize()\n        return -1\n"})})]})}function o(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},8556:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>s});var c=i(58101);const r={},d=c.createContext(r);function t(n){const e=c.useContext(d);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),c.createElement(d.Provider,{value:e},n.children)}}}]);