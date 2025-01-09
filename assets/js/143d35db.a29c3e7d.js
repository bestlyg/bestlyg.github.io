"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[35519],{33841:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/3101-3200/\u5224\u65ad\u77e9\u9635\u662f\u5426\u6ee1\u8db3\u6761\u4ef6","title":"3142.\u5224\u65ad\u77e9\u9635\u662f\u5426\u6ee1\u8db3\u6761\u4ef6","description":"\u94fe\u63a5\uff1a3142.\u5224\u65ad\u77e9\u9635\u662f\u5426\u6ee1\u8db3\u6761\u4ef6","source":"@site/docs/leetcode/3101-3200/3142.\u5224\u65ad\u77e9\u9635\u662f\u5426\u6ee1\u8db3\u6761\u4ef6.md","sourceDirName":"leetcode/3101-3200","slug":"/leetcode/3101-3200/\u5224\u65ad\u77e9\u9635\u662f\u5426\u6ee1\u8db3\u6761\u4ef6","permalink":"/docs/leetcode/3101-3200/\u5224\u65ad\u77e9\u9635\u662f\u5426\u6ee1\u8db3\u6761\u4ef6","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3142,"frontMatter":{},"sidebar":"journal","previous":{"title":"3138.\u540c\u4f4d\u5b57\u7b26\u4e32\u8fde\u63a5\u7684\u6700\u5c0f\u957f\u5ea6","permalink":"/docs/leetcode/3101-3200/\u540c\u4f4d\u5b57\u7b26\u4e32\u8fde\u63a5\u7684\u6700\u5c0f\u957f\u5ea6"},"next":{"title":"3143.\u6b63\u65b9\u5f62\u4e2d\u7684\u6700\u591a\u70b9\u6570","permalink":"/docs/leetcode/3101-3200/\u6b63\u65b9\u5f62\u4e2d\u7684\u6700\u591a\u70b9\u6570"}}');var s=t(25105),i=t(8556);const o={},l="3142.\u5224\u65ad\u77e9\u9635\u662f\u5426\u6ee1\u8db3\u6761\u4ef6",c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"3142\u5224\u65ad\u77e9\u9635\u662f\u5426\u6ee1\u8db3\u6761\u4ef6",children:"3142.\u5224\u65ad\u77e9\u9635\u662f\u5426\u6ee1\u8db3\u6761\u4ef6"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/check-if-grid-satisfies-conditions",children:"3142.\u5224\u65ad\u77e9\u9635\u662f\u5426\u6ee1\u8db3\u6761\u4ef6"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u77e9\u9635",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5982\u679c \u6240\u6709 \u683c\u5b50\u90fd\u6ee1\u8db3\u4ee5\u4e0a\u6761\u4ef6\uff0c\u90a3\u4e48\u8fd4\u56de true \uff0c\u5426\u5219\u8fd4\u56de false \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-08-29"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a38ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.24MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def satisfiesConditions(self, grid: List[List[int]]) -> bool:\n        n = len(grid)\n        m = len(grid[0])\n        for i in range(n - 1):\n            for j in range(m):\n                if grid[i][j] != grid[i + 1][j]:\n                    return False\n        for i in range(n):\n            for j in range(m - 1):\n                if grid[i][j] == grid[i][j + 1]:\n                    return False\n        return True\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(58101);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);