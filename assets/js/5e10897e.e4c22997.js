"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[88703],{66722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var c=t(86070),s=t(25710);const r={},l="169.\u591a\u6570\u5143\u7d20",o={id:"leetcode/101-200/\u591a\u6570\u5143\u7d20",title:"169.\u591a\u6570\u5143\u7d20",description:"\u94fe\u63a5\uff1a169.\u591a\u6570\u5143\u7d20",source:"@site/docs/leetcode/101-200/169.\u591a\u6570\u5143\u7d20.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u591a\u6570\u5143\u7d20",permalink:"/docs/leetcode/101-200/\u591a\u6570\u5143\u7d20",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:169,frontMatter:{},sidebar:"journal",previous:{title:"168.Excel\u8868\u5217\u540d\u79f0",permalink:"/docs/leetcode/101-200/Excel\u8868\u5217\u540d\u79f0"},next:{title:"171.Excel\u8868\u5217\u5e8f\u53f7",permalink:"/docs/leetcode/101-200/Excel\u8868\u5217\u5e8f\u53f7"}},i={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"169\u591a\u6570\u5143\u7d20",children:"169.\u591a\u6570\u5143\u7d20"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,c.jsx)(n.a,{href:"https://leetcode.cn/problems/majority-element",children:"169.\u591a\u6570\u5143\u7d20"}),(0,c.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,c.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5206\u6cbb\u3001\u8ba1\u6570\u3001\u6392\u5e8f",(0,c.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5927\u5c0f\u4e3a n \u7684\u6570\u7ec4\uff0c\u627e\u5230\u5176\u4e2d\u7684\u591a\u6570\u5143\u7d20\u3002\u591a\u6570\u5143\u7d20\u662f\u6307\u5728\u6570\u7ec4\u4e2d\u51fa\u73b0\u6b21\u6570 \u5927\u4e8e \u230a n/2 \u230b \u7684\u5143\u7d20\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-14"}),"\n",(0,c.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,c.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19MB"}),"\n",(0,c.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,c.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u65f6\uff0c\u50a8\u5b58\u4e00\u4e2a\u6570\u7ef4\u62a4\u8fd9\u4e2a\u6570\u5f53\u524d\u7684\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int majorityElement(vector<int> &nums) {\n        int num = 0, cnt = 0;\n        for (auto &it : nums) {\n            if (cnt == 0) {\n                num = it;\n                cnt = 1;\n            } else if (num == it) {\n                cnt++;\n            } else {\n                cnt--;\n            }\n        }\n        return num;\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var c=t(30758);const s={},r=c.createContext(s);function l(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);