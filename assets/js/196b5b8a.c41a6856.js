"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[38121],{55992:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(86070),i=t(25710);const r={},c="798.\u5f97\u5206\u6700\u9ad8\u7684\u6700\u5c0f\u8f6e\u8c03",o={id:"leetcode/701-800/\u5f97\u5206\u6700\u9ad8\u7684\u6700\u5c0f\u8f6e\u8c03",title:"798.\u5f97\u5206\u6700\u9ad8\u7684\u6700\u5c0f\u8f6e\u8c03",description:"\u94fe\u63a5\uff1a798.\u5f97\u5206\u6700\u9ad8\u7684\u6700\u5c0f\u8f6e\u8c03",source:"@site/docs/leetcode/701-800/798.\u5f97\u5206\u6700\u9ad8\u7684\u6700\u5c0f\u8f6e\u8c03.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u5f97\u5206\u6700\u9ad8\u7684\u6700\u5c0f\u8f6e\u8c03",permalink:"/docs/leetcode/701-800/\u5f97\u5206\u6700\u9ad8\u7684\u6700\u5c0f\u8f6e\u8c03",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:798,frontMatter:{},sidebar:"journal",previous:{title:"797.\u6240\u6709\u53ef\u80fd\u7684\u8def\u5f84",permalink:"/docs/leetcode/701-800/\u6240\u6709\u53ef\u80fd\u7684\u8def\u5f84"},next:{title:"799.\u9999\u69df\u5854",permalink:"/docs/leetcode/701-800/\u9999\u69df\u5854"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"798\u5f97\u5206\u6700\u9ad8\u7684\u6700\u5c0f\u8f6e\u8c03",children:"798.\u5f97\u5206\u6700\u9ad8\u7684\u6700\u5c0f\u8f6e\u8c03"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/smallest-rotation-with-highest-score",children:"798.\u5f97\u5206\u6700\u9ad8\u7684\u6700\u5c0f\u8f6e\u8c03"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u524d\u7f00\u548c",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5728\u6240\u6709\u53ef\u80fd\u7684\u8f6e\u8c03\u4e2d\uff0c\u8fd4\u56de\u6211\u4eec\u6240\u80fd\u5f97\u5230\u7684\u6700\u9ad8\u5206\u6570\u5bf9\u5e94\u7684\u8f6e\u8c03\u4e0b\u6807 k \u3002\u5982\u679c\u6709\u591a\u4e2a\u7b54\u6848\uff0c\u8fd4\u56de\u6ee1\u8db3\u6761\u4ef6\u7684\u6700\u5c0f\u7684\u4e0b\u6807 k \u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-09"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a70.1MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7edf\u8ba1\u6bcf\u4e2a\u70b9\u53ef\u5b9e\u73b0\u7684 k \u533a\u95f4\uff0c\u5229\u7528\u5dee\u5206\u52a0\u901f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int list[100001] = {0};\n    int bestRotation(vector<int>& nums) {\n        int n = nums.size();\n        for (int i = 0; i < n; i++) {\n            if (i >= nums[i]) {\n                list[0]++;\n                list[i - nums[i] + 1]--;\n            }\n            list[i + 1]++;\n            list[min(i + n - nums[i] + 1, n)]--;\n        }\n        int ans = 0, ansnum = 0, sum = 0;\n        for (int i = 1; i <= n; i++) {\n            sum += list[i];\n            if (sum > ansnum) {\n                ans = i;\n                ansnum = sum;\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var s=t(30758);const i={},r=s.createContext(i);function c(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);