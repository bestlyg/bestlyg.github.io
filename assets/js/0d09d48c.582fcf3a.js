"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[8121],{26040:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(86070),s=i(25710);const r={},c="\u9762\u8bd5\u989801.05.\u4e00\u6b21\u7f16\u8f91",l={id:"leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.05.\u4e00\u6b21\u7f16\u8f91",title:"\u9762\u8bd5\u989801.05.\u4e00\u6b21\u7f16\u8f91",description:"\u94fe\u63a5\uff1a\u9762\u8bd5\u989801.05.\u4e00\u6b21\u7f16\u8f91",source:"@site/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.05.\u4e00\u6b21\u7f16\u8f91.md",sourceDirName:"leetcode/\u9762\u8bd5\u9898",slug:"/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.05.\u4e00\u6b21\u7f16\u8f91",permalink:"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.05.\u4e00\u6b21\u7f16\u8f91",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"\u9762\u8bd5\u989801.02.\u5224\u5b9a\u662f\u5426\u4e92\u4e3a\u5b57\u7b26\u91cd\u6392",permalink:"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.02.\u5224\u5b9a\u662f\u5426\u4e92\u4e3a\u5b57\u7b26\u91cd\u6392"},next:{title:"\u9762\u8bd5\u989801.07.\u65cb\u8f6c\u77e9\u9635",permalink:"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.07.\u65cb\u8f6c\u77e9\u9635"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"\u9762\u8bd5\u98980105\u4e00\u6b21\u7f16\u8f91",children:"\u9762\u8bd5\u989801.05.\u4e00\u6b21\u7f16\u8f91"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/one-away-lcci",children:"\u9762\u8bd5\u989801.05.\u4e00\u6b21\u7f16\u8f91"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5b57\u7b26\u4e32\u6709\u4e09\u79cd\u7f16\u8f91\u64cd\u4f5c:\u63d2\u5165\u4e00\u4e2a\u5b57\u7b26\u3001\u5220\u9664\u4e00\u4e2a\u5b57\u7b26\u6216\u8005\u66ff\u6362\u4e00\u4e2a\u5b57\u7b26\u3002 \u7ed9\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32\uff0c\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\u5224\u5b9a\u5b83\u4eec\u662f\u5426\u53ea\u9700\u8981\u4e00\u6b21(\u6216\u8005\u96f6\u6b21)\u7f16\u8f91\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-16"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.9MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function oneEditAway(first: string, second: string): boolean {\n  if (first === second) return true;\n  if (first.length < second.length) [first, second] = [second, first];\n  const l1 = first.length;\n  const l2 = second.length;\n  const minus = Math.abs(l1 - l2);\n  if (minus > 1) return false;\n  else if (minus === 0) {\n    for (let i = 0, j = 0; i < l1; i++) {\n      if (first[i] !== second[i]) {\n        if (j === 1) return false;\n        j++;\n      }\n    }\n    return true;\n  } else {\n    let idxFirst = -1;\n    let idxLast = -1;\n    for (let i = 0, l = Math.min(l1, l2); i < l; i++) {\n      if (first[i] !== second[i]) {\n        idxFirst = i;\n        break;\n      }\n    }\n    if (idxFirst === -1) return true;\n    for (let i1 = l1 - 1, i2 = l2 - 1; i1 >= 0 && i2 >= 0; i1--, i2--) {\n      if (first[i1] !== second[i2]) {\n        idxLast = i1;\n        break;\n      }\n    }\n    if (idxLast === -1) return true;\n    return idxFirst === idxLast;\n  }\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-13"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a52ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a12MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    bool oneEditAway(string first, string second) {\n        int n1 = first.size(), n2 = second.size();\n        int i1 = 0, i2 = 0, cnt = 0;\n        for (; i1 < n1 && i2 < n2; i1++, i2++) {\n            if (first[i1] == second[i2]) continue;\n            if (cnt == 1) return false;\n            cnt++;\n            if (i1 + 1 < n1 && first[i1 + 1] == second[i2])\n                i1++;\n            else if (i2 + 1 < n2 && first[i1] == second[i2 + 1])\n                i2++;\n        }\n        if (cnt == 0) return abs(n1 - n2) <= 1;\n        return i1 == n1 && i2 == n2 && cnt <= 1;\n    }\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>l});var t=i(30758);const s={},r=t.createContext(s);function c(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);