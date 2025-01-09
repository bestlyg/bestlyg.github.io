"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[78337],{57040:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/301-400/\u6574\u6570\u62c6\u5206","title":"343.\u6574\u6570\u62c6\u5206","description":"\u94fe\u63a5\uff1a343.\u6574\u6570\u62c6\u5206","source":"@site/docs/leetcode/301-400/343.\u6574\u6570\u62c6\u5206.md","sourceDirName":"leetcode/301-400","slug":"/leetcode/301-400/\u6574\u6570\u62c6\u5206","permalink":"/docs/leetcode/301-400/\u6574\u6570\u62c6\u5206","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":343,"frontMatter":{},"sidebar":"journal","previous":{"title":"341.\u6241\u5e73\u5316\u5d4c\u5957\u5217\u8868\u8fed\u4ee3\u5668","permalink":"/docs/leetcode/301-400/\u6241\u5e73\u5316\u5d4c\u5957\u5217\u8868\u8fed\u4ee3\u5668"},"next":{"title":"344.\u53cd\u8f6c\u5b57\u7b26\u4e32","permalink":"/docs/leetcode/301-400/\u53cd\u8f6c\u5b57\u7b26\u4e32"}}');var s=t(25105),i=t(8556);const c={},l="343.\u6574\u6570\u62c6\u5206",o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"343\u6574\u6570\u62c6\u5206",children:"343.\u6574\u6570\u62c6\u5206"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/integer-break",children:"343.\u6574\u6570\u62c6\u5206"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6b63\u6574\u6570 n\uff0c\u5c06\u5176\u62c6\u5206\u4e3a\u81f3\u5c11\u4e24\u4e2a\u6b63\u6574\u6570\u7684\u548c\uff0c\u5e76\u4f7f\u8fd9\u4e9b\u6574\u6570\u7684\u4e58\u79ef\u6700\u5927\u5316\u3002 \u8fd4\u56de\u4f60\u53ef\u4ee5\u83b7\u5f97\u7684\u6700\u5927\u4e58\u79ef\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-07-30"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a37.4MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i]=i \u7684\u6700\u5927\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function integerBreak(n: number): number {\n  const dp = new Array(n + 1).fill(0);\n  for (let i = 2; i <= n; i++) {\n    let max = 0;\n    for (let j = 1; j <= i - 1; j++) {\n      max = Math.max(max, j * Math.max(i - j, dp[i - j]));\n    }\n    dp[i] = max;\n  }\n  return dp[n];\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(58101);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);