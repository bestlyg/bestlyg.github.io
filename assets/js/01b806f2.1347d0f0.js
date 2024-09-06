"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[2718],{91815:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>d});var r=l(86070),i=l(25710);const s={},o="965.\u5355\u503c\u4e8c\u53c9\u6811",t={id:"leetcode/901-1000/\u5355\u503c\u4e8c\u53c9\u6811",title:"965.\u5355\u503c\u4e8c\u53c9\u6811",description:"\u94fe\u63a5\uff1a965.\u5355\u503c\u4e8c\u53c9\u6811",source:"@site/docs/leetcode/901-1000/965.\u5355\u503c\u4e8c\u53c9\u6811.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u5355\u503c\u4e8c\u53c9\u6811",permalink:"/docs/leetcode/901-1000/\u5355\u503c\u4e8c\u53c9\u6811",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:965,frontMatter:{},sidebar:"journal",previous:{title:"961.\u5728\u957f\u5ea62N\u7684\u6570\u7ec4\u4e2d\u627e\u51fa\u91cd\u590dN\u6b21\u7684\u5143\u7d20",permalink:"/docs/leetcode/901-1000/\u5728\u957f\u5ea62N\u7684\u6570\u7ec4\u4e2d\u627e\u51fa\u91cd\u590dN\u6b21\u7684\u5143\u7d20"},next:{title:"967.\u8fde\u7eed\u5dee\u76f8\u540c\u7684\u6570\u5b57",permalink:"/docs/leetcode/901-1000/\u8fde\u7eed\u5dee\u76f8\u540c\u7684\u6570\u5b57"}},c={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"965\u5355\u503c\u4e8c\u53c9\u6811",children:"965.\u5355\u503c\u4e8c\u53c9\u6811"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/univalued-binary-tree",children:"965.\u5355\u503c\u4e8c\u53c9\u6811"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5982\u679c\u4e8c\u53c9\u6811\u6bcf\u4e2a\u8282\u70b9\u90fd\u5177\u6709\u76f8\u540c\u7684\u503c\uff0c\u90a3\u4e48\u8be5\u4e8c\u53c9\u6811\u5c31\u662f\u5355\u503c\u4e8c\u53c9\u6811\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-25"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.6MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    bool isUnivalTree(TreeNode* root) { return dfs(root, root->val); }\n    bool dfs(TreeNode* node, int val) {\n        if (!node) return true;\n        if (node->val != val) return false;\n        return dfs(node->left, val) && dfs(node->right, val);\n    }\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-24"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.5MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    bool isUnivalTree(TreeNode* root) { return _isUnivalTree(root, root->val); }\n    bool _isUnivalTree(TreeNode* node, int val) {\n        if (node == nullptr) return true;\n        return node->val == val && _isUnivalTree(node->left, val) &&\n               _isUnivalTree(node->right, val);\n    }\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-24"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.6MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int val = 0;\n    bool isUnivalTree(TreeNode* root) {\n        if (!root) return true;\n        if (val == 0) val = root->val;\n        return root->val == val && isUnivalTree(root->left) &&\n               isUnivalTree(root->right);\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25710:(e,n,l)=>{l.d(n,{R:()=>o,x:()=>t});var r=l(30758);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);