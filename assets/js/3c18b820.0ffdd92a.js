"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[50998],{2057:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=s(86070),r=s(25710);const t={},l="2731.\u79fb\u52a8\u673a\u5668\u4eba",c={id:"leetcode/2701-2800/\u79fb\u52a8\u673a\u5668\u4eba",title:"2731.\u79fb\u52a8\u673a\u5668\u4eba",description:"\u94fe\u63a5\uff1a2731.\u79fb\u52a8\u673a\u5668\u4eba",source:"@site/docs/leetcode/2701-2800/2731.\u79fb\u52a8\u673a\u5668\u4eba.md",sourceDirName:"leetcode/2701-2800",slug:"/leetcode/2701-2800/\u79fb\u52a8\u673a\u5668\u4eba",permalink:"/docs/leetcode/2701-2800/\u79fb\u52a8\u673a\u5668\u4eba",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2731,frontMatter:{},sidebar:"journal",previous:{title:"2719.\u7edf\u8ba1\u6574\u6570\u6570\u76ee",permalink:"/docs/leetcode/2701-2800/\u7edf\u8ba1\u6574\u6570\u6570\u76ee"},next:{title:"2734.\u6267\u884c\u5b50\u4e32\u64cd\u4f5c\u540e\u7684\u5b57\u5178\u5e8f\u6700\u5c0f\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/2701-2800/\u6267\u884c\u5b50\u4e32\u64cd\u4f5c\u540e\u7684\u5b57\u5178\u5e8f\u6700\u5c0f\u5b57\u7b26\u4e32"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"2731\u79fb\u52a8\u673a\u5668\u4eba",children:"2731.\u79fb\u52a8\u673a\u5668\u4eba"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/movement-of-robots",children:"2731.\u79fb\u52a8\u673a\u5668\u4eba"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8111\u7b4b\u6025\u8f6c\u5f2f\u3001\u6570\u7ec4\u3001\u524d\u7f00\u548c\u3001\u6392\u5e8f",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u6307\u4ee4\u91cd\u590d\u6267\u884c d \u79d2\u540e\uff0c\u6240\u6709\u673a\u5668\u4eba\u4e4b\u95f4\u4e24\u4e24\u8ddd\u79bb\u4e4b\u548c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-10"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a108ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a97.32MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8d2a\u5fc3\uff0c\u5ffd\u7565\u78b0\u649e\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int sumDistance(vector<int>& nums, string s, int d) {\n        long long n = nums.size(), res = 0, MOD = 1e9 + 7;\n        vector<long long> arr;\n        for (int i = 0; i < n; i++) {\n            arr.push_back(s[i] == 'L' ? nums[i] - d : nums[i] + d);\n        }\n        sort(arr.begin(), arr.end());\n        for (int i = 1; i < n; i++) {\n            long long v = (arr[i] - arr[i - 1]) % MOD * (n - i) * i % MOD;\n            res = (res + v) % MOD;\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-10"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a136ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a26.55MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def sumDistance(self, nums: List[int], s: str, d: int) -> int:\n        n = len(nums)\n        arr = [nums[i] - d if s[i] == 'L' else nums[i] + d for i in range(n)]\n        arr.sort()\n        return sum((arr[i] - arr[i - 1]) * (n - i) * i for i in range(1, n)) % 1000000007\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-10"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a4.51MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn sum_distance(nums: Vec<i32>, s: String, d: i32) -> i32 {\n        let s = s.chars().into_iter().collect::<Vec<_>>();\n        let n = nums.len();\n        let mut res = 0;\n        const MOD: i64 = 1000000007;\n        let mut arr = vec![];\n        for i in 0..n {\n            arr.push(if s[i] == 'L' {\n                (nums[i] - d) as i64\n            } else {\n                (nums[i] + d) as i64\n            })\n        }\n        arr.sort();\n        for i in 1..n {\n            let v = (arr[i] - arr[i - 1]) % MOD * ((n as i64) - i as i64) * (i as i64);\n            res = (res + v) % MOD;\n        }\n        res as i32\n    }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var i=s(30758);const r={},t=i.createContext(r);function l(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);