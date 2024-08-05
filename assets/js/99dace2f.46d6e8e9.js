"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[24716],{2499:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=t(86070),c=t(25710);const i={},r="678.\u6709\u6548\u7684\u62ec\u53f7\u5b57\u7b26\u4e32",l={id:"leetcode/601-700/\u6709\u6548\u7684\u62ec\u53f7\u5b57\u7b26\u4e32",title:"678.\u6709\u6548\u7684\u62ec\u53f7\u5b57\u7b26\u4e32",description:"\u94fe\u63a5\uff1a678.\u6709\u6548\u7684\u62ec\u53f7\u5b57\u7b26\u4e32",source:"@site/docs/leetcode/601-700/678.\u6709\u6548\u7684\u62ec\u53f7\u5b57\u7b26\u4e32.md",sourceDirName:"leetcode/601-700",slug:"/leetcode/601-700/\u6709\u6548\u7684\u62ec\u53f7\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/601-700/\u6709\u6548\u7684\u62ec\u53f7\u5b57\u7b26\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:678,frontMatter:{},sidebar:"journal",previous:{title:"676.\u5b9e\u73b0\u4e00\u4e2a\u9b54\u6cd5\u5b57\u5178",permalink:"/docs/leetcode/601-700/\u5b9e\u73b0\u4e00\u4e2a\u9b54\u6cd5\u5b57\u5178"},next:{title:"680.\u9a8c\u8bc1\u56de\u6587\u4e32II",permalink:"/docs/leetcode/601-700/\u9a8c\u8bc1\u56de\u6587\u4e32II"}},o={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"678\u6709\u6548\u7684\u62ec\u53f7\u5b57\u7b26\u4e32",children:"678.\u6709\u6548\u7684\u62ec\u53f7\u5b57\u7b26\u4e32"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/valid-parenthesis-string",children:"678.\u6709\u6548\u7684\u62ec\u53f7\u5b57\u7b26\u4e32"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u8d2a\u5fc3\u3001\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u53ea\u5305\u542b\u4e09\u79cd\u5b57\u7b26\u7684\u5b57\u7b26\u4e32\uff1a\uff08 \uff0c\uff09 \u548c *\uff0c\u5199\u4e00\u4e2a\u51fd\u6570\u6765\u68c0\u9a8c\u8fd9\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u6709\u6548\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-17"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.5MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5206\u522b\u7edf\u8ba1\u5de6\u62ec\u53f7\u548c*\u7684\u4e0b\u6807\uff0c\u904d\u5386\u5230\u53f3\u62ec\u53f7\u65f6\u6d88\u9664\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function checkValidString(s: string): boolean {\n  const leftStack: number[] = [];\n  const starStack: number[] = [];\n  for (let i = 0; i < s.length; i++) {\n    const c = s[i];\n    if (c === '(') leftStack.push(i);\n    else if (c === '*') starStack.push(i);\n    else {\n      if (leftStack.length === 0 && starStack.length === 0) return false;\n      if (leftStack.length !== 0) leftStack.pop();\n      else starStack.pop();\n    }\n  }\n  while (leftStack.length !== 0 && starStack.length !== 0) {\n    const left = leftStack.pop()!;\n    const star = starStack.pop()!;\n    if (left > star) return false;\n  }\n  return leftStack.length === 0;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-17"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.4MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8d2a\u5fc3\uff0c\u7edf\u8ba1\u5de6\u62ec\u53f7\u53ef\u80fd\u7684\u6700\u5927\u503c\u548c\u6700\u5c0f\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function checkValidString(s: string): boolean {\n  let min = 0;\n  let max = 0;\n  for (const c of s) {\n    if (c === '(') {\n      min++;\n      max++;\n    } else if (c === ')') {\n      min = Math.max(min - 1, 0);\n      max--;\n      if (max < 0) return false;\n    } else {\n      min = Math.max(min - 1, 0);\n      max++;\n    }\n  }\n  return min === 0;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(30758);const c={},i=s.createContext(c);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);