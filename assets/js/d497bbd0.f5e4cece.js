"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[58079],{21423:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"leetcode/1701-1800/\u751f\u6210\u4ea4\u66ff\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u7684\u6700\u5c11\u64cd\u4f5c\u6570","title":"1758.\u751f\u6210\u4ea4\u66ff\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u7684\u6700\u5c11\u64cd\u4f5c\u6570","description":"\u94fe\u63a5\uff1a1758.\u751f\u6210\u4ea4\u66ff\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u7684\u6700\u5c11\u64cd\u4f5c\u6570","source":"@site/docs/leetcode/1701-1800/1758.\u751f\u6210\u4ea4\u66ff\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u7684\u6700\u5c11\u64cd\u4f5c\u6570.md","sourceDirName":"leetcode/1701-1800","slug":"/leetcode/1701-1800/\u751f\u6210\u4ea4\u66ff\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u7684\u6700\u5c11\u64cd\u4f5c\u6570","permalink":"/docs/leetcode/1701-1800/\u751f\u6210\u4ea4\u66ff\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u7684\u6700\u5c11\u64cd\u4f5c\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1758,"frontMatter":{},"sidebar":"journal","previous":{"title":"1754.\u6784\u9020\u5b57\u5178\u5e8f\u6700\u5927\u7684\u5408\u5e76\u5b57\u7b26\u4e32","permalink":"/docs/leetcode/1701-1800/\u6784\u9020\u5b57\u5178\u5e8f\u6700\u5927\u7684\u5408\u5e76\u5b57\u7b26\u4e32"},"next":{"title":"1759.\u7edf\u8ba1\u540c\u8d28\u5b50\u5b57\u7b26\u4e32\u7684\u6570\u76ee","permalink":"/docs/leetcode/1701-1800/\u7edf\u8ba1\u540c\u8d28\u5b50\u5b57\u7b26\u4e32\u7684\u6570\u76ee"}}');var s=t(86070),i=t(31503);const r={},l="1758.\u751f\u6210\u4ea4\u66ff\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u7684\u6700\u5c11\u64cd\u4f5c\u6570",o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"1758\u751f\u6210\u4ea4\u66ff\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u7684\u6700\u5c11\u64cd\u4f5c\u6570",children:"1758.\u751f\u6210\u4ea4\u66ff\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u7684\u6700\u5c11\u64cd\u4f5c\u6570"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/minimum-changes-to-make-alternating-binary-string",children:"1758.\u751f\u6210\u4ea4\u66ff\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u7684\u6700\u5c11\u64cd\u4f5c\u6570"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4ec5\u7531\u5b57\u7b26 '0' \u548c '1' \u7ec4\u6210\u7684\u5b57\u7b26\u4e32 s \u3002\u4e00\u6b65\u64cd\u4f5c\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5c06\u4efb\u4e00 '0' \u53d8\u6210 '1' \uff0c\u6216\u8005\u5c06 '1' \u53d8\u6210 '0' \u3002\u8fd4\u56de\u4f7f s \u53d8\u6210 \u4ea4\u66ff\u5b57\u7b26\u4e32 \u6240\u9700\u7684 \u6700\u5c11 \u64cd\u4f5c\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-29"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.7MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minOperations(string s) {\n        int cnt1 = 0, cnt2 = 0, cur = 1;\n        for (auto &c : s) {\n            if (c - '0' == cur) cnt1++;\n            else cnt2++;\n            cur ^= 1;\n        }\n        return min(cnt1, cnt2);\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-29"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.8MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minOperations(string s) {\n        int n = s.size(), cnt = 0, cur = 1;\n        for (int i = 0; i < n; i++, cur^=1) {\n            if (s[i] - '0' == cur) cnt++;\n        }\n        return min(cnt, n - cnt);\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>l});var c=t(30758);const s={},i=c.createContext(s);function r(n){const e=c.useContext(i);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),c.createElement(i.Provider,{value:e},n.children)}}}]);