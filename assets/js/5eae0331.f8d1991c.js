"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[7596],{25999:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"leetcode/101-200/\u5c06\u6709\u5e8f\u6570\u7ec4\u8f6c\u6362\u4e3a\u4e8c\u53c9\u641c\u7d22\u6811","title":"108.\u5c06\u6709\u5e8f\u6570\u7ec4\u8f6c\u6362\u4e3a\u4e8c\u53c9\u641c\u7d22\u6811","description":"\u94fe\u63a5\uff1a108.\u5c06\u6709\u5e8f\u6570\u7ec4\u8f6c\u6362\u4e3a\u4e8c\u53c9\u641c\u7d22\u6811","source":"@site/docs/leetcode/101-200/108.\u5c06\u6709\u5e8f\u6570\u7ec4\u8f6c\u6362\u4e3a\u4e8c\u53c9\u641c\u7d22\u6811.md","sourceDirName":"leetcode/101-200","slug":"/leetcode/101-200/\u5c06\u6709\u5e8f\u6570\u7ec4\u8f6c\u6362\u4e3a\u4e8c\u53c9\u641c\u7d22\u6811","permalink":"/docs/leetcode/101-200/\u5c06\u6709\u5e8f\u6570\u7ec4\u8f6c\u6362\u4e3a\u4e8c\u53c9\u641c\u7d22\u6811","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":108,"frontMatter":{},"sidebar":"journal","previous":{"title":"107.\u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386II","permalink":"/docs/leetcode/101-200/\u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386II"},"next":{"title":"109.\u6709\u5e8f\u94fe\u8868\u8f6c\u6362\u4e8c\u53c9\u641c\u7d22\u6811","permalink":"/docs/leetcode/101-200/\u6709\u5e8f\u94fe\u8868\u8f6c\u6362\u4e8c\u53c9\u641c\u7d22\u6811"}}');var l=t(86070),s=t(31503);const i={},d="108.\u5c06\u6709\u5e8f\u6570\u7ec4\u8f6c\u6362\u4e3a\u4e8c\u53c9\u641c\u7d22\u6811",o={},c=[{value:"\u9898\u89e3 1 - java",id:"\u9898\u89e3-1---java",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"108\u5c06\u6709\u5e8f\u6570\u7ec4\u8f6c\u6362\u4e3a\u4e8c\u53c9\u641c\u7d22\u6811",children:"108.\u5c06\u6709\u5e8f\u6570\u7ec4\u8f6c\u6362\u4e3a\u4e8c\u53c9\u641c\u7d22\u6811"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree",children:"108.\u5c06\u6709\u5e8f\u6570\u7ec4\u8f6c\u6362\u4e3a\u4e8c\u53c9\u641c\u7d22\u6811"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u4e8c\u53c9\u641c\u7d22\u6811\u3001\u6570\u7ec4\u3001\u5206\u6cbb\u3001\u4e8c\u53c9\u6811",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5c06\u4e00\u4e2a\u6309\u7167\u5347\u5e8f\u6392\u5217\u7684\u6709\u5e8f\u6570\u7ec4\uff0c\u8f6c\u6362\u4e3a\u4e00\u68f5\u9ad8\u5ea6\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---java",children:"\u9898\u89e3 1 - java"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-24"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.3MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajava"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\uff0c\u6bcf\u6b21\u53d6\u4e2d\u95f4\u70b9\u4e3a\u4e8c\u53c9\u6811\u8282\u70b9\uff0c\u524d\u540e\u4e3a\u5de6\u5b50\u6811\u548c\u53f3\u5b50\u6811\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"class Solution {\n\tpublic TreeNode sortedArrayToBST(int[] nums) {\n\t\tint len = nums.length;\n\t\tif (len == 0)\n\t\t\treturn null;\n\t\telse if (len == 1)\n\t\t\treturn new TreeNode(nums[0]);\n\t\tint mid = len / 2;\n\t\tTreeNode node = new TreeNode(nums[mid]);\n\t\tnode.left = sortedArrayToBST(Arrays.copyOfRange(nums, 0, mid));\n\t\tnode.right = sortedArrayToBST(Arrays.copyOfRange(nums,mid+1,len));\n\t\treturn node;\n\t}\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-07-03"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a116ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.6MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6bcf\u6b21\u53d6\u4e2d\u70b9\u8fdb\u884c\u5de6\u53f3\u5206\u79bb\u751f\u6210\u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"function sortedArrayToBST(nums: number[]): TreeNode | null {\n  function getNode(l: number, r: number): TreeNode | null {\n    if (l > r) return null;\n    else if (l === r) return new TreeNode(nums[l]);\n    else {\n      const mid = (r + l) >> 1;\n      const node = new TreeNode(nums[mid]);\n      node.left = getNode(l, mid - 1);\n      node.right = getNode(mid + 1, r);\n      return node;\n    }\n  }\n  return getNode(0, nums.length - 1);\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-07"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.5MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f9d\u6b21\u53d6\u4e2d\u503c\u63d2\u5165\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"function sortedArrayToBST(nums: number[]): TreeNode | null {\n  return build(nums);\n  function build(list: number[]): TreeNode | null {\n    if (list.length === 0) return null;\n    const mid = (0 + list.length - 1) >> 1;\n    const node = new TreeNode(list[mid]);\n    node.left = build(list.slice(0, mid));\n    node.right = build(list.slice(mid + 1));\n    return node;\n  }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(30758);const l={},s=r.createContext(l);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);