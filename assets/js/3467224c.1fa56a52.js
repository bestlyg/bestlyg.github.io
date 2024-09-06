"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[82764],{10639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(86070),r=n(25710);const i={},c="205.\u540c\u6784\u5b57\u7b26\u4e32",o={id:"leetcode/201-300/\u540c\u6784\u5b57\u7b26\u4e32",title:"205.\u540c\u6784\u5b57\u7b26\u4e32",description:"\u94fe\u63a5\uff1a205.\u540c\u6784\u5b57\u7b26\u4e32",source:"@site/docs/leetcode/201-300/205.\u540c\u6784\u5b57\u7b26\u4e32.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u540c\u6784\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/201-300/\u540c\u6784\u5b57\u7b26\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:205,frontMatter:{},sidebar:"journal",previous:{title:"204.\u8ba1\u6570\u8d28\u6570",permalink:"/docs/leetcode/201-300/\u8ba1\u6570\u8d28\u6570"},next:{title:"206.\u53cd\u8f6c\u94fe\u8868",permalink:"/docs/leetcode/201-300/\u53cd\u8f6c\u94fe\u8868"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"205\u540c\u6784\u5b57\u7b26\u4e32",children:"205.\u540c\u6784\u5b57\u7b26\u4e32"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(t.a,{href:"https://leetcode.cn/problems/isomorphic-strings",children:"205.\u540c\u6784\u5b57\u7b26\u4e32"}),(0,s.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,s.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32 s \u548c t\uff0c\u5224\u65ad\u5b83\u4eec\u662f\u5426\u662f\u540c\u6784\u7684\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-12-27"}),"\n",(0,s.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,s.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.8MB"}),"\n",(0,s.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528 map \u548c set \u50a8\u5b58\u904d\u5386\u8fc7\u7684\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"function isIsomorphic(s: string, t: string): boolean {\n  const map: Record<string, string> = {};\n  const set = new Set<string>();\n  for (let i = 0, l = s.length; i < l; i++) {\n    const sC = s[i];\n    const tC = t[i];\n    const mapC = map[sC];\n    if (!mapC) {\n      if (set.has(tC)) return false;\n      map[sC] = tC;\n      set.add(tC);\n    } else if (mapC !== tC) return false;\n  }\n  return true;\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25710:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var s=n(30758);const r={},i=s.createContext(r);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);