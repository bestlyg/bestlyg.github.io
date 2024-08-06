"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[96411],{83118:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=i(86070),r=i(25710);const s={},o="934.\u6700\u77ed\u7684\u6865",c={id:"leetcode/901-1000/\u6700\u77ed\u7684\u6865",title:"934.\u6700\u77ed\u7684\u6865",description:"\u94fe\u63a5\uff1a934.\u6700\u77ed\u7684\u6865",source:"@site/docs/leetcode/901-1000/934.\u6700\u77ed\u7684\u6865.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u6700\u77ed\u7684\u6865",permalink:"/docs/leetcode/901-1000/\u6700\u77ed\u7684\u6865",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:934,frontMatter:{},sidebar:"journal",previous:{title:"933.\u6700\u8fd1\u7684\u8bf7\u6c42\u6b21\u6570",permalink:"/docs/leetcode/901-1000/\u6700\u8fd1\u7684\u8bf7\u6c42\u6b21\u6570"},next:{title:"937.\u91cd\u65b0\u6392\u5217\u65e5\u5fd7\u6587\u4ef6",permalink:"/docs/leetcode/901-1000/\u91cd\u65b0\u6392\u5217\u65e5\u5fd7\u6587\u4ef6"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"934\u6700\u77ed\u7684\u6865",children:"934.\u6700\u77ed\u7684\u6865"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/shortest-bridge",children:"934.\u6700\u77ed\u7684\u6865"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u77e9\u9635",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u5fc5\u987b\u7ffb\u8f6c\u7684 0 \u7684\u6700\u5c0f\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-25"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a44ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a18.6MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"typedef pair<int, int> node;\nconst int dirs[4][2] = {\n    {0, 1}, {0, -1},\n    {1, 0}, {-1, 0}\n};\nclass Solution {\npublic:\n    int shortestBridge(vector<vector<int>>& grid) {\n        int n = grid.size();\n        vector<vector<bool>> check(n, vector<bool>(n, false));\n        queue<node> q;\n        int f = true;\n        for (int i = 0; i < n && f; i++) {\n            for (int j = 0; j < n && f; j++) {\n                if (grid[i][j] == 1) {\n                    queue<node> tmp;\n                    tmp.push(make_pair(i, j));\n                    check[i][j] = true;\n                    while (tmp.size()) {\n                        node v = tmp.front();\n                        tmp.pop();\n                        q.push(make_pair(v.first, v.second));\n                        for (int k = 0; k < 4; k++) {\n                            int ni = v.first + dirs[k][0], nj = v.second + dirs[k][1];\n                            if (ni < 0 || ni == n || nj < 0 || nj == n || grid[ni][nj] == 0 || check[ni][nj]) continue;\n                            tmp.push(make_pair(ni, nj));\n                            check[ni][nj] = true;\n                        }\n                    }\n                    f = false;\n                }\n            }\n        }\n        int level = 1, size = q.size();\n        while (q.size()) {\n            node v = q.front();\n            q.pop();\n            for (int i = 0; i < 4; i++) {\n                int ni = v.first + dirs[i][0], nj = v.second + dirs[i][1];\n                if (ni < 0 || ni == n || nj < 0 || nj == n || check[ni][nj]) continue;\n                if (grid[ni][nj]) return level - 1;\n                check[ni][nj] = true;\n                q.push(make_pair(ni, nj));\n            }\n            if (--size == 0) {\n                size = q.size();\n                level++;\n            }\n        }\n        return 0;\n    }\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>c});var t=i(30758);const r={},s=t.createContext(r);function o(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);