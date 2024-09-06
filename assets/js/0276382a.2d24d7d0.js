"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[62504],{6450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(86070),i=t(25710);const s={},o="74.\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635",c={id:"leetcode/1-100/\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635",title:"74.\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635",description:"\u94fe\u63a5\uff1a74.\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635",source:"@site/docs/leetcode/1-100/74.\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635",permalink:"/docs/leetcode/1-100/\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:74,frontMatter:{},sidebar:"journal",previous:{title:"73.\u77e9\u9635\u7f6e\u96f6",permalink:"/docs/leetcode/1-100/\u77e9\u9635\u7f6e\u96f6"},next:{title:"75.\u989c\u8272\u5206\u7c7b",permalink:"/docs/leetcode/1-100/\u989c\u8272\u5206\u7c7b"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"74\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635",children:"74.\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/search-a-2d-matrix",children:"74.\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u77e9\u9635",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7f16\u5199\u4e00\u4e2a\u9ad8\u6548\u7684\u7b97\u6cd5\u6765\u5224\u65ad m x n \u77e9\u9635\u4e2d\uff0c\u662f\u5426\u5b58\u5728\u4e00\u4e2a\u76ee\u6807\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-30"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.3MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u67e5\u627e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function searchMatrix(matrix: number[][], target: number): boolean {\n  const colLen = matrix[0].length;\n  const rowLen = matrix.length;\n  let targetRow!: number[];\n  for (let i = 0; i < rowLen; i++) {\n    const row = matrix[i];\n    if (i === rowLen - 1) {\n      targetRow = row;\n    } else if (row[0] <= target && matrix[i + 1][0] > target) {\n      targetRow = row;\n      break;\n    }\n  }\n  if (!targetRow) return false;\n  const find = (start: number, end: number): boolean => {\n    if (start > end) return false;\n    const mid = ~~((start + end) / 2);\n    if (targetRow[mid] < target) return find(mid + 1, end);\n    else if (targetRow[mid] > target) return find(start, mid - 1);\n    else return true;\n  };\n  return find(0, colLen - 1);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-30"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.4MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u67e5\u627e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function searchMatrix(matrix: number[][], target: number): boolean {\n  const colLen = matrix[0].length;\n  const rowLen = matrix.length;\n  const findRow = (start: number, end: number): number[] | undefined => {\n    if (start > end) return undefined;\n    const mid = ~~((start + end) / 2);\n    const row = matrix[mid];\n    if (row[0] > target) return findRow(start, mid - 1);\n    else if (row[colLen - 1] < target) return findRow(mid + 1, end);\n    else return row;\n  };\n  const targetRow: number[] | undefined = findRow(0, rowLen - 1);\n  if (!targetRow) return false;\n  const findTarget = (start: number, end: number): boolean => {\n    if (start > end) return false;\n    const mid = ~~((start + end) / 2);\n    if (targetRow[mid] < target) return findTarget(mid + 1, end);\n    else if (targetRow[mid] > target) return findTarget(start, mid - 1);\n    else return true;\n  };\n  return findTarget(0, colLen - 1);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-30"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.2MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6839\u636e\u7279\u6027\u628a\u4e8c\u7ef4\u6570\u636e\u5f53\u4f5c\u4e00\u7ef4\u8fdb\u884c\u8fd0\u7b97\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function searchMatrix(matrix: number[][], target: number): boolean {\n  const colLen = matrix[0].length;\n  const rowLen = matrix.length;\n  const find = (start: number, end: number): boolean => {\n    if (start > end) return false;\n    const mid = ~~((start + end) / 2);\n    const row = ~~(mid / colLen);\n    const col = mid % colLen;\n    if (matrix[row][col] < target) return find(mid + 1, end);\n    else if (matrix[row][col] > target) return find(start, mid - 1);\n    else return true;\n  };\n  return find(0, colLen * rowLen - 1);\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(30758);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);