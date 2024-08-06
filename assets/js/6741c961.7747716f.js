"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[68320],{9949:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var l=s(86070),r=s(25710);const i={},u="2563.\u7edf\u8ba1\u516c\u5e73\u6570\u5bf9\u7684\u6570\u76ee",t={id:"leetcode/2501-2600/\u7edf\u8ba1\u516c\u5e73\u6570\u5bf9\u7684\u6570\u76ee",title:"2563.\u7edf\u8ba1\u516c\u5e73\u6570\u5bf9\u7684\u6570\u76ee",description:"\u94fe\u63a5\uff1a2563.\u7edf\u8ba1\u516c\u5e73\u6570\u5bf9\u7684\u6570\u76ee",source:"@site/docs/leetcode/2501-2600/2563.\u7edf\u8ba1\u516c\u5e73\u6570\u5bf9\u7684\u6570\u76ee.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u7edf\u8ba1\u516c\u5e73\u6570\u5bf9\u7684\u6570\u76ee",permalink:"/docs/leetcode/2501-2600/\u7edf\u8ba1\u516c\u5e73\u6570\u5bf9\u7684\u6570\u76ee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2563,frontMatter:{},sidebar:"journal",previous:{title:"2562.\u627e\u51fa\u6570\u7ec4\u7684\u4e32\u8054\u503c",permalink:"/docs/leetcode/2501-2600/\u627e\u51fa\u6570\u7ec4\u7684\u4e32\u8054\u503c"},next:{title:"2564.\u5b50\u5b57\u7b26\u4e32\u5f02\u6216\u67e5\u8be2",permalink:"/docs/leetcode/2501-2600/\u5b50\u5b57\u7b26\u4e32\u5f02\u6216\u67e5\u8be2"}},o={},c=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"2563\u7edf\u8ba1\u516c\u5e73\u6570\u5bf9\u7684\u6570\u76ee",children:"2563.\u7edf\u8ba1\u516c\u5e73\u6570\u5bf9\u7684\u6570\u76ee"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(e.a,{href:"https://leetcode.cn/problems/count-the-number-of-fair-pairs",children:"2563.\u7edf\u8ba1\u516c\u5e73\u6570\u5bf9\u7684\u6570\u76ee"}),(0,l.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,l.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u4e8c\u5206\u67e5\u627e\u3001\u6392\u5e8f",(0,l.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u3001\u957f\u5ea6\u4e3a n \u7684\u6574\u6570\u6570\u7ec4 nums \uff0c\u548c\u4e24\u4e2a\u6574\u6570 lower \u548c upper \uff0c\u8fd4\u56de \u516c\u5e73\u6570\u5bf9\u7684\u6570\u76ee \u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-12"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a124ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a52.2MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"\nclass Solution {\npublic:\n    long long countFairPairs(vector<int>& nums, int lower, int upper) {\n        sort(nums.begin(), nums.end());\n        long long res = 0;\n        int l = 0, r = 0, n = nums.size();\n        for (int i = 1; i < n; i++) {\n            while (r + 1 < i && nums[r + 1] + nums[i] <= upper) r++;\n            while (r - 1 >= 0 && nums[r] + nums[i] > upper) r--;            \n            while (l + 1 < i && nums[l] + nums[i] < lower) l++;\n            while (l - 1 >= 0 && nums[l - 1] + nums[i] >= lower) l--;\n            if (r > l) res += r - l + 1;\n            else if (r == l && nums[l] + nums[i] >= lower && nums[l] + nums[i] <= upper) res += 1;  \n        }\n        return res;\n    }\n};\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-12"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a312ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a26.7MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"class Solution:\n  def countFairPairs(self, nums: List[int], lower: int, upper: int) -> int:\n      nums.sort()\n      res = 0\n      l, r, n = 0, 0, len(nums)\n      for i in range(1, n):\n          while r + 1 < i and nums[r + 1] + nums[i] <= upper:\n              r += 1\n          while r - 1 >= 0 and nums[r] + nums[i] > upper:\n              r -= 1\n          while l + 1 < i and nums[l] + nums[i] < lower:\n              l += 1\n          while l - 1 >= 0 and nums[l - 1] + nums[i] >= lower:\n              l -= 1\n          if r > l:\n              res += r - l + 1\n          elif r == l and nums[l] + nums[i] >= lower and nums[l] + nums[i] <= upper:\n              res += 1\n      return res\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-12"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn count_fair_pairs(nums: Vec<i32>, lower: i32, upper: i32) -> i64 {\n        let mut nums = nums;\n        nums.sort();\n        let mut res: i64 = 0;\n        let (mut l, mut r, n): (i64, i64, usize) = (0, 0, nums.len());\n        for i in 1..n {\n            while r + 1 < i as i64 && nums[r as usize + 1] + nums[i] <= upper {\n                r += 1\n            }\n            while r - 1 >= 0 && nums[r as usize] + nums[i] > upper {\n                r -= 1\n            }\n            while l + 1 < i as i64 && nums[l as usize] + nums[i] < lower {\n                l += 1\n            }\n            while l - 1 >= 0 && nums[l as usize - 1] + nums[i] >= lower {\n                l -= 1\n            }\n            if r > l {\n                res += (r - l + 1) as i64;\n            } else if r == l && nums[l as usize] + nums[i] >= lower && nums[l as usize] + nums[i] <= upper {\n                res += 1\n            }\n        }\n        res\n    }\n}\n"})})]})}function m(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>u,x:()=>t});var l=s(30758);const r={},i=l.createContext(r);function u(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:u(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);