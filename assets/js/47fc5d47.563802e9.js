"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[84761],{50272:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.09.\u5b57\u7b26\u4e32\u8f6e\u8f6c","title":"\u9762\u8bd5\u989801.09.\u5b57\u7b26\u4e32\u8f6e\u8f6c","description":"\u94fe\u63a5\uff1a\u9762\u8bd5\u989801.09.\u5b57\u7b26\u4e32\u8f6e\u8f6c","source":"@site/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.09.\u5b57\u7b26\u4e32\u8f6e\u8f6c.md","sourceDirName":"leetcode/\u9762\u8bd5\u9898","slug":"/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.09.\u5b57\u7b26\u4e32\u8f6e\u8f6c","permalink":"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.09.\u5b57\u7b26\u4e32\u8f6e\u8f6c","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"\u9762\u8bd5\u989801.08.\u96f6\u77e9\u9635","permalink":"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.08.\u96f6\u77e9\u9635"},"next":{"title":"\u9762\u8bd5\u989802.01.\u79fb\u9664\u91cd\u590d\u8282\u70b9","permalink":"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989802.01.\u79fb\u9664\u91cd\u590d\u8282\u70b9"}}');var i=s(86070),r=s(31503);const l={},c="\u9762\u8bd5\u989801.09.\u5b57\u7b26\u4e32\u8f6e\u8f6c",o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u9762\u8bd5\u98980109\u5b57\u7b26\u4e32\u8f6e\u8f6c",children:"\u9762\u8bd5\u989801.09.\u5b57\u7b26\u4e32\u8f6e\u8f6c"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/string-rotation-lcci",children:"\u9762\u8bd5\u989801.09.\u5b57\u7b26\u4e32\u8f6e\u8f6c"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u5b57\u7b26\u4e32\u5339\u914d",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5b57\u7b26\u4e32\u8f6e\u8f6c\u3002\u7ed9\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32 s1 \u548c s2\uff0c\u8bf7\u7f16\u5199\u4ee3\u7801\u68c0\u67e5 s2 \u662f\u5426\u4e3a s1 \u65cb\u8f6c\u800c\u6210\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-09-29"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.5MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int n;\n    bool isFlipedString(string s1, string s2) {\n        if (s1.size() != s2.size()) return false;\n        n = s1.size();\n        if (n == 0) return true;\n        vector<int> list;\n        char start = s2[0];\n        for (int i = 0; i < n; i++) if (s1[i] == start) list.push_back(i);\n        for (auto &start : list) if (comp(s1, start, s2, 0)) return true;\n        return false;\n    }\n    bool comp(string &s1, int i1, string &s2, int i2) {\n        while (i2 < n) {\n            if (s1[i1] != s2[i2]) return false;\n            i1 = (i1 + 1) % n;\n            i2++;\n        }\n        return true;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-09-29"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.7MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u62fc\u63a5\u4e24\u4e2a s1\uff0c\u5982\u679c\u662f\u65cb\u8f6c\uff0cs2 \u4e00\u5b9a\u662f\u5b50\u4e32\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool isFlipedString(string s1, string s2) {\n        return s1.size() == s2.size() && (s1 + s1).find(s2) != string::npos;\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},31503:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var t=s(30758);const i={},r=t.createContext(i);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);