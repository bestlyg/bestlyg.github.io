"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[22829],{62785:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var t=r(86070),l=r(25710);const s={},c="978.\u6700\u957f\u6e4d\u6d41\u5b50\u6570\u7ec4",i={id:"leetcode/901-1000/\u6700\u957f\u6e4d\u6d41\u5b50\u6570\u7ec4",title:"978.\u6700\u957f\u6e4d\u6d41\u5b50\u6570\u7ec4",description:"\u94fe\u63a5\uff1a978.\u6700\u957f\u6e4d\u6d41\u5b50\u6570\u7ec4",source:"@site/docs/leetcode/901-1000/978.\u6700\u957f\u6e4d\u6d41\u5b50\u6570\u7ec4.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u6700\u957f\u6e4d\u6d41\u5b50\u6570\u7ec4",permalink:"/docs/leetcode/901-1000/\u6700\u957f\u6e4d\u6d41\u5b50\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:978,frontMatter:{},sidebar:"journal",previous:{title:"977.\u6709\u5e8f\u6570\u7ec4\u7684\u5e73\u65b9",permalink:"/docs/leetcode/901-1000/\u6709\u5e8f\u6570\u7ec4\u7684\u5e73\u65b9"},next:{title:"979.\u5728\u4e8c\u53c9\u6811\u4e2d\u5206\u914d\u786c\u5e01",permalink:"/docs/leetcode/901-1000/\u5728\u4e8c\u53c9\u6811\u4e2d\u5206\u914d\u786c\u5e01"}},o={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"978\u6700\u957f\u6e4d\u6d41\u5b50\u6570\u7ec4",children:"978.\u6700\u957f\u6e4d\u6d41\u5b50\u6570\u7ec4"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/longest-turbulent-subarray",children:"978.\u6700\u957f\u6e4d\u6d41\u5b50\u6570\u7ec4"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u6ed1\u52a8\u7a97\u53e3",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de A \u7684\u6700\u5927\u6e4d\u6d41\u5b50\u6570\u7ec4\u7684\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-08"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43.8MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u53cc\u6307\u9488\u8fdb\u884c\u6700\u5927\u533a\u95f4\u7684\u5224\u65ad\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function maxTurbulenceSize(arr: number[]): number {\n  let len = arr.length;\n  while (len > 1 && arr[0] === arr[1]) {\n    arr.shift();\n    len--;\n  }\n  if (len === 1) return 1;\n  let max = 2;\n  let l = 0;\n  let r = 1;\n  let f = arr[0] < arr[1];\n  while (r < len - 1) {\n    if (f ? arr[r] > arr[r + 1] : arr[r] < arr[r + 1]) {\n      f = !f;\n    } else {\n      max = Math.max(max, r - l + 1);\n      l = arr[r] === arr[r + 1] ? r + 1 : r;\n    }\n    r++;\n  }\n  return Math.max(max, r - l + 1);\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},25710:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var t=r(30758);const l={},s=t.createContext(l);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);