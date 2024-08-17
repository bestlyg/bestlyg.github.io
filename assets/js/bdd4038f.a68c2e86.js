"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[90692],{67135:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(86070),r=t(25710);const i={},o="802.\u627e\u5230\u6700\u7ec8\u7684\u5b89\u5168\u72b6\u6001",c={id:"leetcode/801-900/\u627e\u5230\u6700\u7ec8\u7684\u5b89\u5168\u72b6\u6001",title:"802.\u627e\u5230\u6700\u7ec8\u7684\u5b89\u5168\u72b6\u6001",description:"\u94fe\u63a5\uff1a802.\u627e\u5230\u6700\u7ec8\u7684\u5b89\u5168\u72b6\u6001",source:"@site/docs/leetcode/801-900/802.\u627e\u5230\u6700\u7ec8\u7684\u5b89\u5168\u72b6\u6001.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u627e\u5230\u6700\u7ec8\u7684\u5b89\u5168\u72b6\u6001",permalink:"/docs/leetcode/801-900/\u627e\u5230\u6700\u7ec8\u7684\u5b89\u5168\u72b6\u6001",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:802,frontMatter:{},sidebar:"journal",previous:{title:"801.\u4f7f\u5e8f\u5217\u9012\u589e\u7684\u6700\u5c0f\u4ea4\u6362\u6b21\u6570",permalink:"/docs/leetcode/801-900/\u4f7f\u5e8f\u5217\u9012\u589e\u7684\u6700\u5c0f\u4ea4\u6362\u6b21\u6570"},next:{title:"804.\u552f\u4e00\u6469\u5c14\u65af\u5bc6\u7801\u8bcd",permalink:"/docs/leetcode/801-900/\u552f\u4e00\u6469\u5c14\u65af\u5bc6\u7801\u8bcd"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"802\u627e\u5230\u6700\u7ec8\u7684\u5b89\u5168\u72b6\u6001",children:"802.\u627e\u5230\u6700\u7ec8\u7684\u5b89\u5168\u72b6\u6001"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/find-eventual-safe-states",children:"802.\u627e\u5230\u6700\u7ec8\u7684\u5b89\u5168\u72b6\u6001"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u56fe\u3001\u62d3\u6251\u6392\u5e8f",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4e00\u4e2a\u7531\u56fe\u4e2d\u6240\u6709\u5b89\u5168\u7684\u8d77\u59cb\u8282\u70b9\u7ec4\u6210\u7684\u6570\u7ec4\u4f5c\u4e3a\u7b54\u6848\u3002\u7b54\u6848\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u5e94\u5f53\u6309 \u5347\u5e8f \u6392\u5217\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-05"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a204ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a53.8MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function eventualSafeNodes(graph: number[][]): number[] {\n  const n = graph.length;\n  const ans = new Map<number, boolean>();\n  const set = new Set<number>();\n  for (let i = 0; i < n; i++) dfs(i);\n  function dfs(idx: number) {\n    if (set.has(idx)) return false;\n    if (ans.has(idx)) return ans.get(idx);\n    if (graph[idx].length === 0) {\n      ans.set(idx, true);\n      return true;\n    }\n    set.add(idx);\n    let f = true;\n    for (const next of graph[idx]) {\n      if (!dfs(next)) {\n        f = false;\n        break;\n      }\n    }\n    set.delete(idx);\n    ans.set(idx, f);\n    return f;\n  }\n  return [...ans.entries()]\n    .filter(([, f]) => f)\n    .map(([val]) => val)\n    .sort((a, b) => a - b);\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(30758);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);