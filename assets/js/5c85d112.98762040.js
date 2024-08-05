"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[18410],{88083:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=s(86070),t=s(25710);const r={},c="349.\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6",l={id:"leetcode/301-400/\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6",title:"349.\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6",description:"\u94fe\u63a5\uff1a349.\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6",source:"@site/docs/leetcode/301-400/349.\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6.md",sourceDirName:"leetcode/301-400",slug:"/leetcode/301-400/\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6",permalink:"/web/site/docs/leetcode/301-400/\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:349,frontMatter:{},sidebar:"journal",previous:{title:"347.\u524dK\u4e2a\u9ad8\u9891\u5143\u7d20",permalink:"/web/site/docs/leetcode/301-400/\u524dK\u4e2a\u9ad8\u9891\u5143\u7d20"},next:{title:"350.\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6II",permalink:"/web/site/docs/leetcode/301-400/\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6II"}},u={},o=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - javascript",id:"\u9898\u89e3-2---javascript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2},{value:"\u9898\u89e3 4 - c",id:"\u9898\u89e3-4---c",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"349\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6",children:"349.\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/intersection-of-two-arrays",children:"349.\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u53cc\u6307\u9488\u3001\u4e8c\u5206\u67e5\u627e\u3001\u6392\u5e8f",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e24\u4e2a\u6570\u7ec4\uff0c\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\u6765\u8ba1\u7b97\u5b83\u4eec\u7684\u4ea4\u96c6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-28"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a34.9MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f7f\u7528 Set \u5bf9\u8c61\u53bb\u91cd\u540e\u518d\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number[]}\n */\nvar intersection = function (nums1, nums2) {\n  const set1 = new Set(nums1);\n  const set2 = new Set(nums2);\n  const result = [];\n  for (const num of set2) {\n    if (set1.has(num)) {\n      result.push(num);\n    }\n  }\n  return result;\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---javascript",children:"\u9898\u89e3 2 - javascript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-28"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a34.8MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f7f\u7528 Set \u5bf9\u8c61\u53bb\u91cd\u540e\u7528 filter \u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"var intersection = function (nums1, nums2) {\n  const a = new Set(nums1);\n  const b = new Set(nums2);\n  return [...new Set([...a].filter(x => b.has(x)))];\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-11-02"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.2MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528 set \u53bb\u91cd\u641c\u7d22\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function intersection(nums1: number[], nums2: number[]): number[] {\n  const set = new Set(nums1);\n  const arr: number[] = [];\n  for (const num of nums2) {\n    set.has(num) && arr.push(num);\n  }\n  return [...new Set(arr)];\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-4---c",children:"\u9898\u89e3 4 - c"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-30"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.4MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u67e5\u627e\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:"int comp(const void *a, const void *b) {\n    return *(int *)a - *(int *)b;\n}\nint bs(int *nums, int n, int num) {\n    int l = 0, r = n - 1, m;\n    if (nums[l] > num || nums[r] < num) return 0;\n    while (l < r) {\n        m = (l + r) >> 1;\n        if (nums[m] == num) return 1;\n        if (nums[m] > num) r = m - 1;\n        else l = m + 1;\n    }\n    return nums[l] == num ? 1 : 0;\n}\nint* intersection(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize){\n    qsort(nums2, nums2Size, sizeof(int), comp);\n    qsort(nums1, nums1Size, sizeof(int), comp);\n    int *ans = (int *)malloc(sizeof(int) * (nums1Size + nums2Size));\n    *returnSize = 0;\n    for (int i = 0; i < nums1Size; i++) {\n        if (i < nums1Size - 1 && nums1[i] == nums1[i + 1]) continue;\n        int num = nums1[i];\n        int check = bs(nums2, nums2Size, num);\n        if (check) ans[(*returnSize)++] = num;\n    }\n    return ans;\n}\n"})})]})}function m(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>l});var i=s(30758);const t={},r=i.createContext(t);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);