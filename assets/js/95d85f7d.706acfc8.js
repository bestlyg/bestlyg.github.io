"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[90825],{72782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var i=t(86070),r=t(25710);const l={},o="530.\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u5c0f\u7edd\u5bf9\u5dee",s={id:"leetcode/501-600/\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u5c0f\u7edd\u5bf9\u5dee",title:"530.\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u5c0f\u7edd\u5bf9\u5dee",description:"\u94fe\u63a5\uff1a530.\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u5c0f\u7edd\u5bf9\u5dee",source:"@site/docs/leetcode/501-600/530.\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u5c0f\u7edd\u5bf9\u5dee.md",sourceDirName:"leetcode/501-600",slug:"/leetcode/501-600/\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u5c0f\u7edd\u5bf9\u5dee",permalink:"/web/site/docs/leetcode/501-600/\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u5c0f\u7edd\u5bf9\u5dee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:530,frontMatter:{},sidebar:"journal",previous:{title:"529.\u626b\u96f7\u6e38\u620f",permalink:"/web/site/docs/leetcode/501-600/\u626b\u96f7\u6e38\u620f"},next:{title:"532.\u6570\u7ec4\u4e2d\u7684k-diff\u6570\u5bf9",permalink:"/web/site/docs/leetcode/501-600/\u6570\u7ec4\u4e2d\u7684k-diff\u6570\u5bf9"}},c={},d=[{value:"\u9898\u89e3 1 - java",id:"\u9898\u89e3-1---java",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"530\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u5c0f\u7edd\u5bf9\u5dee",children:"530.\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u5c0f\u7edd\u5bf9\u5dee"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-absolute-difference-in-bst",children:"530.\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u5c0f\u7edd\u5bf9\u5dee"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u641c\u7d22\u6811\u3001\u4e8c\u53c9\u6811",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6240\u6709\u8282\u70b9\u4e3a\u975e\u8d1f\u503c\u7684\u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u6c42\u6811\u4e2d\u4efb\u610f\u4e24\u8282\u70b9\u7684\u5dee\u7684\u7edd\u5bf9\u503c\u7684\u6700\u5c0f\u503c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---java",children:"\u9898\u89e3 1 - java"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-23"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a2ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.5MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajava"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e2d\u5e8f\u904d\u5386\u540e\u5224\u65ad\u6570\u7ec4\u524d\u540e\u503c\u76f8\u51cf\u7684\u6700\u5c0f\u503c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n\tArrayList<Integer> list = new ArrayList<Integer>();\n\n    public int getMinimumDifference(TreeNode root) {\n\t\tinorder(root);\n\t\tint min = list.get(1)-list.get(0);\n\t\tfor(int i =0,len=list.size()-1;i<len;i++)\n\t\t\tmin=Math.min(list.get(i+1)-list.get(i), min);\n\t\treturn min;\n\t}\n\n\tpublic void inorder(TreeNode node) {\n\t\tif (node.left != null) {\n\t\t\tinorder(node.left);\n\t\t}\n\t\tlist.add(node.val);\n\t\tif (node.right != null) {\n\t\t\tinorder(node.right);\n\t\t}\n\t}\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-10-12"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a108ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.6MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e2d\u5e8f\u904d\u5386\u6392\u5e8f\u540e\u8fdb\u884c\u5224\u65ad\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function getMinimumDifference(root: TreeNode | null): number {\n  if (root === null) return 2147483647;\n  const queue: number[] = [];\n  inorder(root);\n  return queue.reduce(\n    (total, cur, i, arr) => (i === 0 ? total : Math.min(total, Math.abs(cur - arr[i - 1]))),\n    Infinity\n  );\n  function inorder(node: TreeNode | null): void {\n    if (node === null) return;\n    inorder(node.left);\n    queue.push(node.val);\n    inorder(node.right);\n  }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(30758);const r={},l=i.createContext(r);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);