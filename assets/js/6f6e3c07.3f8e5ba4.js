"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[20257],{69973:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var t=r(86070),i=r(25710);const s={},c="52.N\u7687\u540eII",o={id:"leetcode/1-100/N\u7687\u540eII",title:"52.N\u7687\u540eII",description:"\u94fe\u63a5\uff1a52.N\u7687\u540eII",source:"@site/docs/leetcode/1-100/52.N\u7687\u540eII.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/N\u7687\u540eII",permalink:"/docs/leetcode/1-100/N\u7687\u540eII",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:52,frontMatter:{},sidebar:"journal",previous:{title:"51.N\u7687\u540e",permalink:"/docs/leetcode/1-100/N\u7687\u540e"},next:{title:"53.\u6700\u5927\u5b50\u6570\u7ec4\u548c",permalink:"/docs/leetcode/1-100/\u6700\u5927\u5b50\u6570\u7ec4\u548c"}},l={},a=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"52n\u7687\u540eii",children:"52.N\u7687\u540eII"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/n-queens-ii",children:"52.N\u7687\u540eII"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u56de\u6eaf",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","n \u7687\u540e\u95ee\u9898\u7814\u7a76\u7684\u662f\u5982\u4f55\u5c06 n \u4e2a\u7687\u540e\u653e\u7f6e\u5728 n\xd7n \u7684\u68cb\u76d8\u4e0a\uff0c\u5e76\u4e14\u4f7f\u7687\u540e\u5f7c\u6b64\u4e4b\u95f4\u4e0d\u80fd\u76f8\u4e92\u653b\u51fb\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-27"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a64ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a34.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u56de\u6eaf\u7b97\u6cd5\uff0c\u904d\u5386\u540e\u526a\u679d\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {number} n\n * @return {string[][]}\n */\nvar totalNQueens = function (n) {\n  const cols = new Array(n);\n  let res = 0;\n  queues(0);\n  function queues(row) {\n    if (row === n) {\n      res++;\n    }\n    for (let col = 0; col < n; col++) {\n      if (isValid(row, col)) {\n        cols[row] = col;\n        queues(row + 1);\n      }\n    }\n  }\n  function isValid(row, col) {\n    for (let i = 0; i < row; i++) {\n      if (cols[i] === col) return false;\n      if (row - i === Math.abs(cols[i] - col)) return false;\n    }\n    return true;\n  }\n  return res;\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-10-17"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u56de\u6eaf\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function totalNQueens(n: number): number {\n  const cols = new Array(n);\n  let ans = 0;\n  find(0);\n  return ans;\n  function find(row: number) {\n    if (row === n) {\n      ans++;\n      return;\n    }\n    for (let i = 0; i < n; i++) {\n      if (check(row, i)) {\n        cols[row] = i;\n        find(row + 1);\n      }\n    }\n  }\n  function check(row: number, col: number): boolean {\n    for (let i = 0; i < row; i++) {\n      if (cols[i] === col) return false;\n      if (row - i === Math.abs(cols[i] - col)) return false;\n    }\n    return true;\n  }\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>o});var t=r(30758);const i={},s=t.createContext(i);function c(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);