"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[27838],{85740:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=s(86070),r=s(25710);const i={},c="504.\u4e03\u8fdb\u5236\u6570",l={id:"leetcode/501-600/\u4e03\u8fdb\u5236\u6570",title:"504.\u4e03\u8fdb\u5236\u6570",description:"\u94fe\u63a5\uff1a504.\u4e03\u8fdb\u5236\u6570",source:"@site/docs/leetcode/501-600/504.\u4e03\u8fdb\u5236\u6570.md",sourceDirName:"leetcode/501-600",slug:"/leetcode/501-600/\u4e03\u8fdb\u5236\u6570",permalink:"/docs/leetcode/501-600/\u4e03\u8fdb\u5236\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:504,frontMatter:{},sidebar:"journal",previous:{title:"503.\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20II",permalink:"/docs/leetcode/501-600/\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20II"},next:{title:"506.\u76f8\u5bf9\u540d\u6b21",permalink:"/docs/leetcode/501-600/\u76f8\u5bf9\u540d\u6b21"}},o={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"504\u4e03\u8fdb\u5236\u6570",children:"504.\u4e03\u8fdb\u5236\u6570"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/base-7",children:"504.\u4e03\u8fdb\u5236\u6570"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570 num\uff0c\u5c06\u5176\u8f6c\u5316\u4e3a 7 \u8fdb\u5236\uff0c\u5e76\u4ee5\u5b57\u7b26\u4e32\u5f62\u5f0f\u8f93\u51fa\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-20"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.4MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8ba1\u6570\u6cd5\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function convertToBase7(num: number): string {\n  if (num === 0) return '0';\n  let f = false;\n  if (num < 0) {\n    f = true;\n    num = -1 * num;\n  }\n  let ans = '';\n  while (num !== 0) {\n    ans = (num % 7) + ans;\n    num = ~~(num / 7);\n  }\n  return (f ? '-' : '') + ans;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-07"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.8MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u77ed\u9664\u6cd5\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:'class Solution {\n   public:\n    string convertToBase7(int num) {\n        int f = 0;\n        if (num < 0) {\n            num = -num;\n            f = 1;\n        }\n        string ans = "";\n        while (num >= 7) {\n            ans = to_string(num % 7) + ans;\n            num /= 7;\n        }\n        ans = to_string(num) + ans;\n        if (f) ans = "-" + ans;\n        return ans;\n    }\n};\n'})})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>l});var t=s(30758);const r={},i=t.createContext(r);function c(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);