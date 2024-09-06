"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[78884],{72829:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=e(86070),s=e(25710);const r={},o="827.\u6700\u5927\u4eba\u5de5\u5c9b",d={id:"leetcode/801-900/\u6700\u5927\u4eba\u5de5\u5c9b",title:"827.\u6700\u5927\u4eba\u5de5\u5c9b",description:"\u94fe\u63a5\uff1a827.\u6700\u5927\u4eba\u5de5\u5c9b",source:"@site/docs/leetcode/801-900/827.\u6700\u5927\u4eba\u5de5\u5c9b.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u6700\u5927\u4eba\u5de5\u5c9b",permalink:"/docs/leetcode/801-900/\u6700\u5927\u4eba\u5de5\u5c9b",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:827,frontMatter:{},sidebar:"journal",previous:{title:"826.\u5b89\u6392\u5de5\u4f5c\u4ee5\u8fbe\u5230\u6700\u5927\u6536\u76ca",permalink:"/docs/leetcode/801-900/\u5b89\u6392\u5de5\u4f5c\u4ee5\u8fbe\u5230\u6700\u5927\u6536\u76ca"},next:{title:"828.\u7edf\u8ba1\u5b50\u4e32\u4e2d\u7684\u552f\u4e00\u5b57\u7b26",permalink:"/docs/leetcode/801-900/\u7edf\u8ba1\u5b50\u4e32\u4e2d\u7684\u552f\u4e00\u5b57\u7b26"}},c={},l=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(n){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"827\u6700\u5927\u4eba\u5de5\u5c9b",children:"827.\u6700\u5927\u4eba\u5de5\u5c9b"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(i.a,{href:"https://leetcode.cn/problems/making-a-large-island",children:"827.\u6700\u5927\u4eba\u5de5\u5c9b"}),(0,t.jsx)(i.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,t.jsx)(i.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e76\u67e5\u96c6\u3001\u6570\u7ec4\u3001\u77e9\u9635",(0,t.jsx)(i.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5927\u5c0f\u4e3a n x n \u4e8c\u8fdb\u5236\u77e9\u9635 grid \u3002\u6700\u591a \u53ea\u80fd\u5c06\u4e00\u683c 0 \u53d8\u6210 1 \u3002\u8fd4\u56de\u6267\u884c\u6b64\u64cd\u4f5c\u540e\uff0cgrid \u4e2d\u6700\u5927\u7684\u5c9b\u5c7f\u9762\u79ef\u662f\u591a\u5c11\uff1f\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-09-18"}),"\n",(0,t.jsx)(i.li,{children:"\u6267\u884c\u7528\u65f6\uff1a620ms"}),"\n",(0,t.jsx)(i.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a167.5MB"}),"\n",(0,t.jsx)(i.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(i.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","uf \u8bb0\u5f55\u6240\u6709\u5c9b\uff0c\u5bf9\u6bcf\u4e2a 0 \u4f4d\u7f6e\u8fdb\u884c\u5c1d\u8bd5\u5408\u5e76\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cpp",children:"class UnionFind{\npublic:\n    int n;\n    vector<int> list;\n    UnionFind(int n){\n        this->n = n;\n        list = vector<int>(n);\n        for (int i = 0; i < n; i++) list[i] = i;\n    }\n    int find(int e) {\n        if (list[e] == e) return e;\n        return list[e] = find(list[e]);\n    }\n    void uni(int e1, int e2) {\n        int p1 = find(e1), p2 = find(e2);\n        if (p1 != p2) list[p1] = p2;\n    }\n};\nint dirs[4][2] = {\n    {0, 1}, {0, -1},\n    {-1, 0}, {1, 0}\n};\ntypedef pair<int, int> node;\nclass Solution {\npublic:\n    int n;\n    int largestIsland(vector<vector<int>>& grid) {\n        n = grid.size();\n        vector<node> list0;\n        UnionFind uf(n * n);\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                int idx = toIdx(i, j);\n                if (grid[i][j] == 0) {\n                    uf.list[idx] = -1;\n                    list0.push_back(make_pair(i, j));\n                } else {\n                    for (int k = 0; k < 4; k++) {\n                        int x = i + dirs[k][0], y = j + dirs[k][1];\n                        if (x < 0 || x == n || y < 0 || y == n || grid[x][y] == 0) continue;\n                        uf.uni(idx, toIdx(x, y));\n                    }\n                }\n            }\n        }\n        unordered_map<int, int> m;\n        int ans = 0;\n        for (int i = 0; i < uf.n; i++) if (uf.list[i] != -1) ans = max(ans, ++m[uf.find(i)]);\n        for (auto &item : list0) {\n            unordered_set<int> s;\n            for (int i = 0; i < 4; i++) {\n                int x = item.first + dirs[i][0], y = item.second + dirs[i][1];\n                if (x < 0 || x == n || y < 0 || y == n || grid[x][y] == 0) continue;\n                s.insert(uf.find(toIdx(x, y)));\n            }\n            int sum = 1;\n            for (auto &p : s) sum += m[p];\n            ans = max(ans, sum);\n        }\n        return ans;\n    }\n    int toIdx(int x, int y) {\n        return x * n + y;\n    }\n};\n"})})]})}function u(n={}){const{wrapper:i}={...(0,s.R)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},25710:(n,i,e)=>{e.d(i,{R:()=>o,x:()=>d});var t=e(30758);const s={},r=t.createContext(s);function o(n){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function d(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(r.Provider,{value:i},n.children)}}}]);