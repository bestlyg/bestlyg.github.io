"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[92932],{91983:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(86070),s=t(31503);const r={},l="2363.\u5408\u5e76\u76f8\u4f3c\u7684\u7269\u54c1",c={id:"leetcode/2301-2400/\u5408\u5e76\u76f8\u4f3c\u7684\u7269\u54c1",title:"2363.\u5408\u5e76\u76f8\u4f3c\u7684\u7269\u54c1",description:"\u94fe\u63a5\uff1a2363.\u5408\u5e76\u76f8\u4f3c\u7684\u7269\u54c1",source:"@site/docs/leetcode/2301-2400/2363.\u5408\u5e76\u76f8\u4f3c\u7684\u7269\u54c1.md",sourceDirName:"leetcode/2301-2400",slug:"/leetcode/2301-2400/\u5408\u5e76\u76f8\u4f3c\u7684\u7269\u54c1",permalink:"/docs/leetcode/2301-2400/\u5408\u5e76\u76f8\u4f3c\u7684\u7269\u54c1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2363,frontMatter:{},sidebar:"journal",previous:{title:"2357.\u4f7f\u6570\u7ec4\u4e2d\u6240\u6709\u5143\u7d20\u90fd\u7b49\u4e8e\u96f6",permalink:"/docs/leetcode/2301-2400/\u4f7f\u6570\u7ec4\u4e2d\u6240\u6709\u5143\u7d20\u90fd\u7b49\u4e8e\u96f6"},next:{title:"2367.\u7b97\u672f\u4e09\u5143\u7ec4\u7684\u6570\u76ee",permalink:"/docs/leetcode/2301-2400/\u7b97\u672f\u4e09\u5143\u7ec4\u7684\u6570\u76ee"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function m(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"2363\u5408\u5e76\u76f8\u4f3c\u7684\u7269\u54c1",children:"2363.\u5408\u5e76\u76f8\u4f3c\u7684\u7269\u54c1"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/merge-similar-items",children:"2363.\u5408\u5e76\u76f8\u4f3c\u7684\u7269\u54c1"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u6709\u5e8f\u96c6\u5408\u3001\u6392\u5e8f",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u4e00\u4e2a\u4e8c\u7ef4\u6570\u7ec4 ret\uff0c\u5176\u4e2d ret[i] = [valuei, weighti]\uff0c weighti \u662f\u6240\u6709\u4ef7\u503c\u4e3a valuei \u7269\u54c1\u7684 \u91cd\u91cf\u4e4b\u548c \u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-28"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.4MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<vector<int>> mergeSimilarItems(vector<vector<int>>& items1, vector<vector<int>>& items2) {\n        map<int, int> m;\n        for (auto &item : items1) m[item[0]] += item[1];\n        for (auto &item : items2) m[item[0]] += item[1];\n        vector<vector<int>> res;\n        for (auto &item : m) res.push_back({ item.first, item.second });\n        return res;\n    }\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-28"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.5MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def mergeSimilarItems(self, items1: List[List[int]], items2: List[List[int]]) -> List[List[int]]:\n        l = [0] * 1005\n        for [k, v] in items1:\n            l[k] += v\n        for [k, v] in items2:\n            l[k] += v\n        res = []\n        for i in range(1005):\n            if l[i]:\n                res.append([i, l[i]])\n        return res\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-28"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.3MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn merge_similar_items(items1: Vec<Vec<i32>>, items2: Vec<Vec<i32>>) -> Vec<Vec<i32>> {\n        let mut m = std::collections::HashMap::<i32, i32>::new();\n        for item in items1 {\n            let v = m.entry(item[0]).or_insert(0);\n            *v += item[1];\n        }\n        for item in items2 {\n            let v = m.entry(item[0]).or_insert(0);\n            *v += item[1];\n        }\n        let mut res = m\n            .into_iter()\n            .map(|(k, v)| vec![k, v])\n            .collect::<Vec<Vec<i32>>>();\n        res.sort_by_key(|item| item[0]);\n        res\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var i=t(30758);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);