"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[34070],{76698:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(86070),r=t(25710);const i={},o="797.\u6240\u6709\u53ef\u80fd\u7684\u8def\u5f84",l={id:"leetcode/701-800/\u6240\u6709\u53ef\u80fd\u7684\u8def\u5f84",title:"797.\u6240\u6709\u53ef\u80fd\u7684\u8def\u5f84",description:"\u94fe\u63a5\uff1a797.\u6240\u6709\u53ef\u80fd\u7684\u8def\u5f84",source:"@site/docs/leetcode/701-800/797.\u6240\u6709\u53ef\u80fd\u7684\u8def\u5f84.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u6240\u6709\u53ef\u80fd\u7684\u8def\u5f84",permalink:"/web/site/docs/leetcode/701-800/\u6240\u6709\u53ef\u80fd\u7684\u8def\u5f84",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:797,frontMatter:{},sidebar:"journal",previous:{title:"796.\u65cb\u8f6c\u5b57\u7b26\u4e32",permalink:"/web/site/docs/leetcode/701-800/\u65cb\u8f6c\u5b57\u7b26\u4e32"},next:{title:"798.\u5f97\u5206\u6700\u9ad8\u7684\u6700\u5c0f\u8f6e\u8c03",permalink:"/web/site/docs/leetcode/701-800/\u5f97\u5206\u6700\u9ad8\u7684\u6700\u5c0f\u8f6e\u8c03"}},c={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"797\u6240\u6709\u53ef\u80fd\u7684\u8def\u5f84",children:"797.\u6240\u6709\u53ef\u80fd\u7684\u8def\u5f84"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/all-paths-from-source-to-target",children:"797.\u6240\u6709\u53ef\u80fd\u7684\u8def\u5f84"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u56fe\u3001\u56de\u6eaf",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6709 n \u4e2a\u8282\u70b9\u7684 \u6709\u5411\u65e0\u73af\u56fe\uff08DAG\uff09\uff0c\u8bf7\u4f60\u627e\u51fa\u6240\u6709\u4ece\u8282\u70b9 0 \u5230\u8282\u70b9 n-1 \u7684\u8def\u5f84\u5e76\u8f93\u51fa\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-25"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a136ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.4MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class GNode {\n  prev: GNode[] = [];\n  next: GNode[] = [];\n  constructor(public val: number) {}\n}\nfunction allPathsSourceTarget(graph: number[][]): number[][] {\n  const n = graph.length;\n  const list: GNode[] = new Array(n);\n  for (let i = 0; i < n; i++) {\n    let node = list[i];\n    if (!node) list[i] = node = new GNode(i);\n    const nextList = graph[i];\n    for (const next of nextList) {\n      let nextNode = list[next];\n      if (!nextNode) list[next] = nextNode = new GNode(next);\n      node.next.push(nextNode);\n      nextNode.prev.push(node);\n    }\n  }\n  const ans: number[][] = [];\n  dfs(list[0]);\n  return ans;\n  function dfs(node: GNode, list: GNode[] = []) {\n    list.push(node);\n    if (node.val === n - 1) ans.push(list.map(v => v.val));\n    if (node.next.length !== 0) node.next.forEach(v => dfs(v, list));\n    list.pop();\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-25"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a160ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a49MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function allPathsSourceTarget(graph: number[][]): number[][] {\n  const n = graph.length;\n  const ans: number[][] = [];\n  dfs(0);\n  return ans;\n  function dfs(node: number, list: number[] = []) {\n    list.push(node);\n    if (node === n - 1) ans.push(list.slice());\n    graph[node].forEach(v => dfs(v, list));\n    list.pop();\n  }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(30758);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);