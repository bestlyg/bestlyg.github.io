"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[15049],{24381:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(86070),o=t(31503);const s={},i="2684.\u77e9\u9635\u4e2d\u79fb\u52a8\u7684\u6700\u5927\u6b21\u6570",c={id:"leetcode/2601-2700/\u77e9\u9635\u4e2d\u79fb\u52a8\u7684\u6700\u5927\u6b21\u6570",title:"2684.\u77e9\u9635\u4e2d\u79fb\u52a8\u7684\u6700\u5927\u6b21\u6570",description:"\u94fe\u63a5\uff1a2684.\u77e9\u9635\u4e2d\u79fb\u52a8\u7684\u6700\u5927\u6b21\u6570",source:"@site/docs/leetcode/2601-2700/2684.\u77e9\u9635\u4e2d\u79fb\u52a8\u7684\u6700\u5927\u6b21\u6570.md",sourceDirName:"leetcode/2601-2700",slug:"/leetcode/2601-2700/\u77e9\u9635\u4e2d\u79fb\u52a8\u7684\u6700\u5927\u6b21\u6570",permalink:"/docs/leetcode/2601-2700/\u77e9\u9635\u4e2d\u79fb\u52a8\u7684\u6700\u5927\u6b21\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2684,frontMatter:{},sidebar:"journal",previous:{title:"2682.\u627e\u51fa\u8f6c\u5708\u6e38\u620f\u8f93\u5bb6",permalink:"/docs/leetcode/2601-2700/\u627e\u51fa\u8f6c\u5708\u6e38\u620f\u8f93\u5bb6"},next:{title:"2693.\u4f7f\u7528\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\u8c03\u7528\u51fd\u6570",permalink:"/docs/leetcode/2601-2700/\u4f7f\u7528\u81ea\u5b9a\u4e49\u4e0a\u4e0b\u6587\u8c03\u7528\u51fd\u6570"}},l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"2684\u77e9\u9635\u4e2d\u79fb\u52a8\u7684\u6700\u5927\u6b21\u6570",children:"2684.\u77e9\u9635\u4e2d\u79fb\u52a8\u7684\u6700\u5927\u6b21\u6570"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/maximum-number-of-moves-in-a-grid",children:"2684.\u77e9\u9635\u4e2d\u79fb\u52a8\u7684\u6700\u5927\u6b21\u6570"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u77e9\u9635",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4f60\u5728\u77e9\u9635\u4e2d\u80fd\u591f \u79fb\u52a8 \u7684 \u6700\u5927 \u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-03-16"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a226ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.75MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"dirs = [(1, 1), (0, 1), (-1, 1)]\n    class Solution:\n        def maxMoves(self, grid: List[List[int]]) -> int:\n            n, m = len(grid), len(grid[0])\n            @cache\n            def dfs(row: int, col: int) -> int:\n                ans = 0\n                for x, y in dirs:\n                    nrow, ncol = row + x, col + y\n                    if 0 <= nrow < n and 0 <= ncol < m and grid[row][col] < grid[nrow][ncol]:\n                        ans = max(ans, 1 + dfs(nrow, ncol))\n                return ans\n            return max(dfs(row, 0) for row in range(n))\n"})})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>c});var r=t(30758);const o={},s=r.createContext(o);function i(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);