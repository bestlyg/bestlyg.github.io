"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[86761],{1226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/1001-1100/\u5b57\u7b26\u4e32\u7684\u6700\u5927\u516c\u56e0\u5b50","title":"1071.\u5b57\u7b26\u4e32\u7684\u6700\u5927\u516c\u56e0\u5b50","description":"\u94fe\u63a5\uff1a1071.\u5b57\u7b26\u4e32\u7684\u6700\u5927\u516c\u56e0\u5b50","source":"@site/docs/leetcode/1001-1100/1071.\u5b57\u7b26\u4e32\u7684\u6700\u5927\u516c\u56e0\u5b50.md","sourceDirName":"leetcode/1001-1100","slug":"/leetcode/1001-1100/\u5b57\u7b26\u4e32\u7684\u6700\u5927\u516c\u56e0\u5b50","permalink":"/docs/leetcode/1001-1100/\u5b57\u7b26\u4e32\u7684\u6700\u5927\u516c\u56e0\u5b50","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1071,"frontMatter":{},"sidebar":"journal","previous":{"title":"1054.\u8ddd\u79bb\u76f8\u7b49\u7684\u6761\u5f62\u7801","permalink":"/docs/leetcode/1001-1100/\u8ddd\u79bb\u76f8\u7b49\u7684\u6761\u5f62\u7801"},"next":{"title":"1072.\u6309\u5217\u7ffb\u8f6c\u5f97\u5230\u6700\u5927\u503c\u7b49\u884c\u6570","permalink":"/docs/leetcode/1001-1100/\u6309\u5217\u7ffb\u8f6c\u5f97\u5230\u6700\u5927\u503c\u7b49\u884c\u6570"}}');var s=n(86070),c=n(31503);const i={},o="1071.\u5b57\u7b26\u4e32\u7684\u6700\u5927\u516c\u56e0\u5b50",l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"1071\u5b57\u7b26\u4e32\u7684\u6700\u5927\u516c\u56e0\u5b50",children:"1071.\u5b57\u7b26\u4e32\u7684\u6700\u5927\u516c\u56e0\u5b50"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(t.a,{href:"https://leetcode.cn/problems/greatest-common-divisor-of-strings",children:"1071.\u5b57\u7b26\u4e32\u7684\u6700\u5927\u516c\u56e0\u5b50"}),(0,s.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u5b57\u7b26\u4e32",(0,s.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u6700\u957f\u5b57\u7b26\u4e32 X\uff0c\u8981\u6c42\u6ee1\u8db3 X \u80fd\u9664\u5c3d str1 \u4e14 X \u80fd\u9664\u5c3d str2\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-04"}),"\n",(0,s.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,s.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.4MB"}),"\n",(0,s.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7b97\u51fa\u8d28\u6570\u4f4d\u7f6e\u8fdb\u884c\u9636\u4e58\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"function gcd(a: number, b: number) {\n  if (!b) return a;\n  return gcd(b, a % b);\n}\nfunction gcdOfStrings(str1: string, str2: string): string {\n  if (str1 + str2 !== str2 + str1) return '';\n  return str1.substr(0, gcd(str1.length, str2.length));\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},31503:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(30758);const s={},c=r.createContext(s);function i(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);