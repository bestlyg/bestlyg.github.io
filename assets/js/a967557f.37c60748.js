"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[73345],{76377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"leetcode/2801-2900/\u6700\u5927\u5408\u91d1\u6570","title":"2861.\u6700\u5927\u5408\u91d1\u6570","description":"\u94fe\u63a5\uff1a2861.\u6700\u5927\u5408\u91d1\u6570","source":"@site/docs/leetcode/2801-2900/2861.\u6700\u5927\u5408\u91d1\u6570.md","sourceDirName":"leetcode/2801-2900","slug":"/leetcode/2801-2900/\u6700\u5927\u5408\u91d1\u6570","permalink":"/docs/leetcode/2801-2900/\u6700\u5927\u5408\u91d1\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2861,"frontMatter":{},"sidebar":"journal","previous":{"title":"2860.\u8ba9\u6240\u6709\u5b66\u751f\u4fdd\u6301\u5f00\u5fc3\u7684\u5206\u7ec4\u65b9\u6cd5\u6570","permalink":"/docs/leetcode/2801-2900/\u8ba9\u6240\u6709\u5b66\u751f\u4fdd\u6301\u5f00\u5fc3\u7684\u5206\u7ec4\u65b9\u6cd5\u6570"},"next":{"title":"2864.\u6700\u5927\u4e8c\u8fdb\u5236\u5947\u6570","permalink":"/docs/leetcode/2801-2900/\u6700\u5927\u4e8c\u8fdb\u5236\u5947\u6570"}}');var s=t(25105),i=t(8556);const c={},r="2861.\u6700\u5927\u5408\u91d1\u6570",l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2861\u6700\u5927\u5408\u91d1\u6570",children:"2861.\u6700\u5927\u5408\u91d1\u6570"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-number-of-alloys",children:"2861.\u6700\u5927\u5408\u91d1\u6570"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u6574\u6570 n\u3001k\u3001budget\uff0c\u4e0b\u6807\u4ece 1 \u5f00\u59cb\u7684\u4e8c\u7ef4\u6570\u7ec4 composition\uff0c\u4e24\u4e2a\u4e0b\u6807\u4ece 1 \u5f00\u59cb\u7684\u6570\u7ec4 stock \u548c cost\uff0c\u8bf7\u4f60\u5728\u9884\u7b97\u4e0d\u8d85\u8fc7 budget \u91d1\u94b1\u7684\u524d\u63d0\u4e0b\uff0c\u6700\u5927\u5316 \u516c\u53f8\u5236\u9020\u5408\u91d1\u7684\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-01-27"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a695ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.87MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def maxNumberOfAlloys(self, n: int, k: int, budget: int, composition: List[List[int]], stock: List[int], cost: List[int]) -> int:\n        def check(count: int, comp: List[int]) -> bool:\n            return sum(cost[i] * max(count * comp[i] - stock[i], 0) for i in range(n)) <= budget\n        l, r = 0, 10 ** 10\n        while l < r:\n            m = (l + r + 1) // 2\n            if any(check(m, comp) for comp in composition):\n                l = m\n            else:\n                r = m - 1\n        return l\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(58101);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);