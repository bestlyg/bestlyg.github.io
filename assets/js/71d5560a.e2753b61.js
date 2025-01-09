"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[44282],{95323:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/3101-3200/\u627e\u5230\u6309\u4f4d\u6216\u6700\u63a5\u8fd1K\u7684\u5b50\u6570\u7ec4","title":"3171.\u627e\u5230\u6309\u4f4d\u6216\u6700\u63a5\u8fd1K\u7684\u5b50\u6570\u7ec4","description":"\u94fe\u63a5\uff1a3171.\u627e\u5230\u6309\u4f4d\u6216\u6700\u63a5\u8fd1K\u7684\u5b50\u6570\u7ec4","source":"@site/docs/leetcode/3101-3200/3171.\u627e\u5230\u6309\u4f4d\u6216\u6700\u63a5\u8fd1K\u7684\u5b50\u6570\u7ec4.md","sourceDirName":"leetcode/3101-3200","slug":"/leetcode/3101-3200/\u627e\u5230\u6309\u4f4d\u6216\u6700\u63a5\u8fd1K\u7684\u5b50\u6570\u7ec4","permalink":"/docs/leetcode/3101-3200/\u627e\u5230\u6309\u4f4d\u6216\u6700\u63a5\u8fd1K\u7684\u5b50\u6570\u7ec4","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3171,"frontMatter":{},"sidebar":"journal","previous":{"title":"3164.\u4f18\u8d28\u6570\u5bf9\u7684\u603b\u6570II","permalink":"/docs/leetcode/3101-3200/\u4f18\u8d28\u6570\u5bf9\u7684\u603b\u6570II"},"next":{"title":"3174.\u6e05\u9664\u6570\u5b57","permalink":"/docs/leetcode/3101-3200/\u6e05\u9664\u6570\u5b57"}}');var r=t(25105),i=t(8556);const o={},c="3171.\u627e\u5230\u6309\u4f4d\u6216\u6700\u63a5\u8fd1K\u7684\u5b50\u6570\u7ec4",l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"3171\u627e\u5230\u6309\u4f4d\u6216\u6700\u63a5\u8fd1k\u7684\u5b50\u6570\u7ec4",children:"3171.\u627e\u5230\u6309\u4f4d\u6216\u6700\u63a5\u8fd1K\u7684\u5b50\u6570\u7ec4"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/find-subarray-with-bitwise-or-closest-to-k",children:"3171.\u627e\u5230\u6309\u4f4d\u6216\u6700\u63a5\u8fd1K\u7684\u5b50\u6570\u7ec4"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u7ebf\u6bb5\u6811\u3001\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de \u4f18\u8d28\u6570\u5bf9 \u7684\u603b\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-10-10"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a2499ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a30.93MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u8fdb\u5236\u5b58\u50a8\uff0c\u679a\u4e3e\u53f3\u4fa7"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def minimumDifference(self, nums: List[int], k: int) -> int:\n        bits = [0] * 32\n        cur = l = 0\n        n = len(nums)\n        res = inf\n        for r in range(n):\n            for b in range(32):\n                if nums[r] & (1 << b):\n                    bits[b] += 1\n                    if bits[b] == 1:\n                        cur |= 1 << b\n            res = min(res, abs(k - cur))\n            while l < r and cur > k:\n                for b in range(32):\n                    if nums[l] & (1 << b):\n                        bits[b] -= 1\n                        if bits[b] == 0:\n                            cur &= ~(1 << b)\n                res = min(res, abs(k - cur))\n                l += 1\n        return res\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(58101);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);