"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[12131],{25093:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/701-800/\u8bbe\u8ba1\u54c8\u5e0c\u6620\u5c04","title":"706.\u8bbe\u8ba1\u54c8\u5e0c\u6620\u5c04","description":"\u94fe\u63a5\uff1a706.\u8bbe\u8ba1\u54c8\u5e0c\u6620\u5c04","source":"@site/docs/leetcode/701-800/706.\u8bbe\u8ba1\u54c8\u5e0c\u6620\u5c04.md","sourceDirName":"leetcode/701-800","slug":"/leetcode/701-800/\u8bbe\u8ba1\u54c8\u5e0c\u6620\u5c04","permalink":"/docs/leetcode/701-800/\u8bbe\u8ba1\u54c8\u5e0c\u6620\u5c04","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":706,"frontMatter":{},"sidebar":"journal","previous":{"title":"705.\u8bbe\u8ba1\u54c8\u5e0c\u96c6\u5408","permalink":"/docs/leetcode/701-800/\u8bbe\u8ba1\u54c8\u5e0c\u96c6\u5408"},"next":{"title":"707.\u8bbe\u8ba1\u94fe\u8868","permalink":"/docs/leetcode/701-800/\u8bbe\u8ba1\u94fe\u8868"}}');var l=t(86070),i=t(31503);const r={},d="706.\u8bbe\u8ba1\u54c8\u5e0c\u6620\u5c04",o={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"706\u8bbe\u8ba1\u54c8\u5e0c\u6620\u5c04",children:"706.\u8bbe\u8ba1\u54c8\u5e0c\u6620\u5c04"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/design-hashmap",children:"706.\u8bbe\u8ba1\u54c8\u5e0c\u6620\u5c04"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u94fe\u8868\u3001\u54c8\u5e0c\u51fd\u6570",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4e0d\u4f7f\u7528\u4efb\u4f55\u5185\u5efa\u7684\u54c8\u5e0c\u8868\u5e93\u8bbe\u8ba1\u4e00\u4e2a\u54c8\u5e0c\u6620\u5c04\uff08HashMap\uff09\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-24"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a204ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a48.8MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u94fe\u8868\u89e3\u51b3\u54c8\u5e0c\u51b2\u7a81\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"class LinkedListNode {\n  constructor(\n    public val: [number, number],\n    public prev: LinkedListNode | null = null,\n    public next: LinkedListNode | null = null\n  ) {}\n}\nclass LinkedList {\n  private head = new LinkedListNode([0, 0]);\n  private last: LinkedListNode | null = null;\n  private getNode(key: number): LinkedListNode | null {\n    let p: LinkedListNode = this.head;\n    while (p.next) {\n      if (p.next.val[0] === key) return p;\n      p = p.next;\n    }\n    return null;\n  }\n  contains(key: number): boolean {\n    return this.getNode(key) !== null;\n  }\n  put(key: number, value: number): void {\n    let node = this.getNode(key);\n    if (node !== null) {\n      node.next!.val[1] = value;\n      return;\n    }\n    node = new LinkedListNode([key, value]);\n    if (this.last === null) this.head.next = node;\n    else this.last.next = node;\n    this.last = node;\n  }\n  get(key: number): number {\n    const node = this.getNode(key);\n    if (node === null) return -1;\n    return node.next!.val[1];\n  }\n  remove(key: number): void {\n    const node = this.getNode(key);\n    if (node === null) return;\n    if (this.last === node.next) this.last = node;\n    node.next = node.next!.next;\n  }\n}\nconst SIZE = 1000;\nclass MyHashMap {\n  private list = new Array(SIZE).fill(0).map(_ => new LinkedList());\n  private hash(key: number) {\n    return key % SIZE;\n  }\n  put(key: number, value: number): void {\n    this.list[this.hash(key)].put(key, value);\n  }\n  get(key: number): number {\n    return this.list[this.hash(key)].get(key);\n  }\n  remove(key: number): void {\n    return this.list[this.hash(key)].remove(key);\n  }\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-04-15"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a112ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19.11MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","map\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"class MyHashMap:\n    def __init__(self):\n        self.map = {}\n    def put(self, key: int, value: int) -> None:\n        self.map[key] = value\n    def get(self, key: int) -> int:\n        return self.map[key] if key in self.map else -1\n    def remove(self, key: int) -> None:\n        if key in self.map:\n            del self.map[key]\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-04-15"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a422ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a64.12MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u53cc\u6570\u7ec4\u5b58\u952e\u503c\u5bf9\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"class MyHashMap:\n    def __init__(self):\n        self.iarr = [False] * (10 ** 6 + 1)\n        self.varr = [-1] * (10 ** 6 + 1)\n    def put(self, key: int, value: int) -> None:\n        self.iarr[key] = True\n        self.varr[key] = value\n    def get(self, key: int) -> int:\n        return self.varr[key] if self.iarr[key] else -1\n    def remove(self, key: int) -> None:\n        self.iarr[key] = False\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var s=t(30758);const l={},i=s.createContext(l);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);