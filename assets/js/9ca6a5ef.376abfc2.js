"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[3913],{53638:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var t=i(86070),s=i(31503);const r={},l="970.\u5f3a\u6574\u6570",o={id:"leetcode/901-1000/\u5f3a\u6574\u6570",title:"970.\u5f3a\u6574\u6570",description:"\u94fe\u63a5\uff1a970.\u5f3a\u6574\u6570",source:"@site/docs/leetcode/901-1000/970.\u5f3a\u6574\u6570.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u5f3a\u6574\u6570",permalink:"/docs/leetcode/901-1000/\u5f3a\u6574\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:970,frontMatter:{},sidebar:"journal",previous:{title:"969.\u714e\u997c\u6392\u5e8f",permalink:"/docs/leetcode/901-1000/\u714e\u997c\u6392\u5e8f"},next:{title:"971.\u7ffb\u8f6c\u4e8c\u53c9\u6811\u4ee5\u5339\u914d\u5148\u5e8f\u904d\u5386",permalink:"/docs/leetcode/901-1000/\u7ffb\u8f6c\u4e8c\u53c9\u6811\u4ee5\u5339\u914d\u5148\u5e8f\u904d\u5386"}},c={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"970\u5f3a\u6574\u6570",children:"970.\u5f3a\u6574\u6570"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/powerful-integers",children:"970.\u5f3a\u6574\u6570"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u6570\u5b66\u3001\u679a\u4e3e",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e09\u4e2a\u6574\u6570 x \u3001 y \u548c bound \uff0c\u8fd4\u56de \u503c\u5c0f\u4e8e\u6216\u7b49\u4e8e bound \u7684\u6240\u6709 \u5f3a\u6574\u6570 \u7ec4\u6210\u7684\u5217\u8868 \u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-02"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.6MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> powerfulIntegers(int x, int y, int bound) {\n        vector<int> list;\n        unordered_set<int> res;\n        for (int i = 0; pow(x, i) <= bound; i++) {\n            list.push_back(pow(x, i));\n            if (x == 1) break;\n        }\n        for (int i = 0; pow(y, i) <= bound; i++) {\n            int ynum = pow(y, i);\n            for (auto &xnum : list)\n                if (ynum + xnum <= bound) res.insert(ynum + xnum);\n                else break;\n            if (y == 1) break;\n        }\n        return vector<int>(res.begin(), res.end());\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-02"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.2MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def powerfulIntegers(self, x: int, y: int, bound: int) -> List[int]:\n        list = []\n        res = set()\n        i = 0\n        while pow(x, i) <= bound:\n            list.append(pow(x, i))\n            if x == 1:\n                break\n            i += 1\n        i = 0\n        while pow(y, i) <= bound:\n            ynum = pow(y, i)\n            for xnum in list:\n                if ynum + xnum <= bound:\n                    res.add(ynum + xnum)\n                else:\n                    break\n            if y == 1:\n                break\n            i += 1\n        return [num for num in res]\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-02"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn powerful_integers(x: i32, y: i32, bound: i32) -> Vec<i32> {\n        let mut list = vec![];\n        let mut res = std::collections::HashSet::<i32>::new();\n        let mut i = 0;\n        while x.pow(i) <= bound {\n            list.push(x.pow(i));\n            if x == 1 {\n                break;\n            }\n            i += 1;\n        }\n        i = 0;\n        while y.pow(i) <= bound {\n            let ynum = y.pow(i);\n            for xnum in &list {\n                if ynum + *xnum <= bound {\n                    res.insert(ynum + *xnum);\n                } else {\n                    break;\n                }\n            }\n            if y == 1 {\n                break;\n            }\n            i += 1;\n        }\n        res.into_iter().collect()\n    }\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>o});var t=i(30758);const s={},r=t.createContext(s);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);