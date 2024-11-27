"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[40319],{78225:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"leetcode/101-200/\u8def\u5f84\u603b\u548c","title":"112.\u8def\u5f84\u603b\u548c","description":"\u94fe\u63a5\uff1a112.\u8def\u5f84\u603b\u548c","source":"@site/docs/leetcode/101-200/112.\u8def\u5f84\u603b\u548c.md","sourceDirName":"leetcode/101-200","slug":"/leetcode/101-200/\u8def\u5f84\u603b\u548c","permalink":"/docs/leetcode/101-200/\u8def\u5f84\u603b\u548c","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":112,"frontMatter":{},"sidebar":"journal","previous":{"title":"111.\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6","permalink":"/docs/leetcode/101-200/\u4e8c\u53c9\u6811\u7684\u6700\u5c0f\u6df1\u5ea6"},"next":{"title":"113.\u8def\u5f84\u603b\u548cII","permalink":"/docs/leetcode/101-200/\u8def\u5f84\u603b\u548cII"}}');var l=t(86070),s=t(31503);const o={},i="112.\u8def\u5f84\u603b\u548c",c={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"112\u8def\u5f84\u603b\u548c",children:"112.\u8def\u5f84\u603b\u548c"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/path-sum",children:"112.\u8def\u5f84\u603b\u548c"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\u548c\u4e00\u4e2a\u76ee\u6807\u548c\uff0c\u5224\u65ad\u8be5\u6811\u4e2d\u662f\u5426\u5b58\u5728\u6839\u8282\u70b9\u5230\u53f6\u5b50\u8282\u70b9\u7684\u8def\u5f84\uff0c\u8fd9\u6761\u8def\u5f84\u4e0a\u6240\u6709\u8282\u70b9\u503c\u76f8\u52a0\u7b49\u4e8e\u76ee\u6807\u548c\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-07-07"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a38.2MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6df1\u5ea6\u9012\u5f52\u904d\u5386\u5373\u53ef\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"/**\n * Definition for a binary tree node.\n * class TreeNode {\n *     val: number\n *     left: TreeNode | null\n *     right: TreeNode | null\n *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {\n *         this.val = (val===undefined ? 0 : val)\n *         this.left = (left===undefined ? null : left)\n *         this.right = (right===undefined ? null : right)\n *     }\n * }\n */\nfunction hasPathSum(root: TreeNode | null, sum: number): boolean {\n  if (root === null) return false;\n  const val = root.val;\n  if (val === sum && root.left === null && root.right === null) return true;\n  else return hasPathSum(root.left, sum - val) || hasPathSum(root.right, sum - val);\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(30758);const l={},s=r.createContext(l);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);