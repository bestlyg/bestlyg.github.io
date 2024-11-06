"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[88156],{70090:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=t(86070),s=t(31503);const o={},i="1268.\u641c\u7d22\u63a8\u8350\u7cfb\u7edf",d={id:"leetcode/1201-1300/\u641c\u7d22\u63a8\u8350\u7cfb\u7edf",title:"1268.\u641c\u7d22\u63a8\u8350\u7cfb\u7edf",description:"\u94fe\u63a5\uff1a1268.\u641c\u7d22\u63a8\u8350\u7cfb\u7edf",source:"@site/docs/leetcode/1201-1300/1268.\u641c\u7d22\u63a8\u8350\u7cfb\u7edf.md",sourceDirName:"leetcode/1201-1300",slug:"/leetcode/1201-1300/\u641c\u7d22\u63a8\u8350\u7cfb\u7edf",permalink:"/docs/leetcode/1201-1300/\u641c\u7d22\u63a8\u8350\u7cfb\u7edf",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1268,frontMatter:{},sidebar:"journal",previous:{title:"1267.\u7edf\u8ba1\u53c2\u4e0e\u901a\u4fe1\u7684\u670d\u52a1\u5668",permalink:"/docs/leetcode/1201-1300/\u7edf\u8ba1\u53c2\u4e0e\u901a\u4fe1\u7684\u670d\u52a1\u5668"},next:{title:"1269.\u505c\u5728\u539f\u5730\u7684\u65b9\u6848\u6570",permalink:"/docs/leetcode/1201-1300/\u505c\u5728\u539f\u5730\u7684\u65b9\u6848\u6570"}},c={},l=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"1268\u641c\u7d22\u63a8\u8350\u7cfb\u7edf",children:"1268.\u641c\u7d22\u63a8\u8350\u7cfb\u7edf"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/search-suggestions-system",children:"1268.\u641c\u7d22\u63a8\u8350\u7cfb\u7edf"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u5178\u6811\u3001\u6570\u7ec4\u3001\u5b57\u7b26\u4e32\u3001\u4e8c\u5206\u67e5\u627e\u3001\u6392\u5e8f\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u4ee5\u4e8c\u7ef4\u5217\u8868\u7684\u5f62\u5f0f\uff0c\u8fd4\u56de\u5728\u8f93\u5165 searchWord \u6bcf\u4e2a\u5b57\u6bcd\u540e\u76f8\u5e94\u7684\u63a8\u8350\u4ea7\u54c1\u7684\u5217\u8868\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-25"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a820ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a66.6MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","trie \u4e2d\u5e8f\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"const MAX_COUNT = 26;\nconst getIdx = (ch: string) => ch.codePointAt(0)! - 'a'.codePointAt(0)!;\nclass TrieNode {\n  end = false;\n  children: TrieNode[] = new Array(MAX_COUNT);\n  constructor(public val: string) {}\n}\nclass Trie {\n  root = new TrieNode('');\n  insert(word: string): void {\n    let node = this.root;\n    for (const ch of word) {\n      const idx = getIdx(ch);\n      if (!node.children[idx]) node.children[idx] = new TrieNode(ch);\n      node = node.children[idx];\n    }\n    node.end = true;\n  }\n  findNode(word: string): TrieNode | null {\n    let node = this.root;\n    for (const ch of word) {\n      const idx = getIdx(ch);\n      if (!node.children[idx]) return null;\n      node = node.children[idx];\n    }\n    return node;\n  }\n  search(word: string): boolean {\n    return !!this.findNode(word)?.end;\n  }\n  startsWith(prefix: string): boolean {\n    return !!this.findNode(prefix);\n  }\n}\nfunction suggestedProducts(products: string[], searchWord: string): string[][] {\n  const trie = new Trie();\n  products.forEach(ch => trie.insert(ch));\n  let str = '';\n  const ans: string[][] = [];\n  for (const ch of searchWord) {\n    const node = trie.findNode(str + ch);\n    const list = dfs(node)\n      .slice(0, 3)\n      .map(v => str + v);\n    ans.push(list);\n    str += ch;\n  }\n  return ans;\n  function dfs(node: TrieNode | null): string[] {\n    const ans: string[] = [];\n    _dfs(node);\n    return ans;\n    function _dfs(node: TrieNode | null, str = ''): void {\n      if (!node) return;\n      str += node.val;\n      if (node.end) ans.push(str);\n      for (let i = 0; i < 26; i++) _dfs(node.children[i], str);\n    }\n  }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>d});var r=t(30758);const s={},o=r.createContext(s);function i(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);