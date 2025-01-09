"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[55075],{54573:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"leetcode/2701-2800/\u6700\u5927\u548c\u67e5\u8be2","title":"2736.\u6700\u5927\u548c\u67e5\u8be2","description":"\u94fe\u63a5\uff1a2736.\u6700\u5927\u548c\u67e5\u8be2","source":"@site/docs/leetcode/2701-2800/2736.\u6700\u5927\u548c\u67e5\u8be2.md","sourceDirName":"leetcode/2701-2800","slug":"/leetcode/2701-2800/\u6700\u5927\u548c\u67e5\u8be2","permalink":"/docs/leetcode/2701-2800/\u6700\u5927\u548c\u67e5\u8be2","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2736,"frontMatter":{},"sidebar":"journal","previous":{"title":"2735.\u6536\u96c6\u5de7\u514b\u529b","permalink":"/docs/leetcode/2701-2800/\u6536\u96c6\u5de7\u514b\u529b"},"next":{"title":"2739.\u603b\u884c\u9a76\u8ddd\u79bb","permalink":"/docs/leetcode/2701-2800/\u603b\u884c\u9a76\u8ddd\u79bb"}}');var i=s(25105),r=s(8556);const o={},l="2736.\u6700\u5927\u548c\u67e5\u8be2",c={},u=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"2736\u6700\u5927\u548c\u67e5\u8be2",children:"2736.\u6700\u5927\u548c\u67e5\u8be2"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/maximum-sum-queries",children:"2736.\u6700\u5927\u548c\u67e5\u8be2"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6811\u72b6\u6570\u7ec4\u3001\u7ebf\u6bb5\u6811\u3001\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u6392\u5e8f\u3001\u5355\u8c03\u6808",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e24\u4e2a\u957f\u5ea6\u4e3a n \u3001\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u7684\u6574\u6570\u6570\u7ec4 nums1 \u548c nums2 \uff0c\u53e6\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 1 \u5f00\u59cb\u7684\u4e8c\u7ef4\u6570\u7ec4 queries \uff0c\u5176\u4e2d queries[i] = [xi, yi] \u3002\u5bf9\u4e8e\u7b2c i \u4e2a\u67e5\u8be2\uff0c\u5728\u6240\u6709\u6ee1\u8db3 nums1[j] >= xi \u4e14 nums2[j] >= yi \u7684\u4e0b\u6807 j (0 <= j < n) \u4e2d\uff0c\u627e\u51fa nums1[j] + nums2[j] \u7684 \u6700\u5927\u503c \uff0c\u5982\u679c\u4e0d\u5b58\u5728\u6ee1\u8db3\u6761\u4ef6\u7684 j \u5219\u8fd4\u56de -1 \u3002\u8fd4\u56de\u6570\u7ec4 answer \uff0c\u5176\u4e2d answer[i] \u662f\u7b2c i \u4e2a\u67e5\u8be2\u7684\u7b54\u6848\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-11-17"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a340ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a56.66MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5355\u8c03\u6808\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def maximumSumQueries(self, nums1: List[int], nums2: List[int], queries: List[List[int]]) -> List[int]:\n        n = len(nums1)\n        nums = [(nums1[i], nums2[i]) for i in range(n)]\n        nums.sort()\n        qn = len(queries)\n        qlist = [i for i in range(qn)]\n        qlist.sort(key = lambda i: queries[i])\n        \n        stack = []\n        ans = [0] * qn\n        while qlist:\n            qidx = qlist.pop()\n            x, y = queries[qidx]\n            while nums and x <= nums[-1][0]:\n                xnum, ynum = nums.pop()\n                while stack and stack[-1][1] <= xnum + ynum:\n                    stack.pop()\n                if not stack or stack[-1][0] < ynum:\n                    stack.append((ynum, xnum + ynum))\n            idx = bisect_left(stack, (y, 0))\n            ans[qidx] = stack[idx][1] if idx < len(stack) else -1\n        return ans\n"})})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},8556:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>l});var t=s(58101);const i={},r=t.createContext(i);function o(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);