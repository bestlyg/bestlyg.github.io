"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[90087],{11965:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var s=t(86070),i=t(25710);const r={},l="1417.\u91cd\u65b0\u683c\u5f0f\u5316\u5b57\u7b26\u4e32",c={id:"leetcode/1401-1500/\u91cd\u65b0\u683c\u5f0f\u5316\u5b57\u7b26\u4e32",title:"1417.\u91cd\u65b0\u683c\u5f0f\u5316\u5b57\u7b26\u4e32",description:"\u94fe\u63a5\uff1a1417.\u91cd\u65b0\u683c\u5f0f\u5316\u5b57\u7b26\u4e32",source:"@site/docs/leetcode/1401-1500/1417.\u91cd\u65b0\u683c\u5f0f\u5316\u5b57\u7b26\u4e32.md",sourceDirName:"leetcode/1401-1500",slug:"/leetcode/1401-1500/\u91cd\u65b0\u683c\u5f0f\u5316\u5b57\u7b26\u4e32",permalink:"/web/site/docs/leetcode/1401-1500/\u91cd\u65b0\u683c\u5f0f\u5316\u5b57\u7b26\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1417,frontMatter:{},sidebar:"journal",previous:{title:"1414.\u548c\u4e3aK\u7684\u6700\u5c11\u6590\u6ce2\u90a3\u5951\u6570\u5b57\u6570\u76ee",permalink:"/web/site/docs/leetcode/1401-1500/\u548c\u4e3aK\u7684\u6700\u5c11\u6590\u6ce2\u90a3\u5951\u6570\u5b57\u6570\u76ee"},next:{title:"1418.\u70b9\u83dc\u5c55\u793a\u8868",permalink:"/web/site/docs/leetcode/1401-1500/\u70b9\u83dc\u5c55\u793a\u8868"}},o={},u=[{value:"\u9898\u89e3 1 - rust",id:"\u9898\u89e3-1---rust",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"1417\u91cd\u65b0\u683c\u5f0f\u5316\u5b57\u7b26\u4e32",children:"1417.\u91cd\u65b0\u683c\u5f0f\u5316\u5b57\u7b26\u4e32"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/reformat-the-string",children:"1417.\u91cd\u65b0\u683c\u5f0f\u5316\u5b57\u7b26\u4e32"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de \u91cd\u65b0\u683c\u5f0f\u5316\u540e \u7684\u5b57\u7b26\u4e32\uff1b\u5982\u679c\u65e0\u6cd5\u6309\u8981\u6c42\u91cd\u65b0\u683c\u5f0f\u5316\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a \u7a7a\u5b57\u7b26\u4e32 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---rust",children:"\u9898\u89e3 1 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-08-11"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u91cd\u65b0\u6392\u5217\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn reformat(s: String) -> String {\n        let (mut list_num, mut list_char) = (Vec::new(), Vec::new());\n        for c in s.chars().collect::<Vec<char>>() {\n            if c.is_numeric() {\n                list_num.push(c);\n            } else {\n                list_char.push(c);\n            }\n        }\n        let mut ans = String::new();\n        if (list_num.len() as i32 - list_char.len() as i32).abs() > 1 {\n            return ans;\n        }\n        let (mut list1, mut list2) = if list_num.len() > list_char.len() {\n            (list_num.into_iter(), list_char.into_iter())\n        } else {\n            (list_char.into_iter(), list_num.into_iter())\n        };\n        loop {\n            let mut c;\n            c = list1.next();\n            if c.is_none() {\n                break;\n            };\n            ans.push(c.unwrap());\n            c = list2.next();\n            if c.is_none() {\n                break;\n            };\n            ans.push(c.unwrap());\n        }\n        ans\n    }\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var s=t(30758);const i={},r=s.createContext(i);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);