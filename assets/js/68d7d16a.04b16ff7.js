"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[36696],{26470:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var o=t(86070),s=t(25710);const d={},r="1110.\u5220\u70b9\u6210\u6797",l={id:"leetcode/1101-1200/\u5220\u70b9\u6210\u6797",title:"1110.\u5220\u70b9\u6210\u6797",description:"\u94fe\u63a5\uff1a1110.\u5220\u70b9\u6210\u6797",source:"@site/docs/leetcode/1101-1200/1110.\u5220\u70b9\u6210\u6797.md",sourceDirName:"leetcode/1101-1200",slug:"/leetcode/1101-1200/\u5220\u70b9\u6210\u6797",permalink:"/docs/leetcode/1101-1200/\u5220\u70b9\u6210\u6797",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1110,frontMatter:{},sidebar:"journal",previous:{title:"1109.\u822a\u73ed\u9884\u8ba2\u7edf\u8ba1",permalink:"/docs/leetcode/1101-1200/\u822a\u73ed\u9884\u8ba2\u7edf\u8ba1"},next:{title:"1111.\u6709\u6548\u62ec\u53f7\u7684\u5d4c\u5957\u6df1\u5ea6",permalink:"/docs/leetcode/1101-1200/\u6709\u6548\u62ec\u53f7\u7684\u5d4c\u5957\u6df1\u5ea6"}},i={},c=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"1110\u5220\u70b9\u6210\u6797",children:"1110.\u5220\u70b9\u6210\u6797"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(n.a,{href:"https://leetcode.cn/problems/delete-nodes-and-return-forest",children:"1110.\u5220\u70b9\u6210\u6797"}),(0,o.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,o.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u4e8c\u53c9\u6811",(0,o.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u51fa\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9\xa0root\uff0c\u6811\u4e0a\u6bcf\u4e2a\u8282\u70b9\u90fd\u6709\u4e00\u4e2a\u4e0d\u540c\u7684\u503c\u3002\u5982\u679c\u8282\u70b9\u503c\u5728\xa0to_delete\xa0\u4e2d\u51fa\u73b0\uff0c\u6211\u4eec\u5c31\u628a\u8be5\u8282\u70b9\u4ece\u6811\u4e0a\u5220\u53bb\uff0c\u6700\u540e\u5f97\u5230\u4e00\u4e2a\u68ee\u6797\uff08\u4e00\u4e9b\u4e0d\u76f8\u4ea4\u7684\u6811\u6784\u6210\u7684\u96c6\u5408\uff09\u3002\u8fd4\u56de\u68ee\u6797\u4e2d\u7684\u6bcf\u68f5\u6811\u3002\u4f60\u53ef\u4ee5\u6309\u4efb\u610f\u987a\u5e8f\u7ec4\u7ec7\u7b54\u6848\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-30"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a13.3MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u904d\u5386\u65f6\uff0c\u8bb0\u5f55\u7236\u8282\u70b9\u662f\u5426\u5df2\u7ecf\u88ab\u5220\u9664\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<TreeNode*> res;\n    unordered_set<int> s;\n    vector<TreeNode*> delNodes(TreeNode* root, vector<int>& to_delete) {\n        for (auto &v : to_delete) s.insert(v);\n        dfs(root, true);\n        return res;\n    }\n    TreeNode* dfs(TreeNode *node, bool pd) {\n        if (!node) return node;\n        bool del = s.count(node->val);\n        if (!del && pd) res.push_back(node);\n        node->left = dfs(node->left, del);\n        node->right = dfs(node->right, del);\n        if (pd || del) return nullptr;\n        return node;\n    }\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-30"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.6MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def delNodes(self, root: Optional[TreeNode], to_delete: List[int]) -> List[TreeNode]:\n        res = []\n        s = set()\n        for v in to_delete:\n            s.add(v)\n\n        def dfs(node: Optional[TreeNode], pd: bool):\n            if node == None:\n                return node\n            d = node.val in s\n            if not d and pd:\n                res.append(node)\n            node.left = dfs(node.left, d)\n            node.right = dfs(node.right, d)\n            return None if pd or d else node\n        dfs(root, True)\n        return res\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-30"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"use std::cell::RefCell;\nuse std::collections::HashSet;\nuse std::ops::RangeBounds;\nuse std::rc::Rc;\ntype Res = Vec<Option<Rc<RefCell<TreeNode>>>>;\nfn dfs(\n    res: &mut Res,\n    s: &HashSet<i32>,\n    node: &mut Option<Rc<RefCell<TreeNode>>>,\n    pd: bool,\n) -> Option<Rc<RefCell<TreeNode>>> {\n    match node {\n        None => None,\n        Some(ref node) => {\n            let mut nodeRef = node.as_ref().borrow_mut();\n            let d = s.contains(&nodeRef.val);\n            if !d && pd {\n                res.push(Some(node.clone()));\n            }\n            nodeRef.left = dfs(res, s, &mut nodeRef.left, d);\n            nodeRef.right = dfs(res, s, &mut nodeRef.right, d);\n            if pd || d {\n                None\n            } else {\n                Some(node.clone())\n            }\n        }\n    }\n}\n\nimpl Solution {\n    pub fn del_nodes(mut root: Option<Rc<RefCell<TreeNode>>>, to_delete: Vec<i32>) -> Res {\n        let mut s = std::collections::HashSet::<i32>::new();\n        for v in to_delete {\n            s.insert(v);\n        }\n        let mut res: Res = vec![];\n        dfs(&mut res, &s, &mut root, true);\n        res\n    }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var o=t(30758);const s={},d=o.createContext(s);function r(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);