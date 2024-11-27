"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[33769],{76477:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"leetcode/801-900/\u6700\u5927\u5e73\u5747\u503c\u548c\u7684\u5206\u7ec4","title":"813.\u6700\u5927\u5e73\u5747\u503c\u548c\u7684\u5206\u7ec4","description":"\u94fe\u63a5\uff1a813.\u6700\u5927\u5e73\u5747\u503c\u548c\u7684\u5206\u7ec4","source":"@site/docs/leetcode/801-900/813.\u6700\u5927\u5e73\u5747\u503c\u548c\u7684\u5206\u7ec4.md","sourceDirName":"leetcode/801-900","slug":"/leetcode/801-900/\u6700\u5927\u5e73\u5747\u503c\u548c\u7684\u5206\u7ec4","permalink":"/docs/leetcode/801-900/\u6700\u5927\u5e73\u5747\u503c\u548c\u7684\u5206\u7ec4","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":813,"frontMatter":{},"sidebar":"journal","previous":{"title":"812.\u6700\u5927\u4e09\u89d2\u5f62\u9762\u79ef","permalink":"/docs/leetcode/801-900/\u6700\u5927\u4e09\u89d2\u5f62\u9762\u79ef"},"next":{"title":"814.\u4e8c\u53c9\u6811\u526a\u679d","permalink":"/docs/leetcode/801-900/\u4e8c\u53c9\u6811\u526a\u679d"}}');var r=t(86070),i=t(31503);const c={},o="813.\u6700\u5927\u5e73\u5747\u503c\u548c\u7684\u5206\u7ec4",l={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"813\u6700\u5927\u5e73\u5747\u503c\u548c\u7684\u5206\u7ec4",children:"813.\u6700\u5927\u5e73\u5747\u503c\u548c\u7684\u5206\u7ec4"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/largest-sum-of-averages",children:"813.\u6700\u5927\u5e73\u5747\u503c\u548c\u7684\u5206\u7ec4"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u524d\u7f00\u548c",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u6570\u7ec4 nums \u548c\u4e00\u4e2a\u6574\u6570 k \u3002\u6211\u4eec\u5c06\u7ed9\u5b9a\u7684\u6570\u7ec4 nums \u5206\u6210 \u6700\u591a k \u4e2a\u76f8\u90bb\u7684\u975e\u7a7a\u5b50\u6570\u7ec4 \u3002 \u5206\u6570 \u7531\u6bcf\u4e2a\u5b50\u6570\u7ec4\u5185\u7684\u5e73\u5747\u503c\u7684\u603b\u548c\u6784\u6210\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-28"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.7MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i][j] = \u6700\u591a\u5206\u6210 i \u7ec4\uff0c\u53ea\u7528\u5230\u524d j \u4e2a\u5b57\u7b26\u4e32\u7684\u6700\u5927\u5e73\u5747\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    double largestSumOfAverages(vector<int>& nums, int k) {\n        int n = nums.size();\n        vector<vector<double>> dp(k + 1, vector<double>(n + 1, 0));\n        int sum = 0;\n        for (int i = 0; i < n; i++) {\n            sum += nums[i];\n            dp[1][i + 1] = 1.0 * sum / (i + 1);\n        }\n        double ans = dp[1][n];\n        for (int knum = 2; knum <= k; knum++) {\n            for (int i = knum; i <= n; i++) {\n                int sum = 0, cnt = 0;\n                for (int j = i; j >= knum; j--) {\n                    sum += nums[j - 1];\n                    cnt += 1;\n                    dp[knum][i] = max(dp[knum][i], dp[knum - 1][j - 1] + 1.0 * sum / cnt);\n                }\n            }\n            ans = max(ans, dp[knum][n]);\n        }\n        return ans;\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var s=t(30758);const r={},i=s.createContext(r);function c(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);