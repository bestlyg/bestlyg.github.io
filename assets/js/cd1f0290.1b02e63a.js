"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[39362],{91953:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(86070),i=t(25710);const s={},l="664.\u5947\u602a\u7684\u6253\u5370\u673a",c={id:"leetcode/601-700/\u5947\u602a\u7684\u6253\u5370\u673a",title:"664.\u5947\u602a\u7684\u6253\u5370\u673a",description:"\u94fe\u63a5\uff1a664.\u5947\u602a\u7684\u6253\u5370\u673a",source:"@site/docs/leetcode/601-700/664.\u5947\u602a\u7684\u6253\u5370\u673a.md",sourceDirName:"leetcode/601-700",slug:"/leetcode/601-700/\u5947\u602a\u7684\u6253\u5370\u673a",permalink:"/docs/leetcode/601-700/\u5947\u602a\u7684\u6253\u5370\u673a",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:664,frontMatter:{},sidebar:"journal",previous:{title:"661.\u56fe\u7247\u5e73\u6ed1\u5668",permalink:"/docs/leetcode/601-700/\u56fe\u7247\u5e73\u6ed1\u5668"},next:{title:"665.\u975e\u9012\u51cf\u6570\u5217",permalink:"/docs/leetcode/601-700/\u975e\u9012\u51cf\u6570\u5217"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"664\u5947\u602a\u7684\u6253\u5370\u673a",children:"664.\u5947\u602a\u7684\u6253\u5370\u673a"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/strange-printer",children:"664.\u5947\u602a\u7684\u6253\u5370\u673a"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 s \uff0c\u4f60\u7684\u4efb\u52a1\u662f\u8ba1\u7b97\u8fd9\u4e2a\u6253\u5370\u673a\u6253\u5370\u5b83\u9700\u8981\u7684\u6700\u5c11\u6253\u5370\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-24"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a124ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a122.9MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function strangePrinter(s: string): number {\n  const len = s.length;\n  const dp: number[][] = new Array(len).fill(0).map(_ => new Array(len).fill(0));\n  for (let i = len - 1; i >= 0; i--) {\n    dp[i][i] = 1;\n    for (let j = i + 1; j < len; j++) {\n      if (s[i] === s[j]) dp[i][j] = dp[i][j - 1];\n      else {\n        let min = Infinity;\n        for (let k = i; k < j; k++) min = Math.min(dp[i][k] + dp[k + 1][j], min);\n        dp[i][j] = min;\n      }\n    }\n  }\n  return dp[0][len - 1];\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var r=t(30758);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);