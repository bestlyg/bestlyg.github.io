"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[36716],{82440:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/LCR/LCR067.\u6570\u7ec4\u4e2d\u4e24\u4e2a\u6570\u7684\u6700\u5927\u5f02\u6216\u503c","title":"LCR067.\u6570\u7ec4\u4e2d\u4e24\u4e2a\u6570\u7684\u6700\u5927\u5f02\u6216\u503c","description":"\u94fe\u63a5\uff1aLCR067.\u6570\u7ec4\u4e2d\u4e24\u4e2a\u6570\u7684\u6700\u5927\u5f02\u6216\u503c","source":"@site/docs/leetcode/LCR/LCR067.\u6570\u7ec4\u4e2d\u4e24\u4e2a\u6570\u7684\u6700\u5927\u5f02\u6216\u503c.md","sourceDirName":"leetcode/LCR","slug":"/leetcode/LCR/LCR067.\u6570\u7ec4\u4e2d\u4e24\u4e2a\u6570\u7684\u6700\u5927\u5f02\u6216\u503c","permalink":"/docs/leetcode/LCR/LCR067.\u6570\u7ec4\u4e2d\u4e24\u4e2a\u6570\u7684\u6700\u5927\u5f02\u6216\u503c","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"LCR053.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4e2d\u5e8f\u540e\u7ee7","permalink":"/docs/leetcode/LCR/LCR053.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4e2d\u5e8f\u540e\u7ee7"},"next":{"title":"LCR069.\u5c71\u8109\u6570\u7ec4\u7684\u5cf0\u9876\u7d22\u5f15","permalink":"/docs/leetcode/LCR/LCR069.\u5c71\u8109\u6570\u7ec4\u7684\u5cf0\u9876\u7d22\u5f15"}}');var i=t(86070),s=t(31503);const o={},l="LCR067.\u6570\u7ec4\u4e2d\u4e24\u4e2a\u6570\u7684\u6700\u5927\u5f02\u6216\u503c",c={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"lcr067\u6570\u7ec4\u4e2d\u4e24\u4e2a\u6570\u7684\u6700\u5927\u5f02\u6216\u503c",children:"LCR067.\u6570\u7ec4\u4e2d\u4e24\u4e2a\u6570\u7684\u6700\u5927\u5f02\u6216\u503c"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/ms70jA",children:"LCR067.\u6570\u7ec4\u4e2d\u4e24\u4e2a\u6570\u7684\u6700\u5927\u5f02\u6216\u503c"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u5b57\u5178\u6811\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \uff0c\u8fd4\u56de nums[i] XOR nums[j] \u7684\u6700\u5927\u8fd0\u7b97\u7ed3\u679c\uff0c\u5176\u4e2d 0 \u2264 i \u2264 j < n \u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-25"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a784ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a67.3MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u53c9\u5b57\u5178\u6811\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"const MAX = 31;\nclass BitTrieNode {\n  // 0\n  left: BitTrieNode | null = null;\n  // 1\n  right: BitTrieNode | null = null;\n  val = -1;\n}\nclass BitTrie {\n  root = new BitTrieNode();\n  add(num: number) {\n    const str = num.toString(2).padStart(MAX, '0');\n    let node = this.root;\n    for (let i = 0, l = str.length; i < l; i++) {\n      const ch = str[i];\n      if (ch === '0') node = node.left ?? (node.left = new BitTrieNode());\n      else node = node.right ?? (node.right = new BitTrieNode());\n    }\n    node.val = num;\n  }\n  find(num: number) {\n    const str = num.toString(2).padStart(MAX, '0');\n    let node = this.root;\n    for (let i = 0, l = str.length; i < l; i++) {\n      if (!node.left && !node.right) break;\n      const ch = str[i];\n      if (ch === '0') {\n        node = node.right ?? node.left!;\n      } else {\n        node = node.left ?? node.right!;\n      }\n    }\n    return node;\n  }\n}\nfunction findMaximumXOR(nums: number[]): number {\n  const trie = new BitTrie();\n  nums.forEach(num => trie.add(num));\n  trie.find(5).val;\n  let ans = -Infinity;\n  nums.forEach(num => {\n    ans = Math.max(ans, trie.find(num).val ^ num);\n  });\n  return ans;\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>l});var r=t(30758);const i={},s=r.createContext(i);function o(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);