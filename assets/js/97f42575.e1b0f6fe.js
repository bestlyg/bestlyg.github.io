"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[16002],{6249:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"leetcode/801-900/\u4fdd\u6301\u57ce\u5e02\u5929\u9645\u7ebf","title":"807.\u4fdd\u6301\u57ce\u5e02\u5929\u9645\u7ebf","description":"\u94fe\u63a5\uff1a807.\u4fdd\u6301\u57ce\u5e02\u5929\u9645\u7ebf","source":"@site/docs/leetcode/801-900/807.\u4fdd\u6301\u57ce\u5e02\u5929\u9645\u7ebf.md","sourceDirName":"leetcode/801-900","slug":"/leetcode/801-900/\u4fdd\u6301\u57ce\u5e02\u5929\u9645\u7ebf","permalink":"/docs/leetcode/801-900/\u4fdd\u6301\u57ce\u5e02\u5929\u9645\u7ebf","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":807,"frontMatter":{},"sidebar":"journal","previous":{"title":"806.\u5199\u5b57\u7b26\u4e32\u9700\u8981\u7684\u884c\u6570","permalink":"/docs/leetcode/801-900/\u5199\u5b57\u7b26\u4e32\u9700\u8981\u7684\u884c\u6570"},"next":{"title":"808.\u5206\u6c64","permalink":"/docs/leetcode/801-900/\u5206\u6c64"}}');var o=r(25105),l=r(8556);const i={},s="807.\u4fdd\u6301\u57ce\u5e02\u5929\u9645\u7ebf",c={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"807\u4fdd\u6301\u57ce\u5e02\u5929\u9645\u7ebf",children:"807.\u4fdd\u6301\u57ce\u5e02\u5929\u9645\u7ebf"})}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(e.a,{href:"https://leetcode.cn/problems/max-increase-to-keep-city-skyline",children:"807.\u4fdd\u6301\u57ce\u5e02\u5929\u9645\u7ebf"}),(0,o.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,o.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u77e9\u9635",(0,o.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5728\u4e8c\u7ef4\u6570\u7ec4 grid \u4e2d\uff0cgrid[i][j]\u4ee3\u8868\u4f4d\u4e8e\u67d0\u5904\u7684\u5efa\u7b51\u7269\u7684\u9ad8\u5ea6\u3002 \u6211\u4eec\u88ab\u5141\u8bb8\u589e\u52a0\u4efb\u4f55\u6570\u91cf\uff08\u4e0d\u540c\u5efa\u7b51\u7269\u7684\u6570\u91cf\u53ef\u80fd\u4e0d\u540c\uff09\u7684\u5efa\u7b51\u7269\u7684\u9ad8\u5ea6\u3002 \u9ad8\u5ea6 0 \u4e5f\u88ab\u8ba4\u4e3a\u662f\u5efa\u7b51\u7269\u3002\u5efa\u7b51\u7269\u9ad8\u5ea6\u53ef\u4ee5\u589e\u52a0\u7684\u6700\u5927\u603b\u548c\u662f\u591a\u5c11\uff1f\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-13"}),"\n",(0,o.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,o.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.1MB"}),"\n",(0,o.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,o.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u540e\u5b58\u50a8\u6700\u5927\u503c\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-typescript",children:"function maxIncreaseKeepingSkyline(grid: number[][]): number {\n  const n = grid.length;\n  const m = grid[0].length;\n  const vmax = new Array(m).fill(0);\n  const hmax = new Array(n).fill(0);\n  let ans = 0;\n  for (let row = 0; row < n; row++) {\n    let max = 0;\n    for (let col = 0; col < m; col++) {\n      max = Math.max(max, grid[row][col]);\n    }\n    hmax[row] = max;\n  }\n  for (let col = 0; col < m; col++) {\n    let max = 0;\n    for (let row = 0; row < n; row++) {\n      max = Math.max(max, grid[row][col]);\n    }\n    vmax[col] = max;\n  }\n  for (let row = 0; row < n; row++) {\n    for (let col = 0; col < m; col++) {\n      ans += Math.min(vmax[col] - grid[row][col], hmax[row] - grid[row][col]);\n    }\n  }\n  return ans;\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-07-14"}),"\n",(0,o.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a54ms"}),"\n",(0,o.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.57MB"}),"\n",(0,o.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,o.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def maxIncreaseKeepingSkyline(self, grid: List[List[int]]) -> int:\n        n = len(grid)\n        rows = [0] * n\n        cols = [0] * n\n        for i in range(n):\n            for j in range(n):\n                rows[i] = max(rows[i], grid[i][j])\n                cols[j] = max(cols[j], grid[i][j])\n        return sum(min(rows[i], cols[j]) - grid[i][j] for i in range(n) for j in range(n))\n"})})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},8556:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>s});var t=r(58101);const o={},l=t.createContext(o);function i(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);