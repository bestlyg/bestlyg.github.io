"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[27379],{32916:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var s=i(86070),t=i(25710);const l={},r="721.\u8d26\u6237\u5408\u5e76",a={id:"leetcode/701-800/\u8d26\u6237\u5408\u5e76",title:"721.\u8d26\u6237\u5408\u5e76",description:"\u94fe\u63a5\uff1a721.\u8d26\u6237\u5408\u5e76",source:"@site/docs/leetcode/701-800/721.\u8d26\u6237\u5408\u5e76.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u8d26\u6237\u5408\u5e76",permalink:"/web/site/docs/leetcode/701-800/\u8d26\u6237\u5408\u5e76",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:721,frontMatter:{},sidebar:"journal",previous:{title:"720.\u8bcd\u5178\u4e2d\u6700\u957f\u7684\u5355\u8bcd",permalink:"/web/site/docs/leetcode/701-800/\u8bcd\u5178\u4e2d\u6700\u957f\u7684\u5355\u8bcd"},next:{title:"724.\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807",permalink:"/web/site/docs/leetcode/701-800/\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807"}},c={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"721\u8d26\u6237\u5408\u5e76",children:"721.\u8d26\u6237\u5408\u5e76"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/accounts-merge",children:"721.\u8d26\u6237\u5408\u5e76"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e76\u67e5\u96c6\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u6392\u5e8f",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5217\u8868 accounts\uff0c\u5408\u5e76\u8d26\u6237\u540e\uff0c\u6309\u4ee5\u4e0b\u683c\u5f0f\u8fd4\u56de\u8d26\u6237\uff1a\u6bcf\u4e2a\u8d26\u6237\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u662f\u540d\u79f0\uff0c\u5176\u4f59\u5143\u7d20\u662f\u6309\u5b57\u7b26 ASCII \u987a\u5e8f\u6392\u5217\u7684\u90ae\u7bb1\u5730\u5740\u3002\u8d26\u6237\u672c\u8eab\u53ef\u4ee5\u4ee5\u4efb\u610f\u987a\u5e8f\u8fd4\u56de\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-01"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a272ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a53.2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5e76\u67e5\u96c6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"class UnionFind {\n  elements: number[];\n  constructor(public size: number) {\n    this.elements = new Array(size).fill(0).map((_, i) => i);\n  }\n  same(v1: number, v2: number): boolean {\n    return this.find(v1) === this.find(v2);\n  }\n  find(v: number): number {\n    return v === this.elements[v] ? v : (this.elements[v] = this.find(this.elements[v]));\n  }\n  union(v1: number, v2: number): void {\n    const e1 = this.find(v1);\n    const e2 = this.find(v2);\n    if (e1 !== e2) {\n      this.elements[e1] = e2;\n      this.size--;\n    }\n  }\n}\nfunction accountsMerge(accounts: string[][]): string[][] {\n  const indexMap = new Map<string | number, number | string>();\n  const nameMap = new Map<string, string>();\n  let size = 0;\n  for (const [name, ...emails] of accounts)\n    emails.forEach(email => {\n      if (!indexMap.has(email)) {\n        indexMap.set(email, size);\n        indexMap.set(size, email);\n        size++;\n      }\n      nameMap.set(email, name);\n    });\n  const uf = new UnionFind(size);\n  for (const [, ...emails] of accounts) {\n    for (let i = 1, l = emails.length; i < l; i++) {\n      uf.union(indexMap.get(emails[i]) as number, indexMap.get(emails[i - 1]) as number);\n    }\n  }\n  const cache = new Map<number, number[]>();\n  for (let i = 0; i < size; i++) {\n    const index = uf.find(i);\n    let list = cache.get(index);\n    if (!list) cache.set(index, (list = []));\n    list.push(i);\n  }\n  const emailSort = (email1: string, email2: string): number => {\n    let i = 0;\n    const len = Math.min(email1.length, email2.length);\n    while (i < len) {\n      if (email1[i] === email2[i]) i++;\n      else return email1.codePointAt(i)! - email2.codePointAt(i)!;\n    }\n    return email1[i] === undefined ? -1 : 1;\n  };\n  const ans: string[][] = [];\n  for (const [k, v] of cache.entries()) {\n    ans.push([\n      nameMap.get(indexMap.get(k) as string) as string,\n      ...v.map(i => indexMap.get(i) as string).sort(emailSort),\n    ]);\n  }\n  return ans;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-07-15"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1584ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19.45MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5e76\u67e5\u96c6\u5408\u5e76\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class UnionFind:\n    def __init__(self, n) -> None:\n        self.n = n\n        self.data = [i for i in range(0, n)]\n        self.sizes = [1] * n\n        self.cnt = n\n    def size(self, v: int) -> int:\n        return self.sizes[self.find(v)]\n    def find(self, v: int) -> int:\n        if self.data[v] != v:\n            self.data[v] = self.find(self.data[v])\n        return self.data[v]\n    def uni(self, v1: int, v2: int):\n        p1 = self.find(v1)\n        p2 = self.find(v2)\n        if p1 != p2:\n            self.sizes[p1] += self.sizes[p2]\n            self.cnt -= self.sizes[p2]\n            self.data[p2] = p1\n    def same(self, v1: int, v2: int):\n        return self.find(v1) == self.find(v2)\n    def get_items(self) -> List[List[int]]:\n        map = defaultdict(list)\n        for i in range(self.n): map[self.find(i)].append(i)\n        return map.values()\nclass Solution:\n    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:\n        n = len(accounts)\n        uf = UnionFind(n)\n        for i in range(n):\n            name1 = accounts[i][0]\n            emails1 = set(accounts[i][1:])\n            for j in range(i):\n                name2 = accounts[j][0]\n                emails2 = set(accounts[j][1:])\n                if name1 == name2 and not emails1.isdisjoint(emails2):\n                    uf.uni(i, j)\n        res = []\n        for arr in uf.get_items():\n            item = []\n            res.append(item)\n            item.append(accounts[arr[0]][0])\n            emails = []\n            for idx in arr: emails += accounts[idx][1:]\n            item += sorted(set(emails))\n        return res\n"})})]})}function f(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>a});var s=i(30758);const t={},l=s.createContext(t);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);