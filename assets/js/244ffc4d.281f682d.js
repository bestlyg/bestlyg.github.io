"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[60318],{61444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/601-700/\u4e24\u6570\u4e4b\u548cIV-\u8f93\u5165\u4e8c\u53c9\u641c\u7d22\u6811","title":"653.\u4e24\u6570\u4e4b\u548cIV-\u8f93\u5165\u4e8c\u53c9\u641c\u7d22\u6811","description":"\u94fe\u63a5\uff1a653.\u4e24\u6570\u4e4b\u548cIV-\u8f93\u5165\u4e8c\u53c9\u641c\u7d22\u6811","source":"@site/docs/leetcode/601-700/653.\u4e24\u6570\u4e4b\u548cIV-\u8f93\u5165\u4e8c\u53c9\u641c\u7d22\u6811.md","sourceDirName":"leetcode/601-700","slug":"/leetcode/601-700/\u4e24\u6570\u4e4b\u548cIV-\u8f93\u5165\u4e8c\u53c9\u641c\u7d22\u6811","permalink":"/docs/leetcode/601-700/\u4e24\u6570\u4e4b\u548cIV-\u8f93\u5165\u4e8c\u53c9\u641c\u7d22\u6811","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":653,"frontMatter":{},"sidebar":"journal","previous":{"title":"652.\u5bfb\u627e\u91cd\u590d\u7684\u5b50\u6811","permalink":"/docs/leetcode/601-700/\u5bfb\u627e\u91cd\u590d\u7684\u5b50\u6811"},"next":{"title":"654.\u6700\u5927\u4e8c\u53c9\u6811","permalink":"/docs/leetcode/601-700/\u6700\u5927\u4e8c\u53c9\u6811"}}');var s=t(86070),o=t(31503);const l={},i="653.\u4e24\u6570\u4e4b\u548cIV-\u8f93\u5165\u4e8c\u53c9\u641c\u7d22\u6811",c={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"653\u4e24\u6570\u4e4b\u548civ-\u8f93\u5165\u4e8c\u53c9\u641c\u7d22\u6811",children:"653.\u4e24\u6570\u4e4b\u548cIV-\u8f93\u5165\u4e8c\u53c9\u641c\u7d22\u6811"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/two-sum-iv-input-is-a-bst",children:"653.\u4e24\u6570\u4e4b\u548cIV-\u8f93\u5165\u4e8c\u53c9\u641c\u7d22\u6811"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u641c\u7d22\u6811\u3001\u54c8\u5e0c\u8868\u3001\u53cc\u6307\u9488\u3001\u4e8c\u53c9\u6811",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u641c\u7d22\u6811 root \u548c\u4e00\u4e2a\u76ee\u6807\u7ed3\u679c k\uff0c\u5982\u679c BST \u4e2d\u5b58\u5728\u4e24\u4e2a\u5143\u7d20\u4e14\u5b83\u4eec\u7684\u548c\u7b49\u4e8e\u7ed9\u5b9a\u7684\u76ee\u6807\u7ed3\u679c\uff0c\u5219\u8fd4\u56de true\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-20"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a168ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46.8MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5c42\u5e8f\u904d\u5386\u65f6\u5224\u65ad\u6bcf\u4e2a\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function findTarget(root: TreeNode | null, k: number): boolean {\n  if (root === null) return false;\n  const set = new Set<number>();\n  const q = [root];\n  while (q.length) {\n    const node = q.shift()!;\n    if (set.has(node.val)) return true;\n    set.add(k - node.val);\n    node.left && q.push(node.left);\n    node.right && q.push(node.right);\n  }\n  return false;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-21"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a37.7MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    unordered_set<int> s;\n    bool findTarget(TreeNode *root, int k) {\n        if (!root) return false;\n        if (s.count(k - root->val)) return true;\n        s.insert(root->val);\n        return findTarget(root->left, k) || findTarget(root->right, k);\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(30758);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);