"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[89212],{2349:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=i(86070),t=i(31503);const s={},c="808.\u5206\u6c64",l={id:"leetcode/801-900/\u5206\u6c64",title:"808.\u5206\u6c64",description:"\u94fe\u63a5\uff1a808.\u5206\u6c64",source:"@site/docs/leetcode/801-900/808.\u5206\u6c64.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u5206\u6c64",permalink:"/docs/leetcode/801-900/\u5206\u6c64",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:808,frontMatter:{},sidebar:"journal",previous:{title:"807.\u4fdd\u6301\u57ce\u5e02\u5929\u9645\u7ebf",permalink:"/docs/leetcode/801-900/\u4fdd\u6301\u57ce\u5e02\u5929\u9645\u7ebf"},next:{title:"809.\u60c5\u611f\u4e30\u5bcc\u7684\u6587\u5b57",permalink:"/docs/leetcode/801-900/\u60c5\u611f\u4e30\u5bcc\u7684\u6587\u5b57"}},d={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"808\u5206\u6c64",children:"808.\u5206\u6c64"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/soup-servings",children:"808.\u5206\u6c64"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u52a8\u6001\u89c4\u5212\u3001\u6982\u7387\u4e0e\u7edf\u8ba1",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6709 A \u548c B \u4e24\u79cd\u7c7b\u578b \u7684\u6c64\u3002\u5f53\u4e24\u79cd\u7c7b\u578b\u7684\u6c64\u90fd\u5206\u914d\u5b8c\u65f6\uff0c\u505c\u6b62\u64cd\u4f5c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-21"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.2MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5f53 i=0,j=0 \u65f6\u5b8c\u6210\u540c\u65f6\u5206\u914d\u7684\u6982\u7387/2=0.5\uff0c\u5f53 i>0,j=0 \u65f6\u6982\u7387 0\uff0c\u5f53 i=0,j>0 \u662f\u5b8c\u6210 A \u5206\u914d\u6982\u7387 1\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    double soupServings(int n) {\n        n = ceil(1.0 * n / 25);\n        if (n > 179) return 1.0;\n        double dp[200][200] = {0};\n        dp[0][0] = 0.5;\n        for (int i = 1; i <= n; i++) dp[0][i] = 1.0;\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= n; j++) {\n                dp[i][j] = (\n                    dp[max(0, i - 4)][j] +\n                    dp[max(0, i - 3)][max(0, j - 1)] +\n                    dp[max(0, i - 2)][max(0, j - 2)] +\n                    dp[max(0, i - 1)][max(0, j - 3)]\n                ) / 4;\n            }\n        }\n        return dp[n][n];\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-21"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.3MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\uff0cdfs \u8bb0\u5fc6\u5316\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    double soupServings(int n) {\n        n = ceil(1.0 * n / 25);\n        if (n > 179) return 1.0;\n        unordered_map<int, unordered_map<int, double>> m;\n        function<double(int, int)> dfs= [&m, &dfs](int a, int b) {\n            if (m.count(a) && m[a].count(b)) return m[a][b];\n            if (a <= 0 && b > 0) return m[a][b] = 1.0;\n            if (a <= 0 && b <= 0) return m[a][b] = 0.5;\n            if (a > 0 && b <= 0) return m[a][b] = 0.0;\n            return m[a][b] = (\n                dfs(a - 4, b) +\n                dfs(a - 3, b - 1) +\n                dfs(a - 2, b - 2) +\n                dfs(a - 1, b - 3)\n            ) / 4;\n        };\n        return dfs(n, n);\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>l});var r=i(30758);const t={},s=r.createContext(t);function c(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);