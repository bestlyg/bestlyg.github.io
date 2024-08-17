"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[81858],{98600:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var t=s(86070),i=s(25710);const c={},r="967.\u8fde\u7eed\u5dee\u76f8\u540c\u7684\u6570\u5b57",l={id:"leetcode/901-1000/\u8fde\u7eed\u5dee\u76f8\u540c\u7684\u6570\u5b57",title:"967.\u8fde\u7eed\u5dee\u76f8\u540c\u7684\u6570\u5b57",description:"\u94fe\u63a5\uff1a967.\u8fde\u7eed\u5dee\u76f8\u540c\u7684\u6570\u5b57",source:"@site/docs/leetcode/901-1000/967.\u8fde\u7eed\u5dee\u76f8\u540c\u7684\u6570\u5b57.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u8fde\u7eed\u5dee\u76f8\u540c\u7684\u6570\u5b57",permalink:"/docs/leetcode/901-1000/\u8fde\u7eed\u5dee\u76f8\u540c\u7684\u6570\u5b57",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:967,frontMatter:{},sidebar:"journal",previous:{title:"965.\u5355\u503c\u4e8c\u53c9\u6811",permalink:"/docs/leetcode/901-1000/\u5355\u503c\u4e8c\u53c9\u6811"},next:{title:"968.\u76d1\u63a7\u4e8c\u53c9\u6811",permalink:"/docs/leetcode/901-1000/\u76d1\u63a7\u4e8c\u53c9\u6811"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"967\u8fde\u7eed\u5dee\u76f8\u540c\u7684\u6570\u5b57",children:"967.\u8fde\u7eed\u5dee\u76f8\u540c\u7684\u6570\u5b57"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/numbers-with-same-consecutive-differences",children:"967.\u8fde\u7eed\u5dee\u76f8\u540c\u7684\u6570\u5b57"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u56de\u6eaf",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u6240\u6709\u957f\u5ea6\u4e3a n \u4e14\u6ee1\u8db3\u5176\u6bcf\u4e24\u4e2a\u8fde\u7eed\u4f4d\u4e0a\u7684\u6570\u5b57\u4e4b\u95f4\u7684\u5dee\u7684\u7edd\u5bf9\u503c\u4e3a k \u7684 \u975e\u8d1f\u6574\u6570 \u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-30"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.5MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    void dfs(vector<int> &ans, int n, int k, int num) {\n        if (n == 0) {\n            ans.push_back(num);\n            return;\n        }\n        if (num % 10 + k <= 9) {\n            dfs(ans, n - 1, k, num * 10 + k + num % 10);\n        }\n        if (k != 0 && num % 10 - k >= 0) {\n            dfs(ans, n - 1, k, num * 10 - k + num % 10);\n        }\n    }\n    vector<int> numsSameConsecDiff(int n, int k) {\n        vector<int> ans;\n        for (int i = 1; i <= 9; i++) dfs(ans, n - 1, k, i);\n        return ans;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-18"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.3MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int n, k;\n    vector<int> ans;\n    void dfs(int cur, int cnt, int last) {\n        if (cnt == 0) {\n            ans.push_back(cur);\n            return;\n        }\n        if (last + k < 10) dfs(cur * 10 + last + k, cnt - 1, last + k);\n        if (k != 0 && last - k >= 0)\n            dfs(cur * 10 + last - k, cnt - 1, last - k);\n    }\n    vector<int> numsSameConsecDiff(int n, int k) {\n        this->n = n;\n        this->k = k;\n        for (int i = 1; i <= 9; i++) dfs(i, n - 1, i);\n        return ans;\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>l});var t=s(30758);const i={},c=t.createContext(i);function r(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);