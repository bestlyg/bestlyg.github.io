"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[18501],{54844:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"leetcode/701-800/\u81f3\u5c11\u662f\u5176\u4ed6\u6570\u5b57\u4e24\u500d\u7684\u6700\u5927\u6570","title":"747.\u81f3\u5c11\u662f\u5176\u4ed6\u6570\u5b57\u4e24\u500d\u7684\u6700\u5927\u6570","description":"\u94fe\u63a5\uff1a747.\u81f3\u5c11\u662f\u5176\u4ed6\u6570\u5b57\u4e24\u500d\u7684\u6700\u5927\u6570","source":"@site/docs/leetcode/701-800/747.\u81f3\u5c11\u662f\u5176\u4ed6\u6570\u5b57\u4e24\u500d\u7684\u6700\u5927\u6570.md","sourceDirName":"leetcode/701-800","slug":"/leetcode/701-800/\u81f3\u5c11\u662f\u5176\u4ed6\u6570\u5b57\u4e24\u500d\u7684\u6700\u5927\u6570","permalink":"/docs/leetcode/701-800/\u81f3\u5c11\u662f\u5176\u4ed6\u6570\u5b57\u4e24\u500d\u7684\u6700\u5927\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":747,"frontMatter":{},"sidebar":"journal","previous":{"title":"746.\u4f7f\u7528\u6700\u5c0f\u82b1\u8d39\u722c\u697c\u68af","permalink":"/docs/leetcode/701-800/\u4f7f\u7528\u6700\u5c0f\u82b1\u8d39\u722c\u697c\u68af"},"next":{"title":"748.\u6700\u77ed\u8865\u5168\u8bcd","permalink":"/docs/leetcode/701-800/\u6700\u77ed\u8865\u5168\u8bcd"}}');var t=i(86070),s=i(31503);const c={},l="747.\u81f3\u5c11\u662f\u5176\u4ed6\u6570\u5b57\u4e24\u500d\u7684\u6700\u5927\u6570",o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"747\u81f3\u5c11\u662f\u5176\u4ed6\u6570\u5b57\u4e24\u500d\u7684\u6700\u5927\u6570",children:"747.\u81f3\u5c11\u662f\u5176\u4ed6\u6570\u5b57\u4e24\u500d\u7684\u6700\u5927\u6570"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/largest-number-at-least-twice-of-others",children:"747.\u81f3\u5c11\u662f\u5176\u4ed6\u6570\u5b57\u4e24\u500d\u7684\u6700\u5927\u6570"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6392\u5e8f",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \uff0c\u5176\u4e2d\u603b\u662f\u5b58\u5728 \u552f\u4e00\u7684 \u4e00\u4e2a\u6700\u5927\u6574\u6570 \u3002\u8bf7\u4f60\u627e\u51fa\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u5143\u7d20\u5e76\u68c0\u67e5\u5b83\u662f\u5426 \u81f3\u5c11\u662f\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5176\u4ed6\u6570\u5b57\u7684\u4e24\u500d \u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-01-13"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a10.5MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u4e24\u6b21\uff0c\u7b2c\u4e00\u6b21\u8bb0\u5f55\u6700\u5927\u503c\uff0c\u7b2c\u4e8c\u6b21\u5224\u65ad\u5176\u4ed6\u503c\u7684\u4e24\u500d\u662f\u5426\u8d85\u8fc7\u6700\u5927\u503c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int dominantIndex(vector<int>& nums) {\n        int maxn = INT_MIN, maxi;\n        for (int i = 0; i < nums.size(); i++) {\n            if (nums[i] > maxn) {\n                maxn = nums[i];\n                maxi = i;\n            }\n        }\n        for (auto& num : nums) {\n            if (num != maxn && num * 2 > maxn) return -1;\n        }\n        return maxi;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-01-13"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a10.7MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int dominantIndex(vector<int>& nums) {\n        int n = nums.size();\n        if (n == 1) return 0;\n        int arr[n];\n        for (int i = 0; i < n; i++) arr[i] = i;\n        sort(arr, arr + n,\n             [&](int i1, int i2) -> bool { return nums[i1] < nums[i2]; });\n        return nums[arr[n - 1]] >= nums[arr[n - 2]] * 2 ? arr[n - 1] : -1;\n    }\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>l});var r=i(30758);const t={},s=r.createContext(t);function c(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);