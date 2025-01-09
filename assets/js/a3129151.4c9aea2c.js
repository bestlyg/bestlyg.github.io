"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[47262],{45735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/2701-2800/\u6536\u96c6\u5de7\u514b\u529b","title":"2735.\u6536\u96c6\u5de7\u514b\u529b","description":"\u94fe\u63a5\uff1a2735.\u6536\u96c6\u5de7\u514b\u529b","source":"@site/docs/leetcode/2701-2800/2735.\u6536\u96c6\u5de7\u514b\u529b.md","sourceDirName":"leetcode/2701-2800","slug":"/leetcode/2701-2800/\u6536\u96c6\u5de7\u514b\u529b","permalink":"/docs/leetcode/2701-2800/\u6536\u96c6\u5de7\u514b\u529b","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2735,"frontMatter":{},"sidebar":"journal","previous":{"title":"2734.\u6267\u884c\u5b50\u4e32\u64cd\u4f5c\u540e\u7684\u5b57\u5178\u5e8f\u6700\u5c0f\u5b57\u7b26\u4e32","permalink":"/docs/leetcode/2701-2800/\u6267\u884c\u5b50\u4e32\u64cd\u4f5c\u540e\u7684\u5b57\u5178\u5e8f\u6700\u5c0f\u5b57\u7b26\u4e32"},"next":{"title":"2736.\u6700\u5927\u548c\u67e5\u8be2","permalink":"/docs/leetcode/2701-2800/\u6700\u5927\u548c\u67e5\u8be2"}}');var o=t(25105),r=t(8556);const i={},c="2735.\u6536\u96c6\u5de7\u514b\u529b",l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"2735\u6536\u96c6\u5de7\u514b\u529b",children:"2735.\u6536\u96c6\u5de7\u514b\u529b"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(n.a,{href:"https://leetcode.cn/problems/collecting-chocolates",children:"2735.\u6536\u96c6\u5de7\u514b\u529b"}),(0,o.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,o.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u679a\u4e3e",(0,o.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5047\u8bbe\u4f60\u53ef\u4ee5\u6267\u884c\u4efb\u610f\u6b21\u64cd\u4f5c\uff0c\u8bf7\u8fd4\u56de\u6536\u96c6\u6240\u6709\u7c7b\u578b\u5de7\u514b\u529b\u6240\u9700\u7684\u6700\u5c0f\u6210\u672c\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-28"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a2948ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a24.91MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5bf9\u6bcf\u4e00\u4e2a\u504f\u79fb\u6c42\u51fa\u6700\u5c0f\u503c\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def minCost(self, nums: List[int], x: int) -> int:\n        n = len(nums)\n        dp = [[inf] * n for _ in range(n + 1)]\n        for i in range(n): dp[0][i] = nums[i]\n        res = sum(nums)\n        for offset in range(1, n):\n            for i in range(n):\n                dp[offset][i] = min(dp[offset - 1][i], nums[(i + offset) % n])\n            res = min(res, sum(dp[offset]) + x * offset)\n        return res\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(58101);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);