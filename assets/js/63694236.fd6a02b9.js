"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[7492],{85571:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=s(86070),r=s(25710);const l={},i="2588.\u7edf\u8ba1\u7f8e\u4e3d\u5b50\u6570\u7ec4\u6570\u76ee",c={id:"leetcode/2501-2600/\u7edf\u8ba1\u7f8e\u4e3d\u5b50\u6570\u7ec4\u6570\u76ee",title:"2588.\u7edf\u8ba1\u7f8e\u4e3d\u5b50\u6570\u7ec4\u6570\u76ee",description:"\u94fe\u63a5\uff1a2588.\u7edf\u8ba1\u7f8e\u4e3d\u5b50\u6570\u7ec4\u6570\u76ee",source:"@site/docs/leetcode/2501-2600/2588.\u7edf\u8ba1\u7f8e\u4e3d\u5b50\u6570\u7ec4\u6570\u76ee.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u7edf\u8ba1\u7f8e\u4e3d\u5b50\u6570\u7ec4\u6570\u76ee",permalink:"/docs/leetcode/2501-2600/\u7edf\u8ba1\u7f8e\u4e3d\u5b50\u6570\u7ec4\u6570\u76ee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2588,frontMatter:{},sidebar:"journal",previous:{title:"2587.\u91cd\u6392\u6570\u7ec4\u4ee5\u5f97\u5230\u6700\u5927\u524d\u7f00\u5206\u6570",permalink:"/docs/leetcode/2501-2600/\u91cd\u6392\u6570\u7ec4\u4ee5\u5f97\u5230\u6700\u5927\u524d\u7f00\u5206\u6570"},next:{title:"2589.\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u7684\u6700\u5c11\u65f6\u95f4",permalink:"/docs/leetcode/2501-2600/\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u7684\u6700\u5c11\u65f6\u95f4"}},o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"2588\u7edf\u8ba1\u7f8e\u4e3d\u5b50\u6570\u7ec4\u6570\u76ee",children:"2588.\u7edf\u8ba1\u7f8e\u4e3d\u5b50\u6570\u7ec4\u6570\u76ee"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/count-the-number-of-beautiful-subarrays",children:"2588.\u7edf\u8ba1\u7f8e\u4e3d\u5b50\u6570\u7ec4\u6570\u76ee"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u524d\u7f00\u548c",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u6570\u7ec4 nums \u4e2d \u7f8e\u4e3d\u5b50\u6570\u7ec4 \u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-12"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a268ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a117.5MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u7f00\u548c\u904d\u5386\uff0c\u7edf\u8ba1\u524d\u9762\u76f8\u540c\u7684\u63a9\u7801\u6570\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    long long beautifulSubarrays(vector<int>& nums) {\n        unordered_map<int, int> m;\n        m[0]++;\n        long long res = 0;\n        int mask = 0;\n        for (auto &num : nums) {\n            mask |= num;\n            res += m[mask];\n            m[mask]++;\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-12"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a280ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a36.9MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def beautifulSubarrays(self, nums: List[int]) -> int:\n        m = Counter()\n        m[0] += 1\n        res, mask = 0, 0\n        for num in nums:\n            mask ^= num\n            res += m[mask]\n            m[mask] += 1\n        return res\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-12"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a4.6MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn beautiful_subarrays(nums: Vec<i32>) -> i64 {\n        let mut m = std::collections::HashMap::<i32, i32>::new();\n        m.insert(0, 1);\n        let (mut res, mut mask) = (0i64, 0);\n        for num in nums {\n            mask ^= num;\n            let item = m.entry(mask).or_insert(0);\n            res += *item as i64;\n            *item += 1;\n        }\n        res\n    }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>c});var t=s(30758);const r={},l=t.createContext(r);function i(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);