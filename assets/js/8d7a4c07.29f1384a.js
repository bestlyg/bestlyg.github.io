"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[4739],{25573:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(86070),s=t(25710);const r={},o="2478.\u5b8c\u7f8e\u5206\u5272\u7684\u65b9\u6848\u6570",c={id:"leetcode/2401-2500/\u5b8c\u7f8e\u5206\u5272\u7684\u65b9\u6848\u6570",title:"2478.\u5b8c\u7f8e\u5206\u5272\u7684\u65b9\u6848\u6570",description:"\u94fe\u63a5\uff1a2478.\u5b8c\u7f8e\u5206\u5272\u7684\u65b9\u6848\u6570",source:"@site/docs/leetcode/2401-2500/2478.\u5b8c\u7f8e\u5206\u5272\u7684\u65b9\u6848\u6570.md",sourceDirName:"leetcode/2401-2500",slug:"/leetcode/2401-2500/\u5b8c\u7f8e\u5206\u5272\u7684\u65b9\u6848\u6570",permalink:"/docs/leetcode/2401-2500/\u5b8c\u7f8e\u5206\u5272\u7684\u65b9\u6848\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2478,frontMatter:{},sidebar:"journal",previous:{title:"2477.\u5230\u8fbe\u9996\u90fd\u7684\u6700\u5c11\u6cb9\u8017",permalink:"/docs/leetcode/2401-2500/\u5230\u8fbe\u9996\u90fd\u7684\u6700\u5c11\u6cb9\u8017"},next:{title:"2481.\u5206\u5272\u5706\u7684\u6700\u5c11\u5207\u5272\u6b21\u6570",permalink:"/docs/leetcode/2401-2500/\u5206\u5272\u5706\u7684\u6700\u5c11\u5207\u5272\u6b21\u6570"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"2478\u5b8c\u7f8e\u5206\u5272\u7684\u65b9\u6848\u6570",children:"2478.\u5b8c\u7f8e\u5206\u5272\u7684\u65b9\u6848\u6570"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/number-of-beautiful-partitions",children:"2478.\u5b8c\u7f8e\u5206\u5272\u7684\u65b9\u6848\u6570"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 s \uff0c\u6bcf\u4e2a\u5b57\u7b26\u662f\u6570\u5b57 '1' \u5230 '9' \uff0c\u518d\u7ed9\u4f60\u4e24\u4e2a\u6574\u6570 k \u548c minLength \u3002\u8bf7\u4f60\u8fd4\u56de s \u7684 \u5b8c\u7f8e \u5206\u5272\u6570\u76ee\u3002\u7531\u4e8e\u7b54\u6848\u53ef\u80fd\u5f88\u5927\uff0c\u8bf7\u8fd4\u56de\u7b54\u6848\u5bf9 109 + 7 \u53d6\u4f59 \u540e\u7684\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-20"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a32ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a30.4MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i][j]\u8868\u793a\u603b\u5171\u5206\u6210 i \u7ec4\u603b\u5171\u5b57\u7b26\u6709 j \u4e2a\u7684\u5408\u7406\u65b9\u6848\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    string s;\n    int n;\n    const int mod = 1e9 + 7;\n    bool isPrime(int i) {\n        return s[i] == '2' || s[i] == '3' || s[i] == '5' || s[i] == '7';\n    }\n    bool canPart(int i) {\n        return i == 0 || i == n || !isPrime(i - 1) && isPrime(i);\n    }\n    int beautifulPartitions(string s, int k, int minLength) {\n        this->s = s;\n        n = s.size();\n        if (!isPrime(0) || isPrime(n - 1) || k * minLength > n) return false;\n        vector<vector<int>> dp(k + 1, vector<int>(n + 1, 0));\n        dp[0][0] = 1;\n        for (int i = 1; i <= k; i++) {\n            int sum = 0;\n            for (int j = i * minLength; j + (k - i) * minLength <= n; j++) {\n                if (canPart(j - minLength)) sum = (sum + dp[i - 1][j - minLength]) % mod;\n                if (canPart(j)) dp[i][j] = sum;\n            }\n        }\n        return dp[k][n];\n    }\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var i=t(30758);const s={},r=i.createContext(s);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);