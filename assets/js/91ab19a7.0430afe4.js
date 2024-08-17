"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[97842],{56301:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=r(86070),t=r(25710);const s={},l="289.\u751f\u547d\u6e38\u620f",o={id:"leetcode/201-300/\u751f\u547d\u6e38\u620f",title:"289.\u751f\u547d\u6e38\u620f",description:"\u94fe\u63a5\uff1a289.\u751f\u547d\u6e38\u620f",source:"@site/docs/leetcode/201-300/289.\u751f\u547d\u6e38\u620f.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u751f\u547d\u6e38\u620f",permalink:"/docs/leetcode/201-300/\u751f\u547d\u6e38\u620f",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:289,frontMatter:{},sidebar:"journal",previous:{title:"287.\u5bfb\u627e\u91cd\u590d\u6570",permalink:"/docs/leetcode/201-300/\u5bfb\u627e\u91cd\u590d\u6570"},next:{title:"290.\u5355\u8bcd\u89c4\u5f8b",permalink:"/docs/leetcode/201-300/\u5355\u8bcd\u89c4\u5f8b"}},c={},a=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"289\u751f\u547d\u6e38\u620f",children:"289.\u751f\u547d\u6e38\u620f"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/game-of-life",children:"289.\u751f\u547d\u6e38\u620f"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u77e9\u9635\u3001\u6a21\u62df",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6839\u636e \u767e\u5ea6\u767e\u79d1 \uff0c\u751f\u547d\u6e38\u620f\uff0c\u7b80\u79f0\u4e3a\u751f\u547d\uff0c\u662f\u82f1\u56fd\u6570\u5b66\u5bb6\u7ea6\u7ff0\xb7\u4f55\u987f\xb7\u5eb7\u5a01\u5728 1970 \u5e74\u53d1\u660e\u7684\u7ec6\u80de\u81ea\u52a8\u673a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-09"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a60ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a34MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5224\u65ad\u5468\u56f4 8 \u4e2a\u4f4d\u7f6e\u7684\u6d3b\u7ec6\u80de\u4e2a\u6570\u8fdb\u884c\u65b0\u6570\u7ec4\u8d4b\u503c"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {number[][]} board\n * @return {void} Do not return anything, modify board in-place instead.\n */\nvar gameOfLife = function (board) {\n  function lifeOrDead(arr, now) {\n    let result = 0;\n    for (let item of arr) if (item === 1) result++;\n    if (result === 2) return now;\n    else if (result === 3) return 1;\n    else return 0;\n  }\n  const res = [];\n  for (let i = 0, len1 = board.length; i < len1; i++) res[i] = [];\n  for (let i = 0, len1 = board.length; i < len1; i++) {\n    for (let j = 0, len2 = board[i].length; j < len2; j++) {\n      const arr = [];\n      if (i > 0 && j > 0) arr.push(board[i - 1][j - 1]);\n      if (i > 0) arr.push(board[i - 1][j]);\n      if (j > 0) arr.push(board[i][j - 1]);\n      if (i < len1 - 1 && j < len2 - 1) arr.push(board[i + 1][j + 1]);\n      if (i < len1 - 1) arr.push(board[i + 1][j]);\n      if (j < len2 - 1) arr.push(board[i][j + 1]);\n      if (i < len1 - 1 && j > 0) arr.push(board[i + 1][j - 1]);\n      if (j < len2 - 1 && i > 0) arr.push(board[i - 1][j + 1]);\n      res[i][j] = lifeOrDead(arr, board[i][j]);\n    }\n  }\n  for (let i = 0, len1 = board.length; i < len1; i++) board[i] = res[i];\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-12"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.4MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u751f\u6210\u5468\u56f4\u6709\u51e0\u4e2a\u6d3b\u7ec6\u80de\u7684\u6570\u7ec4\u8fdb\u884c\u8d4b\u503c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function getCntArr(board: number[][]) {\n  const n = board.length;\n  const m = board[0].length;\n  const ans = new Array(n).fill(0).map(_ => new Array(m).fill(0));\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < m; j++) {\n      if (board[i][j] === 0) continue;\n      if (i > 0) ans[i - 1][j]++;\n      if (i < n - 1) ans[i + 1][j]++;\n      if (j > 0) ans[i][j - 1]++;\n      if (j < m - 1) ans[i][j + 1]++;\n      if (i > 0 && j > 0) ans[i - 1][j - 1]++;\n      if (i > 0 && j < m - 1) ans[i - 1][j + 1]++;\n      if (i < n - 1 && j > 0) ans[i + 1][j - 1]++;\n      if (i < n - 1 && j < m - 1) ans[i + 1][j + 1]++;\n    }\n  }\n  return ans;\n}\nfunction gameOfLife(board: number[][]): void {\n  const n = board.length;\n  const m = board[0].length;\n  const cntArr = getCntArr(board);\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < m; j++) {\n      const cnt = cntArr[i][j];\n      const state = board[i][j];\n      if (state === 1 && (cnt < 2 || cnt > 3)) board[i][j] = 0;\n      else if (state === 0 && cnt === 3) board[i][j] = 1;\n    }\n  }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-12"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.6MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f18\u5316\u4e0a\u4e00\u9898\u89e3\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"const dirs = [\n  [0, 1],\n  [0, -1],\n  [1, 0],\n  [-1, 0],\n  [1, 1],\n  [-1, -1],\n  [1, -1],\n  [-1, 1],\n];\nfunction getCntArr(board: number[][]) {\n  const n = board.length;\n  const m = board[0].length;\n  const ans = new Array(n).fill(0).map(_ => new Array(m).fill(0));\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < m; j++) {\n      for (let k = 0; k < 8; k++) {\n        const x = i + dirs[k][0];\n        const y = j + dirs[k][1];\n        if (x < 0 || x >= n || y < 0 || y >= m) continue;\n        ans[x][y] += board[i][j];\n      }\n    }\n  }\n  return ans;\n}\nfunction gameOfLife(board: number[][]): void {\n  const n = board.length;\n  const m = board[0].length;\n  const cntArr = getCntArr(board);\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < m; j++) {\n      const cnt = cntArr[i][j];\n      const state = board[i][j];\n      if (state === 1 && (cnt < 2 || cnt > 3)) board[i][j] = 0;\n      else if (state === 0 && cnt === 3) board[i][j] = 1;\n    }\n  }\n}\n"})})]})}function j(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>o});var i=r(30758);const t={},s=i.createContext(t);function l(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);