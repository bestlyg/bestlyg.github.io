"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[97141],{98738:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"leetcode/901-1000/\u5408\u5e76\u77f3\u5934\u7684\u6700\u4f4e\u6210\u672c","title":"1000.\u5408\u5e76\u77f3\u5934\u7684\u6700\u4f4e\u6210\u672c","description":"\u94fe\u63a5\uff1a1000.\u5408\u5e76\u77f3\u5934\u7684\u6700\u4f4e\u6210\u672c","source":"@site/docs/leetcode/901-1000/1000.\u5408\u5e76\u77f3\u5934\u7684\u6700\u4f4e\u6210\u672c.md","sourceDirName":"leetcode/901-1000","slug":"/leetcode/901-1000/\u5408\u5e76\u77f3\u5934\u7684\u6700\u4f4e\u6210\u672c","permalink":"/docs/leetcode/901-1000/\u5408\u5e76\u77f3\u5934\u7684\u6700\u4f4e\u6210\u672c","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1000,"frontMatter":{},"sidebar":"journal","previous":{"title":"999.\u53ef\u4ee5\u88ab\u4e00\u6b65\u6355\u83b7\u7684\u68cb\u5b50\u6570","permalink":"/docs/leetcode/901-1000/\u53ef\u4ee5\u88ab\u4e00\u6b65\u6355\u83b7\u7684\u68cb\u5b50\u6570"},"next":{"title":"1001.\u7f51\u683c\u7167\u660e","permalink":"/docs/leetcode/1001-1100/\u7f51\u683c\u7167\u660e"}}');var r=s(25105),i=s(8556);const d={},l="1000.\u5408\u5e76\u77f3\u5934\u7684\u6700\u4f4e\u6210\u672c",c={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"1000\u5408\u5e76\u77f3\u5934\u7684\u6700\u4f4e\u6210\u672c",children:"1000.\u5408\u5e76\u77f3\u5934\u7684\u6700\u4f4e\u6210\u672c"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/minimum-cost-to-merge-stones",children:"1000.\u5408\u5e76\u77f3\u5934\u7684\u6700\u4f4e\u6210\u672c"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u524d\u7f00\u548c",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6709 N \u5806\u77f3\u5934\u6392\u6210\u4e00\u6392\uff0c\u7b2c i \u5806\u4e2d\u6709\xa0stones[i]\xa0\u5757\u77f3\u5934\u3002\u6bcf\u6b21\u79fb\u52a8\uff08move\uff09\u9700\u8981\u5c06\u8fde\u7eed\u7684\xa0K\xa0\u5806\u77f3\u5934\u5408\u5e76\u4e3a\u4e00\u5806\uff0c\u800c\u8fd9\u4e2a\u79fb\u52a8\u7684\u6210\u672c\u4e3a\u8fd9\xa0K\xa0\u5806\u77f3\u5934\u7684\u603b\u6570\u3002\u627e\u51fa\u628a\u6240\u6709\u77f3\u5934\u5408\u5e76\u6210\u4e00\u5806\u7684\u6700\u4f4e\u6210\u672c\u3002\u5982\u679c\u4e0d\u53ef\u80fd\uff0c\u8fd4\u56de -1 \u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-04"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a28ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a24.1MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u533a\u95f4dp\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int mergeStones(vector<int>& stones, int k) {\n        int n = stones.size(), dp[n][n][k + 1];\n        if ((n - k) % (k - 1) != 0) return -1;\n        memset(dp, -1, sizeof(dp));\n        vector<int> sums(1, 0);\n        for (auto &s : stones) sums.push_back(sums.back() + s);\n        function<int(int, int, int)> dfs = [&](int start, int end, int p) -> int {\n            if (start == end) return 0;\n            if (dp[start][end][p] != -1) return dp[start][end][p];\n            if (p == 1) return dp[start][end][p] = start == end ? 0 : sums[end + 1] - sums[start] + dfs(start, end, k);\n            int res = INT_MAX;\n            for (int m = start; m < end; m += k - 1) {\n                res = min(res, dfs(start, m, 1) + dfs(m + 1, end, p - 1));\n            }\n            return dp[start][end][p] = res == INT_MAX ? -1 : res;\n        };\n        return dfs(0, n - 1, 1);\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-04"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.7MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u533a\u95f4dp\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int mergeStones(vector<int>& stones, int k) {\n        int n = stones.size(), dp[n][n];\n        if ((n - k) % (k - 1) != 0) return -1;\n        memset(dp, -1, sizeof(dp));\n        vector<int> sums(1, 0);\n        for (auto &s : stones) sums.push_back(sums.back() + s);\n        function<int(int, int)> dfs = [&](int start, int end) -> int {\n            if (start == end) return 0;\n            if (dp[start][end] != -1) return dp[start][end];\n            int res = INT_MAX;\n            for (int m = start; m < end; m += k - 1) {\n                res = min(res, dfs(start, m) + dfs(m + 1, end));\n            }\n            if ((end - start) % (k - 1) == 0) res += sums[end + 1] - sums[start];\n            return dp[start][end] = res;\n        };\n        return dfs(0, n - 1);\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-04"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a44ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.5MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def mergeStones(self, stones: List[int], k: int) -> int:\n        n = len(stones)\n        if (n - k) % (k - 1) != 0:\n            return -1\n        dp = [[-1] * n for _ in range(n)]\n        sums = [0]\n        for s in stones:\n            sums.append(sums[-1] + s)\n        @cache\n        def dfs(start: int, end: int) -> int:\n            if start == end:\n                return 0\n            res = 0x7fffffff\n            for m in range(start, end, k-1):\n                res = min(res, dfs(start, m) + dfs(m + 1, end))\n            if (end - start) % (k - 1) == 0:\n                res += sums[end + 1] - sums[start]\n            return res\n        return dfs(0, n-1)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-04"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn merge_stones(stones: Vec<i32>, k: i32) -> i32 {\n        let n = stones.len();\n        let k = k as usize;\n        if (n - k) % (k - 1) != 0 {\n            return -1;\n        }\n        let mut dp = vec![vec![-1; n]; n];\n        let mut sums = vec![-1];\n        for s in stones {\n            sums.push(*sums.last().unwrap() + s);\n        }\n        fn dfs(dp: &mut Vec<Vec<i32>>, sums: &Vec<i32>, k: usize, start: usize, end: usize) -> i32 {\n            if start == end {\n                0\n            } else if dp[start][end] != -1 {\n                dp[start][end]\n            } else {\n                let mut res = i32::MAX;\n                let mut m = start;\n                while m < end {\n                    res = res.min(dfs(dp, sums, k, start, m) + dfs(dp, sums, k, m + 1, end));\n                    m += k - 1;\n                }\n                if (end - start) % (k - 1) == 0 {\n                    res += sums[end + 1] - sums[start];\n                }\n                dp[start][end] = res;\n                res\n            }\n        }\n        return dfs(&mut dp, &sums, k, 0, n - 1);\n    }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},8556:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>l});var t=s(58101);const r={},i=t.createContext(r);function d(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);