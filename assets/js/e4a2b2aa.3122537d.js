"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[10979],{1386:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"leetcode/1201-1300/\u7edf\u8ba1\u5c01\u95ed\u5c9b\u5c7f\u7684\u6570\u76ee","title":"1254.\u7edf\u8ba1\u5c01\u95ed\u5c9b\u5c7f\u7684\u6570\u76ee","description":"\u94fe\u63a5\uff1a1254.\u7edf\u8ba1\u5c01\u95ed\u5c9b\u5c7f\u7684\u6570\u76ee","source":"@site/docs/leetcode/1201-1300/1254.\u7edf\u8ba1\u5c01\u95ed\u5c9b\u5c7f\u7684\u6570\u76ee.md","sourceDirName":"leetcode/1201-1300","slug":"/leetcode/1201-1300/\u7edf\u8ba1\u5c01\u95ed\u5c9b\u5c7f\u7684\u6570\u76ee","permalink":"/docs/leetcode/1201-1300/\u7edf\u8ba1\u5c01\u95ed\u5c9b\u5c7f\u7684\u6570\u76ee","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1254,"frontMatter":{},"sidebar":"journal","previous":{"title":"1253.\u91cd\u67842\u884c\u4e8c\u8fdb\u5236\u77e9\u9635","permalink":"/docs/leetcode/1201-1300/\u91cd\u67842\u884c\u4e8c\u8fdb\u5236\u77e9\u9635"},"next":{"title":"1255.\u5f97\u5206\u6700\u9ad8\u7684\u5355\u8bcd\u96c6\u5408","permalink":"/docs/leetcode/1201-1300/\u5f97\u5206\u6700\u9ad8\u7684\u5355\u8bcd\u96c6\u5408"}}');var t=i(25105),s=i(8556);const c={},o="1254.\u7edf\u8ba1\u5c01\u95ed\u5c9b\u5c7f\u7684\u6570\u76ee",d={},l=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"1254\u7edf\u8ba1\u5c01\u95ed\u5c9b\u5c7f\u7684\u6570\u76ee",children:"1254.\u7edf\u8ba1\u5c01\u95ed\u5c9b\u5c7f\u7684\u6570\u76ee"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/number-of-closed-islands",children:"1254.\u7edf\u8ba1\u5c01\u95ed\u5c9b\u5c7f\u7684\u6570\u76ee"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e76\u67e5\u96c6\u3001\u6570\u7ec4\u3001\u77e9\u9635",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4e8c\u7ef4\u77e9\u9635 grid\xa0\u7531 0\xa0\uff08\u571f\u5730\uff09\u548c 1\xa0\uff08\u6c34\uff09\u7ec4\u6210\u3002\u5c9b\u662f\u7531\u6700\u5927\u76844\u4e2a\u65b9\u5411\u8fde\u901a\u7684 0\xa0\u7ec4\u6210\u7684\u7fa4\uff0c\u5c01\u95ed\u5c9b\u662f\u4e00\u4e2a\xa0\u5b8c\u5168 \u75311\u5305\u56f4\uff08\u5de6\u3001\u4e0a\u3001\u53f3\u3001\u4e0b\uff09\u7684\u5c9b\u3002\u8bf7\u8fd4\u56de \u5c01\u95ed\u5c9b\u5c7f \u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-18"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a20ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a13MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#define X first\n#define Y second\n#define pii pair<int, int>\nvector<vector<int>> dirs = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};\nclass Solution {\npublic:\n    int closedIsland(vector<vector<int>>& grid) {\n        int n = grid.size(), m = grid[0].size(), res = 0;\n        bool used[100][100] = {0};\n        auto check = [&](int i, int j) {\n            bool res = true;\n            queue<pii> q;\n            q.push(make_pair(i, j));\n            used[i][j] = true;\n            while (q.size()) {\n                auto cur = q.front();\n                q.pop();\n                for (auto &dir : dirs) {\n                    int ni = cur.X + dir[0], nj = cur.Y + dir[1];\n                    if (ni < 0 || ni >= n || nj < 0 || nj >= m || grid[ni][nj] == 1 || used[ni][nj]) continue;\n                    if (ni == 0 || ni == n - 1 || nj == 0 || nj == m - 1) res = false;\n                    q.push(make_pair(ni, nj));\n                    used[ni][nj] = true;\n                }\n            }\n            return res;\n        };\n        for (int i = 1; i < n - 1; i++) {\n            for (int j = 1; j < m - 1; j++) {\n                if (grid[i][j] == 0 && !used[i][j] && check(i, j)) res += 1;\n            }\n        }\n        return res;\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8556:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var r=i(58101);const t={},s=r.createContext(t);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);