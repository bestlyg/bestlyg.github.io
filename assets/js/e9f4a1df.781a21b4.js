"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[65283],{63165:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>a,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/801-900/\u6709\u5e8f\u961f\u5217","title":"899.\u6709\u5e8f\u961f\u5217","description":"\u94fe\u63a5\uff1a899.\u6709\u5e8f\u961f\u5217","source":"@site/docs/leetcode/801-900/899.\u6709\u5e8f\u961f\u5217.md","sourceDirName":"leetcode/801-900","slug":"/leetcode/801-900/\u6709\u5e8f\u961f\u5217","permalink":"/docs/leetcode/801-900/\u6709\u5e8f\u961f\u5217","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":899,"frontMatter":{},"sidebar":"journal","previous":{"title":"897.\u9012\u589e\u987a\u5e8f\u641c\u7d22\u6811","permalink":"/docs/leetcode/801-900/\u9012\u589e\u987a\u5e8f\u641c\u7d22\u6811"},"next":{"title":"901.\u80a1\u7968\u4ef7\u683c\u8de8\u5ea6","permalink":"/docs/leetcode/901-1000/\u80a1\u7968\u4ef7\u683c\u8de8\u5ea6"}}');var r=t(86070),c=t(31503);const l={},o="899.\u6709\u5e8f\u961f\u5217",i={},d=[{value:"\u9898\u89e3 1 - rust",id:"\u9898\u89e3-1---rust",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"899\u6709\u5e8f\u961f\u5217",children:"899.\u6709\u5e8f\u961f\u5217"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/orderly-queue",children:"899.\u6709\u5e8f\u961f\u5217"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u5b57\u7b26\u4e32\u3001\u6392\u5e8f",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32 s \u548c\u4e00\u4e2a\u6574\u6570 k \u3002\u4f60\u53ef\u4ee5\u4ece s \u7684\u524d k \u4e2a\u5b57\u6bcd\u4e2d\u9009\u62e9\u4e00\u4e2a\uff0c\u5e76\u628a\u5b83\u52a0\u5230\u5b57\u7b26\u4e32\u7684\u672b\u5c3e\u3002 \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---rust",children:"\u9898\u89e3 1 - rust"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-08-03"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.3MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5982\u679c k \u5927\u4e8e 1\uff0c\u8bf4\u660e\u53ef\u4ee5\u4efb\u610f\u8c03\u6362\u987a\u5e8f\uff0c\u5982\u679c k \u7b49\u4e8e 1 \u8bf4\u660e\u53ea\u80fd\u628a\u5934\u90e8\u653e\u5165\u5c3e\u90e8\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use std::cmp::Ordering;\nuse std::collections::VecDeque;\nimpl Solution {\n    pub fn orderly_queue(s: String, k: i32) -> String {\n        if k == 1 {\n            let mut s = s.chars().collect::<VecDeque<char>>();\n            let mut ans = s.clone();\n            let mut temp = s.clone();\n            for i in 0..s.len() {\n                temp.pop_front();\n                temp.push_back(s[i]);\n                if ans.cmp(&temp) == Ordering::Greater {\n                    ans = temp.clone();\n                }\n            }\n            ans.into_iter().collect()\n        } else {\n            let mut s = s.chars().collect::<Vec<char>>();\n            s.sort();\n            s.into_iter().collect()\n        }\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(30758);const r={},c=s.createContext(r);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);