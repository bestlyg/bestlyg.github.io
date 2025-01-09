"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[34619],{19122:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>o,frontMatter:()=>t,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"leetcode/1-100/x\u7684\u5e73\u65b9\u6839","title":"69.x\u7684\u5e73\u65b9\u6839","description":"\u94fe\u63a5\uff1a69.x\u7684\u5e73\u65b9\u6839","source":"@site/docs/leetcode/1-100/69.x\u7684\u5e73\u65b9\u6839.md","sourceDirName":"leetcode/1-100","slug":"/leetcode/1-100/x\u7684\u5e73\u65b9\u6839","permalink":"/docs/leetcode/1-100/x\u7684\u5e73\u65b9\u6839","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":69,"frontMatter":{},"sidebar":"journal","previous":{"title":"68.\u6587\u672c\u5de6\u53f3\u5bf9\u9f50","permalink":"/docs/leetcode/1-100/\u6587\u672c\u5de6\u53f3\u5bf9\u9f50"},"next":{"title":"70.\u722c\u697c\u68af","permalink":"/docs/leetcode/1-100/\u722c\u697c\u68af"}}');var r=l(25105),s=l(8556);const t={},c="69.x\u7684\u5e73\u65b9\u6839",d={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2},{value:"\u9898\u89e3 4 - javascript",id:"\u9898\u89e3-4---javascript",level:2},{value:"\u9898\u89e3 5 - javascript",id:"\u9898\u89e3-5---javascript",level:2}];function x(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"69x\u7684\u5e73\u65b9\u6839",children:"69.x\u7684\u5e73\u65b9\u6839"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/sqrtx",children:"69.x\u7684\u5e73\u65b9\u6839"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u4e8c\u5206\u67e5\u627e",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5b9e\u73b0 int sqrt(int x) \u51fd\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-20"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u67e5\u627e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int mySqrt(int x) {\n        long long l = 0, r = x, m;\n        while (l < r) {\n            m = (l + r + 1) >> 1;\n            if (m * m <= x)\n                l = m;\n            else\n                r = m - 1;\n        }\n        return l;\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-22"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.8MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u67e5\u627e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function mySqrt(x: number): number {\n  let l = 1;\n  let r = x;\n  while (l <= r) {\n    const mid = r + ((l - r) >> 1);\n    const midNum = mid ** 2;\n    if (midNum > x) r = mid - 1;\n    else if (midNum < x) l = mid + 1;\n    else return mid;\n  }\n  return l - 1;\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-20"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.8MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u67e5\u627e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int mySqrt(int x) {\n        double l = 0, r = x, m;\n        while ((int)l != (int)r) {\n            m = l + (r - l) / 2.0;\n            if (m > x / m)\n                r = m;\n            else\n                l = m;\n        }\n        return (int)l;\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-4---javascript",children:"\u9898\u89e3 4 - javascript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-09"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a35.4MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u624b\u52a8\u5b9e\u73b0 Math.sqrt(),\u4e8c\u5206\u641c\u7d22\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {number} x\n * @return {number}\n */\nvar mySqrt = function (x) {\n  if (x === 1) return 1;\n  let right = x;\n  let left = 1;\n  let mid = (right >> 1) + (left >> 1);\n  while (true) {\n    console.log(mid);\n    if (mid ** 2 <= x) {\n      if ((mid + 1) ** 2 > x) return mid;\n      else {\n        left = mid;\n        mid = (right + left) >> 1;\n      }\n    } else {\n      right = mid;\n      mid = (right + left) >> 1;\n    }\n  }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-5---javascript",children:"\u9898\u89e3 5 - javascript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-09"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a35.5MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8c03\u7528\u81ea\u5e26 Math \u51fd\u6570\u5373\u53ef\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {number} x\n * @return {number}\n */\nvar mySqrt = function (x) {\n  return Math.floor(Math.sqrt(x));\n};\n"})})]})}function o(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(x,{...n})}):x(n)}},8556:(n,e,l)=>{l.d(e,{R:()=>t,x:()=>c});var i=l(58101);const r={},s=i.createContext(r);function t(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);