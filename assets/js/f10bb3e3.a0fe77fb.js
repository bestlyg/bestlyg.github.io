"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[61515],{55243:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.08.\u96f6\u77e9\u9635","title":"\u9762\u8bd5\u989801.08.\u96f6\u77e9\u9635","description":"\u94fe\u63a5\uff1a\u9762\u8bd5\u989801.08.\u96f6\u77e9\u9635","source":"@site/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.08.\u96f6\u77e9\u9635.md","sourceDirName":"leetcode/\u9762\u8bd5\u9898","slug":"/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.08.\u96f6\u77e9\u9635","permalink":"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.08.\u96f6\u77e9\u9635","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"\u9762\u8bd5\u989801.07.\u65cb\u8f6c\u77e9\u9635","permalink":"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.07.\u65cb\u8f6c\u77e9\u9635"},"next":{"title":"\u9762\u8bd5\u989801.09.\u5b57\u7b26\u4e32\u8f6e\u8f6c","permalink":"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.09.\u5b57\u7b26\u4e32\u8f6e\u8f6c"}}');var i=t(86070),o=t(31503);const s={},c="\u9762\u8bd5\u989801.08.\u96f6\u77e9\u9635",l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u9762\u8bd5\u98980108\u96f6\u77e9\u9635",children:"\u9762\u8bd5\u989801.08.\u96f6\u77e9\u9635"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/zero-matrix-lcci",children:"\u9762\u8bd5\u989801.08.\u96f6\u77e9\u9635"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u77e9\u9635",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7f16\u5199\u4e00\u79cd\u7b97\u6cd5\uff0c\u82e5 M \xd7 N \u77e9\u9635\u4e2d\u67d0\u4e2a\u5143\u7d20\u4e3a 0\uff0c\u5219\u5c06\u5176\u6240\u5728\u7684\u884c\u4e0e\u5217\u6e05\u96f6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-09-30"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a11.9MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    void setZeroes(vector<vector<int>>& matrix) {\n        int n = matrix.size(), m = matrix[0].size();\n        unordered_set<int> rows, cols;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < m; j++) {\n                if (matrix[i][j] == 0) {\n                    rows.insert(i);\n                    cols.insert(j);\n                }\n            }\n        }\n        for (auto &row : rows) {\n            for (int i = 0; i < m; i++) matrix[row][i] = 0;\n        }\n        for (auto &col : cols) {\n            for (int i = 0; i < n; i++) matrix[i][col] = 0;\n        }\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(30758);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);