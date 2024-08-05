"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[48902],{93764:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var s=t(86070),c=t(25710);const i={},r="402.\u79fb\u6389K\u4f4d\u6570\u5b57",l={id:"leetcode/401-500/\u79fb\u6389K\u4f4d\u6570\u5b57",title:"402.\u79fb\u6389K\u4f4d\u6570\u5b57",description:"\u94fe\u63a5\uff1a402.\u79fb\u6389K\u4f4d\u6570\u5b57",source:"@site/docs/leetcode/401-500/402.\u79fb\u6389K\u4f4d\u6570\u5b57.md",sourceDirName:"leetcode/401-500",slug:"/leetcode/401-500/\u79fb\u6389K\u4f4d\u6570\u5b57",permalink:"/docs/leetcode/401-500/\u79fb\u6389K\u4f4d\u6570\u5b57",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:402,frontMatter:{},sidebar:"journal",previous:{title:"401.\u4e8c\u8fdb\u5236\u624b\u8868",permalink:"/docs/leetcode/401-500/\u4e8c\u8fdb\u5236\u624b\u8868"},next:{title:"403.\u9752\u86d9\u8fc7\u6cb3",permalink:"/docs/leetcode/401-500/\u9752\u86d9\u8fc7\u6cb3"}},o={},p=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"402\u79fb\u6389k\u4f4d\u6570\u5b57",children:"402.\u79fb\u6389K\u4f4d\u6570\u5b57"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/remove-k-digits",children:"402.\u79fb\u6389K\u4f4d\u6570\u5b57"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u8d2a\u5fc3\u3001\u5b57\u7b26\u4e32\u3001\u5355\u8c03\u6808",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u4ee5\u5b57\u7b26\u4e32\u8868\u793a\u7684\u975e\u8d1f\u6574\u6570 num\uff0c\u79fb\u9664\u8fd9\u4e2a\u6570\u4e2d\u7684 k \u4f4d\u6570\u5b57\uff0c\u4f7f\u5f97\u5269\u4e0b\u7684\u6570\u5b57\u6700\u5c0f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-11-15"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8d2a\u5fc3\uff0c\u5355\u8c03\u6027\uff0c\u8d8a\u5c0f\u7684\u6570\u5b57\u5728\u524d\u9762\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function removeKdigits(num: string, k: number): string {\n  const stack: number[] = [];\n  const isEmpty = () => stack.length === 0;\n  for (const c of num) {\n    const toNum = Number(c);\n    if (isEmpty()) {\n      stack.push(toNum);\n    } else {\n      let top = stack[stack.length - 1];\n      while (toNum < top && k !== 0) {\n        stack.pop();\n        k--;\n        top = stack[stack.length - 1];\n      }\n      stack.push(toNum);\n    }\n  }\n  while (k-- !== 0) stack.pop();\n  while (!isEmpty() && stack[0] === 0) stack.shift();\n  return isEmpty() ? '0' : stack.join('');\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-30"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5355\u8c03\u6808\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function removeKdigits(num: string, k: number): string {\n  const stack: number[] = [];\n  for (let i = 0; i < num.length; i++) {\n    const v = num.codePointAt(i)! - '0'.codePointAt(0)!;\n    while (k && stack.length && stack[stack.length - 1] > v) {\n      stack.pop();\n      k--;\n    }\n    stack.push(v);\n  }\n  while (stack.length && k) {\n    stack.pop();\n    k--;\n  }\n  while (stack.length && stack[0] === 0) stack.shift();\n  return stack.join('') || '0';\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>l});var s=t(30758);const c={},i=s.createContext(c);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);