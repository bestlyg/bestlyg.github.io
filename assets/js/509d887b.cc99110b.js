"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[89716],{69481:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"leetcode/1001-1100/\u6839\u5230\u53f6\u8def\u5f84\u4e0a\u7684\u4e0d\u8db3\u8282\u70b9","title":"1080.\u6839\u5230\u53f6\u8def\u5f84\u4e0a\u7684\u4e0d\u8db3\u8282\u70b9","description":"\u94fe\u63a5\uff1a1080.\u6839\u5230\u53f6\u8def\u5f84\u4e0a\u7684\u4e0d\u8db3\u8282\u70b9","source":"@site/docs/leetcode/1001-1100/1080.\u6839\u5230\u53f6\u8def\u5f84\u4e0a\u7684\u4e0d\u8db3\u8282\u70b9.md","sourceDirName":"leetcode/1001-1100","slug":"/leetcode/1001-1100/\u6839\u5230\u53f6\u8def\u5f84\u4e0a\u7684\u4e0d\u8db3\u8282\u70b9","permalink":"/docs/leetcode/1001-1100/\u6839\u5230\u53f6\u8def\u5f84\u4e0a\u7684\u4e0d\u8db3\u8282\u70b9","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1080,"frontMatter":{},"sidebar":"journal","previous":{"title":"1079.\u6d3b\u5b57\u5370\u5237","permalink":"/docs/leetcode/1001-1100/\u6d3b\u5b57\u5370\u5237"},"next":{"title":"1081.\u4e0d\u540c\u5b57\u7b26\u7684\u6700\u5c0f\u5b50\u5e8f\u5217","permalink":"/docs/leetcode/1001-1100/\u4e0d\u540c\u5b57\u7b26\u7684\u6700\u5c0f\u5b50\u5e8f\u5217"}}');var i=t(25105),o=t(8556);const r={},s="1080.\u6839\u5230\u53f6\u8def\u5f84\u4e0a\u7684\u4e0d\u8db3\u8282\u70b9",d={},c=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2},{value:"\u9898\u89e3 2 - rust",id:"\u9898\u89e3-2---rust",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"1080\u6839\u5230\u53f6\u8def\u5f84\u4e0a\u7684\u4e0d\u8db3\u8282\u70b9",children:"1080.\u6839\u5230\u53f6\u8def\u5f84\u4e0a\u7684\u4e0d\u8db3\u8282\u70b9"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/insufficient-nodes-in-root-to-leaf-paths",children:"1080.\u6839\u5230\u53f6\u8def\u5f84\u4e0a\u7684\u4e0d\u8db3\u8282\u70b9"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9 root \u548c\u4e00\u4e2a\u6574\u6570 limit \uff0c\u8bf7\u4f60\u540c\u65f6\u5220\u9664\u6811\u4e2d\u6240\u6709 \u4e0d\u8db3\u8282\u70b9 \uff0c\u5e76\u8fd4\u56de\u6700\u7ec8\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-22"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.9MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def dfs(node: Optional[TreeNode], limit: int, sum: int):\n    if node == None:\n        return True\n    sum += node.val\n    l, r = dfs(node.left, limit, sum), dfs(node.right, limit, sum)\n    if (not node.left and not node.right and sum < limit) or (not node.left and not r) or (not node.right and not l) or (not l and not r):\n        return False\n    if not l:\n        node.left = None\n    if not r:\n        node.right = None\n    return True\n\nclass Solution:\n    def sufficientSubset(self, root: Optional[TreeNode], limit: int) -> Optional[TreeNode]:\n        return root if dfs(root, limit, 0) else None\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---rust",children:"\u9898\u89e3 2 - rust"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-22"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.5MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"use std::cell::RefCell;\nuse std::rc::Rc;\nfn dfs(node: &mut Option<Rc<RefCell<TreeNode>>>, limit: i32, mut sum: i32) -> bool {\n    match node {\n        None => true,\n        Some(ref node) => {\n            let mut nodeRef = node.as_ref().borrow_mut();\n            sum += nodeRef.val;\n            let l = dfs(&mut nodeRef.left, limit, sum);\n            let r = dfs(&mut nodeRef.right, limit, sum);\n            if nodeRef.left.is_none() && nodeRef.right.is_none() && sum < limit\n                || nodeRef.left.is_none() && !r\n                || nodeRef.right.is_none() && !l\n                || !l && !r\n            {\n                false\n            } else {\n                if !l {\n                    nodeRef.left = None;\n                }\n                if !r {\n                    nodeRef.right = None;\n                }\n                true\n            }\n        }\n    }\n}\nimpl Solution {\n    pub fn sufficient_subset(\n        mut root: Option<Rc<RefCell<TreeNode>>>,\n        limit: i32,\n    ) -> Option<Rc<RefCell<TreeNode>>> {\n        if dfs(&mut root, limit, 0) {\n            root\n        } else {\n            None\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-22"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a32.7MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u5224\u65ad\u4e0b\u4e00\u5c42\u8282\u70b9\u662f\u5426\u6ee1\u8db3\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    TreeNode* sufficientSubset(TreeNode* root, int limit) {\n        return dfs(root, limit, 0) ? root : nullptr;\n    }\n    bool dfs(TreeNode *node, int limit, int sum) {\n        if (!node) return true;\n        sum += node->val;\n        auto l = dfs(node->left, limit, sum), r = dfs(node->right, limit, sum);\n        if (!node->left && !node->right && sum < limit ||\n            !node->left && !r ||\n            !node->right && !l ||\n            !l && !r) return false;\n        if (!l) node->left = nullptr;\n        if (!r) node->right = nullptr;\n        return true;\n    }\n};\n"})})]})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var l=t(58101);const i={},o=l.createContext(i);function r(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);