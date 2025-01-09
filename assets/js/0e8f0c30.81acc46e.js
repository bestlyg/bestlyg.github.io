"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[65010],{65670:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"leetcode/1901-2000/\u5bfb\u627e\u56fe\u4e2d\u662f\u5426\u5b58\u5728\u8def\u5f84","title":"1971.\u5bfb\u627e\u56fe\u4e2d\u662f\u5426\u5b58\u5728\u8def\u5f84","description":"\u94fe\u63a5\uff1a1971.\u5bfb\u627e\u56fe\u4e2d\u662f\u5426\u5b58\u5728\u8def\u5f84","source":"@site/docs/leetcode/1901-2000/1971.\u5bfb\u627e\u56fe\u4e2d\u662f\u5426\u5b58\u5728\u8def\u5f84.md","sourceDirName":"leetcode/1901-2000","slug":"/leetcode/1901-2000/\u5bfb\u627e\u56fe\u4e2d\u662f\u5426\u5b58\u5728\u8def\u5f84","permalink":"/docs/leetcode/1901-2000/\u5bfb\u627e\u56fe\u4e2d\u662f\u5426\u5b58\u5728\u8def\u5f84","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1971,"frontMatter":{},"sidebar":"journal","previous":{"title":"1969.\u6570\u7ec4\u5143\u7d20\u7684\u6700\u5c0f\u975e\u96f6\u4e58\u79ef","permalink":"/docs/leetcode/1901-2000/\u6570\u7ec4\u5143\u7d20\u7684\u6700\u5c0f\u975e\u96f6\u4e58\u79ef"},"next":{"title":"1976.\u5230\u8fbe\u76ee\u7684\u5730\u7684\u65b9\u6848\u6570","permalink":"/docs/leetcode/1901-2000/\u5230\u8fbe\u76ee\u7684\u5730\u7684\u65b9\u6848\u6570"}}');var s=t(25105),r=t(8556);const c={},o="1971.\u5bfb\u627e\u56fe\u4e2d\u662f\u5426\u5b58\u5728\u8def\u5f84",d={},l=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"1971\u5bfb\u627e\u56fe\u4e2d\u662f\u5426\u5b58\u5728\u8def\u5f84",children:"1971.\u5bfb\u627e\u56fe\u4e2d\u662f\u5426\u5b58\u5728\u8def\u5f84"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/find-if-path-exists-in-graph",children:"1971.\u5bfb\u627e\u56fe\u4e2d\u662f\u5426\u5b58\u5728\u8def\u5f84"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e76\u67e5\u96c6\u3001\u56fe",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u786e\u5b9a\u662f\u5426\u5b58\u5728\u4ece\u9876\u70b9 source \u5f00\u59cb\uff0c\u5230\u9876\u70b9 destination \u7ed3\u675f\u7684 \u6709\u6548\u8def\u5f84 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-19"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a304ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a109.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5e76\u67e5\u96c6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class UnionFind {\npublic:\n    int n;\n    vector<int> data, cnt;\n    UnionFind(int n): n(n), data(vector<int>(n, 0)), cnt(vector<int>(n, 1)) {\n        iota(data.begin(), data.end(), 0);\n    }\n    int size(int v) { return cnt[find(v)]; }\n    int find(int v) {\n        if (data[v] == v) return v;\n        return data[v] = find(data[v]);\n    }\n    void uni(int v1, int v2) {\n        int p1 = find(v1), p2 = find(v2);\n        if (p1 != p2) cnt[p1] += cnt[p2], data[p2] = p1;\n    }\n    bool same(int v1, int v2) { return find(v1) == find(v2); }\n};\nclass Solution {\npublic:\n    bool validPath(int n, vector<vector<int>>& edges, int source, int destination) {\n        UnionFind uf(n);\n        for (auto &edge : edges) uf.uni(edge[0], edge[1]);\n        return uf.same(source, destination);\n    }\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8556:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var i=t(58101);const s={},r=i.createContext(s);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);