"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[88448],{2443:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(86070),c=s(25710);const r={},i="768.\u6700\u591a\u80fd\u5b8c\u6210\u6392\u5e8f\u7684\u5757II",o={id:"leetcode/701-800/\u6700\u591a\u80fd\u5b8c\u6210\u6392\u5e8f\u7684\u5757II",title:"768.\u6700\u591a\u80fd\u5b8c\u6210\u6392\u5e8f\u7684\u5757II",description:"\u94fe\u63a5\uff1a768.\u6700\u591a\u80fd\u5b8c\u6210\u6392\u5e8f\u7684\u5757II",source:"@site/docs/leetcode/701-800/768.\u6700\u591a\u80fd\u5b8c\u6210\u6392\u5e8f\u7684\u5757II.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u6700\u591a\u80fd\u5b8c\u6210\u6392\u5e8f\u7684\u5757II",permalink:"/web/site/docs/leetcode/701-800/\u6700\u591a\u80fd\u5b8c\u6210\u6392\u5e8f\u7684\u5757II",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:768,frontMatter:{},sidebar:"journal",previous:{title:"766.\u6258\u666e\u5229\u8328\u77e9\u9635",permalink:"/web/site/docs/leetcode/701-800/\u6258\u666e\u5229\u8328\u77e9\u9635"},next:{title:"769.\u6700\u591a\u80fd\u5b8c\u6210\u6392\u5e8f\u7684\u5757",permalink:"/web/site/docs/leetcode/701-800/\u6700\u591a\u80fd\u5b8c\u6210\u6392\u5e8f\u7684\u5757"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"768\u6700\u591a\u80fd\u5b8c\u6210\u6392\u5e8f\u7684\u5757ii",children:"768.\u6700\u591a\u80fd\u5b8c\u6210\u6392\u5e8f\u7684\u5757II"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/max-chunks-to-make-sorted-ii",children:"768.\u6700\u591a\u80fd\u5b8c\u6210\u6392\u5e8f\u7684\u5757II"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u6392\u5e8f\u3001\u5355\u8c03\u6808",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6211\u4eec\u6700\u591a\u80fd\u5c06\u6570\u7ec4\u5206\u6210\u591a\u5c11\u5757\uff1f\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-08-15"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a11.8MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5355\u8c03\u6808\uff0c\u6bcf\u6b21\u610f\u5473\u7740\u5de6\u8fb9\u5757\u4e2d\u6240\u6709\u7684\u5143\u7d20\u90fd\u5c0f\u4e8e\u53f3\u8fb9\u5757\uff0c\u5982\u679c\u4e0d\u6ee1\u8db3\u5219\u5408\u5e76\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxChunksToSorted(vector<int>& arr) {\n        vector<int> s;\n        for (auto &num : arr) {\n            if (s.empty() || s[s.size() - 1] <= num) {\n                s.push_back(num);\n            } else {\n                int num_max = s[s.size() - 1];\n                while (s.size() && s[s.size() - 1] > num) s.pop_back();\n                s.push_back(num_max);\n            }\n        }\n        return s.size();\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},25710:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(30758);const c={},r=t.createContext(c);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);