"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[2199],{47517:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(86070),s=t(25710);const l={},o="109.\u6709\u5e8f\u94fe\u8868\u8f6c\u6362\u4e8c\u53c9\u641c\u7d22\u6811",c={id:"leetcode/101-200/\u6709\u5e8f\u94fe\u8868\u8f6c\u6362\u4e8c\u53c9\u641c\u7d22\u6811",title:"109.\u6709\u5e8f\u94fe\u8868\u8f6c\u6362\u4e8c\u53c9\u641c\u7d22\u6811",description:"\u94fe\u63a5\uff1a109.\u6709\u5e8f\u94fe\u8868\u8f6c\u6362\u4e8c\u53c9\u641c\u7d22\u6811",source:"@site/docs/leetcode/101-200/109.\u6709\u5e8f\u94fe\u8868\u8f6c\u6362\u4e8c\u53c9\u641c\u7d22\u6811.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u6709\u5e8f\u94fe\u8868\u8f6c\u6362\u4e8c\u53c9\u641c\u7d22\u6811",permalink:"/web/site/docs/leetcode/101-200/\u6709\u5e8f\u94fe\u8868\u8f6c\u6362\u4e8c\u53c9\u641c\u7d22\u6811",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:109,frontMatter:{},sidebar:"journal",previous:{title:"108.\u5c06\u6709\u5e8f\u6570\u7ec4\u8f6c\u6362\u4e3a\u4e8c\u53c9\u641c\u7d22\u6811",permalink:"/web/site/docs/leetcode/101-200/\u5c06\u6709\u5e8f\u6570\u7ec4\u8f6c\u6362\u4e3a\u4e8c\u53c9\u641c\u7d22\u6811"},next:{title:"110.\u5e73\u8861\u4e8c\u53c9\u6811",permalink:"/web/site/docs/leetcode/101-200/\u5e73\u8861\u4e8c\u53c9\u6811"}},i={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"109\u6709\u5e8f\u94fe\u8868\u8f6c\u6362\u4e8c\u53c9\u641c\u7d22\u6811",children:"109.\u6709\u5e8f\u94fe\u8868\u8f6c\u6362\u4e8c\u53c9\u641c\u7d22\u6811"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/convert-sorted-list-to-binary-search-tree",children:"109.\u6709\u5e8f\u94fe\u8868\u8f6c\u6362\u4e8c\u53c9\u641c\u7d22\u6811"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u4e8c\u53c9\u641c\u7d22\u6811\u3001\u94fe\u8868\u3001\u5206\u6cbb\u3001\u4e8c\u53c9\u6811",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5355\u94fe\u8868\uff0c\u5176\u4e2d\u7684\u5143\u7d20\u6309\u5347\u5e8f\u6392\u5e8f\uff0c\u5c06\u5176\u8f6c\u6362\u4e3a\u9ad8\u5ea6\u5e73\u8861\u7684\u4e8c\u53c9\u641c\u7d22\u6811\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-08-18"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46.7MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u901a\u8fc7\u6709\u5e8f\u6570\u7ec4\u8fdb\u884c\u6df1\u5ea6\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function sortedListToBST(head: ListNode | null): TreeNode | null {\n  if (head === null) return null;\n  const arr: number[] = [];\n  while (head !== null) {\n    arr.push(head.val);\n    head = head.next;\n  }\n  return toBST(arr);\n  function toBST(array: number[]): TreeNode | null {\n    const len = array.length;\n    if (len === 0) return null;\n    const mid = len >> 1;\n    const node = new TreeNode(\n      array[mid],\n      toBST(array.slice(0, mid)),\n      toBST(array.slice(mid + 1, len))\n    );\n    return node;\n  }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(30758);const s={},l=r.createContext(s);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);