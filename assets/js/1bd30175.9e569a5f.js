"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[91936],{15893:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=t(86070),r=t(25710);const i={},c="709.\u8f6c\u6362\u6210\u5c0f\u5199\u5b57\u6bcd",l={id:"leetcode/701-800/\u8f6c\u6362\u6210\u5c0f\u5199\u5b57\u6bcd",title:"709.\u8f6c\u6362\u6210\u5c0f\u5199\u5b57\u6bcd",description:"\u94fe\u63a5\uff1a709.\u8f6c\u6362\u6210\u5c0f\u5199\u5b57\u6bcd",source:"@site/docs/leetcode/701-800/709.\u8f6c\u6362\u6210\u5c0f\u5199\u5b57\u6bcd.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u8f6c\u6362\u6210\u5c0f\u5199\u5b57\u6bcd",permalink:"/web/site/docs/leetcode/701-800/\u8f6c\u6362\u6210\u5c0f\u5199\u5b57\u6bcd",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:709,frontMatter:{},sidebar:"journal",previous:{title:"707.\u8bbe\u8ba1\u94fe\u8868",permalink:"/web/site/docs/leetcode/701-800/\u8bbe\u8ba1\u94fe\u8868"},next:{title:"710.\u9ed1\u540d\u5355\u4e2d\u7684\u968f\u673a\u6570",permalink:"/web/site/docs/leetcode/701-800/\u9ed1\u540d\u5355\u4e2d\u7684\u968f\u673a\u6570"}},o={},a=[{value:"\u9898\u89e3 1 - java",id:"\u9898\u89e3-1---java",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"709\u8f6c\u6362\u6210\u5c0f\u5199\u5b57\u6bcd",children:"709.\u8f6c\u6362\u6210\u5c0f\u5199\u5b57\u6bcd"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/to-lower-case",children:"709.\u8f6c\u6362\u6210\u5c0f\u5199\u5b57\u6bcd"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5b9e\u73b0\u51fd\u6570 ToLowerCase()\uff0c\u8be5\u51fd\u6570\u63a5\u6536\u4e00\u4e2a\u5b57\u7b26\u4e32\u53c2\u6570 str\uff0c\u5e76\u5c06\u8be5\u5b57\u7b26\u4e32\u4e2d\u7684\u5927\u5199\u5b57\u6bcd\u8f6c\u6362\u6210\u5c0f\u5199\u5b57\u6bcd\uff0c\u4e4b\u540e\u8fd4\u56de\u65b0\u7684\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---java",children:"\u9898\u89e3 1 - java"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-17"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.8MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajava"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6839\u636e asc \u7801\u5982\u679c\u662f\u5927\u5199\u5b57\u6bcd\u5219\u6539\u53d8\u6210\u5c0f\u5199\u5b57\u6bcd\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"class Solution {\n\tpublic String toLowerCase(String str) {\n\t\tfor (int i = 0, len = str.length(); i < len; i++) {\n\t\t\tchar c = str.charAt(i);\n\t\t\tif (c >= 65 && c <= 90) {\n\t\t\t\tchar newCh = (char) (c + 32);\n\t\t\t\tstr=str.replace(c, newCh);\n\t\t\t}\n\t\t}\n\t\treturn str;\n\t}\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-12"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.5MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8c03\u7528\u5185\u7f6e\u51fd\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function toLowerCase(s: string): string {\n  return s.toLowerCase();\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-12"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a776ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.4MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8f6c\u6362 ascii\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function toLowerCase(s: string): string {\n  let ans = '';\n  for (let i = 0, n = s.length; i < n; i++) {\n    const num = s.codePointAt(i)!;\n    if (num >= 65 && num <= 90) ans += String.fromCodePoint(num + 32);\n    else ans += s[i];\n  }\n  return ans;\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var s=t(30758);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);