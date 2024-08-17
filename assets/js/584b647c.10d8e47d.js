"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[99886],{51597:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(86070),i=t(25710);const s={},c="1409.\u67e5\u8be2\u5e26\u952e\u7684\u6392\u5217",o={id:"leetcode/1401-1500/\u67e5\u8be2\u5e26\u952e\u7684\u6392\u5217",title:"1409.\u67e5\u8be2\u5e26\u952e\u7684\u6392\u5217",description:"\u94fe\u63a5\uff1a1409.\u67e5\u8be2\u5e26\u952e\u7684\u6392\u5217",source:"@site/docs/leetcode/1401-1500/1409.\u67e5\u8be2\u5e26\u952e\u7684\u6392\u5217.md",sourceDirName:"leetcode/1401-1500",slug:"/leetcode/1401-1500/\u67e5\u8be2\u5e26\u952e\u7684\u6392\u5217",permalink:"/docs/leetcode/1401-1500/\u67e5\u8be2\u5e26\u952e\u7684\u6392\u5217",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1409,frontMatter:{},sidebar:"journal",previous:{title:"1408.\u6570\u7ec4\u4e2d\u7684\u5b57\u7b26\u4e32\u5339\u914d",permalink:"/docs/leetcode/1401-1500/\u6570\u7ec4\u4e2d\u7684\u5b57\u7b26\u4e32\u5339\u914d"},next:{title:"1410.HTML\u5b9e\u4f53\u89e3\u6790\u5668",permalink:"/docs/leetcode/1401-1500/HTML\u5b9e\u4f53\u89e3\u6790\u5668"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"1409\u67e5\u8be2\u5e26\u952e\u7684\u6392\u5217",children:"1409.\u67e5\u8be2\u5e26\u952e\u7684\u6392\u5217"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/queries-on-a-permutation-with-key",children:"1409.\u67e5\u8be2\u5e26\u952e\u7684\u6392\u5217"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u72b6\u6570\u7ec4\u3001\u6570\u7ec4\u3001\u6a21\u62df",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5f85\u67e5\u6570\u7ec4 queries \uff0c\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u4e3a 1 \u5230 m \u4e4b\u95f4\u7684\u6b63\u6574\u6570\u3002 \u8bf7\u4f60\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\u5f85\u67e5\u6570\u7ec4 queries \u7684\u67e5\u8be2\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-14"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.3MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u94fe\u8868\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"class Data {\n  next: Data | null;\n  idx: number;\n  val: number = -1;\n}\nfunction processQueries(queries: number[], m: number): number[] {\n  const root = new Data();\n  let p = root;\n  for (let i = 1; i <= m; i++) {\n    const item = new Data();\n    item.idx = i - 1;\n    item.val = i;\n    p.next = item;\n    p = item;\n  }\n  const ans: number[] = [];\n  for (const query of queries) {\n    p = root;\n    while (p.next!.val !== query) {\n      p = p.next!;\n      p.idx++;\n    }\n    const node = p.next!;\n    p.next = node.next;\n    node.next = root.next;\n    root.next = node;\n    ans.push(node.idx);\n    node.idx = 0;\n  }\n  return ans;\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-14"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.3MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6811\u72b6\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"class FenwickTree {\n  arr: number[];\n  constructor(private n: number) {\n    this.arr = new Array(n + 1).fill(0);\n  }\n  add(idx: number, num: number): void {\n    while (idx <= this.n) {\n      this.arr[idx] += num;\n      idx += this.lowbit(idx);\n    }\n  }\n  at(idx: number): number {\n    return this.query(idx) - this.query(idx - 1);\n  }\n  query(idx: number): number {\n    let sum = 0;\n    while (idx) {\n      sum += this.arr[idx];\n      idx -= this.lowbit(idx);\n    }\n    return sum;\n  }\n  private lowbit(num: number) {\n    return num & -num;\n  }\n}\nfunction processQueries(queries: number[], m: number): number[] {\n  const n = queries.length;\n  const tree = new FenwickTree(n + m);\n  const idxList = new Array(m + 1).fill(0).map((_, i) => n + i);\n  const ans: number[] = [];\n  for (let i = 1; i <= m; i++) tree.add(i + n, 1);\n  for (let i = 0; i < n; i++) {\n    const query = queries[i];\n    const idx = idxList[query];\n    const cnt = tree.query(idx);\n    ans.push(cnt - 1);\n    tree.add(idx, -1);\n    tree.add(n - i, 1);\n    idxList[query] = n - i;\n  }\n  return ans;\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var r=t(30758);const i={},s=r.createContext(i);function c(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);