"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[5163],{93305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/3101-3200/\u5206\u5272\u5b57\u7b26\u9891\u7387\u76f8\u7b49\u7684\u6700\u5c11\u5b50\u5b57\u7b26\u4e32","title":"3144.\u5206\u5272\u5b57\u7b26\u9891\u7387\u76f8\u7b49\u7684\u6700\u5c11\u5b50\u5b57\u7b26\u4e32","description":"\u94fe\u63a5\uff1a3144.\u5206\u5272\u5b57\u7b26\u9891\u7387\u76f8\u7b49\u7684\u6700\u5c11\u5b50\u5b57\u7b26\u4e32","source":"@site/docs/leetcode/3101-3200/3144.\u5206\u5272\u5b57\u7b26\u9891\u7387\u76f8\u7b49\u7684\u6700\u5c11\u5b50\u5b57\u7b26\u4e32.md","sourceDirName":"leetcode/3101-3200","slug":"/leetcode/3101-3200/\u5206\u5272\u5b57\u7b26\u9891\u7387\u76f8\u7b49\u7684\u6700\u5c11\u5b50\u5b57\u7b26\u4e32","permalink":"/docs/leetcode/3101-3200/\u5206\u5272\u5b57\u7b26\u9891\u7387\u76f8\u7b49\u7684\u6700\u5c11\u5b50\u5b57\u7b26\u4e32","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3144,"frontMatter":{},"sidebar":"journal","previous":{"title":"3143.\u6b63\u65b9\u5f62\u4e2d\u7684\u6700\u591a\u70b9\u6570","permalink":"/docs/leetcode/3101-3200/\u6b63\u65b9\u5f62\u4e2d\u7684\u6700\u591a\u70b9\u6570"},"next":{"title":"3146.\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u6392\u5217\u5dee","permalink":"/docs/leetcode/3101-3200/\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684\u6392\u5217\u5dee"}}');var s=t(86070),i=t(31503);const o={},c="3144.\u5206\u5272\u5b57\u7b26\u9891\u7387\u76f8\u7b49\u7684\u6700\u5c11\u5b50\u5b57\u7b26\u4e32",l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"3144\u5206\u5272\u5b57\u7b26\u9891\u7387\u76f8\u7b49\u7684\u6700\u5c11\u5b50\u5b57\u7b26\u4e32",children:"3144.\u5206\u5272\u5b57\u7b26\u9891\u7387\u76f8\u7b49\u7684\u6700\u5c11\u5b50\u5b57\u7b26\u4e32"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-substring-partition-of-equal-character-frequency",children:"3144.\u5206\u5272\u5b57\u7b26\u9891\u7387\u76f8\u7b49\u7684\u6700\u5c11\u5b50\u5b57\u7b26\u4e32"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212\u3001\u8ba1\u6570",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de s \u6700\u5c11 \u80fd\u5206\u5272\u6210\u591a\u5c11\u4e2a\u5e73\u8861\u5b50\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-08-28"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a9615ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.46MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i]\u8868\u793a\u4ee5i\u5b57\u7b26\u7ed3\u5c3e\u65f6\u7684\u6700\u5c11\u5206\u5272\u6570"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def minimumSubstringsInPartition(self, s: str) -> int:\n        n = len(s)\n        dp = [inf] * (n + 1)\n        dp[0] = 0\n        for i in range(1, n + 1):\n            dp[i] = dp[i - 1] + 1\n            counter = Counter()\n            for j in range(i, 0, -1):\n                counter[s[j - 1]] += 1\n                if len(set(counter.values())) == 1:\n                    dp[i] = min(dp[i], dp[j - 1] + 1)\n        return dp[-1]\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(30758);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);