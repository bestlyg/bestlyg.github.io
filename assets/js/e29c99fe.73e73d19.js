"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[33567],{71888:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/601-700/\u5bfb\u627e\u91cd\u590d\u7684\u5b50\u6811","title":"652.\u5bfb\u627e\u91cd\u590d\u7684\u5b50\u6811","description":"\u94fe\u63a5\uff1a652.\u5bfb\u627e\u91cd\u590d\u7684\u5b50\u6811","source":"@site/docs/leetcode/601-700/652.\u5bfb\u627e\u91cd\u590d\u7684\u5b50\u6811.md","sourceDirName":"leetcode/601-700","slug":"/leetcode/601-700/\u5bfb\u627e\u91cd\u590d\u7684\u5b50\u6811","permalink":"/docs/leetcode/601-700/\u5bfb\u627e\u91cd\u590d\u7684\u5b50\u6811","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":652,"frontMatter":{},"sidebar":"journal","previous":{"title":"650.\u4e24\u4e2a\u952e\u7684\u952e\u76d8","permalink":"/docs/leetcode/601-700/\u4e24\u4e2a\u952e\u7684\u952e\u76d8"},"next":{"title":"653.\u4e24\u6570\u4e4b\u548cIV-\u8f93\u5165\u4e8c\u53c9\u641c\u7d22\u6811","permalink":"/docs/leetcode/601-700/\u4e24\u6570\u4e4b\u548cIV-\u8f93\u5165\u4e8c\u53c9\u641c\u7d22\u6811"}}');var o=t(25105),s=t(8556);const c={},i="652.\u5bfb\u627e\u91cd\u590d\u7684\u5b50\u6811",l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"652\u5bfb\u627e\u91cd\u590d\u7684\u5b50\u6811",children:"652.\u5bfb\u627e\u91cd\u590d\u7684\u5b50\u6811"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(n.a,{href:"https://leetcode.cn/problems/find-duplicate-subtrees",children:"652.\u5bfb\u627e\u91cd\u590d\u7684\u5b50\u6811"}),(0,o.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,o.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u54c8\u5e0c\u8868\u3001\u4e8c\u53c9\u6811",(0,o.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u68f5\u4e8c\u53c9\u6811 root\uff0c\u8fd4\u56de\u6240\u6709\u91cd\u590d\u7684\u5b50\u6811\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-09-05"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a52ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a53.7MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","map \u5b58\u50a8\u76f8\u540c\u8282\u70b9\xb7\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:'class Solution {\npublic:\n    vector<TreeNode*> findDuplicateSubtrees(TreeNode* root) {\n        unordered_map<string, vector<TreeNode*>> m;\n        dfs(m, root);\n        vector<TreeNode *> ans;\n        for (auto &item : m) {\n            if (item.second.size() > 1) {\n                ans.push_back(item.second[0]);\n            }\n        }\n        return ans;\n    }\n    string dfs(unordered_map<string, vector<TreeNode*>> &m, TreeNode *root) {\n        if (!root) return "";\n        string s = "(" + to_string(root->val) + ",[" + dfs(m, root->left) + "],[" + dfs(m, root->right) + "])";\n        m[s].push_back(root);\n        return s;\n    }\n};\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(58101);const o={},s=r.createContext(o);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);