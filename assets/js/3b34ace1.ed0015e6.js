"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[64619],{9610:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=t(86070),r=t(25710);const i={},l="2287.\u91cd\u6392\u5b57\u7b26\u5f62\u6210\u76ee\u6807\u5b57\u7b26\u4e32",c={id:"leetcode/2201-2300/\u91cd\u6392\u5b57\u7b26\u5f62\u6210\u76ee\u6807\u5b57\u7b26\u4e32",title:"2287.\u91cd\u6392\u5b57\u7b26\u5f62\u6210\u76ee\u6807\u5b57\u7b26\u4e32",description:"\u94fe\u63a5\uff1a2287.\u91cd\u6392\u5b57\u7b26\u5f62\u6210\u76ee\u6807\u5b57\u7b26\u4e32",source:"@site/docs/leetcode/2201-2300/2287.\u91cd\u6392\u5b57\u7b26\u5f62\u6210\u76ee\u6807\u5b57\u7b26\u4e32.md",sourceDirName:"leetcode/2201-2300",slug:"/leetcode/2201-2300/\u91cd\u6392\u5b57\u7b26\u5f62\u6210\u76ee\u6807\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/2201-2300/\u91cd\u6392\u5b57\u7b26\u5f62\u6210\u76ee\u6807\u5b57\u7b26\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2287,frontMatter:{},sidebar:"journal",previous:{title:"2283.\u5224\u65ad\u4e00\u4e2a\u6570\u7684\u6570\u5b57\u8ba1\u6570\u662f\u5426\u7b49\u4e8e\u6570\u4f4d\u7684\u503c",permalink:"/docs/leetcode/2201-2300/\u5224\u65ad\u4e00\u4e2a\u6570\u7684\u6570\u5b57\u8ba1\u6570\u662f\u5426\u7b49\u4e8e\u6570\u4f4d\u7684\u503c"},next:{title:"2288.\u4ef7\u683c\u51cf\u514d",permalink:"/docs/leetcode/2201-2300/\u4ef7\u683c\u51cf\u514d"}},a={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - rust",id:"\u9898\u89e3-2---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"2287\u91cd\u6392\u5b57\u7b26\u5f62\u6210\u76ee\u6807\u5b57\u7b26\u4e32",children:"2287.\u91cd\u6392\u5b57\u7b26\u5f62\u6210\u76ee\u6807\u5b57\u7b26\u4e32"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/rearrange-characters-to-make-target-string",children:"2287.\u91cd\u6392\u5b57\u7b26\u5f62\u6210\u76ee\u6807\u5b57\u7b26\u4e32"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u8ba1\u6570",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4ece s \u4e2d\u53d6\u51fa\u5b57\u7b26\u5e76\u91cd\u65b0\u6392\u5217\uff0c\u8fd4\u56de\u53ef\u4ee5\u5f62\u6210 target \u7684 \u6700\u5927 \u526f\u672c\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-13"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int rearrangeCharacters(string s, string target) {\n        int l1[26] = {0}, l2[26] = {0}, ans = 0x7fffffff;\n        for (auto &c : s) l1[c - 'a']++;\n        for (auto &c : target) l2[c - 'a']++;\n        for (int i = 0; i < 26; i++) {\n            if (l2[i] == 0) continue;\n            ans = min(ans, l1[i] / l2[i]);\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---rust",children:"\u9898\u89e3 2 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-13"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn rearrange_characters(s: String, target: String) -> i32 {\n        let mut ans = i32::MAX;\n        let (mut l1, mut l2) = ([0; 26], [0; 26]);\n        s.chars().for_each(|c| {\n            l1[c as usize - 'a' as usize] += 1;\n        });\n        target.chars().for_each(|c| {\n            l2[c as usize - 'a' as usize] += 1;\n        });\n        for i in 0..26 {\n            if l2[i] != 0 {\n                ans = ans.min(l1[i] / l2[i]);\n            }\n        }\n        ans\n    }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var s=t(30758);const r={},i=s.createContext(r);function l(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);