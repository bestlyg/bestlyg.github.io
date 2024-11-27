"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[11995],{42447:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/601-700/\u4ea4\u66ff\u4f4d\u4e8c\u8fdb\u5236\u6570","title":"693.\u4ea4\u66ff\u4f4d\u4e8c\u8fdb\u5236\u6570","description":"\u94fe\u63a5\uff1a693.\u4ea4\u66ff\u4f4d\u4e8c\u8fdb\u5236\u6570","source":"@site/docs/leetcode/601-700/693.\u4ea4\u66ff\u4f4d\u4e8c\u8fdb\u5236\u6570.md","sourceDirName":"leetcode/601-700","slug":"/leetcode/601-700/\u4ea4\u66ff\u4f4d\u4e8c\u8fdb\u5236\u6570","permalink":"/docs/leetcode/601-700/\u4ea4\u66ff\u4f4d\u4e8c\u8fdb\u5236\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":693,"frontMatter":{},"sidebar":"journal","previous":{"title":"692.\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd","permalink":"/docs/leetcode/601-700/\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd"},"next":{"title":"696.\u8ba1\u6570\u4e8c\u8fdb\u5236\u5b50\u4e32","permalink":"/docs/leetcode/601-700/\u8ba1\u6570\u4e8c\u8fdb\u5236\u5b50\u4e32"}}');var r=t(86070),c=t(31503);const l={},i="693.\u4ea4\u66ff\u4f4d\u4e8c\u8fdb\u5236\u6570",o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"693\u4ea4\u66ff\u4f4d\u4e8c\u8fdb\u5236\u6570",children:"693.\u4ea4\u66ff\u4f4d\u4e8c\u8fdb\u5236\u6570"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/binary-number-with-alternating-bits",children:"693.\u4ea4\u66ff\u4f4d\u4e8c\u8fdb\u5236\u6570"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u8868\u793a\u56fe\u50cf\u7070\u5ea6\u7684 m x n \u6574\u6570\u77e9\u9635 img \uff0c\u8fd4\u56de\u5bf9\u56fe\u50cf\u7684\u6bcf\u4e2a\u5355\u5143\u683c\u5e73\u6ed1\u5904\u7406\u540e\u7684\u56fe\u50cf \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-16"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.8MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u6bcf\u4e00\u4f4d\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    bool hasAlternatingBits(int n) {\n        bool check = (n & 1) == 0;\n        for (n >>= 1; n; n >>= 1, check = !check) {\n            if ((n & 1) == 0) {\n                if (check) return false;\n            } else {\n                if (!check) return false;\n            }\n        }\n        return true;\n    }\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-28"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.9MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class Solution {\n   public:\n    bool hasAlternatingBits(int n) {\n        bool f = n & 1;\n        for (; n; f ^= 1, n >>= 1) {\n            if ((n & 1) != f) return false;\n        }\n        return true;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(30758);const r={},c=s.createContext(r);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);