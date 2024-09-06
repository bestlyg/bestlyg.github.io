"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[36506],{78157:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var t=i(86070),s=i(25710);const c={},r="801.\u4f7f\u5e8f\u5217\u9012\u589e\u7684\u6700\u5c0f\u4ea4\u6362\u6b21\u6570",o={id:"leetcode/801-900/\u4f7f\u5e8f\u5217\u9012\u589e\u7684\u6700\u5c0f\u4ea4\u6362\u6b21\u6570",title:"801.\u4f7f\u5e8f\u5217\u9012\u589e\u7684\u6700\u5c0f\u4ea4\u6362\u6b21\u6570",description:"\u94fe\u63a5\uff1a801.\u4f7f\u5e8f\u5217\u9012\u589e\u7684\u6700\u5c0f\u4ea4\u6362\u6b21\u6570",source:"@site/docs/leetcode/801-900/801.\u4f7f\u5e8f\u5217\u9012\u589e\u7684\u6700\u5c0f\u4ea4\u6362\u6b21\u6570.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u4f7f\u5e8f\u5217\u9012\u589e\u7684\u6700\u5c0f\u4ea4\u6362\u6b21\u6570",permalink:"/docs/leetcode/801-900/\u4f7f\u5e8f\u5217\u9012\u589e\u7684\u6700\u5c0f\u4ea4\u6362\u6b21\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:801,frontMatter:{},sidebar:"journal",previous:{title:"717.1\u6bd4\u7279\u4e0e2\u6bd4\u7279\u5b57\u7b26",permalink:"/docs/leetcode/701-800/717.1\u6bd4\u7279\u4e0e2\u6bd4\u7279\u5b57\u7b26"},next:{title:"802.\u627e\u5230\u6700\u7ec8\u7684\u5b89\u5168\u72b6\u6001",permalink:"/docs/leetcode/801-900/\u627e\u5230\u6700\u7ec8\u7684\u5b89\u5168\u72b6\u6001"}},d={},l=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"801\u4f7f\u5e8f\u5217\u9012\u589e\u7684\u6700\u5c0f\u4ea4\u6362\u6b21\u6570",children:"801.\u4f7f\u5e8f\u5217\u9012\u589e\u7684\u6700\u5c0f\u4ea4\u6362\u6b21\u6570"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/minimum-swaps-to-make-sequences-increasing",children:"801.\u4f7f\u5e8f\u5217\u9012\u589e\u7684\u6700\u5c0f\u4ea4\u6362\u6b21\u6570"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de \u4f7f nums1 \u548c nums2 \u4e25\u683c\u9012\u589e \u6240\u9700\u64cd\u4f5c\u7684\u6700\u5c0f\u6b21\u6570 \u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-10"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a236ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a117.2MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i][0|1]\u8868\u793a i \u4e3a\u7ed3\u5c3e\u4e0b\u6807\u65f6\uff0c\u4ea4\u6362\u548c\u4e0d\u4ea4\u6362\u7684\u6700\u5c0f\u4ea4\u6362\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minSwap(vector<int>& nums1, vector<int>& nums2) {\n        int n = nums1.size();\n        vector<vector<int>> dp(n, vector<int>(2, n));\n        dp[0][0] = 0;\n        dp[0][1] = 1;\n        for (int i = 1; i < n; i++) {\n            if (nums1[i - 1] < nums1[i] && nums2[i - 1] < nums2[i]) {\n                dp[i][0] = min(dp[i][0], dp[i - 1][0]);\n                dp[i][1] = min(dp[i][1], dp[i - 1][1] + 1);\n            }\n            if (nums1[i - 1] < nums2[i] && nums2[i - 1] < nums1[i]) {\n                dp[i][0] = min(dp[i][0], dp[i - 1][1]);\n                dp[i][1] = min(dp[i][1], dp[i - 1][0] + 1);\n            }\n        }\n        return min(dp[n - 1][0], dp[n - 1][1]);\n    }\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>o});var t=i(30758);const s={},c=t.createContext(s);function r(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);