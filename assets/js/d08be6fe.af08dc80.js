"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[25187],{12502:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=i(86070),r=i(31503);const s={},c="1805.\u5b57\u7b26\u4e32\u4e2d\u4e0d\u540c\u6574\u6570\u7684\u6570\u76ee",d={id:"leetcode/1801-1900/\u5b57\u7b26\u4e32\u4e2d\u4e0d\u540c\u6574\u6570\u7684\u6570\u76ee",title:"1805.\u5b57\u7b26\u4e32\u4e2d\u4e0d\u540c\u6574\u6570\u7684\u6570\u76ee",description:"\u94fe\u63a5\uff1a1805.\u5b57\u7b26\u4e32\u4e2d\u4e0d\u540c\u6574\u6570\u7684\u6570\u76ee",source:"@site/docs/leetcode/1801-1900/1805.\u5b57\u7b26\u4e32\u4e2d\u4e0d\u540c\u6574\u6570\u7684\u6570\u76ee.md",sourceDirName:"leetcode/1801-1900",slug:"/leetcode/1801-1900/\u5b57\u7b26\u4e32\u4e2d\u4e0d\u540c\u6574\u6570\u7684\u6570\u76ee",permalink:"/docs/leetcode/1801-1900/\u5b57\u7b26\u4e32\u4e2d\u4e0d\u540c\u6574\u6570\u7684\u6570\u76ee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1805,frontMatter:{},sidebar:"journal",previous:{title:"1803.\u7edf\u8ba1\u5f02\u6216\u503c\u5728\u8303\u56f4\u5185\u7684\u6570\u5bf9\u6709\u591a\u5c11",permalink:"/docs/leetcode/1801-1900/\u7edf\u8ba1\u5f02\u6216\u503c\u5728\u8303\u56f4\u5185\u7684\u6570\u5bf9\u6709\u591a\u5c11"},next:{title:"1806.\u8fd8\u539f\u6392\u5217\u7684\u6700\u5c11\u64cd\u4f5c\u6b65\u6570",permalink:"/docs/leetcode/1801-1900/\u8fd8\u539f\u6392\u5217\u7684\u6700\u5c11\u64cd\u4f5c\u6b65\u6570"}},o={},l=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"1805\u5b57\u7b26\u4e32\u4e2d\u4e0d\u540c\u6574\u6570\u7684\u6570\u76ee",children:"1805.\u5b57\u7b26\u4e32\u4e2d\u4e0d\u540c\u6574\u6570\u7684\u6570\u76ee"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/number-of-different-integers-in-a-string",children:"1805.\u5b57\u7b26\u4e32\u4e2d\u4e0d\u540c\u6574\u6570\u7684\u6570\u76ee"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 word \uff0c\u8be5\u5b57\u7b26\u4e32\u7531\u6570\u5b57\u548c\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210\u3002\u8fd4\u56de\u5bf9 word \u5b8c\u6210\u66ff\u6362\u540e\u5f62\u6210\u7684 \u4e0d\u540c \u6574\u6570\u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-17"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.4MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:'class Solution {\n   public:\n    int numDifferentIntegers(string word) {\n        unordered_set<string> s;\n        int idx = 0, n = word.size();\n        while (idx < n) {\n            while (idx < n && isalpha(word[idx])) idx++;\n            if (idx == n) break;\n            string num = "";\n            for (; isdigit(word[idx]); idx++) {\n                if (num == "" && word[idx] == \'0\') continue;\n                num += word[idx];\n            }\n            s.insert(num);\n        }\n        return s.size();\n    }\n};\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-06"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.3MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int numDifferentIntegers(string word) {\n        unordered_set<string> s;\n        for (int i = 0, n = word.size(); i < n; i++) {\n            if (!isdigit(word[i])) continue;\n            int start = i;\n            while (i < n && isdigit(word[i])) i++;\n            while (start + 1 < i && word[start] == '0') start++;\n            s.insert(word.substr(start, i - start));\n        }\n        return s.size();\n    }\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>d});var t=i(30758);const r={},s=t.createContext(r);function c(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);