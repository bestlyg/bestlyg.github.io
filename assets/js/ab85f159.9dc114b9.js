"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[53994],{92372:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=s(86070),r=s(25710);const l={},c="917.\u4ec5\u4ec5\u53cd\u8f6c\u5b57\u6bcd",i={id:"leetcode/901-1000/\u4ec5\u4ec5\u53cd\u8f6c\u5b57\u6bcd",title:"917.\u4ec5\u4ec5\u53cd\u8f6c\u5b57\u6bcd",description:"\u94fe\u63a5\uff1a917.\u4ec5\u4ec5\u53cd\u8f6c\u5b57\u6bcd",source:"@site/docs/leetcode/901-1000/917.\u4ec5\u4ec5\u53cd\u8f6c\u5b57\u6bcd.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u4ec5\u4ec5\u53cd\u8f6c\u5b57\u6bcd",permalink:"/docs/leetcode/901-1000/\u4ec5\u4ec5\u53cd\u8f6c\u5b57\u6bcd",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:917,frontMatter:{},sidebar:"journal",previous:{title:"915.\u5206\u5272\u6570\u7ec4",permalink:"/docs/leetcode/901-1000/\u5206\u5272\u6570\u7ec4"},next:{title:"918.\u73af\u5f62\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c",permalink:"/docs/leetcode/901-1000/\u73af\u5f62\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"917\u4ec5\u4ec5\u53cd\u8f6c\u5b57\u6bcd",children:"917.\u4ec5\u4ec5\u53cd\u8f6c\u5b57\u6bcd"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/reverse-only-letters",children:"917.\u4ec5\u4ec5\u53cd\u8f6c\u5b57\u6bcd"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u53cd\u8f6c\u540e\u7684 s \u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-23"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.9MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    string reverseOnlyLetters(string s) {\n        for (int l = 0, r = s.size() - 1; l < r; l++, r--) {\n            while (l < s.size() && !isalpha(s[l])) l++;\n            while (r >= 0 && !isalpha(s[r])) r--;\n            if (l < r) swap(s[l], s[r]);\n        }\n        return s;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},25710:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var t=s(30758);const r={},l=t.createContext(r);function c(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);