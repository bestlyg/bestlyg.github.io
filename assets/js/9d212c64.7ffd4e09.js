"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[3432],{88383:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"leetcode/1401-1500/\u7edf\u8ba1\u4e8c\u53c9\u6811\u4e2d\u597d\u8282\u70b9\u7684\u6570\u76ee","title":"1448.\u7edf\u8ba1\u4e8c\u53c9\u6811\u4e2d\u597d\u8282\u70b9\u7684\u6570\u76ee","description":"\u94fe\u63a5\uff1a1448.\u7edf\u8ba1\u4e8c\u53c9\u6811\u4e2d\u597d\u8282\u70b9\u7684\u6570\u76ee","source":"@site/docs/leetcode/1401-1500/1448.\u7edf\u8ba1\u4e8c\u53c9\u6811\u4e2d\u597d\u8282\u70b9\u7684\u6570\u76ee.md","sourceDirName":"leetcode/1401-1500","slug":"/leetcode/1401-1500/\u7edf\u8ba1\u4e8c\u53c9\u6811\u4e2d\u597d\u8282\u70b9\u7684\u6570\u76ee","permalink":"/docs/leetcode/1401-1500/\u7edf\u8ba1\u4e8c\u53c9\u6811\u4e2d\u597d\u8282\u70b9\u7684\u6570\u76ee","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1448,"frontMatter":{},"sidebar":"journal","previous":{"title":"1447.\u6700\u7b80\u5206\u6570","permalink":"/docs/leetcode/1401-1500/\u6700\u7b80\u5206\u6570"},"next":{"title":"1450.\u5728\u65e2\u5b9a\u65f6\u95f4\u505a\u4f5c\u4e1a\u7684\u5b66\u751f\u4eba\u6570","permalink":"/docs/leetcode/1401-1500/\u5728\u65e2\u5b9a\u65f6\u95f4\u505a\u4f5c\u4e1a\u7684\u5b66\u751f\u4eba\u6570"}}');var s=r(25105),t=r(8556);const o={},l="1448.\u7edf\u8ba1\u4e8c\u53c9\u6811\u4e2d\u597d\u8282\u70b9\u7684\u6570\u76ee",d={},c=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1448\u7edf\u8ba1\u4e8c\u53c9\u6811\u4e2d\u597d\u8282\u70b9\u7684\u6570\u76ee",children:"1448.\u7edf\u8ba1\u4e8c\u53c9\u6811\u4e2d\u597d\u8282\u70b9\u7684\u6570\u76ee"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/count-good-nodes-in-binary-tree",children:"1448.\u7edf\u8ba1\u4e8c\u53c9\u6811\u4e2d\u597d\u8282\u70b9\u7684\u6570\u76ee"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u68f5\u6839\u4e3a root \u7684\u4e8c\u53c9\u6811\uff0c\u8bf7\u4f60\u8fd4\u56de\u4e8c\u53c9\u6811\u4e2d\u597d\u8282\u70b9\u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-25"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a112ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a84.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int countServers(vector<vector<int>>& grid) {\n        int n = grid.size(), m = grid[0].size(), mmap[250][250] = {0};\n        pair<int, int> prev = make_pair(-1, -1);\n        for (int i = 0; i < n; i++) {\n            prev = make_pair(-1, -1);\n            for (int j = 0; j < m; j++) {\n                if (grid[i][j] == 1) {\n                    if (prev.first == -1) prev = make_pair(i, j);\n                    else {\n                        mmap[prev.first][prev.second] = true;\n                        mmap[i][j] = true;\n                    }\n                }\n            }\n        }\n        for (int j = 0; j < m; j++) {\n            prev = make_pair(-1, -1);\n            for (int i = 0; i < n; i++) {\n                if (grid[i][j] == 1) {\n                    if (prev.first == -1) prev = make_pair(i, j);\n                    else {\n                        mmap[prev.first][prev.second] = true;\n                        mmap[i][j] = true;\n                    }\n                }\n            }\n        }\n        int res = 0;\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < m; j++)\n                if (mmap[i][j]) res += 1;\n        return res;\n    }\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-25"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a204ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a34.5MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def goodNodes(self, root: TreeNode) -> int:\n        res = 0\n        def dfs(node: TreeNode, max: int):\n            nonlocal res\n            if not node: return\n            if node.val >= max:\n                max = node.val\n                res += 1\n            dfs(node.left, max)\n            dfs(node.right, max)\n        dfs(root, -inf)\n        return res\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-25"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a20ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.7MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use std::cell::RefCell;\nuse std::rc::Rc;\nimpl Solution {\n    pub fn good_nodes(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {\n        let mut res = 0;\n        fn dfs(res: &mut i32, node: &Option<Rc<RefCell<TreeNode>>>, mut max: i32) {\n            if let Some(ref node) = node {\n                let node_ref = node.as_ref().borrow();\n                if node_ref.val >= max {\n                    max = node_ref.val;\n                    *res += 1;\n                }\n                dfs(res, &node_ref.left, max);\n                dfs(res, &node_ref.right, max);\n            }\n        }\n        dfs(&mut res, &root, i32::MIN);\n        res\n    }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8556:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var i=r(58101);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);