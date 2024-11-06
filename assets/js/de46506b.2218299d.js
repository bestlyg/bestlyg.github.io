"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[76575],{81282:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=t(86070),d=t(31503);const o={},c="790.\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa",r={id:"leetcode/701-800/\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa",title:"790.\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa",description:"\u94fe\u63a5\uff1a790.\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa",source:"@site/docs/leetcode/701-800/790.\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa",permalink:"/docs/leetcode/701-800/\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:790,frontMatter:{},sidebar:"journal",previous:{title:"789.\u9003\u8131\u963b\u788d\u8005",permalink:"/docs/leetcode/701-800/\u9003\u8131\u963b\u788d\u8005"},next:{title:"791.\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f",permalink:"/docs/leetcode/701-800/\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u6392\u5e8f"}},s={},l=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"790\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa",children:"790.\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/domino-and-tromino-tiling",children:"790.\u591a\u7c73\u8bfa\u548c\u6258\u7c73\u8bfa\u5e73\u94fa"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u52a8\u6001\u89c4\u5212",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u6574\u6570 n \uff0c\u8fd4\u56de\u53ef\u4ee5\u5e73\u94fa 2 x n \u7684\u9762\u677f\u7684\u65b9\u6cd5\u7684\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-12"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.7MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    const int mod = 1e9 + 7;\n    // j = 0 \u5e73\u6574\n    // j = 1 \u4e0a\u7a7a\n    // j = 2 \u4e0b\u7a7a\n    int dp[1005][3] = {0};\n    int numTilings(int n) {\n        dp[1][0] = 1;\n        dp[2][0] = 2;\n        dp[2][1] = 1;\n        dp[2][2] = 1;\n        for (int i = 3; i <= n; i++) {\n            dp[i][0] = (dp[i][0] + dp[i - 1][0]) % mod;\n            dp[i][0] = (dp[i][0] + dp[i - 2][0]) % mod;\n            dp[i][0] = (dp[i][0] + dp[i - 1][1]) % mod;\n            dp[i][0] = (dp[i][0] + dp[i - 1][2]) % mod;\n            dp[i][1] = (dp[i][1] + dp[i - 2][0] + dp[i - 1][2]) % mod;\n            dp[i][2] = (dp[i][2] + dp[i - 2][0] + dp[i - 1][1]) % mod;\n        }\n        return dp[n][0];\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>r});var i=t(30758);const d={},o=i.createContext(d);function c(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:c(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);