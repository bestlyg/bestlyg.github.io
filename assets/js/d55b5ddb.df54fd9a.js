"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[57162],{58291:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/801-900/\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb","title":"821.\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb","description":"\u94fe\u63a5\uff1a821.\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb","source":"@site/docs/leetcode/801-900/821.\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb.md","sourceDirName":"leetcode/801-900","slug":"/leetcode/801-900/\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb","permalink":"/docs/leetcode/801-900/\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":821,"frontMatter":{},"sidebar":"journal","previous":{"title":"819.\u6700\u5e38\u89c1\u7684\u5355\u8bcd","permalink":"/docs/leetcode/801-900/\u6700\u5e38\u89c1\u7684\u5355\u8bcd"},"next":{"title":"822.\u7ffb\u8f6c\u5361\u7247\u6e38\u620f","permalink":"/docs/leetcode/801-900/\u7ffb\u8f6c\u5361\u7247\u6e38\u620f"}}');var t=i(86070),c=i(31503);const r={},l="821.\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb",o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"821\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb",children:"821.\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/shortest-distance-to-a-character",children:"821.\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 s \u548c\u4e00\u4e2a\u5b57\u7b26 c \uff0c\u4e14 c \u662f s \u4e2d\u51fa\u73b0\u8fc7\u7684\u5b57\u7b26\u3002\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 answer \uff0c\u5176\u4e2d answer.length == s.length \u4e14 answer[i] \u662f s \u4e2d\u4ece\u4e0b\u6807 i \u5230\u79bb\u5b83 \u6700\u8fd1 \u7684\u5b57\u7b26 c \u7684 \u8ddd\u79bb \u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-20"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.7MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    vector<int> shortestToChar(string s, char c) {\n        unordered_set<string> sset;\n        int n = s.size();\n        vector<int> ans(n, -1);\n        queue<int> q;\n        for (int i = 0; i < n; i++) {\n            if (s[i] == c) {\n                q.push(i);\n                ans[i] = 0;\n            }\n        }\n        int level = 1, size = q.size();\n        while (q.size()) {\n            int idx = q.front();\n            q.pop();\n            if (idx < n - 1 && ans[idx + 1] == -1) {\n                q.push(idx + 1);\n                ans[idx + 1] = level;\n            }\n            if (idx > 0 && ans[idx - 1] == -1) {\n                q.push(idx - 1);\n                ans[idx - 1] = level;\n            }\n            if (--size == 0) {\n                size = q.size();\n                level++;\n            }\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-04-19"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.6MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    vector<int> shortestToChar(string s, char c) {\n        int n = s.size();\n        vector<int> check(n, -1);\n        queue<pair<int, int>> q;\n        for (int i = 0; i < n; i++) {\n            if (s[i] == c) {\n                q.push(make_pair(i, 0));\n                check[i] = 0;\n            }\n        }\n        while (q.size()) {\n            pair<int, int> item = q.front();\n            q.pop();\n            int row = item.first, cnt = item.second;\n            if (row < n - 1 && check[row + 1] == -1) {\n                q.push(make_pair(row + 1, cnt + 1));\n                check[row + 1] = cnt + 1;\n            }\n            if (row > 0 && check[row - 1] == -1) {\n                q.push(make_pair(row - 1, cnt + 1));\n                check[row - 1] = cnt + 1;\n            }\n        }\n        return check;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>l});var s=i(30758);const t={},c=s.createContext(t);function r(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);