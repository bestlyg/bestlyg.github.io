"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[45018],{19766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(86070),s=t(25710);const r={},c="2085.\u7edf\u8ba1\u51fa\u73b0\u8fc7\u4e00\u6b21\u7684\u516c\u5171\u5b57\u7b26\u4e32",l={id:"leetcode/2001-2100/\u7edf\u8ba1\u51fa\u73b0\u8fc7\u4e00\u6b21\u7684\u516c\u5171\u5b57\u7b26\u4e32",title:"2085.\u7edf\u8ba1\u51fa\u73b0\u8fc7\u4e00\u6b21\u7684\u516c\u5171\u5b57\u7b26\u4e32",description:"\u94fe\u63a5\uff1a2085.\u7edf\u8ba1\u51fa\u73b0\u8fc7\u4e00\u6b21\u7684\u516c\u5171\u5b57\u7b26\u4e32",source:"@site/docs/leetcode/2001-2100/2085.\u7edf\u8ba1\u51fa\u73b0\u8fc7\u4e00\u6b21\u7684\u516c\u5171\u5b57\u7b26\u4e32.md",sourceDirName:"leetcode/2001-2100",slug:"/leetcode/2001-2100/\u7edf\u8ba1\u51fa\u73b0\u8fc7\u4e00\u6b21\u7684\u516c\u5171\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/2001-2100/\u7edf\u8ba1\u51fa\u73b0\u8fc7\u4e00\u6b21\u7684\u516c\u5171\u5b57\u7b26\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2085,frontMatter:{},sidebar:"journal",previous:{title:"2079.\u7ed9\u690d\u7269\u6d47\u6c34",permalink:"/docs/leetcode/2001-2100/\u7ed9\u690d\u7269\u6d47\u6c34"},next:{title:"2100.\u9002\u5408\u91ce\u708a\u7684\u65e5\u5b50",permalink:"/docs/leetcode/2001-2100/\u9002\u5408\u91ce\u708a\u7684\u65e5\u5b50"}},i={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"2085\u7edf\u8ba1\u51fa\u73b0\u8fc7\u4e00\u6b21\u7684\u516c\u5171\u5b57\u7b26\u4e32",children:"2085.\u7edf\u8ba1\u51fa\u73b0\u8fc7\u4e00\u6b21\u7684\u516c\u5171\u5b57\u7b26\u4e32"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(n.a,{href:"https://leetcode.cn/problems/count-common-words-with-one-occurrence",children:"2085.\u7edf\u8ba1\u51fa\u73b0\u8fc7\u4e00\u6b21\u7684\u516c\u5171\u5b57\u7b26\u4e32"}),(0,o.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,o.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u8ba1\u6570",(0,o.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e24\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4 words1 \u548c words2 \uff0c\u8bf7\u4f60\u8fd4\u56de\u5728\u4e24\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4\u4e2d \u90fd\u6070\u597d\u51fa\u73b0\u4e00\u6b21 \u7684\u5b57\u7b26\u4e32\u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-01-12"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a52ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.23MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8ba1\u6570\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def countWords(self, words1: List[str], words2: List[str]) -> int:\n        c1 = Counter(words1)\n        c2 = Counter(words2)\n        return sum(v == 1 and c2[k] == 1 for k, v in c1.items())\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var o=t(30758);const s={},r=o.createContext(s);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);