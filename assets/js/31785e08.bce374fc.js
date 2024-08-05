"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[16948],{64266:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var r=t(86070),i=t(25710);const s={},c="1046.\u6700\u540e\u4e00\u5757\u77f3\u5934\u7684\u91cd\u91cf",o={id:"leetcode/1001-1100/\u6700\u540e\u4e00\u5757\u77f3\u5934\u7684\u91cd\u91cf",title:"1046.\u6700\u540e\u4e00\u5757\u77f3\u5934\u7684\u91cd\u91cf",description:"\u94fe\u63a5\uff1a1046.\u6700\u540e\u4e00\u5757\u77f3\u5934\u7684\u91cd\u91cf",source:"@site/docs/leetcode/1001-1100/1046.\u6700\u540e\u4e00\u5757\u77f3\u5934\u7684\u91cd\u91cf.md",sourceDirName:"leetcode/1001-1100",slug:"/leetcode/1001-1100/\u6700\u540e\u4e00\u5757\u77f3\u5934\u7684\u91cd\u91cf",permalink:"/docs/leetcode/1001-1100/\u6700\u540e\u4e00\u5757\u77f3\u5934\u7684\u91cd\u91cf",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1046,frontMatter:{},sidebar:"journal",previous:{title:"1044.\u6700\u957f\u91cd\u590d\u5b50\u4e32",permalink:"/docs/leetcode/1001-1100/\u6700\u957f\u91cd\u590d\u5b50\u4e32"},next:{title:"1047.\u5220\u9664\u5b57\u7b26\u4e32\u4e2d\u7684\u6240\u6709\u76f8\u90bb\u91cd\u590d\u9879",permalink:"/docs/leetcode/1001-1100/\u5220\u9664\u5b57\u7b26\u4e32\u4e2d\u7684\u6240\u6709\u76f8\u90bb\u91cd\u590d\u9879"}},d={},h=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"1046\u6700\u540e\u4e00\u5757\u77f3\u5934\u7684\u91cd\u91cf",children:"1046.\u6700\u540e\u4e00\u5757\u77f3\u5934\u7684\u91cd\u91cf"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/last-stone-weight",children:"1046.\u6700\u540e\u4e00\u5757\u77f3\u5934\u7684\u91cd\u91cf"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6709\u4e00\u5806\u77f3\u5934\uff0c\u6bcf\u5757\u77f3\u5934\u7684\u91cd\u91cf\u90fd\u662f\u6b63\u6574\u6570\u3002\u6700\u540e\uff0c\u6700\u591a\u53ea\u4f1a\u5269\u4e0b\u4e00\u5757\u77f3\u5934\u3002\u8fd4\u56de\u6b64\u77f3\u5934\u7684\u91cd\u91cf\u3002\u5982\u679c\u6ca1\u6709\u77f3\u5934\u5269\u4e0b\uff0c\u5c31\u8fd4\u56de 0\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-12-30"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6784\u5efa\u5806\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"var lastStoneWeight = function (stones) {\n  const pq = new MaxPriorityQueue();\n  for (const stone of stones) {\n    pq.enqueue('x', stone);\n  }\n  while (pq.size() > 1) {\n    const a = pq.dequeue()['priority'];\n    const b = pq.dequeue()['priority'];\n    if (a > b) {\n      pq.enqueue('x', a - b);\n    }\n  }\n  return pq.isEmpty() ? 0 : pq.dequeue()['priority'];\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-11"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.1MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6784\u5efa\u5806\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class Heap<T = number> {\n  private arr: T[] = [];\n  get isEmpty() {\n    return this.size === 0;\n  }\n  get size() {\n    return this.arr.length;\n  }\n  get top() {\n    return this.arr[0];\n  }\n  constructor(private compare: (t1: T, t2: T) => number) {}\n  add(num: T): void {\n    this.arr.push(num);\n    this.shiftUp(this.size - 1);\n  }\n  remove(): T {\n    const num = this.arr.shift()!;\n    if (this.size) {\n      this.arr.unshift(this.arr.pop()!);\n      this.shiftDown(0);\n    }\n    return num;\n  }\n  private shiftUp(index: number): void {\n    if (index === 0) return;\n    const parentIndex = (index - 1) >> 1;\n    if (this.compare(this.arr[index], this.arr[parentIndex]) > 0) {\n      [this.arr[index], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[index]];\n      this.shiftUp(parentIndex);\n    }\n  }\n  private shiftDown(index: number): void {\n    let childrenIndex = index * 2 + 1;\n    if (childrenIndex > this.size - 1) return;\n    if (\n      childrenIndex + 1 <= this.size - 1 &&\n      this.compare(this.arr[childrenIndex + 1], this.arr[childrenIndex]) > 0\n    ) {\n      childrenIndex++;\n    }\n    if (this.compare(this.arr[childrenIndex], this.arr[index]) > 0) {\n      [this.arr[childrenIndex], this.arr[index]] = [this.arr[index], this.arr[childrenIndex]];\n      this.shiftDown(childrenIndex);\n    }\n  }\n  *[Symbol.iterator](): IterableIterator<T> {\n    for (const t of this.arr) {\n      yield t;\n    }\n  }\n}\nfunction lastStoneWeight(stones: number[]): number {\n  const heap = new Heap((t1, t2) => t1 - t2);\n  stones.forEach(v => heap.add(v));\n  while (heap.size > 1) {\n    const s1 = heap.remove();\n    const s2 = heap.remove();\n    if (s1 === s2) continue;\n    heap.add(Math.abs(s1 - s2));\n  }\n  return heap.size === 0 ? 0 : heap.top;\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(30758);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);