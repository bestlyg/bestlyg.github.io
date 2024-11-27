"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[66532],{27015:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"leetcode/201-300/\u5b9e\u73b0Trie(\u524d\u7f00\u6811)","title":"208.\u5b9e\u73b0Trie(\u524d\u7f00\u6811)","description":"\u94fe\u63a5\uff1a208.\u5b9e\u73b0Trie(\u524d\u7f00\u6811)","source":"@site/docs/leetcode/201-300/208.\u5b9e\u73b0Trie(\u524d\u7f00\u6811).md","sourceDirName":"leetcode/201-300","slug":"/leetcode/201-300/\u5b9e\u73b0Trie(\u524d\u7f00\u6811)","permalink":"/docs/leetcode/201-300/\u5b9e\u73b0Trie(\u524d\u7f00\u6811)","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":208,"frontMatter":{},"sidebar":"journal","previous":{"title":"207.\u8bfe\u7a0b\u8868","permalink":"/docs/leetcode/201-300/\u8bfe\u7a0b\u8868"},"next":{"title":"209.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4","permalink":"/docs/leetcode/201-300/\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4"}}');var t=r(86070),s=r(31503);const d={},o="208.\u5b9e\u73b0Trie(\u524d\u7f00\u6811)",c={},l=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"208\u5b9e\u73b0trie\u524d\u7f00\u6811",children:"208.\u5b9e\u73b0Trie(\u524d\u7f00\u6811)"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/implement-trie-prefix-tree",children:"208.\u5b9e\u73b0Trie(\u524d\u7f00\u6811)"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u5b57\u5178\u6811\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u5b9e\u73b0 Trie \u7c7b\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-14"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a248ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a55.5MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6784\u5efa\u524d\u7f00\u6811\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class Trie {\n  private children = new Map<string, Trie>();\n  constructor(public char = '', public end = false) {}\n  insert(word: string): void {\n    if (word === '') {\n      this.end = true;\n      return;\n    }\n    const first = word[0];\n    let nextTrieNode = this.children.get(first);\n    if (!nextTrieNode)\n      this.children.set(first, (nextTrieNode = new Trie(first, word.length === 1)));\n    nextTrieNode.insert(word.substr(1));\n  }\n  search(word: string): boolean {\n    if (word === '') return this.end;\n    return !!this.children.get(word[0])?.search(word.substr(1));\n  }\n  startsWith(prefix: string): boolean {\n    if (prefix.length === 1) return this.children.has(prefix);\n    return !!this.children.get(prefix[0])?.startsWith(prefix.substr(1));\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-25"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a196ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a56.4MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6570\u7ec4\u6784\u5efa trie\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const MAX_COUNT = 26;\nconst getIdx = (ch: string) => ch.codePointAt(0)! - 'a'.codePointAt(0)!;\nclass TrieNode {\n  end = false;\n  children: TrieNode[] = new Array(MAX_COUNT);\n  constructor(public val: string) {}\n}\nclass Trie {\n  root = new TrieNode('');\n  insert(word: string): void {\n    let node = this.root;\n    for (const ch of word) {\n      const idx = getIdx(ch);\n      if (!node.children[idx]) node.children[idx] = new TrieNode(ch);\n      node = node.children[idx];\n    }\n    node.end = true;\n  }\n  findNode(word: string): TrieNode | null {\n    let node = this.root;\n    for (const ch of word) {\n      const idx = getIdx(ch);\n      if (!node.children[idx]) return null;\n      node = node.children[idx];\n    }\n    return node;\n  }\n  search(word: string): boolean {\n    return !!this.findNode(word)?.end;\n  }\n  startsWith(prefix: string): boolean {\n    return !!this.findNode(prefix);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-25"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a244ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a55MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6784\u5efa trie\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class TrieNode {\n  end = false;\n  children: Record<string, TrieNode> = {};\n  constructor(public val: string) {}\n}\nclass Trie {\n  private root = new TrieNode('');\n  insert(word: string): void {\n    let node = this.root;\n    for (const ch of word) {\n      if (!node.children[ch]) node.children[ch] = new TrieNode(ch);\n      node = node.children[ch];\n    }\n    node.end = true;\n  }\n  private findNode(word: string): TrieNode | null {\n    let node = this.root;\n    for (const ch of word) {\n      if (!node.children[ch]) return null;\n      node = node.children[ch];\n    }\n    return node;\n  }\n  search(word: string): boolean {\n    return !!this.findNode(word)?.end;\n  }\n  startsWith(prefix: string): boolean {\n    return !!this.findNode(prefix);\n  }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},31503:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>o});var i=r(30758);const t={},s=i.createContext(t);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);