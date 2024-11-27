"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[55395],{43592:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"leetcode/1401-1500/\u4fdd\u8bc1\u6587\u4ef6\u540d\u552f\u4e00","title":"1487.\u4fdd\u8bc1\u6587\u4ef6\u540d\u552f\u4e00","description":"\u94fe\u63a5\uff1a1487.\u4fdd\u8bc1\u6587\u4ef6\u540d\u552f\u4e00","source":"@site/docs/leetcode/1401-1500/1487.\u4fdd\u8bc1\u6587\u4ef6\u540d\u552f\u4e00.md","sourceDirName":"leetcode/1401-1500","slug":"/leetcode/1401-1500/\u4fdd\u8bc1\u6587\u4ef6\u540d\u552f\u4e00","permalink":"/docs/leetcode/1401-1500/\u4fdd\u8bc1\u6587\u4ef6\u540d\u552f\u4e00","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1487,"frontMatter":{},"sidebar":"journal","previous":{"title":"1486.\u6570\u7ec4\u5f02\u6216\u64cd\u4f5c","permalink":"/docs/leetcode/1401-1500/\u6570\u7ec4\u5f02\u6216\u64cd\u4f5c"},"next":{"title":"1488.\u907f\u514d\u6d2a\u6c34\u6cdb\u6ee5","permalink":"/docs/leetcode/1401-1500/\u907f\u514d\u6d2a\u6c34\u6cdb\u6ee5"}}');var i=t(86070),l=t(31503);const r={},c="1487.\u4fdd\u8bc1\u6587\u4ef6\u540d\u552f\u4e00",a={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function m(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"1487\u4fdd\u8bc1\u6587\u4ef6\u540d\u552f\u4e00",children:"1487.\u4fdd\u8bc1\u6587\u4ef6\u540d\u552f\u4e00"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/making-file-names-unique",children:"1487.\u4fdd\u8bc1\u6587\u4ef6\u540d\u552f\u4e00"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u957f\u5ea6\u4e3a n \u7684\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u5176\u4e2d ans[i] \u662f\u521b\u5efa\u7b2c i \u4e2a\u6587\u4ef6\u5939\u65f6\u7cfb\u7edf\u5206\u914d\u7ed9\u8be5\u6587\u4ef6\u5939\u7684\u5b9e\u9645\u540d\u79f0\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-03"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a168ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a57.2MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'class Solution {\npublic:\n    vector<string> getFolderNames(vector<string>& names) {\n        unordered_map<string, int> m;\n        for (int i = 0; i < names.size(); i++) {\n            string name = names[i];\n            if (m.count(name)) {\n                for (int j = m[name]; ; j++) {\n                    string next = name + "(" + to_string(j) + ")";\n                    if (!m.count(next)) {\n                        names[i] = next;\n                        m[next] = 1;\n                        m[name] = j + 1;\n                        break;\n                    }\n                }\n            } else {\n                m[name] = 1;\n            }\n        }\n        return names;\n    }\n};\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-03"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a140ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a28.3MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'class Solution:\n    def getFolderNames(self, names: List[str]) -> List[str]:\n        m = {}\n        for i in range(len(names)):\n            name = names[i]\n            if name in m:\n                j = m[name]\n                while name + "(" + str(j) + ")" in m:\n                    j += 1\n                next_name = name + "(" + str(j) + ")"\n                names[i] = next_name\n                m[next_name] = 1\n                m[name] = j + 1\n            else:\n                m[name] = 1\n        return names\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-03"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.3MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn get_folder_names(names: Vec<String>) -> Vec<String> {\n        let mut names = names;\n        let mut m = std::collections::HashMap::<String, usize>::new();\n        for i in 0..names.len() {\n            let name = names[i].clone();\n            if m.contains_key(&name) {\n                let mut j = *m.get(&name).unwrap();\n                let next;\n                loop {\n                    let mut item = name.clone();\n                    item.push('(');\n                    item.push_str(&j.to_string());\n                    item.push(')');\n                    if !m.contains_key(&item) {\n                        next = item;\n                        break;\n                    }\n                    j += 1;\n                }\n                m.insert(next.clone(), 1);\n                names[i] = next.clone();\n                *m.get_mut(&name).unwrap() = j + 1;\n            } else {\n                m.insert(name.clone(), 1);\n            }\n        }\n        names\n    }\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(m,{...n})}):m(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var s=t(30758);const i={},l=s.createContext(i);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);