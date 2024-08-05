"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[98789],{61629:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=t(86070),s=t(25710);const i={},l="680.\u9a8c\u8bc1\u56de\u6587\u4e32II",c={id:"leetcode/601-700/\u9a8c\u8bc1\u56de\u6587\u4e32II",title:"680.\u9a8c\u8bc1\u56de\u6587\u4e32II",description:"\u94fe\u63a5\uff1a680.\u9a8c\u8bc1\u56de\u6587\u4e32II",source:"@site/docs/leetcode/601-700/680.\u9a8c\u8bc1\u56de\u6587\u4e32II.md",sourceDirName:"leetcode/601-700",slug:"/leetcode/601-700/\u9a8c\u8bc1\u56de\u6587\u4e32II",permalink:"/web/site/docs/leetcode/601-700/\u9a8c\u8bc1\u56de\u6587\u4e32II",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:680,frontMatter:{},sidebar:"journal",previous:{title:"678.\u6709\u6548\u7684\u62ec\u53f7\u5b57\u7b26\u4e32",permalink:"/web/site/docs/leetcode/601-700/\u6709\u6548\u7684\u62ec\u53f7\u5b57\u7b26\u4e32"},next:{title:"682.\u68d2\u7403\u6bd4\u8d5b",permalink:"/web/site/docs/leetcode/601-700/\u68d2\u7403\u6bd4\u8d5b"}},o={},a=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"680\u9a8c\u8bc1\u56de\u6587\u4e32ii",children:"680.\u9a8c\u8bc1\u56de\u6587\u4e32II"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/valid-palindrome-ii",children:"680.\u9a8c\u8bc1\u56de\u6587\u4e32II"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u975e\u7a7a\u5b57\u7b26\u4e32 s\uff0c\u6700\u591a\u5220\u9664\u4e00\u4e2a\u5b57\u7b26\u3002\u5224\u65ad\u662f\u5426\u80fd\u6210\u4e3a\u56de\u6587\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-23"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a116ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.8MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4ece\u5de6\u53f3\u4f9d\u6b21\u9012\u8fdb\uff0c\u9047\u5230\u4e0d\u5339\u914d\u5224\u65ad\u8fdb\u4e00\u4f4d\u662f\u5426\u76f8\u540c\uff0c\u9898\u76ee\u6709\u4e2a\u95ee\u9898\uff0c\u53d1\u73b0\u8f93\u5165 ac \u8fd4\u56de true\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {string} s\n * @return {boolean}\n */\nvar validPalindrome = function (s) {\n  let isDel = false;\n  function comp(start, endStart) {\n    if (endStart <= start) return true;\n    while (start < endStart) {\n      if (s[start] !== s[endStart]) {\n        if (isDel) return false;\n        isDel = true;\n        return comp(start + 1, endStart) || comp(start, endStart - 1);\n      }\n      start++;\n      endStart--;\n    }\n    return true;\n  }\n  return comp(0, s.length - 1);\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-18"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    bool check(string &s, int l, int r) {\n        while (l < r) {\n            if (s[l] != s[r]) return 0;\n            l++;\n            r--;\n        }\n        return 1;\n    }\n    bool validPalindrome(string s) {\n        int l = 0, r = s.size() - 1;\n        for (int l = 0, r = s.size() - 1; l < r; l++, r--) {\n            if (s[l] == s[r])\n                continue;\n            else\n                return check(s, l, r - 1) || check(s, l + 1, r);\n        }\n        return 1;\n    }\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var r=t(30758);const s={},i=r.createContext(s);function l(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);