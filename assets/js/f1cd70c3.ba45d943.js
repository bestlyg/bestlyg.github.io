"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[87154],{90697:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"leetcode/201-300/\u5b58\u5728\u91cd\u590d\u5143\u7d20III","title":"220.\u5b58\u5728\u91cd\u590d\u5143\u7d20III","description":"\u94fe\u63a5\uff1a220.\u5b58\u5728\u91cd\u590d\u5143\u7d20III","source":"@site/docs/leetcode/201-300/220.\u5b58\u5728\u91cd\u590d\u5143\u7d20III.md","sourceDirName":"leetcode/201-300","slug":"/leetcode/201-300/\u5b58\u5728\u91cd\u590d\u5143\u7d20III","permalink":"/docs/leetcode/201-300/\u5b58\u5728\u91cd\u590d\u5143\u7d20III","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":220,"frontMatter":{},"sidebar":"journal","previous":{"title":"219.\u5b58\u5728\u91cd\u590d\u5143\u7d20II","permalink":"/docs/leetcode/201-300/\u5b58\u5728\u91cd\u590d\u5143\u7d20II"},"next":{"title":"221.\u6700\u5927\u6b63\u65b9\u5f62","permalink":"/docs/leetcode/201-300/\u6700\u5927\u6b63\u65b9\u5f62"}}');var s=r(25105),i=r(8556);const l={},a="220.\u5b58\u5728\u91cd\u590d\u5143\u7d20III",c={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"220\u5b58\u5728\u91cd\u590d\u5143\u7d20iii",children:"220.\u5b58\u5728\u91cd\u590d\u5143\u7d20III"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/contains-duplicate-iii",children:"220.\u5b58\u5728\u91cd\u590d\u5143\u7d20III"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6876\u6392\u5e8f\u3001\u6709\u5e8f\u96c6\u5408\u3001\u6392\u5e8f\u3001\u6ed1\u52a8\u7a97\u53e3",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \u548c\u4e24\u4e2a\u6574\u6570 \xa0k \u548c t \u3002\u8bf7\u4f60\u5224\u65ad\u662f\u5426\u5b58\u5728 \u4e24\u4e2a\u4e0d\u540c\u4e0b\u6807 i \u548c j\uff0c\u4f7f\u5f97 \xa0abs(nums[i] - nums[j]) <= t \uff0c\u540c\u65f6\u53c8\u6ee1\u8db3 abs(i - j) <= k \u3002\u5982\u679c\u5b58\u5728\u5219\u8fd4\u56de true\uff0c\u4e0d\u5b58\u5728\u8fd4\u56de false\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-15"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a864ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46.3MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9488\u5bf9\u6bcf\u6b21\u7a97\u53e3\u8fdb\u884c\u4e8c\u5206\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"class SortSet {\n  set = new Set<number>();\n  initSuccess = true;\n  constructor(public arr: number[], public k: number) {\n    arr.sort((a, b) => a - b);\n    if (this.check()) {\n      this.initSuccess = false;\n      return;\n    }\n    for (const num of arr) {\n      if (this.set.has(num)) {\n        this.initSuccess = false;\n        break;\n      }\n      this.set.add(num);\n    }\n  }\n  add(num: number): boolean {\n    if (this.set.has(num)) return false;\n    let l = 0;\n    let r = this.arr.length - 1;\n    while (l < r) {\n      const mid = (l + r) >> 1;\n      if (this.arr[mid] >= num) r = mid;\n      else l = mid + 1;\n    }\n    this.arr.splice(this.arr[l] < num ? this.arr.length : l, 0, num);\n    this.set.add(num);\n    return true;\n  }\n  del(num: number): void {\n    let l = 0;\n    let r = this.arr.length - 1;\n    let mid!: number;\n    while (l <= r) {\n      mid = (l + r) >> 1;\n      if (this.arr[mid] > num) r = mid - 1;\n      else if (this.arr[mid] < num) l = mid + 1;\n      else break;\n    }\n    this.arr.splice(mid, 1);\n    this.set.delete(num);\n  }\n  check(): boolean {\n    for (let i = 0; i < this.arr.length - 1; i++) {\n      if (this.arr[i + 1] - this.arr[i] <= this.k) return true;\n    }\n    return false;\n  }\n}\nfunction containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {\n  const n = nums.length;\n  const set = new SortSet(nums.slice(0, k + 1), t);\n  if (!set.initSuccess) return true;\n  for (let i = k + 1; i < n; i++) {\n    set.del(nums[i - k - 1]);\n    if (!set.add(nums[i])) return true;\n    if (set.check()) return true;\n  }\n  return false;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-17"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a176ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a56.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528 map \u50a8\u5b58\u540e\u6392\u5e8f\u8ba1\u7b97\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {\n  if (k === 0) return false;\n  const map = new Map<number, number[]>();\n  for (let i = 0, len = nums.length; i < len; i++) {\n    const num = nums[i];\n    let arr = map.get(num);\n    if (!arr) map.set(num, (arr = []));\n    arr.push(i);\n  }\n  const data = [...map.entries()].sort(([num1], [num2]) => num1 - num2);\n  const check = (arr1: number[], arr2: number[]) =>\n    (arr1[arr1.length] < arr2[0] && Math.abs(arr1[arr1.length] - arr2[0]) <= k) ||\n    (arr2[arr2.length] < arr1[0] && Math.abs(arr2[arr2.length] - arr1[0]) <= k) ||\n    arr1.some(i1 => arr2.some(i2 => Math.abs(i1 - i2) <= k));\n  for (let i = 0, l = data.length; i < l; i++) {\n    const arr1 = data[i][1];\n    if (arr1.some((v, i, arr) => (i === 0 ? false : v - arr[i - 1] <= k))) return true;\n    let index = i - 1;\n    while (index >= 0 && data[i][0] - data[index][0] <= t)\n      if (check(arr1, data[index--][1])) return true;\n  }\n  return false;\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},8556:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>a});var t=r(58101);const s={},i=t.createContext(s);function l(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);