"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[77634],{56690:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/1001-1100/\u7f51\u683c\u7167\u660e","title":"1001.\u7f51\u683c\u7167\u660e","description":"\u94fe\u63a5\uff1a1001.\u7f51\u683c\u7167\u660e","source":"@site/docs/leetcode/1001-1100/1001.\u7f51\u683c\u7167\u660e.md","sourceDirName":"leetcode/1001-1100","slug":"/leetcode/1001-1100/\u7f51\u683c\u7167\u660e","permalink":"/docs/leetcode/1001-1100/\u7f51\u683c\u7167\u660e","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1001,"frontMatter":{},"sidebar":"journal","previous":{"title":"1000.\u5408\u5e76\u77f3\u5934\u7684\u6700\u4f4e\u6210\u672c","permalink":"/docs/leetcode/901-1000/\u5408\u5e76\u77f3\u5934\u7684\u6700\u4f4e\u6210\u672c"},"next":{"title":"1002.\u67e5\u627e\u5171\u7528\u5b57\u7b26","permalink":"/docs/leetcode/1001-1100/\u67e5\u627e\u5171\u7528\u5b57\u7b26"}}');var r=t(86070),s=t(31503);const o={},c="1001.\u7f51\u683c\u7167\u660e",l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"1001\u7f51\u683c\u7167\u660e",children:"1001.\u7f51\u683c\u7167\u660e"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/grid-illumination",children:"1001.\u7f51\u683c\u7167\u660e"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5728\u5927\u5c0f\u4e3a n x n \u7684\u7f51\u683c grid \u4e0a\uff0c\u6bcf\u4e2a\u5355\u5143\u683c\u90fd\u6709\u4e00\u76cf\u706f\uff0c\u6700\u521d\u706f\u90fd\u5904\u4e8e \u5173\u95ed \u72b6\u6001\u3002\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 ans \u4f5c\u4e3a\u7b54\u6848\uff0c ans[j] \u5e94\u7b49\u4e8e\u7b2c j \u6b21\u67e5\u8be2 queries[j] \u7684\u7ed3\u679c\uff0c1 \u8868\u793a\u7167\u4eae\uff0c0 \u8868\u793a\u672a\u7167\u4eae\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-08"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a644ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a178.3MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u5b58\u50a8\u6bcf\u4e2a\u70b9\u7684\u884c\u5217\u659c\u7ebf\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"int dirs[9][2] = {{0, 1},  {0, -1},  {1, 0},  {-1, 0}, {1, 1},\n                  {1, -1}, {-1, -1}, {-1, 1}, {0, 0}};\nclass Solution {\n   public:\n    int get_b(int x, int y, int k) { return y - x * k; }\n    vector<int> gridIllumination(int n, vector<vector<int>>& lamps,\n                                 vector<vector<int>>& queries) {\n        unordered_map<int, unordered_set<int>> m;\n        unordered_map<int, int> m_x, m_y, m_k1, m_k2;\n        for (auto& item : lamps) {\n            int x = item[0], y = item[1];\n            if (m[x].count(y)) continue;\n            m[x].insert(y);\n            m_x[x]++;\n            m_y[y]++;\n            m_k1[get_b(x, n - y - 1, 1)]++;\n            m_k2[get_b(x, n - y - 1, -1)]++;\n        }\n        vector<int> ans;\n        for (auto& item : queries) {\n            int x = item[0], y = item[1], state = 0;\n            if (m_x[x] || m_y[y] || m_k1[get_b(x, n - y - 1, 1)] ||\n                m_k2[get_b(x, n - y - 1, -1)])\n                state = 1;\n            ans.push_back(state);\n            for (int i = 0; i < 9; i++) {\n                int nx = x + dirs[i][0], ny = y + dirs[i][1];\n                if (nx < 0 || ny < 0 || nx >= n || ny >= n || !m[nx].count(ny))\n                    continue;\n                m_x[nx]--;\n                m_y[ny]--;\n                m_k1[get_b(nx, n - ny - 1, 1)]--;\n                m_k2[get_b(nx, n - ny - 1, -1)]--;\n                m[nx].erase(ny);\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var i=t(30758);const r={},s=i.createContext(r);function o(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);