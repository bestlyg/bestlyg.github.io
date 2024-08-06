"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[14016],{87021:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var r=t(86070),i=t(25710);const l={},s="120.\u4e09\u89d2\u5f62\u6700\u5c0f\u8def\u5f84\u548c",c={id:"leetcode/101-200/\u4e09\u89d2\u5f62\u6700\u5c0f\u8def\u5f84\u548c",title:"120.\u4e09\u89d2\u5f62\u6700\u5c0f\u8def\u5f84\u548c",description:"\u94fe\u63a5\uff1a120.\u4e09\u89d2\u5f62\u6700\u5c0f\u8def\u5f84\u548c",source:"@site/docs/leetcode/101-200/120.\u4e09\u89d2\u5f62\u6700\u5c0f\u8def\u5f84\u548c.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u4e09\u89d2\u5f62\u6700\u5c0f\u8def\u5f84\u548c",permalink:"/docs/leetcode/101-200/\u4e09\u89d2\u5f62\u6700\u5c0f\u8def\u5f84\u548c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:120,frontMatter:{},sidebar:"journal",previous:{title:"119.\u6768\u8f89\u4e09\u89d2II",permalink:"/docs/leetcode/101-200/\u6768\u8f89\u4e09\u89d2II"},next:{title:"121.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a",permalink:"/docs/leetcode/101-200/\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a"}},a={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"120\u4e09\u89d2\u5f62\u6700\u5c0f\u8def\u5f84\u548c",children:"120.\u4e09\u89d2\u5f62\u6700\u5c0f\u8def\u5f84\u548c"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/triangle",children:"120.\u4e09\u89d2\u5f62\u6700\u5c0f\u8def\u5f84\u548c"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u4e09\u89d2\u5f62\uff0c\u627e\u51fa\u81ea\u9876\u5411\u4e0b\u7684\u6700\u5c0f\u8def\u5f84\u548c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-07-14"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a64ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a36.8MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9006\u5411\u63a8\u5bfc[0][0],dp[i][j]=i \u884c j \u5217\u65f6\u7684\u6700\u5c0f\u6b65\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function minimumTotal(triangle: number[][]): number {\n  const len = triangle.length;\n  const ans: number[][] = new Array(len + 1);\n  ans[len] = new Array(len + 1).fill(0);\n  for (let i = len - 1; i >= 0; i--) {\n    const arr: number[] = [];\n    for (let j = 0, l = triangle[i].length; j < l; j++) {\n      arr[j] = Math.min(ans[i + 1][j], ans[i + 1][j + 1]) + triangle[i][j];\n    }\n    ans[i] = arr;\n  }\n  return ans[0][0];\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-07-14"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a37MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6839\u636e\u9898\u89e3 1\uff0c\u5229\u7528\u6ed1\u52a8\u6570\u7ec4\u6765\u8282\u7701\u7a7a\u95f4\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function minimumTotal(triangle: number[][]): number {\n  const len = triangle.length;\n  const ans: number[][] = new Array(2);\n  ans[len % 2] = new Array(len + 1).fill(0);\n  for (let i = len - 1; i >= 0; i--) {\n    const arr: number[] = [];\n    for (let j = 0, l = triangle[i].length; j < l; j++) {\n      arr[j] = Math.min(ans[(i + 1) % 2][j], ans[(i + 1) % 2][j + 1]) + triangle[i][j];\n    }\n    ans[i % 2] = arr;\n  }\n  return ans[0][0];\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-03"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.7MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function minimumTotal(triangle: number[][]): number {\n  const n = triangle.length;\n  for (let i = n - 2; i >= 0; i--)\n    for (let j = 0; j <= i; j++)\n      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);\n  return triangle[0][0];\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>c});var r=t(30758);const i={},l=r.createContext(i);function s(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);