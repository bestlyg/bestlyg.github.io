"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[54042],{97575:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=t(86070),r=t(25710);const s={},i="2917.\u627e\u51fa\u6570\u7ec4\u4e2d\u7684K-or\u503c",l={id:"leetcode/2901-3000/\u627e\u51fa\u6570\u7ec4\u4e2d\u7684K-or\u503c",title:"2917.\u627e\u51fa\u6570\u7ec4\u4e2d\u7684K-or\u503c",description:"\u94fe\u63a5\uff1a2917.\u627e\u51fa\u6570\u7ec4\u4e2d\u7684K-or\u503c",source:"@site/docs/leetcode/2901-3000/2917.\u627e\u51fa\u6570\u7ec4\u4e2d\u7684K-or\u503c.md",sourceDirName:"leetcode/2901-3000",slug:"/leetcode/2901-3000/\u627e\u51fa\u6570\u7ec4\u4e2d\u7684K-or\u503c",permalink:"/docs/leetcode/2901-3000/\u627e\u51fa\u6570\u7ec4\u4e2d\u7684K-or\u503c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2917,frontMatter:{},sidebar:"journal",previous:{title:"2908.\u5143\u7d20\u548c\u6700\u5c0f\u7684\u5c71\u5f62\u4e09\u5143\u7ec4I",permalink:"/docs/leetcode/2901-3000/\u5143\u7d20\u548c\u6700\u5c0f\u7684\u5c71\u5f62\u4e09\u5143\u7ec4I"},next:{title:"2923.\u627e\u5230\u51a0\u519bI",permalink:"/docs/leetcode/2901-3000/\u627e\u5230\u51a0\u519bI"}},c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"2917\u627e\u51fa\u6570\u7ec4\u4e2d\u7684k-or\u503c",children:"2917.\u627e\u51fa\u6570\u7ec4\u4e2d\u7684K-or\u503c"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(n.a,{href:"https://leetcode.cn/problems/find-the-k-or-of-an-array",children:"2917.\u627e\u51fa\u6570\u7ec4\u4e2d\u7684K-or\u503c"}),(0,o.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,o.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4",(0,o.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de nums \u7684 K-or \u503c\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-03-06"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a89ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.48MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def findKOr(self, nums: List[int], k: int) -> int:\n        ans = 1-1\n        for i in range(32):\n            num = int(len(list(filter(lambda num: (num >> i) & 1, nums))) >= k)\n            ans |= num << i\n        return ans\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(30758);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);