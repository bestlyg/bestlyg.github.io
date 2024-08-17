"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[16075],{8810:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=r(86070),o=r(25710);const l={},s="987.\u4e8c\u53c9\u6811\u7684\u5782\u5e8f\u904d\u5386",i={id:"leetcode/901-1000/\u4e8c\u53c9\u6811\u7684\u5782\u5e8f\u904d\u5386",title:"987.\u4e8c\u53c9\u6811\u7684\u5782\u5e8f\u904d\u5386",description:"\u94fe\u63a5\uff1a987.\u4e8c\u53c9\u6811\u7684\u5782\u5e8f\u904d\u5386",source:"@site/docs/leetcode/901-1000/987.\u4e8c\u53c9\u6811\u7684\u5782\u5e8f\u904d\u5386.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u4e8c\u53c9\u6811\u7684\u5782\u5e8f\u904d\u5386",permalink:"/docs/leetcode/901-1000/\u4e8c\u53c9\u6811\u7684\u5782\u5e8f\u904d\u5386",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:987,frontMatter:{},sidebar:"journal",previous:{title:"983.\u6700\u4f4e\u7968\u4ef7",permalink:"/docs/leetcode/901-1000/\u6700\u4f4e\u7968\u4ef7"},next:{title:"989.\u6570\u7ec4\u5f62\u5f0f\u7684\u6574\u6570\u52a0\u6cd5",permalink:"/docs/leetcode/901-1000/\u6570\u7ec4\u5f62\u5f0f\u7684\u6574\u6570\u52a0\u6cd5"}},c={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"987\u4e8c\u53c9\u6811\u7684\u5782\u5e8f\u904d\u5386",children:"987.\u4e8c\u53c9\u6811\u7684\u5782\u5e8f\u904d\u5386"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/vertical-order-traversal-of-a-binary-tree",children:"987.\u4e8c\u53c9\u6811\u7684\u5782\u5e8f\u904d\u5386"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u54c8\u5e0c\u8868\u3001\u4e8c\u53c9\u6811\u3001\u6392\u5e8f",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e8c\u53c9\u6811\u7684\u6839\u7ed3\u70b9 root \uff0c\u8bf7\u4f60\u8bbe\u8ba1\u7b97\u6cd5\u8ba1\u7b97\u4e8c\u53c9\u6811\u7684 \u5782\u5e8f\u904d\u5386 \u5e8f\u5217\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-31"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u50a8\u5b58\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function verticalTraversal(root: TreeNode | null): number[][] {\n  if (root === null) return [];\n  const map = new Map<number, number[][]>();\n  order(root, 0, 0);\n  const list = [...map.entries()]\n    .sort(([col1], [col2]) => col1 - col2)\n    .map(([, list]) =>\n      list\n        .sort(([, row1, val1], [, row2, val2]) => (row1 === row2 ? val1 - val2 : row1 - row2))\n        .map(([, , v]) => v)\n    );\n  return list;\n  function order(node: TreeNode | null, row: number, col: number) {\n    if (node === null) return null;\n    let list = map.get(col);\n    if (!list) map.set(col, (list = []));\n    list.push([col, row, node.val]);\n    order(node.left, row + 1, col - 1);\n    order(node.right, row + 1, col + 1);\n  }\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-25"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.7MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function verticalTraversal(root: TreeNode | null): number[][] {\n  if (root === null) return [];\n  const map = new Map<number, [number, number][]>();\n  dfs(root);\n  return Array.from(map.entries())\n    .sort(([a], [b]) => a - b)\n    .map(([, arr]) =>\n      arr\n        .sort(([num1, row1], [num2, row2]) => (row1 === row2 ? num1 - num2 : row1 - row2))\n        .map(([num]) => num)\n    );\n  function dfs(node: TreeNode | null, row = 0, col = 0) {\n    if (node === null) return;\n    let arr = map.get(col);\n    if (!arr) map.set(col, (arr = []));\n    arr.push([node.val, row]);\n    dfs(node.left, row + 1, col - 1);\n    dfs(node.right, row + 1, col + 1);\n  }\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-02-13"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a49ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.71MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def verticalTraversal(self, root: Optional[TreeNode]) -> List[List[int]]:\n        map = defaultdict(defaultdict)\n        def dfs(node: Optional[TreeNode], row: int, col: int):\n            if not node: return\n            if row not in map[col]: map[col][row] = []\n            map[col][row].append(node.val)\n            if node.left: dfs(node.left, row + 1, col - 1)\n            if node.right: dfs(node.right, row + 1, col + 1)\n        dfs(root, 0, 0)\n        arr = []\n        for _, cols in sorted(map.items()):\n            item = []\n            for _, values in sorted(cols.items()):\n                item += sorted(values)\n            arr.append(item)\n        return arr\n"})})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>i});var t=r(30758);const o={},l=t.createContext(o);function s(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);