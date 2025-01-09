"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[11884],{39870:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/701-800/\u9999\u69df\u5854","title":"799.\u9999\u69df\u5854","description":"\u94fe\u63a5\uff1a799.\u9999\u69df\u5854","source":"@site/docs/leetcode/701-800/799.\u9999\u69df\u5854.md","sourceDirName":"leetcode/701-800","slug":"/leetcode/701-800/\u9999\u69df\u5854","permalink":"/docs/leetcode/701-800/\u9999\u69df\u5854","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":799,"frontMatter":{},"sidebar":"journal","previous":{"title":"798.\u5f97\u5206\u6700\u9ad8\u7684\u6700\u5c0f\u8f6e\u8c03","permalink":"/docs/leetcode/701-800/\u5f97\u5206\u6700\u9ad8\u7684\u6700\u5c0f\u8f6e\u8c03"},"next":{"title":"717.1\u6bd4\u7279\u4e0e2\u6bd4\u7279\u5b57\u7b26","permalink":"/docs/leetcode/701-800/717.1\u6bd4\u7279\u4e0e2\u6bd4\u7279\u5b57\u7b26"}}');var o=r(25105),l=r(8556);const t={},c="799.\u9999\u69df\u5854",s={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"799\u9999\u69df\u5854",children:"799.\u9999\u69df\u5854"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(n.a,{href:"https://leetcode.cn/problems/champagne-tower",children:"799.\u9999\u69df\u5854"}),(0,o.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,o.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u52a8\u6001\u89c4\u5212",(0,o.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u73b0\u5728\u5f53\u503e\u5012\u4e86\u975e\u8d1f\u6574\u6570\u676f\u9999\u69df\u540e\uff0c\u8fd4\u56de\u7b2c i \u884c j \u4e2a\u73bb\u7483\u676f\u6240\u76db\u653e\u7684\u9999\u69df\u5360\u73bb\u7483\u676f\u5bb9\u79ef\u7684\u6bd4\u4f8b\uff08 i \u548c j \u90fd\u4ece 0 \u5f00\u59cb\uff09\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-20"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a13.7MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    double champagneTower(int poured, int query_row, int query_glass) {\n        vector<vector<double>> dp(query_row + 1, vector<double>(query_row + 1, 0.0));\n        dp[0][0] = (double)poured;\n        for (int i = 0; i < query_row; i++) {\n            for (int j = 0; j <= i; j++) {\n                if (dp[i][j] <= 1.0) continue;\n                double val = (dp[i][j] - 1) / 2;\n                dp[i + 1][j] += val;\n                dp[i + 1][j + 1] += val;\n            }\n        }\n        return min(1.0, dp[query_row][query_glass]);\n    }\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-20"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a13.7MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    double champagneTower(int poured, int query_row, int query_glass) {\n        vector<vector<double>> dp(query_row + 1, vector<double>(query_row + 1, 0.0));\n        dp[0][0] = (double)poured;\n        for (int i = 1; i <= query_row; i++) {\n            if (dp[i - 1][0] > 1.0) dp[i][0] = dp[i][i] = (dp[i - 1][0] - 1) / 2;\n            for (int j = 1; j < i; j++) {\n                if (dp[i - 1][j - 1] > 1.0) dp[i][j] += (dp[i - 1][j - 1] - 1) / 2;\n                if (dp[i - 1][j] > 1.0) dp[i][j] += (dp[i - 1][j] - 1) / 2;\n            }\n        }\n        return min(1.0, dp[query_row][query_glass]);\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8556:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var i=r(58101);const o={},l=i.createContext(o);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);