"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[31267],{91032:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>u});var s=i(86070),r=i(25710);const t={},l="2572.\u65e0\u5e73\u65b9\u5b50\u96c6\u8ba1\u6570",o={id:"leetcode/2501-2600/\u65e0\u5e73\u65b9\u5b50\u96c6\u8ba1\u6570",title:"2572.\u65e0\u5e73\u65b9\u5b50\u96c6\u8ba1\u6570",description:"\u94fe\u63a5\uff1a2572.\u65e0\u5e73\u65b9\u5b50\u96c6\u8ba1\u6570",source:"@site/docs/leetcode/2501-2600/2572.\u65e0\u5e73\u65b9\u5b50\u96c6\u8ba1\u6570.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u65e0\u5e73\u65b9\u5b50\u96c6\u8ba1\u6570",permalink:"/docs/leetcode/2501-2600/\u65e0\u5e73\u65b9\u5b50\u96c6\u8ba1\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2572,frontMatter:{},sidebar:"journal",previous:{title:"2571.\u5c06\u6574\u6570\u51cf\u5c11\u5230\u96f6\u9700\u8981\u7684\u6700\u5c11\u64cd\u4f5c\u6570",permalink:"/docs/leetcode/2501-2600/\u5c06\u6574\u6570\u51cf\u5c11\u5230\u96f6\u9700\u8981\u7684\u6700\u5c11\u64cd\u4f5c\u6570"},next:{title:"2573.\u627e\u51fa\u5bf9\u5e94LCP\u77e9\u9635\u7684\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/2501-2600/\u627e\u51fa\u5bf9\u5e94LCP\u77e9\u9635\u7684\u5b57\u7b26\u4e32"}},c={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"2572\u65e0\u5e73\u65b9\u5b50\u96c6\u8ba1\u6570",children:"2572.\u65e0\u5e73\u65b9\u5b50\u96c6\u8ba1\u6570"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/count-the-number-of-square-free-subsets",children:"2572.\u65e0\u5e73\u65b9\u5b50\u96c6\u8ba1\u6570"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4\u3001\u6570\u5b66\u3001\u52a8\u6001\u89c4\u5212\u3001\u72b6\u6001\u538b\u7f29",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u6570\u7ec4 nums \u4e2d \u65e0\u5e73\u65b9 \u4e14 \u975e\u7a7a \u7684\u5b50\u96c6\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-19"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a156ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a90.5MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u72b6\u6001\u538b\u7f29+dp\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u6570\u5b57\u627e\u524d\u9762\u6240\u6709\u53ef\u80fd\u4e0d\u91cd\u5408\u7684\u6570\u5b57\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n    typedef long long ll;\n    const int mod = 1e9 + 7;\n    const int MAXK = 10;\n    int prime[10] = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29};\n    bool check(int num) {\n        for (int i = 0; i < MAXK; i++) {\n            if (num % (int)pow(prime[i], 2) == 0) return true;\n        }\n        return false;\n    }\npublic:\n    int squareFreeSubsets(vector<int>& nums) {\n        nums = filter(nums);\n        int n = nums.size(), ans = 0;\n        vector<vector<ll>> dp(n + 1, vector<ll>(1 << MAXK, 0));\n        dp[0][0] = 1;\n        for (int i = 1; i <= n; i++) {\n            int num = nums[i - 1], mask = 0;\n            for (int j = 0; j < (1 << MAXK); j++) dp[i][j] = dp[i - 1][j];\n            for (int i = 0; i < MAXK; i++)\n                if (num % prime[i] == 0) mask |= (1 << i);\n            for (int j = 0; j < (1 << MAXK); j++)\n                if ((mask & j) == 0) dp[i][mask | j] = (dp[i][mask | j] + dp[i - 1][j]) % mod;\n        }\n        for (int j = 0; j < (1 << MAXK); j++) ans = (ans + dp[n][j]) % mod;\n        ans = (ans - 1 + mod) % mod;\n        return ans;\n    }\n    vector<int> filter(vector<int> &nums) {\n        vector<int> res;\n        for (auto &num : nums) {\n            if (!check(num)) res.push_back(num);\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-19"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1628ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a28.6MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def squareFreeSubsets(self, nums: List[int]) -> int:\n        mod = 1e9 + 7\n        MAXK = 10\n        prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]\n\n        def check(num: int) -> bool:\n            for i in range(MAXK):\n                if num % pow(prime[i], 2) == 0:\n                    return True\n            return False\n\n        def filter(nums: List[int]) -> List[int]:\n            res = []\n            for num in nums:\n                if not check(num):\n                    res.append(num)\n            return res\n\n        nums = filter(nums)\n        n = len(nums)\n        ans = 0\n        dp = [[0] * (1 << MAXK) for _ in range(n+1)]\n        dp[0][0] = 1\n        for i in range(1, n+1):\n            num = nums[i-1]\n            mask = 0\n            for j in range(1 << MAXK):\n                dp[i][j] = dp[i-1][j]\n            for k in range(MAXK):\n                if num % prime[k] == 0:\n                    mask |= (1 << k)\n            for j in range(1 << MAXK):\n                if (mask & j) == 0:\n                    dp[i][mask | j] = (dp[i][mask | j] + dp[i-1][j]) % mod\n        for j in range(1 << MAXK):\n            ans = (ans + dp[n][j]) % mod\n        ans = (ans - 1 + mod) % mod\n        return int(ans)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-19"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a20ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a4.4MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn square_free_subsets(nums: Vec<i32>) -> i32 {\n        let MOD = 1000000000 + 7;\n        let MAXK = 10;\n        let prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];\n        let check = |num: i32| -> bool {\n            for v in prime.iter() {\n                if num % (*v as i32).pow(2) == 0 {\n                    return true;\n                }\n            }\n            false\n        };\n        let mut nums = nums\n            .into_iter()\n            .filter(|num| !check(*num))\n            .collect::<Vec<i32>>();\n        let n = nums.len();\n        let mut dp = vec![vec![0; 1 << MAXK]; n + 1];\n        dp[0][0] = 1;\n        for i in 1..=n {\n            let num = nums[i - 1];\n            let mut mask = 0;\n            for j in 0..(1 << MAXK) {\n                dp[i][j] = dp[i - 1][j];\n            }\n            for i in 0..MAXK {\n                if num % prime[i] == 0 {\n                    mask |= 1 << i;\n                }\n            }\n            for j in 0..(1 << MAXK) {\n                if (mask & j) == 0 {\n                    dp[i][mask | j] = (dp[i][mask | j] + dp[i - 1][j]) % MOD;\n                }\n            }\n        }\n        let mut ans = 0;\n        for j in 0..(1 << MAXK) {\n            ans = (ans + dp[n][j]) % MOD;\n        }\n        ans = (ans - 1 + MOD) % MOD;\n        ans\n    }\n}\n"})})]})}function m(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>o});var s=i(30758);const r={},t=s.createContext(r);function l(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);