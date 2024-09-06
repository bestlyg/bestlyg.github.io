"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[95563],{7805:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=t(86070),i=t(25710);const r={},s="2463.\u6700\u5c0f\u79fb\u52a8\u603b\u8ddd\u79bb",c={id:"leetcode/2401-2500/\u6700\u5c0f\u79fb\u52a8\u603b\u8ddd\u79bb",title:"2463.\u6700\u5c0f\u79fb\u52a8\u603b\u8ddd\u79bb",description:"\u94fe\u63a5\uff1a2463.\u6700\u5c0f\u79fb\u52a8\u603b\u8ddd\u79bb",source:"@site/docs/leetcode/2401-2500/2463.\u6700\u5c0f\u79fb\u52a8\u603b\u8ddd\u79bb.md",sourceDirName:"leetcode/2401-2500",slug:"/leetcode/2401-2500/\u6700\u5c0f\u79fb\u52a8\u603b\u8ddd\u79bb",permalink:"/docs/leetcode/2401-2500/\u6700\u5c0f\u79fb\u52a8\u603b\u8ddd\u79bb",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2463,frontMatter:{},sidebar:"journal",previous:{title:"2462.\u96c7\u4f63K\u4f4d\u5de5\u4eba\u7684\u603b\u4ee3\u4ef7",permalink:"/docs/leetcode/2401-2500/\u96c7\u4f63K\u4f4d\u5de5\u4eba\u7684\u603b\u4ee3\u4ef7"},next:{title:"2465.\u4e0d\u540c\u7684\u5e73\u5747\u503c\u6570\u76ee",permalink:"/docs/leetcode/2401-2500/\u4e0d\u540c\u7684\u5e73\u5747\u503c\u6570\u76ee"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"2463\u6700\u5c0f\u79fb\u52a8\u603b\u8ddd\u79bb",children:"2463.\u6700\u5c0f\u79fb\u52a8\u603b\u8ddd\u79bb"})}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(e.a,{href:"https://leetcode.cn/problems/minimum-total-distance-traveled",children:"2463.\u6700\u5c0f\u79fb\u52a8\u603b\u8ddd\u79bb"}),(0,o.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,o.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u6392\u5e8f",(0,o.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u6240\u6709\u673a\u5668\u4eba\u79fb\u52a8\u7684\u6700\u5c0f\u603b\u8ddd\u79bb\u3002\u6d4b\u8bd5\u6570\u636e\u4fdd\u8bc1\u6240\u6709\u673a\u5668\u4eba\u90fd\u53ef\u4ee5\u88ab\u7ef4\u4fee\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-10"}),"\n",(0,o.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,o.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.2MB"}),"\n",(0,o.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,o.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i][j] = \u5f53\u53ea\u6709 i \u4e2a\u5de5\u5382\uff0cj \u4e2a\u673a\u5668\u4eba\u65f6\u7684\u6700\u5c0f\u79fb\u52a8\u8ddd\u79bb\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    const int MAX = 105;\n    long long minimumTotalDistance(vector<int>& robot, vector<vector<int>>& factory) {\n        sort(robot.begin(), robot.end());\n        sort(factory.begin(), factory.end(), [](auto &a, auto &b){ return a[0] < b[0]; });\n        int n = factory.size(), m = robot.size();\n        // dp[i][j] = \u5f53\u53ea\u6709i\u4e2a\u5de5\u5382\uff0cj\u4e2a\u673a\u5668\u4eba\u65f6\u7684\u6700\u5c0f\u79fb\u52a8\u8ddd\u79bb\n        long long dp[MAX][MAX];\n        memset(dp, 0x3f, sizeof(long long) * MAX * MAX);\n        for (int i = 0; i <= n; i++) dp[i][0] = 0;\n        for (int i = 1; i <= n; i++) {\n            auto &f = factory[i - 1];\n            for (int j = 1; j <= m; j++) {\n                // \u5f53\u524d\u5de5\u5382\u4e0d\u505a\u64cd\u4f5c\u7684\u65f6\u5019 \u7b49\u4e8e \u524d\u4e00\u4e2a\u5de5\u5382\n                dp[i][j] = dp[i - 1][j];\n                long long sum = 0;\n                for (int k = j; k >= max(1, j - f[1] + 1); k--) {\n                    sum += abs(robot[k - 1] - f[0]);\n                    dp[i][j] = min(dp[i][j], sum + dp[i - 1][k - 1]);\n                }\n                // for (int k = 1; k <= min(j, f[1]); k++) {\n                //     sum += abs(robot[j - k] - f[0]);\n                //     dp[i][j] = min(dp[i][j], sum + dp[i - 1][j - k]);\n                // }\n            }\n        }\n        return dp[n][m];\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>c});var o=t(30758);const i={},r=o.createContext(i);function s(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);