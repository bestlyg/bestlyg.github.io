"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[73786],{43550:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=t(86070),r=t(25710);const s={},l="436.\u5bfb\u627e\u53f3\u533a\u95f4",c={id:"leetcode/401-500/\u5bfb\u627e\u53f3\u533a\u95f4",title:"436.\u5bfb\u627e\u53f3\u533a\u95f4",description:"\u94fe\u63a5\uff1a436.\u5bfb\u627e\u53f3\u533a\u95f4",source:"@site/docs/leetcode/401-500/436.\u5bfb\u627e\u53f3\u533a\u95f4.md",sourceDirName:"leetcode/401-500",slug:"/leetcode/401-500/\u5bfb\u627e\u53f3\u533a\u95f4",permalink:"/docs/leetcode/401-500/\u5bfb\u627e\u53f3\u533a\u95f4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:436,frontMatter:{},sidebar:"journal",previous:{title:"435.\u65e0\u91cd\u53e0\u533a\u95f4",permalink:"/docs/leetcode/401-500/\u65e0\u91cd\u53e0\u533a\u95f4"},next:{title:"438.\u627e\u5230\u5b57\u7b26\u4e32\u4e2d\u6240\u6709\u5b57\u6bcd\u5f02\u4f4d\u8bcd",permalink:"/docs/leetcode/401-500/\u627e\u5230\u5b57\u7b26\u4e32\u4e2d\u6240\u6709\u5b57\u6bcd\u5f02\u4f4d\u8bcd"}},o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"436\u5bfb\u627e\u53f3\u533a\u95f4",children:"436.\u5bfb\u627e\u53f3\u533a\u95f4"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/find-right-interval",children:"436.\u5bfb\u627e\u53f3\u533a\u95f4"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u6392\u5e8f",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4e00\u4e2a\u7531\u6bcf\u4e2a\u533a\u95f4 i \u7684 \u53f3\u4fa7\u533a\u95f4 \u7684\u6700\u5c0f\u8d77\u59cb\u4f4d\u7f6e\u7ec4\u6210\u7684\u6570\u7ec4\u3002\u5982\u679c\u67d0\u4e2a\u533a\u95f4 i \u4e0d\u5b58\u5728\u5bf9\u5e94\u7684 \u53f3\u4fa7\u533a\u95f4 \uff0c\u5219\u4e0b\u6807 i \u5904\u7684\u503c\u8bbe\u4e3a -1 \u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-20"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a60ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a23.3MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bs\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    vector<int> findRightInterval(vector<vector<int>> &intervals) {\n        int n = intervals.size();\n        vector<int> ans(n, -1);\n        vector<int> list(n);\n        for (int i = 0; i < n; i++) list[i] = i;\n        sort(list.begin(), list.end(), [&](int &a, int &b) -> bool {\n            if (intervals[a][0] == intervals[b][0])\n                return intervals[a][1] < intervals[b][1];\n            return intervals[a][0] < intervals[b][0];\n        });\n        for (int i = 0; i < n; i++)\n            ans[i] = bs(intervals, list, intervals[i][1]);\n        return ans;\n    }\n    int bs(vector<vector<int>> &intervals, vector<int> &list, int num) {\n        int l = 0, r = intervals.size(), m;\n        while (l < r) {\n            m = (l + r) >> 1;\n            if (intervals[list[m]][0] >= num)\n                r = m;\n            else\n                l = m + 1;\n        }\n        if (r == intervals.size()) return -1;\n        return list[l];\n    }\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var i=t(30758);const r={},s=i.createContext(r);function l(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);