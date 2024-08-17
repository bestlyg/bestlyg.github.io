"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[28625],{43024:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=s(86070),t=s(25710);const r={},c="870.\u4f18\u52bf\u6d17\u724c",o={id:"leetcode/801-900/\u4f18\u52bf\u6d17\u724c",title:"870.\u4f18\u52bf\u6d17\u724c",description:"\u94fe\u63a5\uff1a870.\u4f18\u52bf\u6d17\u724c",source:"@site/docs/leetcode/801-900/870.\u4f18\u52bf\u6d17\u724c.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u4f18\u52bf\u6d17\u724c",permalink:"/docs/leetcode/801-900/\u4f18\u52bf\u6d17\u724c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:870,frontMatter:{},sidebar:"journal",previous:{title:"869.\u91cd\u65b0\u6392\u5e8f\u5f97\u52302\u7684\u5e42",permalink:"/docs/leetcode/801-900/\u91cd\u65b0\u6392\u5e8f\u5f97\u52302\u7684\u5e42"},next:{title:"873.\u6700\u957f\u7684\u6590\u6ce2\u90a3\u5951\u5b50\u5e8f\u5217\u7684\u957f\u5ea6",permalink:"/docs/leetcode/801-900/\u6700\u957f\u7684\u6590\u6ce2\u90a3\u5951\u5b50\u5e8f\u5217\u7684\u957f\u5ea6"}},u={},l=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"870\u4f18\u52bf\u6d17\u724c",children:"870.\u4f18\u52bf\u6d17\u724c"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/advantage-shuffle",children:"870.\u4f18\u52bf\u6d17\u724c"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u6392\u5e8f",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de nums1 \u7684\u4efb\u610f\u6392\u5217\uff0c\u4f7f\u5176\u76f8\u5bf9\u4e8e nums2 \u7684\u4f18\u52bf\u6700\u5927\u5316\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-08"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a164ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a58.3MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u4e0b\u6807\u6570\u7ec4\u540e\uff0c\u4ece\u5927\u5f80\u5c0f\u5224\u65ad\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> advantageCount(vector<int>& nums1, vector<int>& nums2) {\n        int n = nums1.size();\n        vector<int> ans(n), inums1(n), inums2(n);\n        for (int i = 0; i < n; i++) inums1[i] = inums2[i] = i;\n        sort(inums1.begin(), inums1.end(), [&](int i1, int i2){ return nums1[i1] < nums1[i2]; });\n        sort(inums2.begin(), inums2.end(), [&](int i1, int i2){ return nums2[i1] < nums2[i2]; });\n        int e1 = n - 1, s1 = 0, i2 = n - 1;\n        while (e1 >= s1) {\n            if (nums1[inums1[e1]] > nums2[inums2[i2]]) ans[inums2[i2]] = nums1[inums1[e1--]];\n            else ans[inums2[i2]] = nums1[inums1[s1++]];\n            i2--;\n        }\n        return ans;\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>o});var i=s(30758);const t={},r=i.createContext(t);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);