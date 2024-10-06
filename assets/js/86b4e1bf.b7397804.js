"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[5005],{37342:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(86070),r=t(25710);const i={},o="2306.\u516c\u53f8\u547d\u540d",l={id:"leetcode/2301-2400/\u516c\u53f8\u547d\u540d",title:"2306.\u516c\u53f8\u547d\u540d",description:"\u94fe\u63a5\uff1a2306.\u516c\u53f8\u547d\u540d",source:"@site/docs/leetcode/2301-2400/2306.\u516c\u53f8\u547d\u540d.md",sourceDirName:"leetcode/2301-2400",slug:"/leetcode/2301-2400/\u516c\u53f8\u547d\u540d",permalink:"/docs/leetcode/2301-2400/\u516c\u53f8\u547d\u540d",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2306,frontMatter:{},sidebar:"journal",previous:{title:"2304.\u7f51\u683c\u4e2d\u7684\u6700\u5c0f\u8def\u5f84\u4ee3\u4ef7",permalink:"/docs/leetcode/2301-2400/\u7f51\u683c\u4e2d\u7684\u6700\u5c0f\u8def\u5f84\u4ee3\u4ef7"},next:{title:"2312.\u5356\u6728\u5934\u5757",permalink:"/docs/leetcode/2301-2400/\u5356\u6728\u5934\u5757"}},c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2306\u516c\u53f8\u547d\u540d",children:"2306.\u516c\u53f8\u547d\u540d"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/naming-a-company",children:"2306.\u516c\u53f8\u547d\u540d"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u679a\u4e3e",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de \u4e0d\u540c \u4e14\u6709\u6548\u7684\u516c\u53f8\u540d\u5b57\u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-09-25"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a409ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a28.9MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u628a\u9996\u5b57\u7b26\u505akey\u5b58\u50a8\u6570\u636e\uff0c\u904d\u5386\u65f6\u53d6\u5dee\u96c6"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def distinctNames(self, ideas: List[str]) -> int:\n        map = defaultdict(set)\n        for idea in ideas: map[idea[0]].add(idea[1:])\n        data = list(map.values())\n        res = 0\n        for i1 in range(len(data)):\n            v1 = data[i1]\n            for i2 in range(i1):\n                v2 = data[i2]\n                res += len(v1 - v2) * len(v2 - v1) * 2\n        return res\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(30758);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);