"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[35012],{77087:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(86070),s=t(25710);const i={},o="14.\u6700\u957f\u516c\u5171\u524d\u7f00",l={id:"leetcode/1-100/\u6700\u957f\u516c\u5171\u524d\u7f00",title:"14.\u6700\u957f\u516c\u5171\u524d\u7f00",description:"\u94fe\u63a5\uff1a14.\u6700\u957f\u516c\u5171\u524d\u7f00",source:"@site/docs/leetcode/1-100/14.\u6700\u957f\u516c\u5171\u524d\u7f00.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u6700\u957f\u516c\u5171\u524d\u7f00",permalink:"/web/site/docs/leetcode/1-100/\u6700\u957f\u516c\u5171\u524d\u7f00",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"journal",previous:{title:"13.\u7f57\u9a6c\u6570\u5b57\u8f6c\u6574\u6570",permalink:"/web/site/docs/leetcode/1-100/\u7f57\u9a6c\u6570\u5b57\u8f6c\u6574\u6570"},next:{title:"15.\u4e09\u6570\u4e4b\u548c",permalink:"/web/site/docs/leetcode/1-100/\u4e09\u6570\u4e4b\u548c"}},c={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2},{value:"\u9898\u89e3 4 - cpp",id:"\u9898\u89e3-4---cpp",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"14\u6700\u957f\u516c\u5171\u524d\u7f00",children:"14.\u6700\u957f\u516c\u5171\u524d\u7f00"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/longest-common-prefix",children:"14.\u6700\u957f\u516c\u5171\u524d\u7f00"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u5178\u6811\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\u6765\u67e5\u627e\u5b57\u7b26\u4e32\u6570\u7ec4\u4e2d\u7684\u6700\u957f\u516c\u5171\u524d\u7f00\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-06-03"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a36.4MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5185\u90e8\u7528\u51fd\u6570\u5224\u65ad\u5934\u90e8\u91cd\u590d\u5b57\u7b26\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function longestCommonPrefix(strs: string[]): string {\n  const len = strs.length;\n  if (len === 0) return '';\n  let commonS = strs[0];\n  for (let i = 1; i < len; i++) if ((commonS = comp(strs[i], commonS)) === '') return commonS;\n  return commonS;\n  function comp(s: string, commonS: string): string {\n    for (let i = 0, minLen = Math.min(s.length, commonS.length); i <= minLen; i++)\n      if (s[i] !== commonS[i]) return commonS.substring(0, i);\n    return commonS;\n  }\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-06-15"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a37MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7eb5\u5411\u5224\u65ad\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function longestCommonPrefix(strs: string[]): string {\n  const len = strs.length;\n  if (len === 0) return '';\n  const commonPrefix = strs[0];\n  for (let i = 0, cl = commonPrefix.length; i < cl; i++)\n    for (const str of strs) if (commonPrefix[i] !== str[i]) return commonPrefix.substring(0, i);\n  return commonPrefix;\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-16"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.4MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5b57\u5178\u6811\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"class TrieNode {\n  end = false;\n  children: Map<string, TrieNode> = new Map();\n  constructor(public val: string) {}\n}\nclass Trie {\n  private _size = 0;\n  get size() {\n    return this._size;\n  }\n  get empty() {\n    return this._size === 0;\n  }\n  private _root = new TrieNode('');\n  get root() {\n    return this._root;\n  }\n  clear() {\n    this._root = new TrieNode('');\n    this._size = 0;\n  }\n  add(str: string) {\n    return this._add(str);\n  }\n  private _add(str: string, node = this._root) {\n    if (str.length === 0) {\n      this._root.end = true;\n      this._size++;\n      return;\n    }\n    if (str.length === 1) {\n      let endNode = node.children.get(str);\n      if (!endNode) node.children.set(str, (endNode = new TrieNode(str)));\n      if (!endNode.end) {\n        endNode.end = true;\n        this._size++;\n      }\n      return;\n    }\n    const first = str[0];\n    let nextNode = node.children.get(first);\n    if (!nextNode) node.children.set(first, (nextNode = new TrieNode(first)));\n    const nextStr = str.substr(1);\n    this._add(nextStr, nextNode);\n  }\n  contains(str: string) {\n    const endNode = this.findEndNode(str);\n    return endNode ? endNode.end : false;\n  }\n  remove(str: string) {\n    const endNode = this.findEndNode(str);\n    if (endNode && endNode.end) {\n      endNode.end = false;\n      this._size--;\n    }\n  }\n  starsWith(str: string) {\n    return this.findEndNode(str) !== null;\n  }\n  private findEndNode(str: string, node = this._root): TrieNode | null {\n    if (str.length === 0) return this._root;\n    if (str.length === 1) return node.children.get(str) ?? null;\n    const first = str[0];\n    let nextNode = node.children.get(first);\n    if (!nextNode) return null;\n    const nextStr = str.substr(1);\n    return this.findEndNode(nextStr, nextNode);\n  }\n}\nfunction longestCommonPrefix(strs: string[]): string {\n  const trie = new Trie();\n  for (const str of strs) {\n    if (str === '') return '';\n    trie.add(str);\n  }\n  let node = trie.root;\n  let ans = '';\n  while (node.children.size === 1 && !node.end) {\n    ans += node.val;\n    node = [...node.children.values()][0];\n  }\n  ans += node.val;\n  return ans;\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-4---cpp",children:"\u9898\u89e3 4 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-20"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u6bcf\u4e00\u4f4d\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'class Solution {\n   public:\n    string longestCommonPrefix(vector<string>& strs) {\n        int n = strs.size();\n        int maxn = 200;\n        for (int i = 0; i < n; i++) {\n            if (strs[i].size() < maxn) maxn = strs[i].size();\n        }\n        string ans = "";\n        if (maxn == 0) return ans;\n        for (int i = 0; i < maxn; i++) {\n            char ch = strs[0][i];\n            for (int j = 1; j < n; j++) {\n                if (strs[j][i] != ch) return ans;\n            }\n            ans += ch;\n        }\n        return ans;\n    }\n};\n'})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>l});var r=t(30758);const s={},i=r.createContext(s);function o(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);