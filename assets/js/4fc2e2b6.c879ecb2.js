"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[23675],{92859:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>m,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"leetcode/1701-1800/\u4efb\u610f\u5b50\u6570\u7ec4\u548c\u7684\u7edd\u5bf9\u503c\u7684\u6700\u5927\u503c","title":"1749.\u4efb\u610f\u5b50\u6570\u7ec4\u548c\u7684\u7edd\u5bf9\u503c\u7684\u6700\u5927\u503c","description":"\u94fe\u63a5\uff1a1749.\u4efb\u610f\u5b50\u6570\u7ec4\u548c\u7684\u7edd\u5bf9\u503c\u7684\u6700\u5927\u503c","source":"@site/docs/leetcode/1701-1800/1749.\u4efb\u610f\u5b50\u6570\u7ec4\u548c\u7684\u7edd\u5bf9\u503c\u7684\u6700\u5927\u503c.md","sourceDirName":"leetcode/1701-1800","slug":"/leetcode/1701-1800/\u4efb\u610f\u5b50\u6570\u7ec4\u548c\u7684\u7edd\u5bf9\u503c\u7684\u6700\u5927\u503c","permalink":"/docs/leetcode/1701-1800/\u4efb\u610f\u5b50\u6570\u7ec4\u548c\u7684\u7edd\u5bf9\u503c\u7684\u6700\u5927\u503c","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1749,"frontMatter":{},"sidebar":"journal","previous":{"title":"1748.\u552f\u4e00\u5143\u7d20\u7684\u548c","permalink":"/docs/leetcode/1701-1800/\u552f\u4e00\u5143\u7d20\u7684\u548c"},"next":{"title":"1750.\u5220\u9664\u5b57\u7b26\u4e32\u4e24\u7aef\u76f8\u540c\u5b57\u7b26\u540e\u7684\u6700\u77ed\u957f\u5ea6","permalink":"/docs/leetcode/1701-1800/\u5220\u9664\u5b57\u7b26\u4e32\u4e24\u7aef\u76f8\u540c\u5b57\u7b26\u540e\u7684\u6700\u77ed\u957f\u5ea6"}}');var r=s(86070),l=s(31503);const t={},c="1749.\u4efb\u610f\u5b50\u6570\u7ec4\u548c\u7684\u7edd\u5bf9\u503c\u7684\u6700\u5927\u503c",m={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"1749\u4efb\u610f\u5b50\u6570\u7ec4\u548c\u7684\u7edd\u5bf9\u503c\u7684\u6700\u5927\u503c",children:"1749.\u4efb\u610f\u5b50\u6570\u7ec4\u548c\u7684\u7edd\u5bf9\u503c\u7684\u6700\u5927\u503c"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/maximum-absolute-sum-of-any-subarray",children:"1749.\u4efb\u610f\u5b50\u6570\u7ec4\u548c\u7684\u7edd\u5bf9\u503c\u7684\u6700\u5927\u503c"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u627e\u51fa nums \u4e2d \u548c\u7684\u7edd\u5bf9\u503c \u6700\u5927\u7684\u4efb\u610f\u5b50\u6570\u7ec4\uff08\u53ef\u80fd\u4e3a\u7a7a\uff09\uff0c\u5e76\u8fd4\u56de\u8be5 \u6700\u5927\u503c \u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-08"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.4MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386,\u7edf\u8ba1\u6700\u5927\u503c\u548c\u6700\u5c0f\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxAbsoluteSum(vector<int>& nums) {\n        int nmin = 0, nmax = 0, res = 0;\n        for (auto &num : nums) {\n            nmin = min(num, nmin + num);\n            nmax = max(0, nmax + num);\n            res = max(res, max(abs(nmin), abs(nmax)));\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-08"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a212ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a26.04MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def maxAbsoluteSum(self, nums: List[int]) -> int:\n        nmin = nmax = res = 0\n        for num in nums:\n            nmin, nmax = min(num, nmin + num), max(0, nmax + num)\n            res = max(res, max(abs(nmin), abs(nmax)))\n        return res\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-08"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a3.01MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn max_absolute_sum(nums: Vec<i32>) -> i32 {\n        let (mut nmin, mut nmax, mut res) = (0, 0, 0);\n        for num in nums {\n            nmin = num.min(nmin + num);\n            nmax = 0.max(nmax + num);\n            res = res.max(nmin.abs()).max(nmax.abs())\n        }\n        res\n    }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},31503:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>c});var i=s(30758);const r={},l=i.createContext(r);function t(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);