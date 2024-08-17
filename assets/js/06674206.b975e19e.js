"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[38248],{30880:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=s(86070),t=s(25710);const r={},o="2866.\u7f8e\u4e3d\u5854II",l={id:"leetcode/2801-2900/\u7f8e\u4e3d\u5854II",title:"2866.\u7f8e\u4e3d\u5854II",description:"\u94fe\u63a5\uff1a2866.\u7f8e\u4e3d\u5854II",source:"@site/docs/leetcode/2801-2900/2866.\u7f8e\u4e3d\u5854II.md",sourceDirName:"leetcode/2801-2900",slug:"/leetcode/2801-2900/\u7f8e\u4e3d\u5854II",permalink:"/docs/leetcode/2801-2900/\u7f8e\u4e3d\u5854II",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2866,frontMatter:{},sidebar:"journal",previous:{title:"2865.\u7f8e\u4e3d\u5854I",permalink:"/docs/leetcode/2801-2900/\u7f8e\u4e3d\u5854I"},next:{title:"2867.\u7edf\u8ba1\u6811\u4e2d\u7684\u5408\u6cd5\u8def\u5f84\u6570\u76ee",permalink:"/docs/leetcode/2801-2900/\u7edf\u8ba1\u6811\u4e2d\u7684\u5408\u6cd5\u8def\u5f84\u6570\u76ee"}},c={},a=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"2866\u7f8e\u4e3d\u5854ii",children:"2866.\u7f8e\u4e3d\u5854II"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/beautiful-towers-ii",children:"2866.\u7f8e\u4e3d\u5854II"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6570\u7ec4\u3001\u5355\u8c03\u6808",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u6ee1\u8db3 \u7f8e\u4e3d\u5854 \u8981\u6c42\u7684\u65b9\u6848\u4e2d\uff0c\u9ad8\u5ea6\u548c\u7684\u6700\u5927\u503c \u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-21"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a316ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.55MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5b57\u7b26\u4e32\u62fc\u63a5\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def maximumSumOfHeights(self, maxHeights: List[int]) -> int:\n        n = len(maxHeights)\n        prev = [-1] * n\n        next = [n] * n\n        s = []\n        for i in range(n):\n            while s and maxHeights[s[-1]] >= maxHeights[i]: s.pop()\n            if s: prev[i] = s[-1]\n            s.append(i)\n        s.clear()\n        for i in range(n):\n            while s and maxHeights[s[-1]] > maxHeights[i]: next[s.pop()] = i\n            s.append(i)\n        lsums = [0] * n\n        rsums = [0] * n\n        for i in range(n):\n            lsums[i] += (i - prev[i]) * maxHeights[i]\n            if prev[i] != -1: lsums[i] += lsums[prev[i]]\n        for i in range(n - 1, -1, -1):\n            rsums[i] += (next[i] - i) * maxHeights[i]\n            if next[i] != n: rsums[i] += rsums[next[i]]\n        return max(lsums[i] + rsums[i] - maxHeights[i] for i in range(n))\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},25710:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(30758);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);