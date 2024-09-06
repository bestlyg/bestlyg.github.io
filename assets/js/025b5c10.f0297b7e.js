"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[34915],{56628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=t(86070),i=t(25710);const l={},r="705.\u8bbe\u8ba1\u54c8\u5e0c\u96c6\u5408",o={id:"leetcode/701-800/\u8bbe\u8ba1\u54c8\u5e0c\u96c6\u5408",title:"705.\u8bbe\u8ba1\u54c8\u5e0c\u96c6\u5408",description:"\u94fe\u63a5\uff1a705.\u8bbe\u8ba1\u54c8\u5e0c\u96c6\u5408",source:"@site/docs/leetcode/701-800/705.\u8bbe\u8ba1\u54c8\u5e0c\u96c6\u5408.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u8bbe\u8ba1\u54c8\u5e0c\u96c6\u5408",permalink:"/docs/leetcode/701-800/\u8bbe\u8ba1\u54c8\u5e0c\u96c6\u5408",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:705,frontMatter:{},sidebar:"journal",previous:{title:"704.\u4e8c\u5206\u67e5\u627e",permalink:"/docs/leetcode/701-800/\u4e8c\u5206\u67e5\u627e"},next:{title:"706.\u8bbe\u8ba1\u54c8\u5e0c\u6620\u5c04",permalink:"/docs/leetcode/701-800/\u8bbe\u8ba1\u54c8\u5e0c\u6620\u5c04"}},c={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"705\u8bbe\u8ba1\u54c8\u5e0c\u96c6\u5408",children:"705.\u8bbe\u8ba1\u54c8\u5e0c\u96c6\u5408"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/design-hashset",children:"705.\u8bbe\u8ba1\u54c8\u5e0c\u96c6\u5408"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u94fe\u8868\u3001\u54c8\u5e0c\u51fd\u6570",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bbe\u8ba1\u548c\u6784\u5efa\u4e00\u4e2a\u201c\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u201d\u7f13\u5b58\uff0c\u8be5\u7f13\u5b58\u4f1a\u5220\u9664\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7684\u9879\u76ee\u3002\u7f13\u5b58\u5e94\u8be5\u4ece\u952e\u6620\u5c04\u5230\u503c(\u5141\u8bb8\u4f60\u63d2\u5165\u548c\u68c0\u7d22\u7279\u5b9a\u952e\u5bf9\u5e94\u7684\u503c)\uff0c\u5e76\u5728\u521d\u59cb\u5316\u65f6\u6307\u5b9a\u6700\u5927\u5bb9\u91cf\u3002\u5f53\u7f13\u5b58\u88ab\u586b\u6ee1\u65f6\uff0c\u5b83\u5e94\u8be5\u5220\u9664\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7684\u9879\u76ee\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-24"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a176ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a54MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u94fe\u8868\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class LNode {\n  constructor(\n    public key: number,\n    public value: number,\n    public prev: LNode | null = null,\n    public next: LNode | null = null\n  ) {}\n  remove() {\n    if (this.prev) this.prev.next = this.next;\n    if (this.next) this.next.prev = this.prev;\n  }\n}\nclass HashLinkedList {\n  private head = new LNode(0, 0);\n  private last: LNode = this.head;\n  private map = new Map<number, LNode>();\n  private count = 0;\n  constructor(private capacity: number) {}\n  get(key: number): number {\n    const node = this.map.get(key);\n    if (!node) return -1;\n    this.moveLast(node);\n    return node.value;\n  }\n  put(key: number, value: number): void {\n    let node = this.map.get(key);\n    if (!node) {\n      this.map.set(key, (node = new LNode(key, value, this.last)));\n      this.last.next = node;\n      this.last = node;\n      if (++this.count > this.capacity) {\n        const first = this.head.next!;\n        this.map.delete(first.key);\n        this.head.next = first.next!;\n        first.next!.prev = this.head;\n      }\n    } else {\n      node.value = value;\n      this.moveLast(node);\n    }\n  }\n  private moveLast(node: LNode) {\n    if (this.last === node) return;\n    node.remove();\n    node.prev = this.last;\n    this.last.next = node;\n    node.next = null;\n    this.last = node;\n  }\n}\nclass LRUCache {\n  private list: HashLinkedList;\n  constructor(capacity: number) {\n    this.list = new HashLinkedList(capacity);\n  }\n  get(key: number): number {\n    return this.list.get(key);\n  }\n  put(key: number, value: number): void {\n    this.list.put(key, value);\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-04-14"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a94ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a22.09MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class MyHashSet:\n    def __init__(self):\n        self.set = set()\n    def add(self, key: int) -> None:\n        self.set.add(key)\n    def remove(self, key: int) -> None:\n        if self.contains(key):\n            self.set.remove(key)\n    def contains(self, key: int) -> bool:\n        return key in self.set\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-04-14"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a217ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43.05MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528bitmap\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class BitMap:\n    def __init__(self, n: int):\n        self.size = 64\n        self.buckets = [0] * n\n    def add(self, key: int):\n        self.set(key // self.size, key % self.size, True)\n    def remove(self, key: int):\n        self.set(key // self.size, key % self.size, False)\n    def contains(self, key: int):\n        return self.get(key // self.size, key % self.size)\n    def set(self, bucket: int, loc: int, val: bool):\n        if val:\n            self.buckets[bucket] |= 1 << loc\n        else:\n            self.buckets[bucket] = self.buckets[bucket] & ~(1 << loc)\n    def get(self, bucket: int, loc: int):\n        return bool((self.buckets[bucket] >> loc) & 1)\n    \nclass MyHashSet:\n    def __init__(self):\n        self.bm = BitMap(10 ** 6 + 1)\n    def add(self, key: int) -> None:\n        self.bm.add(key)\n    def remove(self, key: int) -> None:\n        self.bm.remove(key)\n    def contains(self, key: int) -> bool:\n        return self.bm.contains(key)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(30758);const i={},l=s.createContext(i);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);