"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[41969],{34203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"leetcode/201-300/\u5355\u8bcd\u89c4\u5f8b","title":"290.\u5355\u8bcd\u89c4\u5f8b","description":"\u94fe\u63a5\uff1a290.\u5355\u8bcd\u89c4\u5f8b","source":"@site/docs/leetcode/201-300/290.\u5355\u8bcd\u89c4\u5f8b.md","sourceDirName":"leetcode/201-300","slug":"/leetcode/201-300/\u5355\u8bcd\u89c4\u5f8b","permalink":"/docs/leetcode/201-300/\u5355\u8bcd\u89c4\u5f8b","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":290,"frontMatter":{},"sidebar":"journal","previous":{"title":"289.\u751f\u547d\u6e38\u620f","permalink":"/docs/leetcode/201-300/\u751f\u547d\u6e38\u620f"},"next":{"title":"292.Nim\u6e38\u620f","permalink":"/docs/leetcode/201-300/Nim\u6e38\u620f"}}');var s=n(86070),c=n(31503);const i={},o="290.\u5355\u8bcd\u89c4\u5f8b",l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"290\u5355\u8bcd\u89c4\u5f8b",children:"290.\u5355\u8bcd\u89c4\u5f8b"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(t.a,{href:"https://leetcode.cn/problems/word-pattern",children:"290.\u5355\u8bcd\u89c4\u5f8b"}),(0,s.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,s.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u79cd\u89c4\u5f8b pattern \u548c\u4e00\u4e2a\u5b57\u7b26\u4e32 str \uff0c\u5224\u65ad str \u662f\u5426\u9075\u5faa\u76f8\u540c\u7684\u89c4\u5f8b\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-12-16"}),"\n",(0,s.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,s.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.2MB"}),"\n",(0,s.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u54c8\u5e0c\u8868\u548c set \u50a8\u5b58\u5df2\u904d\u5386\u8fc7\u7684\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"function wordPattern(pattern: string, s: string): boolean {\n  const cache: Record<string, string> = {};\n  const set = new Set<string>();\n  const arr = s.split(' ');\n  const len = arr.length;\n  if (len !== pattern.length) return false;\n  for (let i = 0; i < len; i++) {\n    const p = pattern[i];\n    const str = arr[i];\n    if (!cache[p] && !set.has(str)) {\n      cache[p] = str;\n      set.add(str);\n    } else if (cache[p] !== str) return false;\n  }\n  return true;\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},31503:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(30758);const s={},c=r.createContext(s);function i(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);