"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[34330],{39267:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/501-600/\u6700\u77ed\u65e0\u5e8f\u8fde\u7eed\u5b50\u6570\u7ec4","title":"581.\u6700\u77ed\u65e0\u5e8f\u8fde\u7eed\u5b50\u6570\u7ec4","description":"\u94fe\u63a5\uff1a581.\u6700\u77ed\u65e0\u5e8f\u8fde\u7eed\u5b50\u6570\u7ec4","source":"@site/docs/leetcode/501-600/581.\u6700\u77ed\u65e0\u5e8f\u8fde\u7eed\u5b50\u6570\u7ec4.md","sourceDirName":"leetcode/501-600","slug":"/leetcode/501-600/\u6700\u77ed\u65e0\u5e8f\u8fde\u7eed\u5b50\u6570\u7ec4","permalink":"/docs/leetcode/501-600/\u6700\u77ed\u65e0\u5e8f\u8fde\u7eed\u5b50\u6570\u7ec4","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":581,"frontMatter":{},"sidebar":"journal","previous":{"title":"576.\u51fa\u754c\u7684\u8def\u5f84\u6570","permalink":"/docs/leetcode/501-600/\u51fa\u754c\u7684\u8def\u5f84\u6570"},"next":{"title":"583.\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u5220\u9664\u64cd\u4f5c","permalink":"/docs/leetcode/501-600/\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u5220\u9664\u64cd\u4f5c"}}');var s=t(86070),i=t(31503);const o={},c="581.\u6700\u77ed\u65e0\u5e8f\u8fde\u7eed\u5b50\u6570\u7ec4",l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"581\u6700\u77ed\u65e0\u5e8f\u8fde\u7eed\u5b50\u6570\u7ec4",children:"581.\u6700\u77ed\u65e0\u5e8f\u8fde\u7eed\u5b50\u6570\u7ec4"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/shortest-unsorted-continuous-subarray",children:"581.\u6700\u77ed\u65e0\u5e8f\u8fde\u7eed\u5b50\u6570\u7ec4"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u6392\u5e8f\u3001\u5355\u8c03\u6808",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \uff0c\u4f60\u9700\u8981\u627e\u51fa\u4e00\u4e2a \u8fde\u7eed\u5b50\u6570\u7ec4 \uff0c\u5982\u679c\u5bf9\u8fd9\u4e2a\u5b50\u6570\u7ec4\u8fdb\u884c\u5347\u5e8f\u6392\u5e8f\uff0c\u90a3\u4e48\u6574\u4e2a\u6570\u7ec4\u90fd\u4f1a\u53d8\u4e3a\u5347\u5e8f\u6392\u5e8f\u3002\u8bf7\u4f60\u627e\u51fa\u7b26\u5408\u9898\u610f\u7684 \u6700\u77ed \u5b50\u6570\u7ec4\uff0c\u5e76\u8f93\u51fa\u5b83\u7684\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-03"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a164ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u6bd4\u5bf9\u6bcf\u4e00\u4f4d\u627e\u51fa\u6700\u5148\u4e0d\u540c\u7684\u4e0b\u6807\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function findUnsortedSubarray(nums: number[]): number {\n  const sorted = nums.slice().sort((a, b) => a - b);\n  let l = -1;\n  let r = -1;\n  for (let i = 0, n = nums.length; i < n; i++) {\n    if (sorted[i] !== nums[i] && l === -1) {\n      l = i;\n    }\n    if (sorted[n - 1 - i] !== nums[n - 1 - i] && r === -1) {\n      r = n - 1 - i;\n    }\n    if (l !== -1 && r !== -1) break;\n  }\n  return r === -1 ? 0 : r - l + 1;\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(30758);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);