"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[78982],{64147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(86070),r=t(25710);const i={},c="1392.\u6700\u957f\u5feb\u4e50\u524d\u7f00",l={id:"leetcode/1301-1400/\u6700\u957f\u5feb\u4e50\u524d\u7f00",title:"1392.\u6700\u957f\u5feb\u4e50\u524d\u7f00",description:"\u94fe\u63a5\uff1a1392.\u6700\u957f\u5feb\u4e50\u524d\u7f00",source:"@site/docs/leetcode/1301-1400/1392.\u6700\u957f\u5feb\u4e50\u524d\u7f00.md",sourceDirName:"leetcode/1301-1400",slug:"/leetcode/1301-1400/\u6700\u957f\u5feb\u4e50\u524d\u7f00",permalink:"/docs/leetcode/1301-1400/\u6700\u957f\u5feb\u4e50\u524d\u7f00",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1392,frontMatter:{},sidebar:"journal",previous:{title:"1382.\u5c06\u4e8c\u53c9\u641c\u7d22\u6811\u53d8\u5e73\u8861",permalink:"/docs/leetcode/1301-1400/\u5c06\u4e8c\u53c9\u641c\u7d22\u6811\u53d8\u5e73\u8861"},next:{title:"1388.3n\u5757\u62ab\u8428",permalink:"/docs/leetcode/1301-1400/1388.3n\u5757\u62ab\u8428"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1392\u6700\u957f\u5feb\u4e50\u524d\u7f00",children:"1392.\u6700\u957f\u5feb\u4e50\u524d\u7f00"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/longest-happy-prefix",children:"1392.\u6700\u957f\u5feb\u4e50\u524d\u7f00"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u5b57\u7b26\u4e32\u5339\u914d\u3001\u54c8\u5e0c\u51fd\u6570\u3001\u6eda\u52a8\u54c8\u5e0c",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 s\uff0c\u8bf7\u4f60\u8fd4\u56de\u5b83\u7684 \u6700\u957f\u5feb\u4e50\u524d\u7f00\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-13"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a50.1MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","kmp\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function getNext(str: string) {\n  const next = [-1];\n  for (let i = 1, j = -1; str[i]; i++) {\n    while (j !== -1 && str[i] !== str[j + 1]) j = next[j];\n    if (str[i] === str[j + 1]) j++;\n    next[i] = j;\n  }\n  return next;\n}\nfunction longestPrefix(s: string): string {\n  const next = getNext(s);\n  const last = next[s.length - 1];\n  return last === -1 ? '' : s.substring(0, last + 1);\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-14"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a49.9MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","kmp\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function longestPrefix(s: string): string {\n  const next = [-1];\n  for (let i = 1, j = -1; s[i]; i++) {\n    while (j !== -1 && s[i] !== s[j + 1]) j = next[j];\n    if (s[i] === s[j + 1]) j++;\n    next[i] = j;\n  }\n  return s.substring(0, next[s.length - 1] + 1);\n}\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var s=t(30758);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);