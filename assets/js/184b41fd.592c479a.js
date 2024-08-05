"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[74621],{74950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=n(86070),r=n(25710);const i={},o="139.\u5355\u8bcd\u62c6\u5206",c={id:"leetcode/101-200/\u5355\u8bcd\u62c6\u5206",title:"139.\u5355\u8bcd\u62c6\u5206",description:"\u94fe\u63a5\uff1a139.\u5355\u8bcd\u62c6\u5206",source:"@site/docs/leetcode/101-200/139.\u5355\u8bcd\u62c6\u5206.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u5355\u8bcd\u62c6\u5206",permalink:"/web/site/docs/leetcode/101-200/\u5355\u8bcd\u62c6\u5206",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:139,frontMatter:{},sidebar:"journal",previous:{title:"138.\u968f\u673a\u94fe\u8868\u7684\u590d\u5236",permalink:"/web/site/docs/leetcode/101-200/\u968f\u673a\u94fe\u8868\u7684\u590d\u5236"},next:{title:"141.\u73af\u5f62\u94fe\u8868",permalink:"/web/site/docs/leetcode/101-200/\u73af\u5f62\u94fe\u8868"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"139\u5355\u8bcd\u62c6\u5206",children:"139.\u5355\u8bcd\u62c6\u5206"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(t.a,{href:"https://leetcode.cn/problems/word-break",children:"139.\u5355\u8bcd\u62c6\u5206"}),(0,s.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u5178\u6811\u3001\u8bb0\u5fc6\u5316\u641c\u7d22\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u975e\u7a7a\u5b57\u7b26\u4e32 s \u548c\u4e00\u4e2a\u5305\u542b\u975e\u7a7a\u5355\u8bcd\u5217\u8868\u7684\u5b57\u5178 wordDict\uff0c\u5224\u5b9a s \u662f\u5426\u53ef\u4ee5\u88ab\u7a7a\u683c\u62c6\u5206\u4e3a\u4e00\u4e2a\u6216\u591a\u4e2a\u5728\u5b57\u5178\u4e2d\u51fa\u73b0\u7684\u5355\u8bcd\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-06-25"}),"\n",(0,s.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,s.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a38MB"}),"\n",(0,s.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i]=dp[j]&&set.has(j,i-j)\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"function wordBreak(s: string, wordDict: string[]): boolean {\n  const len = s.length;\n  const wordSet = new Set(wordDict);\n  const dp = [true];\n  for (let i = 1; i <= len; i++)\n    for (let j = 0; j < i; j++)\n      if (dp[j] && wordSet.has(s.substr(j, i - j))) {\n        dp[i] = true;\n        break;\n      }\n  return dp[len] ? dp[len] : false;\n}\n"})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},25710:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(30758);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);