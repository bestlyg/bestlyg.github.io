"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[1562],{82691:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/101-200/\u5c9b\u5c7f\u6570\u91cf","title":"200.\u5c9b\u5c7f\u6570\u91cf","description":"\u94fe\u63a5\uff1a200.\u5c9b\u5c7f\u6570\u91cf","source":"@site/docs/leetcode/101-200/200.\u5c9b\u5c7f\u6570\u91cf.md","sourceDirName":"leetcode/101-200","slug":"/leetcode/101-200/\u5c9b\u5c7f\u6570\u91cf","permalink":"/docs/leetcode/101-200/\u5c9b\u5c7f\u6570\u91cf","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":200,"frontMatter":{},"sidebar":"journal","previous":{"title":"199.\u4e8c\u53c9\u6811\u7684\u53f3\u89c6\u56fe","permalink":"/docs/leetcode/101-200/\u4e8c\u53c9\u6811\u7684\u53f3\u89c6\u56fe"},"next":{"title":"201.\u6570\u5b57\u8303\u56f4\u6309\u4f4d\u4e0e","permalink":"/docs/leetcode/201-300/\u6570\u5b57\u8303\u56f4\u6309\u4f4d\u4e0e"}}');var r=i(86070),t=i(31503);const o={},l="200.\u5c9b\u5c7f\u6570\u91cf",c={},d=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"200\u5c9b\u5c7f\u6570\u91cf",children:"200.\u5c9b\u5c7f\u6570\u91cf"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/number-of-islands",children:"200.\u5c9b\u5c7f\u6570\u91cf"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e76\u67e5\u96c6\u3001\u6570\u7ec4\u3001\u77e9\u9635",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u7531 '1'\uff08\u9646\u5730\uff09\u548c '0'\uff08\u6c34\uff09\u7ec4\u6210\u7684\u7684\u4e8c\u7ef4\u7f51\u683c\uff0c\u8bf7\u4f60\u8ba1\u7b97\u7f51\u683c\u4e2d\u5c9b\u5c7f\u7684\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-20"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a296ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.2MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53d1\u73b0\u5c0f\u5c9b\u540e\u904d\u5386\u5468\u56f4\u662f\u5426\u6709\u7fa4\u5c9b\uff0c\u6709\u7fa4\u5c9b\u4e00\u5e76\u52a0\u5165\uff0c\u518d\u628a\u5c0f\u5c9b\u653e\u5165\u6570\u7ec4\u4e2d\uff0c\u6700\u540e\u6570\u7ec4\u7684\u6570\u91cf\u5373\u5c0f\u5c9b\u4e2a\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"const toSringIsland = (i, j) => `${i}-${j}`;\nclass Island {\n  set = new Set();\n  setIsland(i, j) {\n    this.set.add(toSringIsland(i, j));\n  }\n  hasIsland(i, j) {\n    return this.set.has(toSringIsland(i, j));\n  }\n}\n/**\n * @param {character[][]} grid\n * @return {number}\n */\nvar numIslands = function (grid) {\n  const col = grid.length;\n  const islands = [];\n  function dfs(i, j) {\n    //   console.log(\"==============\");\n    //   console.log(i, j);\n    //   console.log(grid[i][j]);\n    if (grid[i][j] === '0') return;\n    for (const item of islands) {\n      if (item.hasIsland(i, j)) return;\n    }\n    const island = new Island();\n    islands.push(island);\n    const queue = [[i, j]];\n    while (queue.length !== 0) {\n      // console.log(queue);\n      const [i, j] = queue.pop();\n      // console.log(\"while i j\", i, j);\n      // console.log(queue);\n      if (grid[i][j] === '0') continue;\n      if (island.hasIsland(i, j)) continue;\n      else island.setIsland(i, j);\n      if (i < col - 1) queue.push([i + 1, j]);\n      if (j < grid[i].length - 1) queue.push([i, j + 1]);\n      if (i > 0) queue.push([i - 1, j]);\n      if (j > 0) queue.push([i, j - 1]);\n    }\n    // console.log(islands);\n  }\n  for (let i = 0; i < col; i++) {\n    const row = grid[i].length;\n    for (let j = 0; j < row; j++) {\n      dfs(i, j);\n    }\n  }\n  return islands.length;\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-30"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a124ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5e76\u67e5\u96c6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"class UnionFind {\n  elements: number[];\n  constructor(public size: number) {\n    this.elements = new Array(size).fill(0).map((_, i) => i);\n  }\n  same(v1: number, v2: number): boolean {\n    return this.find(v1) === this.find(v2);\n  }\n  find(v: number): number {\n    return v === this.elements[v] ? v : (this.elements[v] = this.find(this.elements[v]));\n  }\n  union(v1: number, v2: number): void {\n    const e1 = this.find(v1);\n    const e2 = this.find(v2);\n    if (e1 !== e2) {\n      this.elements[e1] = e2;\n      this.size--;\n    }\n  }\n}\nfunction numIslands(grid: string[][]): number {\n  let count = 0;\n  const newGrid: number[][] = grid.map(row => row.map(col => (col === '0' ? -1 : count++)));\n  const rowLen = grid.length;\n  const colLen = grid[0].length;\n  const uf = new UnionFind(count);\n  for (let row = 0; row < rowLen; row++) {\n    for (let col = 0; col < colLen; col++) {\n      const num = newGrid[row][col];\n      if (num === -1) continue;\n      if (row > 0 && newGrid[row - 1][col] !== -1) uf.union(num, newGrid[row - 1][col]);\n      if (col > 0 && newGrid[row][col - 1] !== -1) uf.union(num, newGrid[row][col - 1]);\n      if (row < rowLen - 1 && newGrid[row + 1][col] !== -1) uf.union(num, newGrid[row + 1][col]);\n      if (col < colLen - 1 && newGrid[row][col + 1] !== -1) uf.union(num, newGrid[row][col + 1]);\n    }\n  }\n  return uf.size;\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>l});var s=i(30758);const r={},t=s.createContext(r);function o(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);