"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[52474],{40246:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"leetcode/1501-1600/\u5b50\u6570\u7ec4\u548c\u6392\u5e8f\u540e\u7684\u533a\u95f4\u548c","title":"1508.\u5b50\u6570\u7ec4\u548c\u6392\u5e8f\u540e\u7684\u533a\u95f4\u548c","description":"\u94fe\u63a5\uff1a1508.\u5b50\u6570\u7ec4\u548c\u6392\u5e8f\u540e\u7684\u533a\u95f4\u548c","source":"@site/docs/leetcode/1501-1600/1508.\u5b50\u6570\u7ec4\u548c\u6392\u5e8f\u540e\u7684\u533a\u95f4\u548c.md","sourceDirName":"leetcode/1501-1600","slug":"/leetcode/1501-1600/\u5b50\u6570\u7ec4\u548c\u6392\u5e8f\u540e\u7684\u533a\u95f4\u548c","permalink":"/docs/leetcode/1501-1600/\u5b50\u6570\u7ec4\u548c\u6392\u5e8f\u540e\u7684\u533a\u95f4\u548c","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1508,"frontMatter":{},"sidebar":"journal","previous":{"title":"1499.\u6ee1\u8db3\u4e0d\u7b49\u5f0f\u7684\u6700\u5927\u503c","permalink":"/docs/leetcode/1401-1500/\u6ee1\u8db3\u4e0d\u7b49\u5f0f\u7684\u6700\u5927\u503c"},"next":{"title":"1512.\u597d\u6570\u5bf9\u7684\u6570\u76ee","permalink":"/docs/leetcode/1501-1600/\u597d\u6570\u5bf9\u7684\u6570\u76ee"}}');var s=t(86070),i=t(31503);const c={},l="1508.\u5b50\u6570\u7ec4\u548c\u6392\u5e8f\u540e\u7684\u533a\u95f4\u548c",o={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1508\u5b50\u6570\u7ec4\u548c\u6392\u5e8f\u540e\u7684\u533a\u95f4\u548c",children:"1508.\u5b50\u6570\u7ec4\u548c\u6392\u5e8f\u540e\u7684\u533a\u95f4\u548c"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/range-sum-of-sorted-subarray-sums",children:"1508.\u5b50\u6570\u7ec4\u548c\u6392\u5e8f\u540e\u7684\u533a\u95f4\u548c"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u4e8c\u5206\u67e5\u627e\u3001\u6392\u5e8f",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u5728\u65b0\u6570\u7ec4\u4e2d\u4e0b\u6807\u4e3a \xa0left\xa0 \u5230 \xa0right \uff08\u4e0b\u6807\u4ece 1 \u5f00\u59cb\uff09\u7684\u6240\u6709\u6570\u5b57\u548c\uff08\u5305\u62ec\u5de6\u53f3\u7aef\u70b9\uff09\u3002\u7531\u4e8e\u7b54\u6848\u53ef\u80fd\u5f88\u5927\uff0c\u8bf7\u4f60\u5c06\u5b83\u5bf9 10^9 + 7 \u53d6\u6a21\u540e\u8fd4\u56de\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-13"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a436ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a75.2MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function rangeSum(nums: number[], n: number, left: number, right: number): number {\n  const prefixSumList: number[] = [];\n  let sum = 0;\n  nums.forEach(v => prefixSumList.push((sum += v)));\n  const list: number[] = nums.slice();\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < i; j++) {\n      list.push(prefixSumList[i] - (prefixSumList[j - 1] ?? 0));\n    }\n  }\n  return (\n    list\n      .sort((a, b) => a - b)\n      .slice(left - 1, right)\n      .reduce((total, cur) => total + cur, 0) %\n    (10 ** 9 + 7)\n  );\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(30758);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);