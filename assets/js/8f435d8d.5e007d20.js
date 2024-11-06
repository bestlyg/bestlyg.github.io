"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[57309],{12732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var s=t(86070),r=t(31503);const l={},c="1743.\u4ece\u76f8\u90bb\u5143\u7d20\u5bf9\u8fd8\u539f\u6570\u7ec4",o={id:"leetcode/1701-1800/\u4ece\u76f8\u90bb\u5143\u7d20\u5bf9\u8fd8\u539f\u6570\u7ec4",title:"1743.\u4ece\u76f8\u90bb\u5143\u7d20\u5bf9\u8fd8\u539f\u6570\u7ec4",description:"\u94fe\u63a5\uff1a1743.\u4ece\u76f8\u90bb\u5143\u7d20\u5bf9\u8fd8\u539f\u6570\u7ec4",source:"@site/docs/leetcode/1701-1800/1743.\u4ece\u76f8\u90bb\u5143\u7d20\u5bf9\u8fd8\u539f\u6570\u7ec4.md",sourceDirName:"leetcode/1701-1800",slug:"/leetcode/1701-1800/\u4ece\u76f8\u90bb\u5143\u7d20\u5bf9\u8fd8\u539f\u6570\u7ec4",permalink:"/docs/leetcode/1701-1800/\u4ece\u76f8\u90bb\u5143\u7d20\u5bf9\u8fd8\u539f\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1743,frontMatter:{},sidebar:"journal",previous:{title:"1742.\u76d2\u5b50\u4e2d\u5c0f\u7403\u7684\u6700\u5927\u6570\u91cf",permalink:"/docs/leetcode/1701-1800/\u76d2\u5b50\u4e2d\u5c0f\u7403\u7684\u6700\u5927\u6570\u91cf"},next:{title:"1744.\u4f60\u80fd\u5728\u4f60\u6700\u559c\u6b22\u7684\u90a3\u5929\u5403\u5230\u4f60\u6700\u559c\u6b22\u7684\u7cd6\u679c\u5417\uff1f",permalink:"/docs/leetcode/1701-1800/\u4f60\u80fd\u5728\u4f60\u6700\u559c\u6b22\u7684\u90a3\u5929\u5403\u5230\u4f60\u6700\u559c\u6b22\u7684\u7cd6\u679c\u5417\uff1f"}},i={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1743\u4ece\u76f8\u90bb\u5143\u7d20\u5bf9\u8fd8\u539f\u6570\u7ec4",children:"1743.\u4ece\u76f8\u90bb\u5143\u7d20\u5bf9\u8fd8\u539f\u6570\u7ec4"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/restore-the-array-from-adjacent-pairs",children:"1743.\u4ece\u76f8\u90bb\u5143\u7d20\u5bf9\u8fd8\u539f\u6570\u7ec4"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5b58\u5728\u4e00\u4e2a\u7531 n \u4e2a\u4e0d\u540c\u5143\u7d20\u7ec4\u6210\u7684\u6574\u6570\u6570\u7ec4 nums \uff0c\u8fd4\u56de \u539f\u59cb\u6570\u7ec4 nums \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-25"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a332ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a88.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","map \u50a8\u5b58\u4e00\u4e2a\u6570\u4e24\u8fb9\u7684\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function restoreArray(adjacentPairs: number[][]): number[] {\n  const map = new Map<number, number[]>();\n  for (const [n1, n2] of adjacentPairs) {\n    let l1 = map.get(n1);\n    if (!l1) map.set(n1, (l1 = []));\n    let l2 = map.get(n2);\n    if (!l2) map.set(n2, (l2 = []));\n    l1.push(n2);\n    l2.push(n1);\n  }\n  const ans: number[] = [];\n  for (const [n, l] of map.entries())\n    if (l.length === 1) {\n      ans.push(n);\n      break;\n    }\n  ans.push(map.get(ans[ans.length - 1])![0]);\n  while (map.get(ans[ans.length - 1])!.length !== 1) {\n    const last = ans[ans.length - 1];\n    const list = map.get(last)!;\n    const prev = ans[ans.length - 2];\n    const next = list[0] === prev ? list[1] : list[0];\n    ans.push(next);\n  }\n  return ans;\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(30758);const r={},l=s.createContext(r);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);