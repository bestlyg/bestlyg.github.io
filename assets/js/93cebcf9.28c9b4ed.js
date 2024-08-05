"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[57613],{9097:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var t=s(86070),i=s(25710);const c={},r="1800.\u6700\u5927\u5347\u5e8f\u5b50\u6570\u7ec4\u548c",o={id:"leetcode/1701-1800/\u6700\u5927\u5347\u5e8f\u5b50\u6570\u7ec4\u548c",title:"1800.\u6700\u5927\u5347\u5e8f\u5b50\u6570\u7ec4\u548c",description:"\u94fe\u63a5\uff1a1800.\u6700\u5927\u5347\u5e8f\u5b50\u6570\u7ec4\u548c",source:"@site/docs/leetcode/1701-1800/1800.\u6700\u5927\u5347\u5e8f\u5b50\u6570\u7ec4\u548c.md",sourceDirName:"leetcode/1701-1800",slug:"/leetcode/1701-1800/\u6700\u5927\u5347\u5e8f\u5b50\u6570\u7ec4\u548c",permalink:"/web/site/docs/leetcode/1701-1800/\u6700\u5927\u5347\u5e8f\u5b50\u6570\u7ec4\u548c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1800,frontMatter:{},sidebar:"journal",previous:{title:"1799.N\u6b21\u64cd\u4f5c\u540e\u7684\u6700\u5927\u5206\u6570\u548c",permalink:"/web/site/docs/leetcode/1701-1800/N\u6b21\u64cd\u4f5c\u540e\u7684\u6700\u5927\u5206\u6570\u548c"},next:{title:"1801.\u79ef\u538b\u8ba2\u5355\u4e2d\u7684\u8ba2\u5355\u603b\u6570",permalink:"/web/site/docs/leetcode/1801-1900/\u79ef\u538b\u8ba2\u5355\u4e2d\u7684\u8ba2\u5355\u603b\u6570"}},l={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"1800\u6700\u5927\u5347\u5e8f\u5b50\u6570\u7ec4\u548c",children:"1800.\u6700\u5927\u5347\u5e8f\u5b50\u6570\u7ec4\u548c"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-ascending-subarray-sum",children:"1800.\u6700\u5927\u5347\u5e8f\u5b50\u6570\u7ec4\u548c"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6b63\u6574\u6570\u7ec4\u6210\u7684\u6570\u7ec4 nums \uff0c\u8fd4\u56de nums \u4e2d\u4e00\u4e2a \u5347\u5e8f \u5b50\u6570\u7ec4\u7684\u6700\u5927\u53ef\u80fd\u5143\u7d20\u548c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-07"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.1MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxAscendingSum(vector<int>& nums) {\n        int ans = 0;\n        for (int i = 0; i < nums.size(); i++) {\n            int sum = nums[i];\n            while (i + 1 < nums.size() && nums[i + 1] > nums[i]) sum += nums[++i];\n            ans = max(ans, sum);\n        }\n        return ans;\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},25710:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(30758);const i={},c=t.createContext(i);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);