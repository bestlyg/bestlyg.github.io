"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[22795],{378:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"leetcode/201-300/\u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148","title":"236.\u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148","description":"\u94fe\u63a5\uff1a236.\u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148","source":"@site/docs/leetcode/201-300/236.\u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148.md","sourceDirName":"leetcode/201-300","slug":"/leetcode/201-300/\u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148","permalink":"/docs/leetcode/201-300/\u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":236,"frontMatter":{},"sidebar":"journal","previous":{"title":"235.\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148","permalink":"/docs/leetcode/201-300/\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148"},"next":{"title":"237.\u5220\u9664\u94fe\u8868\u4e2d\u7684\u8282\u70b9","permalink":"/docs/leetcode/201-300/\u5220\u9664\u94fe\u8868\u4e2d\u7684\u8282\u70b9"}}');var r=t(25105),l=t(8556);const s={},i="236.\u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148",d={},c=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2},{value:"\u9898\u89e3 2 - javascript",id:"\u9898\u89e3-2---javascript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"236\u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148",children:"236.\u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree",children:"236.\u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811, \u627e\u5230\u8be5\u6811\u4e2d\u4e24\u4e2a\u6307\u5b9a\u8282\u70b9\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-02-09"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a56ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a21.32MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u8bb0\u5f55\u7236\u4eb2\u548clevel\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        map = {}\n        plevel = qlevel = 0\n        def dfs(node: Optional[TreeNode], level = 0):\n            nonlocal plevel, qlevel\n            if not node: return\n            if node == p: plevel = level\n            if node == q: qlevel = level\n            if node.left:\n                map[node.left] = node\n                dfs(node.left, level + 1)\n            if node.right:\n                map[node.right] = node\n                dfs(node.right, level + 1)\n        dfs(root)\n        if plevel > qlevel:\n            plevel, qlevel = qlevel, plevel\n            p, q = q, p\n        while qlevel > plevel:\n            print(q, qlevel)\n            qlevel -= 1\n            q = map[q]\n        while p != q:\n            p, q = map[p], map[q]\n        return p\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---javascript",children:"\u9898\u89e3 2 - javascript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-10"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.5MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u901a\u8fc7 js \u7279\u6027\u7ed9\u6bcf\u4e2a\u8282\u70b9\u6dfb\u52a0 parent \u5c5e\u6027\uff0c\u904d\u5386\u662f\u5426\u6709\u76f8\u540c\u7236\u8282\u70b9\u8fdb\u884c\u5224\u65ad\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {TreeNode}\n */\nvar lowestCommonAncestor = function (root, p, q) {\n  function treeNodeInorder(node) {\n    if (node.left !== null) {\n      node.left.parent = node;\n      treeNodeInorder(node.left);\n    }\n    if (node.right !== null) {\n      node.right.parent = node;\n      treeNodeInorder(node.right);\n    }\n  }\n  treeNodeInorder(root);\n  root.parent = root;\n  let temp = p;\n  const queueP = [temp];\n  while (temp.parent !== root) {\n    queueP.push(temp.parent);\n    temp = temp.parent;\n  }\n  queueP.push(root);\n  temp = q;\n  const queueQ = [temp];\n  while (temp.parent !== root) {\n    queueQ.push(temp.parent);\n    temp = temp.parent;\n  }\n  queueQ.push(root);\n  for (const node of queueP) {\n    if (queueQ.includes(node)) return node;\n  }\n  return root;\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var o=t(58101);const r={},l=o.createContext(r);function s(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);