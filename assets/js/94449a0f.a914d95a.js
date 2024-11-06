"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[73572],{59157:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(86070),r=t(31503);const i={},l="719.\u627e\u51fa\u7b2cK\u5c0f\u7684\u6570\u5bf9\u8ddd\u79bb",c={id:"leetcode/701-800/\u627e\u51fa\u7b2cK\u5c0f\u7684\u6570\u5bf9\u8ddd\u79bb",title:"719.\u627e\u51fa\u7b2cK\u5c0f\u7684\u6570\u5bf9\u8ddd\u79bb",description:"\u94fe\u63a5\uff1a719.\u627e\u51fa\u7b2cK\u5c0f\u7684\u6570\u5bf9\u8ddd\u79bb",source:"@site/docs/leetcode/701-800/719.\u627e\u51fa\u7b2cK\u5c0f\u7684\u6570\u5bf9\u8ddd\u79bb.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u627e\u51fa\u7b2cK\u5c0f\u7684\u6570\u5bf9\u8ddd\u79bb",permalink:"/docs/leetcode/701-800/\u627e\u51fa\u7b2cK\u5c0f\u7684\u6570\u5bf9\u8ddd\u79bb",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:719,frontMatter:{},sidebar:"journal",previous:{title:"718.\u6700\u957f\u91cd\u590d\u5b50\u6570\u7ec4",permalink:"/docs/leetcode/701-800/\u6700\u957f\u91cd\u590d\u5b50\u6570\u7ec4"},next:{title:"720.\u8bcd\u5178\u4e2d\u6700\u957f\u7684\u5355\u8bcd",permalink:"/docs/leetcode/701-800/\u8bcd\u5178\u4e2d\u6700\u957f\u7684\u5355\u8bcd"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"719\u627e\u51fa\u7b2ck\u5c0f\u7684\u6570\u5bf9\u8ddd\u79bb",children:"719.\u627e\u51fa\u7b2cK\u5c0f\u7684\u6570\u5bf9\u8ddd\u79bb"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/find-k-th-smallest-pair-distance",children:"719.\u627e\u51fa\u7b2cK\u5c0f\u7684\u6570\u5bf9\u8ddd\u79bb"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u4e8c\u5206\u67e5\u627e\u3001\u6392\u5e8f",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de \u6240\u6709\u6570\u5bf9\u8ddd\u79bb\u4e2d \u7b2c k \u5c0f\u7684\u6570\u5bf9\u8ddd\u79bb\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-06-15"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.7MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\uff0c\u5bf9\u4e8e\u6bcf\u4e00\u79cd\u5dee\u503c\uff0c\u8ba1\u7b97\u53ef\u80fd\u7684\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int smallestDistancePair(vector<int>& nums, int k) {\n        sort(nums.begin(), nums.end());\n        int n = nums.size(), l = 0, r = nums[n - 1] - nums[0], m;\n        while (l < r) {\n            m = (l + r) >> 1;\n            int cnt = 0;\n            for (int i = 0; i < n; i++) cnt += i - bs(nums, i, nums[i] - m);\n            if (cnt >= k)\n                r = m;\n            else\n                l = m + 1;\n        }\n        return l;\n    }\n    int bs(vector<int>& nums, int r, int target) {\n        int l = 0, m;\n        while (l < r) {\n            m = (l + r) >> 1;\n            if (nums[m] >= target)\n                r = m;\n            else\n                l = m + 1;\n        }\n        return l;\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var s=t(30758);const r={},i=s.createContext(r);function l(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);