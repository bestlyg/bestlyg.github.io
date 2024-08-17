"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[4938],{65245:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>h,toc:()=>o});var t=r(86070),i=r(25710);const s={},d="692.\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd",h={id:"leetcode/601-700/\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd",title:"692.\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd",description:"\u94fe\u63a5\uff1a692.\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd",source:"@site/docs/leetcode/601-700/692.\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd.md",sourceDirName:"leetcode/601-700",slug:"/leetcode/601-700/\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd",permalink:"/docs/leetcode/601-700/\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:692,frontMatter:{},sidebar:"journal",previous:{title:"690.\u5458\u5de5\u7684\u91cd\u8981\u6027",permalink:"/docs/leetcode/601-700/\u5458\u5de5\u7684\u91cd\u8981\u6027"},next:{title:"693.\u4ea4\u66ff\u4f4d\u4e8c\u8fdb\u5236\u6570",permalink:"/docs/leetcode/601-700/\u4ea4\u66ff\u4f4d\u4e8c\u8fdb\u5236\u6570"}},c={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"692\u524dk\u4e2a\u9ad8\u9891\u5355\u8bcd",children:"692.\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/top-k-frequent-words",children:"692.\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u5178\u6811\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u6876\u6392\u5e8f\u3001\u8ba1\u6570\u3001\u6392\u5e8f\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4e00\u975e\u7a7a\u7684\u5355\u8bcd\u5217\u8868\uff0c\u8fd4\u56de\u524d k \u4e2a\u51fa\u73b0\u6b21\u6570\u6700\u591a\u7684\u5355\u8bcd\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-09"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a144ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.6MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6784\u5efa\u5806\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"class Heap<T> {\n  private arr: T[] = [];\n  get isEmpty() {\n    return this.size === 0;\n  }\n  get size() {\n    return this.arr.length;\n  }\n  get top() {\n    return this.arr[0];\n  }\n  constructor(private compare: (num1: T, num2: T) => number) {}\n  add(num: T): void {\n    this.arr.push(num);\n    this.shiftUp(this.size - 1);\n  }\n  remove(): T {\n    const num = this.arr.shift()!;\n    if (this.size) {\n      this.arr.unshift(this.arr.pop()!);\n      this.shiftDown(0);\n    }\n    return num;\n  }\n  private shiftUp(index: number): void {\n    if (index === 0) return;\n    const parentIndex = (index - 1) >> 1;\n    if (this.compare(this.arr[index], this.arr[parentIndex]) > 0) {\n      [this.arr[index], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[index]];\n      this.shiftUp(parentIndex);\n    }\n  }\n  private shiftDown(index: number): void {\n    let childrenIndex = index * 2 + 1;\n    if (childrenIndex > this.size - 1) return;\n    if (\n      childrenIndex + 1 <= this.size - 1 &&\n      this.compare(this.arr[childrenIndex + 1], this.arr[childrenIndex]) > 0\n    ) {\n      childrenIndex++;\n    }\n    if (this.compare(this.arr[childrenIndex], this.arr[index]) > 0) {\n      [this.arr[childrenIndex], this.arr[index]] = [this.arr[index], this.arr[childrenIndex]];\n      this.shiftDown(childrenIndex);\n    }\n  }\n}\nfunction topKFrequent(words: string[], k: number): string[] {\n  const map: Record<string, number> = {};\n  for (const word of words) map[word] = (map[word] ?? 0) + 1;\n  const strCheck = (str1: string, str2: string) => {\n    let i = 0;\n    while (str1[i] && str1[i] === str2[i]) i++;\n    if (str1[i] && !str2[i]) return -1;\n    else if (!str1[i] && str2[i]) return 1;\n    else return str2.codePointAt(i)! - str1.codePointAt(i)!;\n  };\n  const heap = new Heap<[string, number]>(([str1, v1], [str2, v2]) =>\n    v1 === v2 ? strCheck(str1, str2) : v1 - v2\n  );\n  Object.entries(map).forEach(v => heap.add(v));\n  const ans: string[] = [];\n  while (heap.size && k--) {\n    ans.push(heap.remove()[0]);\n  }\n  return ans;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-20"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a132ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.3MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u5806\u53bb\u83b7\u53d6\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"class Heap<T = number> {\n  private arr: T[] = [];\n  get isEmpty() {\n    return this.size === 0;\n  }\n  get size() {\n    return this.arr.length;\n  }\n  get top() {\n    return this.arr[0];\n  }\n  constructor(private compare: (t1: T, t2: T) => number) {}\n  add(num: T): void {\n    this.arr.push(num);\n    this.shiftUp(this.size - 1);\n  }\n  remove(): T {\n    const num = this.arr.shift()!;\n    if (this.size) {\n      this.arr.unshift(this.arr.pop()!);\n      this.shiftDown(0);\n    }\n    return num;\n  }\n  private shiftUp(index: number): void {\n    if (index === 0) return;\n    const parentIndex = (index - 1) >> 1;\n    if (this.compare(this.arr[index], this.arr[parentIndex]) > 0) {\n      [this.arr[index], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[index]];\n      this.shiftUp(parentIndex);\n    }\n  }\n  private shiftDown(index: number): void {\n    let childrenIndex = index * 2 + 1;\n    if (childrenIndex > this.size - 1) return;\n    if (\n      childrenIndex + 1 <= this.size - 1 &&\n      this.compare(this.arr[childrenIndex + 1], this.arr[childrenIndex]) > 0\n    ) {\n      childrenIndex++;\n    }\n    if (this.compare(this.arr[childrenIndex], this.arr[index]) > 0) {\n      [this.arr[childrenIndex], this.arr[index]] = [this.arr[index], this.arr[childrenIndex]];\n      this.shiftDown(childrenIndex);\n    }\n  }\n  *[Symbol.iterator](): IterableIterator<T> {\n    for (const t of this.arr) {\n      yield t;\n    }\n  }\n}\nfunction topKFrequent(words: string[], k: number): string[] {\n  const map: Record<string, number> = {};\n  for (const word of words) map[word] = (map[word] ?? 0) + 1;\n  const chartToNumber = (char: string) => char.codePointAt(0)! - 'a'.codePointAt(0)!;\n  const heap = new Heap<[string, number]>(([k1, v1], [k2, v2]) => {\n    if (v1 !== v2) return v1 - v2;\n    let i1 = 0;\n    const end1 = k1.length;\n    let i2 = 0;\n    const end2 = k2.length;\n    for (; i1 < end1 && i2 < end2; i1++, i2++)\n      if (k1[i1] !== k2[i2]) return chartToNumber(k2[i2]) - chartToNumber(k1[i1]);\n    if (i1 === end1) return 1;\n    else if (i2 === end2) return -1;\n    else return 0;\n  });\n  for (const data of Object.entries(map)) heap.add(data);\n  const ans: string[] = [];\n  while (heap.size !== 0 && k--) ans.push(heap.remove()[0]);\n  return ans;\n}\n"})})]})}function l(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>d,x:()=>h});var t=r(30758);const i={},s=t.createContext(i);function d(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function h(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);