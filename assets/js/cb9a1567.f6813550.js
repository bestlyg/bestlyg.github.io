"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[44405],{94754:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"leetcode/901-1000/\u53ef\u4ee5\u88ab\u4e00\u6b65\u6355\u83b7\u7684\u68cb\u5b50\u6570","title":"999.\u53ef\u4ee5\u88ab\u4e00\u6b65\u6355\u83b7\u7684\u68cb\u5b50\u6570","description":"\u94fe\u63a5\uff1a999.\u53ef\u4ee5\u88ab\u4e00\u6b65\u6355\u83b7\u7684\u68cb\u5b50\u6570","source":"@site/docs/leetcode/901-1000/999.\u53ef\u4ee5\u88ab\u4e00\u6b65\u6355\u83b7\u7684\u68cb\u5b50\u6570.md","sourceDirName":"leetcode/901-1000","slug":"/leetcode/901-1000/\u53ef\u4ee5\u88ab\u4e00\u6b65\u6355\u83b7\u7684\u68cb\u5b50\u6570","permalink":"/docs/leetcode/901-1000/\u53ef\u4ee5\u88ab\u4e00\u6b65\u6355\u83b7\u7684\u68cb\u5b50\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":999,"frontMatter":{},"sidebar":"journal","previous":{"title":"998.\u6700\u5927\u4e8c\u53c9\u6811II","permalink":"/docs/leetcode/901-1000/\u6700\u5927\u4e8c\u53c9\u6811II"},"next":{"title":"1000.\u5408\u5e76\u77f3\u5934\u7684\u6700\u4f4e\u6210\u672c","permalink":"/docs/leetcode/901-1000/\u5408\u5e76\u77f3\u5934\u7684\u6700\u4f4e\u6210\u672c"}}');var o=s(86070),r=s(31503);const l={},i="999.\u53ef\u4ee5\u88ab\u4e00\u6b65\u6355\u83b7\u7684\u68cb\u5b50\u6570",c={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"999\u53ef\u4ee5\u88ab\u4e00\u6b65\u6355\u83b7\u7684\u68cb\u5b50\u6570",children:"999.\u53ef\u4ee5\u88ab\u4e00\u6b65\u6355\u83b7\u7684\u68cb\u5b50\u6570"})}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(e.a,{href:"https://leetcode.cn/problems/available-captures-for-rook",children:"999.\u53ef\u4ee5\u88ab\u4e00\u6b65\u6355\u83b7\u7684\u68cb\u5b50\u6570"}),(0,o.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,o.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u77e9\u9635\u3001\u6a21\u62df",(0,o.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u51fa\u4e00\u68f5\u4e8c\u53c9\u6811\uff0c\u5176\u4e0a\u6bcf\u4e2a\u7ed3\u70b9\u7684\u503c\u90fd\u662f 0 \u6216 1 \u3002\u6bcf\u4e00\u6761\u4ece\u6839\u5230\u53f6\u7684\u8def\u5f84\u90fd\u4ee3\u8868\u4e00\u4e2a\u4ece\u6700\u9ad8\u6709\u6548\u4f4d\u5f00\u59cb\u7684\u4e8c\u8fdb\u5236\u6570\u3002\u8fd4\u56de\u8fd9\u4e9b\u6570\u5b57\u4e4b\u548c\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-26"}),"\n",(0,o.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.3MB"}),"\n",(0,o.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,o.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int sumRootToLeaf(TreeNode *root) {\n        int ans = 0;\n        dfs(root, ans, 0);\n        return ans;\n    }\n    void dfs(TreeNode *node, int &ans, int num) {\n        if (!node) return;\n        num = num << 1 | node->val;\n        if (!node->left && !node->right) {\n            ans += num;\n            return;\n        }\n        dfs(node->left, ans, num);\n        dfs(node->right, ans, num);\n    }\n};\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-30"}),"\n",(0,o.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,o.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.1MB"}),"\n",(0,o.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,o.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int sumRootToLeaf(TreeNode* root) {\n        int ans = 0;\n        dfs(root, ans, 0);\n        return ans;\n    }\n    void dfs(TreeNode* node, int& ans, int val) {\n        val = val << 1 | node->val;\n        if (node->left == nullptr && node->right == nullptr) {\n            ans += val;\n            return;\n        }\n        if (node->left) dfs(node->left, ans, val);\n        if (node->right) dfs(node->right, ans, val);\n    }\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},31503:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>i});var t=s(30758);const o={},r=t.createContext(o);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);