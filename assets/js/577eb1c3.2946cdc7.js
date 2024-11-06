"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[45226],{20036:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var i=r(86070),s=r(31503);const t={},c="2000.\u53cd\u8f6c\u5355\u8bcd\u524d\u7f00",d={id:"leetcode/1901-2000/\u53cd\u8f6c\u5355\u8bcd\u524d\u7f00",title:"2000.\u53cd\u8f6c\u5355\u8bcd\u524d\u7f00",description:"\u94fe\u63a5\uff1a2000.\u53cd\u8f6c\u5355\u8bcd\u524d\u7f00",source:"@site/docs/leetcode/1901-2000/2000.\u53cd\u8f6c\u5355\u8bcd\u524d\u7f00.md",sourceDirName:"leetcode/1901-2000",slug:"/leetcode/1901-2000/\u53cd\u8f6c\u5355\u8bcd\u524d\u7f00",permalink:"/docs/leetcode/1901-2000/\u53cd\u8f6c\u5355\u8bcd\u524d\u7f00",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2e3,frontMatter:{},sidebar:"journal",previous:{title:"1997.\u8bbf\u95ee\u5b8c\u6240\u6709\u623f\u95f4\u7684\u7b2c\u4e00\u5929",permalink:"/docs/leetcode/1901-2000/\u8bbf\u95ee\u5b8c\u6240\u6709\u623f\u95f4\u7684\u7b2c\u4e00\u5929"},next:{title:"2001.\u53ef\u4e92\u6362\u77e9\u5f62\u7684\u7ec4\u6570",permalink:"/docs/leetcode/2001-2100/\u53ef\u4e92\u6362\u77e9\u5f62\u7684\u7ec4\u6570"}},o={},l=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"2000\u53cd\u8f6c\u5355\u8bcd\u524d\u7f00",children:"2000.\u53cd\u8f6c\u5355\u8bcd\u524d\u7f00"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/reverse-prefix-of-word",children:"2000.\u53cd\u8f6c\u5355\u8bcd\u524d\u7f00"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u7684\u5b57\u7b26\u4e32 word \u548c\u4e00\u4e2a\u5b57\u7b26 ch \u3002\u627e\u51fa ch \u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u4e0b\u6807 i \uff0c\u53cd\u8f6c word \u4e2d\u4ece\u4e0b\u6807 0 \u5f00\u59cb\u3001\u76f4\u5230\u4e0b\u6807 i \u7ed3\u675f\uff08\u542b\u4e0b\u6807 i \uff09\u7684\u90a3\u6bb5\u5b57\u7b26\u3002\u5982\u679c word \u4e2d\u4e0d\u5b58\u5728\u5b57\u7b26 ch \uff0c\u5219\u65e0\u9700\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-03"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.1MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    string reversePrefix(string word, char ch) {\n        int idx = 0;\n        while (idx < word.size() && word[idx] != ch) idx++;\n        if (idx == word.size()) return word;\n        string ans = word.substr(0, idx + 1);\n        reverse(ans.begin(), ans.end());\n        ans += word.substr(idx + 1, word.size() - idx - 1);\n        return ans;\n    }\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-03"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.2MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'class Solution {\n   public:\n    string reversePrefix(string word, char ch) {\n        int idx = 0;\n        while (idx < word.size() && word[idx] != ch) idx++;\n        if (idx == word.size()) return word;\n        string ans = "";\n        for (int i = idx; i >= 0; i--) ans += word[i];\n        for (int i = idx + 1; i < word.size(); i++) ans += word[i];\n        return ans;\n    }\n};\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},31503:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>d});var i=r(30758);const s={},t=i.createContext(s);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);