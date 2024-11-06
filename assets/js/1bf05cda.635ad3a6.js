"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[32637],{48464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(86070),r=t(31503);const i={},c="44.\u901a\u914d\u7b26\u5339\u914d",l={id:"leetcode/1-100/\u901a\u914d\u7b26\u5339\u914d",title:"44.\u901a\u914d\u7b26\u5339\u914d",description:"\u94fe\u63a5\uff1a44.\u901a\u914d\u7b26\u5339\u914d",source:"@site/docs/leetcode/1-100/44.\u901a\u914d\u7b26\u5339\u914d.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u901a\u914d\u7b26\u5339\u914d",permalink:"/docs/leetcode/1-100/\u901a\u914d\u7b26\u5339\u914d",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:44,frontMatter:{},sidebar:"journal",previous:{title:"43.\u5b57\u7b26\u4e32\u76f8\u4e58",permalink:"/docs/leetcode/1-100/\u5b57\u7b26\u4e32\u76f8\u4e58"},next:{title:"45.\u8df3\u8dc3\u6e38\u620fII",permalink:"/docs/leetcode/1-100/\u8df3\u8dc3\u6e38\u620fII"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"44\u901a\u914d\u7b26\u5339\u914d",children:"44.\u901a\u914d\u7b26\u5339\u914d"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/wildcard-matching",children:"44.\u901a\u914d\u7b26\u5339\u914d"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u9012\u5f52\u3001\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32 (s) \u548c\u4e00\u4e2a\u5b57\u7b26\u6a21\u5f0f (p) \uff0c\u5b9e\u73b0\u4e00\u4e2a\u652f\u6301 '?' \u548c '*' \u7684\u901a\u914d\u7b26\u5339\u914d\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-07-05"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a172ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a49.9MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5982\u679c\u662f?\u6216\u8005\u5b57\u6bcd\uff0c\u5219\u5339\u914d\u524d\u4e00\u4e2a\uff0c\u5982\u679c\u662f*\u5219\u5224\u65ad\u524d\u4e00\u4e2a\u662f\u5426\u80fd\u5339\u914d\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function isMatch(s: string, p: string): boolean {\n  const sLen = s.length;\n  const pLen = p.length;\n  const dp = new Array(sLen + 1).fill(0).map(_ => new Array(pLen + 1).fill(false));\n  dp[0][0] = true;\n  for (let i = 1; i <= pLen; i++) {\n    dp[0][i] = p[i - 1] === '*' && dp[0][i - 1];\n  }\n  for (let i = 1; i <= sLen; i++) {\n    for (let j = 1; j <= pLen; j++) {\n      const cP = p[j - 1];\n      if (cP === '?' || s[i - 1] === cP) {\n        dp[i][j] = dp[i - 1][j - 1];\n      } else if (cP === '*' && (dp[i - 1][j] || dp[i][j - 1])) {\n        dp[i][j] = true;\n      }\n    }\n  }\n  return dp[sLen][pLen];\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var s=t(30758);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);