"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[50095],{26371:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"leetcode/101-200/\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386","title":"144.\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386","description":"\u94fe\u63a5\uff1a144.\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386","source":"@site/docs/leetcode/101-200/144.\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386.md","sourceDirName":"leetcode/101-200","slug":"/leetcode/101-200/\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386","permalink":"/docs/leetcode/101-200/\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":144,"frontMatter":{},"sidebar":"journal","previous":{"title":"143.\u91cd\u6392\u94fe\u8868","permalink":"/docs/leetcode/101-200/\u91cd\u6392\u94fe\u8868"},"next":{"title":"145.\u4e8c\u53c9\u6811\u7684\u540e\u5e8f\u904d\u5386","permalink":"/docs/leetcode/101-200/\u4e8c\u53c9\u6811\u7684\u540e\u5e8f\u904d\u5386"}}');var l=r(86070),s=r(31503);const i={},o="144.\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386",d={},c=[{value:"\u9898\u89e3 1 - java",id:"\u9898\u89e3-1---java",level:2},{value:"\u9898\u89e3 2 - java",id:"\u9898\u89e3-2---java",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2},{value:"\u9898\u89e3 4 - typescript",id:"\u9898\u89e3-4---typescript",level:2},{value:"\u9898\u89e3 5 - c",id:"\u9898\u89e3-5---c",level:2},{value:"\u9898\u89e3 6 - python",id:"\u9898\u89e3-6---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"144\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386",children:"144.\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/binary-tree-preorder-traversal",children:"144.\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\uff0c\u8fd4\u56de\u5b83\u7684\u524d\u5e8f\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---java",children:"\u9898\u89e3 1 - java"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-21"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a37.8MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajava"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"class Solution {\n\tpublic List<Integer> preorderTraversal(TreeNode root) {\n\t\tList<Integer> list = new LinkedList<Integer>();\n\t\tif (root == null)\n\t\t\treturn list;\n\t\tpreorder(root, list);\n\t\treturn list;\n\t}\n\tpublic void preorder(TreeNode node, List<Integer> list) {\n\t\tlist.add(node.val);\n\t\tif (node.left != null)\n\t\t\tpreorder(node.left,list);\n\t\tif (node.right != null)\n\t\t\tpreorder(node.right,list);\n\t}\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-2---java",children:"\u9898\u89e3 2 - java"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-21"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a38.2MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajava"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8fed\u4ee3\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"class Solution {\n\tpublic List<Integer> preorderTraversal(TreeNode root) {\n\t\tList<Integer> list = new LinkedList<Integer>();\n\t\tif (root == null)\n\t\t\treturn list;\n\t\tStack<TreeNode> stack = new Stack<TreeNode>();\n\t\tstack.push(root);\n\t\twhile (!stack.isEmpty()) {\n\t\t\tTreeNode node = stack.pop();\n\t\t\tlist.add(node.val);\n\t\t\tif(node.right!=null)stack.push(node.right);\n\t\t\tif(node.left!=null)stack.push(node.left);\n\t\t}\n\t\treturn list;\n\t}\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-10-27"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.2MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"function preorderTraversal(root: TreeNode | null): number[] {\n  const ans: number[] = [];\n  preorder(root);\n  return ans;\n  function preorder(root: TreeNode | null) {\n    if (root === null) return;\n    ans.push(root.val);\n    preorder(root.left);\n    preorder(root.right);\n  }\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-4---typescript",children:"\u9898\u89e3 4 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-10-27"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.3MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8fed\u4ee3\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"function preorderTraversal(root: TreeNode | null): number[] {\n  const ans: number[] = [];\n  if (root === null) return ans;\n  const stack: TreeNode[] = [root];\n  while (stack.length !== 0) {\n    const node = stack.pop()!;\n    ans.push(node.val);\n    node.right && stack.push(node.right);\n    node.left && stack.push(node.left);\n  }\n  return ans;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-5---c",children:"\u9898\u89e3 5 - c"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-27"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.7MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"// \u5148\u8ba1\u7b97\u5f53\u524d\u8282\u70b9\uff0c\u518d\u9012\u5f52\u5de6\uff0c\u518d\u9012\u5f52\u53f3\nvoid preorder(struct TreeNode *root, int *arr, int *idx){\n    if (!root) return ;\n    arr[(*idx)++] = root->val;\n    preorder(root->left, arr, idx);\n    preorder(root->right, arr, idx);\n}\nint* preorderTraversal(struct TreeNode* root, int* returnSize){\n    int *arr = (int *)malloc(sizeof(int) * 100);\n    *returnSize = 0;\n    preorder(root, arr, returnSize);\n    return arr;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-6---python",children:"\u9898\u89e3 6 - python"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-02-11"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a34ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.38MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        if not root: return []\n        return [root.val] + self.preorderTraversal(root.left) + self.preorderTraversal(root.right)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},31503:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(30758);const l={},s=t.createContext(l);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);