"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[82619],{76818:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"leetcode/1701-1800/\u6700\u957f\u7684\u7f8e\u597d\u5b50\u5b57\u7b26\u4e32","title":"1763.\u6700\u957f\u7684\u7f8e\u597d\u5b50\u5b57\u7b26\u4e32","description":"\u94fe\u63a5\uff1a1763.\u6700\u957f\u7684\u7f8e\u597d\u5b50\u5b57\u7b26\u4e32","source":"@site/docs/leetcode/1701-1800/1763.\u6700\u957f\u7684\u7f8e\u597d\u5b50\u5b57\u7b26\u4e32.md","sourceDirName":"leetcode/1701-1800","slug":"/leetcode/1701-1800/\u6700\u957f\u7684\u7f8e\u597d\u5b50\u5b57\u7b26\u4e32","permalink":"/docs/leetcode/1701-1800/\u6700\u957f\u7684\u7f8e\u597d\u5b50\u5b57\u7b26\u4e32","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1763,"frontMatter":{},"sidebar":"journal","previous":{"title":"1761.\u4e00\u4e2a\u56fe\u4e2d\u8fde\u901a\u4e09\u5143\u7ec4\u7684\u6700\u5c0f\u5ea6\u6570","permalink":"/docs/leetcode/1701-1800/\u4e00\u4e2a\u56fe\u4e2d\u8fde\u901a\u4e09\u5143\u7ec4\u7684\u6700\u5c0f\u5ea6\u6570"},"next":{"title":"1764.\u901a\u8fc7\u8fde\u63a5\u53e6\u4e00\u4e2a\u6570\u7ec4\u7684\u5b50\u6570\u7ec4\u5f97\u5230\u4e00\u4e2a\u6570\u7ec4","permalink":"/docs/leetcode/1701-1800/\u901a\u8fc7\u8fde\u63a5\u53e6\u4e00\u4e2a\u6570\u7ec4\u7684\u5b50\u6570\u7ec4\u5f97\u5230\u4e00\u4e2a\u6570\u7ec4"}}');var s=i(86070),t=i(31503);const c={},l="1763.\u6700\u957f\u7684\u7f8e\u597d\u5b50\u5b57\u7b26\u4e32",o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"1763\u6700\u957f\u7684\u7f8e\u597d\u5b50\u5b57\u7b26\u4e32",children:"1763.\u6700\u957f\u7684\u7f8e\u597d\u5b50\u5b57\u7b26\u4e32"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/longest-nice-substring",children:"1763.\u6700\u957f\u7684\u7f8e\u597d\u5b50\u5b57\u7b26\u4e32"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u5206\u6cbb\u3001\u6ed1\u52a8\u7a97\u53e3",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 s \uff0c\u8bf7\u4f60\u8fd4\u56de s \u6700\u957f\u7684 \u7f8e\u597d\u5b50\u5b57\u7b26\u4e32 \u3002\u5982\u679c\u6709\u591a\u4e2a\u7b54\u6848\uff0c\u8bf7\u4f60\u8fd4\u56de \u6700\u65e9 \u51fa\u73b0\u7684\u4e00\u4e2a\u3002\u5982\u679c\u4e0d\u5b58\u5728\u7f8e\u597d\u5b50\u5b57\u7b26\u4e32\uff0c\u8bf7\u4f60\u8fd4\u56de\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-01"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.1MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u6240\u6709\u8d77\u70b9\u548c\u7ec8\u70b9\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int arr[256];\n    int check(string &str, int start, int end) {\n        memset(arr, 0, sizeof(int) * 256);\n        for (int i = start; i <= end; i++) {\n            arr[str[i]] = 1;\n        }\n        for (int i = 'A'; i <= 'Z'; i++) {\n            if (arr[i] && !arr[i + 32]) return 0;\n        }\n        for (int i = 'a'; i <= 'z'; i++) {\n            if (arr[i] && !arr[i - 32]) return 0;\n        }\n        return 1;\n    }\n    string longestNiceSubstring(string s) {\n        string ans = \"\";\n        for (int i = 0; i < s.size(); i++) {\n            for (int j = 0; j < i; j++) {\n                if (check(s, j, i) && i - j + 1 > ans.size())\n                    ans = s.substr(j, i - j + 1);\n            }\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-01"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u6240\u6709\u8d77\u70b9\u548c\u7ec8\u70b9\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int arr[26];\n    int check(string &str, int start, int end) {\n        memset(arr, 0, sizeof(int) * 26);\n        for (int i = start; i <= end; i++) {\n            if (str[i] >= 'a')\n                arr[str[i] - 'a'] |= 0b10;\n            else\n                arr[str[i] - 'A'] |= 0b01;\n        }\n        for (int i = 0; i < 26; i++) {\n            if (arr[i] != 0 && arr[i] != 3) return 0;\n        }\n        return 1;\n    }\n    string longestNiceSubstring(string s) {\n        string ans = \"\";\n        for (int i = 0; i < s.size(); i++) {\n            for (int j = 0; j < i; j++) {\n                if (check(s, j, i) && i - j + 1 > ans.size())\n                    ans = s.substr(j, i - j + 1);\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>l});var r=i(30758);const s={},t=r.createContext(s);function c(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);