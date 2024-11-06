"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[91618],{98879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var s=t(86070),r=t(31503);const i={},c="847.\u8bbf\u95ee\u6240\u6709\u8282\u70b9\u7684\u6700\u77ed\u8def\u5f84",o={id:"leetcode/801-900/\u8bbf\u95ee\u6240\u6709\u8282\u70b9\u7684\u6700\u77ed\u8def\u5f84",title:"847.\u8bbf\u95ee\u6240\u6709\u8282\u70b9\u7684\u6700\u77ed\u8def\u5f84",description:"\u94fe\u63a5\uff1a847.\u8bbf\u95ee\u6240\u6709\u8282\u70b9\u7684\u6700\u77ed\u8def\u5f84",source:"@site/docs/leetcode/801-900/847.\u8bbf\u95ee\u6240\u6709\u8282\u70b9\u7684\u6700\u77ed\u8def\u5f84.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u8bbf\u95ee\u6240\u6709\u8282\u70b9\u7684\u6700\u77ed\u8def\u5f84",permalink:"/docs/leetcode/801-900/\u8bbf\u95ee\u6240\u6709\u8282\u70b9\u7684\u6700\u77ed\u8def\u5f84",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:847,frontMatter:{},sidebar:"journal",previous:{title:"846.\u4e00\u624b\u987a\u5b50",permalink:"/docs/leetcode/801-900/\u4e00\u624b\u987a\u5b50"},next:{title:"849.\u5230\u6700\u8fd1\u7684\u4eba\u7684\u6700\u5927\u8ddd\u79bb",permalink:"/docs/leetcode/801-900/\u5230\u6700\u8fd1\u7684\u4eba\u7684\u6700\u5927\u8ddd\u79bb"}},l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"847\u8bbf\u95ee\u6240\u6709\u8282\u70b9\u7684\u6700\u77ed\u8def\u5f84",children:"847.\u8bbf\u95ee\u6240\u6709\u8282\u70b9\u7684\u6700\u77ed\u8def\u5f84"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/shortest-path-visiting-all-nodes",children:"847.\u8bbf\u95ee\u6240\u6709\u8282\u70b9\u7684\u6700\u77ed\u8def\u5f84"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u56fe\u3001\u52a8\u6001\u89c4\u5212\u3001\u72b6\u6001\u538b\u7f29",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u80fd\u591f\u8bbf\u95ee\u6240\u6709\u8282\u70b9\u7684\u6700\u77ed\u8def\u5f84\u7684\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-06"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a120ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bfs,\u5229\u7528 set \u505a\u91cd\u590d\u503c\u8fc7\u6ee4\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function shortestPathLength(graph: number[][]): number {\n  const n = graph.length;\n  const queue: [number, number, number][] = [];\n  const seen = new Array(n).fill(0).map(_ => new Set<number>());\n  for (let i = 0; i < n; i++) {\n    queue.push([i, 1 << i, 0]);\n    seen[i].add(1 << i);\n  }\n  let ans = Infinity;\n  while (queue.length) {\n    const data = queue.shift()!;\n    const [idx, mask, step] = data;\n    if (mask === (1 << n) - 1) {\n      ans = step;\n      break;\n    }\n    for (const next of graph[idx]) {\n      const newMask = mask | (1 << next);\n      if (seen[next].has(newMask)) continue;\n      queue.push([next, newMask, step + 1]);\n      seen[next].add(newMask);\n    }\n  }\n  return ans;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(30758);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);