"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[29867],{49946:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var s=i(86070),t=i(25710);const r={},l="2475.\u6570\u7ec4\u4e2d\u4e0d\u7b49\u4e09\u5143\u7ec4\u7684\u6570\u76ee",c={id:"leetcode/2401-2500/\u6570\u7ec4\u4e2d\u4e0d\u7b49\u4e09\u5143\u7ec4\u7684\u6570\u76ee",title:"2475.\u6570\u7ec4\u4e2d\u4e0d\u7b49\u4e09\u5143\u7ec4\u7684\u6570\u76ee",description:"\u94fe\u63a5\uff1a2475.\u6570\u7ec4\u4e2d\u4e0d\u7b49\u4e09\u5143\u7ec4\u7684\u6570\u76ee",source:"@site/docs/leetcode/2401-2500/2475.\u6570\u7ec4\u4e2d\u4e0d\u7b49\u4e09\u5143\u7ec4\u7684\u6570\u76ee.md",sourceDirName:"leetcode/2401-2500",slug:"/leetcode/2401-2500/\u6570\u7ec4\u4e2d\u4e0d\u7b49\u4e09\u5143\u7ec4\u7684\u6570\u76ee",permalink:"/docs/leetcode/2401-2500/\u6570\u7ec4\u4e2d\u4e0d\u7b49\u4e09\u5143\u7ec4\u7684\u6570\u76ee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2475,frontMatter:{},sidebar:"journal",previous:{title:"2472.\u4e0d\u91cd\u53e0\u56de\u6587\u5b50\u5b57\u7b26\u4e32\u7684\u6700\u5927\u6570\u76ee",permalink:"/docs/leetcode/2401-2500/\u4e0d\u91cd\u53e0\u56de\u6587\u5b50\u5b57\u7b26\u4e32\u7684\u6700\u5927\u6570\u76ee"},next:{title:"2476.\u4e8c\u53c9\u641c\u7d22\u6811\u6700\u8fd1\u8282\u70b9\u67e5\u8be2",permalink:"/docs/leetcode/2401-2500/\u4e8c\u53c9\u641c\u7d22\u6811\u6700\u8fd1\u8282\u70b9\u67e5\u8be2"}},o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"2475\u6570\u7ec4\u4e2d\u4e0d\u7b49\u4e09\u5143\u7ec4\u7684\u6570\u76ee",children:"2475.\u6570\u7ec4\u4e2d\u4e0d\u7b49\u4e09\u5143\u7ec4\u7684\u6570\u76ee"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/number-of-unequal-triplets-in-array",children:"2475.\u6570\u7ec4\u4e2d\u4e0d\u7b49\u4e09\u5143\u7ec4\u7684\u6570\u76ee"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u6392\u5e8f",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u6ee1\u8db3\u4e0a\u8ff0\u6761\u4ef6\u4e09\u5143\u7ec4\u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-20"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a344ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.4MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u66b4\u529b\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int unequalTriplets(vector<int>& nums) {\n        map<int, int> m;\n        for (auto &num : nums) m[num]++;\n        vector<int> list;\n        for (auto &item : m) list.push_back(item.first);\n        int ans = 0;\n        for (int i = 0; i < list.size(); i++) {\n            for (int j = i + 1; j < list.size(); j++) {\n                for (int k = j + 1; k < list.size(); k++) {\n                    ans += m[list[i]] * m[list[j]] * m[list[k]];\n                }\n            }\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-20"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.3MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5bf9\u4e8e\u6bcf\u4e00\u7ec4\u76f8\u540c\u7684\u6570\uff0c\u5224\u65ad\u6bd4\u4ed6\u5c0f\u7684\u6709\u51e0\u4e2a\u6570\uff0c\u6bd4\u4ed6\u5927\u7684\u6709\u51e0\u4e2a\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int unequalTriplets(vector<int>& nums) {\n        sort(nums.begin(), nums.end());\n        int ans = 0, prev = 0;\n        for (int i = 0; i < nums.size() - 1; i++) {\n            if (nums[i] == nums[i + 1]) continue;\n            ans += prev * (i - prev + 1) * (nums.size() - i - 1);\n            prev = i + 1;\n        }\n        return ans;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var s=i(30758);const t={},r=s.createContext(t);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);