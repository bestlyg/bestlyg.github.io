"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[83719],{67570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(86070),o=t(31503);const s={},i="1128.\u7b49\u4ef7\u591a\u7c73\u8bfa\u9aa8\u724c\u5bf9\u7684\u6570\u91cf",c={id:"leetcode/1101-1200/\u7b49\u4ef7\u591a\u7c73\u8bfa\u9aa8\u724c\u5bf9\u7684\u6570\u91cf",title:"1128.\u7b49\u4ef7\u591a\u7c73\u8bfa\u9aa8\u724c\u5bf9\u7684\u6570\u91cf",description:"\u94fe\u63a5\uff1a1128.\u7b49\u4ef7\u591a\u7c73\u8bfa\u9aa8\u724c\u5bf9\u7684\u6570\u91cf",source:"@site/docs/leetcode/1101-1200/1128.\u7b49\u4ef7\u591a\u7c73\u8bfa\u9aa8\u724c\u5bf9\u7684\u6570\u91cf.md",sourceDirName:"leetcode/1101-1200",slug:"/leetcode/1101-1200/\u7b49\u4ef7\u591a\u7c73\u8bfa\u9aa8\u724c\u5bf9\u7684\u6570\u91cf",permalink:"/docs/leetcode/1101-1200/\u7b49\u4ef7\u591a\u7c73\u8bfa\u9aa8\u724c\u5bf9\u7684\u6570\u91cf",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1128,frontMatter:{},sidebar:"journal",previous:{title:"1125.\u6700\u5c0f\u7684\u5fc5\u8981\u56e2\u961f",permalink:"/docs/leetcode/1101-1200/\u6700\u5c0f\u7684\u5fc5\u8981\u56e2\u961f"},next:{title:"1129.\u989c\u8272\u4ea4\u66ff\u7684\u6700\u77ed\u8def\u5f84",permalink:"/docs/leetcode/1101-1200/\u989c\u8272\u4ea4\u66ff\u7684\u6700\u77ed\u8def\u5f84"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1128\u7b49\u4ef7\u591a\u7c73\u8bfa\u9aa8\u724c\u5bf9\u7684\u6570\u91cf",children:"1128.\u7b49\u4ef7\u591a\u7c73\u8bfa\u9aa8\u724c\u5bf9\u7684\u6570\u91cf"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/number-of-equivalent-domino-pairs",children:"1128.\u7b49\u4ef7\u591a\u7c73\u8bfa\u9aa8\u724c\u5bf9\u7684\u6570\u91cf"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u8ba1\u6570",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u7531\u4e00\u4e9b\u591a\u7c73\u8bfa\u9aa8\u724c\u7ec4\u6210\u7684\u5217\u8868 dominoes\u3002\u5728 \xa00 <= i < j < dominoes.length\xa0 \u7684\u524d\u63d0\u4e0b\uff0c\u627e\u51fa\u6ee1\u8db3 \xa0dominoes[i] \u548c \xa0dominoes[j]\xa0 \u7b49\u4ef7\u7684\u9aa8\u724c\u5bf9 (i, j) \u7684\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-01-26"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a128ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a48.9MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7528\u54c8\u5e0c\u8868\u50a8\u5b58\u7ed3\u679c\u540e\u8fdb\u884c\u7b5b\u9009\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function numEquivDominoPairs(dominoes: number[][]): number {\n  const map: Record<string, number> = {};\n  const format = (n1: number, n2: number) => `${n1}-${n2}`;\n  for (let [n1, n2] of dominoes) {\n    if (n1 > n2) [n1, n2] = [n2, n1];\n    const str = format(n1, n2);\n    map[str] = 1 + (map[str] ?? 0);\n  }\n  return Object.entries(map)\n    .filter(([, v]) => v > 1)\n    .reduce((total, [, count]) => total + (count * (count - 1)) / 2, 0);\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(30758);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);