"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[5909],{28317:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(86070),s=t(25710);const i={},o="165.\u6bd4\u8f83\u7248\u672c\u53f7",c={id:"leetcode/101-200/\u6bd4\u8f83\u7248\u672c\u53f7",title:"165.\u6bd4\u8f83\u7248\u672c\u53f7",description:"\u94fe\u63a5\uff1a165.\u6bd4\u8f83\u7248\u672c\u53f7",source:"@site/docs/leetcode/101-200/165.\u6bd4\u8f83\u7248\u672c\u53f7.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u6bd4\u8f83\u7248\u672c\u53f7",permalink:"/docs/leetcode/101-200/\u6bd4\u8f83\u7248\u672c\u53f7",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:165,frontMatter:{},sidebar:"journal",previous:{title:"164.\u6700\u5927\u95f4\u8ddd",permalink:"/docs/leetcode/101-200/\u6700\u5927\u95f4\u8ddd"},next:{title:"166.\u5206\u6570\u5230\u5c0f\u6570",permalink:"/docs/leetcode/101-200/\u5206\u6570\u5230\u5c0f\u6570"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"165\u6bd4\u8f83\u7248\u672c\u53f7",children:"165.\u6bd4\u8f83\u7248\u672c\u53f7"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/compare-version-numbers",children:"165.\u6bd4\u8f83\u7248\u672c\u53f7"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e24\u4e2a\u7248\u672c\u53f7 version1 \u548c version2 \uff0c\u8bf7\u4f60\u6bd4\u8f83\u5b83\u4eec\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-01"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.4MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u683c\u5f0f\u5316\u540e\u6bd4\u8f83\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function compareVersion(version1: string, version2: string): number {\n  const v1 = version1.split('.').map(v => +v);\n  const v2 = version2.split('.').map(v => +v);\n  const len = Math.max(v1.length, v2.length);\n  while (v1.length < len) v1.push(0);\n  while (v2.length < len) v2.push(0);\n  let i = 0;\n  while (i < len) {\n    if (v1[i] < v2[i]) return -1;\n    if (v1[i] > v2[i]) return 1;\n    i++;\n  }\n  return 0;\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(30758);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);