"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[73785],{47145:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var l=t(86070),s=t(25710);const c={},i="61.\u65cb\u8f6c\u94fe\u8868",r={id:"leetcode/1-100/\u65cb\u8f6c\u94fe\u8868",title:"61.\u65cb\u8f6c\u94fe\u8868",description:"\u94fe\u63a5\uff1a61.\u65cb\u8f6c\u94fe\u8868",source:"@site/docs/leetcode/1-100/61.\u65cb\u8f6c\u94fe\u8868.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u65cb\u8f6c\u94fe\u8868",permalink:"/docs/leetcode/1-100/\u65cb\u8f6c\u94fe\u8868",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:61,frontMatter:{},sidebar:"journal",previous:{title:"60.\u6392\u5217\u5e8f\u5217",permalink:"/docs/leetcode/1-100/\u6392\u5217\u5e8f\u5217"},next:{title:"62.\u4e0d\u540c\u8def\u5f84",permalink:"/docs/leetcode/1-100/\u4e0d\u540c\u8def\u5f84"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"61\u65cb\u8f6c\u94fe\u8868",children:"61.\u65cb\u8f6c\u94fe\u8868"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/rotate-list",children:"61.\u65cb\u8f6c\u94fe\u8868"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u94fe\u8868\u3001\u53cc\u6307\u9488",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u94fe\u8868\uff0c\u65cb\u8f6c\u94fe\u8868\uff0c\u5c06\u94fe\u8868\u6bcf\u4e2a\u8282\u70b9\u5411\u53f3\u79fb\u52a8 k \u4e2a\u4f4d\u7f6e\uff0c\u5176\u4e2d k \u662f\u975e\u8d1f\u6570\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-06"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.7MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u62fc\u63a5\u5934\u5c3e\u540e\u76f4\u63a5\u8ba1\u7b97\u65b0\u5934\u4f4d\u7f6e\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"function rotateRight(head: ListNode | null, k: number): ListNode | null {\n  if (head === null) return null;\n  let count = 1;\n  let temp = head;\n  while (temp.next !== null) {\n    count++;\n    temp = temp.next;\n  }\n  temp.next = head;\n  temp = head;\n  count = count - (k % count);\n  while (--count) temp = temp.next!;\n  const newHead = temp.next;\n  temp.next = null;\n  return newHead;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-27"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.8MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9996\u4f4d\u76f8\u8fde\u540e\u5224\u65ad\u4f4d\u7f6e\u8fdb\u884c\u65ad\u94fe\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"function rotateRight(head: ListNode | null, k: number): ListNode | null {\n  if (head === null) return null;\n  let p: ListNode | null = head;\n  let c = 1;\n  while (p.next !== null) {\n    p = p.next;\n    cpp;\n  }\n  p.next = head;\n  c = c - (k % c);\n  while (--c) head = head!.next;\n  p = head!.next;\n  head!.next = null;\n  return p;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var l=t(30758);const s={},c=l.createContext(s);function i(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);