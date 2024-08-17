"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[37842],{14828:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=t(86070),r=t(25710);const i={},l="\u9762\u8bd5\u989817.12.BiNode",s={id:"leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989817.12.BiNode",title:"\u9762\u8bd5\u989817.12.BiNode",description:"\u94fe\u63a5\uff1a\u9762\u8bd5\u989817.12.BiNode",source:"@site/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989817.12.BiNode.md",sourceDirName:"leetcode/\u9762\u8bd5\u9898",slug:"/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989817.12.BiNode",permalink:"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989817.12.BiNode",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"\u9762\u8bd5\u989817.11.\u5355\u8bcd\u8ddd\u79bb",permalink:"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989817.11.\u5355\u8bcd\u8ddd\u79bb"},next:{title:"\u9762\u8bd5\u989817.13.\u6062\u590d\u7a7a\u683c",permalink:"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989817.13.\u6062\u590d\u7a7a\u683c"}},c={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u9762\u8bd5\u98981712binode",children:"\u9762\u8bd5\u989817.12.BiNode"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(n.a,{href:"https://leetcode.cn/problems/binode-lcci",children:"\u9762\u8bd5\u989817.12.BiNode"}),(0,o.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,o.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u641c\u7d22\u6811\u3001\u94fe\u8868\u3001\u4e8c\u53c9\u6811",(0,o.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4e8c\u53c9\u6811\u6570\u636e\u7ed3\u6784 TreeNode \u53ef\u7528\u6765\u8868\u793a\u5355\u5411\u94fe\u8868\uff08\u5176\u4e2d left \u7f6e\u7a7a\uff0cright \u4e3a\u4e0b\u4e00\u4e2a\u94fe\u8868\u8282\u70b9\uff09\u3002\u5b9e\u73b0\u4e00\u4e2a\u65b9\u6cd5\uff0c\u628a\u4e8c\u53c9\u641c\u7d22\u6811\u8f6c\u6362\u4e3a\u5355\u5411\u94fe\u8868\uff0c\u8981\u6c42\u4f9d\u7136\u7b26\u5408\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6027\u8d28\uff0c\u8f6c\u6362\u64cd\u4f5c\u5e94\u662f\u539f\u5740\u7684\uff0c\u4e5f\u5c31\u662f\u5728\u539f\u59cb\u7684\u4e8c\u53c9\u641c\u7d22\u6811\u4e0a\u76f4\u63a5\u4fee\u6539\u3002\u8fd4\u56de\u8f6c\u6362\u540e\u7684\u5355\u5411\u94fe\u8868\u7684\u5934\u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-07"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a120ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a53.6MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e2d\u5e8f\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"function convertBiNode(root: TreeNode | null): TreeNode | null {\n  if (root === null) return null;\n  const q: TreeNode[] = [];\n  inorder(root);\n  for (let i = 0; i < q.length - 1; i++) {\n    q[i].left = null;\n    q[i].right = q[i + 1];\n  }\n  q[q.length - 1].left = q[q.length - 1].right = null;\n  return q[0];\n  function inorder(node: TreeNode | null): void {\n    if (node === null) return;\n    inorder(node.left);\n    q.push(node);\n    inorder(node.right);\n  }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var o=t(30758);const r={},i=o.createContext(r);function l(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);