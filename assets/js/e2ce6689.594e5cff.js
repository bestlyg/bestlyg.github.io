"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[42903],{83651:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=s(86070),r=s(25710);const t={},l="2389.\u548c\u6709\u9650\u7684\u6700\u957f\u5b50\u5e8f\u5217",c={id:"leetcode/2301-2400/\u548c\u6709\u9650\u7684\u6700\u957f\u5b50\u5e8f\u5217",title:"2389.\u548c\u6709\u9650\u7684\u6700\u957f\u5b50\u5e8f\u5217",description:"\u94fe\u63a5\uff1a2389.\u548c\u6709\u9650\u7684\u6700\u957f\u5b50\u5e8f\u5217",source:"@site/docs/leetcode/2301-2400/2389.\u548c\u6709\u9650\u7684\u6700\u957f\u5b50\u5e8f\u5217.md",sourceDirName:"leetcode/2301-2400",slug:"/leetcode/2301-2400/\u548c\u6709\u9650\u7684\u6700\u957f\u5b50\u5e8f\u5217",permalink:"/web/site/docs/leetcode/2301-2400/\u548c\u6709\u9650\u7684\u6700\u957f\u5b50\u5e8f\u5217",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2389,frontMatter:{},sidebar:"journal",previous:{title:"2385.\u611f\u67d3\u4e8c\u53c9\u6811\u9700\u8981\u7684\u603b\u65f6\u95f4",permalink:"/web/site/docs/leetcode/2301-2400/\u611f\u67d3\u4e8c\u53c9\u6811\u9700\u8981\u7684\u603b\u65f6\u95f4"},next:{title:"2391.\u6536\u96c6\u5783\u573e\u7684\u6700\u5c11\u603b\u65f6\u95f4",permalink:"/web/site/docs/leetcode/2301-2400/\u6536\u96c6\u5783\u573e\u7684\u6700\u5c11\u603b\u65f6\u95f4"}},u={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"2389\u548c\u6709\u9650\u7684\u6700\u957f\u5b50\u5e8f\u5217",children:"2389.\u548c\u6709\u9650\u7684\u6700\u957f\u5b50\u5e8f\u5217"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/longest-subsequence-with-limited-sum",children:"2389.\u548c\u6709\u9650\u7684\u6700\u957f\u5b50\u5e8f\u5217"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u524d\u7f00\u548c\u3001\u6392\u5e8f",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4e00\u4e2a\u957f\u5ea6\u4e3a m \u7684\u6570\u7ec4 answer \uff0c\u5176\u4e2d answer[i] \u662f nums \u4e2d \u5143\u7d20\u4e4b\u548c\u5c0f\u4e8e\u7b49\u4e8e queries[i] \u7684 \u5b50\u5e8f\u5217 \u7684 \u6700\u5927 \u957f\u5ea6\xa0 \u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-08-28"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.4MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function answerQueries(nums: number[], queries: number[]): number[] {\n        nums.sort((a, b) => a - b);\n        return queries.map(num => {\n          let i = 0;\n          let cur = 0;\n          while (i < nums.length && cur + nums[i] <= num) cur += nums[i++];\n          return i;\n        });\n      }\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-17"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a20ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a13.3MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> answerQueries(vector<int>& nums, vector<int>& queries) {\n        int n = nums.size(), m = queries.size();\n        vector<int> idxs(m), res(m, 0);\n        for (int i = 0; i < m; i++) idxs[i] = i;\n        sort(idxs.begin(), idxs.end(), [&](auto &a, auto &b){\n            return queries[a] < queries[b];\n        });\n        sort(nums.begin(), nums.end());\n        int idx = 0, sum = 0;\n        for (int i = 0; i < m; i++) {\n            while (idx < n && sum + nums[idx] <= queries[idxs[i]]) sum += nums[idx++];\n            res[idxs[i]] = idx;\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-17"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def answerQueries(self, nums: List[int], queries: List[int]) -> List[int]:\n        n, m = len(nums), len(queries)\n        idxs = [i for i in range(m)]\n        idxs.sort(key=lambda v: queries[v])\n        res = [0 for i in range(m)]\n        nums.sort()\n        idx, sums = 0, 0\n        for i in range(m):\n            while idx < n and sums + nums[idx] <= queries[idxs[i]]:\n                sums += nums[idx]\n                idx += 1\n            res[idxs[i]] = idx\n        return res\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-17"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn answer_queries(mut nums: Vec<i32>, queries: Vec<i32>) -> Vec<i32> {\n        nums.sort();\n        let (n, m) = (nums.len(), queries.len());\n        let mut idxs = (0..m).collect::<Vec<usize>>();\n        idxs.sort_by(|v1, v2| queries[*v1].cmp(&queries[*v2]));\n        let mut res = (0..m).map(|v| v as i32).collect::<Vec<i32>>();\n        let (mut idx, mut sum) = (0, 0);\n        for i in 0..m {\n            while idx < n && sum + nums[idx] <= queries[idxs[i]] {\n                sum += nums[idx];\n                idx += 1;\n            }\n            res[idxs[i]] = idx as i32;\n        }\n        res\n    }\n}\n"})})]})}function m(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var i=s(30758);const r={},t=i.createContext(r);function l(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);