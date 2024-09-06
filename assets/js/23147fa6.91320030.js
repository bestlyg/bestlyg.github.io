"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[59143],{91404:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=s(86070),i=s(25710);const r={},c="128.\u6700\u957f\u8fde\u7eed\u5e8f\u5217",l={id:"leetcode/101-200/\u6700\u957f\u8fde\u7eed\u5e8f\u5217",title:"128.\u6700\u957f\u8fde\u7eed\u5e8f\u5217",description:"\u94fe\u63a5\uff1a128.\u6700\u957f\u8fde\u7eed\u5e8f\u5217",source:"@site/docs/leetcode/101-200/128.\u6700\u957f\u8fde\u7eed\u5e8f\u5217.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u6700\u957f\u8fde\u7eed\u5e8f\u5217",permalink:"/docs/leetcode/101-200/\u6700\u957f\u8fde\u7eed\u5e8f\u5217",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:128,frontMatter:{},sidebar:"journal",previous:{title:"125.\u9a8c\u8bc1\u56de\u6587\u4e32",permalink:"/docs/leetcode/101-200/\u9a8c\u8bc1\u56de\u6587\u4e32"},next:{title:"129.\u6c42\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u6570\u5b57\u4e4b\u548c",permalink:"/docs/leetcode/101-200/\u6c42\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u6570\u5b57\u4e4b\u548c"}},u={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2}];function m(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"128\u6700\u957f\u8fde\u7eed\u5e8f\u5217",children:"128.\u6700\u957f\u8fde\u7eed\u5e8f\u5217"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/longest-consecutive-sequence",children:"128.\u6700\u957f\u8fde\u7eed\u5e8f\u5217"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5e76\u67e5\u96c6\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u672a\u6392\u5e8f\u7684\u6574\u6570\u6570\u7ec4\uff0c\u627e\u51fa\u6700\u957f\u8fde\u7eed\u5e8f\u5217\u7684\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-06-06"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a37.8MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u53bb\u91cd\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function longestConsecutive(nums: number[]): number {\n  if (nums.length === 0) return 0;\n  nums = [...new Set(nums)].sort((a, b) => a - b);\n  let max = 1;\n  let nowMax = 1;\n  let preNum = nums[0];\n  for (const num of nums) {\n    if (num === preNum + 1) {\n      nowMax++;\n    } else {\n      max = nowMax > max ? nowMax : max;\n      nowMax = 1;\n    }\n    preNum = num;\n  }\n  return max > nowMax ? max : nowMax;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-06-06"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a37.2MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7528\u54c8\u5e0c\u8868\u8fdb\u884c O(1)\u7684\u67e5\u627e\uff0c\u5373\u6700\u6162\u67e5\u627e\u901f\u5ea6 O(n)\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function longestConsecutive(nums: number[]): number {\n  if (nums.length === 0) return 0;\n  const set = new Set(nums);\n  let max = 1;\n  for (let num of set) {\n    if (!set.has(num - 1)) {\n      let nowMax = 1;\n      while (set.has(++num)) nowMax++;\n      max = nowMax > max ? nowMax : max;\n    }\n  }\n  return max;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-30"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a192ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a53.8MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5e76\u67e5\u96c6\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"class UnionFind {\n  elements: number[];\n  constructor(public size: number) {\n    this.elements = new Array(size).fill(0).map((_, i) => i);\n  }\n  same(v1: number, v2: number): boolean {\n    return this.find(v1) === this.find(v2);\n  }\n  find(v: number): number {\n    return v === this.elements[v] ? v : (this.elements[v] = this.find(this.elements[v]));\n  }\n  union(v1: number, v2: number): void {\n    const e1 = this.find(v1);\n    const e2 = this.find(v2);\n    if (e1 !== e2) {\n      this.elements[e1] = e2;\n      this.size--;\n    }\n  }\n}\nfunction longestConsecutive(nums: number[]): number {\n  nums = [...new Set(nums)];\n  const len = nums.length;\n  if (len === 0) return 0;\n  const uf = new UnionFind(len);\n  const map = new Map(nums.map((v, i) => [v, i]));\n  const ansMap = new Map<number, number>();\n  for (let i = 0; i < len; i++) {\n    const num = nums[i];\n    const num_minus = map.get(num - 1);\n    if (num_minus) {\n      uf.union(i, num_minus);\n      const index = uf.find(i);\n      ansMap.set(index, (ansMap.get(index) ?? 0) + 1);\n    }\n    const num_add = map.get(num + 1);\n    if (num_add) {\n      uf.union(i, num_add);\n      const index = uf.find(i);\n      ansMap.set(index, (ansMap.get(index) ?? 0) + 1);\n    }\n  }\n  const cache: Record<number, number> = {};\n  for (let i = 0; i < len; i++) {\n    const num = uf.find(i);\n    cache[num] = (cache[num] ?? 0) + 1;\n  }\n  return [...Object.entries(cache)].sort(([, c1], [, c2]) => c2 - c1)[0][1];\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(m,{...n})}):m(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>l});var t=s(30758);const i={},r=t.createContext(i);function c(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);