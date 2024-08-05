"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[8348],{32987:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var s=t(86070),r=t(25710);const l={},c="LCR018.\u9a8c\u8bc1\u56de\u6587\u4e32",i={id:"leetcode/1-100/LCR018.\u9a8c\u8bc1\u56de\u6587\u4e32",title:"LCR018.\u9a8c\u8bc1\u56de\u6587\u4e32",description:"\u94fe\u63a5\uff1aLCR018.\u9a8c\u8bc1\u56de\u6587\u4e32",source:"@site/docs/leetcode/1-100/LCR018.\u9a8c\u8bc1\u56de\u6587\u4e32.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/LCR018.\u9a8c\u8bc1\u56de\u6587\u4e32",permalink:"/web/site/docs/leetcode/1-100/LCR018.\u9a8c\u8bc1\u56de\u6587\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"LCR016.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",permalink:"/web/site/docs/leetcode/1-100/LCR016.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32"},next:{title:"LCR019.\u9a8c\u8bc1\u56de\u6587\u4e32II",permalink:"/web/site/docs/leetcode/1-100/LCR019.\u9a8c\u8bc1\u56de\u6587\u4e32II"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"lcr018\u9a8c\u8bc1\u56de\u6587\u4e32",children:"LCR018.\u9a8c\u8bc1\u56de\u6587\u4e32"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/XltzEq",children:"LCR018.\u9a8c\u8bc1\u56de\u6587\u4e32"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32 s \uff0c\u9a8c\u8bc1 s \u662f\u5426\u662f \u56de\u6587\u4e32 \uff0c\u53ea\u8003\u8651\u5b57\u6bcd\u548c\u6570\u5b57\u5b57\u7b26\uff0c\u53ef\u4ee5\u5ffd\u7565\u5b57\u6bcd\u7684\u5927\u5c0f\u5199\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-18"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.2MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'class Solution {\n   public:\n    bool isPalindrome(string s) {\n        if (s == " ") return 1;\n        int l = 0, r = s.size() - 1;\n        char lc, rc;\n        while (l < r) {\n            do {\n                lc = tolower(s[l++]);\n            } while (l < s.size() && !isdigit(lc) && !isalpha(lc));\n            do {\n                rc = tolower(s[r--]);\n            } while (r >= 0 && !isdigit(rc) && !isalpha(rc));\n            if (l < s.size() && r >= 0 && lc != rc) return 0;\n        }\n        return 1;\n    }\n};\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(30758);const r={},l=s.createContext(r);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);