"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[23982],{4186:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"leetcode/1701-1800/\u79fb\u9664\u77f3\u5b50\u7684\u6700\u5927\u5f97\u5206","title":"1753.\u79fb\u9664\u77f3\u5b50\u7684\u6700\u5927\u5f97\u5206","description":"\u94fe\u63a5\uff1a1753.\u79fb\u9664\u77f3\u5b50\u7684\u6700\u5927\u5f97\u5206","source":"@site/docs/leetcode/1701-1800/1753.\u79fb\u9664\u77f3\u5b50\u7684\u6700\u5927\u5f97\u5206.md","sourceDirName":"leetcode/1701-1800","slug":"/leetcode/1701-1800/\u79fb\u9664\u77f3\u5b50\u7684\u6700\u5927\u5f97\u5206","permalink":"/docs/leetcode/1701-1800/\u79fb\u9664\u77f3\u5b50\u7684\u6700\u5927\u5f97\u5206","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1753,"frontMatter":{},"sidebar":"journal","previous":{"title":"1752.\u68c0\u67e5\u6570\u7ec4\u662f\u5426\u7ecf\u6392\u5e8f\u548c\u8f6e\u8f6c\u5f97\u5230","permalink":"/docs/leetcode/1701-1800/\u68c0\u67e5\u6570\u7ec4\u662f\u5426\u7ecf\u6392\u5e8f\u548c\u8f6e\u8f6c\u5f97\u5230"},"next":{"title":"1754.\u6784\u9020\u5b57\u5178\u5e8f\u6700\u5927\u7684\u5408\u5e76\u5b57\u7b26\u4e32","permalink":"/docs/leetcode/1701-1800/\u6784\u9020\u5b57\u5178\u5e8f\u6700\u5927\u7684\u5408\u5e76\u5b57\u7b26\u4e32"}}');var s=c(86070),t=c(31503);const r={},l="1753.\u79fb\u9664\u77f3\u5b50\u7684\u6700\u5927\u5f97\u5206",o={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"1753\u79fb\u9664\u77f3\u5b50\u7684\u6700\u5927\u5f97\u5206",children:"1753.\u79fb\u9664\u77f3\u5b50\u7684\u6700\u5927\u5f97\u5206"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/maximum-score-from-removing-stones",children:"1753.\u79fb\u9664\u77f3\u5b50\u7684\u6700\u5927\u5f97\u5206"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u5b66\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e09\u4e2a\u6574\u6570 a \u3001b \u548c c \uff0c\u8fd4\u56de\u53ef\u4ee5\u5f97\u5230\u7684 \u6700\u5927\u5206\u6570 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-11"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.4MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u5148\u4f7f bc \u5c3d\u53ef\u80fd\u4fdd\u6301\u4e00\u81f4\u518d\u8fdb\u884c\u76f8\u9664\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function maximumScore(a: number, b: number, c: number): number {\n  if (a > b) [a, b] = [b, a];\n  if (a > c) [a, c] = [c, a];\n  if (b > c) [b, c] = [c, b];\n  const num1 = Math.min(a, c - b);\n  a -= num1;\n  c -= num1;\n  if (a === 0) return num1 + b;\n  else return num1 + (a >> 1) + b;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-21"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.7MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5806\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maximumScore(int a, int b, int c) {\n        priority_queue<int> q;\n        q.push(a);\n        q.push(b);\n        q.push(c);\n        int ans = 0;\n        while (q.size() >= 2) {\n            int num1 = q.top(); q.pop();\n            int num2 = q.top(); q.pop();\n            ans += 1;\n            if (num1 > 1) q.push(num1 - 1);\n            if (num2 > 1) q.push(num2 - 1);\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-21"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.7MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5c3d\u53ef\u80fd\u5339\u914d\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maximumScore(int a, int b, int c) {\n        sort_v(a, b, c);\n        if (a + b <= c) return a + b;\n        return (a + b + c) / 2;\n    }\n    void sort_v(int &a, int &b, int &c) {\n        if (a > c) swap(a, c);\n        if (b > c) swap(b, c);\n        if (a > b) swap(a, b);\n    }\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},31503:(n,e,c)=>{c.d(e,{R:()=>r,x:()=>l});var i=c(30758);const s={},t=i.createContext(s);function r(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);