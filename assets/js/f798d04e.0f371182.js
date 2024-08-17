"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[80788],{70630:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>u,metadata:()=>t,toc:()=>m});var i=e(86070),r=e(25710);const u={},l="918.\u73af\u5f62\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c",t={id:"leetcode/901-1000/\u73af\u5f62\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c",title:"918.\u73af\u5f62\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c",description:"\u94fe\u63a5\uff1a918.\u73af\u5f62\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c",source:"@site/docs/leetcode/901-1000/918.\u73af\u5f62\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u73af\u5f62\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c",permalink:"/docs/leetcode/901-1000/\u73af\u5f62\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:918,frontMatter:{},sidebar:"journal",previous:{title:"917.\u4ec5\u4ec5\u53cd\u8f6c\u5b57\u6bcd",permalink:"/docs/leetcode/901-1000/\u4ec5\u4ec5\u53cd\u8f6c\u5b57\u6bcd"},next:{title:"919.\u5b8c\u5168\u4e8c\u53c9\u6811\u63d2\u5165\u5668",permalink:"/docs/leetcode/901-1000/\u5b8c\u5168\u4e8c\u53c9\u6811\u63d2\u5165\u5668"}},c={},m=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function o(n){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"918\u73af\u5f62\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c",children:"918.\u73af\u5f62\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(s.a,{href:"https://leetcode.cn/problems/maximum-sum-circular-subarray",children:"918.\u73af\u5f62\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c"}),(0,i.jsx)(s.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(s.br,{}),"\n","\u6807\u7b7e\uff1a\u961f\u5217\u3001\u6570\u7ec4\u3001\u5206\u6cbb\u3001\u52a8\u6001\u89c4\u5212\u3001\u5355\u8c03\u961f\u5217",(0,i.jsx)(s.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5b9a\u4e00\u4e2a\u957f\u5ea6\u4e3a n \u7684\u73af\u5f62\u6574\u6570\u6570\u7ec4 nums \uff0c\u8fd4\u56de nums \u7684\u975e\u7a7a \u5b50\u6570\u7ec4 \u7684\u6700\u5927\u53ef\u80fd\u548c \u3002"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-20"}),"\n",(0,i.jsx)(s.li,{children:"\u6267\u884c\u7528\u65f6\uff1a100ms"}),"\n",(0,i.jsx)(s.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a48MB"}),"\n",(0,i.jsx)(s.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(s.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u7f00\u548c\u7edf\u8ba1\uff0c\u5355\u8c03\u961f\u5217\u8bb0\u5f55\u533a\u95f4\u6700\u5927\u503c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxSubarraySumCircular(vector<int>& nums) {\n        int n = nums.size();\n        vector<int> sums(1, 0);\n        for (auto &num : nums) {\n            sums.push_back(num + sums.back());\n        }\n        for (auto &num : nums) {\n            sums.push_back(num + sums.back());\n        }\n        deque<int> q;\n        for (int i = 1; i <= n; i++) {\n            while (q.size() && sums[q.back()] > sums[i]) q.pop_back();\n            q.push_back(i);\n        }\n        int res = INT_MIN;\n        for (int i = n + 1; i < sums.size(); i++) {\n            res = max(res, nums[i - n - 1]);\n            while (q.size() && q.front() < i - n) q.pop_front();\n            while (q.size() && sums[q.back()] > sums[i]) q.pop_back();\n            if (q.size()) res = max(res, sums[i] - sums[q.front()]);\n            q.push_back(i);\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,i.jsx)(s.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-20"}),"\n",(0,i.jsx)(s.li,{children:"\u6267\u884c\u7528\u65f6\uff1a396ms"}),"\n",(0,i.jsx)(s.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a22.3MB"}),"\n",(0,i.jsx)(s.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(s.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"class Solution:\n    def maxSubarraySumCircular(self, nums: List[int]) -> int:\n        n = len(nums)\n        sums = [0]\n        for num in nums:\n            sums.append(num + sums[-1])\n        for num in nums:\n            sums.append(num + sums[-1])\n        q = deque()\n        for i in range(1, n+1):\n            while len(q) and sums[q[-1]] > sums[i]:\n                q.pop()\n            q.append(i)\n        res = -inf\n        for i in range(n+1, len(sums)):\n            res = max(res, nums[i-n-1])\n            while len(q) and q[0] < i - n:\n                q.popleft()\n            while len(q) and sums[q[-1]] > sums[i]:\n                q.pop()\n            if len(q):\n                res = max(res, sums[i] - sums[q[0]])\n            q.append(i)\n        return res\n"})}),"\n",(0,i.jsx)(s.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-20"}),"\n",(0,i.jsx)(s.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,i.jsx)(s.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.8MB"}),"\n",(0,i.jsx)(s.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(s.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-rust",children:"impl Solution {\n    pub fn max_subarray_sum_circular(nums: Vec<i32>) -> i32 {\n        let n = nums.len();\n        let mut sums = vec![0];\n        for num in &nums {\n            sums.push(sums.last().unwrap() + num);\n        }\n        for num in &nums {\n            sums.push(sums.last().unwrap() + num);\n        }\n        let mut q = std::collections::VecDeque::<usize>::new();\n        for i in 1..=n {\n            while !q.is_empty() && sums[*q.back().unwrap()] > sums[i] {\n                q.pop_back();\n            }\n            q.push_back(i);\n        }\n        let mut res = i32::MIN;\n        for i in (n + 1)..sums.len() {\n            res = res.max(nums[i - n - 1]);\n            while !q.is_empty() && *q.front().unwrap() < i - n {\n                q.pop_front();\n            }\n            while !q.is_empty() && sums[*q.back().unwrap()] > sums[i] {\n                q.pop_back();\n            }\n            if !q.is_empty() {\n                res = res.max(sums[i] - sums[*q.front().unwrap()]);\n            }\n            q.push_back(i);\n        }\n        res\n    }\n}\n"})})]})}function a(n={}){const{wrapper:s}={...(0,r.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},25710:(n,s,e)=>{e.d(s,{R:()=>l,x:()=>t});var i=e(30758);const r={},u=i.createContext(r);function l(n){const s=i.useContext(u);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function t(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(u.Provider,{value:s},n.children)}}}]);