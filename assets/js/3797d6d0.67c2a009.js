"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[52395],{27260:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/901-1000/\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178","title":"953.\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178","description":"\u94fe\u63a5\uff1a953.\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178","source":"@site/docs/leetcode/901-1000/953.\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178.md","sourceDirName":"leetcode/901-1000","slug":"/leetcode/901-1000/\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178","permalink":"/docs/leetcode/901-1000/\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":953,"frontMatter":{},"sidebar":"journal","previous":{"title":"952.\u6309\u516c\u56e0\u6570\u8ba1\u7b97\u6700\u5927\u7ec4\u4ef6\u5927\u5c0f","permalink":"/docs/leetcode/901-1000/\u6309\u516c\u56e0\u6570\u8ba1\u7b97\u6700\u5927\u7ec4\u4ef6\u5927\u5c0f"},"next":{"title":"954.\u4e8c\u500d\u6570\u5bf9\u6570\u7ec4","permalink":"/docs/leetcode/901-1000/\u4e8c\u500d\u6570\u5bf9\u6570\u7ec4"}}');var s=r(86070),t=r(31503);const o={},c="953.\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178",l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"953\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178",children:"953.\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/verifying-an-alien-dictionary",children:"953.\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u7ec4\u7528\u5916\u661f\u8bed\u4e66\u5199\u7684\u5355\u8bcd words\uff0c\u4ee5\u53ca\u5176\u5b57\u6bcd\u8868\u7684\u987a\u5e8f order\uff0c\u53ea\u6709\u5f53\u7ed9\u5b9a\u7684\u5355\u8bcd\u5728\u8fd9\u79cd\u5916\u661f\u8bed\u4e2d\u6309\u5b57\u5178\u5e8f\u6392\u5217\u65f6\uff0c\u8fd4\u56de true\uff1b\u5426\u5219\uff0c\u8fd4\u56de false\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-23"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.1MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8f6c\u6362\u6210\u5730\u7403\u6587\u8fdb\u884c\u6bd4\u8f83\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    bool isAlienSorted(vector<string> &words, string order) {\n        int nums[30] = {0};\n        for (int i = 0; i < order.size(); i++) nums[order[i] - 'a'] = i;\n        for (auto &str : words) {\n            for (auto &ch : str) {\n                ch = nums[ch - 'a'] + 'a';\n            }\n        }\n        for (int i = 1; i < words.size(); i++) {\n            if (words[i] < words[i - 1]) return 0;\n        }\n        return 1;\n    }\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-17"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.1MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    bool isAlienSorted(vector<string> &words, string order) {\n        char map[26] = {0};\n        for (int i = 0; i < order.size(); i++) map[order[i] - 'a'] = i;\n        string prev = words[0];\n        for (int i = 1; i < words.size(); i++) {\n            if (!check(prev, words[i], map)) return false;\n            prev = words[i];\n        }\n        return true;\n    }\n    bool check(string &s1, string &s2, char *map) {\n        int i1 = 0, n1 = s1.size(), i2 = 0, n2 = s2.size();\n        while (i1 < n1 && i2 < n2) {\n            if (map[s1[i1] - 'a'] > map[s2[i2] - 'a']) return false;\n            if (map[s1[i1] - 'a'] < map[s2[i2] - 'a']) return true;\n            i1++;\n            i2++;\n        }\n        return i1 == n1;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},31503:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var i=r(30758);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);