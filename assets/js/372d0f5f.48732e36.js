"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[7216],{29843:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"leetcode/1001-1100/\u98de\u5730\u7684\u6570\u91cf","title":"1020.\u98de\u5730\u7684\u6570\u91cf","description":"\u94fe\u63a5\uff1a1020.\u98de\u5730\u7684\u6570\u91cf","source":"@site/docs/leetcode/1001-1100/1020.\u98de\u5730\u7684\u6570\u91cf.md","sourceDirName":"leetcode/1001-1100","slug":"/leetcode/1001-1100/\u98de\u5730\u7684\u6570\u91cf","permalink":"/docs/leetcode/1001-1100/\u98de\u5730\u7684\u6570\u91cf","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1020,"frontMatter":{},"sidebar":"journal","previous":{"title":"1019.\u94fe\u8868\u4e2d\u7684\u4e0b\u4e00\u4e2a\u66f4\u5927\u8282\u70b9","permalink":"/docs/leetcode/1001-1100/\u94fe\u8868\u4e2d\u7684\u4e0b\u4e00\u4e2a\u66f4\u5927\u8282\u70b9"},"next":{"title":"1021.\u5220\u9664\u6700\u5916\u5c42\u7684\u62ec\u53f7","permalink":"/docs/leetcode/1001-1100/\u5220\u9664\u6700\u5916\u5c42\u7684\u62ec\u53f7"}}');var t=e(25105),s=e(8556);const d={},o="1020.\u98de\u5730\u7684\u6570\u91cf",c={},l=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2}];function a(n){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"1020\u98de\u5730\u7684\u6570\u91cf",children:"1020.\u98de\u5730\u7684\u6570\u91cf"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(i.a,{href:"https://leetcode.cn/problems/number-of-enclaves",children:"1020.\u98de\u5730\u7684\u6570\u91cf"}),(0,t.jsx)(i.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(i.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e76\u67e5\u96c6\u3001\u6570\u7ec4\u3001\u77e9\u9635",(0,t.jsx)(i.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u7f51\u683c\u4e2d \u65e0\u6cd5 \u5728\u4efb\u610f\u6b21\u6570\u7684\u79fb\u52a8\u4e2d\u79bb\u5f00\u7f51\u683c\u8fb9\u754c\u7684\u9646\u5730\u5355\u5143\u683c\u7684\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-12"}),"\n",(0,t.jsx)(i.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,t.jsx)(i.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a23.6MB"}),"\n",(0,t.jsx)(i.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(i.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","uf,\u7edf\u8ba1\u6240\u6709\u51fa\u53e3\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cpp",children:"int dirs[4][2] = {{0, 1}, {1, 0}, {-1, 0}, {0, -1}};\nclass UnionFind {\n   public:\n    vector<int> data;\n    UnionFind(int size) : data(size) {\n        for (int i = 0; i < size; i++) data[i] = i;\n    }\n    int find(int e) {\n        if (data[e] == e) return e;\n        return data[e] = find(data[e]);\n    }\n    void uni(int e1, int e2) { data[find(e2)] = find(e1); }\n};\nclass Solution {\n   public:\n    int n, m;\n    int get_idx(int row, int col) { return row * m + col; }\n    int numEnclaves(vector<vector<int>>& grid) {\n        n = grid.size();\n        m = grid[0].size();\n        int ans = 0;\n        UnionFind uf(n * m);\n        unordered_set<int> s1, s2;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < m; j++) {\n                if (grid[i][j] == 0) continue;\n                ans++;\n                if (i == 0 || j == 0 || i == n - 1 || j == m - 1)\n                    s1.insert(get_idx(i, j));\n                for (int k = 0; k < 4; k++) {\n                    int ni = i + dirs[k][0], nj = j + dirs[k][1];\n                    if (ni < 0 || ni >= n || nj < 0 || nj >= m ||\n                        grid[ni][nj] == 0)\n                        continue;\n                    uf.uni(get_idx(i, j), get_idx(ni, nj));\n                }\n            }\n        }\n        for (auto& idx : s1) s2.insert(uf.find(idx));\n        for (int i = 0; i < n * m; i++) {\n            if (s2.count(uf.find(i))) ans--;\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,t.jsx)(i.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-12"}),"\n",(0,t.jsx)(i.li,{children:"\u6267\u884c\u7528\u65f6\uff1a44ms"}),"\n",(0,t.jsx)(i.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a21.1MB"}),"\n",(0,t.jsx)(i.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(i.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs,\u5bf9\u4e8e\u6bcf\u4e2a\u51fa\u53e3\u8fdb\u884c\u904d\u5386,\u904d\u5386\u5230\u7684\u9646\u5730\u90fd\u53ef\u51fa\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cpp",children:"int dirs[4][2] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};\nclass Solution {\n   public:\n    typedef pair<int, int> node;\n    int m, n;\n    int numEnclaves(vector<vector<int>>& grid) {\n        n = grid.size();\n        m = grid[0].size();\n        for (int i = 0; i < n; i++) {\n            if (grid[i][0]) {\n                grid[i][0] = 0;\n                dfs(grid, i, 0);\n            }\n            if (m > 1 && grid[i][m - 1]) {\n                grid[i][m - 1] = 0;\n                dfs(grid, i, m - 1);\n            }\n        }\n        for (int i = 1; i < m - 1; i++) {\n            if (grid[0][i]) {\n                grid[0][i] = 0;\n                dfs(grid, 0, i);\n            }\n            if (n > 1 && grid[n - 1][i]) {\n                grid[n - 1][i] = 0;\n                dfs(grid, n - 1, i);\n            }\n        }\n        int ans = 0;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < m; j++) {\n                if (grid[i][j]) ans++;\n            }\n        }\n        return ans;\n    }\n    void dfs(vector<vector<int>>& grid, const int row, const int col) {\n        for (int i = 0; i < 4; i++) {\n            int nrow = row + dirs[i][0], ncol = col + dirs[i][1];\n            if (nrow < 0 || nrow >= n || ncol < 0 || ncol >= m ||\n                grid[nrow][ncol] == 0)\n                continue;\n            grid[nrow][ncol] = 0;\n            dfs(grid, nrow, ncol);\n        }\n    }\n};\n"})}),"\n",(0,t.jsx)(i.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-12"}),"\n",(0,t.jsx)(i.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,t.jsx)(i.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a21.6MB"}),"\n",(0,t.jsx)(i.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(i.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bfs,\u5bf9\u4e8e\u6bcf\u4e2a\u51fa\u53e3\u8fdb\u884c\u904d\u5386,\u904d\u5386\u5230\u7684\u9646\u5730\u90fd\u53ef\u51fa\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cpp",children:"int dirs[4][2] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};\nclass Solution {\n   public:\n    typedef pair<int, int> node;\n    int m, n;\n    int numEnclaves(vector<vector<int>>& grid) {\n        n = grid.size();\n        m = grid[0].size();\n        queue<node> q;\n        for (int i = 0; i < n; i++) {\n            if (grid[i][0]) {\n                q.push(make_pair(i, 0));\n                grid[i][0] = 0;\n            }\n            if (m > 1 && grid[i][m - 1]) {\n                q.push(make_pair(i, m - 1));\n                grid[i][m - 1] = 0;\n            }\n        }\n        for (int i = 1; i < m - 1; i++) {\n            if (grid[0][i]) {\n                q.push(make_pair(0, i));\n                grid[0][i] = 0;\n            }\n            if (n > 1 && grid[n - 1][i]) {\n                q.push(make_pair(n - 1, i));\n                grid[n - 1][i] = 0;\n            }\n        }\n        while (q.size()) {\n            node v = q.front();\n            q.pop();\n            for (int i = 0; i < 4; i++) {\n                int nrow = v.first + dirs[i][0], ncol = v.second + dirs[i][1];\n                if (nrow < 0 || nrow >= n || ncol < 0 || ncol >= m ||\n                    grid[nrow][ncol] == 0)\n                    continue;\n                q.push(make_pair(nrow, ncol));\n                grid[nrow][ncol] = 0;\n            }\n        }\n        int ans = 0;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < m; j++) {\n                if (grid[i][j]) ans++;\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:i}={...(0,s.R)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8556:(n,i,e)=>{e.d(i,{R:()=>d,x:()=>o});var r=e(58101);const t={},s=r.createContext(t);function d(n){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function o(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),r.createElement(s.Provider,{value:i},n.children)}}}]);