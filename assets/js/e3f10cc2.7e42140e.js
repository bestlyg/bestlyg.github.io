"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[41128],{2984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=t(86070),l=t(25710);const i={},r="160.\u76f8\u4ea4\u94fe\u8868",c={id:"leetcode/101-200/\u76f8\u4ea4\u94fe\u8868",title:"160.\u76f8\u4ea4\u94fe\u8868",description:"\u94fe\u63a5\uff1a160.\u76f8\u4ea4\u94fe\u8868",source:"@site/docs/leetcode/101-200/160.\u76f8\u4ea4\u94fe\u8868.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u76f8\u4ea4\u94fe\u8868",permalink:"/docs/leetcode/101-200/\u76f8\u4ea4\u94fe\u8868",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:160,frontMatter:{},sidebar:"journal",previous:{title:"155.\u6700\u5c0f\u6808",permalink:"/docs/leetcode/101-200/\u6700\u5c0f\u6808"},next:{title:"162.\u5bfb\u627e\u5cf0\u503c",permalink:"/docs/leetcode/101-200/\u5bfb\u627e\u5cf0\u503c"}},d={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - c",id:"\u9898\u89e3-2---c",level:2},{value:"\u9898\u89e3 3 - c",id:"\u9898\u89e3-3---c",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"160\u76f8\u4ea4\u94fe\u8868",children:"160.\u76f8\u4ea4\u94fe\u8868"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/intersection-of-two-linked-lists",children:"160.\u76f8\u4ea4\u94fe\u8868"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u94fe\u8868\u3001\u53cc\u6307\u9488",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e24\u4e2a\u5355\u94fe\u8868\u7684\u5934\u8282\u70b9 headA \u548c headB \uff0c\u8bf7\u4f60\u627e\u51fa\u5e76\u8fd4\u56de\u4e24\u4e2a\u5355\u94fe\u8868\u76f8\u4ea4\u7684\u8d77\u59cb\u8282\u70b9\u3002\u5982\u679c\u4e24\u4e2a\u94fe\u8868\u6ca1\u6709\u4ea4\u70b9\uff0c\u8fd4\u56de null \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-06-04"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a128ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46.9MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528 set \u50a8\u5b58\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {\n  if (headA === null || headB === null) return null;\n  const setA = new Set<ListNode>();\n  const setB = new Set<ListNode>();\n  let pA: ListNode | null = headA;\n  let pB: ListNode | null = headB;\n  while (pA !== null && pB !== null) {\n    setA.add(pA);\n    setB.add(pB);\n    if (setB.has(pA)) return pA;\n    if (setA.has(pB)) return pB;\n    pA = pA.next;\n    pB = pB.next;\n  }\n  while (pA !== null) {\n    if (setB.has(pA)) return pA;\n    pA = pA.next;\n  }\n  while (pB !== null) {\n    if (setA.has(pB)) return pB;\n    pB = pB.next;\n  }\n  return null;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---c",children:"\u9898\u89e3 2 - c"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-19"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a13.5MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"struct ListNode *getIntersectionNode(struct ListNode *headA, struct ListNode *headB) {\n    struct ListNode *a = headA, *b = headB;\n    while(a != b){\n        a = a ? a->next : headB;\n        b = b ? b->next : headA;\n    }\n    return a;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-3---c",children:"\u9898\u89e3 3 - c"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-19"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a13.5MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"struct ListNode *getIntersectionNode(struct ListNode *headA, struct ListNode *headB) {\n    struct ListNode *a = headA, *b = headB;\n    while(a != b){\n        a = a ? a->next : headB;\n        b = b ? b->next : headA;\n    }\n    return a;\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(30758);const l={},i=s.createContext(l);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);