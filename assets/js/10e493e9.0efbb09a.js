"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[67313],{65198:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(86070),r=t(31503);const i={},l="214.\u6700\u77ed\u56de\u6587\u4e32",c={id:"leetcode/201-300/\u6700\u77ed\u56de\u6587\u4e32",title:"214.\u6700\u77ed\u56de\u6587\u4e32",description:"\u94fe\u63a5\uff1a214.\u6700\u77ed\u56de\u6587\u4e32",source:"@site/docs/leetcode/201-300/214.\u6700\u77ed\u56de\u6587\u4e32.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u6700\u77ed\u56de\u6587\u4e32",permalink:"/docs/leetcode/201-300/\u6700\u77ed\u56de\u6587\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:214,frontMatter:{},sidebar:"journal",previous:{title:"213.\u6253\u5bb6\u52ab\u820dII",permalink:"/docs/leetcode/201-300/\u6253\u5bb6\u52ab\u820dII"},next:{title:"215.\u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20",permalink:"/docs/leetcode/201-300/\u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"214\u6700\u77ed\u56de\u6587\u4e32",children:"214.\u6700\u77ed\u56de\u6587\u4e32"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/shortest-palindrome",children:"214.\u6700\u77ed\u56de\u6587\u4e32"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u5b57\u7b26\u4e32\u5339\u914d\u3001\u54c8\u5e0c\u51fd\u6570\u3001\u6eda\u52a8\u54c8\u5e0c",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32 s\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u5b57\u7b26\u4e32\u524d\u9762\u6dfb\u52a0\u5b57\u7b26\u5c06\u5176\u8f6c\u6362\u4e3a\u56de\u6587\u4e32\u3002\u627e\u5230\u5e76\u8fd4\u56de\u53ef\u4ee5\u7528\u8fd9\u79cd\u65b9\u5f0f\u8f6c\u6362\u7684\u6700\u77ed\u56de\u6587\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-08-29"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1164ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.5MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u901a\u8fc7\u5224\u65ad\u6bcf\u4e2a\u5b50\u4e32\u662f\u5426\u4e3a\u56de\u6587\uff0c\u5982\u679c\u662f\u5219\u6dfb\u52a0\u540e\u7eed\u5b57\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function shortestPalindrome(s: string): string {\n  if (isPalindrome(s)) return s;\n  for (let i = s.length - 1; i >= 0; i--) {\n    const subS = s.substring(0, i);\n    if (!isPalindrome(subS)) continue;\n    return s.substr(i).split('').reverse().join('') + s;\n  }\n  return '';\n  function isPalindrome(s: string) {\n    let l = 0;\n    let r = s.length - 1;\n    while (l < r) {\n      if (s[l] !== s[r]) return false;\n      l++;\n      r--;\n    }\n    return true;\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-15"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.4MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","kmp\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function shortestPalindrome(s: string): string {\n  const n = s.length;\n  let str = s + '#';\n  for (let i = n - 1; i >= 0; i--) str += s[i];\n  const next = [-1];\n  for (let i = 1, j = -1; i < n * 2 + 1; i++) {\n    while (j !== -1 && str[j + 1] !== str[i]) j = next[j];\n    if (str[j + 1] === str[i]) j++;\n    next[i] = j;\n  }\n  const idx = next[2 * n];\n  let ans = s;\n  for (let i = Math.max(0, idx + 1); i < n; i++) ans = s[i] + ans;\n  return ans;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(30758);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);