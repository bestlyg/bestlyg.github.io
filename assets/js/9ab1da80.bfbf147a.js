"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[2123],{9030:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"leetcode/1701-1800/\u888b\u5b50\u91cc\u6700\u5c11\u6570\u76ee\u7684\u7403","title":"1760.\u888b\u5b50\u91cc\u6700\u5c11\u6570\u76ee\u7684\u7403","description":"\u94fe\u63a5\uff1a1760.\u888b\u5b50\u91cc\u6700\u5c11\u6570\u76ee\u7684\u7403","source":"@site/docs/leetcode/1701-1800/1760.\u888b\u5b50\u91cc\u6700\u5c11\u6570\u76ee\u7684\u7403.md","sourceDirName":"leetcode/1701-1800","slug":"/leetcode/1701-1800/\u888b\u5b50\u91cc\u6700\u5c11\u6570\u76ee\u7684\u7403","permalink":"/docs/leetcode/1701-1800/\u888b\u5b50\u91cc\u6700\u5c11\u6570\u76ee\u7684\u7403","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1760,"frontMatter":{},"sidebar":"journal","previous":{"title":"1759.\u7edf\u8ba1\u540c\u8d28\u5b50\u5b57\u7b26\u4e32\u7684\u6570\u76ee","permalink":"/docs/leetcode/1701-1800/\u7edf\u8ba1\u540c\u8d28\u5b50\u5b57\u7b26\u4e32\u7684\u6570\u76ee"},"next":{"title":"1761.\u4e00\u4e2a\u56fe\u4e2d\u8fde\u901a\u4e09\u5143\u7ec4\u7684\u6700\u5c0f\u5ea6\u6570","permalink":"/docs/leetcode/1701-1800/\u4e00\u4e2a\u56fe\u4e2d\u8fde\u901a\u4e09\u5143\u7ec4\u7684\u6700\u5c0f\u5ea6\u6570"}}');var s=i(86070),r=i(31503);const c={},l="1760.\u888b\u5b50\u91cc\u6700\u5c11\u6570\u76ee\u7684\u7403",o={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"1760\u888b\u5b50\u91cc\u6700\u5c11\u6570\u76ee\u7684\u7403",children:"1760.\u888b\u5b50\u91cc\u6700\u5c11\u6570\u76ee\u7684\u7403"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/minimum-limit-of-balls-in-a-bag",children:"1760.\u888b\u5b50\u91cc\u6700\u5c11\u6570\u76ee\u7684\u7403"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \uff0c\u4f60\u7684\u5f00\u9500\u662f\u5355\u4e2a\u888b\u5b50\u91cc\u7403\u6570\u76ee\u7684 \u6700\u5927\u503c \uff0c\u4f60\u60f3\u8981 \u6700\u5c0f\u5316 \u5f00\u9500\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-21"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a260ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a49.4MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5bf9\u6700\u5927\u503c\u8fdb\u884c\u4e8c\u5206\u67e5\u627e\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function minimumSize(nums: number[], maxOperations: number): number {\n  return search();\n  function search(l = 1, r = Math.max(...nums)): number {\n    if (l === r) return l;\n    const mid = (l + r) >> 1;\n    if (count(mid) <= maxOperations) r = mid;\n    else l = mid + 1;\n    return search(l, r);\n  }\n  function count(size: number): number {\n    return nums.reduce((total, num) => total + ~~(num / size) + +!!(num % size) - 1, 0);\n  }\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-20"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a164ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a54.7MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u67e5\u627e\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minimumSize(vector<int>& nums, int maxOperations) {\n        int nmin = 1, nmax = 1000000000, nmid;\n        while (nmin < nmax) {\n            nmid = (nmin + nmax) / 2;\n            if (comp(nums, nmid) <= maxOperations) nmax = nmid;\n            else nmin = nmid + 1;\n        }\n        return nmin;\n    }\n    int comp(vector<int> &nums, int val) {\n        int ans = 0;\n        for (auto &num : nums) {\n            if (num <= val) continue;\n            ans += ceil(1.0 * num / val) - 1;\n        }\n        return ans;\n    }\n};\n"})})]})}function m(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>l});var t=i(30758);const s={},r=t.createContext(s);function c(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);