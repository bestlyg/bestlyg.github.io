"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[52395],{86001:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=r(86070),s=r(25710);const t={},o="953.\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178",c={id:"leetcode/901-1000/\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178",title:"953.\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178",description:"\u94fe\u63a5\uff1a953.\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178",source:"@site/docs/leetcode/901-1000/953.\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178",permalink:"/docs/leetcode/901-1000/\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:953,frontMatter:{},sidebar:"journal",previous:{title:"952.\u6309\u516c\u56e0\u6570\u8ba1\u7b97\u6700\u5927\u7ec4\u4ef6\u5927\u5c0f",permalink:"/docs/leetcode/901-1000/\u6309\u516c\u56e0\u6570\u8ba1\u7b97\u6700\u5927\u7ec4\u4ef6\u5927\u5c0f"},next:{title:"954.\u4e8c\u500d\u6570\u5bf9\u6570\u7ec4",permalink:"/docs/leetcode/901-1000/\u4e8c\u500d\u6570\u5bf9\u6570\u7ec4"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"953\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178",children:"953.\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/verifying-an-alien-dictionary",children:"953.\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u7ec4\u7528\u5916\u661f\u8bed\u4e66\u5199\u7684\u5355\u8bcd words\uff0c\u4ee5\u53ca\u5176\u5b57\u6bcd\u8868\u7684\u987a\u5e8f order\uff0c\u53ea\u6709\u5f53\u7ed9\u5b9a\u7684\u5355\u8bcd\u5728\u8fd9\u79cd\u5916\u661f\u8bed\u4e2d\u6309\u5b57\u5178\u5e8f\u6392\u5217\u65f6\uff0c\u8fd4\u56de true\uff1b\u5426\u5219\uff0c\u8fd4\u56de false\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-23"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8f6c\u6362\u6210\u5730\u7403\u6587\u8fdb\u884c\u6bd4\u8f83\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    bool isAlienSorted(vector<string> &words, string order) {\n        int nums[30] = {0};\n        for (int i = 0; i < order.size(); i++) nums[order[i] - 'a'] = i;\n        for (auto &str : words) {\n            for (auto &ch : str) {\n                ch = nums[ch - 'a'] + 'a';\n            }\n        }\n        for (int i = 1; i < words.size(); i++) {\n            if (words[i] < words[i - 1]) return 0;\n        }\n        return 1;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-17"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    bool isAlienSorted(vector<string> &words, string order) {\n        char map[26] = {0};\n        for (int i = 0; i < order.size(); i++) map[order[i] - 'a'] = i;\n        string prev = words[0];\n        for (int i = 1; i < words.size(); i++) {\n            if (!check(prev, words[i], map)) return false;\n            prev = words[i];\n        }\n        return true;\n    }\n    bool check(string &s1, string &s2, char *map) {\n        int i1 = 0, n1 = s1.size(), i2 = 0, n2 = s2.size();\n        while (i1 < n1 && i2 < n2) {\n            if (map[s1[i1] - 'a'] > map[s2[i2] - 'a']) return false;\n            if (map[s1[i1] - 'a'] < map[s2[i2] - 'a']) return true;\n            i1++;\n            i2++;\n        }\n        return i1 == n1;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>c});var i=r(30758);const s={},t=i.createContext(s);function o(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);