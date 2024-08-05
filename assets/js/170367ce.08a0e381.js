"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[21401],{93676:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=t(86070),o=t(25710);const i={},r="845.\u6570\u7ec4\u4e2d\u7684\u6700\u957f\u5c71\u8109",c={id:"leetcode/801-900/\u6570\u7ec4\u4e2d\u7684\u6700\u957f\u5c71\u8109",title:"845.\u6570\u7ec4\u4e2d\u7684\u6700\u957f\u5c71\u8109",description:"\u94fe\u63a5\uff1a845.\u6570\u7ec4\u4e2d\u7684\u6700\u957f\u5c71\u8109",source:"@site/docs/leetcode/801-900/845.\u6570\u7ec4\u4e2d\u7684\u6700\u957f\u5c71\u8109.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u6570\u7ec4\u4e2d\u7684\u6700\u957f\u5c71\u8109",permalink:"/docs/leetcode/801-900/\u6570\u7ec4\u4e2d\u7684\u6700\u957f\u5c71\u8109",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:845,frontMatter:{},sidebar:"journal",previous:{title:"844.\u6bd4\u8f83\u542b\u9000\u683c\u7684\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/801-900/\u6bd4\u8f83\u542b\u9000\u683c\u7684\u5b57\u7b26\u4e32"},next:{title:"846.\u4e00\u624b\u987a\u5b50",permalink:"/docs/leetcode/801-900/\u4e00\u624b\u987a\u5b50"}},l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"845\u6570\u7ec4\u4e2d\u7684\u6700\u957f\u5c71\u8109",children:"845.\u6570\u7ec4\u4e2d\u7684\u6700\u957f\u5c71\u8109"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/longest-mountain-in-array",children:"845.\u6570\u7ec4\u4e2d\u7684\u6700\u957f\u5c71\u8109"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u52a8\u6001\u89c4\u5212\u3001\u679a\u4e3e",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u51fa\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 A\uff0c\u8fd4\u56de\u6700\u957f \u201c\u5c71\u8109\u201d \u7684\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-10-25"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.6MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u83b7\u53d6\u6240\u6709\u5c71\u9876\uff0c\u518d\u8ba1\u7b97\u6bcf\u4e2a\u5c71\u8109\u7684\u9ad8\u5ea6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function longestMountain(A: number[]): number {\n  const len = A.length;\n  const tops: number[] = [];\n  findTop();\n  let ans = 0;\n  console.log(tops);\n  if (tops.length === 0) return ans; // \u6ca1\u6709\u9876\u5cf0\n  for (const top of tops) {\n    ans = Math.max(ans, findLength(top));\n  }\n  return ans;\n  function findLength(top: number): number {\n    let ans = 1;\n    for (let i = top - 1; i >= 0; i--) {\n      if (A[i] >= A[i + 1]) break;\n      ans++;\n    }\n    for (let i = top + 1; i < len; i++) {\n      if (A[i] >= A[i - 1]) break;\n      ans++;\n    }\n    return ans;\n  }\n  function findTop() {\n    for (let i = 1; i < len - 1; i++) {\n      const num = A[i];\n      if (num > A[i + 1] && num > A[i - 1]) tops.push(i);\n    }\n  }\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var s=t(30758);const o={},i=s.createContext(o);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);