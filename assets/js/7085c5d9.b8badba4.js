"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[73182],{37443:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/2501-2600/\u5c06\u73e0\u5b50\u653e\u5165\u80cc\u5305\u4e2d","title":"2551.\u5c06\u73e0\u5b50\u653e\u5165\u80cc\u5305\u4e2d","description":"\u94fe\u63a5\uff1a2551.\u5c06\u73e0\u5b50\u653e\u5165\u80cc\u5305\u4e2d","source":"@site/docs/leetcode/2501-2600/2551.\u5c06\u73e0\u5b50\u653e\u5165\u80cc\u5305\u4e2d.md","sourceDirName":"leetcode/2501-2600","slug":"/leetcode/2501-2600/\u5c06\u73e0\u5b50\u653e\u5165\u80cc\u5305\u4e2d","permalink":"/docs/leetcode/2501-2600/\u5c06\u73e0\u5b50\u653e\u5165\u80cc\u5305\u4e2d","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2551,"frontMatter":{},"sidebar":"journal","previous":{"title":"2550.\u7334\u5b50\u78b0\u649e\u7684\u65b9\u6cd5\u6570","permalink":"/docs/leetcode/2501-2600/\u7334\u5b50\u78b0\u649e\u7684\u65b9\u6cd5\u6570"},"next":{"title":"2552.\u7edf\u8ba1\u4e0a\u5347\u56db\u5143\u7ec4","permalink":"/docs/leetcode/2501-2600/\u7edf\u8ba1\u4e0a\u5347\u56db\u5143\u7ec4"}}');var l=s(86070),t=s(31503);const r={},c="2551.\u5c06\u73e0\u5b50\u653e\u5165\u80cc\u5305\u4e2d",o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"2551\u5c06\u73e0\u5b50\u653e\u5165\u80cc\u5305\u4e2d",children:"2551.\u5c06\u73e0\u5b50\u653e\u5165\u80cc\u5305\u4e2d"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(e.a,{href:"https://leetcode.cn/problems/put-marbles-in-bags",children:"2551.\u5c06\u73e0\u5b50\u653e\u5165\u80cc\u5305\u4e2d"}),(0,l.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,l.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u6392\u5e8f\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,l.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4e00\u4e2a\u73e0\u5b50\u5206\u914d\u65b9\u6848\u7684 \u5206\u6570 \u662f\u6240\u6709 k \u4e2a\u80cc\u5305\u7684\u4ef7\u683c\u4e4b\u548c\u3002\u8bf7\u4f60\u8fd4\u56de\u6240\u6709\u5206\u914d\u65b9\u6848\u4e2d\uff0c\u6700\u5927\u5206\u6570 \u4e0e \u6700\u5c0f\u5206\u6570 \u7684 \u5dee\u503c \u4e3a\u591a\u5c11\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-29"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a152ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a67.6MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8d2a\u5fc3\uff0c\u53ea\u7edf\u8ba1\u9996\u4f4d\uff0c\u5f53\u4e00\u4e2a\u73e0\u5b50\u5f53\u524d\u7ec4\u662f\u672b\u5c3e\u65f6\uff0c\u4e0b\u4e00\u4e2a\u73e0\u5b50\u662f\u4e0b\u4e00\u7ec4\u7684\u9996\u4e2a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    long long putMarbles(vector<int>& weights, int k) {\n        vector<long long> list;\n        for (int i = 1; i < weights.size(); i++) list.push_back(weights[i - 1] + weights[i]);\n        sort(list.begin(), list.end());\n        long long ans = 0;\n        for (int i = 0; i < k - 1; i++) ans += list[list.size() - i - 1] - list[i];\n        return ans;\n    }\n};\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-29"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a224ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a25.4MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def putMarbles(self, weights: List[int], k: int) -> int:\n        list=[]\n        n = len(weights)\n        for i in range(1, n):\n            list.append(weights[i - 1] + weights[i])\n        list.sort()\n        return sum(list[len(list) - k + 1:]) - sum(list[:k - 1])\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-29"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a3.5MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn put_marbles(weights: Vec<i32>, k: i32) -> i64 {\n        let mut list = Vec::new();\n        for i in 1..weights.len() {\n            list.push(weights[i - 1] + weights[i]);\n        }\n        list.sort();\n        let mut ans = 0;\n        for i in 0..k - 1 {\n            let i = i as usize;\n            ans += (list[list.len() - i - 1] - list[i]) as i64;\n        }\n        ans\n    }\n}\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-29"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a3.5MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn put_marbles(weights: Vec<i32>, k: i32) -> i64 {\n        let mut list = Vec::new();\n        for i in 1..weights.len() {\n            list.push(weights[i - 1] + weights[i]);\n        }\n        list.sort();\n        let fold = |sum, cur: &i32| sum + (*cur) as i64;\n        list[list.len() - k as usize + 1..].iter().fold(0, fold)\n            - list[..k as usize - 1].iter().fold(0, fold)\n    }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},31503:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>c});var i=s(30758);const l={},t=i.createContext(l);function r(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);