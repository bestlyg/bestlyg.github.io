"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[96842],{93597:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=r(86070),t=r(25710);const i={},l="2451.\u5dee\u503c\u6570\u7ec4\u4e0d\u540c\u7684\u5b57\u7b26\u4e32",c={id:"leetcode/2401-2500/\u5dee\u503c\u6570\u7ec4\u4e0d\u540c\u7684\u5b57\u7b26\u4e32",title:"2451.\u5dee\u503c\u6570\u7ec4\u4e0d\u540c\u7684\u5b57\u7b26\u4e32",description:"\u94fe\u63a5\uff1a2451.\u5dee\u503c\u6570\u7ec4\u4e0d\u540c\u7684\u5b57\u7b26\u4e32",source:"@site/docs/leetcode/2401-2500/2451.\u5dee\u503c\u6570\u7ec4\u4e0d\u540c\u7684\u5b57\u7b26\u4e32.md",sourceDirName:"leetcode/2401-2500",slug:"/leetcode/2401-2500/\u5dee\u503c\u6570\u7ec4\u4e0d\u540c\u7684\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/2401-2500/\u5dee\u503c\u6570\u7ec4\u4e0d\u540c\u7684\u5b57\u7b26\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2451,frontMatter:{},sidebar:"journal",previous:{title:"2448.\u4f7f\u6570\u7ec4\u76f8\u7b49\u7684\u6700\u5c0f\u5f00\u9500",permalink:"/docs/leetcode/2401-2500/\u4f7f\u6570\u7ec4\u76f8\u7b49\u7684\u6700\u5c0f\u5f00\u9500"},next:{title:"2455.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u5076\u6570\u7684\u5e73\u5747\u503c",permalink:"/docs/leetcode/2401-2500/\u53ef\u88ab\u4e09\u6574\u9664\u7684\u5076\u6570\u7684\u5e73\u5747\u503c"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"2451\u5dee\u503c\u6570\u7ec4\u4e0d\u540c\u7684\u5b57\u7b26\u4e32",children:"2451.\u5dee\u503c\u6570\u7ec4\u4e0d\u540c\u7684\u5b57\u7b26\u4e32"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/odd-string-difference",children:"2451.\u5dee\u503c\u6570\u7ec4\u4e0d\u540c\u7684\u5b57\u7b26\u4e32"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4 words \uff0c\u6bcf\u4e00\u4e2a\u5b57\u7b26\u4e32\u957f\u5ea6\u90fd\u76f8\u540c\uff0c\u4ee4\u6240\u6709\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u90fd\u4e3a n \u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-25"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.4MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    string oddString(vector<string>& words) {\n        unordered_map<string, vector<string>> m;\n        for (auto &w : words) {\n            string key = \"\";            \n            for (int i = 0; i < w.size() - 1; i++) key += to_string(w[i + 1] - w[i] + '0');\n            m[key].push_back(w);\n        }\n        for (auto &item : m) {\n            if (item.second.size() == 1) return item.second[0];\n        }\n        return words[0];\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-25"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def oddString(self, words: List[str]) -> str:\n        m = dict()\n        for w in words:\n            key = \"\"\n            for i in range(len(w) - 1):\n                key += chr(ord(w[i + 1]) - ord(w[i]) + ord('0'))\n            if not key in m: m[key] = []\n            m[key].append(w)\n        for v in m.values():\n            if len(v) == 1:\n                return v[0]\n        return words[0]\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-25"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"pub fn str_to_vec(s: &String) -> Vec<char> {\n    s.chars().collect()\n}\nimpl Solution {\n    pub fn odd_string(words: Vec<String>) -> String {\n        let mut m = std::collections::HashMap::<String, Vec<String>>::new();\n        for w in words {\n            let mut key = String::new();\n            {\n                let w: Vec<char> = str_to_vec(&w);\n                for i in 0..w.len() - 1 {\n                    key.push((w[i + 1] as u8 - w[i] as u8 + b'0') as char);\n                }\n            }\n            m.entry(key).or_insert(vec![]).push(w);\n        }\n        for (_, list) in m.into_iter() {\n            if list.len() == 1 {\n                return list[0].clone();\n            }\n        }\n        String::new()\n    }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>c});var s=r(30758);const t={},i=s.createContext(t);function l(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);