"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[97345],{1032:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=i(86070),s=i(25710);const r={},o="1781.\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c",c={id:"leetcode/1701-1800/\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c",title:"1781.\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c",description:"\u94fe\u63a5\uff1a1781.\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c",source:"@site/docs/leetcode/1701-1800/1781.\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c.md",sourceDirName:"leetcode/1701-1800",slug:"/leetcode/1701-1800/\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c",permalink:"/docs/leetcode/1701-1800/\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1781,frontMatter:{},sidebar:"journal",previous:{title:"1780.\u5224\u65ad\u4e00\u4e2a\u6570\u5b57\u662f\u5426\u53ef\u4ee5\u8868\u793a\u6210\u4e09\u7684\u5e42\u7684\u548c",permalink:"/docs/leetcode/1701-1800/\u5224\u65ad\u4e00\u4e2a\u6570\u5b57\u662f\u5426\u53ef\u4ee5\u8868\u793a\u6210\u4e09\u7684\u5e42\u7684\u548c"},next:{title:"1782.\u7edf\u8ba1\u70b9\u5bf9\u7684\u6570\u76ee",permalink:"/docs/leetcode/1701-1800/\u7edf\u8ba1\u70b9\u5bf9\u7684\u6570\u76ee"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"1781\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c",children:"1781.\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/sum-of-beauty-of-all-substrings",children:"1781.\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7f8e\u4e3d\u503c\u4e4b\u548c"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u8ba1\u6570",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 s \uff0c\u8bf7\u4f60\u8fd4\u56de\u5b83\u6240\u6709\u5b50\u5b57\u7b26\u4e32\u7684 \u7f8e\u4e3d\u503c \u4e4b\u548c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-12"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a372ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a34.7MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u66b4\u529b\u679a\u4e3e\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:'class Solution {\npublic:\n    int beautySum(string s) {\n        int ans = 0, n = s.size(), dp[505][505][26] = {0};\n        for (int i = 0; i < n; i++) {\n            dp[i][i][s[i] - \'a\'] = 1;\n            for (int j = i - 1; j >= 0; j--) {\n                for (int k = 0; k < 26; k++) dp[i][j][k] = dp[i][j + 1][k];\n                dp[i][j][s[j] - \'a\']++;\n            }\n        }\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < i; j++) {\n                int nmin = 500, nmax = 0;\n                for (int k = 0; k < 26; k++) {\n                    if (dp[i][j][k] == 0) continue;\n                    nmin = min(nmin, dp[i][j][k]);\n                    nmax = max(nmax, dp[i][j][k]);\n                }\n                // cout << "j = " << j << ", i = " << i << ", min = " << nmin << ", max = " << nmax << endl;\n                ans += nmax - nmin;\n            }\n        }\n        return ans;\n    }\n};\n'})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>c});var t=i(30758);const s={},r=t.createContext(s);function o(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);