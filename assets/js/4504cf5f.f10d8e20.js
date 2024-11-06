"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[68956],{92762:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=t(86070),r=t(31503);const i={},l="16.\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c",c={id:"leetcode/1-100/\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c",title:"16.\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c",description:"\u94fe\u63a5\uff1a16.\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c",source:"@site/docs/leetcode/1-100/16.\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c",permalink:"/docs/leetcode/1-100/\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{},sidebar:"journal",previous:{title:"15.\u4e09\u6570\u4e4b\u548c",permalink:"/docs/leetcode/1-100/\u4e09\u6570\u4e4b\u548c"},next:{title:"17.\u7535\u8bdd\u53f7\u7801\u7684\u5b57\u6bcd\u7ec4\u5408",permalink:"/docs/leetcode/1-100/\u7535\u8bdd\u53f7\u7801\u7684\u5b57\u6bcd\u7ec4\u5408"}},u={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function m(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"16\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c",children:"16.\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/3sum-closest",children:"16.\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u6392\u5e8f",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5305\u62ec \xa0n \u4e2a\u6574\u6570\u7684\u6570\u7ec4 \xa0nums\xa0 \u548c \u4e00\u4e2a\u76ee\u6807\u503c \xa0target\u3002\u627e\u51fa \xa0nums\xa0 \u4e2d\u7684\u4e09\u4e2a\u6574\u6570\uff0c\u4f7f\u5f97\u5b83\u4eec\u7684\u548c\u4e0e \xa0target\xa0 \u6700\u63a5\u8fd1\u3002\u8fd4\u56de\u8fd9\u4e09\u4e2a\u6570\u7684\u548c\u3002\u5047\u5b9a\u6bcf\u7ec4\u8f93\u5165\u53ea\u5b58\u5728\u552f\u4e00\u7b54\u6848\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-06-10"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a35.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5982\u9898 15\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function threeSumClosest(nums: number[], target: number): number {\n  const len = nums.length;\n  nums = nums.sort((a, b) => a - b);\n  let min = Infinity;\n  let minNum = 0;\n  let maxI = target <= 0 ? 0 : target;\n  for (let i = 0; i === 0 || nums[i] < maxI; i++) {\n    let l = i + 1;\n    let r = len - 1;\n    while (l < r) {\n      const num = nums[i] + nums[l] + nums[r];\n      const comp = num - target;\n      if (min > Math.abs(comp)) {\n        min = Math.abs(comp);\n        minNum = num;\n      }\n      if (comp < 0) l++;\n      else if (comp > 0) r--;\n      else if (comp === 0) return num;\n    }\n  }\n  return minNum;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-10"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a136ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int threeSumClosest(vector<int>& nums, int target) {\n        nums.push_back(0x3f3f3f3f);\n        nums.push_back(-0x3f3f3f3f);\n        sort(nums.begin(), nums.end());\n        int n = nums.size(), res = -0x3f3f3f3f;\n        for (int i = 1; i + 2 < n; i++) {\n            for (int j = i + 1; j + 1 < n; j++) {\n                int l = j + 1, r = n, sum = nums[i] + nums[j];\n                while (l < r) {\n                    int m = (l + r) / 2;\n                    if (nums[m] >= target - sum) r = m;\n                    else l = m + 1;\n                }\n                if (sum + nums[l] == target) return target;\n                if (nums[l] != INT_MAX && abs(target - sum - nums[l]) < abs(target - res)) {\n                    res = sum + nums[l];\n                }\n                if (l != j + 1 && nums[l - 1] != INT_MIN && abs(target - sum - nums[l - 1]) < abs(target - res)) {\n                    res = sum + nums[l - 1];\n                }                \n            }\n        }\n        return res;\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(m,{...n})}):m(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var s=t(30758);const r={},i=s.createContext(r);function l(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);