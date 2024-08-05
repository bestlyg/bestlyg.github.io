"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[65057],{89294:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=s(86070),t=s(25710);const r={},l="2760.\u6700\u957f\u5947\u5076\u5b50\u6570\u7ec4",c={id:"leetcode/2701-2800/\u6700\u957f\u5947\u5076\u5b50\u6570\u7ec4",title:"2760.\u6700\u957f\u5947\u5076\u5b50\u6570\u7ec4",description:"\u94fe\u63a5\uff1a2760.\u6700\u957f\u5947\u5076\u5b50\u6570\u7ec4",source:"@site/docs/leetcode/2701-2800/2760.\u6700\u957f\u5947\u5076\u5b50\u6570\u7ec4.md",sourceDirName:"leetcode/2701-2800",slug:"/leetcode/2701-2800/\u6700\u957f\u5947\u5076\u5b50\u6570\u7ec4",permalink:"/docs/leetcode/2701-2800/\u6700\u957f\u5947\u5076\u5b50\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2760,frontMatter:{},sidebar:"journal",previous:{title:"2748.\u7f8e\u4e3d\u4e0b\u6807\u5bf9\u7684\u6570\u76ee",permalink:"/docs/leetcode/2701-2800/\u7f8e\u4e3d\u4e0b\u6807\u5bf9\u7684\u6570\u76ee"},next:{title:"2761.\u548c\u7b49\u4e8e\u76ee\u6807\u503c\u7684\u8d28\u6570\u5bf9",permalink:"/docs/leetcode/2701-2800/\u548c\u7b49\u4e8e\u76ee\u6807\u503c\u7684\u8d28\u6570\u5bf9"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2},{value:"\u9898\u89e3 4 - python",id:"\u9898\u89e3-4---python",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"2760\u6700\u957f\u5947\u5076\u5b50\u6570\u7ec4",children:"2760.\u6700\u957f\u5947\u5076\u5b50\u6570\u7ec4"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/longest-even-odd-subarray-with-threshold",children:"2760.\u6700\u957f\u5947\u5076\u5b50\u6570\u7ec4"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6ed1\u52a8\u7a97\u53e3",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u7684\u6574\u6570\u6570\u7ec4 nums \u548c\u4e00\u4e2a\u6574\u6570 threshold \u3002\u4ee5\u6574\u6570\u5f62\u5f0f\u8fd4\u56de\u6ee1\u8db3\u9898\u76ee\u8981\u6c42\u7684\u6700\u957f\u5b50\u6570\u7ec4\u7684\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-02"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a88.9MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int longestAlternatingSubarray(vector<int>& nums, int threshold) {\n        int n = nums.size(), res = 0;\n        for (int i = 0; i < n; i++) {\n            if (nums[i] % 2 != 0 || nums[i] > threshold) continue;\n            int cnt = 1;\n            for (int j = i + 1; j < n; j++) {\n                if (nums[j] % 2 == nums[j - 1] % 2 || nums[j] > threshold) break;\n                cnt++;\n            }\n            res = max(res, cnt);\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-02"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a296ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def longestAlternatingSubarray(self, nums: List[int], threshold: int) -> int:\n        n = len(nums)\n        res = 0\n        for i in range(n):\n            if nums[i] % 2 != 0 or nums[i] > threshold:\n                continue\n            cnt = 1\n            for j in range(i+1, n):\n                if nums[j] % 2 == nums[j-1] % 2 or nums[j] > threshold:\n                    break\n                cnt += 1\n            res = max(res, cnt)\n        return res\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-02"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a1.9MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn longest_alternating_subarray(nums: Vec<i32>, threshold: i32) -> i32 {\n        let n = nums.len();\n        let mut res = 0;\n        for i in 0..n {\n            if nums[i] % 2 != 0 || nums[i] > threshold {\n                continue;\n            }\n            let mut cnt = 1;\n            for j in i + 1..n {\n                if nums[j] % 2 == nums[j - 1] % 2 || nums[j] > threshold {\n                    break;\n                }\n                cnt += 1;\n            }\n            res = res.max(cnt);\n        }\n        res\n    }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-4---python",children:"\u9898\u89e3 4 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-11-16"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.67MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def longestAlternatingSubarray(self, nums: List[int], threshold: int) -> int:\n        n = len(nums)\n        i = 0\n        ans = 0\n        while i < n:\n            if nums[i] <= threshold and nums[i] % 2 == 0:\n                start = i\n                while i + 1 < n and nums[i + 1] % 2 != nums[i] % 2 and nums[i + 1] <= threshold:\n                    i += 1\n                ans = max(ans, i - start + 1)\n            i += 1\n        return ans\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var i=s(30758);const t={},r=i.createContext(t);function l(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);