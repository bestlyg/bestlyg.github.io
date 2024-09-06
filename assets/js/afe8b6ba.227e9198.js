"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[6286],{62913:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(86070),r=t(25710);const i={},l="639.\u89e3\u7801\u65b9\u6cd5II",o={id:"leetcode/601-700/\u89e3\u7801\u65b9\u6cd5II",title:"639.\u89e3\u7801\u65b9\u6cd5II",description:"\u94fe\u63a5\uff1a639.\u89e3\u7801\u65b9\u6cd5II",source:"@site/docs/leetcode/601-700/639.\u89e3\u7801\u65b9\u6cd5II.md",sourceDirName:"leetcode/601-700",slug:"/leetcode/601-700/\u89e3\u7801\u65b9\u6cd5II",permalink:"/docs/leetcode/601-700/\u89e3\u7801\u65b9\u6cd5II",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:639,frontMatter:{},sidebar:"journal",previous:{title:"638.\u5927\u793c\u5305",permalink:"/docs/leetcode/601-700/\u5927\u793c\u5305"},next:{title:"640.\u6c42\u89e3\u65b9\u7a0b",permalink:"/docs/leetcode/601-700/\u6c42\u89e3\u65b9\u7a0b"}},c={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"639\u89e3\u7801\u65b9\u6cd5ii",children:"639.\u89e3\u7801\u65b9\u6cd5II"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/decode-ways-ii",children:"639.\u89e3\u7801\u65b9\u6cd5II"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 s \uff0c\u7531\u6570\u5b57\u548c '*' \u5b57\u7b26\u7ec4\u6210\uff0c\u8fd4\u56de \u89e3\u7801 \u8be5\u5b57\u7b26\u4e32\u7684\u65b9\u6cd5 \u6570\u76ee \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-28"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a152ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a52.4MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function pathSum(root: TreeNode | null, targetSum: number): number {\n  if (root === null) return 0;\n  let ans = 0;\n  dfs(root);\n  return ans;\n  function dfs(node: TreeNode | null, list: number[] = []) {\n    if (node === null) return;\n    const newList = list.map(v => v + node.val);\n    newList.push(node.val);\n    newList.forEach(v => {\n      if (v === targetSum) ans++;\n    });\n    dfs(node.left, newList);\n    dfs(node.right, newList);\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-28"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.6MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function pathSum(root: TreeNode | null, targetSum: number): number {\n  if (root === null) return 0;\n  let ans = 0;\n  dfs(root);\n  return ans;\n  function dfs(node: TreeNode | null, list: number[] = []) {\n    if (node === null) return;\n    const val = node.val;\n    const len = list.length;\n    if (val === targetSum) ans++;\n    for (let i = 0; i < len; i++) {\n      list[i] += val;\n      if (list[i] === targetSum) ans++;\n    }\n    list.push(val);\n    dfs(node.left, list);\n    dfs(node.right, list);\n    list.pop();\n    for (let i = 0; i < len; i++) {\n      list[i] -= val;\n    }\n  }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(30758);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);