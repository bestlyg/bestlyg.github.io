"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[99145],{27594:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/1001-1100/\u4e8c\u8fdb\u5236\u77e9\u9635\u4e2d\u7684\u6700\u77ed\u8def\u5f84","title":"1091.\u4e8c\u8fdb\u5236\u77e9\u9635\u4e2d\u7684\u6700\u77ed\u8def\u5f84","description":"\u94fe\u63a5\uff1a1091.\u4e8c\u8fdb\u5236\u77e9\u9635\u4e2d\u7684\u6700\u77ed\u8def\u5f84","source":"@site/docs/leetcode/1001-1100/1091.\u4e8c\u8fdb\u5236\u77e9\u9635\u4e2d\u7684\u6700\u77ed\u8def\u5f84.md","sourceDirName":"leetcode/1001-1100","slug":"/leetcode/1001-1100/\u4e8c\u8fdb\u5236\u77e9\u9635\u4e2d\u7684\u6700\u77ed\u8def\u5f84","permalink":"/docs/leetcode/1001-1100/\u4e8c\u8fdb\u5236\u77e9\u9635\u4e2d\u7684\u6700\u77ed\u8def\u5f84","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1091,"frontMatter":{},"sidebar":"journal","previous":{"title":"1090.\u53d7\u6807\u7b7e\u5f71\u54cd\u7684\u6700\u5927\u503c","permalink":"/docs/leetcode/1001-1100/\u53d7\u6807\u7b7e\u5f71\u54cd\u7684\u6700\u5927\u503c"},"next":{"title":"1092.\u6700\u77ed\u516c\u5171\u8d85\u5e8f\u5217","permalink":"/docs/leetcode/1001-1100/\u6700\u77ed\u516c\u5171\u8d85\u5e8f\u5217"}}');var s=r(86070),t=r(31503);const l={},c="1091.\u4e8c\u8fdb\u5236\u77e9\u9635\u4e2d\u7684\u6700\u77ed\u8def\u5f84",o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"1091\u4e8c\u8fdb\u5236\u77e9\u9635\u4e2d\u7684\u6700\u77ed\u8def\u5f84",children:"1091.\u4e8c\u8fdb\u5236\u77e9\u9635\u4e2d\u7684\u6700\u77ed\u8def\u5f84"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/shortest-path-in-binary-matrix",children:"1091.\u4e8c\u8fdb\u5236\u77e9\u9635\u4e2d\u7684\u6700\u77ed\u8def\u5f84"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u77e9\u9635",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a n x n \u7684\u4e8c\u8fdb\u5236\u77e9\u9635 grid \u4e2d\uff0c\u8fd4\u56de\u77e9\u9635\u4e2d\u6700\u77ed \u7545\u901a\u8def\u5f84 \u7684\u957f\u5ea6\u3002\u5982\u679c\u4e0d\u5b58\u5728\u8fd9\u6837\u7684\u8def\u5f84\uff0c\u8fd4\u56de -1 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-25"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function movingCount(m: number, n: number, k: number): number {\n  const queue: [number, number, number][] = [[0, 0, 1]];\n  const format = (row: number, col: number) => `${row}::${col}`;\n  const set = new Set(queue.map(([row, col]) => format(row, col)));\n  let ans = 1;\n  const add = (row: number, col: number, count: number) => {\n    const str = format(row, col);\n    if (set.has(str)) return;\n    set.add(str);\n    const data: [number, number, number] = [row, col, count];\n    let num = 0;\n    while (row) {\n      num += row % 10;\n      row = ~~(row / 10);\n    }\n    while (col) {\n      num += col % 10;\n      col = ~~(col / 10);\n    }\n    if (num > k) return;\n    queue.push(data);\n    ans++;\n  };\n  while (queue.length) {\n    const [row, col, count] = queue.shift()!;\n    if (row) if (row > 0) add(row - 1, col, count + 1);\n    if (col > 0) add(row, col - 1, count + 1);\n    if (row < n - 1) add(row + 1, col, count + 1);\n    if (col < m - 1) add(row, col + 1, count + 1);\n  }\n  return ans;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-26"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19.2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"#define X first\n#define Y second\n#define pii pair<int, int>\nvector<vector<int>> dirs2 = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}, {1, 1}, {1, -1}, {-1, 1}, {-1, -1}};\nclass Solution {\n    public:\n    int shortestPathBinaryMatrix(vector<vector<int>> &grid) {\n        if (grid[0][0] == 1) return -1;\n        queue<pii> q;\n        q.push(make_pair(0, 0));\n        int n = grid.size(), size = 1, step = 1;\n        vector<vector<bool>> used(n, vector<bool>(n, false));\n        while (q.size()) {\n            auto cur = q.front();\n            q.pop();\n            if (cur.X == n - 1 && cur.Y == n - 1) return step;\n            for (auto &dir : dirs2) {\n                int nx = cur.X + dir[0], ny = cur.Y + dir[1];\n                if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] == 0 && !used[nx][ny]) {\n                    used[nx][ny] = true;\n                    q.push(make_pair(nx, ny));\n                }\n            }\n            if (--size == 0) {\n                size = q.size();\n                step += 1;\n            }\n        }\n        return -1;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-26"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a256ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.6MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"dirs2 = [(0, 1), (0, -1), (1, 0), (-1, 0), (1, 1), (1, -1), (-1, 1), (-1, -1)]\n    class Solution:\n        def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:\n            if grid[0][0] == 1:\n                return -1\n            q = deque()\n            q.append((0, 0))\n            n = len(grid)\n            step = size = 1\n            used = [[False for _ in range(n)] for _ in range(n)]\n            while len(q):\n                (x, y) = q.popleft()\n                if x == n - 1 and y == n - 1:\n                    return step\n                for dir in dirs2:\n                    nx = x + dir[0]\n                    ny = y + dir[1]\n                    if nx >= 0 and nx < n and ny >= 0 and ny < n and grid[nx][ny] == 0 and not used[nx][ny]:\n                        used[nx][ny] = True\n                        q.append((nx, ny))\n                size -= 1\n                if size == 0:\n                    size = len(q)\n                    step += 1\n            return -1\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-26"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"pub const dirs2: [[i32; 2]; 8] = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];\nimpl Solution {\n    pub fn shortest_path_binary_matrix(grid: Vec<Vec<i32>>) -> i32 {\n        if grid[0][0] == 1 {\n            -1\n        } else {\n            let mut q = std::collections::VecDeque::<(i32, i32)>::new();\n            q.push_back((0, 0));\n            let n = grid.len() as i32;\n            let mut size = 1;\n            let mut step = 1;\n            let mut used = vec![vec![false; n as usize]; n as usize];\n            while let Some((x, y)) = q.pop_front() {\n                if x == n - 1 && y == n - 1 {\n                    return step;\n                }\n                for dir in dirs2 {\n                    let nx = x + dir[0];\n                    let ny = y + dir[1];\n                    if nx >= 0\n                        && nx < n\n                        && ny >= 0\n                        && ny < n\n                        && grid[nx as usize][ny as usize] == 0\n                        && !used[nx as usize][ny as usize]\n                    {\n                        used[nx as usize][ny as usize] = true;\n                        q.push_back((nx, ny));\n                    }\n                }\n                size -= 1;\n                if size == 0 {\n                    size = q.len();\n                    step += 1;\n                }\n            }\n            -1\n        }\n    }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},31503:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>c});var i=r(30758);const s={},t=i.createContext(s);function l(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);