"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[75918],{1802:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var e=t(86070),r=t(25710);const o={},a="1632.\u77e9\u9635\u8f6c\u6362\u540e\u7684\u79e9",c={id:"leetcode/1601-1700/\u77e9\u9635\u8f6c\u6362\u540e\u7684\u79e9",title:"1632.\u77e9\u9635\u8f6c\u6362\u540e\u7684\u79e9",description:"\u94fe\u63a5\uff1a1632.\u77e9\u9635\u8f6c\u6362\u540e\u7684\u79e9",source:"@site/docs/leetcode/1601-1700/1632.\u77e9\u9635\u8f6c\u6362\u540e\u7684\u79e9.md",sourceDirName:"leetcode/1601-1700",slug:"/leetcode/1601-1700/\u77e9\u9635\u8f6c\u6362\u540e\u7684\u79e9",permalink:"/web/site/docs/leetcode/1601-1700/\u77e9\u9635\u8f6c\u6362\u540e\u7684\u79e9",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1632,frontMatter:{},sidebar:"journal",previous:{title:"1631.\u6700\u5c0f\u4f53\u529b\u6d88\u8017\u8def\u5f84",permalink:"/web/site/docs/leetcode/1601-1700/\u6700\u5c0f\u4f53\u529b\u6d88\u8017\u8def\u5f84"},next:{title:"1636.\u6309\u7167\u9891\u7387\u5c06\u6570\u7ec4\u5347\u5e8f\u6392\u5e8f",permalink:"/web/site/docs/leetcode/1601-1700/\u6309\u7167\u9891\u7387\u5c06\u6570\u7ec4\u5347\u5e8f\u6392\u5e8f"}},s={},l=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function m(n){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h1,{id:"1632\u77e9\u9635\u8f6c\u6362\u540e\u7684\u79e9",children:"1632.\u77e9\u9635\u8f6c\u6362\u540e\u7684\u79e9"}),"\n",(0,e.jsxs)(i.blockquote,{children:["\n",(0,e.jsxs)(i.p,{children:["\u94fe\u63a5\uff1a",(0,e.jsx)(i.a,{href:"https://leetcode.cn/problems/rank-transform-of-a-matrix",children:"1632.\u77e9\u9635\u8f6c\u6362\u540e\u7684\u79e9"}),(0,e.jsx)(i.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,e.jsx)(i.br,{}),"\n","\u6807\u7b7e\uff1a\u5e76\u67e5\u96c6\u3001\u56fe\u3001\u62d3\u6251\u6392\u5e8f\u3001\u6570\u7ec4\u3001\u77e9\u9635\u3001\u6392\u5e8f",(0,e.jsx)(i.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\xa0m x n\xa0\u7684\u77e9\u9635 matrix\xa0\uff0c\u8bf7\u4f60\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u77e9\u9635\xa0answer\xa0\uff0c\u5176\u4e2d\xa0answer[row][col]\xa0\u662f\xa0matrix[row][col]\xa0\u7684\u79e9\u3002"]}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-25"}),"\n",(0,e.jsx)(i.li,{children:"\u6267\u884c\u7528\u65f6\uff1a580ms"}),"\n",(0,e.jsx)(i.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a85.8MB"}),"\n",(0,e.jsx)(i.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,e.jsxs)(i.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5bf9\u4e8e\u6240\u6709\u6570\u5b57\u8fdb\u884c\u6392\u5e8f\uff0c\u5feb\u901f\u67e5\u627e\u5f53\u524d\u884c\u5217\u4e2d\u7684\u6700\u5927\u79e9\uff0c\u5e76\u5bf9\u5f53\u524d\u884c\u5217\u6240\u6709\u76f8\u540c\u7684\u503c\u7684\u79e9\u90fd\u8fdb\u884c\u8d4b\u503c\uff0c\u5229\u7528\u5e76\u67e5\u96c6+\u7f13\u5b58\u5feb\u901f\u67e5\u627e\u3002"]}),"\n"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-cpp",children:"# define X first\n# define Y second\n# define pii pair<int,int>\nclass UnionFind {\npublic:\n    int n;\n    vector<int> data, cnt;\n    UnionFind(int n): n(n), data(vector<int>(n, 0)), cnt(vector<int>(n, 1)) {\n        iota(data.begin(), data.end(), 0);\n    } \n    int size(int v) { return cnt[find(v)]; }\n    int find(int v) {\n        if (data[v] == v) return v;\n        return data[v] = find(data[v]);\n    }\n    void uni(int v1, int v2) {\n        int p1 = find(v1), p2 = find(v2);\n        if (p1 != p2) cnt[p1] += cnt[p2], data[p2] = p1;\n    }\n    bool same(int v1, int v2) { return find(v1) == find(v2); }\n};\nint pos2Idx(int x, int y, int size) { \n    return x * size + y; \n}\nvoid idx2Pos(int idx, int size, int &x, int &y) {\n    x = idx / size;\n    y = idx % size;\n}\nvector<vector<int>> dirs = { {0, 1}, {0, -1}, {1, 0}, {-1, 0} };\n// START\n\nclass Solution {\npublic:\n    vector<vector<int>> matrixRankTransform(vector<vector<int>>& matrix) {\n        int n = matrix.size(), m = matrix[0].size();\n        vector<vector<int>> ans(n, vector<int>(m, 0));\n        vector<vector<bool>> cache(n, vector<bool>(m, false));\n        UnionFind uf(n * m);\n        for (int i = 0; i < n; i++) {\n            unordered_map<int, pii> mmap;\n            for (int j = 0; j < m; j++) {\n                int val = matrix[i][j];\n                if (mmap.count(val)) uf.uni(pos2Idx(mmap[val].X, mmap[val].Y, m), pos2Idx(i, j, m));\n                else mmap[val] = make_pair(i, j);\n            }\n        }\n        for (int j = 0; j < m; j++) {\n            unordered_map<int, pii> mmap;\n            for (int i = 0; i < n; i++) {\n                int val = matrix[i][j];\n                if (mmap.count(val)) uf.uni(pos2Idx(mmap[val].X, mmap[val].Y, m), pos2Idx(i, j, m));\n                else mmap[val] = make_pair(i, j);\n            }\n        }\n        unordered_map<int, vector<pii>> mmap;\n        for (int i = 0; i < n * m; i++) {\n            int p = uf.find(i), row, col;\n            idx2Pos(i, m, row, col);\n            mmap[p].push_back(make_pair(row, col));\n        }\n\n        vector<pii> list, rows(n, make_pair(-1, -1)), cols(m, make_pair(-1, -1));\n        for (int i = 0; i < n; i++) for (int j = 0; j < m; j++) list.push_back(make_pair(i, j));\n        sort(list.begin(), list.end(), [&](auto &a, auto &b){ return matrix[a.X][a.Y] < matrix[b.X][b.Y]; });\n\n        auto get_rank = [&](pii &item) -> int {\n            int rank_row = 1, rank_col = 1, rank = ans[item.X][item.Y], val = matrix[item.X][item.Y];\n            auto &row = rows[item.X], &col = cols[item.Y];\n            if (row.X != -1) rank_row = ans[row.X][row.Y] + (matrix[row.X][row.Y] != val);\n            if (col.Y != -1) rank_col = ans[col.X][col.Y] + (matrix[col.X][col.Y] != val);\n            rank = max(rank, max(rank_row, rank_col));\n            return rank;\n        };\n\n        for (auto &item : list) {\n            if (!cache[item.X][item.Y]) {\n                int idx = uf.find(pos2Idx(item.X, item.Y, m)), rank = get_rank(item);\n                for (auto &next : mmap[idx]) {\n                    rank = max(rank, get_rank(next));\n                }\n                for (auto &next : mmap[idx]) {\n                    cache[next.X][next.Y] = true;\n                    ans[next.X][next.Y] = rank;\n                }\n            }\n            rows[item.X] = cols[item.Y] = item;\n        }\n\n        return ans;\n    }\n};\n// END\n"})})]})}function d(n={}){const{wrapper:i}={...(0,r.R)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(m,{...n})}):m(n)}},25710:(n,i,t)=>{t.d(i,{R:()=>a,x:()=>c});var e=t(30758);const r={},o=e.createContext(r);function a(n){const i=e.useContext(o);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),e.createElement(o.Provider,{value:i},n.children)}}}]);