"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[56569],{29980:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(86070),s=t(31503);const r={},o="2312.\u5356\u6728\u5934\u5757",c={id:"leetcode/2301-2400/\u5356\u6728\u5934\u5757",title:"2312.\u5356\u6728\u5934\u5757",description:"\u94fe\u63a5\uff1a2312.\u5356\u6728\u5934\u5757",source:"@site/docs/leetcode/2301-2400/2312.\u5356\u6728\u5934\u5757.md",sourceDirName:"leetcode/2301-2400",slug:"/leetcode/2301-2400/\u5356\u6728\u5934\u5757",permalink:"/docs/leetcode/2301-2400/\u5356\u6728\u5934\u5757",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2312,frontMatter:{},sidebar:"journal",previous:{title:"2306.\u516c\u53f8\u547d\u540d",permalink:"/docs/leetcode/2301-2400/\u516c\u53f8\u547d\u540d"},next:{title:"2315.\u7edf\u8ba1\u661f\u53f7",permalink:"/docs/leetcode/2301-2400/\u7edf\u8ba1\u661f\u53f7"}},l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"2312\u5356\u6728\u5934\u5757",children:"2312.\u5356\u6728\u5934\u5757"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/selling-pieces-of-wood",children:"2312.\u5356\u6728\u5934\u5757"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8bb0\u5fc6\u5316\u641c\u7d22\u3001\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u5207\u5272\u4e00\u5757\u5927\u5c0f\u4e3a m x n \u7684\u6728\u5757\u540e\uff0c\u80fd\u5f97\u5230\u7684 \u6700\u591a \u94b1\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-03-15"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a6046ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a38.27MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def sellingWood(self, m: int, n: int, prices: List[List[int]]) -> int:\n        price_map = {}\n        for k1, k2, price in prices:\n            if k1 not in price_map: price_map[k1] = {}\n            item_map = price_map[k1]\n            if k2 not in item_map: item_map[k2] = price\n        @cache\n        def dfs(m: int, n: int) -> int:\n            ans = 0\n            if m in price_map and n in price_map[m]:\n                ans += price_map[m][n]\n            for i in range(1, m):\n                ans = max(ans, dfs(i, n) + dfs(m - i, n))\n            for i in range(1, n):\n                ans = max(ans, dfs(m, i) + dfs(m, n - i))\n            return ans\n        return dfs(m, n)\n"})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var i=t(30758);const s={},r=i.createContext(s);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);