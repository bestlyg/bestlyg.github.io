"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[2085],{63205:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var s=t(86070),i=t(25710);const r={},c="396.\u65cb\u8f6c\u51fd\u6570",o={id:"leetcode/301-400/\u65cb\u8f6c\u51fd\u6570",title:"396.\u65cb\u8f6c\u51fd\u6570",description:"\u94fe\u63a5\uff1a396.\u65cb\u8f6c\u51fd\u6570",source:"@site/docs/leetcode/301-400/396.\u65cb\u8f6c\u51fd\u6570.md",sourceDirName:"leetcode/301-400",slug:"/leetcode/301-400/\u65cb\u8f6c\u51fd\u6570",permalink:"/docs/leetcode/301-400/\u65cb\u8f6c\u51fd\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:396,frontMatter:{},sidebar:"journal",previous:{title:"395.\u81f3\u5c11\u6709K\u4e2a\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",permalink:"/docs/leetcode/301-400/\u81f3\u5c11\u6709K\u4e2a\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32"},next:{title:"397.\u6574\u6570\u66ff\u6362",permalink:"/docs/leetcode/301-400/\u6574\u6570\u66ff\u6362"}},l={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"396\u65cb\u8f6c\u51fd\u6570",children:"396.\u65cb\u8f6c\u51fd\u6570"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/rotate-function",children:"396.\u65cb\u8f6c\u51fd\u6570"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de F(0), F(1), ..., F(n-1)\u4e2d\u7684\u6700\u5927\u503c \u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-04-22"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a140ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a93.6MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6bcf\u4e00\u6b21\u7684\u503c\u53ef\u4ee5\u4ece\u4e0a\u4e00\u6b21\u63a8\u5bfc\u8fc7\u6765 f(n) = f(n-1) + sum - n * nums[i]\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int maxRotateFunction(vector<int>& nums) {\n        int sum = 0, prev = 0, n = nums.size();\n        for (int i = 0; i < n; i++) {\n            sum += nums[i];\n            prev += nums[i] * i;\n        }\n        int ans = prev;\n        for (int i = n - 1; i > 0; i--, ans = max(ans, prev))\n            prev = prev + sum - n * nums[i];\n        return ans;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var s=t(30758);const i={},r=s.createContext(i);function c(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);