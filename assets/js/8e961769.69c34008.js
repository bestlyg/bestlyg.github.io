"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[66976],{49427:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var s=t(86070),c=t(25710);const i={},r="2006.\u5dee\u7684\u7edd\u5bf9\u503c\u4e3aK\u7684\u6570\u5bf9\u6570\u76ee",l={id:"leetcode/2001-2100/\u5dee\u7684\u7edd\u5bf9\u503c\u4e3aK\u7684\u6570\u5bf9\u6570\u76ee",title:"2006.\u5dee\u7684\u7edd\u5bf9\u503c\u4e3aK\u7684\u6570\u5bf9\u6570\u76ee",description:"\u94fe\u63a5\uff1a2006.\u5dee\u7684\u7edd\u5bf9\u503c\u4e3aK\u7684\u6570\u5bf9\u6570\u76ee",source:"@site/docs/leetcode/2001-2100/2006.\u5dee\u7684\u7edd\u5bf9\u503c\u4e3aK\u7684\u6570\u5bf9\u6570\u76ee.md",sourceDirName:"leetcode/2001-2100",slug:"/leetcode/2001-2100/\u5dee\u7684\u7edd\u5bf9\u503c\u4e3aK\u7684\u6570\u5bf9\u6570\u76ee",permalink:"/web/site/docs/leetcode/2001-2100/\u5dee\u7684\u7edd\u5bf9\u503c\u4e3aK\u7684\u6570\u5bf9\u6570\u76ee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2006,frontMatter:{},sidebar:"journal",previous:{title:"2003.\u6bcf\u68f5\u5b50\u6811\u5185\u7f3a\u5931\u7684\u6700\u5c0f\u57fa\u56e0\u503c",permalink:"/web/site/docs/leetcode/2001-2100/\u6bcf\u68f5\u5b50\u6811\u5185\u7f3a\u5931\u7684\u6700\u5c0f\u57fa\u56e0\u503c"},next:{title:"2007.\u4ece\u53cc\u500d\u6570\u7ec4\u4e2d\u8fd8\u539f\u539f\u6570\u7ec4",permalink:"/web/site/docs/leetcode/2001-2100/\u4ece\u53cc\u500d\u6570\u7ec4\u4e2d\u8fd8\u539f\u539f\u6570\u7ec4"}},o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"2006\u5dee\u7684\u7edd\u5bf9\u503c\u4e3ak\u7684\u6570\u5bf9\u6570\u76ee",children:"2006.\u5dee\u7684\u7edd\u5bf9\u503c\u4e3aK\u7684\u6570\u5bf9\u6570\u76ee"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/count-number-of-pairs-with-absolute-difference-k",children:"2006.\u5dee\u7684\u7edd\u5bf9\u503c\u4e3aK\u7684\u6570\u5bf9\u6570\u76ee"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u8ba1\u6570",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \u548c\u4e00\u4e2a\u6574\u6570 k \uff0c\u8bf7\u4f60\u8fd4\u56de\u6570\u5bf9 (i, j) \u7684\u6570\u76ee\uff0c\u6ee1\u8db3 i < j \u4e14 |nums[i] - nums[j]| == k \u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-09"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a12.1MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int countKDifference(vector<int>& nums, int k) {\n        int m[300] = {0}, ans = 0;\n        for (auto& num : nums) {\n            ans += m[num + k + 100] + m[num - k + 100];\n            m[num + 100]++;\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-09"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int countKDifference(vector<int>& nums, int k) {\n        unordered_map<int, int> m;\n        int ans = 0;\n        for (auto& num : nums) {\n            ans += m[num + k] + m[num - k];\n            m[num]++;\n        }\n        return ans;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>l});var s=t(30758);const c={},i=s.createContext(c);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);