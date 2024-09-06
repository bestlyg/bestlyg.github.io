"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[75096],{90650:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var r=s(86070),i=s(25710);const t={},c="630.\u8bfe\u7a0b\u8868III",l={id:"leetcode/601-700/\u8bfe\u7a0b\u8868III",title:"630.\u8bfe\u7a0b\u8868III",description:"\u94fe\u63a5\uff1a630.\u8bfe\u7a0b\u8868III",source:"@site/docs/leetcode/601-700/630.\u8bfe\u7a0b\u8868III.md",sourceDirName:"leetcode/601-700",slug:"/leetcode/601-700/\u8bfe\u7a0b\u8868III",permalink:"/docs/leetcode/601-700/\u8bfe\u7a0b\u8868III",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:630,frontMatter:{},sidebar:"journal",previous:{title:"629.K\u4e2a\u9006\u5e8f\u5bf9\u6570\u7ec4",permalink:"/docs/leetcode/601-700/K\u4e2a\u9006\u5e8f\u5bf9\u6570\u7ec4"},next:{title:"633.\u5e73\u65b9\u6570\u4e4b\u548c",permalink:"/docs/leetcode/601-700/\u5e73\u65b9\u6570\u4e4b\u548c"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"630\u8bfe\u7a0b\u8868iii",children:"630.\u8bfe\u7a0b\u8868III"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/course-schedule-iii",children:"630.\u8bfe\u7a0b\u8868III"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u6392\u5e8f\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4f60\u6700\u591a\u53ef\u4ee5\u4fee\u8bfb\u7684\u8bfe\u7a0b\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-14"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a180ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a47.4MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6309\u7167\u7ed3\u675f\u65f6\u95f4\u6392\u5e8f\u540e\uff0c\u6bcf\u6b21\u53d6\u51fa\u503c\u5b58\u5165\u5927\u6839\u5806\uff0c\u7ef4\u62a4\u5f53\u524d\u9700\u8981\u7684\u603b\u65f6\u95f4 sum\uff0c\u5f53 sum \u5927\u4e8e\u7ed3\u675f\u65f6\u95f4\u65f6\uff0c\u79fb\u9664\u5806\u9876\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"class Heap<T = number> {\n  private arr: T[] = [];\n  get isEmpty() {\n    return this.size === 0;\n  }\n  get size() {\n    return this.arr.length;\n  }\n  get top() {\n    return this.arr[0];\n  }\n  constructor(private compare: (t1: T, t2: T) => number) {}\n  add(num: T): void {\n    this.arr.push(num);\n    this.shiftUp(this.size - 1);\n  }\n  remove(): T {\n    const num = this.arr.shift()!;\n    if (this.size) {\n      this.arr.unshift(this.arr.pop()!);\n      this.shiftDown(0);\n    }\n    return num;\n  }\n  private shiftUp(index: number): void {\n    if (index === 0) return;\n    const parentIndex = (index - 1) >> 1;\n    if (this.compare(this.arr[index], this.arr[parentIndex]) > 0) {\n      [this.arr[index], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[index]];\n      this.shiftUp(parentIndex);\n    }\n  }\n  private shiftDown(index: number): void {\n    let childrenIndex = index * 2 + 1;\n    if (childrenIndex > this.size - 1) return;\n    if (\n      childrenIndex + 1 <= this.size - 1 &&\n      this.compare(this.arr[childrenIndex + 1], this.arr[childrenIndex]) > 0\n    ) {\n      childrenIndex++;\n    }\n    if (this.compare(this.arr[childrenIndex], this.arr[index]) > 0) {\n      [this.arr[childrenIndex], this.arr[index]] = [this.arr[index], this.arr[childrenIndex]];\n      this.shiftDown(childrenIndex);\n    }\n  }\n  *[Symbol.iterator](): IterableIterator<T> {\n    for (const t of this.arr) {\n      yield t;\n    }\n  }\n}\nfunction scheduleCourse(courses: number[][]): number {\n  const heap = new Heap<number>((a, b) => a - b);\n  let sum = 0;\n  for (const [dur, last] of courses.sort((a, b) => a[1] - b[1])) {\n    sum += dur;\n    heap.add(dur);\n    if (sum > last) sum -= heap.remove();\n  }\n  return heap.size;\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-11"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a256ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a53.61MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u62d3\u6251\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int scheduleCourse(vector<vector<int>>& courses) {\n        int sum = 0;\n        priority_queue<int> q;\n        sort(courses.begin(), courses.end(), [&](auto &a, auto &b) {\n            return a[1] < b[1];\n        });\n        for (auto &course : courses) {\n            sum += course[0];\n            q.push(course[0]);\n            if (sum > course[1]) {\n                sum -= q.top();\n                q.pop();\n            }\n        }\n        return q.size();\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-11"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a124ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19.54MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def scheduleCourse(self, courses: List[List[int]]) -> int:\n        courses.sort(key=lambda o: o[1])\n        q = []\n        sum = 0\n        for [d, e] in courses:\n            sum += d\n            heappush(q, -d)\n            if sum > e:\n                sum -= -heappop(q)\n        return len(q)\n\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-11"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a32ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a29.7MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn schedule_course(mut courses: Vec<Vec<i32>>) -> i32 {\n        courses.sort_by_key(|o| o[1]);\n        let mut sum = 0;\n        let mut q = std::collections::BinaryHeap::<i32>::new();\n        for course in courses {\n            sum += course[0];\n            q.push(course[0]);\n            if sum > course[1] {\n                sum -= q.pop().unwrap();\n            }\n        }\n        q.len() as i32\n    }\n}\n"})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>l});var r=s(30758);const i={},t=r.createContext(i);function c(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);