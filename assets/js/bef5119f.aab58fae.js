"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[12719],{61377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var o=t(86070),r=t(25710);const l={},s="958.\u4e8c\u53c9\u6811\u7684\u5b8c\u5168\u6027\u68c0\u9a8c",c={id:"leetcode/901-1000/\u4e8c\u53c9\u6811\u7684\u5b8c\u5168\u6027\u68c0\u9a8c",title:"958.\u4e8c\u53c9\u6811\u7684\u5b8c\u5168\u6027\u68c0\u9a8c",description:"\u94fe\u63a5\uff1a958.\u4e8c\u53c9\u6811\u7684\u5b8c\u5168\u6027\u68c0\u9a8c",source:"@site/docs/leetcode/901-1000/958.\u4e8c\u53c9\u6811\u7684\u5b8c\u5168\u6027\u68c0\u9a8c.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u4e8c\u53c9\u6811\u7684\u5b8c\u5168\u6027\u68c0\u9a8c",permalink:"/docs/leetcode/901-1000/\u4e8c\u53c9\u6811\u7684\u5b8c\u5168\u6027\u68c0\u9a8c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:958,frontMatter:{},sidebar:"journal",previous:{title:"954.\u4e8c\u500d\u6570\u5bf9\u6570\u7ec4",permalink:"/docs/leetcode/901-1000/\u4e8c\u500d\u6570\u5bf9\u6570\u7ec4"},next:{title:"959.\u7531\u659c\u6760\u5212\u5206\u533a\u57df",permalink:"/docs/leetcode/901-1000/\u7531\u659c\u6760\u5212\u5206\u533a\u57df"}},i={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"958\u4e8c\u53c9\u6811\u7684\u5b8c\u5168\u6027\u68c0\u9a8c",children:"958.\u4e8c\u53c9\u6811\u7684\u5b8c\u5168\u6027\u68c0\u9a8c"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(n.a,{href:"https://leetcode.cn/problems/check-completeness-of-a-binary-tree",children:"958.\u4e8c\u53c9\u6811\u7684\u5b8c\u5168\u6027\u68c0\u9a8c"}),(0,o.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,o.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811",(0,o.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\uff0c\u786e\u5b9a\u5b83\u662f\u5426\u662f\u4e00\u4e2a\u5b8c\u5168\u4e8c\u53c9\u6811\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-29"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a144ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46.8MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs \u9012\u5f52\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"function isCompleteTree(root: TreeNode | null): boolean {\n  if (root === null) return true;\n  const n = count(root);\n  let m = 1;\n  let cnt = 0;\n  while (cnt + 2 * m < n) cnt += m <<= 1;\n  return judge(root, n, m);\n  function count(node: TreeNode | null): number {\n    if (node === null) return 0;\n    return count(node.left) + count(node.right) + 1;\n  }\n  function judge(node: TreeNode | null, n: number, m: number): boolean {\n    console.log(node, n, m);\n    if (node === null) return n === 0;\n    if (n === 0) return false;\n    if (n === 1) return node.left === null && node.right === null;\n    const sum = Math.max(0, m * 2 - 1);\n    const left = Math.min(m, n - sum);\n    const right = n - sum - left;\n    return (\n      judge(node.left, ((sum - 1) >> 1) + left, m >> 1) &&\n      judge(node.right, ((sum - 1) >> 1) + right, m >> 1)\n    );\n  }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(30758);const r={},l=o.createContext(r);function s(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);