"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[48727],{19663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"leetcode/1401-1500/\u5f62\u6210\u4e24\u4e2a\u5f02\u6216\u76f8\u7b49\u6570\u7ec4\u7684\u4e09\u5143\u7ec4\u6570\u76ee","title":"1442.\u5f62\u6210\u4e24\u4e2a\u5f02\u6216\u76f8\u7b49\u6570\u7ec4\u7684\u4e09\u5143\u7ec4\u6570\u76ee","description":"\u94fe\u63a5\uff1a1442.\u5f62\u6210\u4e24\u4e2a\u5f02\u6216\u76f8\u7b49\u6570\u7ec4\u7684\u4e09\u5143\u7ec4\u6570\u76ee","source":"@site/docs/leetcode/1401-1500/1442.\u5f62\u6210\u4e24\u4e2a\u5f02\u6216\u76f8\u7b49\u6570\u7ec4\u7684\u4e09\u5143\u7ec4\u6570\u76ee.md","sourceDirName":"leetcode/1401-1500","slug":"/leetcode/1401-1500/\u5f62\u6210\u4e24\u4e2a\u5f02\u6216\u76f8\u7b49\u6570\u7ec4\u7684\u4e09\u5143\u7ec4\u6570\u76ee","permalink":"/docs/leetcode/1401-1500/\u5f62\u6210\u4e24\u4e2a\u5f02\u6216\u76f8\u7b49\u6570\u7ec4\u7684\u4e09\u5143\u7ec4\u6570\u76ee","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1442,"frontMatter":{},"sidebar":"journal","previous":{"title":"1441.\u7528\u6808\u64cd\u4f5c\u6784\u5efa\u6570\u7ec4","permalink":"/docs/leetcode/1401-1500/\u7528\u6808\u64cd\u4f5c\u6784\u5efa\u6570\u7ec4"},"next":{"title":"1444.\u5207\u62ab\u8428\u7684\u65b9\u6848\u6570","permalink":"/docs/leetcode/1401-1500/\u5207\u62ab\u8428\u7684\u65b9\u6848\u6570"}}');var s=t(25105),i=t(8556);const l={},c="1442.\u5f62\u6210\u4e24\u4e2a\u5f02\u6216\u76f8\u7b49\u6570\u7ec4\u7684\u4e09\u5143\u7ec4\u6570\u76ee",o={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1442\u5f62\u6210\u4e24\u4e2a\u5f02\u6216\u76f8\u7b49\u6570\u7ec4\u7684\u4e09\u5143\u7ec4\u6570\u76ee",children:"1442.\u5f62\u6210\u4e24\u4e2a\u5f02\u6216\u76f8\u7b49\u6570\u7ec4\u7684\u4e09\u5143\u7ec4\u6570\u76ee"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/count-triplets-that-can-form-two-arrays-of-equal-xor",children:"1442.\u5f62\u6210\u4e24\u4e2a\u5f02\u6216\u76f8\u7b49\u6570\u7ec4\u7684\u4e09\u5143\u7ec4\u6570\u76ee"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u6570\u5b66\u3001\u524d\u7f00\u548c",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u8fd4\u56de\u80fd\u591f\u4ee4 a == b \u6210\u7acb\u7684\u4e09\u5143\u7ec4 (i, j , k) \u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-18"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a100ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5728\u524d\u540e\u76f8\u7b49\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u53d6\u4efb\u610f j\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function countTriplets(arr: number[]): number {\n  const len = arr.length;\n  if (len === 1) return 0;\n  let ans = 0;\n  const prefixSumList: number[] = [ans, ...arr.map(v => (ans ^= v))];\n  ans = 0;\n  for (let k = 1; k < len; k++) {\n    for (let i = 0; i < k; i++) {\n      if (prefixSumList[k + 1] === prefixSumList[i]) ans += k - i;\n    }\n  }\n  return ans;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-18"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a148ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.8MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u7f00\u548c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function countTriplets(arr: number[]): number {\n  const len = arr.length;\n  if (len === 1) return 0;\n  let ans = 0;\n  const prefixSumList: number[] = [ans, ...arr.map(v => (ans ^= v))];\n  ans = 0;\n  for (let k = 1; k < len; k++) {\n    for (let j = 1; j <= k; j++) {\n      for (let i = 0; i < j; i++) {\n        const a = prefixSumList[j] ^ prefixSumList[i];\n        const b = prefixSumList[k + 1] ^ prefixSumList[j];\n        if (a === b) ans++;\n      }\n    }\n  }\n  return ans;\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var r=t(58101);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);