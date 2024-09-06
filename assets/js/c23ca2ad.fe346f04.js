"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[81456],{52153:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=t(86070),l=t(25710);const i={},r="725.\u5206\u9694\u94fe\u8868",c={id:"leetcode/701-800/\u5206\u9694\u94fe\u8868",title:"725.\u5206\u9694\u94fe\u8868",description:"\u94fe\u63a5\uff1a725.\u5206\u9694\u94fe\u8868",source:"@site/docs/leetcode/701-800/725.\u5206\u9694\u94fe\u8868.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u5206\u9694\u94fe\u8868",permalink:"/docs/leetcode/701-800/\u5206\u9694\u94fe\u8868",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:725,frontMatter:{},sidebar:"journal",previous:{title:"724.\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807",permalink:"/docs/leetcode/701-800/\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807"},next:{title:"726.\u539f\u5b50\u7684\u6570\u91cf",permalink:"/docs/leetcode/701-800/\u539f\u5b50\u7684\u6570\u91cf"}},a={},o=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - javascript",id:"\u9898\u89e3-2---javascript",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"725\u5206\u9694\u94fe\u8868",children:"725.\u5206\u9694\u94fe\u8868"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/split-linked-list-in-parts",children:"725.\u5206\u9694\u94fe\u8868"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u94fe\u8868",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5934\u7ed3\u70b9\u4e3a head \u7684\u5355\u94fe\u8868\u548c\u4e00\u4e2a\u6574\u6570 k \uff0c\u8bf7\u4f60\u8bbe\u8ba1\u4e00\u4e2a\u7b97\u6cd5\u5c06\u94fe\u8868\u5206\u9694\u4e3a k \u4e2a\u8fde\u7eed\u7684\u90e8\u5206\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-22"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.6MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u50a8\u5b58\u5230\u961f\u5217\u4e2d\u8fdb\u884c\u7b5b\u9009\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {\n  const list: ListNode[] = [];\n  let p: ListNode | null = head;\n  while (p) {\n    const next = p.next;\n    list.push(p);\n    p.next = null;\n    p = next;\n  }\n  const len = list.length;\n  const ans: Array<ListNode | null> = new Array(k).fill(null);\n  if (len <= k) {\n    for (let i = 0; i < len; i++) ans[i] = list[i];\n    return ans;\n  }\n  const cnt = ~~(len / k);\n  const last = (len % k) - 1;\n  let nodeIdx = 0;\n  for (let i = 0; i < k; i++) {\n    const node = (ans[i] = list[nodeIdx]);\n    const lastIdx = nodeIdx + cnt + (i <= last ? 1 : 0);\n    let p = node;\n    while (++nodeIdx < lastIdx) p = p.next = list[nodeIdx];\n  }\n  return ans;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---javascript",children:"\u9898\u89e3 2 - javascript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-22"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5faa\u73af\u4e24\u6b21\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {\n  let len = 0;\n  let p = head;\n  for (; p; p = p.next) len++;\n  const cnt = ~~(len / k);\n  const last = (len % k) - 1;\n  const ans: Array<ListNode | null> = [];\n  p = head;\n  let max = cnt + (ans.length <= last ? 1 : 0);\n  let idx = 0;\n  while (p) {\n    if (idx === 0) ans.push(p);\n    if (idx === max - 1) {\n      max = cnt + (ans.length <= last ? 1 : 0);\n      const next = p.next;\n      p.next = null;\n      p = next;\n      idx = 0;\n    } else {\n      p = p.next;\n      idx++;\n    }\n  }\n  while (ans.length < k) ans.push(null);\n  return ans;\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var s=t(30758);const l={},i=s.createContext(l);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);