"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[84776],{11409:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/801-900/\u5355\u8c03\u6570\u5217","title":"896.\u5355\u8c03\u6570\u5217","description":"\u94fe\u63a5\uff1a896.\u5355\u8c03\u6570\u5217","source":"@site/docs/leetcode/801-900/896.\u5355\u8c03\u6570\u5217.md","sourceDirName":"leetcode/801-900","slug":"/leetcode/801-900/\u5355\u8c03\u6570\u5217","permalink":"/docs/leetcode/801-900/\u5355\u8c03\u6570\u5217","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":896,"frontMatter":{},"sidebar":"journal","previous":{"title":"895.\u6700\u5927\u9891\u7387\u6808","permalink":"/docs/leetcode/801-900/\u6700\u5927\u9891\u7387\u6808"},"next":{"title":"897.\u9012\u589e\u987a\u5e8f\u641c\u7d22\u6811","permalink":"/docs/leetcode/801-900/\u9012\u589e\u987a\u5e8f\u641c\u7d22\u6811"}}');var s=t(25105),i=t(8556);const o={},c="896.\u5355\u8c03\u6570\u5217",l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"896\u5355\u8c03\u6570\u5217",children:"896.\u5355\u8c03\u6570\u5217"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/monotonic-array",children:"896.\u5355\u8c03\u6570\u5217"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5982\u679c\u6570\u7ec4\u662f\u5355\u8c03\u9012\u589e\u6216\u5355\u8c03\u9012\u51cf\u7684\uff0c\u90a3\u4e48\u5b83\u662f\u5355\u8c03\u7684\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-28"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.1MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5206\u522b\u5224\u65ad\u5355\u8c03\u6027\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function isMonotonic(A: number[]): boolean {\n  const len = A.length - 1;\n  let f = true;\n  for (let i = 0; i < len; i++) {\n    if (A[i] > A[i + 1]) {\n      f = false;\n      break;\n    }\n  }\n  if (f) return true;\n  for (let i = 0; i < len; i++) {\n    if (A[i] < A[i + 1]) {\n      return false;\n    }\n  }\n  return true;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(58101);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);