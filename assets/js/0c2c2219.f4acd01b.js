"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[54087],{84459:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"leetcode/1101-1200/\u4e8c\u53c9\u6811\u7740\u8272\u6e38\u620f","title":"1145.\u4e8c\u53c9\u6811\u7740\u8272\u6e38\u620f","description":"\u94fe\u63a5\uff1a1145.\u4e8c\u53c9\u6811\u7740\u8272\u6e38\u620f","source":"@site/docs/leetcode/1101-1200/1145.\u4e8c\u53c9\u6811\u7740\u8272\u6e38\u620f.md","sourceDirName":"leetcode/1101-1200","slug":"/leetcode/1101-1200/\u4e8c\u53c9\u6811\u7740\u8272\u6e38\u620f","permalink":"/docs/leetcode/1101-1200/\u4e8c\u53c9\u6811\u7740\u8272\u6e38\u620f","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1145,"frontMatter":{},"sidebar":"journal","previous":{"title":"1144.\u9012\u51cf\u5143\u7d20\u4f7f\u6570\u7ec4\u5448\u952f\u9f7f\u72b6","permalink":"/docs/leetcode/1101-1200/\u9012\u51cf\u5143\u7d20\u4f7f\u6570\u7ec4\u5448\u952f\u9f7f\u72b6"},"next":{"title":"1146.\u5feb\u7167\u6570\u7ec4","permalink":"/docs/leetcode/1101-1200/\u5feb\u7167\u6570\u7ec4"}}');var o=e(25105),r=e(8556);const s={},i="1145.\u4e8c\u53c9\u6811\u7740\u8272\u6e38\u620f",c={},a=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(n){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"1145\u4e8c\u53c9\u6811\u7740\u8272\u6e38\u620f",children:"1145.\u4e8c\u53c9\u6811\u7740\u8272\u6e38\u620f"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(t.a,{href:"https://leetcode.cn/problems/binary-tree-coloring-game",children:"1145.\u4e8c\u53c9\u6811\u7740\u8272\u6e38\u620f"}),(0,o.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,o.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811",(0,o.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u73b0\u5728\uff0c\u5047\u8bbe\u4f60\u662f\u300c\u4e8c\u53f7\u300d\u73a9\u5bb6\uff0c\u6839\u636e\u6240\u7ed9\u51fa\u7684\u8f93\u5165\uff0c\u5047\u5982\u5b58\u5728\u4e00\u4e2a y \u503c\u53ef\u4ee5\u786e\u4fdd\u4f60\u8d62\u5f97\u8fd9\u573a\u6e38\u620f\uff0c\u5219\u8fd4\u56de true \uff1b\u82e5\u65e0\u6cd5\u83b7\u80dc\uff0c\u5c31\u8bf7\u8fd4\u56de false \u3002"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-03"}),"\n",(0,o.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,o.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.2MB"}),"\n",(0,o.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,o.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class Node:\n    def __init__(self) -> None:\n        self.cnt = self.lcnt = self.rcnt = 0\n        self.p = None\nclass Solution:\n    def btreeGameWinningMove(self, root: Optional[TreeNode], n: int, x: int) -> bool:\n        list = [Node() for _ in range(n + 1)]\n        parent = -1\n        def dfs(root: Optional[TreeNode], cur_parent: int) -> int:\n            nonlocal parent\n            if root == None:\n                return 0\n            if root.val == x:\n                parent = cur_parent\n            node = list[root.val]\n            node.p = root\n            node.lcnt = dfs(root.left, root.val)\n            node.rcnt = dfs(root.right, root.val)\n            node.cnt = node.lcnt + node.rcnt + 1\n            return node.cnt\n        dfs(root, -1)\n        ans = False\n        if parent != -1:\n            ans |= list[root.val].cnt - list[x].cnt > list[x].cnt\n        if list[x].p.left:\n            ans |= list[root.val].cnt -                 list[list[x].p.left.val].cnt < list[list[x].p.left.val].cnt\n        if list[x].p.right:\n            ans |= list[root.val].cnt -                 list[list[x].p.right.val].cnt < list[list[x].p.right.val].cnt\n        return ans\n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-03"}),"\n",(0,o.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,o.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a10.9MB"}),"\n",(0,o.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,o.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","x\u628a\u6811\u5206\u6210\u4e09\u90e8\u5206\uff0cy\u53ea\u53ef\u80fd\u62e6\u4f4fx\u7684\u67d0\u4e00\u6761\u53bb\u8def\u624d\u662f\u6700\u5927\u503c\uff0c\u8ba1\u7b97\u4e09\u4e2a\u65b9\u5411\u53ef\u4ee5\u62e6\u4f4f\u7684\u6700\u591a\u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:"struct Node {\n    int cnt, lcnt, rcnt;\n    TreeNode *p;\n    Node(): cnt(0), lcnt(0), rcnt(0), p(nullptr) {}\n};\nclass Solution {\npublic:\n    bool btreeGameWinningMove(TreeNode* root, int n, int x) {\n        vector<Node> list(n + 1);\n        int parent = -1;\n        dfs(list, root, parent, parent, x);\n        bool ans = false;\n        if (parent != -1) ans |= list[root->val].cnt - list[x].cnt > list[x].cnt;\n        if (list[x].p->left) ans |= list[root->val].cnt - list[list[x].p->left->val].cnt < list[list[x].p->left->val].cnt;\n        if (list[x].p->right) ans |= list[root->val].cnt - list[list[x].p->right->val].cnt < list[list[x].p->right->val].cnt;\n        return ans;\n    }\n    int dfs(vector<Node> &list, TreeNode *root, int &parent, int cur_parent, int x) {\n        if (!root) return 0;\n        if (root->val == x) parent = cur_parent;\n        auto &node = list[root->val];\n        node.p = root;\n        node.lcnt = dfs(list, root->left, parent, root->val, x);\n        node.rcnt = dfs(list, root->right, parent, root->val, x);\n        node.cnt = node.lcnt + node.rcnt + 1;\n        return node.cnt;\n    }\n};\n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-03"}),"\n",(0,o.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,o.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,o.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",children:"use std::cell::RefCell;\nuse std::rc::Rc;\n#[derive(Clone)]\nstruct Node {\n    cnt: i32,\n    lcnt: i32,\n    rcnt: i32,\n    p: Option<Rc<RefCell<TreeNode>>>,\n}\nimpl Node {\n    fn new() -> Self {\n        Self {\n            cnt: 0,\n            lcnt: 0,\n            rcnt: 0,\n            p: None,\n        }\n    }\n}\nimpl Solution {\n    pub fn btree_game_winning_move(root: Option<Rc<RefCell<TreeNode>>>, n: i32, x: i32) -> bool {\n        let val = root.as_ref().unwrap().as_ref().borrow().val as usize;\n        let x = x as usize;\n        let n = n as usize;\n        let list = vec![Node::new(); n + 1];\n        let mut parent = -1;\n        let (list, _) = Solution::dfs(list, root, &mut parent, -1, x as i32);\n        let mut ans = false;\n        if parent != -1 {\n            ans |= list[val].cnt - list[x].cnt > list[x].cnt;\n        }\n        let child = &list[x].p.as_ref().unwrap().as_ref().borrow().left;\n        if child.is_some() {\n            let lval = child.as_ref().unwrap().as_ref().borrow().val as usize;\n            ans |= list[val].cnt - list[lval].cnt < list[lval].cnt;\n        }\n        let child = &list[x].p.as_ref().unwrap().as_ref().borrow().right;\n        if child.is_some() {\n            let rval = child.as_ref().unwrap().as_ref().borrow().val as usize;\n            ans |= list[val].cnt - list[rval].cnt < list[rval].cnt;\n        }\n        ans\n    }\n    fn dfs(\n        list: Vec<Node>,\n        root: Option<Rc<RefCell<TreeNode>>>,\n        parent: *mut i32,\n        cur_parent: i32,\n        x: i32,\n    ) -> (Vec<Node>, i32) {\n        match root {\n            Some(root) => {\n                let mut list = list;\n                let root_node = root.as_ref().borrow();\n                if root_node.val == x {\n                    unsafe {\n                        *parent = cur_parent;\n                    }\n                }\n                let val = root_node.val as usize;\n                list[val].p = Some(root.clone());\n                let (mut list, cnt) =\n                    Solution::dfs(list, root_node.left.clone(), parent, root_node.val, x);\n                list[val].lcnt = cnt;\n                let (mut list, cnt) =\n                    Solution::dfs(list, root_node.right.clone(), parent, root_node.val, x);\n                list[val].rcnt = cnt;\n                list[val].cnt = list[val].lcnt + list[val].rcnt + 1;\n                let cnt = list[val].cnt;\n                (list, cnt)\n            }\n            None => (list, 0),\n        }\n    }\n}\n"})})]})}function p(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},8556:(n,t,e)=>{e.d(t,{R:()=>s,x:()=>i});var l=e(58101);const o={},r=l.createContext(o);function s(n){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function i(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),l.createElement(r.Provider,{value:t},n.children)}}}]);