"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[70839],{71264:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=t(86070),s=t(31503);const o={},i="515.\u5728\u6bcf\u4e2a\u6811\u884c\u4e2d\u627e\u6700\u5927\u503c",c={id:"leetcode/501-600/\u5728\u6bcf\u4e2a\u6811\u884c\u4e2d\u627e\u6700\u5927\u503c",title:"515.\u5728\u6bcf\u4e2a\u6811\u884c\u4e2d\u627e\u6700\u5927\u503c",description:"\u94fe\u63a5\uff1a515.\u5728\u6bcf\u4e2a\u6811\u884c\u4e2d\u627e\u6700\u5927\u503c",source:"@site/docs/leetcode/501-600/515.\u5728\u6bcf\u4e2a\u6811\u884c\u4e2d\u627e\u6700\u5927\u503c.md",sourceDirName:"leetcode/501-600",slug:"/leetcode/501-600/\u5728\u6bcf\u4e2a\u6811\u884c\u4e2d\u627e\u6700\u5927\u503c",permalink:"/docs/leetcode/501-600/\u5728\u6bcf\u4e2a\u6811\u884c\u4e2d\u627e\u6700\u5927\u503c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:515,frontMatter:{},sidebar:"journal",previous:{title:"514.\u81ea\u7531\u4e4b\u8def",permalink:"/docs/leetcode/501-600/\u81ea\u7531\u4e4b\u8def"},next:{title:"516.\u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217",permalink:"/docs/leetcode/501-600/\u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217"}},l={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"515\u5728\u6bcf\u4e2a\u6811\u884c\u4e2d\u627e\u6700\u5927\u503c",children:"515.\u5728\u6bcf\u4e2a\u6811\u884c\u4e2d\u627e\u6700\u5927\u503c"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/find-largest-value-in-each-tree-row",children:"515.\u5728\u6bcf\u4e2a\u6811\u884c\u4e2d\u627e\u6700\u5927\u503c"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u68f5\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9 root \uff0c\u8bf7\u627e\u51fa\u8be5\u4e8c\u53c9\u6811\u4e2d\u6bcf\u4e00\u5c42\u7684\u6700\u5927\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-06-24"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a21.6MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5c42\u5e8f\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    vector<int> largestValues(TreeNode* root) {\n        vector<int> ans;\n        if (root == nullptr) return ans;\n        queue<TreeNode*> q;\n        q.push(root);\n        ans.push_back(root->val);\n        int size = 1, nmax = INT_MIN;\n        while (q.size()) {\n            TreeNode* node = q.front();\n            q.pop();\n            if (node->left) {\n                q.push(node->left);\n                nmax = max(nmax, node->left->val);\n            }\n            if (node->right) {\n                q.push(node->right);\n                nmax = max(nmax, node->right->val);\n            }\n            if (--size == 0) {\n                if (q.size()) ans.push_back(nmax);\n                nmax = INT_MIN;\n                size = q.size();\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(30758);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);