"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[66107],{18283:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/1601-1700/\u5f97\u5230\u5c71\u5f62\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6b21\u6570","title":"1671.\u5f97\u5230\u5c71\u5f62\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6b21\u6570","description":"\u94fe\u63a5\uff1a1671.\u5f97\u5230\u5c71\u5f62\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6b21\u6570","source":"@site/docs/leetcode/1601-1700/1671.\u5f97\u5230\u5c71\u5f62\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6b21\u6570.md","sourceDirName":"leetcode/1601-1700","slug":"/leetcode/1601-1700/\u5f97\u5230\u5c71\u5f62\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6b21\u6570","permalink":"/docs/leetcode/1601-1700/\u5f97\u5230\u5c71\u5f62\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6b21\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1671,"frontMatter":{},"sidebar":"journal","previous":{"title":"1670.\u8bbe\u8ba1\u524d\u4e2d\u540e\u961f\u5217","permalink":"/docs/leetcode/1601-1700/\u8bbe\u8ba1\u524d\u4e2d\u540e\u961f\u5217"},"next":{"title":"1672.\u6700\u5bcc\u6709\u5ba2\u6237\u7684\u8d44\u4ea7\u603b\u91cf","permalink":"/docs/leetcode/1601-1700/\u6700\u5bcc\u6709\u5ba2\u6237\u7684\u8d44\u4ea7\u603b\u91cf"}}');var i=t(86070),r=t(31503);const o={},l="1671.\u5f97\u5230\u5c71\u5f62\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6b21\u6570",c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"1671\u5f97\u5230\u5c71\u5f62\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6b21\u6570",children:"1671.\u5f97\u5230\u5c71\u5f62\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6b21\u6570"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-number-of-removals-to-make-mountain-array",children:"1671.\u5f97\u5230\u5c71\u5f62\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6b21\u6570"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u52a8\u6001\u89c4\u5212",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u6574\u6570\u6570\u7ec4 nums\u200b \uff0c\u8bf7\u4f60\u8fd4\u56de\u5c06 nums \u53d8\u6210 \u5c71\u5f62\u72b6\u6570\u7ec4 \u7684\u200b \u6700\u5c11 \u5220\u9664\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-22"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a2260ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.11MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5bf9\u4e24\u8fb9\u6c42\u6700\u957f\u5b50\u5e8f\u5217\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def getList(nums: List[int]) -> List[int]:\n        n = len(nums)\n        dp = [1] * n\n        for i in range(n):\n            for j in range(i):\n                if nums[i] > nums[j]:\n                    dp[i] = max(dp[i], dp[j] + 1)\n        return dp\n    \n    class Solution:\n        def minimumMountainRemovals(self, nums: List[int]) -> int:\n            n = len(nums)\n            prev = getList(nums)\n            next = getList(nums[::-1])[::-1]\n            return n - max(prev[i] + next[i] - 1 if prev[i] > 1 and next[i] > 1 else 0 for i in range(n))\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(30758);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);