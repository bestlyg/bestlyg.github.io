"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[49307],{68569:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=i(86070),t=i(31503);const r={},l="2055.\u8721\u70db\u4e4b\u95f4\u7684\u76d8\u5b50",c={id:"leetcode/2001-2100/\u8721\u70db\u4e4b\u95f4\u7684\u76d8\u5b50",title:"2055.\u8721\u70db\u4e4b\u95f4\u7684\u76d8\u5b50",description:"\u94fe\u63a5\uff1a2055.\u8721\u70db\u4e4b\u95f4\u7684\u76d8\u5b50",source:"@site/docs/leetcode/2001-2100/2055.\u8721\u70db\u4e4b\u95f4\u7684\u76d8\u5b50.md",sourceDirName:"leetcode/2001-2100",slug:"/leetcode/2001-2100/\u8721\u70db\u4e4b\u95f4\u7684\u76d8\u5b50",permalink:"/docs/leetcode/2001-2100/\u8721\u70db\u4e4b\u95f4\u7684\u76d8\u5b50",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2055,frontMatter:{},sidebar:"journal",previous:{title:"2050.\u5e76\u884c\u8bfe\u7a0bIII",permalink:"/docs/leetcode/2001-2100/\u5e76\u884c\u8bfe\u7a0bIII"},next:{title:"2073.\u4e70\u7968\u9700\u8981\u7684\u65f6\u95f4",permalink:"/docs/leetcode/2001-2100/\u4e70\u7968\u9700\u8981\u7684\u65f6\u95f4"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"2055\u8721\u70db\u4e4b\u95f4\u7684\u76d8\u5b50",children:"2055.\u8721\u70db\u4e4b\u95f4\u7684\u76d8\u5b50"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/plates-between-candles",children:"2055.\u8721\u70db\u4e4b\u95f4\u7684\u76d8\u5b50"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u5b57\u7b26\u4e32\u3001\u4e8c\u5206\u67e5\u627e\u3001\u524d\u7f00\u548c",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 answer \uff0c\u5176\u4e2d answer[i] \u662f\u7b2c i \u4e2a\u67e5\u8be2\u7684\u7b54\u6848\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-08"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a380ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a135.3MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u7f00\u548c\uff0c\u4e8c\u5206\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    typedef pair<int, int> node;\n    vector<node> list;\n    int n;\n    vector<int> platesBetweenCandles(string s, vector<vector<int>>& queries) {\n        n = s.size();\n        int prev = 0;\n        for (int i = 0; i < n; i++) {\n            if (s[i] == '|') list.push_back(make_pair(i, prev));\n            if (s[i] == '*') prev++;\n        }\n        vector<int> ans;\n        ans.reserve(queries.size());\n        for (auto& query : queries) {\n            int l = bs_l(query[0]), r = bs_r(query[1]), res;\n            if (l == list.size() || r == -1 || list[l].first > query[1] ||\n                l == r)\n                res = 0;\n            else\n                res = list[r].second - list[l].second;\n            ans.push_back(res);\n        }\n        return ans;\n    }\n    int bs_l(int idx) {\n        int l = 0, r = list.size(), m;\n        while (l < r) {\n            m = (l + r) >> 1;\n            if (list[m].first >= idx)\n                r = m;\n            else\n                l = m + 1;\n        }\n        return l;\n    }\n    int bs_r(int idx) {\n        int l = -1, r = list.size() - 1, m;\n        while (l < r) {\n            m = (l + r + 1) >> 1;\n            if (list[m].first <= idx)\n                l = m;\n            else\n                r = m - 1;\n        }\n        return l;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-08"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a364ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a138.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u7f00\u548c\uff0c\u904d\u5386\u5b58\u50a8\u6bcf\u4e2a\u70b9\u7684\u524d\u540e\u8721\u70db\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    typedef pair<int, int> node;\n    vector<int> platesBetweenCandles(string s, vector<vector<int>>& queries) {\n        int n = s.size(), prev = 0;\n        vector<node> list;\n        for (int i = 0; i < n; i++) {\n            if (s[i] == '|') list.push_back(make_pair(i, prev));\n            if (s[i] == '*') prev++;\n        }\n        vector<int> find_l(n), find_r(n);\n        for (int i = 0, start = 0; i < n; i++) {\n            find_l[i] = start;\n            if (start < list.size() && i == list[start].first) start++;\n        }\n        for (int i = n - 1, start = list.size() - 1; i >= 0; i--) {\n            find_r[i] = start;\n            if (start > -1 && i == list[start].first) start--;\n        }\n        vector<int> ans;\n        ans.reserve(queries.size());\n        for (auto& query : queries) {\n            int l = find_l[query[0]], r = find_r[query[1]], res;\n            if (l == list.size() || r == -1 || list[l].first > query[1] ||\n                l == r)\n                res = 0;\n            else\n                res = list[r].second - list[l].second;\n            ans.push_back(res);\n        }\n        return ans;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var s=i(30758);const t={},r=s.createContext(t);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);