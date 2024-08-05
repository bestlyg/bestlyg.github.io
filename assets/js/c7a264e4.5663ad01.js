"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[15985],{52289:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var s=t(86070),i=t(25710);const r={},c="1005.K\u6b21\u53d6\u53cd\u540e\u6700\u5927\u5316\u7684\u6570\u7ec4\u548c",l={id:"leetcode/1001-1100/K\u6b21\u53d6\u53cd\u540e\u6700\u5927\u5316\u7684\u6570\u7ec4\u548c",title:"1005.K\u6b21\u53d6\u53cd\u540e\u6700\u5927\u5316\u7684\u6570\u7ec4\u548c",description:"\u94fe\u63a5\uff1a1005.K\u6b21\u53d6\u53cd\u540e\u6700\u5927\u5316\u7684\u6570\u7ec4\u548c",source:"@site/docs/leetcode/1001-1100/1005.K\u6b21\u53d6\u53cd\u540e\u6700\u5927\u5316\u7684\u6570\u7ec4\u548c.md",sourceDirName:"leetcode/1001-1100",slug:"/leetcode/1001-1100/K\u6b21\u53d6\u53cd\u540e\u6700\u5927\u5316\u7684\u6570\u7ec4\u548c",permalink:"/web/site/docs/leetcode/1001-1100/K\u6b21\u53d6\u53cd\u540e\u6700\u5927\u5316\u7684\u6570\u7ec4\u548c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1005,frontMatter:{},sidebar:"journal",previous:{title:"1004.\u6700\u5927\u8fde\u7eed1\u7684\u4e2a\u6570III",permalink:"/web/site/docs/leetcode/1001-1100/\u6700\u5927\u8fde\u7eed1\u7684\u4e2a\u6570III"},next:{title:"1006.\u7b28\u9636\u4e58",permalink:"/web/site/docs/leetcode/1001-1100/\u7b28\u9636\u4e58"}},o={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - c",id:"\u9898\u89e3-2---c",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"1005k\u6b21\u53d6\u53cd\u540e\u6700\u5927\u5316\u7684\u6570\u7ec4\u548c",children:"1005.K\u6b21\u53d6\u53cd\u540e\u6700\u5927\u5316\u7684\u6570\u7ec4\u548c"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/maximize-sum-of-array-after-k-negations",children:"1005.K\u6b21\u53d6\u53cd\u540e\u6700\u5927\u5316\u7684\u6570\u7ec4\u548c"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u6392\u5e8f",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u6570\u7ec4 \u53ef\u80fd\u7684\u6700\u5927\u548c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-03"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.5MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function largestSumAfterKNegations(nums: number[], k: number): number {\n  const n = nums.length;\n  nums.sort((a, b) => a - b);\n  for (let i = 0; i < n && nums[i] < 0 && k > 0; i++) {\n    nums[i] *= -1;\n    k--;\n  }\n  const sum = nums.reduce((total, num) => total + num, 0);\n  if ((k & 1) === 0) return sum;\n  return sum - 2 * Math.min(...nums);\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---c",children:"\u9898\u89e3 2 - c"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-03"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.7MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"int comp(const void *a, const void *b) {\n    return *(int *)a - *(int *)b;\n}\nint largestSumAfterKNegations(int* nums, int numsSize, int k){\n    qsort(nums, numsSize, sizeof(int), comp);\n    for (int i = 0; i < numsSize && nums[i] < 0 && k > 0; i++) {\n      nums[i] *= -1;\n      k--;\n    }\n    int sum = 0, min = 10000;\n    for (int i = 0; i < numsSize; i++) {\n        sum += nums[i];\n        if (min > nums[i]) min = nums[i];\n    }\n    if ((k & 1) == 0) return sum;\n    return sum - 2 * min;\n}\n"})})]})}function m(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var s=t(30758);const i={},r=s.createContext(i);function c(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);