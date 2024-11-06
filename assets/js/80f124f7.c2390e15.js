"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[343],{68495:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=t(86070),i=t(31503);const o={},s="\u9762\u8bd5\u989810.10.\u6570\u5b57\u6d41\u7684\u79e9",d={id:"leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989810.10.\u6570\u5b57\u6d41\u7684\u79e9",title:"\u9762\u8bd5\u989810.10.\u6570\u5b57\u6d41\u7684\u79e9",description:"\u94fe\u63a5\uff1a\u9762\u8bd5\u989810.10.\u6570\u5b57\u6d41\u7684\u79e9",source:"@site/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989810.10.\u6570\u5b57\u6d41\u7684\u79e9.md",sourceDirName:"leetcode/\u9762\u8bd5\u9898",slug:"/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989810.10.\u6570\u5b57\u6d41\u7684\u79e9",permalink:"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989810.10.\u6570\u5b57\u6d41\u7684\u79e9",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"\u9762\u8bd5\u989810.02.\u53d8\u4f4d\u8bcd\u7ec4",permalink:"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989810.02.\u53d8\u4f4d\u8bcd\u7ec4"},next:{title:"\u9762\u8bd5\u989816.03.\u4ea4\u70b9",permalink:"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989816.03.\u4ea4\u70b9"}},c={},l=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u9762\u8bd5\u98981010\u6570\u5b57\u6d41\u7684\u79e9",children:"\u9762\u8bd5\u989810.10.\u6570\u5b57\u6d41\u7684\u79e9"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/rank-from-stream-lcci",children:"\u9762\u8bd5\u989810.10.\u6570\u5b57\u6d41\u7684\u79e9"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u6811\u72b6\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u6570\u636e\u6d41",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5b9e\u73b0\u4e00\u4e2a MapSum \u7c7b\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-14"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.8MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","trie\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const getIdx = (ch: string) => ch.codePointAt(0)! - 'a'.codePointAt(0)!;\nclass TrieNode {\n  data = 0;\n  end = false;\n  children: TrieNode[] = [];\n  constructor(public val: string) {}\n  sum() {\n    let sum = this.data;\n    for (const child of this.children) {\n      if (child) sum += child.sum();\n    }\n    return sum;\n  }\n}\nclass Trie {\n  root = new TrieNode('');\n  insert(word: string, data: number): void {\n    let node = this.root;\n    for (const ch of word) {\n      const idx = getIdx(ch);\n      if (!node.children[idx]) node.children[idx] = new TrieNode(ch);\n      node = node.children[idx];\n    }\n    node.data = data;\n    node.end = true;\n  }\n  findNode(word: string): TrieNode | null {\n    let node = this.root;\n    for (const ch of word) {\n      const idx = getIdx(ch);\n      if (!node.children[idx]) return null;\n      node = node.children[idx];\n    }\n    return node;\n  }\n  search(word: string): boolean {\n    return !!this.findNode(word)?.end;\n  }\n  startsWith(prefix: string): boolean {\n    return !!this.findNode(prefix);\n  }\n}\nclass MapSum {\n  trie = new Trie();\n  insert(key: string, val: number): void {\n    this.trie.insert(key, val);\n  }\n  sum(prefix: string): number {\n    return this.trie.findNode(prefix)?.sum() ?? 0;\n  }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var r=t(30758);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);