"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[41077],{70519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"leetcode/2601-2700/\u4ece\u4e24\u4e2a\u6570\u5b57\u6570\u7ec4\u91cc\u751f\u6210\u6700\u5c0f\u6570\u5b57","title":"2605.\u4ece\u4e24\u4e2a\u6570\u5b57\u6570\u7ec4\u91cc\u751f\u6210\u6700\u5c0f\u6570\u5b57","description":"\u94fe\u63a5\uff1a2605.\u4ece\u4e24\u4e2a\u6570\u5b57\u6570\u7ec4\u91cc\u751f\u6210\u6700\u5c0f\u6570\u5b57","source":"@site/docs/leetcode/2601-2700/2605.\u4ece\u4e24\u4e2a\u6570\u5b57\u6570\u7ec4\u91cc\u751f\u6210\u6700\u5c0f\u6570\u5b57.md","sourceDirName":"leetcode/2601-2700","slug":"/leetcode/2601-2700/\u4ece\u4e24\u4e2a\u6570\u5b57\u6570\u7ec4\u91cc\u751f\u6210\u6700\u5c0f\u6570\u5b57","permalink":"/docs/leetcode/2601-2700/\u4ece\u4e24\u4e2a\u6570\u5b57\u6570\u7ec4\u91cc\u751f\u6210\u6700\u5c0f\u6570\u5b57","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2605,"frontMatter":{},"sidebar":"journal","previous":{"title":"2603.\u6536\u96c6\u6811\u4e2d\u91d1\u5e01","permalink":"/docs/leetcode/2601-2700/\u6536\u96c6\u6811\u4e2d\u91d1\u5e01"},"next":{"title":"2609.\u6700\u957f\u5e73\u8861\u5b50\u5b57\u7b26\u4e32","permalink":"/docs/leetcode/2601-2700/\u6700\u957f\u5e73\u8861\u5b50\u5b57\u7b26\u4e32"}}');var r=t(25105),o=t(8556);const i={},l="2605.\u4ece\u4e24\u4e2a\u6570\u5b57\u6570\u7ec4\u91cc\u751f\u6210\u6700\u5c0f\u6570\u5b57",c={},u=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"2605\u4ece\u4e24\u4e2a\u6570\u5b57\u6570\u7ec4\u91cc\u751f\u6210\u6700\u5c0f\u6570\u5b57",children:"2605.\u4ece\u4e24\u4e2a\u6570\u5b57\u6570\u7ec4\u91cc\u751f\u6210\u6700\u5c0f\u6570\u5b57"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/form-smallest-number-from-two-digit-arrays",children:"2605.\u4ece\u4e24\u4e2a\u6570\u5b57\u6570\u7ec4\u91cc\u751f\u6210\u6700\u5c0f\u6570\u5b57"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u679a\u4e3e",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e24\u4e2a\u53ea\u5305\u542b 1 \u5230 9 \u4e4b\u95f4\u6570\u5b57\u7684\u6570\u7ec4 nums1 \u548c nums2 \uff0c\u6bcf\u4e2a\u6570\u7ec4\u4e2d\u7684\u5143\u7d20 \u4e92\u4e0d\u76f8\u540c \uff0c\u8bf7\u4f60\u8fd4\u56de \u6700\u5c0f \u7684\u6570\u5b57\uff0c\u4e24\u4e2a\u6570\u7ec4\u90fd \u81f3\u5c11 \u5305\u542b\u8fd9\u4e2a\u6570\u5b57\u7684\u67d0\u4e2a\u6570\u4f4d\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-05"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.7MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def minNumber(self, nums1: List[int], nums2: List[int]) -> int:\n        nums1.sort()\n        nums2.sort()\n        for num in nums1:\n            if num in nums2:\n                return num\n        return min(nums1[0] * 10 + nums2[0], nums2[0] * 10 + nums1[0])\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(58101);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);