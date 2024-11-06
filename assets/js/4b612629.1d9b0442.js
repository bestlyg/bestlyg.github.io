"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[20569],{38621:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var l=t(86070),s=t(31503);const i={},r="86.\u5206\u9694\u94fe\u8868",c={id:"leetcode/1-100/\u5206\u9694\u94fe\u8868",title:"86.\u5206\u9694\u94fe\u8868",description:"\u94fe\u63a5\uff1a86.\u5206\u9694\u94fe\u8868",source:"@site/docs/leetcode/1-100/86.\u5206\u9694\u94fe\u8868.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u5206\u9694\u94fe\u8868",permalink:"/docs/leetcode/1-100/\u5206\u9694\u94fe\u8868",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:86,frontMatter:{},sidebar:"journal",previous:{title:"84.\u67f1\u72b6\u56fe\u4e2d\u6700\u5927\u7684\u77e9\u5f62",permalink:"/docs/leetcode/1-100/\u67f1\u72b6\u56fe\u4e2d\u6700\u5927\u7684\u77e9\u5f62"},next:{title:"88.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",permalink:"/docs/leetcode/1-100/\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4"}},o={},p=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"86\u5206\u9694\u94fe\u8868",children:"86.\u5206\u9694\u94fe\u8868"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/partition-list",children:"86.\u5206\u9694\u94fe\u8868"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u94fe\u8868\u3001\u53cc\u6307\u9488",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u94fe\u8868\u548c\u4e00\u4e2a\u7279\u5b9a\u503c x \uff0c\u8bf7\u4f60\u5bf9\u94fe\u8868\u8fdb\u884c\u5206\u9694\uff0c\u4f7f\u5f97\u6240\u6709\u5c0f\u4e8e x \u7684\u8282\u70b9\u90fd\u51fa\u73b0\u5728\u5927\u4e8e\u6216\u7b49\u4e8e x \u7684\u8282\u70b9\u4e4b\u524d\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-01-03"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.5MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u4e24\u4e2a\u8282\u70b9\u8fdb\u884c\u50a8\u5b58\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"function partition(head: ListNode | null, x: number): ListNode | null {\n  if (head === null) return null;\n  const small = new ListNode(0);\n  let smallTemp = small;\n  const big = new ListNode(0);\n  let bigTemp = big;\n  let temp: ListNode | null = head;\n  while (temp !== null) {\n    if (temp.val < x) {\n      smallTemp.next = temp;\n      smallTemp = smallTemp.next;\n    } else {\n      bigTemp.next = temp;\n      bigTemp = bigTemp.next;\n    }\n    temp = temp.next;\n  }\n  smallTemp.next = big.next;\n  bigTemp.next = null;\n  return small.next;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-14"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a100ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.4MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u521b\u5efa\u65b0\u94fe\u8868\u8fdb\u884c\u50a8\u5b58 x \u4e24\u8fb9\u7684\u503c\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"function partition(head: ListNode | null, x: number): ListNode | null {\n  if (head === null) return null;\n  const big = new ListNode(0);\n  let bigP = big;\n  const small = new ListNode(0);\n  let smallP = small;\n  let p: ListNode | null = head;\n  while (p !== null) {\n    if (p.val >= x) {\n      bigP.next = p;\n      bigP = p;\n      p = p.next;\n      bigP.next = null;\n    } else {\n      smallP.next = p;\n      smallP = p;\n      p = p.next;\n      smallP.next = null;\n    }\n  }\n  smallP.next = big.next;\n  return small.next;\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var l=t(30758);const s={},i=l.createContext(s);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);