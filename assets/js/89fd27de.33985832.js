"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[64336],{27032:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var t=s(86070),i=s(25710);const r={},l="209.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",c={id:"leetcode/201-300/\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",title:"209.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",description:"\u94fe\u63a5\uff1a209.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",source:"@site/docs/leetcode/201-300/209.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",permalink:"/docs/leetcode/201-300/\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:209,frontMatter:{},sidebar:"journal",previous:{title:"208.\u5b9e\u73b0Trie(\u524d\u7f00\u6811)",permalink:"/docs/leetcode/201-300/\u5b9e\u73b0Trie(\u524d\u7f00\u6811)"},next:{title:"210.\u8bfe\u7a0b\u8868II",permalink:"/docs/leetcode/201-300/\u8bfe\u7a0b\u8868II"}},o={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"209\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",children:"209.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/minimum-size-subarray-sum",children:"209.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u524d\u7f00\u548c\u3001\u6ed1\u52a8\u7a97\u53e3",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u542b\u6709 \xa0n\xa0 \u4e2a\u6b63\u6574\u6570\u7684\u6570\u7ec4\u548c\u4e00\u4e2a\u6b63\u6574\u6570 \xa0s \uff0c\u627e\u51fa\u8be5\u6570\u7ec4\u4e2d\u6ee1\u8db3\u5176\u548c \u2265 s \u7684\u957f\u5ea6\u6700\u5c0f\u7684\u8fde\u7eed\u5b50\u6570\u7ec4\uff0c\u5e76\u8fd4\u56de\u5176\u957f\u5ea6\u3002\u5982\u679c\u4e0d\u5b58\u5728\u7b26\u5408\u6761\u4ef6\u7684\u8fde\u7eed\u5b50\u6570\u7ec4\uff0c\u8fd4\u56de 0\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-06-28"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a36.3MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\uff0c\u6ed1\u52a8\u7a97\u53e3\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function minSubArrayLen(s: number, nums: number[]): number {\n  const len = nums.length;\n  let i = 0,\n    minLen = Infinity,\n    sum = 0;\n  for (let j = 0; j < len; j++) {\n    sum += nums[j];\n    while (sum >= s) {\n      minLen = Math.min(minLen, j - i + 1);\n      sum -= nums[i++];\n    }\n  }\n  return minLen === Infinity ? 0 : minLen;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-24"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a10.2MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int minSubArrayLen(int target, vector<int>& nums) {\n        int l = 0, r = 0, num = 0, ans = INT_MAX, n = nums.size();\n        while (r < n) {\n            while (r < n && num < target) num += nums[r++];\n            while (l < r && num - nums[l] >= target) num -= nums[l++];\n            if (num >= target) ans = min(ans, r - l);\n            num -= nums[l++];\n        }\n        return ans == INT_MAX ? 0 : ans;\n    }\n};\n"})})]})}function m(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var t=s(30758);const i={},r=t.createContext(i);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);