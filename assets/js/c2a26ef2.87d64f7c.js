"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[67690],{38698:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"leetcode/1601-1700/\u6700\u5c0f\u4f53\u529b\u6d88\u8017\u8def\u5f84","title":"1631.\u6700\u5c0f\u4f53\u529b\u6d88\u8017\u8def\u5f84","description":"\u94fe\u63a5\uff1a1631.\u6700\u5c0f\u4f53\u529b\u6d88\u8017\u8def\u5f84","source":"@site/docs/leetcode/1601-1700/1631.\u6700\u5c0f\u4f53\u529b\u6d88\u8017\u8def\u5f84.md","sourceDirName":"leetcode/1601-1700","slug":"/leetcode/1601-1700/\u6700\u5c0f\u4f53\u529b\u6d88\u8017\u8def\u5f84","permalink":"/docs/leetcode/1601-1700/\u6700\u5c0f\u4f53\u529b\u6d88\u8017\u8def\u5f84","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1631,"frontMatter":{},"sidebar":"journal","previous":{"title":"1630.\u7b49\u5dee\u5b50\u6570\u7ec4","permalink":"/docs/leetcode/1601-1700/\u7b49\u5dee\u5b50\u6570\u7ec4"},"next":{"title":"1632.\u77e9\u9635\u8f6c\u6362\u540e\u7684\u79e9","permalink":"/docs/leetcode/1601-1700/\u77e9\u9635\u8f6c\u6362\u540e\u7684\u79e9"}}');var l=s(25105),t=s(8556);const r={},c="1631.\u6700\u5c0f\u4f53\u529b\u6d88\u8017\u8def\u5f84",o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"1631\u6700\u5c0f\u4f53\u529b\u6d88\u8017\u8def\u5f84",children:"1631.\u6700\u5c0f\u4f53\u529b\u6d88\u8017\u8def\u5f84"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(e.a,{href:"https://leetcode.cn/problems/path-with-minimum-effort",children:"1631.\u6700\u5c0f\u4f53\u529b\u6d88\u8017\u8def\u5f84"}),(0,l.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,l.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e76\u67e5\u96c6\u3001\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u77e9\u9635\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,l.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4e00\u6761\u8def\u5f84\u8017\u8d39\u7684 \u4f53\u529b\u503c \u662f\u8def\u5f84\u4e0a\u76f8\u90bb\u683c\u5b50\u4e4b\u95f4 \u9ad8\u5ea6\u5dee\u7edd\u5bf9\u503c \u7684 \u6700\u5927\u503c \u51b3\u5b9a\u7684\u3002\u8bf7\u4f60\u8fd4\u56de\u4ece\u5de6\u4e0a\u89d2\u8d70\u5230\u53f3\u4e0b\u89d2\u7684\u6700\u5c0f \u4f53\u529b\u6d88\u8017\u503c \u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-12"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a120ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a89.23MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> secondGreaterElement(vector<int>& nums) {\n        vector<int> s1, s2, s3, res(nums.size(), -1);\n        for (int i = 0; i < nums.size(); i++) {\n            while (s2.size() && nums[s2.back()] < nums[i]) res[s2.back()] = nums[i], s2.pop_back();\n            while (s1.size() && nums[s1.back()] < nums[i]) s3.push_back(s1.back()), s1.pop_back();\n            while (s3.size()) s2.push_back(s3.back()), s3.pop_back();\n            s1.push_back(i);\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-12"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a260ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a29.27MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e24\u4e2a\u5355\u8c03\u6808\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def secondGreaterElement(self, nums: List[int]) -> List[int]:\n        s1, s2, s3 = [], [], []\n        res = [-1] * len(nums)\n        for i in range(len(nums)):\n            while s2 and nums[s2[-1]] < nums[i]: res[s2.pop()] = nums[i]\n            while s1 and nums[s1[-1]] < nums[i]: s3.append(s1.pop())\n            while s3: s2.append(s3.pop())\n            s1.append(i)\n        return res\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-12"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a44ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a4.16MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn second_greater_element(nums: Vec<i32>) -> Vec<i32> {\n        let mut s1 = vec![];\n        let mut s2 = vec![];\n        let mut s3 = vec![];\n        let mut res = vec![-1; nums.len()];\n        for i in 0..nums.len() {\n            while !s2.is_empty() && nums[*s2.last().unwrap()] < nums[i] {\n                res[s2.pop().unwrap()] = nums[i];\n            }\n            while !s1.is_empty() && nums[*s1.last().unwrap()] < nums[i] {\n                s3.push(s1.pop().unwrap());\n            }\n            while !s3.is_empty() {\n                s2.push(s3.pop().unwrap());\n            }\n            s1.push(i);\n        }\n        res\n    }\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(p,{...n})}):p(n)}},8556:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>c});var i=s(58101);const l={},t=i.createContext(l);function r(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);