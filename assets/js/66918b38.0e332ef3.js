"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[14210],{34437:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>u,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"leetcode/301-400/\u67e5\u627e\u548c\u6700\u5c0f\u7684K\u5bf9\u6570\u5b57","title":"373.\u67e5\u627e\u548c\u6700\u5c0f\u7684K\u5bf9\u6570\u5b57","description":"\u94fe\u63a5\uff1a373.\u67e5\u627e\u548c\u6700\u5c0f\u7684K\u5bf9\u6570\u5b57","source":"@site/docs/leetcode/301-400/373.\u67e5\u627e\u548c\u6700\u5c0f\u7684K\u5bf9\u6570\u5b57.md","sourceDirName":"leetcode/301-400","slug":"/leetcode/301-400/\u67e5\u627e\u548c\u6700\u5c0f\u7684K\u5bf9\u6570\u5b57","permalink":"/docs/leetcode/301-400/\u67e5\u627e\u548c\u6700\u5c0f\u7684K\u5bf9\u6570\u5b57","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":373,"frontMatter":{},"sidebar":"journal","previous":{"title":"372.\u8d85\u7ea7\u6b21\u65b9","permalink":"/docs/leetcode/301-400/\u8d85\u7ea7\u6b21\u65b9"},"next":{"title":"374.\u731c\u6570\u5b57\u5927\u5c0f","permalink":"/docs/leetcode/301-400/\u731c\u6570\u5b57\u5927\u5c0f"}}');var t=r(86070),i=r(31503);const u={},o="373.\u67e5\u627e\u548c\u6700\u5c0f\u7684K\u5bf9\u6570\u5b57",c={},l=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"373\u67e5\u627e\u548c\u6700\u5c0f\u7684k\u5bf9\u6570\u5b57",children:"373.\u67e5\u627e\u548c\u6700\u5c0f\u7684K\u5bf9\u6570\u5b57"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/find-k-pairs-with-smallest-sums",children:"373.\u67e5\u627e\u548c\u6700\u5c0f\u7684K\u5bf9\u6570\u5b57"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u627e\u5230\u548c\u6700\u5c0f\u7684 k \u5bf9\u6570\u5b57 (u1,v1), (u2,v2) ... (uk,vk)\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-09"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a2136ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a77MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6784\u5efa\u5806\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"class Heap<T> {\n  private arr: T[] = [];\n  get isEmpty() {\n    return this.size === 0;\n  }\n  get size() {\n    return this.arr.length;\n  }\n  constructor(private compare: (num1: T, num2: T) => number) {}\n  add(num: T): void {\n    this.arr.push(num);\n    this.shiftUp(this.size - 1);\n  }\n  remove(): T {\n    const num = this.arr.shift()!;\n    if (this.size) {\n      this.arr.unshift(this.arr.pop()!);\n      this.shiftDown(0);\n    }\n    return num;\n  }\n  private shiftUp(index: number): void {\n    if (index === 0) return;\n    const parentIndex = (index - 1) >> 1;\n    if (this.compare(this.arr[index], this.arr[parentIndex]) > 0) {\n      [this.arr[index], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[index]];\n      this.shiftUp(parentIndex);\n    }\n  }\n  private shiftDown(index: number): void {\n    let childrenIndex = index * 2 + 1;\n    if (childrenIndex > this.size - 1) return;\n    if (\n      childrenIndex + 1 < this.size - 1 &&\n      this.compare(this.arr[childrenIndex + 1], this.arr[childrenIndex]) > 0\n    ) {\n      childrenIndex++;\n    }\n    if (this.compare(this.arr[childrenIndex], this.arr[index]) > 0) {\n      [this.arr[childrenIndex], this.arr[index]] = [this.arr[index], this.arr[childrenIndex]];\n      this.shiftDown(childrenIndex);\n    }\n  }\n}\nfunction kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {\n  const sum = (arr: number[]) => arr.reduce((total, cur) => total + cur, 0);\n  const heap = new Heap<number[]>((nums1, nums2) => sum(nums2) - sum(nums1));\n  nums1.forEach(num1 => nums2.forEach(num2 => heap.add([num1, num2])));\n  const ans: number[][] = [];\n  while (heap.size && k--) ans.push(heap.remove());\n  return ans;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-01-14"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a924ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a62.6MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5806\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    struct node {\n        int num1, num2, sum;\n        bool operator<(const node& obj) const {\n            return sum == obj.sum\n                       ? num2 == obj.num2 ? num1 < obj.num1 : num2 < obj.num2\n                       : sum < obj.sum;\n        }\n    };\n    vector<vector<int>> kSmallestPairs(vector<int>& nums1, vector<int>& nums2,\n                                       int k) {\n        priority_queue<node> q;\n        int isBreak = 0, len = min(k, (int)(nums1.size() * nums2.size()));\n        // cout << \"len = \" << len << endl;\n        vector<vector<int>> ans(len, vector<int>(2));\n        for (auto& num1 : nums1) {\n            if (isBreak) break;\n            for (auto& num2 : nums2) {\n                if (q.size() >= len && num1 > 0 && num2 > 0 &&\n                    num1 > q.top().sum && num2 > q.top().sum)\n                    isBreak = 1;\n                if (isBreak) break;\n                if (q.size() < len) {\n                    q.push((node){num1, num2, num1 + num2});\n                } else if (q.top().sum > num1 + num2) {\n                    // cout << q.top().num1 << ',' << q.top().num2;\n                    // if (q.top() )\n                    q.pop();\n                    q.push((node){num1, num2, num1 + num2});\n                }\n            }\n        }\n        while (q.size()) {\n            node n = q.top();\n            q.pop();\n            ans[len - 1][0] = n.num1;\n            ans[len - 1][1] = n.num2;\n            len--;\n        }\n        return ans;\n    }\n};\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},31503:(n,e,r)=>{r.d(e,{R:()=>u,x:()=>o});var s=r(30758);const t={},i=s.createContext(t);function u(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:u(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);