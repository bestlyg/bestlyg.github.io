"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[61339],{2968:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(86070),i=t(25710);const o={},r="2518.\u597d\u5206\u533a\u7684\u6570\u76ee",c={id:"leetcode/2501-2600/\u597d\u5206\u533a\u7684\u6570\u76ee",title:"2518.\u597d\u5206\u533a\u7684\u6570\u76ee",description:"\u94fe\u63a5\uff1a2518.\u597d\u5206\u533a\u7684\u6570\u76ee",source:"@site/docs/leetcode/2501-2600/2518.\u597d\u5206\u533a\u7684\u6570\u76ee.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u597d\u5206\u533a\u7684\u6570\u76ee",permalink:"/docs/leetcode/2501-2600/\u597d\u5206\u533a\u7684\u6570\u76ee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2518,frontMatter:{},sidebar:"journal",previous:{title:"2517.\u793c\u76d2\u7684\u6700\u5927\u751c\u871c\u5ea6",permalink:"/docs/leetcode/2501-2600/\u793c\u76d2\u7684\u6700\u5927\u751c\u871c\u5ea6"},next:{title:"2520.\u7edf\u8ba1\u80fd\u6574\u9664\u6570\u5b57\u7684\u4f4d\u6570",permalink:"/docs/leetcode/2501-2600/\u7edf\u8ba1\u80fd\u6574\u9664\u6570\u5b57\u7684\u4f4d\u6570"}},d={},l=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"2518\u597d\u5206\u533a\u7684\u6570\u76ee",children:"2518.\u597d\u5206\u533a\u7684\u6570\u76ee"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/number-of-great-partitions",children:"2518.\u597d\u5206\u533a\u7684\u6570\u76ee"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de \u4e0d\u540c \u7684\u597d\u5206\u533a\u7684\u6570\u76ee\u3002\u7531\u4e8e\u7b54\u6848\u53ef\u80fd\u5f88\u5927\uff0c\u8bf7\u8fd4\u56de\u5bf9 109 + 7 \u53d6\u4f59 \u540e\u7684\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-25"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a112ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a36.7MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9006\u5411\u7edf\u8ba1\uff0c\u7edf\u8ba1\u51fa\u6709\u591a\u5c11\u7ec4\u662f\u5c11\u4e8e k \u7684\uff0cres = sum - 2 * val\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int countPartitions(vector<int>& nums, int k) {\n        if (accumulate(nums.begin(), nums.end(), 0LL) < 2 * k) return 0;\n        sort(nums.begin(), nums.end());\n        int n = nums.size(), mod = 1e9 + 7, ans = 1;\n        vector<vector<int>> dp(n + 1, vector<int>(k, 0));\n        dp[0][0] = 1;\n        for (int i = 1; i <= n; i++) {\n            ans = (ans * 2) % mod;\n            dp[i][0] = 1;\n            for (int j = 1; j < k; j++) {\n                dp[i][j] = (dp[i][j] + dp[i - 1][j]) % mod;\n                if (j >= nums[i - 1]) dp[i][j] = (dp[i][j] + dp[i - 1][j - nums[i - 1]]) % mod;\n            }\n        }\n        for (auto &num : dp[n]) ans = (ans - 2 * num % mod + mod) % mod;\n        return ans;\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var s=t(30758);const i={},o=s.createContext(i);function r(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);