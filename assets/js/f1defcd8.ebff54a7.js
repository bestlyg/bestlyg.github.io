"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[51512],{82634:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var s=i(86070),t=i(31503);const l={},r="2670.\u627e\u51fa\u4e0d\u540c\u5143\u7d20\u6570\u76ee\u5dee\u6570\u7ec4",c={id:"leetcode/2601-2700/\u627e\u51fa\u4e0d\u540c\u5143\u7d20\u6570\u76ee\u5dee\u6570\u7ec4",title:"2670.\u627e\u51fa\u4e0d\u540c\u5143\u7d20\u6570\u76ee\u5dee\u6570\u7ec4",description:"\u94fe\u63a5\uff1a2670.\u627e\u51fa\u4e0d\u540c\u5143\u7d20\u6570\u76ee\u5dee\u6570\u7ec4",source:"@site/docs/leetcode/2601-2700/2670.\u627e\u51fa\u4e0d\u540c\u5143\u7d20\u6570\u76ee\u5dee\u6570\u7ec4.md",sourceDirName:"leetcode/2601-2700",slug:"/leetcode/2601-2700/\u627e\u51fa\u4e0d\u540c\u5143\u7d20\u6570\u76ee\u5dee\u6570\u7ec4",permalink:"/docs/leetcode/2601-2700/\u627e\u51fa\u4e0d\u540c\u5143\u7d20\u6570\u76ee\u5dee\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2670,frontMatter:{},sidebar:"journal",previous:{title:"2667.\u521b\u5efaHelloWorld\u51fd\u6570",permalink:"/docs/leetcode/2601-2700/\u521b\u5efaHelloWorld\u51fd\u6570"},next:{title:"2671.\u9891\u7387\u8ddf\u8e2a\u5668",permalink:"/docs/leetcode/2601-2700/\u9891\u7387\u8ddf\u8e2a\u5668"}},d={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2},{value:"\u9898\u89e3 4 - python",id:"\u9898\u89e3-4---python",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"2670\u627e\u51fa\u4e0d\u540c\u5143\u7d20\u6570\u76ee\u5dee\u6570\u7ec4",children:"2670.\u627e\u51fa\u4e0d\u540c\u5143\u7d20\u6570\u76ee\u5dee\u6570\u7ec4"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/find-the-distinct-difference-array",children:"2670.\u627e\u51fa\u4e0d\u540c\u5143\u7d20\u6570\u76ee\u5dee\u6570\u7ec4"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de nums \u7684 \u4e0d\u540c\u5143\u7d20\u6570\u76ee\u5dee \u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-07"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a90.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4ece\u5de6\u5f80\u53f3\u7edf\u8ba1\uff0c\u4ece\u53f3\u5f80\u5de6\u7edf\u8ba1\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> distinctDifferenceArray(vector<int>& nums) {\n        unordered_set<int> s;\n        int n = nums.size();\n        vector<int> list1(n, 0), list2(n, 0), res(n, 0);\n        for (int i = 0; i < n; i++) {\n            s.insert(nums[i]);\n            list1[i] = s.size();\n        }\n        s.clear();\n        for (int i = n - 1; i >= 0; i--) {\n            list2[i] = s.size();\n            s.insert(nums[i]);\n        }\n        for (int i = 0; i < n; i++) {\n            res[i] = list1[i] - list2[i];\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-07"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.1MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def distinctDifferenceArray(self, nums: List[int]) -> List[int]:\n        s = set()\n        n = len(nums)\n        list1 = [0] * n\n        list2 = [0] * n\n        res = [0] * n\n        for i in range(0, n):\n            s.add(nums[i])\n            list1[i] = len(s)\n        s.clear()\n        for i in range(n - 1, -1, -1):\n            list2[i] = len(s)\n            s.add(nums[i])\n        for i in range(0, n):\n            res[i] = list1[i] - list2[i]\n        return res\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-07"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn distinct_difference_array(nums: Vec<i32>) -> Vec<i32> {\n        let mut s = std::collections::HashSet::<i32>::new();\n        let n = nums.len();\n        let mut list1 = vec![0; n];\n        let mut list2 = vec![0; n];\n        let mut res = vec![0; n];\n        for i in 0..n {\n            s.insert(nums[i]);\n            list1[i] = s.len();\n        }\n        s.clear();\n        for i in (0..n).rev() {\n            list2[i] = s.len();\n            s.insert(nums[i]);\n        }\n        for i in 0..n {\n            res[i] = (list1[i] - list2[i]) as i32\n        }\n        res\n    }\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-4---python",children:"\u9898\u89e3 4 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-01-31"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a300ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a48.3MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8bb0\u5f55\u4e0b\u6807\uff0c\u5224\u65ad\u4e0b\u6807\u4e4b\u95f4\u7684\u6700\u5927\u8ddd\u79bb\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def distinctDifferenceArray(self, nums: List[int]) -> List[int]:\n        rdict = defaultdict(int)\n        for num in nums: rdict[num] += 1\n        cur = len(rdict)\n        res = []\n        ldict = defaultdict(int)\n        for num in nums:\n            rdict[num] -= 1\n            if rdict[num] == 0: cur -= 1\n            ldict[num] += 1\n            if ldict[num] == 1: cur -= 1\n            res.append(-cur)\n        return res\n"})})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var s=i(30758);const t={},l=s.createContext(t);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);