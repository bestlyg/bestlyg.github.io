"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[46243],{53772:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=t(86070),s=t(31503);const i={},c="4.\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570",l={id:"leetcode/1-100/\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570",title:"4.\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570",description:"\u94fe\u63a5\uff1a4.\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570",source:"@site/docs/leetcode/1-100/4.\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570",permalink:"/docs/leetcode/1-100/\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"journal",previous:{title:"3.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",permalink:"/docs/leetcode/1-100/\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32"},next:{title:"5.\u6700\u957f\u56de\u6587\u5b50\u4e32",permalink:"/docs/leetcode/1-100/\u6700\u957f\u56de\u6587\u5b50\u4e32"}},d={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"4\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570",children:"4.\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/median-of-two-sorted-arrays",children:"4.\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u5206\u6cbb",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e24\u4e2a\u5927\u5c0f\u4e3a m \u548c n \u7684\u6b63\u5e8f\uff08\u4ece\u5c0f\u5230\u5927\uff09\u6570\u7ec4 nums1 \u548c nums2\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-24"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a144ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.2MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5408\u5e76\u6570\u7ec4\u6392\u5e8f\u540e\u76f4\u63a5\u6c42\u4e24\u4e2a\u4e2d\u95f4\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"var findMedianSortedArrays = function (nums1: number[], nums2: number[]): number {\n  const len = nums1.length + nums2.length;\n  const mid1 = len >> 1;\n  const mid2 = len % 2 === 0 ? mid1 - 1 : mid1;\n  const arr = [...nums1, ...nums2].sort((a, b) => a - b);\n  return (arr[mid1] + arr[mid2]) / 2;\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-23"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a124ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.9MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u67e5\u627e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function findMedianSortedArrays(nums1: number[], nums2: number[]): number {\n  const n1 = nums1.length;\n  const n2 = nums2.length;\n  const v1 = find((n1 + n2 + 1) >> 1);\n  if ((n1 + n2) % 2 === 1) return v1;\n  const v2 = find(((n1 + n2 + 1) >> 1) + 1);\n  return (v1 + v2) / 2;\n  function find(k: number, i1: number = 0, i2: number = 0): number {\n    if (i1 === nums1.length) return nums2[i2 + k - 1];\n    if (i2 === nums2.length) return nums1[i1 + k - 1];\n    if (k === 1) return Math.min(nums1[i1], nums2[i2]);\n    let v1 = Math.min(k >> 1, nums1.length - i1);\n    let v2 = Math.min(k - v1, nums2.length - i2);\n    v1 = k - v2;\n    if (nums1[i1 + v1 - 1] <= nums2[i2 + v2 - 1]) return find(k - v1, i1 + v1, i2);\n    else return find(k - v2, i1, i2 + v2);\n  }\n}\n"})})]})}function m(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var r=t(30758);const s={},i=r.createContext(s);function c(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);