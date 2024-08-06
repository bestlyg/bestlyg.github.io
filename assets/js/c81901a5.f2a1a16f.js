"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[40311],{80063:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var t=r(86070),i=r(25710);const s={},l="542.01\u77e9\u9635",c={id:"leetcode/501-600/542.01\u77e9\u9635",title:"542.01\u77e9\u9635",description:"\u94fe\u63a5\uff1a542.01\u77e9\u9635",source:"@site/docs/leetcode/501-600/542.01\u77e9\u9635.md",sourceDirName:"leetcode/501-600",slug:"/leetcode/501-600/542.01\u77e9\u9635",permalink:"/docs/leetcode/501-600/542.01\u77e9\u9635",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"600.\u4e0d\u542b\u8fde\u7eed1\u7684\u975e\u8d1f\u6574\u6570",permalink:"/docs/leetcode/501-600/\u4e0d\u542b\u8fde\u7eed1\u7684\u975e\u8d1f\u6574\u6570"},next:{title:"605.\u79cd\u82b1\u95ee\u9898",permalink:"/docs/leetcode/601-700/\u79cd\u82b1\u95ee\u9898"}},o={},u=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"54201\u77e9\u9635",children:"542.01\u77e9\u9635"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/01-matrix",children:"542.01\u77e9\u9635"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u77e9\u9635",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u7531 0 \u548c 1 \u7ec4\u6210\u7684\u77e9\u9635\uff0c\u627e\u51fa\u6bcf\u4e2a\u5143\u7d20\u5230\u6700\u8fd1\u7684 0 \u7684\u8ddd\u79bb\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-15"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a236ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a53.1MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\uff0c\u4e00\u5c42\u4e00\u5c42\u5224\u65ad\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {number[][]} matrix\n * @return {number[][]}\n */\nvar updateMatrix = function (matrix) {\n  const res = [];\n  const queue = [];\n  for (let i = 0; i < matrix.length; i++) {\n    res.push(new Array(matrix[i].length));\n    for (let j = 0; j < matrix[i].length; j++) {\n      if (matrix[i][j] === 0) {\n        queue.push([i, j]);\n        res[i][j] = 0;\n      }\n    }\n  }\n  while (queue.length !== 0) {\n    const [i, j] = queue.shift();\n    if (i !== 0 && res[i - 1][j] === undefined) {\n      res[i - 1][j] = 1 + res[i][j];\n      queue.push([i - 1, j]);\n    }\n    if (j !== 0 && res[i][j - 1] === undefined) {\n      res[i][j - 1] = 1 + res[i][j];\n      queue.push([i, j - 1]);\n    }\n    if (i !== res.length - 1 && res[i + 1][j] === undefined) {\n      res[i + 1][j] = 1 + res[i][j];\n      queue.push([i + 1, j]);\n    }\n    if (j !== res[i].length - 1 && res[i][j + 1] === undefined) {\n      res[i][j + 1] = 1 + res[i][j];\n      queue.push([i, j + 1]);\n    }\n  }\n  return res;\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-25"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a324ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a52.8MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function updateMatrix(mat: number[][]): number[][] {\n  const n = mat.length;\n  const m = mat[0].length;\n  const queue: [number, number, number][] = [];\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < m; j++) {\n      if (mat[i][j] === 0) queue.push([i, j, 0]);\n    }\n  }\n  const format = (row: number, col: number) => `${row}::${col}`;\n  const set = new Set<string>(queue.map(([row, col]) => format(row, col)));\n  const add = (row: number, col: number, level: number) => {\n    const str = format(row, col);\n    if (set.has(str)) return;\n    set.add(str);\n    queue.push([row, col, level]);\n  };\n  while (queue.length) {\n    const [row, col, level] = queue.shift()!;\n    mat[row][col] = level;\n    if (row > 0) add(row - 1, col, level + 1);\n    if (row < n - 1) add(row + 1, col, level + 1);\n    if (col > 0) add(row, col - 1, level + 1);\n    if (col < m - 1) add(row, col + 1, level + 1);\n  }\n  return mat;\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},25710:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var t=r(30758);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);