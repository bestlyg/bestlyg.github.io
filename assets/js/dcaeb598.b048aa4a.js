"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[41066],{93831:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"leetcode/2101-2200/\u8fd8\u539f\u539f\u6570\u7ec4","title":"2122.\u8fd8\u539f\u539f\u6570\u7ec4","description":"\u94fe\u63a5\uff1a2122.\u8fd8\u539f\u539f\u6570\u7ec4","source":"@site/docs/leetcode/2101-2200/2122.\u8fd8\u539f\u539f\u6570\u7ec4.md","sourceDirName":"leetcode/2101-2200","slug":"/leetcode/2101-2200/\u8fd8\u539f\u539f\u6570\u7ec4","permalink":"/docs/leetcode/2101-2200/\u8fd8\u539f\u539f\u6570\u7ec4","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2122,"frontMatter":{},"sidebar":"journal","previous":{"title":"2120.\u6267\u884c\u6240\u6709\u540e\u7f00\u6307\u4ee4","permalink":"/docs/leetcode/2101-2200/\u6267\u884c\u6240\u6709\u540e\u7f00\u6307\u4ee4"},"next":{"title":"2125.\u94f6\u884c\u4e2d\u7684\u6fc0\u5149\u675f\u6570\u91cf","permalink":"/docs/leetcode/2101-2200/\u94f6\u884c\u4e2d\u7684\u6fc0\u5149\u675f\u6570\u91cf"}}');var s=t(86070),i=t(31503);const o={},c="2122.\u8fd8\u539f\u539f\u6570\u7ec4",l={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"2122\u8fd8\u539f\u539f\u6570\u7ec4",children:"2122.\u8fd8\u539f\u539f\u6570\u7ec4"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/recover-the-original-array",children:"2122.\u8fd8\u539f\u539f\u6570\u7ec4"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u679a\u4e3e\u3001\u6392\u5e8f",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u7531 2n \u4e2a\u6574\u6570\u7ec4\u6210\u7684\u6574\u6570\u6570\u7ec4 nums \uff0c\u5176\u4e2d \u6070\u597d n \u4e2a\u6574\u6570\u51fa\u73b0\u5728 lower \uff0c\u5269\u4e0b\u7684\u51fa\u73b0\u5728 higher \uff0c\u8fd8\u539f\u5e76\u8fd4\u56de \u539f\u6570\u7ec4 arr \u3002\u5982\u679c\u51fa\u73b0\u7b54\u6848\u4e0d\u552f\u4e00\u7684\u60c5\u51b5\uff0c\u8fd4\u56de \u4efb\u4e00 \u6709\u6548\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-31"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a880ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a285.8MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5b58\u5165 map \u5206\u522b\u7edf\u8ba1\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int get_k(unordered_map<int, int> m, vector<int>& nums, int k,\n              vector<int>& ans) {\n        for (int i = 0; i < nums.size(); i++) {\n            int low = nums[i];\n            if (m.count(low) == 0 || m[low] <= 0) continue;\n            int high = low + 2 * k;\n            if (m.count(high) == 0 || m[high] <= 0) return 0;\n            m[low]--;\n            m[high]--;\n            ans.push_back(low + k);\n        }\n        return k;\n    }\n    vector<int> recoverArray(vector<int>& nums) {\n        unordered_map<int, int> m;\n        for (auto& num : nums) m[num]++;\n        sort(nums.begin(), nums.end());\n        vector<int> ans;\n        int v1 = nums[0], v2, k = 0;\n        for (int i = 1; i < nums.size() && k == 0; i++) {\n            ans.clear();\n            v2 = nums[i];\n            if ((v2 - v1) & 1 || (v2 - v1) <= 1) continue;\n            k = get_k(m, nums, (v2 - v1) / 2, ans);\n        }\n        return ans;\n    }\n};\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var r=t(30758);const s={},i=r.createContext(s);function o(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);