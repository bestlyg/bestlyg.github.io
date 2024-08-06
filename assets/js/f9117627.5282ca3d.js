"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[49680],{34937:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var s=t(86070),c=t(25710);const i={},r="1748.\u552f\u4e00\u5143\u7d20\u7684\u548c",o={id:"leetcode/1701-1800/\u552f\u4e00\u5143\u7d20\u7684\u548c",title:"1748.\u552f\u4e00\u5143\u7d20\u7684\u548c",description:"\u94fe\u63a5\uff1a1748.\u552f\u4e00\u5143\u7d20\u7684\u548c",source:"@site/docs/leetcode/1701-1800/1748.\u552f\u4e00\u5143\u7d20\u7684\u548c.md",sourceDirName:"leetcode/1701-1800",slug:"/leetcode/1701-1800/\u552f\u4e00\u5143\u7d20\u7684\u548c",permalink:"/docs/leetcode/1701-1800/\u552f\u4e00\u5143\u7d20\u7684\u548c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1748,frontMatter:{},sidebar:"journal",previous:{title:"1744.\u4f60\u80fd\u5728\u4f60\u6700\u559c\u6b22\u7684\u90a3\u5929\u5403\u5230\u4f60\u6700\u559c\u6b22\u7684\u7cd6\u679c\u5417\uff1f",permalink:"/docs/leetcode/1701-1800/\u4f60\u80fd\u5728\u4f60\u6700\u559c\u6b22\u7684\u90a3\u5929\u5403\u5230\u4f60\u6700\u559c\u6b22\u7684\u7cd6\u679c\u5417\uff1f"},next:{title:"1749.\u4efb\u610f\u5b50\u6570\u7ec4\u548c\u7684\u7edd\u5bf9\u503c\u7684\u6700\u5927\u503c",permalink:"/docs/leetcode/1701-1800/\u4efb\u610f\u5b50\u6570\u7ec4\u548c\u7684\u7edd\u5bf9\u503c\u7684\u6700\u5927\u503c"}},l={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1748\u552f\u4e00\u5143\u7d20\u7684\u548c",children:"1748.\u552f\u4e00\u5143\u7d20\u7684\u548c"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/sum-of-unique-elements",children:"1748.\u552f\u4e00\u5143\u7d20\u7684\u548c"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u8ba1\u6570",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \u3002\u6570\u7ec4\u4e2d\u552f\u4e00\u5143\u7d20\u662f\u90a3\u4e9b\u53ea\u51fa\u73b0 \u6070\u597d\u4e00\u6b21 \u7684\u5143\u7d20\u3002\u8bf7\u4f60\u8fd4\u56de nums \u4e2d\u552f\u4e00\u5143\u7d20\u7684 \u548c \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-06"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.6MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int sumOfUnique(vector<int>& nums) {\n        int check[110] = {0}, ans = 0;\n        for (int i = 0, n = nums.size(); i < n; ++i) {\n            ++check[nums[i]];\n            if (check[nums[i]] == 2)\n                ans -= nums[i];\n            else if (check[nums[i]] == 1)\n                ans += nums[i];\n        }\n        return ans;\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(30758);const c={},i=s.createContext(c);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);