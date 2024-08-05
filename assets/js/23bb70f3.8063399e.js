"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[25598],{4650:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var t=r(86070),s=r(25710);const o={},l="51.N\u7687\u540e",i={id:"leetcode/1-100/N\u7687\u540e",title:"51.N\u7687\u540e",description:"\u94fe\u63a5\uff1a51.N\u7687\u540e",source:"@site/docs/leetcode/1-100/51.N\u7687\u540e.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/N\u7687\u540e",permalink:"/web/site/docs/leetcode/1-100/N\u7687\u540e",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:51,frontMatter:{},sidebar:"journal",previous:{title:"50.Pow(x,n)",permalink:"/web/site/docs/leetcode/1-100/Pow(x,n)"},next:{title:"52.N\u7687\u540eII",permalink:"/web/site/docs/leetcode/1-100/N\u7687\u540eII"}},c={},a=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"51n\u7687\u540e",children:"51.N\u7687\u540e"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/n-queens",children:"51.N\u7687\u540e"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u56de\u6eaf",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","n \u7687\u540e\u95ee\u9898\u7814\u7a76\u7684\u662f\u5982\u4f55\u5c06 n \u4e2a\u7687\u540e\u653e\u7f6e\u5728 n\xd7n \u7684\u68cb\u76d8\u4e0a\uff0c\u5e76\u4e14\u4f7f\u7687\u540e\u5f7c\u6b64\u4e4b\u95f4\u4e0d\u80fd\u76f8\u4e92\u653b\u51fb\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-27"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a36.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u56de\u6eaf\u7b97\u6cd5\uff0c\u904d\u5386\u540e\u526a\u679d\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {number} n\n * @return {string[][]}\n */\nvar solveNQueens = function (n) {\n  const cols = new Array(n);\n  const res = [];\n  queues(0);\n  function queues(row) {\n    if (row === n) {\n      res.push(getRes());\n    }\n    for (let col = 0; col < n; col++) {\n      if (isValid(row, col)) {\n        cols[row] = col;\n        queues(row + 1);\n      }\n    }\n  }\n  function isValid(row, col) {\n    for (let i = 0; i < row; i++) {\n      if (cols[i] === col) return false;\n      if (row - i === Math.abs(cols[i] - col)) return false;\n    }\n    return true;\n  }\n  function getRes() {\n    const res = [];\n    for (let row = 0; row < n; row++) {\n      let string = '';\n      for (let col = 0; col < n; col++) {\n        if (cols[row] === col) string += 'Q';\n        else string += '.';\n      }\n      res.push(string);\n    }\n    return res;\n  }\n  return res;\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-25"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a108ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.7MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs+\u526a\u679d\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function solveNQueens(n: number): string[][] {\n  const ans: string[][] = [];\n  const colSet = new Set<number>();\n  const lineSet = new Set<string>();\n  const board = new Array(n).fill(0).map(_ => new Array(n).fill('.'));\n  dfs();\n  return ans;\n  function getLine(row: number, col: number): [string, string] {\n    return [`y=x+${n - 1 - row - col}${specStr}, ${specStr}y=-x+${n - 1 - row + col}`];\n  }\n  function dfs(row: number = 0) {\n    if (row === n) {\n      const newBoard: string[] = new Array(n).fill(0).map((_, row) =>\n        new Array(n)\n          .fill(0)\n          .map((_, col) => board[row][col])\n          .join('')\n      );\n      ans.push(newBoard);\n      return;\n    }\n    for (let col = 0; col < n; col++) {\n      if (colSet.has(col)) continue;\n      const [line1, line2] = getLine(row, col);\n      if (lineSet.has(line1) || lineSet.has(line2)) continue;\n      colSet.add(col);\n      lineSet.add(line1);\n      lineSet.add(line2);\n      board[row][col] = 'Q';\n      dfs(row + 1);\n      board[row][col] = '.';\n      colSet.delete(col);\n      lineSet.delete(line1);\n      lineSet.delete(line2);\n    }\n  }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>i});var t=r(30758);const s={},o=t.createContext(s);function l(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);