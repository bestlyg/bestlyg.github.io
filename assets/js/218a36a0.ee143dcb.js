"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[13749],{98601:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=r(86070),i=r(31503);const l={},s="94.\u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386",o={id:"leetcode/1-100/\u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386",title:"94.\u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386",description:"\u94fe\u63a5\uff1a94.\u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386",source:"@site/docs/leetcode/1-100/94.\u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386",permalink:"/docs/leetcode/1-100/\u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:94,frontMatter:{},sidebar:"journal",previous:{title:"93.\u590d\u539fIP\u5730\u5740",permalink:"/docs/leetcode/1-100/\u590d\u539fIP\u5730\u5740"},next:{title:"95.\u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811II",permalink:"/docs/leetcode/1-100/\u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811II"}},d={},c=[{value:"\u9898\u89e3 1 - java",id:"\u9898\u89e3-1---java",level:2},{value:"\u9898\u89e3 2 - java",id:"\u9898\u89e3-2---java",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2},{value:"\u9898\u89e3 4 - typescript",id:"\u9898\u89e3-4---typescript",level:2},{value:"\u9898\u89e3 5 - c",id:"\u9898\u89e3-5---c",level:2},{value:"\u9898\u89e3 6 - python",id:"\u9898\u89e3-6---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"94\u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386",children:"94.\u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/binary-tree-inorder-traversal",children:"94.\u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\uff0c\u8fd4\u56de\u5b83\u7684\u4e2d\u5e8f \u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---java",children:"\u9898\u89e3 1 - java"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-21"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a38MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajava"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"class Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n    \tLinkedList<Integer> list = new LinkedList<Integer>();\n        if(root==null)return list;\n        inorder(list,root);\n        return list;\n    }\n    public void inorder(List<Integer> list,TreeNode node) {\n    \tif(node.left!=null)inorder(list, node.left);\n    \tlist.add(node.val);\n    \tif(node.right!=null)inorder(list, node.right);\n    }\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---java",children:"\u9898\u89e3 2 - java"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-21"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a37.8MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajava"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8fed\u4ee3\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"public List<Integer> inorderTraversal(TreeNode root) {\n\tList<Integer> list = new LinkedList<Integer>();\n\tif(root==null) return list;\n\tStack<TreeNode> stack= new Stack<TreeNode>();\n\tTreeNode node = root;\n\twhile(!stack.isEmpty()||node!=null) {\n\t\twhile(node!=null) {\n\t\t\tstack.push(node);\n\t\t\tnode=node.left;\n\t\t}\n\t\tnode=stack.pop();\n\t\tlist.add(node.val);\n\t\tnode=node.right;\n\t}\n\treturn list;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-09-14"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a37.5MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function inorderTraversal(root: TreeNode | null): number[] {\n  const ans: number[] = [];\n  _inorder(root);\n  return ans;\n  function _inorder(node: TreeNode | null): void {\n    if (node === null) return;\n    node.left !== null && _inorder(node.left);\n    ans.push(node.val);\n    node.right !== null && _inorder(node.right);\n  }\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-4---typescript",children:"\u9898\u89e3 4 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-09-14"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a37.5MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8fed\u4ee3\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function inorderTraversal(root: TreeNode | null): number[] {\n  if (root === null) return [];\n  const ans: number[] = [];\n  const stack: TreeNode[] = [root];\n  const used = new Set<TreeNode>();\n  while (stack.length !== 0) {\n    const node = stack.pop() as TreeNode;\n    if (used.has(node)) {\n      ans.push(node.val);\n    } else {\n      used.add(node);\n      node.right && stack.push(node.right);\n      stack.push(node);\n      node.left && stack.push(node.left);\n    }\n  }\n  return ans;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-5---c",children:"\u9898\u89e3 5 - c"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-27"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.6MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"// \u5148\u9012\u5f52\u5de6\uff0c\u518d\u8ba1\u7b97\u5f53\u524d\u8282\u70b9\uff0c\u518d\u9012\u5f52\u53f3\nvoid order(struct TreeNode *root, int *arr, int *idx){\n    if (!root) return ;\n    order(root->left, arr, idx);\n    arr[(*idx)++] = root->val;\n    order(root->right, arr, idx);\n}\nint* inorderTraversal(struct TreeNode* root, int* returnSize){\n    int *arr = (int *)malloc(sizeof(int) * 100);\n    *returnSize = 0;\n    order(root, arr, returnSize);\n    return arr;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-6---python",children:"\u9898\u89e3 6 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-02-10"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a38ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.41MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        arr = []\n        def dfs(node: Optional[TreeNode]):\n            if not node: return\n            dfs(node.left)\n            arr.append(node.val)\n            dfs(node.right)\n        dfs(root)\n        return arr\n"})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},31503:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>o});var t=r(30758);const i={},l=t.createContext(i);function s(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);