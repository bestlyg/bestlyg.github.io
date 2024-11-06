"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[42073],{39418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(86070),o=t(31503);const l={},i="226.\u7ffb\u8f6c\u4e8c\u53c9\u6811",s={id:"leetcode/201-300/\u7ffb\u8f6c\u4e8c\u53c9\u6811",title:"226.\u7ffb\u8f6c\u4e8c\u53c9\u6811",description:"\u94fe\u63a5\uff1a226.\u7ffb\u8f6c\u4e8c\u53c9\u6811",source:"@site/docs/leetcode/201-300/226.\u7ffb\u8f6c\u4e8c\u53c9\u6811.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u7ffb\u8f6c\u4e8c\u53c9\u6811",permalink:"/docs/leetcode/201-300/\u7ffb\u8f6c\u4e8c\u53c9\u6811",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:226,frontMatter:{},sidebar:"journal",previous:{title:"225.\u7528\u961f\u5217\u5b9e\u73b0\u6808",permalink:"/docs/leetcode/201-300/\u7528\u961f\u5217\u5b9e\u73b0\u6808"},next:{title:"227.\u57fa\u672c\u8ba1\u7b97\u5668II",permalink:"/docs/leetcode/201-300/\u57fa\u672c\u8ba1\u7b97\u5668II"}},d={},c=[{value:"\u9898\u89e3 1 - java",id:"\u9898\u89e3-1---java",level:2},{value:"\u9898\u89e3 2 - java",id:"\u9898\u89e3-2---java",level:2},{value:"\u9898\u89e3 3 - java",id:"\u9898\u89e3-3---java",level:2},{value:"\u9898\u89e3 4 - java",id:"\u9898\u89e3-4---java",level:2},{value:"\u9898\u89e3 5 - typescript",id:"\u9898\u89e3-5---typescript",level:2},{value:"\u9898\u89e3 6 - c",id:"\u9898\u89e3-6---c",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"226\u7ffb\u8f6c\u4e8c\u53c9\u6811",children:"226.\u7ffb\u8f6c\u4e8c\u53c9\u6811"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/invert-binary-tree",children:"226.\u7ffb\u8f6c\u4e8c\u53c9\u6811"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ffb\u8f6c\u4e00\u68f5\u4e8c\u53c9\u6811\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---java",children:"\u9898\u89e3 1 - java"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-19"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.7MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajava"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u5e8f\u904d\u5386"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    public TreeNode invertTree(TreeNode root) {\n        if(root==null)return root;\n\t\tTreeNode tmpNode=root.left;\n\t\troot.left=root.right;\n\t\troot.right=tmpNode;\n\t\tinvertTree(root.left);\n\t\tinvertTree(root.right);\n\t\treturn root;\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---java",children:"\u9898\u89e3 2 - java"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-19"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.8MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajava"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540e\u5e8f\u904d\u5386"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public TreeNode invertTree(TreeNode root) {\n    if(root==null)return root;\n    invertTree(root.left);\n    invertTree(root.right);\n    TreeNode tmpNode=root.left;\n    root.left=root.right;\n    root.right=tmpNode;\n    return root;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-3---java",children:"\u9898\u89e3 3 - java"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-19"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.2MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajava"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e2d\u5e8f\u904d\u5386"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public TreeNode invertTree(TreeNode root) {\n    if(root==null)return root;\n    invertTree(root.left);\n    TreeNode tmpNode=root.left;\n    root.left=root.right;\n    root.right=tmpNode;\n    invertTree(root.left);\n    return root;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-4---java",children:"\u9898\u89e3 4 - java"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-19"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.5MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajava"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5c42\u5e8f\u904d\u5386"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public TreeNode invertTree(TreeNode root) {\n\t\tif(root==null)return root;\n\t\tQueue<TreeNode> queue=new LinkedList<>();\n\t\tqueue.offer(root);\n\t\twhile(!queue.isEmpty()) {\n\t\t\tTreeNode node = queue.poll();\n\t\t\tTreeNode tmpNode=node.left;\n\t\t\tnode.left=node.right;\n\t\t\tnode.right=tmpNode;\n\t\t\tif(node.left!=null) {\n\t\t\t\tqueue.offer(node.left);\n\t\t\t}\n\t\t\tif(node.right!=null) {\n\t\t\t\tqueue.offer(node.right);\n\t\t\t}\n\t\t}\n\t\treturn root;\n\t}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-5---typescript",children:"\u9898\u89e3 5 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-09-16"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a37.6MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function invertTree(root: TreeNode | null): TreeNode | null {\n  if (root === null) return null;\n  const left = invertTree(root.left);\n  const right = invertTree(root.right);\n  root.right = left;\n  root.left = right;\n  return root;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-6---c",children:"\u9898\u89e3 6 - c"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-27"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.9MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"struct TreeNode* invertTree(struct TreeNode* root){\n    if (!root) return root;\n    struct TreeNode *left = root->left, *right = root->right;\n    // \u7ffb\u8f6c\u53f3\u6811\u8d4b\u503c\u7ed9\u5de6\u70b9\n    root->left = invertTree(right);\n    // \u7ffb\u8f6c\u5de6\u6811\u8d4b\u503c\u7ed9\u53f3\u70b9\n    root->right = invertTree(left);\n    return root;\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(30758);const o={},l=r.createContext(o);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);