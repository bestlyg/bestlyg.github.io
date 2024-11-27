"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[33661],{18956:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"\u6570\u636e\u7ed3\u6784/\u5806/\u4e8c\u53c9\u5806","title":"\u4e8c\u53c9\u5806(BinaryHeap)","description":"\u4f7f\u7528\u5b8c\u5168\u4e8c\u53c9\u6811\u5b9e\u73b0\u5806\u7ed3\u6784\uff0c\u53c8\u79f0\u5b8c\u5168\u4e8c\u53c9\u5806\uff0c\u4e00\u822c\u4f7f\u7528\u6570\u7ec4\u5b9e\u73b0","source":"@site/docs/\u6570\u636e\u7ed3\u6784/\u5806/\u4e8c\u53c9\u5806.mdx","sourceDirName":"\u6570\u636e\u7ed3\u6784/\u5806","slug":"/\u6570\u636e\u7ed3\u6784/\u5806/\u4e8c\u53c9\u5806","permalink":"/docs/\u6570\u636e\u7ed3\u6784/\u5806/\u4e8c\u53c9\u5806","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"\u5806(Heap)","permalink":"/docs/\u6570\u636e\u7ed3\u6784/\u5806/"},"next":{"title":"\u5e76\u67e5\u96c6(UnionFindSet)","permalink":"/docs/\u6570\u636e\u7ed3\u6784/\u5e76\u67e5\u96c6/"}}');var s=e(86070),r=e(31503);const h="import { Comparator, throwError, ERROR_EMPTY_ELEMENT, ErrorEnum } from '@/shared';\n\nexport interface IBinaryHeap<T> {\n    /* \u5f53\u524d\u94fe\u8868\u542b\u6709\u7684\u8282\u70b9\u6570  */\n    size: number;\n    /* \u83b7\u53d6\u5806\u9876\u5143\u7d20 */\n    top(): T;\n    /* \u5f80\u5806\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u5143\u7d20 */\n    add(val: T): void;\n    /* \u4ece\u5806\u9876\u5220\u9664\u4e00\u4e2a\u5143\u7d20 */\n    remove(): T;\n}\nexport class BinaryHeap<T> implements IBinaryHeap<T> {\n    get size() {\n        return this.list.length;\n    }\n    private list: T[] = [];\n    constructor(private compare: Comparator<T>) {}\n    top() {\n        this.checkRange();\n        return this.list[0];\n    }\n    add(val: T): void {\n        this.list.push(val);\n        this.shiftUp(this.size - 1);\n    }\n    remove(): T {\n        this.checkRange();\n        const val = this.list.shift()!;\n        if (this.size !== 0) {\n            this.list.unshift(this.list.pop()!);\n            this.shiftDown(0);\n        }\n        return val;\n    }\n    private shiftUp(index: number): void {\n        if (index === 0) return;\n        const parentIndex = (index - 1) >> 1;\n        if (this.compare(this.list[index], this.list[parentIndex]) > 0) {\n            [this.list[index], this.list[parentIndex]] = [this.list[parentIndex], this.list[index]];\n            this.shiftUp(parentIndex);\n        }\n    }\n    private shiftDown(index: number): void {\n        let childIndex = index * 2 + 1;\n        if (childIndex >= this.size) return;\n        if (\n            childIndex + 1 < this.size &&\n            this.compare(this.list[childIndex + 1], this.list[childIndex]) > 0\n        )\n            childIndex++;\n        if (this.compare(this.list[childIndex], this.list[index]) > 0) {\n            [this.list[index], this.list[childIndex]] = [this.list[childIndex], this.list[index]];\n            this.shiftDown(childIndex);\n        }\n    }\n    private checkRange() {\n        if (this.size === 0) throwError(ERROR_EMPTY_ELEMENT, ErrorEnum.range);\n    }\n}\n";var l=e(21675);const a={},d="\u4e8c\u53c9\u5806(BinaryHeap)",c={},o=[{value:"\u6838\u5fc3\u4ee3\u7801",id:"\u6838\u5fc3\u4ee3\u7801",level:2}];function p(n){const i={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"\u4e8c\u53c9\u5806binaryheap",children:"\u4e8c\u53c9\u5806(BinaryHeap)"})}),"\n",(0,s.jsx)(i.p,{children:"\u4f7f\u7528\u5b8c\u5168\u4e8c\u53c9\u6811\u5b9e\u73b0\u5806\u7ed3\u6784\uff0c\u53c8\u79f0\u5b8c\u5168\u4e8c\u53c9\u5806\uff0c\u4e00\u822c\u4f7f\u7528\u6570\u7ec4\u5b9e\u73b0"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u5bf9\u4e8e\u6839\u8282\u70b9\u4e0b\u6807\u662f 0 \u7684\u5143\u7d20"}),"\n",(0,s.jsx)(i.li,{children:"\u7236\u8282\u70b9\u4e3a(i-1)>>1"}),"\n",(0,s.jsx)(i.li,{children:"\u5de6\u5b50\u8282\u70b9\u4e3a 2*i+1"}),"\n",(0,s.jsx)(i.li,{children:"\u53f3\u5b50\u8282\u70b9\u4e3a 2*i+2"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u6838\u5fc3\u4ee3\u7801",children:"\u6838\u5fc3\u4ee3\u7801"}),"\n",(0,s.jsx)(l.A,{language:"tsx",children:h})]})}function x(n={}){const{wrapper:i}={...(0,r.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}}}]);