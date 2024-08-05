"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[71181],{53994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=t(86070),s=t(25710);const l={},c="LCR019.\u9a8c\u8bc1\u56de\u6587\u4e32II",i={id:"leetcode/1-100/LCR019.\u9a8c\u8bc1\u56de\u6587\u4e32II",title:"LCR019.\u9a8c\u8bc1\u56de\u6587\u4e32II",description:"\u94fe\u63a5\uff1aLCR019.\u9a8c\u8bc1\u56de\u6587\u4e32II",source:"@site/docs/leetcode/1-100/LCR019.\u9a8c\u8bc1\u56de\u6587\u4e32II.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/LCR019.\u9a8c\u8bc1\u56de\u6587\u4e32II",permalink:"/docs/leetcode/1-100/LCR019.\u9a8c\u8bc1\u56de\u6587\u4e32II",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"LCR018.\u9a8c\u8bc1\u56de\u6587\u4e32",permalink:"/docs/leetcode/1-100/LCR018.\u9a8c\u8bc1\u56de\u6587\u4e32"},next:{title:"LCR029.\u5faa\u73af\u6709\u5e8f\u5217\u8868\u7684\u63d2\u5165",permalink:"/docs/leetcode/1-100/LCR029.\u5faa\u73af\u6709\u5e8f\u5217\u8868\u7684\u63d2\u5165"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"lcr019\u9a8c\u8bc1\u56de\u6587\u4e32ii",children:"LCR019.\u9a8c\u8bc1\u56de\u6587\u4e32II"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/RQku0D",children:"LCR019.\u9a8c\u8bc1\u56de\u6587\u4e32II"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u975e\u7a7a\u5b57\u7b26\u4e32 s\uff0c\u8bf7\u5224\u65ad\u5982\u679c \u6700\u591a \u4ece\u5b57\u7b26\u4e32\u4e2d\u5220\u9664\u4e00\u4e2a\u5b57\u7b26\u80fd\u5426\u5f97\u5230\u4e00\u4e2a\u56de\u6587\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-18"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    bool check(string &s, int l, int r) {\n        while (l < r) {\n            if (s[l] != s[r]) return 0;\n            l++;\n            r--;\n        }\n        return 1;\n    }\n    bool validPalindrome(string s) {\n        int l = 0, r = s.size() - 1;\n        for (int l = 0, r = s.size() - 1; l < r; l++, r--) {\n            if (s[l] == s[r])\n                continue;\n            else\n                return check(s, l, r - 1) || check(s, l + 1, r);\n        }\n        return 1;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(30758);const s={},l=r.createContext(s);function c(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);