"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[49861],{47904:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"leetcode/2901-3000/\u9700\u8981\u6dfb\u52a0\u7684\u786c\u5e01\u7684\u6700\u5c0f\u6570\u91cf","title":"2952.\u9700\u8981\u6dfb\u52a0\u7684\u786c\u5e01\u7684\u6700\u5c0f\u6570\u91cf","description":"\u94fe\u63a5\uff1a2952.\u9700\u8981\u6dfb\u52a0\u7684\u786c\u5e01\u7684\u6700\u5c0f\u6570\u91cf","source":"@site/docs/leetcode/2901-3000/2952.\u9700\u8981\u6dfb\u52a0\u7684\u786c\u5e01\u7684\u6700\u5c0f\u6570\u91cf.md","sourceDirName":"leetcode/2901-3000","slug":"/leetcode/2901-3000/\u9700\u8981\u6dfb\u52a0\u7684\u786c\u5e01\u7684\u6700\u5c0f\u6570\u91cf","permalink":"/docs/leetcode/2901-3000/\u9700\u8981\u6dfb\u52a0\u7684\u786c\u5e01\u7684\u6700\u5c0f\u6570\u91cf","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2952,"frontMatter":{},"sidebar":"journal","previous":{"title":"2951.\u627e\u51fa\u5cf0\u503c","permalink":"/docs/leetcode/2901-3000/\u627e\u51fa\u5cf0\u503c"},"next":{"title":"2956.\u627e\u5230\u4e24\u4e2a\u6570\u7ec4\u4e2d\u7684\u516c\u5171\u5143\u7d20","permalink":"/docs/leetcode/2901-3000/\u627e\u5230\u4e24\u4e2a\u6570\u7ec4\u4e2d\u7684\u516c\u5171\u5143\u7d20"}}');var o=t(25105),i=t(8556);const r={},c="2952.\u9700\u8981\u6dfb\u52a0\u7684\u786c\u5e01\u7684\u6700\u5c0f\u6570\u91cf",d={},l=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"2952\u9700\u8981\u6dfb\u52a0\u7684\u786c\u5e01\u7684\u6700\u5c0f\u6570\u91cf",children:"2952.\u9700\u8981\u6dfb\u52a0\u7684\u786c\u5e01\u7684\u6700\u5c0f\u6570\u91cf"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-number-of-coins-to-be-added",children:"2952.\u9700\u8981\u6dfb\u52a0\u7684\u786c\u5e01\u7684\u6700\u5c0f\u6570\u91cf"}),(0,o.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,o.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u6392\u5e8f",(0,o.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u627e\u51fa nums \u4e2d \u5143\u7d20\u548c\u6700\u5c0f \u7684\u5c71\u5f62\u4e09\u5143\u7ec4\uff0c\u5e76\u8fd4\u56de\u5176 \u5143\u7d20\u548c \u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-03-31"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a109ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a27.09MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8bb0\u5f55\u5f53\u524d\u6240\u80fd\u8868\u793a\u7684\u533a\u95f4\u5185\uff0c\u518d\u4f9d\u6b21\u589e\u52a0\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def minimumAddedCoins(self, coins: List[int], target: int) -> int:\n        coins.sort()\n        ans = 0\n        idx = 0\n        end = 1 # [0, end - 1]\n        while end - 1 < target:\n            if idx < len(coins) and coins[idx] <= end:\n                end += coins[idx]\n                idx += 1\n            else:\n                end += end\n                ans += 1\n        return ans\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(58101);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);