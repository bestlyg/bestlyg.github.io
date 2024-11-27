"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[57205],{61028:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"leetcode/601-700/\u8bbe\u8ba1\u5faa\u73af\u961f\u5217","title":"622.\u8bbe\u8ba1\u5faa\u73af\u961f\u5217","description":"\u94fe\u63a5\uff1a622.\u8bbe\u8ba1\u5faa\u73af\u961f\u5217","source":"@site/docs/leetcode/601-700/622.\u8bbe\u8ba1\u5faa\u73af\u961f\u5217.md","sourceDirName":"leetcode/601-700","slug":"/leetcode/601-700/\u8bbe\u8ba1\u5faa\u73af\u961f\u5217","permalink":"/docs/leetcode/601-700/\u8bbe\u8ba1\u5faa\u73af\u961f\u5217","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":622,"frontMatter":{},"sidebar":"journal","previous":{"title":"621.\u4efb\u52a1\u8c03\u5ea6\u5668","permalink":"/docs/leetcode/601-700/\u4efb\u52a1\u8c03\u5ea6\u5668"},"next":{"title":"623.\u5728\u4e8c\u53c9\u6811\u4e2d\u589e\u52a0\u4e00\u884c","permalink":"/docs/leetcode/601-700/\u5728\u4e8c\u53c9\u6811\u4e2d\u589e\u52a0\u4e00\u884c"}}');var t=r(86070),s=r(31503);const i={},a="622.\u8bbe\u8ba1\u5faa\u73af\u961f\u5217",u={},c=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"622\u8bbe\u8ba1\u5faa\u73af\u961f\u5217",children:"622.\u8bbe\u8ba1\u5faa\u73af\u961f\u5217"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/design-circular-queue",children:"622.\u8bbe\u8ba1\u5faa\u73af\u961f\u5217"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u961f\u5217\u3001\u6570\u7ec4\u3001\u94fe\u8868",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bbe\u8ba1\u4f60\u7684\u5faa\u73af\u961f\u5217\u5b9e\u73b0\u3002 \u5faa\u73af\u961f\u5217\u662f\u4e00\u79cd\u7ebf\u6027\u6570\u636e\u7ed3\u6784\uff0c\u5176\u64cd\u4f5c\u8868\u73b0\u57fa\u4e8e FIFO\uff08\u5148\u8fdb\u5148\u51fa\uff09\u539f\u5219\u5e76\u4e14\u961f\u5c3e\u88ab\u8fde\u63a5\u5728\u961f\u9996\u4e4b\u540e\u4ee5\u5f62\u6210\u4e00\u4e2a\u5faa\u73af\u3002\u5b83\u4e5f\u88ab\u79f0\u4e3a\u201c\u73af\u5f62\u7f13\u51b2\u5668\u201d\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-14"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a172ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.1MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528 js \u7279\u6027\u76f4\u63a5\u6784\u5efa\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function copyRandomList(head: Node | null): Node | null {\n  if (head === null) return null;\n  let p: Node | null = head;\n  while (p !== null) {\n    p.next = new Node(p.val, p.next, p.random);\n    p = p.next.next;\n  }\n  p = head.next;\n  while (p) {\n    if (p.random) p.random = p.random!.next;\n    p = p.next?.next ?? null;\n  }\n  const newHead: Node | null = head.next;\n  p = head;\n  while (p) {\n    const q: Node = p.next!;\n    p.next = q.next;\n    q.next = q.next?.next ?? null;\n    p = p.next;\n  }\n  return newHead;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-14"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a152ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.4MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u521b\u5efa\u5934\u5c3e\u6307\u9488\u63a7\u5236\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class MyCircularQueue {\n  private arr: number[];\n  private head = 0;\n  private rear = 0;\n  private count = 0;\n  constructor(private k: number) {\n    this.arr = new Array(k);\n  }\n  enQueue(value: number): boolean {\n    if (this.isFull()) return false;\n    this.arr[this.rear] = value;\n    this.rear = (this.rear + 1) % this.k;\n    this.count++;\n    return true;\n  }\n  deQueue(): boolean {\n    if (this.isEmpty()) return false;\n    this.head = (this.head + 1) % this.k;\n    this.count--;\n    return true;\n  }\n  Front(): number {\n    if (this.isEmpty()) return -1;\n    return this.arr[this.head];\n  }\n  Rear(): number {\n    if (this.isEmpty()) return -1;\n    return this.arr[this.rear === 0 ? this.k - 1 : this.rear - 1];\n  }\n  isEmpty(): boolean {\n    return this.count === 0;\n  }\n  isFull(): boolean {\n    return this.count === this.k;\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-03"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a20ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.3MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class MyCircularQueue {\n   public:\n    int head, tail, *list, n;\n    MyCircularQueue(int k) : head(0), tail(0), n(k + 1) {\n        list = ((int *)malloc(sizeof(int) * n));\n    }\n    ~MyCircularQueue() { free(list); }\n    bool enQueue(int value) {\n        if (isFull()) return 0;\n        list[tail] = value;\n        tail = (tail + 1) % n;\n        return 1;\n    }\n    bool deQueue() {\n        if (isEmpty()) return 0;\n        head = (head + 1) % n;\n        return 1;\n    }\n    int Front() {\n        if (isEmpty()) return -1;\n        return list[head];\n    }\n    int Rear() {\n        if (isEmpty()) return -1;\n        return list[tail == 0 ? n - 1 : tail - 1];\n    }\n    bool isEmpty() { return head == tail; }\n    bool isFull() { return (tail + 1) % n == head; }\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-08-02"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.3MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","queue\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"struct MyCircularQueue {\n    list: Vec<i32>,\n    max: usize,\n    head: usize,\n    rear: usize,\n}\nimpl MyCircularQueue {\n    fn new(k: i32) -> Self {\n        let max = (k + 1) as usize;\n        let mut list = Vec::with_capacity(max);\n        for _ in 0..max {\n            list.push(0);\n        }\n        MyCircularQueue {\n            max,\n            list,\n            head: 0,\n            rear: 0,\n        }\n    }\n    fn en_queue(&mut self, value: i32) -> bool {\n        if self.is_full() {\n            false\n        } else {\n            self.list[self.rear] = value;\n            self.rear = (self.rear + 1) % self.max;\n            true\n        }\n    }\n    fn de_queue(&mut self) -> bool {\n        if self.is_empty() {\n            false\n        } else {\n            self.head = (self.head + 1) % self.max;\n            true\n        }\n    }\n    fn front(&self) -> i32 {\n        if self.is_empty() {\n            -1\n        } else {\n            *self.list.get(self.head).unwrap()\n        }\n    }\n    fn rear(&self) -> i32 {\n        if self.is_empty() {\n            -1\n        } else {\n            let rear = if self.rear == 0 {\n                self.max - 1\n            } else {\n                self.rear - 1\n            };\n            *self.list.get(rear).unwrap()\n        }\n    }\n    fn is_empty(&self) -> bool {\n        self.rear == self.head\n    }\n    fn is_full(&self) -> bool {\n        (self.rear + 1) % self.max == self.head\n    }\n}\n"})})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},31503:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var l=r(30758);const t={},s=l.createContext(t);function i(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);