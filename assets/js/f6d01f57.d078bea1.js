"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[85618],{62733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var i=t(86070),s=t(25710);const c={},r="2100.\u9002\u5408\u91ce\u708a\u7684\u65e5\u5b50",o={id:"leetcode/2001-2100/\u9002\u5408\u91ce\u708a\u7684\u65e5\u5b50",title:"2100.\u9002\u5408\u91ce\u708a\u7684\u65e5\u5b50",description:"\u94fe\u63a5\uff1a2100.\u9002\u5408\u91ce\u708a\u7684\u65e5\u5b50",source:"@site/docs/leetcode/2001-2100/2100.\u9002\u5408\u91ce\u708a\u7684\u65e5\u5b50.md",sourceDirName:"leetcode/2001-2100",slug:"/leetcode/2001-2100/\u9002\u5408\u91ce\u708a\u7684\u65e5\u5b50",permalink:"/docs/leetcode/2001-2100/\u9002\u5408\u91ce\u708a\u7684\u65e5\u5b50",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2100,frontMatter:{},sidebar:"journal",previous:{title:"2085.\u7edf\u8ba1\u51fa\u73b0\u8fc7\u4e00\u6b21\u7684\u516c\u5171\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/2001-2100/\u7edf\u8ba1\u51fa\u73b0\u8fc7\u4e00\u6b21\u7684\u516c\u5171\u5b57\u7b26\u4e32"},next:{title:"2101.\u5f15\u7206\u6700\u591a\u7684\u70b8\u5f39",permalink:"/docs/leetcode/2101-2200/\u5f15\u7206\u6700\u591a\u7684\u70b8\u5f39"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"2100\u9002\u5408\u91ce\u708a\u7684\u65e5\u5b50",children:"2100.\u9002\u5408\u91ce\u708a\u7684\u65e5\u5b50"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/find-good-days-to-rob-the-bank",children:"2100.\u9002\u5408\u91ce\u708a\u7684\u65e5\u5b50"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u524d\u7f00\u548c",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542b \u6240\u6709 \u9002\u5408\u6253\u52ab\u94f6\u884c\u7684\u65e5\u5b50\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09\u3002\u8fd4\u56de\u7684\u65e5\u5b50\u53ef\u4ee5 \u4efb\u610f \u987a\u5e8f\u6392\u5217\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-06"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a116ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a84.8MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8bb0\u5f55\u5f53\u524d\u503c\u5de6\u4fa7\u6700\u5927\u9012\u589e\u957f\u5ea6\u548c\u53f3\u4fa7\u6700\u5927\u9012\u589e\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n        public:\n         vector<int> goodDaysToRobBank(vector<int>& security, int time) {\n             int n = security.size();\n             vector<int> cnts(n, 0);\n             for (int i = n - 2; i >= 0; i--) {\n                 if (security[i] <= security[i + 1]) {\n                     cnts[i] = cnts[i + 1] + 1;\n                 } else {\n                     cnts[i] = 0;\n                 }\n             }\n             vector<int> ans;\n             int prev = 0;\n             for (int i = 0; i < n; i++) {\n                 if (i > 0 && security[i] <= security[i - 1]) {\n                     prev++;\n                 } else {\n                     prev = 0;\n                 }\n                 if (prev >= time && cnts[i] >= time) {\n                     ans.push_back(i);\n                 }\n             }\n             return ans;\n         }\n     };\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(30758);const s={},c=i.createContext(s);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);