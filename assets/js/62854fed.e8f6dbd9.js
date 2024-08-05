"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[25583],{3182:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var s=i(86070),r=i(25710);const l={},t="198.\u6253\u5bb6\u52ab\u820d",c={id:"leetcode/101-200/\u6253\u5bb6\u52ab\u820d",title:"198.\u6253\u5bb6\u52ab\u820d",description:"\u94fe\u63a5\uff1a198.\u6253\u5bb6\u52ab\u820d",source:"@site/docs/leetcode/101-200/198.\u6253\u5bb6\u52ab\u820d.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u6253\u5bb6\u52ab\u820d",permalink:"/web/site/docs/leetcode/101-200/\u6253\u5bb6\u52ab\u820d",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:198,frontMatter:{},sidebar:"journal",previous:{title:"191.\u4f4d1\u7684\u4e2a\u6570",permalink:"/web/site/docs/leetcode/101-200/\u4f4d1\u7684\u4e2a\u6570"},next:{title:"199.\u4e8c\u53c9\u6811\u7684\u53f3\u89c6\u56fe",permalink:"/web/site/docs/leetcode/101-200/\u4e8c\u53c9\u6811\u7684\u53f3\u89c6\u56fe"}},d={},p=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2},{value:"\u9898\u89e3 4 - cpp",id:"\u9898\u89e3-4---cpp",level:2},{value:"\u9898\u89e3 5 - python",id:"\u9898\u89e3-5---python",level:2},{value:"\u9898\u89e3 6 - rust",id:"\u9898\u89e3-6---rust",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"198\u6253\u5bb6\u52ab\u820d",children:"198.\u6253\u5bb6\u52ab\u820d"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/house-robber",children:"198.\u6253\u5bb6\u52ab\u820d"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4f60\u662f\u4e00\u4e2a\u4e13\u4e1a\u7684\u5c0f\u5077\uff0c\u8ba1\u5212\u5077\u7a83\u6cbf\u8857\u7684\u623f\u5c4b\u3002\u6bcf\u95f4\u623f\u5185\u90fd\u85cf\u6709\u4e00\u5b9a\u7684\u73b0\u91d1\uff0c\u5f71\u54cd\u4f60\u5077\u7a83\u7684\u552f\u4e00\u5236\u7ea6\u56e0\u7d20\u5c31\u662f\u76f8\u90bb\u7684\u623f\u5c4b\u88c5\u6709\u76f8\u4e92\u8fde\u901a\u7684\u9632\u76d7\u7cfb\u7edf\uff0c\u5982\u679c\u4e24\u95f4\u76f8\u90bb\u7684\u623f\u5c4b\u5728\u540c\u4e00\u665a\u4e0a\u88ab\u5c0f\u5077\u95ef\u5165\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u62a5\u8b66\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-22"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a32.4MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i]=Math.max(dp[i-2]+nums[i],dp[i+1]);\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"var rob = function (nums: number[]): number {\n  const dp = [0, 0];\n  const len = nums.length;\n  for (let i = 0; i < len; i++) dp[i + 2] = Math.max(dp[i] + nums[i], dp[i + 1]);\n  return dp[len + 1];\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-04"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.6MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function rob(nums: number[]): number {\n  const n = nums.length;\n  if (n === 1) return nums[0];\n  if (n === 2) return Math.max(...nums);\n  const dp = new Array(n).fill(0);\n  dp[0] = nums[0];\n  dp[1] = nums[1];\n  for (let i = 2; i < n; i++) {\n    for (let j = 0; j < i - 1; j++) {\n      dp[i] = Math.max(dp[i], dp[j] + nums[i], dp[i - 1]);\n    }\n  }\n  return dp[n - 1];\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-04"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.3MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function rob(nums: number[]): number {\n  const n = nums.length;\n  const dp = new Array(n).fill(0).map(_ => new Array(2).fill(0));\n  dp[0][1] = nums[0];\n  for (let i = 1; i < n; i++) {\n    dp[i][0] = Math.max(...dp[i - 1]);\n    dp[i][1] = dp[i - 1][0] + nums[i];\n  }\n  return Math.max(...dp[n - 1]);\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-4---cpp",children:"\u9898\u89e3 4 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-16"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.1MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp\u8bb0\u5f55\u5f53\u524d\u4e0b\u6807\u4e0b\u7684\u6700\u5927\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int rob(vector<int>& nums) {\n        int n = nums.size(), res = 0;\n        if (n == 1) return nums[0];\n        vector<int> dp(n, 0);\n        dp[0] = nums[0];\n        dp[1] = max(nums[0], nums[1]);\n        res = max(dp[0], dp[1]);\n        for (int i = 2; i < n; i++) {\n            dp[i] = max(dp[i - 1], dp[i - 2] + nums[i]);\n            res = max(res, dp[i]);\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-5---python",children:"\u9898\u89e3 5 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-16"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a32ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def rob(self, nums: List[int]) -> int:\n        if len(nums) == 1:\n            return nums[0]\n        dp = [0 for _ in nums]\n        dp[0] = nums[0]\n        dp[1] = max(nums[1], nums[0])\n        for i in range(2, len(nums)):\n            dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])\n        return max(dp)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-6---rust",children:"\u9898\u89e3 6 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-16"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a1.95MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn rob(nums: Vec<i32>) -> i32 {\n        let n = nums.len();\n        if n == 1 {\n            nums[0]\n        } else {\n            let mut dp = vec![0; n];\n            dp[0] = nums[0];\n            dp[1] = nums[1].max(nums[0]);\n            for i in 2..n {\n                dp[i] = dp[i - 1].max(dp[i - 2] + nums[i]);\n            }\n            dp.into_iter().max().unwrap()\n        }\n    }\n}\n"})})]})}function o(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>c});var s=i(30758);const r={},l=s.createContext(r);function t(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);