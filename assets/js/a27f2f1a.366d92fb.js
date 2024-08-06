"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[95411],{11920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=t(86070),i=t(25710);const s={},l="240.\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635II",c={id:"leetcode/201-300/\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635II",title:"240.\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635II",description:"\u94fe\u63a5\uff1a240.\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635II",source:"@site/docs/leetcode/201-300/240.\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635II.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635II",permalink:"/docs/leetcode/201-300/\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635II",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:240,frontMatter:{},sidebar:"journal",previous:{title:"239.\u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c",permalink:"/docs/leetcode/201-300/\u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c"},next:{title:"241.\u4e3a\u8fd0\u7b97\u8868\u8fbe\u5f0f\u8bbe\u8ba1\u4f18\u5148\u7ea7",permalink:"/docs/leetcode/201-300/\u4e3a\u8fd0\u7b97\u8868\u8fbe\u5f0f\u8bbe\u8ba1\u4f18\u5148\u7ea7"}},o={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"240\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635ii",children:"240.\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635II"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/search-a-2d-matrix-ii",children:"240.\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635II"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u5206\u6cbb\u3001\u77e9\u9635",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7f16\u5199\u4e00\u4e2a\u9ad8\u6548\u7684\u7b97\u6cd5\u6765\u641c\u7d22 m x n \u77e9\u9635 matrix \u4e2d\u7684\u4e00\u4e2a\u76ee\u6807\u503c target \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-24"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.8MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4ece\u53f3\u4e0a\u89d2\u5f00\u59cb\u5bfb\u627e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function searchMatrix(matrix: number[][], target: number): boolean {\n  let i = 0;\n  let j = matrix[0].length - 1;\n  while (i < matrix.length && j >= 0) {\n    if (matrix[i][j] > target) j--;\n    else if (matrix[i][j] < target) i++;\n    else return true;\n  }\n  return false;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-25"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43.1MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u62c6\u5206\u67e5\u627e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function searchMatrix(matrix: number[][], target: number): boolean {\n  return matrix.flat().includes(target);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-25"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4ece\u53f3\u4e0a\u89d2\u5f00\u59cb\u627e\uff0ctarget \u5c31\u5de6\u79fb\uff0ctarget \u5927\u5c31\u4e0b\u79fb\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function searchMatrix(matrix: number[][], target: number): boolean {\n  const m = matrix.length;\n  const n = matrix[0].length;\n  let row = 0;\n  let col = n - 1;\n  while (row < m && col >= 0) {\n    const num = matrix[row][col];\n    if (num === target) return true;\n    if (num > target) col--;\n    else row++;\n  }\n  return false;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var r=t(30758);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);