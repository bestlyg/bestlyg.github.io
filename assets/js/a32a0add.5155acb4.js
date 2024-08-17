"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[67445],{51461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=t(86070),s=t(25710);const i={},l="2625.\u6241\u5e73\u5316\u5d4c\u5957\u6570\u7ec4",o={id:"leetcode/2601-2700/\u6241\u5e73\u5316\u5d4c\u5957\u6570\u7ec4",title:"2625.\u6241\u5e73\u5316\u5d4c\u5957\u6570\u7ec4",description:"\u94fe\u63a5\uff1a2625.\u6241\u5e73\u5316\u5d4c\u5957\u6570\u7ec4",source:"@site/docs/leetcode/2601-2700/2625.\u6241\u5e73\u5316\u5d4c\u5957\u6570\u7ec4.md",sourceDirName:"leetcode/2601-2700",slug:"/leetcode/2601-2700/\u6241\u5e73\u5316\u5d4c\u5957\u6570\u7ec4",permalink:"/docs/leetcode/2601-2700/\u6241\u5e73\u5316\u5d4c\u5957\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2625,frontMatter:{},sidebar:"journal",previous:{title:"2624.\u8717\u725b\u6392\u5e8f",permalink:"/docs/leetcode/2601-2700/\u8717\u725b\u6392\u5e8f"},next:{title:"2626.\u6570\u7ec4\u5f52\u7ea6\u8fd0\u7b97",permalink:"/docs/leetcode/2601-2700/\u6570\u7ec4\u5f52\u7ea6\u8fd0\u7b97"}},c={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"2625\u6241\u5e73\u5316\u5d4c\u5957\u6570\u7ec4",children:"2625.\u6241\u5e73\u5316\u5d4c\u5957\u6570\u7ec4"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/flatten-deeply-nested-array",children:"2625.\u6241\u5e73\u5316\u5d4c\u5957\u6570\u7ec4"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u63a5\u6536\u4e00\u4e2a \u591a\u7ef4\u6570\u7ec4 arr \u548c\u5b83\u7684\u6df1\u5ea6 n \uff0c\u5e76\u8fd4\u56de\u8be5\u6570\u7ec4\u7684 \u6241\u5e73\u5316 \u540e\u7684\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-23"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a196ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a73MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type MultiDimensionalArray = (number | MultiDimensionalArray)[];\n\nvar flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {\n  if (n === 0) return arr;\n  const res: MultiDimensionalArray = [];\n  for (const num of arr) {\n    if (Array.isArray(num)) res.push(...flat(num, n - 1));\n    else res.push(num);\n  }\n  return res;\n};\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(30758);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);