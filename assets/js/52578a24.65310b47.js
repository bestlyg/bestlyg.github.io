"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[96761],{94749:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"leetcode/2301-2400/\u548c\u76f8\u7b49\u7684\u5b50\u6570\u7ec4","title":"2395.\u548c\u76f8\u7b49\u7684\u5b50\u6570\u7ec4","description":"\u94fe\u63a5\uff1a2395.\u548c\u76f8\u7b49\u7684\u5b50\u6570\u7ec4","source":"@site/docs/leetcode/2301-2400/2395.\u548c\u76f8\u7b49\u7684\u5b50\u6570\u7ec4.md","sourceDirName":"leetcode/2301-2400","slug":"/leetcode/2301-2400/\u548c\u76f8\u7b49\u7684\u5b50\u6570\u7ec4","permalink":"/docs/leetcode/2301-2400/\u548c\u76f8\u7b49\u7684\u5b50\u6570\u7ec4","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2395,"frontMatter":{},"sidebar":"journal","previous":{"title":"2391.\u6536\u96c6\u5783\u573e\u7684\u6700\u5c11\u603b\u65f6\u95f4","permalink":"/docs/leetcode/2301-2400/\u6536\u96c6\u5783\u573e\u7684\u6700\u5c11\u603b\u65f6\u95f4"},"next":{"title":"2397.\u88ab\u5217\u8986\u76d6\u7684\u6700\u591a\u884c\u6570","permalink":"/docs/leetcode/2301-2400/\u88ab\u5217\u8986\u76d6\u7684\u6700\u591a\u884c\u6570"}}');var r=s(86070),t=s(31503);const l={},c="2395.\u548c\u76f8\u7b49\u7684\u5b50\u6570\u7ec4",o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"2395\u548c\u76f8\u7b49\u7684\u5b50\u6570\u7ec4",children:"2395.\u548c\u76f8\u7b49\u7684\u5b50\u6570\u7ec4"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/find-subarrays-with-equal-sum",children:"2395.\u548c\u76f8\u7b49\u7684\u5b50\u6570\u7ec4"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 0\xa0\u5f00\u59cb\u7684\u6574\u6570\u6570\u7ec4\xa0nums\xa0\uff0c\u5224\u65ad\u662f\u5426\u5b58\u5728\xa0\u4e24\u4e2a\xa0\u957f\u5ea6\u4e3a\xa02\xa0\u7684\u5b50\u6570\u7ec4\u4e14\u5b83\u4eec\u7684\xa0\u548c\xa0\u76f8\u7b49\u3002\u6ce8\u610f\uff0c\u8fd9\u4e24\u4e2a\u5b50\u6570\u7ec4\u8d77\u59cb\u4f4d\u7f6e\u7684\u4e0b\u6807\u5fc5\u987b\xa0\u4e0d\u76f8\u540c\xa0\u3002\u5982\u679c\u8fd9\u6837\u7684\u5b50\u6570\u7ec4\u5b58\u5728\uff0c\u8bf7\u8fd4\u56de\xa0true\uff0c\u5426\u5219\u8fd4\u56de\xa0false\xa0\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-26"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.6MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool findSubarrays(vector<int>& nums) {\n        unordered_set<int> s;\n        for (int i = 1; i < nums.size(); i++) {\n            int num = nums[i] + nums[i - 1];\n            if (s.count(num)) return true;\n            s.insert(num);\n        }\n        return false;\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-26"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a29.8MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def findSubarrays(self, nums: List[int]) -> bool:\n        s = set()\n        for i in range(1, len(nums)):\n            num = nums[i] + nums[i - 1]\n            if num in s:\n                return True\n            s.add(num)\n        return False\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-26"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn find_subarrays(nums: Vec<i32>) -> bool {\n        let mut s = std::collections::HashSet::<i32>::new();\n        for i in 1..nums.len() {\n            let num = nums[i] + nums[i - 1];\n            if s.contains(&num) {\n                return true;\n            }\n            s.insert(num);\n        }\n        false\n    }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},31503:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var i=s(30758);const r={},t=i.createContext(r);function l(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);