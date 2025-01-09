"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[44324],{58990:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"leetcode/1301-1400/1388.3n\u5757\u62ab\u8428","title":"1388.3n\u5757\u62ab\u8428","description":"\u94fe\u63a5\uff1a1388.3n\u5757\u62ab\u8428","source":"@site/docs/leetcode/1301-1400/1388.3n\u5757\u62ab\u8428.md","sourceDirName":"leetcode/1301-1400","slug":"/leetcode/1301-1400/1388.3n\u5757\u62ab\u8428","permalink":"/docs/leetcode/1301-1400/1388.3n\u5757\u62ab\u8428","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"1392.\u6700\u957f\u5feb\u4e50\u524d\u7f00","permalink":"/docs/leetcode/1301-1400/\u6700\u957f\u5feb\u4e50\u524d\u7f00"},"next":{"title":"1401.\u5706\u548c\u77e9\u5f62\u662f\u5426\u6709\u91cd\u53e0","permalink":"/docs/leetcode/1401-1500/\u5706\u548c\u77e9\u5f62\u662f\u5426\u6709\u91cd\u53e0"}}');var c=i(25105),l=i(8556);const t={},r="1388.3n\u5757\u62ab\u8428",d={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - rust",id:"\u9898\u89e3-2---rust",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"13883n\u5757\u62ab\u8428",children:"1388.3n\u5757\u62ab\u8428"})}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,c.jsx)(e.a,{href:"https://leetcode.cn/problems/pizza-with-3n-slices",children:"1388.3n\u5757\u62ab\u8428"}),(0,c.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,c.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,c.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u4f60\u53ef\u4ee5\u83b7\u5f97\u7684\u62ab\u8428\u5927\u5c0f\u603b\u548c\u7684\u6700\u5927\u503c\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-18"}),"\n",(0,c.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a28ms"}),"\n",(0,c.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.1MB"}),"\n",(0,c.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,c.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9898\u76ee\u8f6c\u5316\u4e3a3n\u4e2a\u5757\u4e2d\uff0c\u9009n\u4e2a\u4e0d\u76f8\u90bb\u7684\u5757\u7684\u6700\u5927\u548c,dp[i][j]\u8868\u793a\u5b58\u5728\u524di\u4e2a\u5757\u65f6\uff0c\u9009\u53d6j\u4e2a\u5757\u7684\u6700\u5927\u503c\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxSizeSlices(vector<int>& slices) {\n        int m = slices.size() / 3;\n        auto check = [&](vector<int> nums) {\n            int n = nums.size();\n            vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));\n            for (int i = 1; i <= n; i++) {\n                for (int j = 1; j <= m; j++) {\n                    dp[i][j] = max(dp[i - 1][j], nums[i - 1]);\n                    if (i >= 2) dp[i][j] = max(dp[i][j], dp[i - 2][j - 1] + nums[i - 1]);\n                }\n            }\n            return dp[n][m];\n        };\n        return max(\n            check(vector<int>(slices.begin() + 1, slices.end())),\n            check(vector<int>(slices.begin(), slices.end() - 1))\n        );\n    }\n};\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u9898\u89e3-2---rust",children:"\u9898\u89e3 2 - rust"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-18"}),"\n",(0,c.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,c.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.16MB"}),"\n",(0,c.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,c.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn max_size_slices(slices: Vec<i32>) -> i32 {\n        use std::cmp::max;\n        let m = slices.len() / 3;\n        let check = |nums: &[i32]| -> i32 {\n            let n = nums.len();\n            let mut dp = vec![vec![0; m + 1]; n + 1];\n            for i in 1..=n {\n                for j in 1..=m {\n                    dp[i][j] = max(dp[i - 1][j], nums[i - 1]);\n                    if i >= 2 {\n                        dp[i][j] = max(dp[i][j], dp[i - 2][j - 1] + nums[i - 1])\n                    }\n                }\n            }\n            dp[n][m]\n        };\n        max(check(&slices[1..]), check(&slices[0..slices.len() - 1]))\n    }\n}\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-18"}),"\n",(0,c.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a444ms"}),"\n",(0,c.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.19MB"}),"\n",(0,c.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,c.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def maxSizeSlices(self, slices: List[int]) -> int:\n        m = len(slices) // 3\n        def check(nums: List[int]) -> int:\n            n = len(nums)\n            dp = [[0 for _ in range(m + 1)] for _ in range(n + 1)]\n            for i in range(1, n+1):\n                for j in range(1, m+1):\n                    dp[i][j] = max(dp[i-1][j], nums[i-1])\n                    if i >= 2:\n                        dp[i][j] = max(dp[i][j], dp[i-2][j-1]+nums[i-1])\n            return dp[n][m]\n        return max(check(slices[1:]), check(slices[0:-1]))\n"})})]})}function a(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(p,{...n})}):p(n)}},8556:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>r});var s=i(58101);const c={},l=s.createContext(c);function t(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);