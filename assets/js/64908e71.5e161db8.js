"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[69791],{38278:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var r=i(86070),t=i(31503);const c={},s="1499.\u6ee1\u8db3\u4e0d\u7b49\u5f0f\u7684\u6700\u5927\u503c",l={id:"leetcode/1401-1500/\u6ee1\u8db3\u4e0d\u7b49\u5f0f\u7684\u6700\u5927\u503c",title:"1499.\u6ee1\u8db3\u4e0d\u7b49\u5f0f\u7684\u6700\u5927\u503c",description:"\u94fe\u63a5\uff1a1499.\u6ee1\u8db3\u4e0d\u7b49\u5f0f\u7684\u6700\u5927\u503c",source:"@site/docs/leetcode/1401-1500/1499.\u6ee1\u8db3\u4e0d\u7b49\u5f0f\u7684\u6700\u5927\u503c.md",sourceDirName:"leetcode/1401-1500",slug:"/leetcode/1401-1500/\u6ee1\u8db3\u4e0d\u7b49\u5f0f\u7684\u6700\u5927\u503c",permalink:"/docs/leetcode/1401-1500/\u6ee1\u8db3\u4e0d\u7b49\u5f0f\u7684\u6700\u5927\u503c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1499,frontMatter:{},sidebar:"journal",previous:{title:"1494.\u5e76\u884c\u8bfe\u7a0bII",permalink:"/docs/leetcode/1401-1500/\u5e76\u884c\u8bfe\u7a0bII"},next:{title:"1508.\u5b50\u6570\u7ec4\u548c\u6392\u5e8f\u540e\u7684\u533a\u95f4\u548c",permalink:"/docs/leetcode/1501-1600/\u5b50\u6570\u7ec4\u548c\u6392\u5e8f\u540e\u7684\u533a\u95f4\u548c"}},u={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"1499\u6ee1\u8db3\u4e0d\u7b49\u5f0f\u7684\u6700\u5927\u503c",children:"1499.\u6ee1\u8db3\u4e0d\u7b49\u5f0f\u7684\u6700\u5927\u503c"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/max-value-of-equation",children:"1499.\u6ee1\u8db3\u4e0d\u7b49\u5f0f\u7684\u6700\u5927\u503c"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u961f\u5217\u3001\u6570\u7ec4\u3001\u6ed1\u52a8\u7a97\u53e3\u3001\u5355\u8c03\u961f\u5217\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5b9a\u4e00\u4e2a\u957f\u5ea6\u4e3a n \u7684\u73af\u5f62\u6574\u6570\u6570\u7ec4 nums \uff0c\u8fd4\u56de nums \u7684\u975e\u7a7a \u5b50\u6570\u7ec4 \u7684\u6700\u5927\u53ef\u80fd\u548c \u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-23"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19.6MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7edf\u8ba1\u5de6\u53f3\u6700\u5927\u9ad8\u5ea6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int trap(vector<int>& height) {\n        int sum = 0, n = height.size();\n        vector<int> r(n, 0);\n        for (int i = n - 1, cur = 0; i >= 0; i--) {\n            r[i] = cur;\n            cur = max(cur, height[i]);\n        }\n        for (int i = 0, cur = 0; i < n; i++) {\n            cur = max(cur, height[i]);\n            sum += max(0, min(cur, r[i]) - height[i]);\n        }\n        return sum;\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-23"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.7MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def trap(self, height: List[int]) -> int:\n        sum = 0\n        n = len(height)\n        cur = 0\n        r = [0] * n\n        for i in range(n-1, -1, -1):\n            r[i] = cur\n            cur = max(cur, height[i])\n        cur = 0\n        for i in range(n):\n            cur = max(cur, height[i])\n            sum += max(0, min(cur, r[i])-height[i])\n        return sum\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-23"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn trap(height: Vec<i32>) -> i32 {\n        let mut sum = 0;\n        let n = height.len();\n        let mut cur = 0;\n        let mut r = vec![0; n];\n        for i in (0..n).rev() {\n            r[i] = cur;\n            cur = cur.max(height[i]);\n        }\n        cur = 0;\n        for i in 0..n {\n            cur = cur.max(height[i]);\n            sum += 0.max(cur.min(r[i]) - height[i]);\n        }\n        sum\n    }\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>l});var r=i(30758);const t={},c=r.createContext(t);function s(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);