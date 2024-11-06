"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[53840],{75017:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var s=t(86070),r=t(31503);const c={},l="2351.\u7b2c\u4e00\u4e2a\u51fa\u73b0\u4e24\u6b21\u7684\u5b57\u6bcd",i={id:"leetcode/2301-2400/\u7b2c\u4e00\u4e2a\u51fa\u73b0\u4e24\u6b21\u7684\u5b57\u6bcd",title:"2351.\u7b2c\u4e00\u4e2a\u51fa\u73b0\u4e24\u6b21\u7684\u5b57\u6bcd",description:"\u94fe\u63a5\uff1a2351.\u7b2c\u4e00\u4e2a\u51fa\u73b0\u4e24\u6b21\u7684\u5b57\u6bcd",source:"@site/docs/leetcode/2301-2400/2351.\u7b2c\u4e00\u4e2a\u51fa\u73b0\u4e24\u6b21\u7684\u5b57\u6bcd.md",sourceDirName:"leetcode/2301-2400",slug:"/leetcode/2301-2400/\u7b2c\u4e00\u4e2a\u51fa\u73b0\u4e24\u6b21\u7684\u5b57\u6bcd",permalink:"/docs/leetcode/2301-2400/\u7b2c\u4e00\u4e2a\u51fa\u73b0\u4e24\u6b21\u7684\u5b57\u6bcd",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2351,frontMatter:{},sidebar:"journal",previous:{title:"2347.\u6700\u597d\u7684\u6251\u514b\u624b\u724c",permalink:"/docs/leetcode/2301-2400/\u6700\u597d\u7684\u6251\u514b\u624b\u724c"},next:{title:"2352.\u76f8\u7b49\u884c\u5217\u5bf9",permalink:"/docs/leetcode/2301-2400/\u76f8\u7b49\u884c\u5217\u5bf9"}},o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - rust",id:"\u9898\u89e3-2---rust",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2351\u7b2c\u4e00\u4e2a\u51fa\u73b0\u4e24\u6b21\u7684\u5b57\u6bcd",children:"2351.\u7b2c\u4e00\u4e2a\u51fa\u73b0\u4e24\u6b21\u7684\u5b57\u6bcd"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/first-letter-to-appear-twice",children:"2351.\u7b2c\u4e00\u4e2a\u51fa\u73b0\u4e24\u6b21\u7684\u5b57\u6bcd"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u8ba1\u6570",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210\u7684\u5b57\u7b26\u4e32 s \uff0c\u8bf7\u4f60\u627e\u51fa\u5e76\u8fd4\u56de\u7b2c\u4e00\u4e2a\u51fa\u73b0 \u4e24\u6b21 \u7684\u5b57\u6bcd\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-01"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    char repeatedCharacter(string s) {\n        int list[26] = {0};\n        for (auto &c : s) {\n            if (list[c - 'a']++ == 1) return c;\n        }\n        return ' ';\n    }\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---rust",children:"\u9898\u89e3 2 - rust"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-01"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn repeated_character(s: String) -> char {\n        let s = s.as_bytes();\n        let mut list = [0; 26];\n        for c in s {\n            let i = *c as usize - 'a' as usize;\n            if list[i] == 1 {\n                return *c as char;\n            }\n            list[i] += 1;\n        }\n        ' '\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(30758);const r={},c=s.createContext(r);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);