"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[61587],{91583:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/1-100/\u6700\u5c0f\u8def\u5f84\u548c","title":"64.\u6700\u5c0f\u8def\u5f84\u548c","description":"\u94fe\u63a5\uff1a64.\u6700\u5c0f\u8def\u5f84\u548c","source":"@site/docs/leetcode/1-100/64.\u6700\u5c0f\u8def\u5f84\u548c.md","sourceDirName":"leetcode/1-100","slug":"/leetcode/1-100/\u6700\u5c0f\u8def\u5f84\u548c","permalink":"/docs/leetcode/1-100/\u6700\u5c0f\u8def\u5f84\u548c","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":64,"frontMatter":{},"sidebar":"journal","previous":{"title":"63.\u4e0d\u540c\u8def\u5f84II","permalink":"/docs/leetcode/1-100/\u4e0d\u540c\u8def\u5f84II"},"next":{"title":"65.\u6709\u6548\u6570\u5b57","permalink":"/docs/leetcode/1-100/\u6709\u6548\u6570\u5b57"}}');var i=t(25105),s=t(8556);const o={},c="64.\u6700\u5c0f\u8def\u5f84\u548c",l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"64\u6700\u5c0f\u8def\u5f84\u548c",children:"64.\u6700\u5c0f\u8def\u5f84\u548c"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-path-sum",children:"64.\u6700\u5c0f\u8def\u5f84\u548c"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u77e9\u9635",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5305\u542b\u975e\u8d1f\u6574\u6570\u7684 m x n \u7f51\u683c\uff0c\u8bf7\u627e\u51fa\u4e00\u6761\u4ece\u5de6\u4e0a\u89d2\u5230\u53f3\u4e0b\u89d2\u7684\u8def\u5f84\uff0c\u4f7f\u5f97\u8def\u5f84\u4e0a\u7684\u6570\u5b57\u603b\u548c\u4e3a\u6700\u5c0f\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-07-23"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a116ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.5MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212,dp[i][j]=i\uff0cj \u5750\u6807\u65f6\u7684\u6700\u5c0f\u503c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function minPathSum(grid: number[][]): number {\n  const row = grid.length;\n  const col = grid[0].length;\n  const dp = new Array(row).fill(0).map(_ => new Array(col));\n  dp[row - 1][col - 1] = grid[row - 1][col - 1];\n  for (let i = row - 1; i >= 0; i--) {\n    for (let j = col - 1; j >= 0; j--) {\n      const num = grid[i][j];\n      if (i === row - 1 && j === col - 1) {\n      } else if (i === row - 1) {\n        dp[i][j] = dp[i][j + 1] + num;\n      } else if (j === col - 1) {\n        dp[i][j] = dp[i + 1][j] + num;\n      } else {\n        dp[i][j] = Math.min(dp[i][j + 1], dp[i + 1][j]) + num;\n      }\n    }\n  }\n  return dp[0][0];\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(58101);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);