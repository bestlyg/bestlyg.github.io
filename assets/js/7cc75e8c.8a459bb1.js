"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[70370],{61706:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var s=t(86070),r=t(25710);const c={},i="496.\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20I",l={id:"leetcode/401-500/\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20I",title:"496.\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20I",description:"\u94fe\u63a5\uff1a496.\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20I",source:"@site/docs/leetcode/401-500/496.\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20I.md",sourceDirName:"leetcode/401-500",slug:"/leetcode/401-500/\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20I",permalink:"/web/site/docs/leetcode/401-500/\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20I",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:496,frontMatter:{},sidebar:"journal",previous:{title:"495.\u63d0\u83ab\u653b\u51fb",permalink:"/web/site/docs/leetcode/401-500/\u63d0\u83ab\u653b\u51fb"},next:{title:"498.\u5bf9\u89d2\u7ebf\u904d\u5386",permalink:"/web/site/docs/leetcode/401-500/\u5bf9\u89d2\u7ebf\u904d\u5386"}},o={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"496\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20i",children:"496.\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20I"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/next-greater-element-i",children:"496.\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20I"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5355\u8c03\u6808",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u627e\u51fa nums1 \u4e2d\u6bcf\u4e2a\u5143\u7d20\u5728 nums2 \u4e2d\u7684\u4e0b\u4e00\u4e2a\u6bd4\u5176\u5927\u7684\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-20"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5355\u8c03\u9012\u51cf\u6808\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function nextGreaterElement(nums1: number[], nums2: number[]): number[] {\n  const map: Record<number, number> = {};\n  const n2 = nums2.length;\n  for (let i = 0; i < n2; i++) map[nums2[i]] = i;\n  const stack: number[] = [];\n  const arr = new Array(n2).fill(-1);\n  for (let i = 0; i < n2; i++) {\n    const num = nums2[i];\n    while (stack.length && nums2[stack[stack.length - 1]] < num) arr[stack.pop()!] = num;\n    stack.push(i);\n  }\n  return nums1.map(num => arr[map[num]]);\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-26"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5355\u8c03\u6808\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function nextGreaterElement(nums1: number[], nums2: number[]): number[] {\n  const map = new Map<number, number>();\n  nums1.forEach((v, i) => map.set(v, i));\n  const ans: number[] = new Array(nums1.length).fill(-1);\n  const stack: number[] = [];\n  for (const num2 of nums2) {\n    while (stack.length && stack[stack.length - 1] < num2) {\n      const num = stack.pop()!;\n      if (map.has(num)) ans[map.get(num)!] = num2;\n    }\n    stack.push(num2);\n  }\n  return ans;\n}\n"})})]})}function m(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>l});var s=t(30758);const r={},c=s.createContext(r);function i(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);