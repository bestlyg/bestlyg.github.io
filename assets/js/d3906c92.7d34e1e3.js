"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[22507],{54689:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});const l=JSON.parse('{"id":"leetcode/2501-2600/\u6267\u884cK\u6b21\u64cd\u4f5c\u540e\u7684\u6700\u5927\u5206\u6570","title":"2530.\u6267\u884cK\u6b21\u64cd\u4f5c\u540e\u7684\u6700\u5927\u5206\u6570","description":"\u94fe\u63a5\uff1a2530.\u6267\u884cK\u6b21\u64cd\u4f5c\u540e\u7684\u6700\u5927\u5206\u6570","source":"@site/docs/leetcode/2501-2600/2530.\u6267\u884cK\u6b21\u64cd\u4f5c\u540e\u7684\u6700\u5927\u5206\u6570.md","sourceDirName":"leetcode/2501-2600","slug":"/leetcode/2501-2600/\u6267\u884cK\u6b21\u64cd\u4f5c\u540e\u7684\u6700\u5927\u5206\u6570","permalink":"/docs/leetcode/2501-2600/\u6267\u884cK\u6b21\u64cd\u4f5c\u540e\u7684\u6700\u5927\u5206\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2530,"frontMatter":{},"sidebar":"journal","previous":{"title":"2529.\u6b63\u6574\u6570\u548c\u8d1f\u6574\u6570\u7684\u6700\u5927\u8ba1\u6570","permalink":"/docs/leetcode/2501-2600/\u6b63\u6574\u6570\u548c\u8d1f\u6574\u6570\u7684\u6700\u5927\u8ba1\u6570"},"next":{"title":"2531.\u4f7f\u5b57\u7b26\u4e32\u4e2d\u4e0d\u540c\u5b57\u7b26\u7684\u6570\u76ee\u76f8\u7b49","permalink":"/docs/leetcode/2501-2600/\u4f7f\u5b57\u7b26\u4e32\u4e2d\u4e0d\u540c\u5b57\u7b26\u7684\u6570\u76ee\u76f8\u7b49"}}');var i=s(25105),t=s(8556);const r={},c="2530.\u6267\u884cK\u6b21\u64cd\u4f5c\u540e\u7684\u6700\u5927\u5206\u6570",o={},u=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"2530\u6267\u884ck\u6b21\u64cd\u4f5c\u540e\u7684\u6700\u5927\u5206\u6570",children:"2530.\u6267\u884cK\u6b21\u64cd\u4f5c\u540e\u7684\u6700\u5927\u5206\u6570"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/maximal-score-after-applying-k-operations",children:"2530.\u6267\u884cK\u6b21\u64cd\u4f5c\u540e\u7684\u6700\u5927\u5206\u6570"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u7684\u6574\u6570\u6570\u7ec4 nums \u548c\u4e00\u4e2a\u6574\u6570 k \u3002\u4f60\u7684 \u8d77\u59cb\u5206\u6570 \u4e3a 0 \u3002\u8fd4\u56de\u5728 \u6070\u597d \u6267\u884c k \u6b21\u64cd\u4f5c\u540e\uff0c\u4f60\u53ef\u80fd\u83b7\u5f97\u7684\u6700\u5927\u5206\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-18"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1604ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.59MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5806\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Node:\n        def __init__(self, val):\n            self.val = val\n        def __lt__(self, o):\n            return o.val < self.val\n    \n    class Solution:\n        def maxKelements(self, nums: List[int], k: int) -> int:\n            q = [Node(num) for num in nums]\n            heapify(q)\n            res = 0\n            while k:\n                res += q[0].val\n                heappush(q, Node(ceil(heappop(q).val / 3)))\n                k -= 1\n            return res\n    \n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-08"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a160ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a70.8MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5806\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    long long maxKelements(vector<int>& nums, int k) {\n        sort(nums.begin(), nums.end());\n        priority_queue<int> q;\n        long long ans = 0;\n        int idx = nums.size() - 1;\n        while (k--) {\n            if (q.size() && (idx < 0 || q.top() >= nums[idx])) {\n                int num = q.top();\n                q.pop();\n                ans += num;\n                q.push(ceil(1.0 * num / 3));\n            } else {\n                int num = nums[idx--];\n                ans += num;\n                q.push(ceil(1.0 * num / 3));\n            }\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-18"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a344ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a29.59MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5806\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def maxKelements(self, nums: List[int], k: int) -> int:\n        for i in range(len(nums)): nums[i] *= -1\n        heapify(nums)\n        res = 0\n        for _ in range(k):\n            res += -nums[0]\n            heappush(nums, -ceil(heappop(nums) / -3))\n        return res\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-08"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a4.6MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:"use std::collections::BinaryHeap;\nimpl Solution {\n    pub fn max_kelements(nums: Vec<i32>, k: i32) -> i64 {\n        let mut k = k;\n        let mut heap = BinaryHeap::new();\n        for num in nums {\n            heap.push(num);\n        }\n        let mut ans: i64 = 0;\n        while k != 0 {\n            let num = heap.pop().unwrap() as i64;\n            ans += num;\n            let num = (num as f64 / 3.0).ceil() as i32;\n            heap.push(num);\n            k -= 1;\n        }\n        ans\n    }\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},8556:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>c});var l=s(58101);const i={},t=l.createContext(i);function r(n){const e=l.useContext(t);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);