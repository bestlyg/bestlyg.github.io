"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[47944],{3874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var s=t(86070),i=t(25710);const l={},d="146.LRU\u7f13\u5b58",r={id:"leetcode/101-200/LRU\u7f13\u5b58",title:"146.LRU\u7f13\u5b58",description:"\u94fe\u63a5\uff1a146.LRU\u7f13\u5b58",source:"@site/docs/leetcode/101-200/146.LRU\u7f13\u5b58.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/LRU\u7f13\u5b58",permalink:"/docs/leetcode/101-200/LRU\u7f13\u5b58",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:146,frontMatter:{},sidebar:"journal",previous:{title:"145.\u4e8c\u53c9\u6811\u7684\u540e\u5e8f\u904d\u5386",permalink:"/docs/leetcode/101-200/\u4e8c\u53c9\u6811\u7684\u540e\u5e8f\u904d\u5386"},next:{title:"147.\u5bf9\u94fe\u8868\u8fdb\u884c\u63d2\u5165\u6392\u5e8f",permalink:"/docs/leetcode/101-200/\u5bf9\u94fe\u8868\u8fdb\u884c\u63d2\u5165\u6392\u5e8f"}},o={},c=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"146lru\u7f13\u5b58",children:"146.LRU\u7f13\u5b58"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/lru-cache",children:"146.LRU\u7f13\u5b58"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u54c8\u5e0c\u8868\u3001\u94fe\u8868\u3001\u53cc\u5411\u94fe\u8868",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6839\u636e\u9006\u6ce2\u5170\u8868\u793a\u6cd5\uff0c\u6c42\u8868\u8fbe\u5f0f\u7684\u503c\u3002\u6709\u6548\u7684\u8fd0\u7b97\u7b26\u5305\u62ec +, -, *, / \u3002\u6bcf\u4e2a\u8fd0\u7b97\u5bf9\u8c61\u53ef\u4ee5\u662f\u6574\u6570\uff0c\u4e5f\u53ef\u4ee5\u662f\u53e6\u4e00\u4e2a\u9006\u6ce2\u5170\u8868\u8fbe\u5f0f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-25"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a228ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a47.8MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u54c8\u5e0c\u6620\u5c04\u50a8\u5b58\u952e\u503c\u5bf9\uff0c\u503c\u4e3a\u94fe\u8868\u8282\u70b9\uff0c\u5229\u7528\u94fe\u8868\u7684\u589e\u5220\u63a7\u5236\u590d\u6742\u5ea6 O(1)\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class LinkedNode {\n  public prev: LinkedNode = this;\n  public next: LinkedNode = this;\n  constructor(public key: number, public val: number, prev?: LinkedNode, next?: LinkedNode) {\n    if (prev !== undefined) this.prev = prev;\n    if (next !== undefined) this.next = next;\n  }\n}\nclass LRUCache {\n  cache = new Map<number, LinkedNode>();\n  firstNode: LinkedNode | null = null;\n  get lastNode(): LinkedNode | null {\n    return this.firstNode ? this.firstNode.prev : null;\n  }\n  get size(): number {\n    return this.cache.size;\n  }\n  constructor(public capacity: number) {}\n  get(key: number): number {\n    if (this.capacity === 0) return -1;\n    if (this.firstNode === null) return -1;\n    const node = this.cache.get(key);\n    if (node === undefined) return -1;\n    const { key: k, val: v } = node;\n    this.put(k, v);\n    return v;\n  }\n  put(key: number, value: number): void {\n    if (this.capacity === 0) {\n    } else if (this.firstNode === null || this.lastNode === null) {\n      const node = new LinkedNode(key, value);\n      this.cache.set(key, node);\n      this.firstNode = node;\n    } else if (this.cache.has(key)) {\n      const node: LinkedNode = this.cache.get(key)!;\n      node.val = value;\n      if (node === this.firstNode) this.firstNode = node.next;\n      node.prev.next = node.next;\n      node.next.prev = node.prev;\n      node.prev = this.lastNode;\n      node.next = this.firstNode;\n      this.lastNode.next = node;\n      this.firstNode.prev = node;\n    } else if (this.size < this.capacity) {\n      const node = new LinkedNode(key, value, this.lastNode, this.firstNode);\n      this.cache.set(key, node);\n      this.lastNode.next = node;\n      this.firstNode.prev = node;\n    } else {\n      const delNode = this.firstNode;\n      this.firstNode = delNode.next;\n      this.firstNode.prev = delNode.prev;\n      this.cache.delete(delNode.key);\n      this.put(key, value);\n    }\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-24"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a544ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a73.81MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u94fe\u8868\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Node:\n        def __init__(self, key=0, val: int = 0, prev=None, next=None):\n            self.key = key\n            self.val = val\n            self.prev = prev\n            self.next = next\n    \n        def append(self, prev):\n            next = prev.next\n            prev.next, next.prev, self.prev, self.next = self, self, prev, next\n    \n        def remove(self):\n            if self.prev:\n                self.prev.next, self.next.prev = self.next, self.prev\n    \n    \n    class LRUCache:\n        def __init__(self, capacity: int):\n            self.cache = {}\n            self.capacity = capacity\n            self.size = 0\n            self.head = Node()\n            self.tail = Node()\n            self.head.next = self.tail\n            self.tail.prev = self.head\n    \n        def get(self, key: int) -> int:\n            if key not in self.cache:\n                return -1\n            node = self.cache[key]\n            node.remove()\n            node.append(self.head)\n            return node.val\n    \n        def put(self, key: int, value: int) -> None:\n            if key not in self.cache:\n                self.cache[key] = Node(key, value)\n                self.size += 1\n                if self.size > self.capacity:\n                    self.size -= 1\n                    del self.cache[self.tail.prev.key]\n                    self.tail.prev.remove()\n            node = self.cache[key]\n            node.val = value\n            node.remove()\n            node.append(self.head)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var s=t(30758);const i={},l=s.createContext(i);function d(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);