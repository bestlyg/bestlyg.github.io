"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[8123],{9830:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(86070),s=t(25710);const r={},l="532.\u6570\u7ec4\u4e2d\u7684k-diff\u6570\u5bf9",c={id:"leetcode/501-600/\u6570\u7ec4\u4e2d\u7684k-diff\u6570\u5bf9",title:"532.\u6570\u7ec4\u4e2d\u7684k-diff\u6570\u5bf9",description:"\u94fe\u63a5\uff1a532.\u6570\u7ec4\u4e2d\u7684k-diff\u6570\u5bf9",source:"@site/docs/leetcode/501-600/532.\u6570\u7ec4\u4e2d\u7684k-diff\u6570\u5bf9.md",sourceDirName:"leetcode/501-600",slug:"/leetcode/501-600/\u6570\u7ec4\u4e2d\u7684k-diff\u6570\u5bf9",permalink:"/docs/leetcode/501-600/\u6570\u7ec4\u4e2d\u7684k-diff\u6570\u5bf9",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:532,frontMatter:{},sidebar:"journal",previous:{title:"530.\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u5c0f\u7edd\u5bf9\u5dee",permalink:"/docs/leetcode/501-600/\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u5c0f\u7edd\u5bf9\u5dee"},next:{title:"535.TinyURL\u7684\u52a0\u5bc6\u4e0e\u89e3\u5bc6",permalink:"/docs/leetcode/501-600/TinyURL\u7684\u52a0\u5bc6\u4e0e\u89e3\u5bc6"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"532\u6570\u7ec4\u4e2d\u7684k-diff\u6570\u5bf9",children:"532.\u6570\u7ec4\u4e2d\u7684k-diff\u6570\u5bf9"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/k-diff-pairs-in-an-array",children:"532.\u6570\u7ec4\u4e2d\u7684k-diff\u6570\u5bf9"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u53cc\u6307\u9488\u3001\u4e8c\u5206\u67e5\u627e\u3001\u6392\u5e8f",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \u548c\u4e00\u4e2a\u6574\u6570 k\uff0c\u8bf7\u4f60\u5728\u6570\u7ec4\u4e2d\u627e\u51fa \u4e0d\u540c\u7684 k-diff \u6570\u5bf9\uff0c\u5e76\u8fd4\u56de\u4e0d\u540c\u7684 k-diff \u6570\u5bf9 \u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-06-16"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a13.9MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\uff0c\u9488\u5bf9\u4e8e\u6bcf\u4e2a\u70b9\u67e5\u627e\u5dee\u503c\u4e3a k \u7684\u70b9\u7684\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int findPairs(vector<int> &nums, int k) {\n        map<int, int> m;\n        for (auto &num : nums) m[num]++;\n        if (k == 0) return check0(m);\n        int ans = 0;\n        vector<int> list;\n        for (auto &item : m) list.push_back(item.first);\n        int n = list.size(), l1 = 0, l2 = 0;\n        for (int r = 0; r < n; r++) {\n            while (l2 < r && list[r] - list[l2] >= k) l2++;\n            while (l1 < l2 && list[r] - list[l1] > k) l1++;\n            ans += l2 - l1;\n        }\n        return ans;\n    }\n    int check0(map<int, int> &m) {\n        int ans = 0;\n        for (auto &item : m) {\n            if (item.second > 1) ans++;\n        }\n        return ans;\n    }\n};\n"})})]})}function f(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var i=t(30758);const s={},r=i.createContext(s);function l(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);