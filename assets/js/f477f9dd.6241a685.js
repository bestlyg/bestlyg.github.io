"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[48520],{4760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(86070),s=t(31503);const o={},i="2103.\u73af\u548c\u6746",c={id:"leetcode/2101-2200/\u73af\u548c\u6746",title:"2103.\u73af\u548c\u6746",description:"\u94fe\u63a5\uff1a2103.\u73af\u548c\u6746",source:"@site/docs/leetcode/2101-2200/2103.\u73af\u548c\u6746.md",sourceDirName:"leetcode/2101-2200",slug:"/leetcode/2101-2200/\u73af\u548c\u6746",permalink:"/docs/leetcode/2101-2200/\u73af\u548c\u6746",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2103,frontMatter:{},sidebar:"journal",previous:{title:"2101.\u5f15\u7206\u6700\u591a\u7684\u70b8\u5f39",permalink:"/docs/leetcode/2101-2200/\u5f15\u7206\u6700\u591a\u7684\u70b8\u5f39"},next:{title:"2104.\u5b50\u6570\u7ec4\u8303\u56f4\u548c",permalink:"/docs/leetcode/2101-2200/\u5b50\u6570\u7ec4\u8303\u56f4\u548c"}},l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"2103\u73af\u548c\u6746",children:"2103.\u73af\u548c\u6746"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/rings-and-rods",children:"2103.\u73af\u548c\u6746"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u627e\u51fa\u6240\u6709\u96c6\u9f50 \u5168\u90e8\u4e09\u79cd\u989c\u8272 \u73af\u7684\u6746\uff0c\u5e76\u8fd4\u56de\u8fd9\u79cd\u6746\u7684\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-11-02"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.66MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def countPoints(self, rings: str) -> int:\n        map = { 'R': 0, 'G': 1, 'B': 2}\n        arr = [0] * 10\n        for i in range(0, len(rings), 2):\n            arr[int(rings[i + 1])] |= 1 << map[rings[i]]\n        return sum(v == 0b111 for v in arr)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(30758);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);