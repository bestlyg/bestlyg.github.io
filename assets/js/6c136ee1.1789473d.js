"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[32651],{69893:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/1701-1800/\u4ec5\u6267\u884c\u4e00\u6b21\u5b57\u7b26\u4e32\u4ea4\u6362\u80fd\u5426\u4f7f\u4e24\u4e2a\u5b57\u7b26\u4e32\u76f8\u7b49","title":"1790.\u4ec5\u6267\u884c\u4e00\u6b21\u5b57\u7b26\u4e32\u4ea4\u6362\u80fd\u5426\u4f7f\u4e24\u4e2a\u5b57\u7b26\u4e32\u76f8\u7b49","description":"\u94fe\u63a5\uff1a1790.\u4ec5\u6267\u884c\u4e00\u6b21\u5b57\u7b26\u4e32\u4ea4\u6362\u80fd\u5426\u4f7f\u4e24\u4e2a\u5b57\u7b26\u4e32\u76f8\u7b49","source":"@site/docs/leetcode/1701-1800/1790.\u4ec5\u6267\u884c\u4e00\u6b21\u5b57\u7b26\u4e32\u4ea4\u6362\u80fd\u5426\u4f7f\u4e24\u4e2a\u5b57\u7b26\u4e32\u76f8\u7b49.md","sourceDirName":"leetcode/1701-1800","slug":"/leetcode/1701-1800/\u4ec5\u6267\u884c\u4e00\u6b21\u5b57\u7b26\u4e32\u4ea4\u6362\u80fd\u5426\u4f7f\u4e24\u4e2a\u5b57\u7b26\u4e32\u76f8\u7b49","permalink":"/docs/leetcode/1701-1800/\u4ec5\u6267\u884c\u4e00\u6b21\u5b57\u7b26\u4e32\u4ea4\u6362\u80fd\u5426\u4f7f\u4e24\u4e2a\u5b57\u7b26\u4e32\u76f8\u7b49","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1790,"frontMatter":{},"sidebar":"journal","previous":{"title":"1785.\u6784\u6210\u7279\u5b9a\u548c\u9700\u8981\u6dfb\u52a0\u7684\u6700\u5c11\u5143\u7d20","permalink":"/docs/leetcode/1701-1800/\u6784\u6210\u7279\u5b9a\u548c\u9700\u8981\u6dfb\u52a0\u7684\u6700\u5c11\u5143\u7d20"},"next":{"title":"1791.\u627e\u51fa\u661f\u578b\u56fe\u7684\u4e2d\u5fc3\u8282\u70b9","permalink":"/docs/leetcode/1701-1800/\u627e\u51fa\u661f\u578b\u56fe\u7684\u4e2d\u5fc3\u8282\u70b9"}}');var r=t(86070),c=t(31503);const i={},l="1790.\u4ec5\u6267\u884c\u4e00\u6b21\u5b57\u7b26\u4e32\u4ea4\u6362\u80fd\u5426\u4f7f\u4e24\u4e2a\u5b57\u7b26\u4e32\u76f8\u7b49",o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1790\u4ec5\u6267\u884c\u4e00\u6b21\u5b57\u7b26\u4e32\u4ea4\u6362\u80fd\u5426\u4f7f\u4e24\u4e2a\u5b57\u7b26\u4e32\u76f8\u7b49",children:"1790.\u4ec5\u6267\u884c\u4e00\u6b21\u5b57\u7b26\u4e32\u4ea4\u6362\u80fd\u5426\u4f7f\u4e24\u4e2a\u5b57\u7b26\u4e32\u76f8\u7b49"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/check-if-one-string-swap-can-make-strings-equal",children:"1790.\u4ec5\u6267\u884c\u4e00\u6b21\u5b57\u7b26\u4e32\u4ea4\u6362\u80fd\u5426\u4f7f\u4e24\u4e2a\u5b57\u7b26\u4e32\u76f8\u7b49"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u8ba1\u6570",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5982\u679c\u5bf9 \u5176\u4e2d\u4e00\u4e2a\u5b57\u7b26\u4e32 \u6267\u884c \u6700\u591a\u4e00\u6b21\u5b57\u7b26\u4e32\u4ea4\u6362 \u5c31\u53ef\u4ee5\u4f7f\u4e24\u4e2a\u5b57\u7b26\u4e32\u76f8\u7b49\uff0c\u8fd4\u56de true \uff1b\u5426\u5219\uff0c\u8fd4\u56de false \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-11"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.1MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool areAlmostEqual(string s1, string s2) {\n        int list[26] = {0}, n = s1.size();\n        for (auto &c : s1) list[c - 'a']++;\n        for (auto &c : s2) if (list[c - 'a']-- == 0) return false;\n        int tag = -1;\n        bool changed = false;\n        for (int i = 0; i < n; i++) {\n            if (s1[i] == s2[i]) continue;\n            if (changed) return false;\n            if (tag == -1) { tag = i; continue; }\n            else if (s1[tag] == s2[i] && s2[tag] == s1[i]) changed = true;\n            else return false;\n        }\n        return true;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(30758);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);