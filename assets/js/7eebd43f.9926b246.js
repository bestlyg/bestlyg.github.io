"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[57053],{18911:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(86070),o=t(25710);const s={},i="LCR114.\u706b\u661f\u8bcd\u5178",c={id:"leetcode/LCR/LCR114.\u706b\u661f\u8bcd\u5178",title:"LCR114.\u706b\u661f\u8bcd\u5178",description:"\u94fe\u63a5\uff1aLCR114.\u706b\u661f\u8bcd\u5178",source:"@site/docs/leetcode/LCR/LCR114.\u706b\u661f\u8bcd\u5178.md",sourceDirName:"leetcode/LCR",slug:"/leetcode/LCR/LCR114.\u706b\u661f\u8bcd\u5178",permalink:"/docs/leetcode/LCR/LCR114.\u706b\u661f\u8bcd\u5178",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"LCR091.\u7c89\u5237\u623f\u5b50",permalink:"/docs/leetcode/LCR/LCR091.\u7c89\u5237\u623f\u5b50"},next:{title:"LCR115.\u5e8f\u5217\u91cd\u5efa",permalink:"/docs/leetcode/LCR/LCR115.\u5e8f\u5217\u91cd\u5efa"}},d={},l=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"lcr114\u706b\u661f\u8bcd\u5178",children:"LCR114.\u706b\u661f\u8bcd\u5178"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/Jf1JuT",children:"LCR114.\u706b\u661f\u8bcd\u5178"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u56fe\u3001\u62d3\u6251\u6392\u5e8f\u3001\u6570\u7ec4\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a",'\u8bf7\u4f60\u6839\u636e\u8be5\u8bcd\u5178\u8fd8\u539f\u51fa\u6b64\u8bed\u8a00\u4e2d\u5df2\u77e5\u7684\u5b57\u6bcd\u987a\u5e8f\uff0c\u5e76 \u6309\u5b57\u6bcd\u9012\u589e\u987a\u5e8f \u6392\u5217\u3002\u82e5\u4e0d\u5b58\u5728\u5408\u6cd5\u5b57\u6bcd\u987a\u5e8f\uff0c\u8fd4\u56de "" \u3002\u82e5\u5b58\u5728\u591a\u79cd\u53ef\u80fd\u7684\u5408\u6cd5\u5b57\u6bcd\u987a\u5e8f\uff0c\u8fd4\u56de\u5176\u4e2d \u4efb\u610f\u4e00\u79cd \u987a\u5e8f\u5373\u53ef\u3002']}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-31"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.8MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u62d3\u6251\u6392\u5e8f+bfs\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"class MyNode {\n  next = new Set<MyNode>();\n  parent = new Set<MyNode>();\n  constructor(public val: string) {}\n}\nfunction alienOrder(words: string[]): string {\n  const map = new Map<string, MyNode>();\n  const n = words.length;\n  let error = false;\n  for (let i = 0; i < n; i++) {\n    for (const ch of words[i]) {\n      if (!map.has(ch)) map.set(ch, new MyNode(ch));\n    }\n    if (i >= 1) comp(i - 1, i);\n    if (error) return '';\n  }\n  const q: MyNode[] = [];\n  for (const node of map.values()) {\n    if (node.parent.size === 0) q.push(node);\n  }\n  const set = new Set<MyNode>();\n  let ans = '';\n  while (q.length) {\n    const node = q.shift()!;\n    if (set.has(node)) continue;\n    set.add(node);\n    ans += node.val;\n    for (const child of node.next) {\n      child.parent.delete(node);\n      if (child.parent.size === 0) {\n        q.push(child);\n      }\n    }\n  }\n  if (ans.length !== map.size) return '';\n  return ans;\n  function comp(idx1: number, idx2: number) {\n    const word1 = words[idx1];\n    const word2 = words[idx2];\n    const n = Math.min(word1.length, word2.length);\n    for (let i = 0; i < n; i++) {\n      if (word1[i] !== word2[i]) {\n        const n1 = map.get(word1[i])!;\n        const n2 = map.get(word2[i])!;\n        n1.next.add(n2);\n        n2.parent.add(n1);\n        return;\n      }\n    }\n    if (word1.length > word2.length) error = true;\n  }\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>c});var r=t(30758);const o={},s=r.createContext(o);function i(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);