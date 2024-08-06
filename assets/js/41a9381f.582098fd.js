"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[12900],{59511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var s=n(86070),r=n(25710);const i={},c="134.\u52a0\u6cb9\u7ad9",o={id:"leetcode/101-200/\u52a0\u6cb9\u7ad9",title:"134.\u52a0\u6cb9\u7ad9",description:"\u94fe\u63a5\uff1a134.\u52a0\u6cb9\u7ad9",source:"@site/docs/leetcode/101-200/134.\u52a0\u6cb9\u7ad9.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u52a0\u6cb9\u7ad9",permalink:"/docs/leetcode/101-200/\u52a0\u6cb9\u7ad9",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:134,frontMatter:{},sidebar:"journal",previous:{title:"133.\u514b\u9686\u56fe",permalink:"/docs/leetcode/101-200/\u514b\u9686\u56fe"},next:{title:"135.\u5206\u53d1\u7cd6\u679c",permalink:"/docs/leetcode/101-200/\u5206\u53d1\u7cd6\u679c"}},l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"134\u52a0\u6cb9\u7ad9",children:"134.\u52a0\u6cb9\u7ad9"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(t.a,{href:"https://leetcode.cn/problems/gas-station",children:"134.\u52a0\u6cb9\u7ad9"}),(0,s.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4",(0,s.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5728\u4e00\u6761\u73af\u8def\u4e0a\u6709 \xa0N\xa0 \u4e2a\u52a0\u6cb9\u7ad9\uff0c\u5176\u4e2d\u7b2c \xa0i\xa0 \u4e2a\u52a0\u6cb9\u7ad9\u6709\u6c7d\u6cb9 \xa0gas[i]\xa0 \u5347\u3002\u4f60\u6709\u4e00\u8f86\u6cb9\u7bb1\u5bb9\u91cf\u65e0\u9650\u7684\u7684\u6c7d\u8f66\uff0c\u4ece\u7b2c i \u4e2a\u52a0\u6cb9\u7ad9\u5f00\u5f80\u7b2c i+1\xa0 \u4e2a\u52a0\u6cb9\u7ad9\u9700\u8981\u6d88\u8017\u6c7d\u6cb9 \xa0cost[i]\xa0 \u5347\u3002\u4f60\u4ece\u5176\u4e2d\u7684\u4e00\u4e2a\u52a0\u6cb9\u7ad9\u51fa\u53d1\uff0c\u5f00\u59cb\u65f6\u6cb9\u7bb1\u4e3a\u7a7a\u3002\u5982\u679c\u4f60\u53ef\u4ee5\u7ed5\u73af\u8def\u884c\u9a76\u4e00\u5468\uff0c\u5219\u8fd4\u56de\u51fa\u53d1\u65f6\u52a0\u6cb9\u7ad9\u7684\u7f16\u53f7\uff0c\u5426\u5219\u8fd4\u56de -1\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-11-18"}),"\n",(0,s.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a272ms"}),"\n",(0,s.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.9MB"}),"\n",(0,s.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9009\u53d6\u9996\u70b9\u8fdb\u884c\u904d\u5386\u8ba1\u7b97\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"function canCompleteCircuit(gas: number[], cost: number[]): number {\n  const len = gas.length;\n  const starts: number[] = [];\n  for (let i = 0; i < len; i++) {\n    gas[i] >= cost[i] && starts.push(i);\n  }\n  for (const start of starts) {\n    let arg = gas[start] - cost[start];\n    let i = (start + 1) % len;\n    while (i !== start) {\n      arg += gas[i] - cost[i];\n      if (arg < 0) break;\n      i = (i + 1) % len;\n    }\n    if (i === start) return i;\n  }\n  return -1;\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var s=n(30758);const r={},i=s.createContext(r);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);