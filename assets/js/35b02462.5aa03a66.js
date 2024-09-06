"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[41911],{70250:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(86070),c=t(25710);const i={},r="1796.\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e8c\u5927\u7684\u6570\u5b57",o={id:"leetcode/1701-1800/\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e8c\u5927\u7684\u6570\u5b57",title:"1796.\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e8c\u5927\u7684\u6570\u5b57",description:"\u94fe\u63a5\uff1a1796.\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e8c\u5927\u7684\u6570\u5b57",source:"@site/docs/leetcode/1701-1800/1796.\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e8c\u5927\u7684\u6570\u5b57.md",sourceDirName:"leetcode/1701-1800",slug:"/leetcode/1701-1800/\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e8c\u5927\u7684\u6570\u5b57",permalink:"/docs/leetcode/1701-1800/\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e8c\u5927\u7684\u6570\u5b57",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1796,frontMatter:{},sidebar:"journal",previous:{title:"1793.\u597d\u5b50\u6570\u7ec4\u7684\u6700\u5927\u5206\u6570",permalink:"/docs/leetcode/1701-1800/\u597d\u5b50\u6570\u7ec4\u7684\u6700\u5927\u5206\u6570"},next:{title:"1797.\u8bbe\u8ba1\u4e00\u4e2a\u9a8c\u8bc1\u7cfb\u7edf",permalink:"/docs/leetcode/1701-1800/\u8bbe\u8ba1\u4e00\u4e2a\u9a8c\u8bc1\u7cfb\u7edf"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1796\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e8c\u5927\u7684\u6570\u5b57",children:"1796.\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e8c\u5927\u7684\u6570\u5b57"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/second-largest-digit-in-a-string",children:"1796.\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e8c\u5927\u7684\u6570\u5b57"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6df7\u5408\u5b57\u7b26\u4e32 s \uff0c\u8bf7\u4f60\u8fd4\u56de s \u4e2d \u7b2c\u4e8c\u5927 \u7684\u6570\u5b57\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u7b2c\u4e8c\u5927\u7684\u6570\u5b57\uff0c\u8bf7\u4f60\u8fd4\u56de -1 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-03"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.5MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int secondHighest(string s) {\n        int n1 = -1, n2 = -1;\n        for (auto &c : s) {\n            if (!isdigit(c)) continue;\n            int num = c - '0';\n            if (n1 == -1) n1 = num;\n            else if (num > n1) n2 = n1, n1 = num;\n            else if (num == n1) continue;\n            else if (n2 == -1) n2 = num;\n            else if (num > n2) n2 = num;\n        }\n        return n2;\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(30758);const c={},i=s.createContext(c);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);