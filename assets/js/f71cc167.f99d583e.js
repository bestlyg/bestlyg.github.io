"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[34411],{5650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(86070),s=t(25710);const i={},c="989.\u6570\u7ec4\u5f62\u5f0f\u7684\u6574\u6570\u52a0\u6cd5",o={id:"leetcode/901-1000/\u6570\u7ec4\u5f62\u5f0f\u7684\u6574\u6570\u52a0\u6cd5",title:"989.\u6570\u7ec4\u5f62\u5f0f\u7684\u6574\u6570\u52a0\u6cd5",description:"\u94fe\u63a5\uff1a989.\u6570\u7ec4\u5f62\u5f0f\u7684\u6574\u6570\u52a0\u6cd5",source:"@site/docs/leetcode/901-1000/989.\u6570\u7ec4\u5f62\u5f0f\u7684\u6574\u6570\u52a0\u6cd5.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u6570\u7ec4\u5f62\u5f0f\u7684\u6574\u6570\u52a0\u6cd5",permalink:"/web/site/docs/leetcode/901-1000/\u6570\u7ec4\u5f62\u5f0f\u7684\u6574\u6570\u52a0\u6cd5",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:989,frontMatter:{},sidebar:"journal",previous:{title:"987.\u4e8c\u53c9\u6811\u7684\u5782\u5e8f\u904d\u5386",permalink:"/web/site/docs/leetcode/901-1000/\u4e8c\u53c9\u6811\u7684\u5782\u5e8f\u904d\u5386"},next:{title:"990.\u7b49\u5f0f\u65b9\u7a0b\u7684\u53ef\u6ee1\u8db3\u6027",permalink:"/web/site/docs/leetcode/901-1000/\u7b49\u5f0f\u65b9\u7a0b\u7684\u53ef\u6ee1\u8db3\u6027"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"989\u6570\u7ec4\u5f62\u5f0f\u7684\u6574\u6570\u52a0\u6cd5",children:"989.\u6570\u7ec4\u5f62\u5f0f\u7684\u6574\u6570\u52a0\u6cd5"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/add-to-array-form-of-integer",children:"989.\u6570\u7ec4\u5f62\u5f0f\u7684\u6574\u6570\u52a0\u6cd5"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5bf9\u4e8e\u975e\u8d1f\u6574\u6570 \xa0X\xa0 \u800c\u8a00\uff0cX\xa0 \u7684\u6570\u7ec4\u5f62\u5f0f\u662f\u6bcf\u4f4d\u6570\u5b57\u6309\u4ece\u5de6\u5230\u53f3\u7684\u987a\u5e8f\u5f62\u6210\u7684\u6570\u7ec4\u3002\u4f8b\u5982\uff0c\u5982\u679c \xa0X = 1231\uff0c\u90a3\u4e48\u5176\u6570\u7ec4\u5f62\u5f0f\u4e3a \xa0[1,2,3,1]\u3002\u7ed9\u5b9a\u975e\u8d1f\u6574\u6570 X \u7684\u6570\u7ec4\u5f62\u5f0f \xa0A\uff0c\u8fd4\u56de\u6574\u6570 \xa0X+K\xa0 \u7684\u6570\u7ec4\u5f62\u5f0f\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-01-22"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a140ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43.2MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5012\u5e8f\u76f8\u52a0\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function addToArrayForm(A: number[], K: number): number[] {\n  let add: 1 | 0 = 0;\n  const kArr: number[] = [];\n  while (K !== 0) {\n    kArr.push(K % 10);\n    K = ~~(K / 10);\n  }\n  A = A.reverse();\n  for (let i = 0, len = Math.max(A.length, kArr.length); i < len; i++) {\n    let num = (A[i] ?? 0) + (kArr[i] ?? 0) + add;\n    if (num >= 10) {\n      num -= 10;\n      add = 1;\n    } else {\n      add = 0;\n    }\n    A[i] = num;\n  }\n  add === 1 && A.push(1);\n  return A.reverse();\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(30758);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);