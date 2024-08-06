"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[67318],{56592:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=r(86070),o=r(25710);const i={},s="419.\u68cb\u76d8\u4e0a\u7684\u6218\u8230",l={id:"leetcode/401-500/\u68cb\u76d8\u4e0a\u7684\u6218\u8230",title:"419.\u68cb\u76d8\u4e0a\u7684\u6218\u8230",description:"\u94fe\u63a5\uff1a419.\u68cb\u76d8\u4e0a\u7684\u6218\u8230",source:"@site/docs/leetcode/401-500/419.\u68cb\u76d8\u4e0a\u7684\u6218\u8230.md",sourceDirName:"leetcode/401-500",slug:"/leetcode/401-500/\u68cb\u76d8\u4e0a\u7684\u6218\u8230",permalink:"/docs/leetcode/401-500/\u68cb\u76d8\u4e0a\u7684\u6218\u8230",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:419,frontMatter:{},sidebar:"journal",previous:{title:"417.\u592a\u5e73\u6d0b\u5927\u897f\u6d0b\u6c34\u6d41\u95ee\u9898",permalink:"/docs/leetcode/401-500/\u592a\u5e73\u6d0b\u5927\u897f\u6d0b\u6c34\u6d41\u95ee\u9898"},next:{title:"421.\u6570\u7ec4\u4e2d\u4e24\u4e2a\u6570\u7684\u6700\u5927\u5f02\u6216\u503c",permalink:"/docs/leetcode/401-500/\u6570\u7ec4\u4e2d\u4e24\u4e2a\u6570\u7684\u6700\u5927\u5f02\u6216\u503c"}},c={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2},{value:"\u9898\u89e3 4 - python",id:"\u9898\u89e3-4---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"419\u68cb\u76d8\u4e0a\u7684\u6218\u8230",children:"419.\u68cb\u76d8\u4e0a\u7684\u6218\u8230"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/battleships-in-a-board",children:"419.\u68cb\u76d8\u4e0a\u7684\u6218\u8230"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u77e9\u9635",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5927\u5c0f\u4e3a m x n \u7684\u77e9\u9635 board \u8868\u793a\u7532\u677f\uff0c\u5176\u4e2d\uff0c\u6bcf\u4e2a\u5355\u5143\u683c\u53ef\u4ee5\u662f\u4e00\u8258\u6218\u8230 'X' \u6216\u8005\u662f\u4e00\u4e2a\u7a7a\u4f4d '.' \uff0c\u8fd4\u56de\u5728\u7532\u677f board \u4e0a\u653e\u7f6e\u7684 \u6218\u8230 \u7684\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-18"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5e76\u67e5\u96c6\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"class UnionFind {\n  elements: number[];\n  constructor(public size: number) {\n    this.elements = new Array(size).fill(0).map((_, i) => i);\n  }\n  same(v1: number, v2: number): boolean {\n    return this.find(v1) === this.find(v2);\n  }\n  find(v: number): number {\n    return v === this.elements[v] ? v : (this.elements[v] = this.find(this.elements[v]));\n  }\n  union(v1: number, v2: number): void {\n    const e1 = this.find(v1);\n    const e2 = this.find(v2);\n    if (e1 !== e2) {\n      this.elements[e1] = e2;\n      this.size--;\n    }\n  }\n}\nconst dirs = [\n  [1, 0],\n  [0, 1],\n  [-1, 0],\n  [0, -1],\n];\nfunction countBattleships(board: string[][]): number {\n  const n = board.length;\n  const m = board[0].length;\n  const uf = new UnionFind(n * m);\n  const getIdx = (row: number, col: number) => row * m + col;\n  let cnt = 0;\n  for (let row = 0; row < n; row++) {\n    for (let col = 0; col < m; col++) {\n      if (board[row][col] !== 'X') {\n        cnt++;\n      } else {\n        for (let i = 0; i < 4; i++) {\n          const next_row = row + dirs[i][0];\n          const next_col = col + dirs[i][1];\n          if (\n            next_row < 0 ||\n            next_row >= n ||\n            next_col < 0 ||\n            next_col >= m ||\n            board[next_row][next_col] === '.'\n          )\n            continue;\n          uf.union(getIdx(row, col), getIdx(next_row, next_col));\n        }\n      }\n    }\n  }\n  return uf.size - cnt;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-18"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.7MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function setDot(board: string[][], n: number, m: number, row: number, col: number): void {\n  if (row < 0 || row >= n || col < 0 || col >= m || board[row][col] === '.') return;\n  board[row][col] = '.';\n  setDot(board, n, m, row + 1, col);\n  setDot(board, n, m, row - 1, col);\n  setDot(board, n, m, row, col + 1);\n  setDot(board, n, m, row, col - 1);\n}\nfunction countBattleships(board: string[][]): number {\n  const n = board.length;\n  const m = board[0].length;\n  let ans = 0;\n  for (let row = 0; row < n; row++) {\n    for (let col = 0; col < m; col++) {\n      if (board[row][col] === '.') continue;\n      ans++;\n      setDot(board, n, m, row, col);\n    }\n  }\n  return ans;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-18"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.7MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6bcf\u6b21\u904d\u5386\u53ea\u7edf\u8ba1\u6bcf\u4e2a\u6218\u8230\u5de6\u4e0a\u89d2\u7684 X\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function countBattleships(board: string[][]): number {\n  const n = board.length;\n  const m = board[0].length;\n  let ans = 0;\n  for (let row = 0; row < n; row++) {\n    for (let col = 0; col < m; col++) {\n      if (\n        board[row][col] === '.' ||\n        (row > 0 && board[row - 1][col] === 'X') ||\n        (col > 0 && board[row][col - 1] === 'X')\n      )\n        continue;\n      ans++;\n    }\n  }\n  return ans;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-4---python",children:"\u9898\u89e3 4 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-06-11"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a37ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a18.76MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]\n\nclass Solution:\n    def countBattleships(self, board: List[List[str]]) -> int:\n        n = len(board)\n        m = len(board[0])\n        res = 0\n        def check(i: int, j: int) -> int:\n            board[i][j] = '.'\n            for dir in dirs:\n                ni = i + dir[0]\n                nj = j + dir[1]\n                if 0 <= ni < n and 0 <= nj < m and board[ni][nj] == 'X':\n                    check(ni, nj)\n        for i in range(n):\n            for j in range(m):\n                if board[i][j] == 'X':\n                    res += 1\n                    check(i, j)\n        return res\n"})})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>l});var t=r(30758);const o={},i=t.createContext(o);function s(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);