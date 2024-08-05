"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[95347],{36571:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(86070),o=t(25710);const s={},i="73.\u77e9\u9635\u7f6e\u96f6",c={id:"leetcode/1-100/\u77e9\u9635\u7f6e\u96f6",title:"73.\u77e9\u9635\u7f6e\u96f6",description:"\u94fe\u63a5\uff1a73.\u77e9\u9635\u7f6e\u96f6",source:"@site/docs/leetcode/1-100/73.\u77e9\u9635\u7f6e\u96f6.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u77e9\u9635\u7f6e\u96f6",permalink:"/web/site/docs/leetcode/1-100/\u77e9\u9635\u7f6e\u96f6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:73,frontMatter:{},sidebar:"journal",previous:{title:"72.\u7f16\u8f91\u8ddd\u79bb",permalink:"/web/site/docs/leetcode/1-100/\u7f16\u8f91\u8ddd\u79bb"},next:{title:"74.\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635",permalink:"/web/site/docs/leetcode/1-100/\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"73\u77e9\u9635\u7f6e\u96f6",children:"73.\u77e9\u9635\u7f6e\u96f6"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/set-matrix-zeroes",children:"73.\u77e9\u9635\u7f6e\u96f6"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u77e9\u9635",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a m x n \u7684\u77e9\u9635\uff0c\u5982\u679c\u4e00\u4e2a\u5143\u7d20\u4e3a 0\uff0c\u5219\u5c06\u5176\u6240\u5728\u884c\u548c\u5217\u7684\u6240\u6709\u5143\u7d20\u90fd\u8bbe\u4e3a 0\u3002\u8bf7\u4f7f\u7528\u539f\u5730\u7b97\u6cd5\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-21"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a116ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.2MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8bb0\u5f55 col \u8981\u7f6e\u96f6\u7684\u4e0b\u6807\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function setZeroes(matrix: number[][]): void {\n  const rowLen = matrix.length;\n  const colLen = matrix[0].length;\n  const colIndexSet = new Set<number>();\n  for (let i = 0; i < rowLen; i++) {\n    const row = matrix[i];\n    let f = false;\n    for (let j = 0; j < colLen; j++) {\n      if (row[j] === 0) {\n        f = true;\n        colIndexSet.add(j);\n      }\n    }\n    f && row.fill(0);\n  }\n  for (let i = 0; i < rowLen; i++) {\n    for (const j of colIndexSet) {\n      matrix[i][j] = 0;\n    }\n  }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(30758);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);