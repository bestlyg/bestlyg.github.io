"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[52974],{55575:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"leetcode/801-900/\u5e26\u56e0\u5b50\u7684\u4e8c\u53c9\u6811","title":"823.\u5e26\u56e0\u5b50\u7684\u4e8c\u53c9\u6811","description":"\u94fe\u63a5\uff1a823.\u5e26\u56e0\u5b50\u7684\u4e8c\u53c9\u6811","source":"@site/docs/leetcode/801-900/823.\u5e26\u56e0\u5b50\u7684\u4e8c\u53c9\u6811.md","sourceDirName":"leetcode/801-900","slug":"/leetcode/801-900/\u5e26\u56e0\u5b50\u7684\u4e8c\u53c9\u6811","permalink":"/docs/leetcode/801-900/\u5e26\u56e0\u5b50\u7684\u4e8c\u53c9\u6811","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":823,"frontMatter":{},"sidebar":"journal","previous":{"title":"822.\u7ffb\u8f6c\u5361\u7247\u6e38\u620f","permalink":"/docs/leetcode/801-900/\u7ffb\u8f6c\u5361\u7247\u6e38\u620f"},"next":{"title":"824.\u5c71\u7f8a\u62c9\u4e01\u6587","permalink":"/docs/leetcode/801-900/\u5c71\u7f8a\u62c9\u4e01\u6587"}}');var s=e(25105),t=e(8556);const l={},o="823.\u5e26\u56e0\u5b50\u7684\u4e8c\u53c9\u6811",c={},a=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function d(n){const r={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"823\u5e26\u56e0\u5b50\u7684\u4e8c\u53c9\u6811",children:"823.\u5e26\u56e0\u5b50\u7684\u4e8c\u53c9\u6811"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(r.a,{href:"https://leetcode.cn/problems/binary-trees-with-factors",children:"823.\u5e26\u56e0\u5b50\u7684\u4e8c\u53c9\u6811"}),(0,s.jsx)(r.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(r.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u52a8\u6001\u89c4\u5212\u3001\u6392\u5e8f",(0,s.jsx)(r.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u51fa\u4e00\u4e2a\u542b\u6709\u4e0d\u91cd\u590d\u6574\u6570\u5143\u7d20\u7684\u6570\u7ec4 arr \uff0c\u6bcf\u4e2a\u6574\u6570 arr[i] \u5747\u5927\u4e8e 1\u3002\u7528\u8fd9\u4e9b\u6574\u6570\u6765\u6784\u5efa\u4e8c\u53c9\u6811\uff0c\u6bcf\u4e2a\u6574\u6570\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u6b21\u6570\u3002\u5176\u4e2d\uff1a\u6bcf\u4e2a\u975e\u53f6\u7ed3\u70b9\u7684\u503c\u5e94\u7b49\u4e8e\u5b83\u7684\u4e24\u4e2a\u5b50\u7ed3\u70b9\u7684\u503c\u7684\u4e58\u79ef\u3002\u6ee1\u8db3\u6761\u4ef6\u7684\u4e8c\u53c9\u6811\u4e00\u5171\u6709\u591a\u5c11\u4e2a\uff1f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-29"}),"\n",(0,s.jsx)(r.li,{children:"\u6267\u884c\u7528\u65f6\uff1a312ms"}),"\n",(0,s.jsx)(r.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.79MB"}),"\n",(0,s.jsx)(r.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(r.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"class Solution:\n    def numFactoredBinaryTrees(self, arr: List[int]) -> int:\n        MOD = 1000000007\n        arr.sort()\n        s = set()\n        for num in arr:\n            s.add(num)\n        @cache\n        def dfs(root: int) -> int:\n            res = 1\n            for num in arr:\n                if num >= root: break\n                if root % num != 0: continue\n                if root // num not in s: continue\n                res = (res + dfs(num) * dfs(root // num) % MOD) % MOD\n            return res\n        return sum(dfs(num) for num in arr) % MOD\n"})}),"\n",(0,s.jsx)(r.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-29"}),"\n",(0,s.jsx)(r.li,{children:"\u6267\u884c\u7528\u65f6\uff1a52ms"}),"\n",(0,s.jsx)(r.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.66MB"}),"\n",(0,s.jsx)(r.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(r.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int numFactoredBinaryTrees(vector<int>& arr) {\n        int MOD = 1e9 + 7, n = arr.size(), res = 1;\n        sort(arr.begin(), arr.end());\n        unordered_map<int, int> m;\n        for (int i = 0; i < n; i++) m[arr[i]] = i;\n        vector<long long> list(n, 1);\n        for (int i = 1; i < n; i++) {\n            for (int j = i - 1; j >= 0; j--) {\n                if (arr[i] % arr[j] == 0 && m.count(arr[i] / arr[j])) {\n                    list[i] = (list[i] + list[j] * list[m[arr[i] / arr[j]]] % MOD) % MOD;\n                }\n            }\n            res = (res + list[i]) % MOD;\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,s.jsx)(r.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-29"}),"\n",(0,s.jsx)(r.li,{children:"\u6267\u884c\u7528\u65f6\uff1a384ms"}),"\n",(0,s.jsx)(r.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.91MB"}),"\n",(0,s.jsx)(r.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(r.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"class Solution:\n    def numFactoredBinaryTrees(self, arr: List[int]) -> int:\n        MOD = 1000000007\n        n = len(arr)\n        res = 1\n        arr.sort()\n        m = {}\n        for i in range(n):\n            m[arr[i]] = i\n        list = [1 for _ in range(n)]\n        for i in range(1, n):\n            for j in range(i-1, -1, -1):\n                if arr[i] % arr[j] == 0 and arr[i] // arr[j] in m:\n                    list[i] = (list[i] + list[j] *\n                                list[m[arr[i] / arr[j]]] % MOD) % MOD\n            res = (res + list[i]) % MOD\n        return res\n"})}),"\n",(0,s.jsx)(r.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-29"}),"\n",(0,s.jsx)(r.li,{children:"\u6267\u884c\u7528\u65f6\uff1a20ms"}),"\n",(0,s.jsx)(r.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2MB"}),"\n",(0,s.jsx)(r.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(r.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-rust",children:"impl Solution {\n    pub fn num_factored_binary_trees(mut arr: Vec<i32>) -> i32 {\n        const MOD: i64 = 1000000007;\n        let n = arr.len();\n        let mut res = 1;\n        arr.sort();\n        let mut m = std::collections::HashMap::<i32, usize>::new();\n        for (i, num) in arr.iter().enumerate() {\n            m.insert(*num, i);\n        }\n        let mut list = vec![1i64; n];\n        for i in 1..n {\n            for j in (0..i).rev() {\n                if arr[i] % arr[j] == 0 && m.contains_key(&(arr[i] / arr[j])) {\n                    let idx = m.get(&(arr[i] / arr[j])).unwrap();\n                    list[i] = (list[i] + list[j] * list[*idx] % MOD) % MOD;\n                }\n            }\n            res = (res + list[i]) % MOD;\n        }\n        res as i32\n    }\n}\n"})})]})}function u(n={}){const{wrapper:r}={...(0,t.R)(),...n.components};return r?(0,s.jsx)(r,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8556:(n,r,e)=>{e.d(r,{R:()=>l,x:()=>o});var i=e(58101);const s={},t=i.createContext(s);function l(n){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function o(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(t.Provider,{value:r},n.children)}}}]);