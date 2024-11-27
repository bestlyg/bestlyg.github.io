"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[2770],{17998:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/301-400/\u8d85\u7ea7\u6b21\u65b9","title":"372.\u8d85\u7ea7\u6b21\u65b9","description":"\u94fe\u63a5\uff1a372.\u8d85\u7ea7\u6b21\u65b9","source":"@site/docs/leetcode/301-400/372.\u8d85\u7ea7\u6b21\u65b9.md","sourceDirName":"leetcode/301-400","slug":"/leetcode/301-400/\u8d85\u7ea7\u6b21\u65b9","permalink":"/docs/leetcode/301-400/\u8d85\u7ea7\u6b21\u65b9","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":372,"frontMatter":{},"sidebar":"journal","previous":{"title":"368.\u6700\u5927\u6574\u9664\u5b50\u96c6","permalink":"/docs/leetcode/301-400/\u6700\u5927\u6574\u9664\u5b50\u96c6"},"next":{"title":"373.\u67e5\u627e\u548c\u6700\u5c0f\u7684K\u5bf9\u6570\u5b57","permalink":"/docs/leetcode/301-400/\u67e5\u627e\u548c\u6700\u5c0f\u7684K\u5bf9\u6570\u5b57"}}');var r=t(86070),i=t(31503);const c={},l="372.\u8d85\u7ea7\u6b21\u65b9",o={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"372\u8d85\u7ea7\u6b21\u65b9",children:"372.\u8d85\u7ea7\u6b21\u65b9"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/super-pow",children:"372.\u8d85\u7ea7\u6b21\u65b9"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u5206\u6cbb",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4f60\u7684\u4efb\u52a1\u662f\u8ba1\u7b97 ab \u5bf9 1337 \u53d6\u6a21\uff0ca \u662f\u4e00\u4e2a\u6b63\u6574\u6570\uff0cb \u662f\u4e00\u4e2a\u975e\u5e38\u5927\u7684\u6b63\u6574\u6570\u4e14\u4f1a\u4ee5\u6570\u7ec4\u5f62\u5f0f\u7ed9\u51fa\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-05"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.7MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","99^(2345) === (99^234)^10 * 99^5\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"const MOD = 1337;\nfunction pow(a: number, b: number) {\n  let ans = 1;\n  while (b--) ans = (ans * a) % MOD;\n  return ans;\n}\nfunction superPow(a: number, b: number[]): number {\n  let ans = 1;\n  for (let i = 0; i < b.length; i++) {\n    ans = (pow(ans, 10) * pow(a, b[i])) % MOD;\n  }\n  return ans;\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-11"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a152ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.3MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u62c6\u89e3\u6b21\u65b9\uff0c\u5feb\u901f\u5e42\u76f8\u4e58\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"const mod = 1337n;\nfunction pow(a: bigint, b: bigint): bigint {\n  let ans = 1n;\n  let num = a;\n  while (b) {\n    if (b & 1n) ans = (ans * num) % mod;\n    num = (num * num) % mod;\n    b >>= 1n;\n  }\n  return ans;\n}\nfunction superPow(a: number, b: number[]): number {\n  let ans = 1n;\n  const biga = BigInt(a);\n  for (const num of b) {\n    ans = (pow(ans, 10n) * pow(biga, BigInt(num))) % mod;\n  }\n  return Number(ans);\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var s=t(30758);const r={},i=s.createContext(r);function c(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);