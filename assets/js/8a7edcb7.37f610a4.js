"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[60856],{76176:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var s=i(86070),t=i(25710);const r={},l="1637.\u4e24\u70b9\u4e4b\u95f4\u4e0d\u5305\u542b\u4efb\u4f55\u70b9\u7684\u6700\u5bbd\u5782\u76f4\u533a\u57df",o={id:"leetcode/1601-1700/\u4e24\u70b9\u4e4b\u95f4\u4e0d\u5305\u542b\u4efb\u4f55\u70b9\u7684\u6700\u5bbd\u5782\u76f4\u533a\u57df",title:"1637.\u4e24\u70b9\u4e4b\u95f4\u4e0d\u5305\u542b\u4efb\u4f55\u70b9\u7684\u6700\u5bbd\u5782\u76f4\u533a\u57df",description:"\u94fe\u63a5\uff1a1637.\u4e24\u70b9\u4e4b\u95f4\u4e0d\u5305\u542b\u4efb\u4f55\u70b9\u7684\u6700\u5bbd\u5782\u76f4\u533a\u57df",source:"@site/docs/leetcode/1601-1700/1637.\u4e24\u70b9\u4e4b\u95f4\u4e0d\u5305\u542b\u4efb\u4f55\u70b9\u7684\u6700\u5bbd\u5782\u76f4\u533a\u57df.md",sourceDirName:"leetcode/1601-1700",slug:"/leetcode/1601-1700/\u4e24\u70b9\u4e4b\u95f4\u4e0d\u5305\u542b\u4efb\u4f55\u70b9\u7684\u6700\u5bbd\u5782\u76f4\u533a\u57df",permalink:"/docs/leetcode/1601-1700/\u4e24\u70b9\u4e4b\u95f4\u4e0d\u5305\u542b\u4efb\u4f55\u70b9\u7684\u6700\u5bbd\u5782\u76f4\u533a\u57df",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1637,frontMatter:{},sidebar:"journal",previous:{title:"1636.\u6309\u7167\u9891\u7387\u5c06\u6570\u7ec4\u5347\u5e8f\u6392\u5e8f",permalink:"/docs/leetcode/1601-1700/\u6309\u7167\u9891\u7387\u5c06\u6570\u7ec4\u5347\u5e8f\u6392\u5e8f"},next:{title:"1638.\u7edf\u8ba1\u53ea\u5dee\u4e00\u4e2a\u5b57\u7b26\u7684\u5b50\u4e32\u6570\u76ee",permalink:"/docs/leetcode/1601-1700/\u7edf\u8ba1\u53ea\u5dee\u4e00\u4e2a\u5b57\u7b26\u7684\u5b50\u4e32\u6570\u76ee"}},c={},p=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"1637\u4e24\u70b9\u4e4b\u95f4\u4e0d\u5305\u542b\u4efb\u4f55\u70b9\u7684\u6700\u5bbd\u5782\u76f4\u533a\u57df",children:"1637.\u4e24\u70b9\u4e4b\u95f4\u4e0d\u5305\u542b\u4efb\u4f55\u70b9\u7684\u6700\u5bbd\u5782\u76f4\u533a\u57df"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/widest-vertical-area-between-two-points-containing-no-points",children:"1637.\u4e24\u70b9\u4e4b\u95f4\u4e0d\u5305\u542b\u4efb\u4f55\u70b9\u7684\u6700\u5bbd\u5782\u76f4\u533a\u57df"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6392\u5e8f",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60 n \u4e2a\u4e8c\u7ef4\u5e73\u9762\u4e0a\u7684\u70b9 points \uff0c\u5176\u4e2d points[i] = [xi, yi] \uff0c\u8bf7\u4f60\u8fd4\u56de\u4e24\u70b9\u4e4b\u95f4\u5185\u90e8\u4e0d\u5305\u542b\u4efb\u4f55\u70b9\u7684 \u6700\u5bbd\u5782\u76f4\u533a\u57df \u7684\u5bbd\u5ea6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-30"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a272ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a79.3MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","Tree\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxWidthOfVerticalArea(vector<vector<int>>& points) {\n        set<int> s;\n        for (auto &p : points) s.insert(p[0]);\n        auto it = s.begin();\n        int res = 0, prev = *it;\n        while (it != s.end()) res = max(res, *it - prev), prev = *it, it++;\n        return res;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-30"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a280ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a64.7MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxWidthOfVerticalArea(vector<vector<int>>& points) {\n        sort(points.begin(), points.end(), [&](auto &a, auto &b){\n            return a[0] < b[0];\n        });\n        int res = 0;\n        for (int i = 1; i < points.size(); i++) {\n            if (points[i][0] != points[i - 1][0]) {\n                res = max(res, points[i][0] - points[i - 1][0]);\n            }\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-30"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a240ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.1MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def maxWidthOfVerticalArea(self, points: List[List[int]]) -> int:\n        points.sort(key=lambda p: p[0])\n        res = 0\n        for i in range(1, len(points)):\n            if points[i][0] != points[i - 1][0]:\n                res = max(res, points[i][0] - points[i - 1][0])\n        return res\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-30"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.3MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn max_width_of_vertical_area(mut points: Vec<Vec<i32>>) -> i32 {\n        points.sort_by_key(|p| p[0]);\n        let mut res = 0;\n        for i in 1..points.len() {\n            if (points[i][0] != points[i - 1][0]) {\n                res = res.max(points[i][0] - points[i - 1][0]);\n            }\n        }\n        res\n    }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>o});var s=i(30758);const t={},r=s.createContext(t);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);