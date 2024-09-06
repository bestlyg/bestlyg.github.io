"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[83621],{72178:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=t(86070),i=t(25710);const l={},o="111.\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6",s={id:"leetcode/101-200/\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6",title:"111.\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6",description:"\u94fe\u63a5\uff1a111.\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6",source:"@site/docs/leetcode/101-200/111.\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6",permalink:"/docs/leetcode/101-200/\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:111,frontMatter:{},sidebar:"journal",previous:{title:"110.\u5e73\u8861\u4e8c\u53c9\u6811",permalink:"/docs/leetcode/101-200/\u5e73\u8861\u4e8c\u53c9\u6811"},next:{title:"112.\u8def\u5f84\u603b\u548c",permalink:"/docs/leetcode/101-200/\u8def\u5f84\u603b\u548c"}},c={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - c",id:"\u9898\u89e3-3---c",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"111\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6",children:"111.\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-depth-of-binary-tree",children:"111.\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\uff0c\u627e\u51fa\u5176\u6700\u5c0f\u6df1\u5ea6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-08-21"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.3MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6df1\u5ea6\u4f18\u5148\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function minDepth(root: TreeNode | null): number {\n  if (root === null) return 0;\n  else if (root.left === null && root.right === null) return 1;\n  else {\n    let minD = Infinity;\n    if (root.left) minD = Math.min(minDepth(root.left), minD);\n    if (root.right) minD = Math.min(minDepth(root.right), minD);\n    return minD + 1;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-08-21"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.6MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5e7f\u5ea6\u4f18\u5148\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function minDepth(root: TreeNode | null): number {\n  if (root === null) return 0;\n  const queue: TreeNode[] = [root];\n  let height = 1;\n  let size = 1;\n  while (queue.length !== 0) {\n    const node = queue.shift() as TreeNode;\n    if (node.left === null && node.right === null) return height;\n    if (node.left !== null) queue.push(node.left);\n    if (node.right !== null) queue.push(node.right);\n    if (--size === 0) {\n      height++;\n      size = queue.length;\n    }\n  }\n  return 0;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-3---c",children:"\u9898\u89e3 3 - c"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-27"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a132ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a73.8MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"// \u9012\u5f52\u904d\u5386\u6bcf\u4e2a\u8282\u70b9\nvoid inorder(struct TreeNode *root, int level, int *min){\n    if (!root) return ;\n    // \u5982\u679c\u662f\u53f6\u5b50\u4e14\u5c42\u7ea7\u6bd4\u8f83\u5c0f\u5219\u8d4b\u503c\n    if (!root->left && !root->right) {\n        if (*min > level) *min = level;\n        return ;\n    }\n    inorder(root->left, level + 1, min);\n    inorder(root->right, level + 1, min);\n}\nint minDepth(struct TreeNode* root){\n    if (!root) return 0;\n    int min = 10000;\n    inorder(root, 1, &min);\n    return min;\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(30758);const i={},l=r.createContext(i);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);