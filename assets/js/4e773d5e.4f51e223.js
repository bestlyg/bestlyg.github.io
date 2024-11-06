"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[18675],{26377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=t(86070),r=t(31503);const l={},s="971.\u7ffb\u8f6c\u4e8c\u53c9\u6811\u4ee5\u5339\u914d\u5148\u5e8f\u904d\u5386",i={id:"leetcode/901-1000/\u7ffb\u8f6c\u4e8c\u53c9\u6811\u4ee5\u5339\u914d\u5148\u5e8f\u904d\u5386",title:"971.\u7ffb\u8f6c\u4e8c\u53c9\u6811\u4ee5\u5339\u914d\u5148\u5e8f\u904d\u5386",description:"\u94fe\u63a5\uff1a971.\u7ffb\u8f6c\u4e8c\u53c9\u6811\u4ee5\u5339\u914d\u5148\u5e8f\u904d\u5386",source:"@site/docs/leetcode/901-1000/971.\u7ffb\u8f6c\u4e8c\u53c9\u6811\u4ee5\u5339\u914d\u5148\u5e8f\u904d\u5386.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u7ffb\u8f6c\u4e8c\u53c9\u6811\u4ee5\u5339\u914d\u5148\u5e8f\u904d\u5386",permalink:"/docs/leetcode/901-1000/\u7ffb\u8f6c\u4e8c\u53c9\u6811\u4ee5\u5339\u914d\u5148\u5e8f\u904d\u5386",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:971,frontMatter:{},sidebar:"journal",previous:{title:"970.\u5f3a\u6574\u6570",permalink:"/docs/leetcode/901-1000/\u5f3a\u6574\u6570"},next:{title:"973.\u6700\u63a5\u8fd1\u539f\u70b9\u7684K\u4e2a\u70b9",permalink:"/docs/leetcode/901-1000/\u6700\u63a5\u8fd1\u539f\u70b9\u7684K\u4e2a\u70b9"}},d={},c=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"971\u7ffb\u8f6c\u4e8c\u53c9\u6811\u4ee5\u5339\u914d\u5148\u5e8f\u904d\u5386",children:"971.\u7ffb\u8f6c\u4e8c\u53c9\u6811\u4ee5\u5339\u914d\u5148\u5e8f\u904d\u5386"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(n.a,{href:"https://leetcode.cn/problems/flip-binary-tree-to-match-preorder-traversal",children:"971.\u7ffb\u8f6c\u4e8c\u53c9\u6811\u4ee5\u5339\u914d\u5148\u5e8f\u904d\u5386"}),(0,o.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,o.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811",(0,o.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u7ffb\u8f6c \u6700\u5c11 \u7684\u6811\u4e2d\u8282\u70b9\uff0c\u4f7f\u4e8c\u53c9\u6811\u7684 \u5148\u5e8f\u904d\u5386 \u4e0e\u9884\u671f\u7684\u904d\u5386\u884c\u7a0b voyage \u76f8\u5339\u914d \u3002 \u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-14"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.5MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"function flipMatchVoyage(root: TreeNode | null, voyage: number[]): number[] {\n  if (root === null) return [];\n  const ans: number[] = [];\n  let stop = false;\n  dfs(root, voyage);\n  return stop ? [-1] : ans;\n  function dfs(node: TreeNode, voyage: number[]) {\n    if (stop) return;\n    const val = node.val;\n    const n = voyage.length;\n    if (val !== voyage[0]) {\n      stop = true;\n      return;\n    }\n    if (node.left === null && node.right === null) {\n      if (!(n === 1 && voyage[0] === val)) stop = true;\n      return;\n    }\n    if (node.left === null) {\n      if (voyage[1] !== node.right!.val) stop = true;\n      else dfs(node.right!, voyage.slice(1));\n      return;\n    }\n    if (node.right === null) {\n      if (voyage[1] !== node.left!.val) stop = true;\n      else dfs(node.left!, voyage.slice(1));\n      return;\n    }\n    const valL = node.left!.val;\n    const valR = node.right!.val;\n    if (voyage[1] === valL) {\n      let idx = 1;\n      while (idx < n && voyage[idx] !== valR) idx++;\n      dfs(node.left!, voyage.slice(1, idx));\n      dfs(node.right!, voyage.slice(idx));\n    } else {\n      let idx = 1;\n      while (idx < n && voyage[idx] !== valL) idx++;\n      dfs(node.right!, voyage.slice(1, idx));\n      dfs(node.left!, voyage.slice(idx));\n      ans.push(val);\n    }\n  }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var o=t(30758);const r={},l=o.createContext(r);function s(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);