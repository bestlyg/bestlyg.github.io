"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[46644],{29934:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var i=s(86070),t=s(25710);const r={},l="2460.\u5bf9\u6570\u7ec4\u6267\u884c\u64cd\u4f5c",c={id:"leetcode/2401-2500/\u5bf9\u6570\u7ec4\u6267\u884c\u64cd\u4f5c",title:"2460.\u5bf9\u6570\u7ec4\u6267\u884c\u64cd\u4f5c",description:"\u94fe\u63a5\uff1a2460.\u5bf9\u6570\u7ec4\u6267\u884c\u64cd\u4f5c",source:"@site/docs/leetcode/2401-2500/2460.\u5bf9\u6570\u7ec4\u6267\u884c\u64cd\u4f5c.md",sourceDirName:"leetcode/2401-2500",slug:"/leetcode/2401-2500/\u5bf9\u6570\u7ec4\u6267\u884c\u64cd\u4f5c",permalink:"/docs/leetcode/2401-2500/\u5bf9\u6570\u7ec4\u6267\u884c\u64cd\u4f5c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2460,frontMatter:{},sidebar:"journal",previous:{title:"2458.\u79fb\u9664\u5b50\u6811\u540e\u7684\u4e8c\u53c9\u6811\u9ad8\u5ea6",permalink:"/docs/leetcode/2401-2500/\u79fb\u9664\u5b50\u6811\u540e\u7684\u4e8c\u53c9\u6811\u9ad8\u5ea6"},next:{title:"2461.\u957f\u5ea6\u4e3aK\u5b50\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u548c",permalink:"/docs/leetcode/2401-2500/\u957f\u5ea6\u4e3aK\u5b50\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u548c"}},o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"2460\u5bf9\u6570\u7ec4\u6267\u884c\u64cd\u4f5c",children:"2460.\u5bf9\u6570\u7ec4\u6267\u884c\u64cd\u4f5c"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/apply-operations-to-an-array",children:"2460.\u5bf9\u6570\u7ec4\u6267\u884c\u64cd\u4f5c"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u6a21\u62df",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u7684\u6570\u7ec4 nums \uff0c\u6570\u7ec4\u5927\u5c0f\u4e3a n \uff0c\u4e14\u7531 \u975e\u8d1f \u6574\u6570\u7ec4\u6210\u3002\u8fd4\u56de\u7ed3\u679c\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-06"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.5MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> applyOperations(vector<int>& nums) {\n        int n = nums.size();\n        vector<int> list(n, 0);\n        int idx = 0;\n        for (int i = 0; i < n; i++) {\n            if (nums[i] == 0) continue;\n            if (i == n - 1) {\n                list[idx++] = nums[i];\n            } else {\n                if (nums[i] == nums[i + 1]) {\n                    list[idx++] = nums[i] * 2;\n                    nums[i + 1] = 0;\n                } else {\n                    list[idx++] = nums[i];\n                }\n            }\n        }\n        return list;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-05"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.6MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> applyOperations(vector<int>& nums) {\n        int n = nums.size(), start = 0;\n        for (int i = 0; i < n - 1; i++) {\n            if (nums[i] == nums[i + 1]) {\n                nums[i] *= 2;\n                nums[i + 1] = 0;\n            }\n            if (nums[i] != 0) nums[start++] = nums[i];\n        }\n        if (nums[n - 1]) nums[start++] = nums[n - 1];\n        while (start < n) nums[start++] = 0;\n        return nums;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var i=s(30758);const t={},r=i.createContext(t);function l(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);