"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[62934],{89472:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=t(86070),o=t(31503);const c={},s="1036.\u9003\u79bb\u5927\u8ff7\u5bab",l={id:"leetcode/1001-1100/\u9003\u79bb\u5927\u8ff7\u5bab",title:"1036.\u9003\u79bb\u5927\u8ff7\u5bab",description:"\u94fe\u63a5\uff1a1036.\u9003\u79bb\u5927\u8ff7\u5bab",source:"@site/docs/leetcode/1001-1100/1036.\u9003\u79bb\u5927\u8ff7\u5bab.md",sourceDirName:"leetcode/1001-1100",slug:"/leetcode/1001-1100/\u9003\u79bb\u5927\u8ff7\u5bab",permalink:"/docs/leetcode/1001-1100/\u9003\u79bb\u5927\u8ff7\u5bab",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1036,frontMatter:{},sidebar:"journal",previous:{title:"1035.\u4e0d\u76f8\u4ea4\u7684\u7ebf",permalink:"/docs/leetcode/1001-1100/\u4e0d\u76f8\u4ea4\u7684\u7ebf"},next:{title:"1038.\u4ece\u4e8c\u53c9\u641c\u7d22\u6811\u5230\u66f4\u5927\u548c\u6811",permalink:"/docs/leetcode/1001-1100/\u4ece\u4e8c\u53c9\u641c\u7d22\u6811\u5230\u66f4\u5927\u548c\u6811"}},i={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1036\u9003\u79bb\u5927\u8ff7\u5bab",children:"1036.\u9003\u79bb\u5927\u8ff7\u5bab"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/escape-a-large-maze",children:"1036.\u9003\u79bb\u5927\u8ff7\u5bab"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u53ea\u6709\u5728\u53ef\u4ee5\u901a\u8fc7\u4e00\u7cfb\u5217\u7684\u79fb\u52a8\u4ece\u6e90\u65b9\u683c source \u5230\u8fbe\u76ee\u6807\u65b9\u683c target \u65f6\u624d\u8fd4\u56de true\u3002\u5426\u5219\uff0c\u8fd4\u56de false\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-01-11"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1556ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a59.4MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bfs,\u5224\u65ad\u662f\u5426\u88ab\u5305\u56f4\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const format = (row: number, col: number) => `${row}:${col}`;\nconst dirs: number[][] = [\n  [1, 0],\n  [-1, 0],\n  [0, 1],\n  [0, -1],\n];\nconst MAX = 10 ** 6;\nconst MAX_CNT = 200 * 200;\nfunction check(blocked: Set<string>, source: number[], target: number[]): boolean {\n  const set = new Set<string>();\n  const queue: number[][] = [[source[0], source[1]]];\n  let cnt = MAX_CNT;\n  while (queue.length) {\n    const [row, col] = queue.shift()!;\n    for (const [addrow, addcol] of dirs) {\n      const nrow = row + addrow;\n      const ncol = col + addcol;\n      const str = format(nrow, ncol);\n      if (nrow < 0 || nrow >= MAX || ncol < 0 || ncol >= MAX || blocked.has(str) || set.has(str))\n        continue;\n      if (--cnt == 0 || (nrow === target[0] && ncol === target[1])) return true;\n      set.add(str);\n      queue.push([nrow, ncol]);\n    }\n  }\n  return false;\n}\nfunction isEscapePossible(blocked: number[][], source: number[], target: number[]): boolean {\n  if (blocked.length <= 1) return true;\n  const blocked_set = new Set(blocked.map(([row, col]) => format(row, col)));\n  return check(blocked_set, source, target) && check(blocked_set, target, source);\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(30758);const o={},c=r.createContext(o);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);