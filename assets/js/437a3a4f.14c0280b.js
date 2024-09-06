"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[53366],{56104:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=s(86070),i=s(25710);const r={},c="1262.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u6700\u5927\u548c",l={id:"leetcode/1201-1300/\u53ef\u88ab\u4e09\u6574\u9664\u7684\u6700\u5927\u548c",title:"1262.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u6700\u5927\u548c",description:"\u94fe\u63a5\uff1a1262.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u6700\u5927\u548c",source:"@site/docs/leetcode/1201-1300/1262.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u6700\u5927\u548c.md",sourceDirName:"leetcode/1201-1300",slug:"/leetcode/1201-1300/\u53ef\u88ab\u4e09\u6574\u9664\u7684\u6700\u5927\u548c",permalink:"/docs/leetcode/1201-1300/\u53ef\u88ab\u4e09\u6574\u9664\u7684\u6700\u5927\u548c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1262,frontMatter:{},sidebar:"journal",previous:{title:"1261.\u5728\u53d7\u6c61\u67d3\u7684\u4e8c\u53c9\u6811\u4e2d\u67e5\u627e\u5143\u7d20",permalink:"/docs/leetcode/1201-1300/\u5728\u53d7\u6c61\u67d3\u7684\u4e8c\u53c9\u6811\u4e2d\u67e5\u627e\u5143\u7d20"},next:{title:"1263.\u63a8\u7bb1\u5b50",permalink:"/docs/leetcode/1201-1300/\u63a8\u7bb1\u5b50"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"1262\u53ef\u88ab\u4e09\u6574\u9664\u7684\u6700\u5927\u548c",children:"1262.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u6700\u5927\u548c"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/greatest-sum-divisible-by-three",children:"1262.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u6700\u5927\u548c"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u6392\u5e8f",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums\uff0c\u8bf7\u4f60\u627e\u51fa\u5e76\u8fd4\u56de\u80fd\u88ab\u4e09\u6574\u9664\u7684\u5143\u7d20\u6700\u5927\u548c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-19"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a26MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6c42\u51fa\u603b\u548c\uff0c\u6a213\u5224\u65ad\u591a\u4e86\u7684\u6570\u5b57\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxSumDivThree(vector<int>& nums) {\n        int sum = 0;\n        vector<int> v1, v2;\n        for (auto &num : nums) {\n            sum += num;\n            switch (num % 3) {\n                case 1: v1.push_back(num); break;\n                case 2: v2.push_back(num); break;\n            }\n        }\n        if (sum % 3 == 0) return sum;\n        sort(v1.begin(), v1.end());\n        sort(v2.begin(), v2.end());\n        if (sum % 3 == 2) swap(v1, v2);\n        int res = v1.size() ? sum - v1[0] : 0;\n        if (v2.size() > 1) res = max(res, sum - v2[0] - v2[1]);\n        return res;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-19"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a36MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp\u8868\u793a\u4f59i\u4e2a\u6570\u7684\u65f6\u5019\u7684\u6700\u5927\u548c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxSumDivThree(vector<int>& nums) {\n        vector<int> dp = {0, INT_MIN, INT_MIN};\n        for (auto &num : nums) {\n            auto nextDp = dp;\n            for (int i = 0; i < 3; i++) {\n                int idx = (i + num) % 3;\n                nextDp[idx] = max(nextDp[idx], dp[i] + num);\n            }\n            dp = nextDp;\n        }\n        return dp[0];\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>l});var t=s(30758);const i={},r=t.createContext(i);function c(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);