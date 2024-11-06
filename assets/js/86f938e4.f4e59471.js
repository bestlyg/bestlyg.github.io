"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[10200],{36125:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=t(86070),i=t(31503);const l={},r="2520.\u7edf\u8ba1\u80fd\u6574\u9664\u6570\u5b57\u7684\u4f4d\u6570",c={id:"leetcode/2501-2600/\u7edf\u8ba1\u80fd\u6574\u9664\u6570\u5b57\u7684\u4f4d\u6570",title:"2520.\u7edf\u8ba1\u80fd\u6574\u9664\u6570\u5b57\u7684\u4f4d\u6570",description:"\u94fe\u63a5\uff1a2520.\u7edf\u8ba1\u80fd\u6574\u9664\u6570\u5b57\u7684\u4f4d\u6570",source:"@site/docs/leetcode/2501-2600/2520.\u7edf\u8ba1\u80fd\u6574\u9664\u6570\u5b57\u7684\u4f4d\u6570.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u7edf\u8ba1\u80fd\u6574\u9664\u6570\u5b57\u7684\u4f4d\u6570",permalink:"/docs/leetcode/2501-2600/\u7edf\u8ba1\u80fd\u6574\u9664\u6570\u5b57\u7684\u4f4d\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2520,frontMatter:{},sidebar:"journal",previous:{title:"2518.\u597d\u5206\u533a\u7684\u6570\u76ee",permalink:"/docs/leetcode/2501-2600/\u597d\u5206\u533a\u7684\u6570\u76ee"},next:{title:"2521.\u6570\u7ec4\u4e58\u79ef\u4e2d\u7684\u4e0d\u540c\u8d28\u56e0\u6570\u6570\u76ee",permalink:"/docs/leetcode/2501-2600/\u6570\u7ec4\u4e58\u79ef\u4e2d\u7684\u4e0d\u540c\u8d28\u56e0\u6570\u6570\u76ee"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"2520\u7edf\u8ba1\u80fd\u6574\u9664\u6570\u5b57\u7684\u4f4d\u6570",children:"2520.\u7edf\u8ba1\u80fd\u6574\u9664\u6570\u5b57\u7684\u4f4d\u6570"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/count-the-digits-that-divide-a-number",children:"2520.\u7edf\u8ba1\u80fd\u6574\u9664\u6570\u5b57\u7684\u4f4d\u6570"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570 num \uff0c\u8fd4\u56de num \u4e2d\u80fd\u6574\u9664 num \u7684\u6570\u4f4d\u7684\u6570\u76ee\u3002\u5982\u679c\u6ee1\u8db3 nums % val == 0 \uff0c\u5219\u8ba4\u4e3a\u6574\u6570 val \u53ef\u4ee5\u6574\u9664 nums \u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-26"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.94MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int countDigits(int num) {\n        int res = 0;\n        for (int v = num; v; v /= 10) res += num % (v % 10) == 0;\n        return res;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-26"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.66MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def countDigits(self, num: int) -> int:\n        return sum(num % int(c) == 0 for c in str(num))\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-26"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a1.93MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn count_digits(num: i32) -> i32 {\n        let mut res = 0;\n        let mut v = num;\n        while v > 0 {\n            res += if num % (v % 10) == 0 { 1 } else { 0 };\n            v /= 10;\n        }\n        res\n    }\n}\n"})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var s=t(30758);const i={},l=s.createContext(i);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);