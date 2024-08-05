"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[67425],{59670:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(86070),l=t(25710);const r={},i="LCR140.\u8bad\u7ec3\u8ba1\u5212II",c={id:"leetcode/1-100/LCR140.\u8bad\u7ec3\u8ba1\u5212II",title:"LCR140.\u8bad\u7ec3\u8ba1\u5212II",description:"\u94fe\u63a5\uff1aLCR140.\u8bad\u7ec3\u8ba1\u5212II",source:"@site/docs/leetcode/1-100/LCR140.\u8bad\u7ec3\u8ba1\u5212II.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/LCR140.\u8bad\u7ec3\u8ba1\u5212II",permalink:"/docs/leetcode/1-100/LCR140.\u8bad\u7ec3\u8ba1\u5212II",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"LCR139.\u8bad\u7ec3\u8ba1\u5212I",permalink:"/docs/leetcode/1-100/LCR139.\u8bad\u7ec3\u8ba1\u5212I"},next:{title:"LCR143.\u5b50\u7ed3\u6784\u5224\u65ad",permalink:"/docs/leetcode/1-100/LCR143.\u5b50\u7ed3\u6784\u5224\u65ad"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"lcr140\u8bad\u7ec3\u8ba1\u5212ii",children:"LCR140.\u8bad\u7ec3\u8ba1\u5212II"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof",children:"LCR140.\u8bad\u7ec3\u8ba1\u5212II"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u94fe\u8868\u3001\u53cc\u6307\u9488",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8f93\u5165\u4e00\u4e2a\u94fe\u8868\uff0c\u8f93\u51fa\u8be5\u94fe\u8868\u4e2d\u5012\u6570\u7b2c k \u4e2a\u8282\u70b9\u3002\u4e3a\u4e86\u7b26\u5408\u5927\u591a\u6570\u4eba\u7684\u4e60\u60ef\uff0c\u672c\u9898\u4ece 1 \u5f00\u59cb\u8ba1\u6570\uff0c\u5373\u94fe\u8868\u7684\u5c3e\u8282\u70b9\u662f\u5012\u6570\u7b2c 1 \u4e2a\u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-02"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.5MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8ba1\u7b97\u603b\u957f\u5ea6\u76f8\u51cf\u540e dfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {\n  let count = 0;\n  let p = head;\n  while (p !== null) {\n    count++;\n    p = p.next;\n  }\n  return dfs(head, count - k);\n  function dfs(node: ListNode | null, count: number): ListNode | null {\n    if (node === null) return null;\n    if (count === 0) return node;\n    return dfs(node.next, count - 1);\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-02"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.4MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {\n  let slow = head;\n  let fast = head;\n  while (fast && k) {\n    fast = fast.next;\n    k--;\n  }\n  while (fast) {\n    fast = fast.next;\n    slow = slow!.next;\n  }\n  return slow;\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(30758);const l={},r=s.createContext(l);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);