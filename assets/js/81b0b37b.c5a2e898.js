"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[33818],{209:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var s=t(86070),r=t(31503);const c={},o="2696.\u5220\u9664\u5b50\u4e32\u540e\u7684\u5b57\u7b26\u4e32\u6700\u5c0f\u957f\u5ea6",l={id:"leetcode/2601-2700/\u5220\u9664\u5b50\u4e32\u540e\u7684\u5b57\u7b26\u4e32\u6700\u5c0f\u957f\u5ea6",title:"2696.\u5220\u9664\u5b50\u4e32\u540e\u7684\u5b57\u7b26\u4e32\u6700\u5c0f\u957f\u5ea6",description:"\u94fe\u63a5\uff1a2696.\u5220\u9664\u5b50\u4e32\u540e\u7684\u5b57\u7b26\u4e32\u6700\u5c0f\u957f\u5ea6",source:"@site/docs/leetcode/2601-2700/2696.\u5220\u9664\u5b50\u4e32\u540e\u7684\u5b57\u7b26\u4e32\u6700\u5c0f\u957f\u5ea6.md",sourceDirName:"leetcode/2601-2700",slug:"/leetcode/2601-2700/\u5220\u9664\u5b50\u4e32\u540e\u7684\u5b57\u7b26\u4e32\u6700\u5c0f\u957f\u5ea6",permalink:"/docs/leetcode/2601-2700/\u5220\u9664\u5b50\u4e32\u540e\u7684\u5b57\u7b26\u4e32\u6700\u5c0f\u957f\u5ea6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2696,frontMatter:{},sidebar:"journal",previous:{title:"2695.\u5305\u88c5\u6570\u7ec4",permalink:"/docs/leetcode/2601-2700/\u5305\u88c5\u6570\u7ec4"},next:{title:"2697.\u5b57\u5178\u5e8f\u6700\u5c0f\u56de\u6587\u4e32",permalink:"/docs/leetcode/2601-2700/\u5b57\u5178\u5e8f\u6700\u5c0f\u56de\u6587\u4e32"}},i={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2696\u5220\u9664\u5b50\u4e32\u540e\u7684\u5b57\u7b26\u4e32\u6700\u5c0f\u957f\u5ea6",children:"2696.\u5220\u9664\u5b50\u4e32\u540e\u7684\u5b57\u7b26\u4e32\u6700\u5c0f\u957f\u5ea6"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-string-length-after-removing-substrings",children:"2696.\u5220\u9664\u5b50\u4e32\u540e\u7684\u5b57\u7b26\u4e32\u6700\u5c0f\u957f\u5ea6"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u5b57\u7b26\u4e32\u3001\u6a21\u62df",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u53ef\u83b7\u5f97\u7684\u6700\u7ec8\u5b57\u7b26\u4e32\u7684 \u6700\u5c0f \u53ef\u80fd\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-01-10"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.09MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7528\u6808\u50a8\u5b58\u904d\u5386\u8fc7\u7684\u5143\u7d20\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def minLength(self, s: str) -> int:\n        stack = []\n        for c in s:\n            if stack and stack[-1] == 'A' and c == 'B' or stack and stack[-1] == 'C' and c == 'D': stack.pop()\n            else: stack.append(c)\n        return len(stack)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(30758);const r={},c=s.createContext(r);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);