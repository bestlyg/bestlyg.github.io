"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[77748],{11320:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/1401-1500/\u548c\u4e3aK\u7684\u6700\u5c11\u6590\u6ce2\u90a3\u5951\u6570\u5b57\u6570\u76ee","title":"1414.\u548c\u4e3aK\u7684\u6700\u5c11\u6590\u6ce2\u90a3\u5951\u6570\u5b57\u6570\u76ee","description":"\u94fe\u63a5\uff1a1414.\u548c\u4e3aK\u7684\u6700\u5c11\u6590\u6ce2\u90a3\u5951\u6570\u5b57\u6570\u76ee","source":"@site/docs/leetcode/1401-1500/1414.\u548c\u4e3aK\u7684\u6700\u5c11\u6590\u6ce2\u90a3\u5951\u6570\u5b57\u6570\u76ee.md","sourceDirName":"leetcode/1401-1500","slug":"/leetcode/1401-1500/\u548c\u4e3aK\u7684\u6700\u5c11\u6590\u6ce2\u90a3\u5951\u6570\u5b57\u6570\u76ee","permalink":"/docs/leetcode/1401-1500/\u548c\u4e3aK\u7684\u6700\u5c11\u6590\u6ce2\u90a3\u5951\u6570\u5b57\u6570\u76ee","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1414,"frontMatter":{},"sidebar":"journal","previous":{"title":"1413.\u9010\u6b65\u6c42\u548c\u5f97\u5230\u6b63\u6570\u7684\u6700\u5c0f\u503c","permalink":"/docs/leetcode/1401-1500/\u9010\u6b65\u6c42\u548c\u5f97\u5230\u6b63\u6570\u7684\u6700\u5c0f\u503c"},"next":{"title":"1417.\u91cd\u65b0\u683c\u5f0f\u5316\u5b57\u7b26\u4e32","permalink":"/docs/leetcode/1401-1500/\u91cd\u65b0\u683c\u5f0f\u5316\u5b57\u7b26\u4e32"}}');var c=t(86070),s=t(31503);const r={},o="1414.\u548c\u4e3aK\u7684\u6700\u5c11\u6590\u6ce2\u90a3\u5951\u6570\u5b57\u6570\u76ee",l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"1414\u548c\u4e3ak\u7684\u6700\u5c11\u6590\u6ce2\u90a3\u5951\u6570\u5b57\u6570\u76ee",children:"1414.\u548c\u4e3aK\u7684\u6700\u5c11\u6590\u6ce2\u90a3\u5951\u6570\u5b57\u6570\u76ee"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,c.jsx)(n.a,{href:"https://leetcode.cn/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k",children:"1414.\u548c\u4e3aK\u7684\u6700\u5c11\u6590\u6ce2\u90a3\u5951\u6570\u5b57\u6570\u76ee"}),(0,c.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,c.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u5b66",(0,c.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u6570\u5b57 k \uff0c\u8bf7\u4f60\u8fd4\u56de\u548c\u4e3a k \u7684\u6590\u6ce2\u90a3\u5951\u6570\u5b57\u7684\u6700\u5c11\u6570\u76ee\uff0c\u5176\u4e2d\uff0c\u6bcf\u4e2a\u6590\u6ce2\u90a3\u5951\u6570\u5b57\u90fd\u53ef\u4ee5\u88ab\u4f7f\u7528\u591a\u6b21\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-03"}),"\n",(0,c.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.9MB"}),"\n",(0,c.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,c.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8d2a\u5fc3\u7b56\u7565\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-cpp",children:"int fib[] = {1,         1,        2,        3,         5,         8,\n             13,        21,       34,       55,        89,        144,\n             233,       377,      610,      987,       1597,      2584,\n             4181,      6765,     10946,    17711,     28657,     46368,\n             75025,     121393,   196418,   317811,    514229,    832040,\n             1346269,   2178309,  3524578,  5702887,   9227465,   14930352,\n             24157817,  39088169, 63245986, 102334155, 165580141, 267914296,\n             433494437, 701408733};\nclass Solution {\n   public:\n    int findMinFibonacciNumbers(int k) {\n        int cnt = 0;\n        for (int idx = 43; k; idx--) {\n            while (fib[idx] > k) idx--;\n            cnt += k / fib[idx];\n            k %= fib[idx];\n        }\n        return cnt;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(30758);const c={},s=i.createContext(c);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);