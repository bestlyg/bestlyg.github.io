"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[12432],{19028:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=i(86070),t=i(25710);const l={},r="2547.\u62c6\u5206\u6570\u7ec4\u7684\u6700\u5c0f\u4ee3\u4ef7",c={id:"leetcode/2501-2600/\u62c6\u5206\u6570\u7ec4\u7684\u6700\u5c0f\u4ee3\u4ef7",title:"2547.\u62c6\u5206\u6570\u7ec4\u7684\u6700\u5c0f\u4ee3\u4ef7",description:"\u94fe\u63a5\uff1a2547.\u62c6\u5206\u6570\u7ec4\u7684\u6700\u5c0f\u4ee3\u4ef7",source:"@site/docs/leetcode/2501-2600/2547.\u62c6\u5206\u6570\u7ec4\u7684\u6700\u5c0f\u4ee3\u4ef7.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u62c6\u5206\u6570\u7ec4\u7684\u6700\u5c0f\u4ee3\u4ef7",permalink:"/docs/leetcode/2501-2600/\u62c6\u5206\u6570\u7ec4\u7684\u6700\u5c0f\u4ee3\u4ef7",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2547,frontMatter:{},sidebar:"journal",previous:{title:"2546.\u6267\u884c\u9010\u4f4d\u8fd0\u7b97\u4f7f\u5b57\u7b26\u4e32\u76f8\u7b49",permalink:"/docs/leetcode/2501-2600/\u6267\u884c\u9010\u4f4d\u8fd0\u7b97\u4f7f\u5b57\u7b26\u4e32\u76f8\u7b49"},next:{title:"2549.\u7edf\u8ba1\u684c\u9762\u4e0a\u7684\u4e0d\u540c\u6570\u5b57",permalink:"/docs/leetcode/2501-2600/\u7edf\u8ba1\u684c\u9762\u4e0a\u7684\u4e0d\u540c\u6570\u5b57"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"2547\u62c6\u5206\u6570\u7ec4\u7684\u6700\u5c0f\u4ee3\u4ef7",children:"2547.\u62c6\u5206\u6570\u7ec4\u7684\u6700\u5c0f\u4ee3\u4ef7"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/minimum-cost-to-split-an-array",children:"2547.\u62c6\u5206\u6570\u7ec4\u7684\u6700\u5c0f\u4ee3\u4ef7"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u52a8\u6001\u89c4\u5212\u3001\u8ba1\u6570",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u627e\u51fa\u5e76\u8fd4\u56de\u62c6\u5206 nums \u7684\u6240\u6709\u53ef\u884c\u65b9\u6848\u4e2d\u7684\u6700\u5c0f\u4ee3\u4ef7\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-22"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1576ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a306MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp\u5224\u65ad\u6bcf\u4e2a\u6570\u7ec4\u4f5c\u4e3a\u7ed3\u5c3e\u65f6\u7684\u6700\u5c0f\u5f00\u9500\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n public:\n     int minCost(vector<int>& nums, int k) {\n         int n = nums.size();\n         vector<int> dp(n + 1, 0x3f3f3f3f);\n         dp[0] = 0;\n         for (int i = 1; i <= n; i++) {\n             unordered_map<int, int> m;\n             int sum = 0;\n             for (int j = i; j >= 1; j--) {\n                 m[nums[j - 1]]++;\n                 if (m[nums[j - 1]] == 2) sum += 2;\n                 else if (m[nums[j - 1]] > 2) sum += 1;\n                 dp[i] = min(dp[i], dp[j - 1] + k + sum);\n             }\n         }\n         return dp[n];\n     }\n };\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-22"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a5948ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.1MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\ndef minCost(self, nums: List[int], k: int) -> int:\n    n = len(nums)\n    dp = [0x3f3f3f3f for _ in range(n + 1)]\n    dp[0] = 0\n    for i in range(1, n + 1):\n        m = Counter()\n        sum = 0\n        for j in range(i, 0, -1):\n            num = nums[j-1]\n            m[num] += 1\n            if m[num] == 2:\n                sum += 2\n            elif m[num] > 2:\n                sum += 1\n            dp[i] = min(dp[i], dp[j - 1] + k + sum)\n    return dp[n]\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-22"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a312ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn min_cost(nums: Vec<i32>, k: i32) -> i32 {\n        use std::collections::HashMap;\n        let n = nums.len();\n        let mut dp = vec![0x3f3f3f3f;n + 1];\n        dp[0] = 0;\n        for i in 1..=n {\n            let mut m = HashMap::<i32,i32>::new();\n            let mut sum = 0;\n            let mut j = i;\n            while j >= 1 {\n                let num = nums[j-1];\n                let val = m.entry(num).or_insert(0);\n                *val += 1;\n                if *val == 2 {\n                    sum += 2;\n                } else if *val > 2 {\n                    sum += 1;\n                }\n                dp[i] = dp[i].min(dp[j - 1] + k + sum);\n                j-=1;\n            }\n        }\n        dp[n]\n    }\n}\n"})})]})}function m(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var s=i(30758);const t={},l=s.createContext(t);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);