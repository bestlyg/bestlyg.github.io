"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[27909],{49492:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=t(86070),r=t(25710);const s={},o="2959.\u5173\u95ed\u5206\u90e8\u7684\u53ef\u884c\u96c6\u5408\u6570\u76ee",c={id:"leetcode/2901-3000/\u5173\u95ed\u5206\u90e8\u7684\u53ef\u884c\u96c6\u5408\u6570\u76ee",title:"2959.\u5173\u95ed\u5206\u90e8\u7684\u53ef\u884c\u96c6\u5408\u6570\u76ee",description:"\u94fe\u63a5\uff1a2959.\u5173\u95ed\u5206\u90e8\u7684\u53ef\u884c\u96c6\u5408\u6570\u76ee",source:"@site/docs/leetcode/2901-3000/2959.\u5173\u95ed\u5206\u90e8\u7684\u53ef\u884c\u96c6\u5408\u6570\u76ee.md",sourceDirName:"leetcode/2901-3000",slug:"/leetcode/2901-3000/\u5173\u95ed\u5206\u90e8\u7684\u53ef\u884c\u96c6\u5408\u6570\u76ee",permalink:"/docs/leetcode/2901-3000/\u5173\u95ed\u5206\u90e8\u7684\u53ef\u884c\u96c6\u5408\u6570\u76ee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2959,frontMatter:{},sidebar:"journal",previous:{title:"2956.\u627e\u5230\u4e24\u4e2a\u6570\u7ec4\u4e2d\u7684\u516c\u5171\u5143\u7d20",permalink:"/docs/leetcode/2901-3000/\u627e\u5230\u4e24\u4e2a\u6570\u7ec4\u4e2d\u7684\u516c\u5171\u5143\u7d20"},next:{title:"2960.\u7edf\u8ba1\u5df2\u6d4b\u8bd5\u8bbe\u5907",permalink:"/docs/leetcode/2901-3000/\u7edf\u8ba1\u5df2\u6d4b\u8bd5\u8bbe\u5907"}},l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"2959\u5173\u95ed\u5206\u90e8\u7684\u53ef\u884c\u96c6\u5408\u6570\u76ee",children:"2959.\u5173\u95ed\u5206\u90e8\u7684\u53ef\u884c\u96c6\u5408\u6570\u76ee"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/number-of-possible-sets-of-closing-branches",children:"2959.\u5173\u95ed\u5206\u90e8\u7684\u53ef\u884c\u96c6\u5408\u6570\u76ee"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u56fe\u3001\u679a\u4e3e\u3001\u6700\u77ed\u8def\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u5173\u95ed\u5206\u90e8\u7684\u53ef\u884c\u65b9\u6848\u6570\u76ee\uff0c\u6ee1\u8db3\u6bcf\u4e2a\u65b9\u6848\u91cc\u5269\u4f59\u5206\u90e8\u4e4b\u95f4\u7684\u6700\u8fdc\u8ddd\u79bb\u4e0d\u8d85\u8fc7 maxDistance\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-07-17"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1863ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.52MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u679a\u4e3e\u6240\u6709\u53ef\u80fd\uff0c\u7528\u77ed\u8def\u7b97\u6cd5\u6c42\u51fa\u4e24\u5730\u4e4b\u95f4\u7684\u6700\u77ed\u8def\u5f84\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def numberOfSets(self, n: int, maxDistance: int, roads: List[List[int]]) -> int:\n        def check(mask: int) -> int:\n            d = [[inf for _ in range(n)] for _ in range(n)]\n            for n1, n2, w in roads: d[n1][n2] = d[n2][n1] = min(d[n1][n2], d[n2][n1], w)\n            for k in range(n):\n                if mask & (1 << k):\n                    for i in range(n):\n                        if mask & (1 << k):\n                            for j in range(n):\n                                if mask & (1 << j):\n                                    d[i][j] = d[j][i] = min(d[i][j], d[i][k] + d[k][j])\n            for i in range(n):\n                if mask & (1 << i):\n                    for j in range(i):\n                        if mask & (1 << j):\n                            if d[i][j] > maxDistance:\n                                return False\n            return True\n        return sum(check(i) for i in range(2 ** n))\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var i=t(30758);const r={},s=i.createContext(r);function o(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);