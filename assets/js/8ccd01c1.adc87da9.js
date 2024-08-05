"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[12440],{48670:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var i=r(86070),t=r(25710);const s={},o="2132.\u7528\u90ae\u7968\u8d34\u6ee1\u7f51\u683c\u56fe",d={id:"leetcode/2101-2200/\u7528\u90ae\u7968\u8d34\u6ee1\u7f51\u683c\u56fe",title:"2132.\u7528\u90ae\u7968\u8d34\u6ee1\u7f51\u683c\u56fe",description:"\u94fe\u63a5\uff1a2132.\u7528\u90ae\u7968\u8d34\u6ee1\u7f51\u683c\u56fe",source:"@site/docs/leetcode/2101-2200/2132.\u7528\u90ae\u7968\u8d34\u6ee1\u7f51\u683c\u56fe.md",sourceDirName:"leetcode/2101-2200",slug:"/leetcode/2101-2200/\u7528\u90ae\u7968\u8d34\u6ee1\u7f51\u683c\u56fe",permalink:"/docs/leetcode/2101-2200/\u7528\u90ae\u7968\u8d34\u6ee1\u7f51\u683c\u56fe",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2132,frontMatter:{},sidebar:"journal",previous:{title:"2129.\u5c06\u6807\u9898\u9996\u5b57\u6bcd\u5927\u5199",permalink:"/docs/leetcode/2101-2200/\u5c06\u6807\u9898\u9996\u5b57\u6bcd\u5927\u5199"},next:{title:"2136.\u5168\u90e8\u5f00\u82b1\u7684\u6700\u65e9\u4e00\u5929",permalink:"/docs/leetcode/2101-2200/\u5168\u90e8\u5f00\u82b1\u7684\u6700\u65e9\u4e00\u5929"}},l={},a=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function c(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"2132\u7528\u90ae\u7968\u8d34\u6ee1\u7f51\u683c\u56fe",children:"2132.\u7528\u90ae\u7968\u8d34\u6ee1\u7f51\u683c\u56fe"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/stamping-the-grid",children:"2132.\u7528\u90ae\u7968\u8d34\u6ee1\u7f51\u683c\u56fe"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u77e9\u9635\u3001\u524d\u7f00\u548c",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5982\u679c\u5728\u6ee1\u8db3\u4e0a\u8ff0\u8981\u6c42\u7684\u524d\u63d0\u4e0b\uff0c\u53ef\u4ee5\u653e\u5165\u90ae\u7968\uff0c\u8bf7\u8fd4\u56de true \uff0c\u5426\u5219\u8fd4\u56de false \u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-14"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1440ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a57.3MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u7f00\u548c\u7edf\u8ba1\u533a\u95f4\u5185\u6709\u65e0\u7981\u533a\uff0c\u5dee\u5206\u7edf\u8ba1\u7a7a\u767d\u533a\u662f\u5426\u90fd\u5b58\u5728\u90ae\u7968\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def possibleToStamp(self, grid: List[List[int]], stampHeight: int, stampWidth: int) -> bool:\n        n, m = len(grid), len(grid[0])\n        sums = [[0] * (m + 2) for _ in range(n + 2)]\n        arr  = [[0] * (m + 2) for _ in range(n + 2)]\n        for i in range(n):\n            for j in range(m):\n                sums[i + 1][j + 1] = sums[i][j + 1] + sums[i + 1][j] - sums[i][j] + grid[i][j]\n\n        for i in range(n):\n            for j in range(m):\n                endi = i + stampHeight - 1\n                endj = j + stampWidth  - 1\n                if grid[i][j] == 0 and endi < n and endj < m and sums[endi + 1][endj + 1] - sums[endi + 1][j] - sums[i][endj + 1] + sums[i][j] == 0:\n                    arr[i + 1][j + 1]        += 1\n                    arr[i + 1][endj + 2]     -= 1\n                    arr[endi + 2][j + 1]     -= 1\n                    arr[endi + 2][endj + 2]  += 1\n        \n        for i in range(1, n + 1):\n            for j in range(1, m + 1):\n                arr[i][j] += arr[i][j - 1] + arr[i - 1][j] - arr[i - 1][j - 1]\n                if grid[i - 1][j - 1] == 0 and arr[i][j] == 0:\n                    return False\n\n        return True\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>d});var i=r(30758);const t={},s=i.createContext(t);function o(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);