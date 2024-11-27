"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[6197],{10578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/701-800/\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f","title":"791.\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f","description":"\u94fe\u63a5\uff1a791.\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f","source":"@site/docs/leetcode/701-800/791.\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f.md","sourceDirName":"leetcode/701-800","slug":"/leetcode/701-800/\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f","permalink":"/docs/leetcode/701-800/\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":791,"frontMatter":{},"sidebar":"journal","previous":{"title":"790.\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa","permalink":"/docs/leetcode/701-800/\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa"},"next":{"title":"792.\u5339\u914d\u5b50\u5e8f\u5217\u7684\u5355\u8bcd\u6570","permalink":"/docs/leetcode/701-800/\u5339\u914d\u5b50\u5e8f\u5217\u7684\u5355\u8bcd\u6570"}}');var r=t(86070),c=t(31503);const i={},o="791.\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f",l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"791\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f",children:"791.\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/custom-sort-string",children:"791.\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u6392\u5e8f",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de \u6ee1\u8db3\u8fd9\u4e2a\u6027\u8d28\u7684 s \u7684\u4efb\u610f\u6392\u5217 \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-13"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.1MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u540e\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    string customSortString(string order, string s) {\n        int list[26] = {0};\n        for (int i = 0; i < order.size(); i++) list[order[i] - 'a'] = i;\n        sort(s.begin(), s.end(), [&list](char &a, char &b){ return list[a - 'a'] < list[b - 'a']; });\n        return s;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(30758);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);