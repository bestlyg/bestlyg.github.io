"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[24765],{3284:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=r(86070),o=r(31503);const s={},i="572.\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811",l={id:"leetcode/501-600/\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811",title:"572.\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811",description:"\u94fe\u63a5\uff1a572.\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811",source:"@site/docs/leetcode/501-600/572.\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811.md",sourceDirName:"leetcode/501-600",slug:"/leetcode/501-600/\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811",permalink:"/docs/leetcode/501-600/\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:572,frontMatter:{},sidebar:"journal",previous:{title:"567.\u5b57\u7b26\u4e32\u7684\u6392\u5217",permalink:"/docs/leetcode/501-600/\u5b57\u7b26\u4e32\u7684\u6392\u5217"},next:{title:"575.\u5206\u7cd6\u679c",permalink:"/docs/leetcode/501-600/\u5206\u7cd6\u679c"}},d={},c=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"572\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811",children:"572.\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/subtree-of-another-tree",children:"572.\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811\u3001\u5b57\u7b26\u4e32\u5339\u914d\u3001\u54c8\u5e0c\u51fd\u6570",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e24\u4e2a\u975e\u7a7a\u4e8c\u53c9\u6811 s \u548c t\uff0c\u68c0\u9a8c \xa0s \u4e2d\u662f\u5426\u5305\u542b\u548c t \u5177\u6709\u76f8\u540c\u7ed3\u6784\u548c\u8282\u70b9\u503c\u7684\u5b50\u6811\u3002s \u7684\u4e00\u4e2a\u5b50\u6811\u5305\u62ec s \u7684\u4e00\u4e2a\u8282\u70b9\u548c\u8fd9\u4e2a\u8282\u70b9\u7684\u6240\u6709\u5b50\u5b59\u3002s \u4e5f\u53ef\u4ee5\u770b\u505a\u5b83\u81ea\u8eab\u7684\u4e00\u68f5\u5b50\u6811\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-07"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.5MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5148\u904d\u5386\u83b7\u53d6\u6240\u6709\u503c\u76f8\u7b49\u7684\u8282\u70b9\uff0c\u901a\u8fc7\u4e2d\u5e8f\u904d\u5386\u5224\u65ad\u662f\u5426\u6bcf\u9879\u503c\u90fd\u76f8\u7b49"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} s\n * @param {TreeNode} t\n * @return {boolean}\n */\nvar isSubtree = function (s, t) {\n  function searchNode(val) {\n    const queue = inorder(s);\n    const resArr = [];\n    for (const node of queue) {\n      if (node.val === val) resArr.push(node);\n    }\n    return resArr;\n  }\n  function inorder(node) {\n    const queue = [];\n    function _inorder(node) {\n      if (node.left !== null) _inorder(node.left);\n      queue.push(node);\n      if (node.right !== null) _inorder(node.right);\n    }\n    _inorder(node);\n    return queue;\n  }\n  function sameArrVal(arr1, arr2) {\n    const len1 = arr1.length;\n    if (len1 !== arr2.length) return false;\n    for (let i = 0; i < len1; i++) if (arr1[i].val !== arr2[i].val) return false;\n    return true;\n  }\n  const sameNodeArr = searchNode(t.val);\n  if (sameNodeArr.length === 0) return false;\n  const tArr = inorder(t);\n  for (const node of sameNodeArr) {\n    if (sameArrVal(inorder(node), tArr)) return true;\n  }\n  return false;\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-08-04"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a58ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.51MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5e8f\u5217\u5316\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:\n        def stringify(node: Optional[TreeNode]) -> str:\n            if not node: return ''\n            return f'[{node.val}, {stringify(node.left)}, {stringify(node.right)}]'\n        return stringify(subRoot) in stringify(root)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},31503:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(30758);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);