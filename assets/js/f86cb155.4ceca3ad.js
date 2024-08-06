"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[59737],{48959:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=l(86070),o=l(25710);const r={},s="2331.\u8ba1\u7b97\u5e03\u5c14\u4e8c\u53c9\u6811\u7684\u503c",d={id:"leetcode/2301-2400/\u8ba1\u7b97\u5e03\u5c14\u4e8c\u53c9\u6811\u7684\u503c",title:"2331.\u8ba1\u7b97\u5e03\u5c14\u4e8c\u53c9\u6811\u7684\u503c",description:"\u94fe\u63a5\uff1a2331.\u8ba1\u7b97\u5e03\u5c14\u4e8c\u53c9\u6811\u7684\u503c",source:"@site/docs/leetcode/2301-2400/2331.\u8ba1\u7b97\u5e03\u5c14\u4e8c\u53c9\u6811\u7684\u503c.md",sourceDirName:"leetcode/2301-2400",slug:"/leetcode/2301-2400/\u8ba1\u7b97\u5e03\u5c14\u4e8c\u53c9\u6811\u7684\u503c",permalink:"/docs/leetcode/2301-2400/\u8ba1\u7b97\u5e03\u5c14\u4e8c\u53c9\u6811\u7684\u503c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2331,frontMatter:{},sidebar:"journal",previous:{title:"2325.\u89e3\u5bc6\u6d88\u606f",permalink:"/docs/leetcode/2301-2400/\u89e3\u5bc6\u6d88\u606f"},next:{title:"2335.\u88c5\u6ee1\u676f\u5b50\u9700\u8981\u7684\u6700\u77ed\u603b\u65f6\u957f",permalink:"/docs/leetcode/2301-2400/\u88c5\u6ee1\u676f\u5b50\u9700\u8981\u7684\u6700\u77ed\u603b\u65f6\u957f"}},i={},c=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"2331\u8ba1\u7b97\u5e03\u5c14\u4e8c\u53c9\u6811\u7684\u503c",children:"2331.\u8ba1\u7b97\u5e03\u5c14\u4e8c\u53c9\u6811\u7684\u503c"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/evaluate-boolean-binary-tree",children:"2331.\u8ba1\u7b97\u5e03\u5c14\u4e8c\u53c9\u6811\u7684\u503c"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u6839\u8282\u70b9 root \u7684\u5e03\u5c14\u8fd0\u7b97\u503c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-06"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.6MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool dfs(TreeNode *node) {\n        if (node->val == 0) return false;\n        if (node->val == 1) return true;\n        if (node->left && node->val == 2) return dfs(node->left) || dfs(node->right);\n        if (node->left && node->val == 3) return dfs(node->left) && dfs(node->right);\n        return false;\n    }\n    bool evaluateTree(TreeNode* root) {\n        return dfs(root); \n    }\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-06"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a60ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.8MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def dfs(self, node: Optional[TreeNode]) -> bool:\n        if node.val == 0: return False\n        if node.val == 1: return True\n        if node.left and node.val == 2: return self.dfs(node.left) or self.dfs(node.right)\n        if node.left and node.val == 3: return self.dfs(node.left) and self.dfs(node.right)\n        return False\n    def evaluateTree(self, root: Optional[TreeNode]) -> bool:\n        return self.dfs(root)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-06"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.4MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"use std::cell::RefCell;\nuse std::rc::Rc;\nimpl Solution {\n    pub fn evaluate_tree(node: Option<Rc<RefCell<TreeNode>>>) -> bool {\n        let node = node.unwrap();\n        let node = node.as_ref().borrow();\n        if node.val == 0 {\n            return false;\n        }\n        if node.val == 1 {\n            return true;\n        }\n        if node.left.is_some() && node.val == 2 {\n            return Solution::evaluate_tree(node.left.clone()) || Solution::evaluate_tree(node.right.clone());\n        }\n        if node.left.is_some() && node.val == 3 {\n            return Solution::evaluate_tree(node.left.clone()) && Solution::evaluate_tree(node.right.clone());\n        }\n        return false;\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},25710:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>d});var t=l(30758);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);