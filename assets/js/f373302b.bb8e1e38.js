"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[99481],{29898:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/801-900/\u4e09\u7ef4\u5f62\u4f53\u6295\u5f71\u9762\u79ef","title":"883.\u4e09\u7ef4\u5f62\u4f53\u6295\u5f71\u9762\u79ef","description":"\u94fe\u63a5\uff1a883.\u4e09\u7ef4\u5f62\u4f53\u6295\u5f71\u9762\u79ef","source":"@site/docs/leetcode/801-900/883.\u4e09\u7ef4\u5f62\u4f53\u6295\u5f71\u9762\u79ef.md","sourceDirName":"leetcode/801-900","slug":"/leetcode/801-900/\u4e09\u7ef4\u5f62\u4f53\u6295\u5f71\u9762\u79ef","permalink":"/docs/leetcode/801-900/\u4e09\u7ef4\u5f62\u4f53\u6295\u5f71\u9762\u79ef","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":883,"frontMatter":{},"sidebar":"journal","previous":{"title":"882.\u7ec6\u5206\u56fe\u4e2d\u7684\u53ef\u5230\u8fbe\u8282\u70b9","permalink":"/docs/leetcode/801-900/\u7ec6\u5206\u56fe\u4e2d\u7684\u53ef\u5230\u8fbe\u8282\u70b9"},"next":{"title":"884.\u4e24\u53e5\u8bdd\u4e2d\u7684\u4e0d\u5e38\u89c1\u5355\u8bcd","permalink":"/docs/leetcode/801-900/\u4e24\u53e5\u8bdd\u4e2d\u7684\u4e0d\u5e38\u89c1\u5355\u8bcd"}}');var t=o(25105),c=o(8556);const s={},i="883.\u4e09\u7ef4\u5f62\u4f53\u6295\u5f71\u9762\u79ef",l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"883\u4e09\u7ef4\u5f62\u4f53\u6295\u5f71\u9762\u79ef",children:"883.\u4e09\u7ef4\u5f62\u4f53\u6295\u5f71\u9762\u79ef"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/projection-area-of-3d-shapes",children:"883.\u4e09\u7ef4\u5f62\u4f53\u6295\u5f71\u9762\u79ef"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u51e0\u4f55\u3001\u6570\u7ec4\u3001\u6570\u5b66\u3001\u77e9\u9635",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de \u6240\u6709\u4e09\u4e2a\u6295\u5f71\u7684\u603b\u9762\u79ef \u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-22"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7edf\u8ba1\u6bcf\u4e2a\u6295\u5f71\u9762\u79ef\u7684\u5927\u5c0f\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int projectionArea(vector<vector<int>>& grid) {\n        int n = grid.size(), x = 0, y = 0, z = 0;\n        // z\n        for (int row = 0; row < n; row++) {\n            for (int col = 0; col < n; col++) {\n                if (grid[row][col] != 0) z++;\n            }\n        }\n        // y\n        for (int row = 0; row < n; row++) {\n            int h = 0;\n            for (int col = 0; col < n; col++) {\n                h = max(h, grid[row][col]);\n            }\n            y += h;\n        }\n        // x\n        for (int col = 0; col < n; col++) {\n            int h = 0;\n            for (int row = 0; row < n; row++) {\n                h = max(h, grid[row][col]);\n            }\n            x += h;\n        }\n        return x + y + z;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8556:(n,e,o)=>{o.d(e,{R:()=>s,x:()=>i});var r=o(58101);const t={},c=r.createContext(t);function s(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);