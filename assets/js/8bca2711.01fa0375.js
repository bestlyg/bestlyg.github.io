"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[94850],{32415:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/501-600/\u626b\u96f7\u6e38\u620f","title":"529.\u626b\u96f7\u6e38\u620f","description":"\u94fe\u63a5\uff1a529.\u626b\u96f7\u6e38\u620f","source":"@site/docs/leetcode/501-600/529.\u626b\u96f7\u6e38\u620f.md","sourceDirName":"leetcode/501-600","slug":"/leetcode/501-600/\u626b\u96f7\u6e38\u620f","permalink":"/docs/leetcode/501-600/\u626b\u96f7\u6e38\u620f","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":529,"frontMatter":{},"sidebar":"journal","previous":{"title":"528.\u6309\u6743\u91cd\u968f\u673a\u9009\u62e9","permalink":"/docs/leetcode/501-600/\u6309\u6743\u91cd\u968f\u673a\u9009\u62e9"},"next":{"title":"530.\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u5c0f\u7edd\u5bf9\u5dee","permalink":"/docs/leetcode/501-600/\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u5c0f\u7edd\u5bf9\u5dee"}}');var c=o(86070),t=o(31503);const l={},i="529.\u626b\u96f7\u6e38\u620f",s={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"529\u626b\u96f7\u6e38\u620f",children:"529.\u626b\u96f7\u6e38\u620f"})}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,c.jsx)(e.a,{href:"https://leetcode.cn/problems/minesweeper",children:"529.\u626b\u96f7\u6e38\u620f"}),(0,c.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,c.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u77e9\u9635",(0,c.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8ba9\u6211\u4eec\u4e00\u8d77\u6765\u73a9\u626b\u96f7\u6e38\u620f\uff01"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-08-20"}),"\n",(0,c.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a200ms"}),"\n",(0,c.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46MB"}),"\n",(0,c.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,c.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6df1\u5ea6\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-typescript",children:"function updateBoard(board: string[][], click: number[]): string[][] {\n  const rowLen = board.length;\n  const colLen = board[0].length;\n  console.log(rowLen, colLen);\n  const set = new Set<string>();\n  const format = (row: number, col: number) => `${row}:${col}`;\n  dfs(click[0], click[1]);\n  return board;\n  function countMine(row: number, col: number): number {\n    let num = 0;\n    // top\n    if (row !== 0 && col !== 0 && isMine(row - 1, col - 1)) num++;\n    if (row !== 0 && isMine(row - 1, col)) num++;\n    if (row !== 0 && col !== colLen - 1 && isMine(row - 1, col + 1)) num++;\n    // mid\n    if (col !== 0 && isMine(row, col - 1)) num++;\n    if (col !== colLen - 1 && isMine(row, col + 1)) num++;\n    // bottom\n    if (row !== rowLen - 1 && col !== 0 && isMine(row + 1, col - 1)) num++;\n    if (row !== rowLen - 1 && isMine(row + 1, col)) num++;\n    if (row !== rowLen - 1 && col !== colLen - 1 && isMine(row + 1, col + 1)) num++;\n    return num;\n  }\n  function isMine(row: number, col: number): boolean {\n    return board[row][col] === 'M';\n  }\n  function dfs(row: number, col: number): void {\n    const formatName = format(row, col);\n    if (set.has(formatName)) return;\n    else set.add(formatName);\n    if (isMine(row, col)) {\n      board[row][col] = 'X';\n    } else if (countMine(row, col) > 0) {\n      board[row][col] = countMine(row, col) + '';\n    } else {\n      console.log(row, col);\n      board[row][col] = 'B';\n      // top\n      if (row !== 0 && col !== 0) dfs(row - 1, col - 1);\n      if (row !== 0) dfs(row - 1, col);\n      if (row !== 0 && col !== colLen - 1) dfs(row - 1, col + 1);\n      // mid\n      if (col !== 0) dfs(row, col - 1);\n      if (col !== colLen - 1) dfs(row, col + 1);\n      // bottom\n      if (row !== rowLen - 1 && col !== 0) dfs(row + 1, col - 1);\n      if (row !== rowLen - 1) dfs(row + 1, col);\n      if (row !== rowLen - 1 && col !== colLen - 1) dfs(row + 1, col + 1);\n    }\n  }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(u,{...n})}):u(n)}},31503:(n,e,o)=>{o.d(e,{R:()=>l,x:()=>i});var r=o(30758);const c={},t=r.createContext(c);function l(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);