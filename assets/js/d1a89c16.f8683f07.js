"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[29560],{21801:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"leetcode/101-200/\u4ece\u524d\u5e8f\u4e0e\u4e2d\u5e8f\u904d\u5386\u5e8f\u5217\u6784\u9020\u4e8c\u53c9\u6811","title":"105.\u4ece\u524d\u5e8f\u4e0e\u4e2d\u5e8f\u904d\u5386\u5e8f\u5217\u6784\u9020\u4e8c\u53c9\u6811","description":"\u94fe\u63a5\uff1a105.\u4ece\u524d\u5e8f\u4e0e\u4e2d\u5e8f\u904d\u5386\u5e8f\u5217\u6784\u9020\u4e8c\u53c9\u6811","source":"@site/docs/leetcode/101-200/105.\u4ece\u524d\u5e8f\u4e0e\u4e2d\u5e8f\u904d\u5386\u5e8f\u5217\u6784\u9020\u4e8c\u53c9\u6811.md","sourceDirName":"leetcode/101-200","slug":"/leetcode/101-200/\u4ece\u524d\u5e8f\u4e0e\u4e2d\u5e8f\u904d\u5386\u5e8f\u5217\u6784\u9020\u4e8c\u53c9\u6811","permalink":"/docs/leetcode/101-200/\u4ece\u524d\u5e8f\u4e0e\u4e2d\u5e8f\u904d\u5386\u5e8f\u5217\u6784\u9020\u4e8c\u53c9\u6811","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":105,"frontMatter":{},"sidebar":"journal","previous":{"title":"104.\u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6","permalink":"/docs/leetcode/101-200/\u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6"},"next":{"title":"106.\u4ece\u4e2d\u5e8f\u4e0e\u540e\u5e8f\u904d\u5386\u5e8f\u5217\u6784\u9020\u4e8c\u53c9\u6811","permalink":"/docs/leetcode/101-200/\u4ece\u4e2d\u5e8f\u4e0e\u540e\u5e8f\u904d\u5386\u5e8f\u5217\u6784\u9020\u4e8c\u53c9\u6811"}}');var i=t(25105),l=t(8556);const d={},o="105.\u4ece\u524d\u5e8f\u4e0e\u4e2d\u5e8f\u904d\u5386\u5e8f\u5217\u6784\u9020\u4e8c\u53c9\u6811",s={},c=[{value:"\u9898\u89e3 1 - java",id:"\u9898\u89e3-1---java",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"105\u4ece\u524d\u5e8f\u4e0e\u4e2d\u5e8f\u904d\u5386\u5e8f\u5217\u6784\u9020\u4e8c\u53c9\u6811",children:"105.\u4ece\u524d\u5e8f\u4e0e\u4e2d\u5e8f\u904d\u5386\u5e8f\u5217\u6784\u9020\u4e8c\u53c9\u6811"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal",children:"105.\u4ece\u524d\u5e8f\u4e0e\u4e2d\u5e8f\u904d\u5386\u5e8f\u5217\u6784\u9020\u4e8c\u53c9\u6811"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5206\u6cbb\u3001\u4e8c\u53c9\u6811",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6839\u636e\u4e00\u68f5\u6811\u7684\u524d\u5e8f\u904d\u5386\u4e0e\u4e2d\u5e8f\u904d\u5386\u6784\u9020\u4e8c\u53c9\u6811\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---java",children:"\u9898\u89e3 1 - java"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-21"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a26ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a76.4MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajava"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f7f\u7528\u9012\u5f52\uff0c\u901a\u8fc7\u5207\u5272\u6570\u7ec4\u8fdb\u884c\u904d\u5386\u5de6\u53f3\u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n\tpublic TreeNode buildTree(int[] preorder, int[] inorder) {\n        if(preorder.length==0)return null;\n\t\tint center = preorder[0];\n\t\tTreeNode node = new TreeNode(center);\n\t\tint index=indexOf(inorder, center);\n\t\tint left = index-0,right=inorder.length-1-index;\n\t\tif(left!=0) {\n\t\t\tnode.left=buildTree(split(preorder,1,left), subString(inorder, 0,index));\n\t\t}\n\t\tif(right!=0) {\n\t\t\tnode.right=buildTree(subString(preorder,1+left), subString(inorder, index+1));\n\t\t}\n\t\treturn node;\n\t}\n\tpublic int[] split(int[] arr,int start,int length) {\n\t\tint[] newArr = new int[length];\n\t\tfor(int i=0;i<length;i++) {\n\t\t\tnewArr[i]=arr[start];\n\t\t\tstart++;\n\t\t}\n\t\treturn newArr;\n\t}\n\tpublic int indexOf(int[] arr, int num) {\n\t\tfor (int i = 0, len = arr.length; i < len; i++) {\n\t\t\tif (arr[i] == num)\n\t\t\t\treturn i;\n\t\t}\n\t\treturn -1;\n\t}\n\tpublic int[] subString(int[] arr, int start) {\n\t\treturn subString(arr, start, arr.length);\n\t}\n\tpublic int[] subString(int[] arr, int start, int end) {\n\t\tint length = end - start;\n\t\tint[] newArr = new int[length];\n\t\tfor (int i = 0; i < length; i++) {\n\t\t\tnewArr[i] = arr[start];\n\t\t\tstart++;\n\t\t}\n\t\treturn newArr;\n\t}\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-02-20"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a137ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a86.3MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:\n        if not preorder: return None\n        index = inorder.index(preorder[0])\n        return TreeNode(\n            preorder[0], \n            self.buildTree(preorder[1:index + 1], inorder[:index]),\n            self.buildTree(preorder[index + 1:], inorder[index + 1:])\n        )\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var r=t(58101);const i={},l=r.createContext(i);function d(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);