"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[59276],{13733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"leetcode/1101-1200/\u8d28\u6570\u6392\u5217","title":"1175.\u8d28\u6570\u6392\u5217","description":"\u94fe\u63a5\uff1a1175.\u8d28\u6570\u6392\u5217","source":"@site/docs/leetcode/1101-1200/1175.\u8d28\u6570\u6392\u5217.md","sourceDirName":"leetcode/1101-1200","slug":"/leetcode/1101-1200/\u8d28\u6570\u6392\u5217","permalink":"/docs/leetcode/1101-1200/\u8d28\u6570\u6392\u5217","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1175,"frontMatter":{},"sidebar":"journal","previous":{"title":"1172.\u9910\u76d8\u6808","permalink":"/docs/leetcode/1101-1200/\u9910\u76d8\u6808"},"next":{"title":"1177.\u6784\u5efa\u56de\u6587\u4e32\u68c0\u6d4b","permalink":"/docs/leetcode/1101-1200/\u6784\u5efa\u56de\u6587\u4e32\u68c0\u6d4b"}}');var s=t(25105),i=t(8556);const c={},o="1175.\u8d28\u6570\u6392\u5217",l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1175\u8d28\u6570\u6392\u5217",children:"1175.\u8d28\u6570\u6392\u5217"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/prime-arrangements",children:"1175.\u8d28\u6570\u6392\u5217"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u5e2e\u5fd9\u7ed9\u4ece 1 \u5230 n \u7684\u6570\u8bbe\u8ba1\u6392\u5217\u65b9\u6848\uff0c\u4f7f\u5f97\u6240\u6709\u7684\u300c\u8d28\u6570\u300d\u90fd\u5e94\u8be5\u88ab\u653e\u5728\u300c\u8d28\u6570\u7d22\u5f15\u300d\uff08\u7d22\u5f15\u4ece 1 \u5f00\u59cb\uff09\u4e0a\uff1b\u4f60\u9700\u8981\u8fd4\u56de\u53ef\u80fd\u7684\u65b9\u6848\u603b\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-04"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.5MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7b97\u51fa\u8d28\u6570\u4f4d\u7f6e\u8fdb\u884c\u9636\u4e58\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function numPrimeArrangements(n: number): number {\n  const MOD = BigInt(10 ** 9 + 7);\n  const cnt = count(n);\n  return Number((factorial(cnt) * factorial(n - cnt)) % MOD);\n  function count(n: number): number {\n    const arr: boolean[] = new Array(n + 1).fill(true);\n    arr[0] = arr[1] = false;\n    for (let i = 2; i <= n; i++) {\n      if (!arr[i]) continue;\n      for (let j = 2; i * j <= n; j++) arr[i * j] = false;\n    }\n    return arr.filter(Boolean).length;\n  }\n  function factorial(n: number): bigint {\n    let ans = 1n;\n    for (let i = 2n; i <= n; i++) ans = (ans * i) % MOD;\n    return ans;\n  }\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(58101);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);