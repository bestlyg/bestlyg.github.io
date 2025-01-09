"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[23751],{69874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/401-500/\u9752\u86d9\u8fc7\u6cb3","title":"403.\u9752\u86d9\u8fc7\u6cb3","description":"\u94fe\u63a5\uff1a403.\u9752\u86d9\u8fc7\u6cb3","source":"@site/docs/leetcode/401-500/403.\u9752\u86d9\u8fc7\u6cb3.md","sourceDirName":"leetcode/401-500","slug":"/leetcode/401-500/\u9752\u86d9\u8fc7\u6cb3","permalink":"/docs/leetcode/401-500/\u9752\u86d9\u8fc7\u6cb3","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":403,"frontMatter":{},"sidebar":"journal","previous":{"title":"402.\u79fb\u6389K\u4f4d\u6570\u5b57","permalink":"/docs/leetcode/401-500/\u79fb\u6389K\u4f4d\u6570\u5b57"},"next":{"title":"404.\u5de6\u53f6\u5b50\u4e4b\u548c","permalink":"/docs/leetcode/401-500/\u5de6\u53f6\u5b50\u4e4b\u548c"}}');var r=t(25105),o=t(8556);const i={},c="403.\u9752\u86d9\u8fc7\u6cb3",l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"403\u9752\u86d9\u8fc7\u6cb3",children:"403.\u9752\u86d9\u8fc7\u6cb3"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/frog-jump",children:"403.\u9752\u86d9\u8fc7\u6cb3"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4e00\u53ea\u9752\u86d9\u60f3\u8981\u8fc7\u6cb3\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-29"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a948ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.5MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\uff0c\u8bb0\u5f55\u6bcf\u4e2a\u77f3\u5934\u53ef\u8df3\u7684\u6b65\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function canCross(stones: number[]): boolean {\n  const len = stones.length;\n  const dp: Set<number>[] = new Array(len).fill(0).map(_ => new Set<number>());\n  dp[0].add(0);\n  for (let i = 1; i < len; i++) {\n    const stone = stones[i];\n    for (let j = 0; j < i; j++) {\n      const minus = stone - stones[j];\n      const set = dp[j];\n      if (set.size === 0) continue;\n      if (set.has(minus) || set.has(minus - 1) || set.has(minus + 1)) {\n        dp[i].add(minus);\n      }\n    }\n  }\n  return dp[len - 1].size !== 0;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(58101);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);