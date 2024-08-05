"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[68608],{90234:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(86070),i=t(25710);const r={},l="640.\u6c42\u89e3\u65b9\u7a0b",o={id:"leetcode/601-700/\u6c42\u89e3\u65b9\u7a0b",title:"640.\u6c42\u89e3\u65b9\u7a0b",description:"\u94fe\u63a5\uff1a640.\u6c42\u89e3\u65b9\u7a0b",source:"@site/docs/leetcode/601-700/640.\u6c42\u89e3\u65b9\u7a0b.md",sourceDirName:"leetcode/601-700",slug:"/leetcode/601-700/\u6c42\u89e3\u65b9\u7a0b",permalink:"/web/site/docs/leetcode/601-700/\u6c42\u89e3\u65b9\u7a0b",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:640,frontMatter:{},sidebar:"journal",previous:{title:"639.\u89e3\u7801\u65b9\u6cd5II",permalink:"/web/site/docs/leetcode/601-700/\u89e3\u7801\u65b9\u6cd5II"},next:{title:"641.\u8bbe\u8ba1\u5faa\u73af\u53cc\u7aef\u961f\u5217",permalink:"/web/site/docs/leetcode/601-700/\u8bbe\u8ba1\u5faa\u73af\u53cc\u7aef\u961f\u5217"}},u={},c=[{value:"\u9898\u89e3 1 - rust",id:"\u9898\u89e3-1---rust",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"640\u6c42\u89e3\u65b9\u7a0b",children:"640.\u6c42\u89e3\u65b9\u7a0b"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/solve-the-equation",children:"640.\u6c42\u89e3\u65b9\u7a0b"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u5b57\u7b26\u4e32\u3001\u6a21\u62df",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6c42\u89e3\u4e00\u4e2a\u7ed9\u5b9a\u7684\u65b9\u7a0b\uff0c\u5c06 x \u4ee5\u5b57\u7b26\u4e32 \"x=#value\" \u7684\u5f62\u5f0f\u8fd4\u56de\u3002\u8be5\u65b9\u7a0b\u4ec5\u5305\u542b '+' \uff0c '-' \u64cd\u4f5c\uff0c\u53d8\u91cf x \u548c\u5176\u5bf9\u5e94\u7cfb\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---rust",children:"\u9898\u89e3 1 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-08-10"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u62c6\u5206\u540e\u89e3\u6790\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"use std::collections::VecDeque;\nimpl Solution {\n    pub fn solve_equation(equation: String) -> String {\n        let (mut l, mut r) = (0, 0);\n        let equation = equation.split('=').collect::<Vec<&str>>();\n        Solution::analysis(&mut l, &mut r, Solution::format(equation[0]), 1);\n        Solution::analysis(&mut l, &mut r, Solution::format(equation[1]), -1);\n        if l == 0 && r == 0 {\n            String::from(\"Infinite solutions\")\n        } else if l == 0 {\n            String::from(\"No solution\")\n        } else {\n            format!(\"x={}\", r / l)\n        }\n    }\n    fn format(s: &str) -> String {\n        let mut ans = s.to_string().chars().collect::<VecDeque<char>>();\n        let front = ans.front().unwrap();\n        if *front != '+' && *front != '-' {\n            ans.push_front('+');\n        }\n        ans.push_front('0');\n        String::from_utf8(ans.iter().map(|c| *c as u8).collect::<Vec<u8>>()).unwrap()\n    }\n    fn analysis(l: &mut i32, r: &mut i32, s: String, flag: i32) {\n        let s = s.chars().collect::<Vec<char>>();\n        let mut i = 0;\n        while i < s.len() {\n            let mut num = String::new();\n            if i != 0 {\n                num.push(s[i - 1]);\n            }\n            while i < s.len() && s[i] != '+' && s[i] != '-' && s[i] != 'x' {\n                num.push(s[i]);\n                i += 1;\n            }\n            if i < s.len() && s[i] == 'x' {\n                if num.len() == 1 && (num.eq(\"+\") || num.eq(\"-\")) {\n                    num.push('1');\n                }\n                *l += flag * num.parse::<i32>().unwrap();\n                i += 1;\n            } else {\n                *r += -1 * flag * num.parse::<i32>().unwrap();\n            }\n            i += 1;\n        }\n    }\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>o});var s=t(30758);const i={},r=s.createContext(i);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);