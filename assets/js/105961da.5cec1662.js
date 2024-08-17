"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[86748],{41895:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>a,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var t=l(86070),r=l(25710);const o={},s="993.\u4e8c\u53c9\u6811\u7684\u5802\u5144\u5f1f\u8282\u70b9",d={id:"leetcode/901-1000/\u4e8c\u53c9\u6811\u7684\u5802\u5144\u5f1f\u8282\u70b9",title:"993.\u4e8c\u53c9\u6811\u7684\u5802\u5144\u5f1f\u8282\u70b9",description:"\u94fe\u63a5\uff1a993.\u4e8c\u53c9\u6811\u7684\u5802\u5144\u5f1f\u8282\u70b9",source:"@site/docs/leetcode/901-1000/993.\u4e8c\u53c9\u6811\u7684\u5802\u5144\u5f1f\u8282\u70b9.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u4e8c\u53c9\u6811\u7684\u5802\u5144\u5f1f\u8282\u70b9",permalink:"/docs/leetcode/901-1000/\u4e8c\u53c9\u6811\u7684\u5802\u5144\u5f1f\u8282\u70b9",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:993,frontMatter:{},sidebar:"journal",previous:{title:"992.K\u4e2a\u4e0d\u540c\u6574\u6570\u7684\u5b50\u6570\u7ec4",permalink:"/docs/leetcode/901-1000/K\u4e2a\u4e0d\u540c\u6574\u6570\u7684\u5b50\u6570\u7ec4"},next:{title:"994.\u8150\u70c2\u7684\u6a58\u5b50",permalink:"/docs/leetcode/901-1000/\u8150\u70c2\u7684\u6a58\u5b50"}},i={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"993\u4e8c\u53c9\u6811\u7684\u5802\u5144\u5f1f\u8282\u70b9",children:"993.\u4e8c\u53c9\u6811\u7684\u5802\u5144\u5f1f\u8282\u70b9"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/cousins-in-binary-tree",children:"993.\u4e8c\u53c9\u6811\u7684\u5802\u5144\u5f1f\u8282\u70b9"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5982\u679c\u4e8c\u53c9\u6811\u7684\u4e24\u4e2a\u8282\u70b9\u6df1\u5ea6\u76f8\u540c\uff0c\u4f46 \u7236\u8282\u70b9\u4e0d\u540c \uff0c\u5219\u5b83\u4eec\u662f\u4e00\u5bf9\u5802\u5144\u5f1f\u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-17"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a116ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.3MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u751f\u6210\u8282\u70b9\u7684\u7ee7\u627f\u94fe\u8fdb\u884c\u6bd4\u8f83\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function isCousins(root: TreeNode | null, x: number, y: number): boolean {\n  if (root === null) return false;\n  const findGrandParent = (\n    val: number,\n    queue: TreeNode[],\n    node: TreeNode | null = root\n  ): boolean => {\n    if (node === null) return false;\n    queue.unshift(node);\n    if (node.val === val) return true;\n    if (findGrandParent(val, queue, node.left)) return true;\n    if (findGrandParent(val, queue, node.right)) return true;\n    queue.shift();\n    return false;\n  };\n  const queueX: TreeNode[] = [];\n  findGrandParent(x, queueX);\n  const queueY: TreeNode[] = [];\n  findGrandParent(y, queueY);\n  if (queueX.length < 3 || queueY.length < 3) return false;\n  return queueX[1] !== queueY[1] && queueX.length === queueY.length;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-25"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.6MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function isCousins(root: TreeNode | null, x: number, y: number): boolean {\n  const map = new Map<number, { parent: TreeNode | null; level: number }>();\n  dfs();\n  const xNode = map.get(x)!;\n  const yNode = map.get(y)!;\n  return xNode.level === yNode.level && xNode.parent !== yNode.parent;\n  function dfs(node: TreeNode | null = root, level = 0, parent: TreeNode | null = null) {\n    if (node === null) return;\n    map.set(node.val, {\n      parent,\n      level,\n    });\n    dfs(node.left, level + 1, node);\n    dfs(node.right, level + 1, node);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-02-08"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a41ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.5MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u8bb0\u5f55\u7236\u4eb2\u548clevel\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def isCousins(self, root: Optional[TreeNode], x: int, y: int) -> bool:\n        map = {}\n        xlevel = ylevel = 0\n        xnode, ynode = None, None\n        def dfs(node: Optional[TreeNode], level = 0):\n            nonlocal xnode, ynode, xlevel, ylevel\n            if not node: return\n            if node.val == x:\n                xnode = node\n                xlevel = level\n            if node.val == y:\n                ynode = node\n                ylevel = level\n            if node.left:\n                map[node.left] = node\n                dfs(node.left, level + 1)\n            if node.right:\n                map[node.right] = node\n                dfs(node.right, level + 1)\n        dfs(root)\n        if xlevel != ylevel: return False\n        if map[xnode] == map[ynode]: return False\n        return True\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},25710:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>d});var t=l(30758);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);