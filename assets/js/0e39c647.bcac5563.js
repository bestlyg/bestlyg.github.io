"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[27358],{47012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var s=t(86070),r=t(25710);const c={},o="1668.\u6700\u5927\u91cd\u590d\u5b50\u5b57\u7b26\u4e32",i={id:"leetcode/1601-1700/\u6700\u5927\u91cd\u590d\u5b50\u5b57\u7b26\u4e32",title:"1668.\u6700\u5927\u91cd\u590d\u5b50\u5b57\u7b26\u4e32",description:"\u94fe\u63a5\uff1a1668.\u6700\u5927\u91cd\u590d\u5b50\u5b57\u7b26\u4e32",source:"@site/docs/leetcode/1601-1700/1668.\u6700\u5927\u91cd\u590d\u5b50\u5b57\u7b26\u4e32.md",sourceDirName:"leetcode/1601-1700",slug:"/leetcode/1601-1700/\u6700\u5927\u91cd\u590d\u5b50\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/1601-1700/\u6700\u5927\u91cd\u590d\u5b50\u5b57\u7b26\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1668,frontMatter:{},sidebar:"journal",previous:{title:"1664.\u751f\u6210\u5e73\u8861\u6570\u7ec4\u7684\u65b9\u6848\u6570",permalink:"/docs/leetcode/1601-1700/\u751f\u6210\u5e73\u8861\u6570\u7ec4\u7684\u65b9\u6848\u6570"},next:{title:"1669.\u5408\u5e76\u4e24\u4e2a\u94fe\u8868",permalink:"/docs/leetcode/1601-1700/\u5408\u5e76\u4e24\u4e2a\u94fe\u8868"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1668\u6700\u5927\u91cd\u590d\u5b50\u5b57\u7b26\u4e32",children:"1668.\u6700\u5927\u91cd\u590d\u5b50\u5b57\u7b26\u4e32"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-repeating-substring",children:"1668.\u6700\u5927\u91cd\u590d\u5b50\u5b57\u7b26\u4e32"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212\u3001\u5b57\u7b26\u4e32\u5339\u914d",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 sequence \u548c word \uff0c\u8bf7\u4f60\u8fd4\u56de \u6700\u5927\u91cd\u590d\u503c k \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-04"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8d70\u7684\u6b65\u6570\u76f8\u5f53\u4e8e 1+2+..+n\uff0c\u628a\u5176\u4e2d\u67d0\u51e0\u4e2a\u8282\u70b9\u66ff\u6362\u6210-\uff0c\u5f53 sum \u8d85\u8fc7 target \u65f6\uff0c\u5982\u679c\u76f8\u51cf\u662f\u5076\u6570\uff0c\u90a3\u5c31\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff0c\u5982\u679c\u662f\u5947\u6570\u5219\u4e00\u76f4\u7d2f\u52a0\u5230\u76f8\u51cf\u662f\u5076\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int reachNumber(int target) {\n        target = abs(target);\n        int sum = 0, cnt = 1;\n        while (sum < target || (sum - target) % 2 != 0) sum += cnt++;\n        return cnt - 1;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(30758);const r={},c=s.createContext(r);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);