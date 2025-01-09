"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[18672],{7208:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>l,contentTitle:()=>u,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"leetcode/1201-1300/\u63a8\u7bb1\u5b50","title":"1263.\u63a8\u7bb1\u5b50","description":"\u94fe\u63a5\uff1a1263.\u63a8\u7bb1\u5b50","source":"@site/docs/leetcode/1201-1300/1263.\u63a8\u7bb1\u5b50.md","sourceDirName":"leetcode/1201-1300","slug":"/leetcode/1201-1300/\u63a8\u7bb1\u5b50","permalink":"/docs/leetcode/1201-1300/\u63a8\u7bb1\u5b50","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1263,"frontMatter":{},"sidebar":"journal","previous":{"title":"1262.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u6700\u5927\u548c","permalink":"/docs/leetcode/1201-1300/\u53ef\u88ab\u4e09\u6574\u9664\u7684\u6700\u5927\u548c"},"next":{"title":"1267.\u7edf\u8ba1\u53c2\u4e0e\u901a\u4fe1\u7684\u670d\u52a1\u5668","permalink":"/docs/leetcode/1201-1300/\u7edf\u8ba1\u53c2\u4e0e\u901a\u4fe1\u7684\u670d\u52a1\u5668"}}');var t=e(25105),d=e(8556);const r={},u="1263.\u63a8\u7bb1\u5b50",l={},o=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function a(n){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"1263\u63a8\u7bb1\u5b50",children:"1263.\u63a8\u7bb1\u5b50"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(i.a,{href:"https://leetcode.cn/problems/minimum-moves-to-move-a-box-to-their-target-location",children:"1263.\u63a8\u7bb1\u5b50"}),(0,t.jsx)(i.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,t.jsx)(i.br,{}),"\n","\u6807\u7b7e\uff1a\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u77e9\u9635\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,t.jsx)(i.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u5c06\u7bb1\u5b50\u63a8\u5230\u76ee\u6807\u4f4d\u7f6e\u7684\u6700\u5c0f \u63a8\u52a8 \u6b21\u6570\uff0c\u5982\u679c\u65e0\u6cd5\u505a\u5230\uff0c\u8bf7\u8fd4\u56de -1\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-09"}),"\n",(0,t.jsx)(i.li,{children:"\u6267\u884c\u7528\u65f6\uff1a2080ms"}),"\n",(0,t.jsx)(i.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.5MB"}),"\n",(0,t.jsx)(i.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(i.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]\nclass UnionFind:\n    def __init__(self, n) -> None:\n        self.n = n\n        self.data = [i for i in range(0, n)]\n        self.cnt = [1] * n\n    def size(self, v: int) -> int:\n        return self.cnt[self.find(v)]\n    def find(self, v: int) -> int:\n        if self.data[v] != v:\n            self.data[v] = self.find(self.data[v])\n        return self.data[v]\n    def uni(self, v1: int, v2: int):\n        p1 = self.find(v1)\n        p2 = self.find(v2)\n        if p1 != p2:\n            self.cnt[p1] += self.cnt[p2]\n            self.data[p2] = p1\n    def same(self, v1: int, v2: int):\n        return self.find(v1) == self.find(v2)\n\ndef pos2Idx(x: int, y: int, size: int):\n    return x * size + y\n\ndef idx2pox(idx: int, size: int) -> Tuple[int,  int]:\n    return (idx // size, idx % size)\nclass Node:\n    def __init__(self, p: Tuple[int, int], b: Tuple[int, int]) -> None:\n        self.p = p\n        self.b = b\nclass Solution:\n    def minPushBox(self, grid: List[List[str]]) -> int:\n        t, p, b = (0, 0), (0, 0), (0, 0)\n        n = len(grid)\n        m = len(grid[0])\n        used = defaultdict(dict)\n        def is_valid(v: Tuple[int, int]) -> bool:\n            return 0 <= v[0] < n and 0 <= v[1] < m\n        def is_same(a: Tuple[int, int], b: Tuple[int, int]):\n            return a[0] == b[0] and a[1] == b[1]\n        def get_uf(cur: Node) -> UnionFind:\n            uf = UnionFind(n * m)\n            for i in range(n):\n                for j in range(m):\n                    if grid[i][j] == '.' and not is_same(cur.b, (i, j)):\n                        for k in range(4):\n                            ni = i + dirs[k][0]\n                            nj = j + dirs[k][1]\n                            if is_valid((ni, nj)) and grid[ni][nj] == '.' and not is_same(cur.b, (ni, nj)):\n                                uf.uni(pos2Idx(i, j, m), pos2Idx(ni, nj, m))\n            return uf\n        for i in range(n):\n            for j in range(m):\n                if grid[i][j] == 'T':\n                    t = (i, j)\n                    grid[i][j] = '.'\n                elif grid[i][j] == 'B':\n                    b = (i, j)\n                    grid[i][j] = '.'\n                elif grid[i][j] == 'S':\n                    p = (i, j)\n                    grid[i][j] = '.'\n        q = deque()\n        q.append(Node(p, b))\n        size = 1\n        step = 0\n        while len(q):\n            cur: Node = q.popleft()\n            if is_same(cur.b, t):\n                return step\n            uf = get_uf(cur)\n            for k in range(4):\n                ni = cur.b[0] + dirs[k][0]\n                nj = cur.b[1] + dirs[k][1]\n                bi = cur.b[0] - dirs[k][0]\n                bj = cur.b[1] - dirs[k][1]\n                pidx = pos2Idx(cur.p[0], cur.p[1], m)\n                bidx = pos2Idx(cur.b[0], cur.b[1], m)\n                if is_valid((ni, nj)) and grid[ni][nj] == '.' and is_valid((bi, bj)) and grid[bi][bj] == '.' and uf.same(pidx, pos2Idx(bi, bj, m)) and pos2Idx(ni, nj, m) not in used[bidx]:\n                    q.append(Node(cur.b, (ni, nj)))\n                    used[bidx][pos2Idx(ni, nj, m)] = True\n            size -= 1\n            if size == 0:\n                size = len(q)\n                step += 1\n        return -1\n"})}),"\n",(0,t.jsx)(i.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-08"}),"\n",(0,t.jsx)(i.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,t.jsx)(i.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.4MB"}),"\n",(0,t.jsx)(i.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(i.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u6bcf\u6b21\u7edf\u8ba1\u5de6\u53f3\u5b50\u6811\u7684\u5dee\u503c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cpp",children:"#define X first\n#define Y second\n#define pii pair<int, int>\nclass UnionFind {\n    public:\n    int n;\n    vector<int> data, cnt;\n    UnionFind(int n) : n(n), data(vector<int>(n, 0)), cnt(vector<int>(n, 1)) {\n        iota(data.begin(), data.end(), 0);\n    }\n    int size(int v) { return cnt[find(v)]; }\n    int find(int v) {\n        if (data[v] == v) return v;\n        return data[v] = find(data[v]);\n    }\n    void uni(int v1, int v2) {\n        int p1 = find(v1), p2 = find(v2);\n        if (p1 != p2) cnt[p1] += cnt[p2], data[p2] = p1;\n    }\n    bool same(int v1, int v2) { return find(v1) == find(v2); }\n};\nint pos2Idx(int x, int y, int size) { return x * size + y; }\nvoid idx2Pos(int idx, int size, int &x, int &y) {\n    x = idx / size;\n    y = idx % size;\n}\nvector<vector<int>> dirs = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};\n// \u8bb0\u5f55\u7bb1\u5b50\u548c\u4eba\u7684\u4f4d\u7f6e\nstruct Node {\n    pii p, b;\n    Node(pii p, pii b): p(p), b(b) {}\n};\nclass Solution {\npublic:\n    int minPushBox(vector<vector<char>>& grid) {\n        pii t, p, b;\n        int n = grid.size(), m = grid[0].size();\n        // \u7edf\u8ba1\u7bb1\u5b50\u548c\u4eba\u7684\u4f4d\u7f6e\u653e\u7f6e\u91cd\u590d\u8ba1\u7b97\n        unordered_map<int, unordered_map<int, bool>> used;\n        // \u5224\u65ad\u4e24\u4e2a\u5750\u6807\u662f\u5426\u76f8\u7b49\n        auto is_same = [&](pii a, pii b) -> bool {\n            return a.X == b.X && a.Y == b.Y;\n        };\n        // \u9488\u5bf9\u5f53\u524dNode\u503c\uff0c\u8ba1\u7b97\u5e76\u67e5\u96c6\uff0c\u8ba1\u7b97\u65f6\u8981\u6392\u9664\u7bb1\u5b50\u4f4d\u7f6e\uff0c\u7528\u4e8e\u540e\u9762\u5224\u65ad\u4eba\u662f\u4e0d\u662f\u80fd\u5230\u8fd9\u4e2a\u70b9\n        auto get_uf = [&](Node cur) -> UnionFind {\n            UnionFind uf(n * m);\n            for (int i = 0; i < n; i++) {\n                for (int j = 0; j < m; j++) {\n                    if (grid[i][j] == '.' && !is_same(cur.b, make_pair(i, j))) {\n                        for (int k = 0; k < 4; k++) {\n                            int ni = i + dirs[k][0], nj = j + dirs[k][1];\n                            if (0 <= ni && ni < n && 0 <= nj && nj < m && grid[ni][nj] == '.' && !is_same(cur.b, make_pair(ni, nj))) {\n                                uf.uni(pos2Idx(i, j, m), pos2Idx(ni, nj, m));\n                            }\n                        }\n                    }\n                }\n            }\n            return uf;\n        };\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < m; j++) {\n                if (grid[i][j] == 'T') t = make_pair(i, j), grid[i][j] = '.';\n                else if (grid[i][j] == 'B') b = make_pair(i, j), grid[i][j] = '.';\n                else if (grid[i][j] == 'S') p = make_pair(i, j), grid[i][j] = '.';\n            }\n        }\n        queue<Node> q;\n        q.push(Node(p, b));\n        int size = 1, step = 0;\n        while (q.size()) {\n            auto cur = q.front();\n            q.pop();\n            if (is_same(cur.b, t)) return step;\n            auto uf = get_uf(cur);\n            for (int k = 0; k < 4; k++) {\n                int ni = cur.b.X + dirs[k][0], nj = cur.b.Y + dirs[k][1],\n                    bi = cur.b.X - dirs[k][0], bj = cur.b.Y - dirs[k][1];\n                // \u5982\u679c\u7bb1\u5b50\u8981\u63a8\u5230(ni, nj), \u90a3\u4e48\u4eba\u8981\u5728(bi, bj)\u4f4d\u7f6e\u4e0a\u63a8\uff0c\u6240\u4ee5\u8fd9\u4e24\u4e2a\u4f4d\u7f6e\u90fd\u8981\u7a7a\uff0c\u4e14\u8fd9\u4e2a\u4f4d\u7f6e\u6ca1\u6709\u88ab\u7edf\u8ba1\u8fc7\n                if (0 <= ni && ni < n && 0 <= nj && nj < m && grid[ni][nj] == '.' &&\n                    0 <= bi && bi < n && 0 <= bj && bj < m && grid[bi][bj] == '.' &&\n                    uf.same(pos2Idx(cur.p.X, cur.p.Y, m), pos2Idx(bi, bj, m)) &&\n                    !used[pos2Idx(cur.b.X, cur.b.Y, m)][pos2Idx(ni, nj, m)]) {\n                    q.push(Node(make_pair(cur.b.X, cur.b.Y), make_pair(ni, nj)));\n                    used[pos2Idx(cur.b.X, cur.b.Y, m)][pos2Idx(ni, nj, m)] = true;\n                }\n            }\n            if (--size == 0) {\n                size = q.size();\n                step++;\n            }\n        }\n        return -1;\n    }\n};\n"})}),"\n",(0,t.jsx)(i.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-09"}),"\n",(0,t.jsx)(i.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,t.jsx)(i.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,t.jsx)(i.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(i.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-rust",children:"pub use std::collections::HashMap;\npub use std::collections::VecDeque;\npub const dirs: [[i32; 2]; 4] = [[0, 1], [0, -1], [1, 0], [-1, 0]];\npub struct UnionFind {\n    n: usize,\n    data: Vec<usize>,\n    cnt: Vec<usize>,\n}\nimpl UnionFind {\n    pub fn new(n: usize) -> Self {\n        let mut data = vec![0; n];\n        for i in 0..data.len() {\n            data[i] = i;\n        }\n        Self {\n            n,\n            data,\n            cnt: vec![0; n],\n        }\n    }\n    pub fn size(&mut self, v: usize) -> usize {\n        let idx = self.find(v);\n        self.cnt[idx]\n    }\n    pub fn find(&mut self, v: usize) -> usize {\n        if self.data[v] != v {\n            self.data[v] = self.find(self.data[v]);\n        }\n        self.data[v]\n    }\n    pub fn uni(&mut self, v1: usize, v2: usize) {\n        let p1 = self.find(v1);\n        let p2 = self.find(v2);\n        if p1 != p2 {\n            self.cnt[p1] += self.cnt[p2];\n            self.data[p2] = p1;\n        }\n    }\n    pub fn same(&mut self, v1: usize, v2: usize) -> bool {\n        self.find(v1) == self.find(v2)\n    }\n}\npub fn pos2Idx(x: usize, y: usize, size: usize) -> usize {\n    x * size + y\n}\npub fn idx2Pos(idx: usize, size: usize) -> (usize, usize) {\n    (idx / size, idx % size)\n}\ntype Position = (usize, usize);\n#[derive(Clone, Copy, Debug)]\nstruct Node {\n    p: Position,\n    b: Position,\n}\nimpl Node {\n    fn new(p: Position, b: Position) -> Self {\n        Self { p, b }\n    }\n}\nimpl Solution {\n    pub fn min_push_box(mut grid: Vec<Vec<char>>) -> i32 {\n        let mut p: Position = (0, 0);\n        let mut b: Position = (0, 0);\n        let mut t: Position = (0, 0);\n        let n = grid.len();\n        let m = grid[0].len();\n        let mut used = HashMap::<usize, HashMap<usize, bool>>::new();\n        let is_same = |a: Position, b: Position| a.0 == b.0 && a.1 == b.1;\n        let is_valid = |v: (i32, i32)| 0 <= v.0 && v.0 < n as i32 && 0 <= v.1 && v.1 < m as i32;\n        let get_uf = |grid: &Vec<Vec<char>>, cur: Node| {\n            let mut uf = UnionFind::new(n * m);\n            for i in 0..n {\n                for j in 0..m {\n                    if grid[i][j] == '.' && !is_same(cur.b, (i, j)) {\n                        for k in 0..4 {\n                            let ni = i as i32 + dirs[k][0];\n                            let nj = j as i32 + dirs[k][1];\n                            if is_valid((ni, nj))\n                                && grid[ni as usize][nj as usize] == '.'\n                                && !is_same(cur.b, (ni as usize, nj as usize))\n                            {\n                                uf.uni(pos2Idx(i, j, m), pos2Idx(ni as usize, nj as usize, m));\n                            }\n                        }\n                    }\n                }\n            }\n            uf\n        };\n        for i in 0..n {\n            for j in 0..m {\n                let t1 = grid[i][j] == 'T';\n                let t2 = grid[i][j] == 'B';\n                let t3 = grid[i][j] == 'S';\n                if t1 {\n                    t = (i, j);\n                    grid[i][j] = '.';\n                } else if t2 {\n                    b = (i, j);\n                    grid[i][j] = '.';\n                } else if t3 {\n                    p = (i, j);\n                    grid[i][j] = '.';\n                }\n            }\n        }\n        let mut q = VecDeque::<Node>::new();\n        q.push_back(Node::new(p, b));\n        let mut size = 1;\n        let mut step = 0;\n        while let Some(cur) = q.pop_front() {\n            if is_same(cur.b, t) {\n                return step;\n            }\n            let mut uf = get_uf(&grid, cur);\n            for k in 0..4 {\n                let ni = cur.b.0 as i32 + dirs[k][0];\n                let nj = cur.b.1 as i32 + dirs[k][1];\n                let bi = cur.b.0 as i32 - dirs[k][0];\n                let bj = cur.b.1 as i32 - dirs[k][1];\n                let pidx = pos2Idx(cur.p.0, cur.p.1, m);\n                let bidx = pos2Idx(cur.b.0, cur.b.1, m);\n                if is_valid((ni, nj))\n                    && grid[ni as usize][nj as usize] == '.'\n                    && is_valid((bi, bj))\n                    && grid[bi as usize][bj as usize] == '.'\n                    && uf.same(pidx, pos2Idx(bi as usize, bj as usize, m))\n                {\n                    if used.contains_key(&bidx)\n                        && used.get(&bidx).unwrap().contains_key(&pos2Idx(\n                            ni as usize,\n                            nj as usize,\n                            m,\n                        ))\n                    {\n                        continue;\n                    }\n                    let ni = ni as usize;\n                    let nj = nj as usize;\n                    q.push_back(Node::new(cur.b, (ni, nj)));\n                    let item = used.entry(bidx).or_insert(HashMap::new());\n                    *item.entry(pos2Idx(ni, nj, m)).or_insert(false) = true;\n                }\n            }\n            size -= 1;\n            if size == 0 {\n                size = q.len();\n                step += 1;\n            }\n        }\n        -1\n    }\n}\n"})})]})}function c(n={}){const{wrapper:i}={...(0,d.R)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8556:(n,i,e)=>{e.d(i,{R:()=>r,x:()=>u});var s=e(58101);const t={},d=s.createContext(t);function r(n){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function u(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(d.Provider,{value:i},n.children)}}}]);