"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[82805],{67741:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/701-800/\u5224\u65ad\u4e8c\u5206\u56fe","title":"785.\u5224\u65ad\u4e8c\u5206\u56fe","description":"\u94fe\u63a5\uff1a785.\u5224\u65ad\u4e8c\u5206\u56fe","source":"@site/docs/leetcode/701-800/785.\u5224\u65ad\u4e8c\u5206\u56fe.md","sourceDirName":"leetcode/701-800","slug":"/leetcode/701-800/\u5224\u65ad\u4e8c\u5206\u56fe","permalink":"/docs/leetcode/701-800/\u5224\u65ad\u4e8c\u5206\u56fe","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":785,"frontMatter":{},"sidebar":"journal","previous":{"title":"784.\u5b57\u6bcd\u5927\u5c0f\u5199\u5168\u6392\u5217","permalink":"/docs/leetcode/701-800/\u5b57\u6bcd\u5927\u5c0f\u5199\u5168\u6392\u5217"},"next":{"title":"786.\u7b2cK\u4e2a\u6700\u5c0f\u7684\u8d28\u6570\u5206\u6570","permalink":"/docs/leetcode/701-800/\u7b2cK\u4e2a\u6700\u5c0f\u7684\u8d28\u6570\u5206\u6570"}}');var t=o(86070),l=o(31503);const s={},i="785.\u5224\u65ad\u4e8c\u5206\u56fe",c={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"785\u5224\u65ad\u4e8c\u5206\u56fe",children:"785.\u5224\u65ad\u4e8c\u5206\u56fe"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/is-graph-bipartite",children:"785.\u5224\u65ad\u4e8c\u5206\u56fe"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e76\u67e5\u96c6\u3001\u56fe",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u65e0\u5411\u56fe graph\uff0c\u5f53\u8fd9\u4e2a\u56fe\u4e3a\u4e8c\u5206\u56fe\u65f6\u8fd4\u56de true\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-07-16"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a38MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u540e\u91c7\u53d6\u7ea2\u7eff\u5237\u8272\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function isBipartite(graph: number[][]): boolean {\n  enum Color {\n    red,\n    green,\n    none,\n  }\n  const len = graph.length;\n  let valid = true;\n  const colors = new Array<Color>(len).fill(Color.none);\n  for (let i = 0; i < len && valid; i++) {\n    colors[i] === Color.none && dfs(i, Color.red);\n  }\n  return valid;\n  function dfs(node: number, color: Color): void {\n    colors[node] = color;\n    const newColor = color === Color.red ? Color.green : Color.red;\n    for (const neighbor of graph[node]) {\n      if (colors[neighbor] === Color.none) {\n        dfs(neighbor, newColor);\n        if (!valid) return;\n      } else if (colors[neighbor] !== newColor) {\n        valid = false;\n        return;\n      }\n    }\n  }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},31503:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>i});var r=o(30758);const t={},l=r.createContext(t);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);