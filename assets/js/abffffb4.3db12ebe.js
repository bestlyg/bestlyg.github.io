"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[90452],{92424:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/1101-1200/\u7b2cN\u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570","title":"1137.\u7b2cN\u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570","description":"\u94fe\u63a5\uff1a1137.\u7b2cN\u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570","source":"@site/docs/leetcode/1101-1200/1137.\u7b2cN\u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570.md","sourceDirName":"leetcode/1101-1200","slug":"/leetcode/1101-1200/\u7b2cN\u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570","permalink":"/docs/leetcode/1101-1200/\u7b2cN\u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1137,"frontMatter":{},"sidebar":"journal","previous":{"title":"1130.\u53f6\u503c\u7684\u6700\u5c0f\u4ee3\u4ef7\u751f\u6210\u6811","permalink":"/docs/leetcode/1101-1200/\u53f6\u503c\u7684\u6700\u5c0f\u4ee3\u4ef7\u751f\u6210\u6811"},"next":{"title":"1138.\u5b57\u6bcd\u677f\u4e0a\u7684\u8def\u5f84","permalink":"/docs/leetcode/1101-1200/\u5b57\u6bcd\u677f\u4e0a\u7684\u8def\u5f84"}}');var r=t(25105),i=t(8556);const l={},c="1137.\u7b2cN\u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570",o={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1137\u7b2cn\u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570",children:"1137.\u7b2cN\u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/n-th-tribonacci-number",children:"1137.\u7b2cN\u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8bb0\u5fc6\u5316\u641c\u7d22\u3001\u6570\u5b66\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u6574\u6570 n\uff0c\u8bf7\u8fd4\u56de\u7b2c n \u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570 Tn \u7684\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-09"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a148ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46.4MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u6570\u7ec4\u8fdb\u884c\u76f8\u4e58\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function nthSuperUglyNumber(n: number, primes: number[]): number {\n  const len = primes.length;\n  const pos = new Array(len).fill(0);\n  const list: number[] = [1];\n  let val = 1;\n  for (let i = 1; i < n; i++) {\n    val = Math.min(...pos.map((v, i) => list[v] * primes[i]));\n    for (let i = 0; i < len; i++) if (list[pos[i]] * primes[i] === val) pos[i]++;\n    list.push(val);\n  }\n  return val;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(58101);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);