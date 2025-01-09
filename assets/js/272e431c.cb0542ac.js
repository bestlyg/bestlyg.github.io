"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[85346],{48257:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"leetcode/501-600/\u51fa\u754c\u7684\u8def\u5f84\u6570","title":"576.\u51fa\u754c\u7684\u8def\u5f84\u6570","description":"\u94fe\u63a5\uff1a576.\u51fa\u754c\u7684\u8def\u5f84\u6570","source":"@site/docs/leetcode/501-600/576.\u51fa\u754c\u7684\u8def\u5f84\u6570.md","sourceDirName":"leetcode/501-600","slug":"/leetcode/501-600/\u51fa\u754c\u7684\u8def\u5f84\u6570","permalink":"/docs/leetcode/501-600/\u51fa\u754c\u7684\u8def\u5f84\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":576,"frontMatter":{},"sidebar":"journal","previous":{"title":"575.\u5206\u7cd6\u679c","permalink":"/docs/leetcode/501-600/\u5206\u7cd6\u679c"},"next":{"title":"581.\u6700\u77ed\u65e0\u5e8f\u8fde\u7eed\u5b50\u6570\u7ec4","permalink":"/docs/leetcode/501-600/\u6700\u77ed\u65e0\u5e8f\u8fde\u7eed\u5b50\u6570\u7ec4"}}');var r=t(25105),s=t(8556);const c={},l="576.\u51fa\u754c\u7684\u8def\u5f84\u6570",i={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"576\u51fa\u754c\u7684\u8def\u5f84\u6570",children:"576.\u51fa\u754c\u7684\u8def\u5f84\u6570"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/out-of-boundary-paths",children:"576.\u51fa\u754c\u7684\u8def\u5f84\u6570"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u52a8\u6001\u89c4\u5212",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e94\u4e2a\u6574\u6570 m\u3001n\u3001maxMove\u3001startRow \u4ee5\u53ca startColumn \uff0c\u627e\u51fa\u5e76\u8fd4\u56de\u53ef\u4ee5\u5c06\u7403\u79fb\u51fa\u8fb9\u754c\u7684\u8def\u5f84\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-15"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a120ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43.6MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i][j][k]=\u7b2c i \u6b65\u65f6\uff0c[j][k]\u5750\u6807\u7684\u6700\u5927\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function findPaths(\n  m: number,\n  n: number,\n  maxMove: number,\n  startRow: number,\n  startColumn: number\n): number {\n  const mod = 10 ** 9 + 7;\n  const directions: [number, number][] = [\n    [0, 1],\n    [1, 0],\n    [-1, 0],\n    [0, -1],\n  ];\n  const dp = new Array(maxMove + 1)\n    .fill(0)\n    .map(_ => new Array(m).fill(0).map(_ => new Array(n).fill(0)));\n  dp[0][startRow][startColumn] = 1;\n  let ans = 0;\n  for (let i = 0; i < maxMove; i++) {\n    for (let j = 0; j < m; j++) {\n      for (let k = 0; k < n; k++) {\n        const cnt = dp[i][j][k];\n        if (cnt <= 0) continue;\n        for (const [moveRow, moveCol] of directions) {\n          const row = j + moveRow;\n          const col = k + moveCol;\n          if (row >= 0 && row < m && col >= 0 && col < n) {\n            dp[i + 1][row][col] = (dp[i + 1][row][col] + cnt) % mod;\n          } else {\n            ans = (ans + cnt) % mod;\n          }\n        }\n      }\n    }\n  }\n  return ans;\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},8556:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var o=t(58101);const r={},s=o.createContext(r);function c(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);