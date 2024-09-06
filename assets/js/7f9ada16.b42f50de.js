"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[19698],{50806:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=t(86070),s=t(25710);const i={},l="5.\u6700\u957f\u56de\u6587\u5b50\u4e32",c={id:"leetcode/1-100/\u6700\u957f\u56de\u6587\u5b50\u4e32",title:"5.\u6700\u957f\u56de\u6587\u5b50\u4e32",description:"\u94fe\u63a5\uff1a5.\u6700\u957f\u56de\u6587\u5b50\u4e32",source:"@site/docs/leetcode/1-100/5.\u6700\u957f\u56de\u6587\u5b50\u4e32.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u6700\u957f\u56de\u6587\u5b50\u4e32",permalink:"/docs/leetcode/1-100/\u6700\u957f\u56de\u6587\u5b50\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"journal",previous:{title:"4.\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570",permalink:"/docs/leetcode/1-100/\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570"},next:{title:"6.Z\u5b57\u5f62\u53d8\u6362",permalink:"/docs/leetcode/1-100/Z\u5b57\u5f62\u53d8\u6362"}},a={},o=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"5\u6700\u957f\u56de\u6587\u5b50\u4e32",children:"5.\u6700\u957f\u56de\u6587\u5b50\u4e32"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/longest-palindromic-substring",children:"5.\u6700\u957f\u56de\u6587\u5b50\u4e32"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32 s\uff0c\u627e\u5230 s \u4e2d\u6700\u957f\u7684\u56de\u6587\u5b50\u4e32\u3002\u4f60\u53ef\u4ee5\u5047\u8bbe s \u7684\u6700\u5927\u957f\u5ea6\u4e3a 1000\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-07"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.6MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5bf9\u6bcf\u4e2a\u5b57\u7b26\u4f9d\u6b21\u5224\u65ad\u4e24\u8fb9\u662f\u5426\u76f8\u7b49\uff0c\u76f8\u7b49\u5219+1\uff0c\u4e0d\u76f8\u7b49\u5219\u8df3\u8fc7\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {string} s\n * @return {string}\n */\nvar longestPalindrome = function (s) {\n  const len = s.length;\n  let maxRes = '';\n  if (len === 0) return maxRes;\n  for (let i = 0; i < len; i++) {\n    const c = s[i];\n    let left = i - 1;\n    let right = i + 1;\n    let maxS = c;\n    while (i < len && c === s[i + 1]) {\n      maxS += c;\n      right++;\n      i++;\n    }\n    while (left >= 0 && right <= len - 1) {\n      if (s[left] !== s[right]) break;\n      maxS = s[left] + maxS + s[right];\n      left--;\n      right++;\n    }\n    maxRes = maxS.length > maxRes.length ? maxS : maxRes;\n  }\n  return maxRes;\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-16"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9a6c\u62c9\u8f66\u7b97\u6cd5\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function longestPalindrome(s: string): string {\n  s = createStr(s);\n  let max = -1;\n  let maxIdx = -1;\n  const n = s.length;\n  const arr = new Array(n).fill(0);\n  let ans = s[0];\n  for (let i = 0; i < n; i++) {\n    if (i <= max) {\n      arr[i] = Math.min(arr[2 * maxIdx - i], max - i);\n    }\n    let l = i - arr[i];\n    let r = i + arr[i];\n    while (l - 1 >= 0 && r + 1 <= n - 1 && s[l - 1] === s[r + 1]) {\n      l--;\n      r++;\n    }\n    if (r > max) {\n      max = r;\n      maxIdx = i;\n    }\n    arr[i] = r - i;\n    if (ans.length < r - l + 1) {\n      ans = s.substring(l, r + 1);\n    }\n  }\n  return ans.replace(/#/g, '');\n  function createStr(s: string) {\n    let ans = '#';\n    for (let i = 0; s[i]; i++) ans += s[i] + '#';\n    return ans;\n  }\n}\n"})})]})}function x(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var r=t(30758);const s={},i=r.createContext(s);function l(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);