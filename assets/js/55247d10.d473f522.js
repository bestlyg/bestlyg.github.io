"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[56233],{12768:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var r=t(86070),s=t(25710);const p={},o="1583.\u7edf\u8ba1\u4e0d\u5f00\u5fc3\u7684\u670b\u53cb",c={id:"leetcode/1501-1600/\u7edf\u8ba1\u4e0d\u5f00\u5fc3\u7684\u670b\u53cb",title:"1583.\u7edf\u8ba1\u4e0d\u5f00\u5fc3\u7684\u670b\u53cb",description:"\u94fe\u63a5\uff1a1583.\u7edf\u8ba1\u4e0d\u5f00\u5fc3\u7684\u670b\u53cb",source:"@site/docs/leetcode/1501-1600/1583.\u7edf\u8ba1\u4e0d\u5f00\u5fc3\u7684\u670b\u53cb.md",sourceDirName:"leetcode/1501-1600",slug:"/leetcode/1501-1600/\u7edf\u8ba1\u4e0d\u5f00\u5fc3\u7684\u670b\u53cb",permalink:"/web/site/docs/leetcode/1501-1600/\u7edf\u8ba1\u4e0d\u5f00\u5fc3\u7684\u670b\u53cb",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1583,frontMatter:{},sidebar:"journal",previous:{title:"1579.\u4fdd\u8bc1\u56fe\u53ef\u5b8c\u5168\u904d\u5386",permalink:"/web/site/docs/leetcode/1501-1600/\u4fdd\u8bc1\u56fe\u53ef\u5b8c\u5168\u904d\u5386"},next:{title:"1588.\u6240\u6709\u5947\u6570\u957f\u5ea6\u5b50\u6570\u7ec4\u7684\u548c",permalink:"/web/site/docs/leetcode/1501-1600/\u6240\u6709\u5947\u6570\u957f\u5ea6\u5b50\u6570\u7ec4\u7684\u548c"}},i={},l=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"1583\u7edf\u8ba1\u4e0d\u5f00\u5fc3\u7684\u670b\u53cb",children:"1583.\u7edf\u8ba1\u4e0d\u5f00\u5fc3\u7684\u670b\u53cb"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/count-unhappy-friends",children:"1583.\u7edf\u8ba1\u4e0d\u5f00\u5fc3\u7684\u670b\u53cb"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6a21\u62df",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de \u4e0d\u5f00\u5fc3\u7684\u670b\u53cb\u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-14"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a140ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a55MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","n2 \u8ba1\u7b97\u4e0d\u5f00\u5fc3\u7684\u4eba\u8fdb\u884c\u7d2f\u52a0\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class Person {\n  map = new Map<number, number>();\n  constructor(public val: number, link: number[]) {\n    let c = 0;\n    for (const p of link) this.map.set(p, cpp);\n  }\n  compare(p1: Person, p2: Person): boolean {\n    return this.map.get(p1.val)! < this.map.get(p2.val)!;\n  }\n}\nfunction unhappyFriends(n: number, preferences: number[][], pairs: number[][]): number {\n  const map = new Map<number, Person>();\n  for (let i = 0; i < n; i++) map.set(i, new Person(i, preferences[i]));\n  const ans = new Array(n).fill(false);\n  for (let i = 0; i < n / 2; i++) {\n    const [v1, v2] = pairs[i];\n    const p1 = map.get(v1)!;\n    const p2 = map.get(v2)!;\n    for (let j = 0; j < i; j++) {\n      const [v3, v4] = pairs[j];\n      const p3 = map.get(v3)!;\n      const p4 = map.get(v4)!;\n      if (p1.compare(p3, p2) && p3.compare(p1, p4)) ans[v1] = ans[v3] = true;\n      if (p1.compare(p4, p2) && p4.compare(p1, p3)) ans[v1] = ans[v4] = true;\n      if (p2.compare(p3, p1) && p3.compare(p2, p4)) ans[v2] = ans[v3] = true;\n      if (p2.compare(p4, p1) && p4.compare(p2, p3)) ans[v2] = ans[v4] = true;\n    }\n  }\n  return ans.filter(Boolean).length;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(30758);const s={},p=r.createContext(s);function o(e){const n=r.useContext(p);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(p.Provider,{value:n},e.children)}}}]);