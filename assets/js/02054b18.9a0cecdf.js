"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[9761],{41372:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var t=r(86070),i=r(25710);const s={},l="LCR069.\u5c71\u8109\u6570\u7ec4\u7684\u5cf0\u9876\u7d22\u5f15",c={id:"leetcode/LCR/LCR069.\u5c71\u8109\u6570\u7ec4\u7684\u5cf0\u9876\u7d22\u5f15",title:"LCR069.\u5c71\u8109\u6570\u7ec4\u7684\u5cf0\u9876\u7d22\u5f15",description:"\u94fe\u63a5\uff1aLCR069.\u5c71\u8109\u6570\u7ec4\u7684\u5cf0\u9876\u7d22\u5f15",source:"@site/docs/leetcode/LCR/LCR069.\u5c71\u8109\u6570\u7ec4\u7684\u5cf0\u9876\u7d22\u5f15.md",sourceDirName:"leetcode/LCR",slug:"/leetcode/LCR/LCR069.\u5c71\u8109\u6570\u7ec4\u7684\u5cf0\u9876\u7d22\u5f15",permalink:"/docs/leetcode/LCR/LCR069.\u5c71\u8109\u6570\u7ec4\u7684\u5cf0\u9876\u7d22\u5f15",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"LCR067.\u6570\u7ec4\u4e2d\u4e24\u4e2a\u6570\u7684\u6700\u5927\u5f02\u6216\u503c",permalink:"/docs/leetcode/LCR/LCR067.\u6570\u7ec4\u4e2d\u4e24\u4e2a\u6570\u7684\u6700\u5927\u5f02\u6216\u503c"},next:{title:"LCR074.\u5408\u5e76\u533a\u95f4",permalink:"/docs/leetcode/LCR/LCR074.\u5408\u5e76\u533a\u95f4"}},d={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"lcr069\u5c71\u8109\u6570\u7ec4\u7684\u5cf0\u9876\u7d22\u5f15",children:"LCR069.\u5c71\u8109\u6570\u7ec4\u7684\u5cf0\u9876\u7d22\u5f15"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/B1IidL",children:"LCR069.\u5c71\u8109\u6570\u7ec4\u7684\u5cf0\u9876\u7d22\u5f15"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u7531\u6574\u6570\u7ec4\u6210\u7684\u5c71\u5cf0\u6570\u7ec4 arr \uff0c\u8fd4\u56de\u4efb\u4f55\u6ee1\u8db3 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] \u7684\u4e0b\u6807 i\xa0\uff0c\u5373\u5c71\u5cf0\u9876\u90e8\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-14"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.2MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function peakIndexInMountainArray(arr: number[]): number {\n  let ans = 0;\n  for (let i = 0, l = arr.length; i < l; i++) ans = arr[i] > arr[ans] ? i : ans;\n  return ans;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-14"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function peakIndexInMountainArray(arr: number[]): number {\n  return find(0, arr.length - 1);\n  function find(l: number, r: number): number {\n    if (l >= r) return l;\n    const lnum = arr[l];\n    const rnum = arr[r];\n    const mid = (l + r) >> 1;\n    const midnum = arr[mid];\n    if (midnum > lnum && midnum > rnum) {\n      const i1 = find(l, mid);\n      const i2 = find(mid, r);\n      return arr[i1] > arr[i2] ? i1 : i2;\n    } else if (midnum <= rnum) {\n      return find(mid + 1, r);\n    } else {\n      return find(l, mid - 1);\n    }\n  }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>c});var t=r(30758);const i={},s=t.createContext(i);function l(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);