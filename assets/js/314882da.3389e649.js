"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[88776],{17233:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"leetcode/601-700/\u5197\u4f59\u8fde\u63a5","title":"684.\u5197\u4f59\u8fde\u63a5","description":"\u94fe\u63a5\uff1a684.\u5197\u4f59\u8fde\u63a5","source":"@site/docs/leetcode/601-700/684.\u5197\u4f59\u8fde\u63a5.md","sourceDirName":"leetcode/601-700","slug":"/leetcode/601-700/\u5197\u4f59\u8fde\u63a5","permalink":"/docs/leetcode/601-700/\u5197\u4f59\u8fde\u63a5","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":684,"frontMatter":{},"sidebar":"journal","previous":{"title":"682.\u68d2\u7403\u6bd4\u8d5b","permalink":"/docs/leetcode/601-700/\u68d2\u7403\u6bd4\u8d5b"},"next":{"title":"685.\u5197\u4f59\u8fde\u63a5II","permalink":"/docs/leetcode/601-700/\u5197\u4f59\u8fde\u63a5II"}}');var i=s(86070),d=s(31503);const l={},r="684.\u5197\u4f59\u8fde\u63a5",c={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - undefined",id:"\u9898\u89e3-3---undefined",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"684\u5197\u4f59\u8fde\u63a5",children:"684.\u5197\u4f59\u8fde\u63a5"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/redundant-connection",children:"684.\u5197\u4f59\u8fde\u63a5"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e76\u67e5\u96c6\u3001\u56fe",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8f93\u5165\u4e00\u4e2a\u56fe\uff0c\u8be5\u56fe\u7531\u4e00\u4e2a\u6709\u7740 N \u4e2a\u8282\u70b9 (\u8282\u70b9\u503c\u4e0d\u91cd\u590d 1, 2, ..., N) \u7684\u6811\u53ca\u4e00\u6761\u9644\u52a0\u7684\u8fb9\u6784\u6210\u3002\u9644\u52a0\u7684\u8fb9\u7684\u4e24\u4e2a\u9876\u70b9\u5305\u542b\u5728 1 \u5230 N \u4e2d\u95f4\uff0c\u8fd9\u6761\u9644\u52a0\u7684\u8fb9\u4e0d\u5c5e\u4e8e\u6811\u4e2d\u5df2\u5b58\u5728\u7684\u8fb9\u3002\u8fd4\u56de\u4e00\u6761\u53ef\u4ee5\u5220\u53bb\u7684\u8fb9\uff0c\u4f7f\u5f97\u7ed3\u679c\u56fe\u662f\u4e00\u4e2a\u6709\u7740 N \u4e2a\u8282\u70b9\u7684\u6811\u3002\u5982\u679c\u6709\u591a\u4e2a\u7b54\u6848\uff0c\u5219\u8fd4\u56de\u4e8c\u7ef4\u6570\u7ec4\u4e2d\u6700\u540e\u51fa\u73b0\u7684\u8fb9\u3002\u7b54\u6848\u8fb9 [u, v] \u5e94\u6ee1\u8db3\u76f8\u540c\u7684\u683c\u5f0f u < v\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-01-13"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.3MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528 set \u50a8\u5b58\u904d\u5386\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function findRedundantConnection(edges: number[][]): number[] {\n  const map = new Map<number, Set<number>>();\n  let ans: number[][] = [];\n  for (const edge of edges) {\n    const [num1, num2] = edge;\n    const set1 = map.get(num1);\n    const set2 = map.get(num2);\n    if (set1 && set2 && set1 !== set2) {\n      const set = new Set([...set1, ...set2]);\n      set.forEach(v => map.set(v, set));\n    } else if (!set1 && !set2) {\n      const set = new Set([num1, num2]);\n      map.set(num1, set);\n      map.set(num2, set);\n    } else if (!set1 && set2) {\n      set2.add(num1);\n      map.set(num1, set2);\n    } else if (set1 && !set2) {\n      set1.add(num2);\n      map.set(num2, set1);\n    } else {\n      ans.push(edge);\n    }\n  }\n  return ans.pop()!;\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-30"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.9MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5e76\u67e5\u96c6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"class UnionFind {\n  elements: number[];\n  constructor(public size: number) {\n    this.elements = new Array(size).fill(0).map((_, i) => i);\n  }\n  same(v1: number, v2: number): boolean {\n    return this.find(v1) === this.find(v2);\n  }\n  find(v: number): number {\n    return v === this.elements[v] ? v : (this.elements[v] = this.find(this.elements[v]));\n  }\n  union(v1: number, v2: number): void {\n    const e1 = this.find(v1);\n    const e2 = this.find(v2);\n    if (e1 !== e2) {\n      this.elements[e1] = e2;\n      this.size--;\n    }\n  }\n}\nfunction findRedundantConnection(edges: number[][]): number[] {\n  const uf = new UnionFind(edges.length);\n  for (const edge of edges) {\n    const [node1, node2] = edge;\n    if (uf.same(node1, node2)) return edge;\n    uf.union(node1, node2);\n  }\n  return [];\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---undefined",children:"\u9898\u89e3 3 - undefined"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-10-27"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a3ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1aundefined"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","unionfind\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-undefined",children:"class UnionFind:\n    def __init__(self, n) -> None:\n        self.n = n\n        self.data = [i for i in range(0, n)]\n        self.sizes = [1] * n\n        self.cnt = n\n    def size(self, v: int) -> int:\n        return self.sizes[self.find(v)]\n    def find(self, v: int) -> int:\n        if self.data[v] != v:\n            self.data[v] = self.find(self.data[v])\n        return self.data[v]\n    def uni(self, v1: int, v2: int):\n        p1 = self.find(v1)\n        p2 = self.find(v2)\n        if p1 != p2:\n            self.sizes[p1] += self.sizes[p2]\n            self.cnt -= self.sizes[p2]\n            self.data[p2] = p1\n    def same(self, v1: int, v2: int):\n        return self.find(v1) == self.find(v2)\nclass Solution:\n    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:\n        n = len(edges)\n        uf = UnionFind(n)\n        res = None\n        for n1, n2 in edges:\n            if uf.find(n1 - 1) != uf.find(n2 - 1):\n                uf.uni(n1 - 1, n2 - 1)\n            else:\n                res = [n1, n2]\n        return res\n"})})]})}function f(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},31503:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>r});var t=s(30758);const i={},d=t.createContext(i);function l(n){const e=t.useContext(d);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);