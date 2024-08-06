"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[22368],{28421:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=i(86070),r=i(25710);const t={},c="822.\u7ffb\u8f6c\u5361\u7247\u6e38\u620f",l={id:"leetcode/801-900/\u7ffb\u8f6c\u5361\u7247\u6e38\u620f",title:"822.\u7ffb\u8f6c\u5361\u7247\u6e38\u620f",description:"\u94fe\u63a5\uff1a822.\u7ffb\u8f6c\u5361\u7247\u6e38\u620f",source:"@site/docs/leetcode/801-900/822.\u7ffb\u8f6c\u5361\u7247\u6e38\u620f.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u7ffb\u8f6c\u5361\u7247\u6e38\u620f",permalink:"/docs/leetcode/801-900/\u7ffb\u8f6c\u5361\u7247\u6e38\u620f",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:822,frontMatter:{},sidebar:"journal",previous:{title:"821.\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb",permalink:"/docs/leetcode/801-900/\u5b57\u7b26\u7684\u6700\u77ed\u8ddd\u79bb"},next:{title:"823.\u5e26\u56e0\u5b50\u7684\u4e8c\u53c9\u6811",permalink:"/docs/leetcode/801-900/\u5e26\u56e0\u5b50\u7684\u4e8c\u53c9\u6811"}},o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"822\u7ffb\u8f6c\u5361\u7247\u6e38\u620f",children:"822.\u7ffb\u8f6c\u5361\u7247\u6e38\u620f"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/card-flipping-game",children:"822.\u7ffb\u8f6c\u5361\u7247\u6e38\u620f"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u54ea\u4e2a\u6570\u662f\u8fd9\u4e9b\u60f3\u8981\u7684\u6570\u5b57\u4e2d\u6700\u5c0f\u7684\u6570\uff08\u627e\u5230\u8fd9\u4e9b\u6570\u4e2d\u7684\u6700\u5c0f\u503c\uff09\u5462\uff1f\u5982\u679c\u6ca1\u6709\u4e00\u4e2a\u6570\u5b57\u7b26\u5408\u8981\u6c42\u7684\uff0c\u8f93\u51fa 0\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-02"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a24.54MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int flipgame(vector<int>& fronts, vector<int>& backs) {\n        int n = fronts.size(), res = INT_MAX;\n        unordered_map<int, vector<int>> mf, mb;\n        for (int i = 0; i < n; i++) {\n            mf[fronts[i]].push_back(i);\n            mb[backs[i]].push_back(i);\n        }\n        auto check = [&](unordered_map<int, vector<int>> &m, vector<int> &l, int val) -> bool {\n            for (auto &idx : m[val]) {\n                if (l[idx] == val) return false;\n            }\n            return true;\n        };\n        for (int i = 0; i < n; i++) {\n            if (!mf.count(fronts[i]) && !mb.count(fronts[i]) || check(mf, backs, fronts[i]) || check(mb, fronts, fronts[i])) {\n                res = min(res, fronts[i]);\n            }\n            if (!mf.count(backs[i]) && !mb.count(backs[i]) || check(mf, backs, backs[i]) || check(mb, fronts, backs[i])) {\n                res = min(res, backs[i]);\n            }\n        }\n        return res == INT_MAX ? 0 : res;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-02"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a20ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a18.66MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int flipgame(vector<int>& fronts, vector<int>& backs) {\n        int n = fronts.size(), res = 3000;\n        unordered_set<int> s;\n        for (int i = 0; i < n; i++) {\n            if (fronts[i] == backs[i]) s.insert(fronts[i]);\n        }\n        for (int i = 0; i < n; i++) {\n            if (!s.count(fronts[i])) res = min(res, fronts[i]);\n            if (!s.count(backs[i])) res = min(res, backs[i]);\n        }\n        return res % 3000;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-02"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a52ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.72MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def flipgame(self, fronts: List[int], backs: List[int]) -> int:\n        n = len(fronts)\n        res = 3000\n        s = set()\n        for i in range(n):\n            if fronts[i] == backs[i]:\n                s.add(fronts[i])\n        for i in range(n):\n            if not fronts[i] in s:\n                res = min(res, fronts[i])\n            if not backs[i] in s:\n                res = min(res, backs[i])\n        return res % 3000\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-02"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a1.96MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn flipgame(fronts: Vec<i32>, backs: Vec<i32>) -> i32 {\n        let n = fronts.len();\n        let mut s = std::collections::HashSet::<i32>::new();\n        let mut res = 3000;\n        for i in 0..n {\n            if fronts[i] == backs[i] {\n                s.insert(fronts[i]);\n            }\n        }\n        for i in 0..n {\n            if !s.contains(&fronts[i]) {\n                res = res.min(fronts[i]);\n            }\n            if !s.contains(&backs[i]) {\n                res = res.min(backs[i]);\n            }\n        }\n        res % 3000\n    }\n}\n"})})]})}function f(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>l});var s=i(30758);const r={},t=s.createContext(r);function c(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);