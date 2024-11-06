"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[4397],{28163:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(86070),i=t(31503);const r={},a="2523.\u8303\u56f4\u5185\u6700\u63a5\u8fd1\u7684\u4e24\u4e2a\u8d28\u6570",l={id:"leetcode/2501-2600/\u8303\u56f4\u5185\u6700\u63a5\u8fd1\u7684\u4e24\u4e2a\u8d28\u6570",title:"2523.\u8303\u56f4\u5185\u6700\u63a5\u8fd1\u7684\u4e24\u4e2a\u8d28\u6570",description:"\u94fe\u63a5\uff1a2523.\u8303\u56f4\u5185\u6700\u63a5\u8fd1\u7684\u4e24\u4e2a\u8d28\u6570",source:"@site/docs/leetcode/2501-2600/2523.\u8303\u56f4\u5185\u6700\u63a5\u8fd1\u7684\u4e24\u4e2a\u8d28\u6570.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u8303\u56f4\u5185\u6700\u63a5\u8fd1\u7684\u4e24\u4e2a\u8d28\u6570",permalink:"/docs/leetcode/2501-2600/\u8303\u56f4\u5185\u6700\u63a5\u8fd1\u7684\u4e24\u4e2a\u8d28\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2523,frontMatter:{},sidebar:"journal",previous:{title:"2522.\u5c06\u5b57\u7b26\u4e32\u5206\u5272\u6210\u503c\u4e0d\u8d85\u8fc7K\u7684\u5b50\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/2501-2600/\u5c06\u5b57\u7b26\u4e32\u5206\u5272\u6210\u503c\u4e0d\u8d85\u8fc7K\u7684\u5b50\u5b57\u7b26\u4e32"},next:{title:"2525.\u6839\u636e\u89c4\u5219\u5c06\u7bb1\u5b50\u5206\u7c7b",permalink:"/docs/leetcode/2501-2600/\u6839\u636e\u89c4\u5219\u5c06\u7bb1\u5b50\u5206\u7c7b"}},c={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - rust",id:"\u9898\u89e3-2---rust",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"2523\u8303\u56f4\u5185\u6700\u63a5\u8fd1\u7684\u4e24\u4e2a\u8d28\u6570",children:"2523.\u8303\u56f4\u5185\u6700\u63a5\u8fd1\u7684\u4e24\u4e2a\u8d28\u6570"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/closest-prime-numbers-in-range",children:"2523.\u8303\u56f4\u5185\u6700\u63a5\u8fd1\u7684\u4e24\u4e2a\u8d28\u6570"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u6570\u8bba",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u6b63\u6574\u6570\u6570\u7ec4 ans = [nums1, nums2] \u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-01"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a248ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a10.2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8ba1\u7b97\u8d28\u6570\u8868\u540e\u7edf\u8ba1\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int dp[1000005] = {0};\n    int left, right;\n    void load() {\n        for (int i = 2; i <= right; i++) {\n            if (dp[i] == 0) dp[++dp[0]] = i;\n            for (int j = 1; j <= dp[0] && i * dp[j] < 1000005; j++) {\n                dp[i * dp[j]] = 1;\n                if (i % dp[j] == 0) break;\n            }\n        }\n    }\n    vector<int> closestPrimes(int left, int right) {\n        this->left = left;\n        this->right = right;\n        load();\n        int start = 1;\n        while (start <= dp[0] && dp[start] < left) start++;\n        start++;\n        vector<int> ans(2, -1);\n        if (start > dp[0]) return ans;\n        ans[0] = dp[start - 1]; ans[1] = dp[start];\n        for (int i = start + 1; i <= dp[0] && dp[i] <= right; i++) {\n            if (dp[i] - dp[i - 1] < ans[1] - ans[0]) {\n                ans[0] = dp[i - 1];\n                ans[1] = dp[i];\n            }\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---rust",children:"\u9898\u89e3 2 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-01"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a180ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.6MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn closest_primes(left: i32, right: i32) -> Vec<i32> {\n        let primes = Solution::get_primes(right as usize);\n        let mut start = 1;\n        while start <= primes[0] && primes[start] < left as usize {\n            start += 1;\n        }\n        let mut ans: Vec<i32> = vec![-1; 2];\n        if start + 1 <= primes[0] {\n            start += 1;\n            ans[0] = primes[start - 1] as i32;\n            ans[1] = primes[start] as i32;\n            while start + 1 <= primes[0] {\n                start += 1;\n                if ((primes[start] - primes[start - 1]) as i32) < ans[1] - ans[0] {\n                    ans[0] = primes[start - 1] as i32;\n                    ans[1] = primes[start] as i32;\n                }\n            }\n        }\n        ans\n    }\n    fn get_primes(max: usize) -> Vec<usize> {\n        let mut ans = vec![0; 1000005];\n        for i in 2..=max {\n            if ans[i] == 0 {\n                ans[0] += 1;\n                let idx = ans[0];\n                ans[idx] = i;\n            }\n            for j in 1..=ans[0] {\n                if ans[j] * i >= 1000005 {\n                    break;\n                }\n                let idx = ans[j] * i;\n                ans[idx] = 1;\n                if i % ans[j] == 0 {\n                    break;\n                }\n            }\n        }\n        ans\n    }\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>l});var s=t(30758);const i={},r=s.createContext(i);function a(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);