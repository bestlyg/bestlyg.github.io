"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[30682],{89039:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"leetcode/LCR/LCR159.\u5e93\u5b58\u7ba1\u7406III","title":"LCR159.\u5e93\u5b58\u7ba1\u7406III","description":"\u94fe\u63a5\uff1aLCR159.\u5e93\u5b58\u7ba1\u7406III","source":"@site/docs/leetcode/LCR/LCR159.\u5e93\u5b58\u7ba1\u7406III.md","sourceDirName":"leetcode/LCR","slug":"/leetcode/LCR/LCR159.\u5e93\u5b58\u7ba1\u7406III","permalink":"/docs/leetcode/LCR/LCR159.\u5e93\u5b58\u7ba1\u7406III","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"LCR157.\u5957\u9910\u5185\u5546\u54c1\u7684\u6392\u5217\u987a\u5e8f","permalink":"/docs/leetcode/LCR/LCR157.\u5957\u9910\u5185\u5546\u54c1\u7684\u6392\u5217\u987a\u5e8f"},"next":{"title":"LCR161.\u8fde\u7eed\u5929\u6570\u7684\u6700\u9ad8\u9500\u552e\u989d","permalink":"/docs/leetcode/LCR/LCR161.\u8fde\u7eed\u5929\u6570\u7684\u6700\u9ad8\u9500\u552e\u989d"}}');var i=r(25105),s=r(8556);const c={},a="LCR159.\u5e93\u5b58\u7ba1\u7406III",d={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"lcr159\u5e93\u5b58\u7ba1\u7406iii",children:"LCR159.\u5e93\u5b58\u7ba1\u7406III"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof",children:"LCR159.\u5e93\u5b58\u7ba1\u7406III"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u5206\u6cbb\u3001\u5feb\u901f\u9009\u62e9\u3001\u6392\u5e8f\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8f93\u5165\u6574\u6570\u6570\u7ec4 arr \uff0c\u627e\u51fa\u5176\u4e2d\u6700\u5c0f\u7684 k \u4e2a\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-09"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a228ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.5MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6784\u5efa\u5806\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"class Heap {\n  private arr: number[] = [];\n  get isEmpty() {\n    return this.size === 0;\n  }\n  get size() {\n    return this.arr.length;\n  }\n  constructor(private compare: (num1: number, num2: number) => number) {}\n  add(num: number): void {\n    this.arr.push(num);\n    this.shiftUp(this.size - 1);\n  }\n  remove(): number {\n    const num = this.arr.shift();\n    this.arr.unshift(this.arr.pop()!);\n    this.shiftDown(0);\n    return num;\n  }\n  private shiftUp(index: number): void {\n    const parentIndex = (index - 1) >> 1;\n    if (this.compare(this.arr[index], this.arr[parentIndex]) > 0) {\n      [this.arr[index], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[index]];\n      this.shiftUp(parentIndex);\n    }\n  }\n  private shiftDown(index: number): void {\n    let childrenIndex = index * 2 + 1;\n    if (this.compare(this.arr[childrenIndex + 1], this.arr[childrenIndex]) > 0) {\n      childrenIndex++;\n    }\n    if (this.compare(this.arr[childrenIndex], this.arr[index]) > 0) {\n      [this.arr[childrenIndex], this.arr[index]] = [this.arr[index], this.arr[childrenIndex]];\n      this.shiftDown(childrenIndex);\n    }\n  }\n}\nfunction getLeastNumbers(arr: number[], k: number): number[] {\n  const ans: number[] = [];\n  const heap = new Heap((num1, num2) => num2 - num1);\n  arr.forEach(v => heap.add(v));\n  while (k--) ans.push(heap.remove());\n  return ans;\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8556:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>a});var t=r(58101);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);