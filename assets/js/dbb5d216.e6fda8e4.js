"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[25053],{34771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/801-900/\u9012\u589e\u987a\u5e8f\u641c\u7d22\u6811","title":"897.\u9012\u589e\u987a\u5e8f\u641c\u7d22\u6811","description":"\u94fe\u63a5\uff1a897.\u9012\u589e\u987a\u5e8f\u641c\u7d22\u6811","source":"@site/docs/leetcode/801-900/897.\u9012\u589e\u987a\u5e8f\u641c\u7d22\u6811.md","sourceDirName":"leetcode/801-900","slug":"/leetcode/801-900/\u9012\u589e\u987a\u5e8f\u641c\u7d22\u6811","permalink":"/docs/leetcode/801-900/\u9012\u589e\u987a\u5e8f\u641c\u7d22\u6811","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":897,"frontMatter":{},"sidebar":"journal","previous":{"title":"896.\u5355\u8c03\u6570\u5217","permalink":"/docs/leetcode/801-900/\u5355\u8c03\u6570\u5217"},"next":{"title":"899.\u6709\u5e8f\u961f\u5217","permalink":"/docs/leetcode/801-900/\u6709\u5e8f\u961f\u5217"}}');var l=t(86070),i=t(31503);const o={},s="897.\u9012\u589e\u987a\u5e8f\u641c\u7d22\u6811",c={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"897\u9012\u589e\u987a\u5e8f\u641c\u7d22\u6811",children:"897.\u9012\u589e\u987a\u5e8f\u641c\u7d22\u6811"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/increasing-order-search-tree",children:"897.\u9012\u589e\u987a\u5e8f\u641c\u7d22\u6811"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u641c\u7d22\u6811\u3001\u4e8c\u53c9\u6811",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u68f5\u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u8bf7\u4f60 \u6309\u4e2d\u5e8f\u904d\u5386 \u5c06\u5176\u91cd\u65b0\u6392\u5217\u4e3a\u4e00\u68f5\u9012\u589e\u987a\u5e8f\u641c\u7d22\u6811\uff0c\u4f7f\u6811\u4e2d\u6700\u5de6\u8fb9\u7684\u8282\u70b9\u6210\u4e3a\u6811\u7684\u6839\u8282\u70b9\uff0c\u5e76\u4e14\u6bcf\u4e2a\u8282\u70b9\u6ca1\u6709\u5de6\u5b50\u8282\u70b9\uff0c\u53ea\u6709\u4e00\u4e2a\u53f3\u5b50\u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-25"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.7MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u904d\u5386\u6bcf\u4e2a\u70b9\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"function increasingBST(root: TreeNode | null): TreeNode | null {\n  function increasing(node: TreeNode): [TreeNode, TreeNode] {\n    if (!root.left && !root.right) return [root, root];\n    let first = node;\n    let last = node;\n    if (node.left !== null) {\n      const data = increasing(node.left);\n      first = data[0];\n      data[1].right = node;\n      node.left = null;\n    }\n    if (node.right !== null) {\n      const data = increasing(node.right);\n      last.right = data[0];\n      last = data[1];\n    }\n    return [first, last];\n  }\n  return increasing(root)[0];\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-25"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a132ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.2MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5148\u4e2d\u5e8f\u904d\u5386\u540e\u9010\u4e2a\u8d4b\u503c\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"function increasingBST(root: TreeNode | null): TreeNode | null {\n  if (root === null) return null;\n  const queue: TreeNode[] = [];\n  inorder(root);\n  for (let i = 0, l = queue.length - 1; i < l; i++) {\n    const node = queue[i];\n    node.left = null;\n    node.right = queue[i + 1];\n  }\n  const last = queue[queue.length - 1];\n  last.right = last.left = null;\n  return queue[0];\n  function inorder(node: TreeNode | null): void {\n    if (node === null) return;\n    inorder(node.left);\n    queue.push(node);\n    inorder(node.right);\n  }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(30758);const l={},i=r.createContext(l);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);