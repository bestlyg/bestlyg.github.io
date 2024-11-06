"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[21833],{41478:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(86070),r=s(31503);const i={},o="851.\u55a7\u95f9\u548c\u5bcc\u6709",c={id:"leetcode/801-900/\u55a7\u95f9\u548c\u5bcc\u6709",title:"851.\u55a7\u95f9\u548c\u5bcc\u6709",description:"\u94fe\u63a5\uff1a851.\u55a7\u95f9\u548c\u5bcc\u6709",source:"@site/docs/leetcode/801-900/851.\u55a7\u95f9\u548c\u5bcc\u6709.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u55a7\u95f9\u548c\u5bcc\u6709",permalink:"/docs/leetcode/801-900/\u55a7\u95f9\u548c\u5bcc\u6709",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:851,frontMatter:{},sidebar:"journal",previous:{title:"849.\u5230\u6700\u8fd1\u7684\u4eba\u7684\u6700\u5927\u8ddd\u79bb",permalink:"/docs/leetcode/801-900/\u5230\u6700\u8fd1\u7684\u4eba\u7684\u6700\u5927\u8ddd\u79bb"},next:{title:"852.\u5c71\u8109\u6570\u7ec4\u7684\u5cf0\u9876\u7d22\u5f15",permalink:"/docs/leetcode/801-900/\u5c71\u8109\u6570\u7ec4\u7684\u5cf0\u9876\u7d22\u5f15"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"851\u55a7\u95f9\u548c\u5bcc\u6709",children:"851.\u55a7\u95f9\u548c\u5bcc\u6709"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/loud-and-rich",children:"851.\u55a7\u95f9\u548c\u5bcc\u6709"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u56fe\u3001\u62d3\u6251\u6392\u5e8f\u3001\u6570\u7ec4",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u73b0\u5728\uff0c\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 answer \u4f5c\u4e3a\u7b54\u6848\uff0c\u5176\u4e2d \xa0answer[x] = y\xa0 \u7684\u524d\u63d0\u662f\uff0c\u5728\u6240\u6709\u62e5\u6709\u7684\u94b1\u80af\u5b9a\u4e0d\u5c11\u4e8e \xa0person\xa0x\xa0 \u7684\u4eba\u4e2d\uff0cperson\xa0y\xa0 \u662f\u6700\u5b89\u9759\u7684\u4eba\uff08\u4e5f\u5c31\u662f\u5b89\u9759\u503c \xa0quiet[y]\xa0 \u6700\u5c0f\u7684\u4eba\uff09\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-15"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a216ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a49.3MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u62d3\u6251\u6392\u5e8f\u540e\u5411\u4e0b\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class Person {\n  parent: Person = this;\n  children: Person[] = [];\n  constructor(public idx: number, public quiet: number) {}\n}\nfunction dfs(list: Set<Person>, persons: Person[], ans: number[]) {\n  if (list.size === 0) return;\n  const children = new Set<Person>();\n  for (const person of list) {\n    ans[person.idx] = person.parent.idx;\n    for (const child of person.children) {\n      children.add(child);\n      if (child.parent.quiet > person.parent.quiet) child.parent = person.parent;\n    }\n  }\n  dfs(children, persons, ans);\n}\nfunction loudAndRich(richer: number[][], quiet: number[]): number[] {\n  const persons = quiet.map((v, i) => new Person(i, v));\n  const starts = new Set(persons);\n  for (const [i1, i2] of richer) {\n    const p1 = persons[i1];\n    const p2 = persons[i2];\n    p1.children.push(p2);\n    starts.delete(p2);\n  }\n  const ans: number[] = new Array(quiet.length).fill(Infinity);\n  dfs(starts, persons, ans);\n  return ans;\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},31503:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(30758);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);