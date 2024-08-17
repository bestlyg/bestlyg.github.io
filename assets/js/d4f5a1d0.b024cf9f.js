"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[48538],{3880:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var t=r(86070),l=r(25710);const c={},i="501.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4f17\u6570",s={id:"leetcode/501-600/\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4f17\u6570",title:"501.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4f17\u6570",description:"\u94fe\u63a5\uff1a501.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4f17\u6570",source:"@site/docs/leetcode/501-600/501.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4f17\u6570.md",sourceDirName:"leetcode/501-600",slug:"/leetcode/501-600/\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4f17\u6570",permalink:"/docs/leetcode/501-600/\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4f17\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:501,frontMatter:{},sidebar:"journal",previous:{title:"456.132\u6a21\u5f0f",permalink:"/docs/leetcode/401-500/456.132\u6a21\u5f0f"},next:{title:"502.IPO",permalink:"/docs/leetcode/501-600/IPO"}},o={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"501\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4f17\u6570",children:"501.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4f17\u6570"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/find-mode-in-binary-search-tree",children:"501.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4f17\u6570"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u641c\u7d22\u6811\u3001\u4e8c\u53c9\u6811",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6709\u76f8\u540c\u503c\u7684\u4e8c\u53c9\u641c\u7d22\u6811\uff08BST\uff09\uff0c\u627e\u51fa BST \u4e2d\u7684\u6240\u6709\u4f17\u6570\uff08\u51fa\u73b0\u9891\u7387\u6700\u9ad8\u7684\u5143\u7d20\uff09\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-09-24"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a120ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a47.2MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e2d\u5e8f\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function findMode(root: TreeNode | null): number[] {\n  const cache: Record<number, number> = {};\n  const setCache = (val: number) => {\n    if (!cache[val]) cache[val] = 0;\n    cache[val] += 1;\n  };\n  const inorder = (root: TreeNode | null) => {\n    if (root === null) return;\n    inorder(root.left);\n    setCache(root.val);\n    inorder(root.right);\n  };\n  inorder(root);\n  return Object.entries(cache)\n    .sort(([, c1], [, c2]) => c2 - c1)\n    .filter(([, c], _, arr) => c === arr[0][1])\n    .map(([val]) => parseInt(val));\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-09-24"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.1MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","[\u53c2\u8003\u94fe\u63a5](https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/solution/er-cha-sou-suo-shu-zhong-de-zhong-shu-by-leetcode-/)\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function findMode(root: TreeNode | null): number[] {\n  let base = 0;\n  let count = 0;\n  let maxCount = 0;\n  let answer: number[] = [];\n  const update = (x: number) => {\n    if (x === base) count++;\n    else {\n      count = 1;\n      base = x;\n    }\n    if (count === maxCount) answer.push(base);\n    if (count > maxCount) {\n      maxCount = count;\n      answer = [base];\n    }\n  };\n\n  let cur = root,\n    pre = null;\n  while (cur !== null) {\n    if (cur.left === null) {\n      update(cur.val);\n      cur = cur.right;\n      continue;\n    }\n    pre = cur.left;\n    while (pre.right !== null && pre.right !== cur) pre = pre.right;\n    if (pre.right === null) {\n      pre.right = cur;\n      cur = cur.left;\n    } else {\n      pre.right = null;\n      update(cur.val);\n      cur = cur.right;\n    }\n  }\n  return answer;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-07"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a47.1MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e2d\u5e8f\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function findMode(root: TreeNode | null): number[] {\n  if (root === null) return [];\n  const map = new Map<number, number>();\n  inorder(root);\n  return [...map.entries()]\n    .sort(([, v1], [, v2]) => v2 - v1)\n    .filter(([, v], _, list) => v === list[0][1])\n    .map(([k]) => k);\n  function inorder(node: TreeNode | null): void {\n    if (node === null) return;\n    inorder(node.left);\n    map.set(node.val, 1 + (map.get(node.val) ?? 0));\n    inorder(node.right);\n  }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},25710:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var t=r(30758);const l={},c=t.createContext(l);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);