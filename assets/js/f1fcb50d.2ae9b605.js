"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[16778],{57759:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"leetcode/1-100/\u65cb\u8f6c\u56fe\u50cf","title":"48.\u65cb\u8f6c\u56fe\u50cf","description":"\u94fe\u63a5\uff1a48.\u65cb\u8f6c\u56fe\u50cf","source":"@site/docs/leetcode/1-100/48.\u65cb\u8f6c\u56fe\u50cf.md","sourceDirName":"leetcode/1-100","slug":"/leetcode/1-100/\u65cb\u8f6c\u56fe\u50cf","permalink":"/docs/leetcode/1-100/\u65cb\u8f6c\u56fe\u50cf","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":48,"frontMatter":{},"sidebar":"journal","previous":{"title":"47.\u5168\u6392\u5217II","permalink":"/docs/leetcode/1-100/\u5168\u6392\u5217II"},"next":{"title":"49.\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4","permalink":"/docs/leetcode/1-100/\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4"}}');var i=t(25105),s=t(8556);const c={},l="48.\u65cb\u8f6c\u56fe\u50cf",o={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"48\u65cb\u8f6c\u56fe\u50cf",children:"48.\u65cb\u8f6c\u56fe\u50cf"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/rotate-image",children:"48.\u65cb\u8f6c\u56fe\u50cf"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66\u3001\u77e9\u9635",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a n \xd7 n \u7684\u4e8c\u7ef4\u77e9\u9635\u8868\u793a\u4e00\u4e2a\u56fe\u50cf\u3002\u5c06\u56fe\u50cf\u987a\u65f6\u9488\u65cb\u8f6c 90 \u5ea6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-12-19"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.3MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u65b0\u6570\u7ec4\u50a8\u5b58\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function rotate(matrix: number[][]): void {\n  const n = matrix.length;\n  const arr: number[][] = [];\n  for (let i = 0; i < n; i++) {\n    const row: number[] = [];\n    for (let j = n - 1; j >= 0; j--) {\n      row.push(matrix[j][i]);\n    }\n    arr.push(row);\n  }\n  for (let i = 0; i < n; i++) matrix[i] = arr[i];\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-12-19"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.5MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u4e24\u6b21\u7ffb\u8f6c\u4ee3\u66ff\u65cb\u8f6c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function rotate(matrix: number[][]): void {\n  const n = matrix.length;\n  // \u6c34\u5e73\u7ffb\u8f6c\n  for (let i = 0, max = n / 2; i < max; i++) {\n    for (let j = 0; j < n; j++) {\n      [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];\n    }\n  }\n  // \u4e3b\u5bf9\u89d2\u7ebf\u7ffb\u8f6c\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < i; j++) {\n      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];\n    }\n  }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(58101);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);