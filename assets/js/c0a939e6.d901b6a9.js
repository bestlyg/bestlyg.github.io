"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[80429],{21806:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(86070),i=t(25710);const r={},l="2610.\u8f6c\u6362\u4e8c\u7ef4\u6570\u7ec4",c={id:"leetcode/2601-2700/\u8f6c\u6362\u4e8c\u7ef4\u6570\u7ec4",title:"2610.\u8f6c\u6362\u4e8c\u7ef4\u6570\u7ec4",description:"\u94fe\u63a5\uff1a2610.\u8f6c\u6362\u4e8c\u7ef4\u6570\u7ec4",source:"@site/docs/leetcode/2601-2700/2610.\u8f6c\u6362\u4e8c\u7ef4\u6570\u7ec4.md",sourceDirName:"leetcode/2601-2700",slug:"/leetcode/2601-2700/\u8f6c\u6362\u4e8c\u7ef4\u6570\u7ec4",permalink:"/docs/leetcode/2601-2700/\u8f6c\u6362\u4e8c\u7ef4\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2610,frontMatter:{},sidebar:"journal",previous:{title:"2609.\u6700\u957f\u5e73\u8861\u5b50\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/2601-2700/\u6700\u957f\u5e73\u8861\u5b50\u5b57\u7b26\u4e32"},next:{title:"2611.\u8001\u9f20\u548c\u5976\u916a",permalink:"/docs/leetcode/2601-2700/\u8001\u9f20\u548c\u5976\u916a"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"2610\u8f6c\u6362\u4e8c\u7ef4\u6570\u7ec4",children:"2610.\u8f6c\u6362\u4e8c\u7ef4\u6570\u7ec4"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/convert-an-array-into-a-2d-array-with-conditions",children:"2610.\u8f6c\u6362\u4e8c\u7ef4\u6570\u7ec4"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \u3002\u8bf7\u4f60\u521b\u5efa\u4e00\u4e2a\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\u7684\u4e8c\u7ef4\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-02"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a29.2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    vector<vector<int>> findMatrix(vector<int> &nums) {\n        unordered_map<int, int> m;\n        for (auto &num : nums) m[num]++;\n        vector<vector<int>> res;\n        while (1) {\n            bool f = false;\n            vector<int> items;\n            for (auto &item : m) {\n                if (item.second == 0) continue;                \n                item.second--;\n                items.push_back(item.first);\n                f = true;\n            }\n            if (!f) break;\n            res.push_back(items);\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-02"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def findMatrix(self, nums: List[int]) -> List[List[int]]:\n        m = Counter()\n        for num in nums:\n            m[num] += 1\n        res = []\n        while True:\n            f = False\n            items = []\n            for k, v in m.items():\n                if v == 0:\n                    continue\n                m[k] -= 1\n                items.append(k)\n                f = True\n            if not f:\n                break\n            res.append(items)\n        return res\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-02"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn find_matrix(nums: Vec<i32>) -> Vec<Vec<i32>> {\n        let mut m = std::collections::HashMap::<i32, i32>::new();\n        for num in nums {\n            *m.entry(num).or_insert(0) += 1;\n        }\n        let mut res = vec![];\n        loop {\n            let mut f = false;\n            let mut items = vec![];\n            for (k, v) in m.iter_mut() {\n                if *v == 0 {\n                    continue;\n                }\n                *v -= 1;\n                items.push(*k);\n                f = true;\n            }\n            if !f {\n                break;\n            }\n            res.push(items);\n        }\n        res\n    }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var s=t(30758);const i={},r=s.createContext(i);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);