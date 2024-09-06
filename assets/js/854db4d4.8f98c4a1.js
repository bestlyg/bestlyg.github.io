"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[35200],{25518:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var t=i(86070),s=i(25710);const r={},l="795.\u533a\u95f4\u5b50\u6570\u7ec4\u4e2a\u6570",c={id:"leetcode/701-800/\u533a\u95f4\u5b50\u6570\u7ec4\u4e2a\u6570",title:"795.\u533a\u95f4\u5b50\u6570\u7ec4\u4e2a\u6570",description:"\u94fe\u63a5\uff1a795.\u533a\u95f4\u5b50\u6570\u7ec4\u4e2a\u6570",source:"@site/docs/leetcode/701-800/795.\u533a\u95f4\u5b50\u6570\u7ec4\u4e2a\u6570.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u533a\u95f4\u5b50\u6570\u7ec4\u4e2a\u6570",permalink:"/docs/leetcode/701-800/\u533a\u95f4\u5b50\u6570\u7ec4\u4e2a\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:795,frontMatter:{},sidebar:"journal",previous:{title:"794.\u6709\u6548\u7684\u4e95\u5b57\u6e38\u620f",permalink:"/docs/leetcode/701-800/\u6709\u6548\u7684\u4e95\u5b57\u6e38\u620f"},next:{title:"796.\u65cb\u8f6c\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/701-800/\u65cb\u8f6c\u5b57\u7b26\u4e32"}},o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"795\u533a\u95f4\u5b50\u6570\u7ec4\u4e2a\u6570",children:"795.\u533a\u95f4\u5b50\u6570\u7ec4\u4e2a\u6570"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/number-of-subarrays-with-bounded-maximum",children:"795.\u533a\u95f4\u5b50\u6570\u7ec4\u4e2a\u6570"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u53cc\u6307\u9488",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \u548c\u4e24\u4e2a\u6574\u6570\uff1aleft \u53ca right \u3002\u627e\u51fa nums \u4e2d\u8fde\u7eed\u3001\u975e\u7a7a\u4e14\u5176\u4e2d\u6700\u5927\u5143\u7d20\u5728\u8303\u56f4 \xa0[left, right] \u5185\u7684\u5b50\u6570\u7ec4\uff0c\u5e76\u8fd4\u56de\u6ee1\u8db3\u6761\u4ef6\u7684\u5b50\u6570\u7ec4\u7684\u4e2a\u6570\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-24"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a108ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a56.3MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5355\u8c03\u6808\u6c42\u51fa\u6bcf\u4e2a\u70b9\u6700\u8fd1\u6bd4\u4ed6\u5927\u7684\u5de6\u503c\u548c\u53f3\u503c\uff0c\u5224\u65ad\u5f53\u524d\u70b9\u662f\u6700\u5927\u503c\u7684\u60c5\u51b5\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int numSubarrayBoundedMax(vector<int>& nums, int left, int right) {\n        int n = nums.size(), ans = 0;\n        vector<int> llist(n, -1), rlist(n, n);\n        stack<int> s;\n        for (int i = 0; i < n; i++) {\n            while (s.size() && nums[s.top()] <= nums[i]) {\n                rlist[s.top()] = i;\n                s.pop();\n            }\n            llist[i] = s.empty() ? -1 : s.top();\n            s.push(i);\n        }\n        for (int i = 0; i < n; i++) {\n            if (nums[i] > right || nums[i] < left) continue;\n            int left = i - llist[i] - 1, right = rlist[i] - i;\n            ans += left + right + (left * (right - 1));\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-24"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a51.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e00\u6b21\u904d\u5386\uff0c\u7edf\u8ba1\u51fa\u4e0d\u5305\u542b>right \u7684\u503c\u4e14\u6700\u5c11\u5305\u542b\u4e00\u4e2a>=left \u7684\u503c\u7684\u4e2a\u6570\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int numSubarrayBoundedMax(vector<int>& nums, int left, int right) {\n        int n = nums.size(), ans = 0, prev = -1, cur = -1;\n        for (int i = 0; i < n; i++) {\n            if (nums[i] <= right && nums[i] >= left) cur = i;\n            else if (nums[i] > right) prev = i, cur = -1;\n            if (cur != -1) ans += cur - prev;\n        }\n        return ans;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var t=i(30758);const s={},r=t.createContext(s);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);