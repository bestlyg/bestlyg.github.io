"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[37895],{62397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(86070),l=t(25710);const s={},i="230.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7b2cK\u5c0f\u7684\u5143\u7d20",o={id:"leetcode/201-300/\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7b2cK\u5c0f\u7684\u5143\u7d20",title:"230.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7b2cK\u5c0f\u7684\u5143\u7d20",description:"\u94fe\u63a5\uff1a230.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7b2cK\u5c0f\u7684\u5143\u7d20",source:"@site/docs/leetcode/201-300/230.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7b2cK\u5c0f\u7684\u5143\u7d20.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7b2cK\u5c0f\u7684\u5143\u7d20",permalink:"/docs/leetcode/201-300/\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7b2cK\u5c0f\u7684\u5143\u7d20",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:230,frontMatter:{},sidebar:"journal",previous:{title:"229.\u591a\u6570\u5143\u7d20II",permalink:"/docs/leetcode/201-300/\u591a\u6570\u5143\u7d20II"},next:{title:"232.\u7528\u6808\u5b9e\u73b0\u961f\u5217",permalink:"/docs/leetcode/201-300/\u7528\u6808\u5b9e\u73b0\u961f\u5217"}},c={},d=[{value:"\u9898\u89e3 1 - java",id:"\u9898\u89e3-1---java",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"230\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7b2ck\u5c0f\u7684\u5143\u7d20",children:"230.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7b2cK\u5c0f\u7684\u5143\u7d20"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/kth-smallest-element-in-a-bst",children:"230.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7b2cK\u5c0f\u7684\u5143\u7d20"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u641c\u7d22\u6811\u3001\u4e8c\u53c9\u6811",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u7f16\u5199\u4e00\u4e2a\u51fd\u6570 kthSmallest \u6765\u67e5\u627e\u5176\u4e2d\u7b2c k \u4e2a\u6700\u5c0f\u7684\u5143\u7d20\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---java",children:"\u9898\u89e3 1 - java"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-24"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.3MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajava"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e2d\u5e8f\u904d\u5386\u50a8\u5b58\u503c\u540e\u76f4\u63a5\u83b7\u53d6\u7b2c k \u4e2a\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"class Solution {\n    ArrayList<Integer> list = new ArrayList<Integer>();\n    public int kthSmallest(TreeNode root, int k) {\n    \tinorder(root);\n    \treturn list.get(k-1);\n    }\n\tpublic void inorder(TreeNode node) {\n\t\tif (node.left != null)\n\t\t\tinorder(node.left);\n\t\tlist.add(node.val);\n\t\tif (node.right != null)\n\t\t\tinorder(node.right);\n\t}\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-17"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a100ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.7MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e2d\u5e8f\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function kthSmallest(root: TreeNode | null, k: number): number {\n  let ans!: number;\n  dfs(root);\n  return ans;\n  function dfs(node: TreeNode | null): void {\n    if (node === null) return;\n    dfs(node.left);\n    if (--k === 0) {\n      ans = node.val;\n      return;\n    }\n    dfs(node.right);\n  }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(30758);const l={},s=r.createContext(l);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);