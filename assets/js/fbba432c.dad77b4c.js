"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[43190],{19809:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=r(86070),t=r(25710);const s={},l="2476.\u4e8c\u53c9\u641c\u7d22\u6811\u6700\u8fd1\u8282\u70b9\u67e5\u8be2",o={id:"leetcode/2401-2500/\u4e8c\u53c9\u641c\u7d22\u6811\u6700\u8fd1\u8282\u70b9\u67e5\u8be2",title:"2476.\u4e8c\u53c9\u641c\u7d22\u6811\u6700\u8fd1\u8282\u70b9\u67e5\u8be2",description:"\u94fe\u63a5\uff1a2476.\u4e8c\u53c9\u641c\u7d22\u6811\u6700\u8fd1\u8282\u70b9\u67e5\u8be2",source:"@site/docs/leetcode/2401-2500/2476.\u4e8c\u53c9\u641c\u7d22\u6811\u6700\u8fd1\u8282\u70b9\u67e5\u8be2.md",sourceDirName:"leetcode/2401-2500",slug:"/leetcode/2401-2500/\u4e8c\u53c9\u641c\u7d22\u6811\u6700\u8fd1\u8282\u70b9\u67e5\u8be2",permalink:"/docs/leetcode/2401-2500/\u4e8c\u53c9\u641c\u7d22\u6811\u6700\u8fd1\u8282\u70b9\u67e5\u8be2",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2476,frontMatter:{},sidebar:"journal",previous:{title:"2475.\u6570\u7ec4\u4e2d\u4e0d\u7b49\u4e09\u5143\u7ec4\u7684\u6570\u76ee",permalink:"/docs/leetcode/2401-2500/\u6570\u7ec4\u4e2d\u4e0d\u7b49\u4e09\u5143\u7ec4\u7684\u6570\u76ee"},next:{title:"2477.\u5230\u8fbe\u9996\u90fd\u7684\u6700\u5c11\u6cb9\u8017",permalink:"/docs/leetcode/2401-2500/\u5230\u8fbe\u9996\u90fd\u7684\u6700\u5c11\u6cb9\u8017"}},d={},c=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"2476\u4e8c\u53c9\u641c\u7d22\u6811\u6700\u8fd1\u8282\u70b9\u67e5\u8be2",children:"2476.\u4e8c\u53c9\u641c\u7d22\u6811\u6700\u8fd1\u8282\u70b9\u67e5\u8be2"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/closest-nodes-queries-in-a-binary-search-tree",children:"2476.\u4e8c\u53c9\u641c\u7d22\u6811\u6700\u8fd1\u8282\u70b9\u67e5\u8be2"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u641c\u7d22\u6811\u3001\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u4e8c\u53c9\u6811",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a \u4e8c\u53c9\u641c\u7d22\u6811 \u7684\u6839\u8282\u70b9 root \uff0c\u548c\u4e00\u4e2a\u7531\u6b63\u6574\u6570\u7ec4\u6210\u3001\u957f\u5ea6\u4e3a n \u7684\u6570\u7ec4 queries \u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-20"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a308ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a150.5MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bs\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'// bestlyg\n# define X first\n# define Y second\n# define lb(x) ((x) & (-x))\n# define mem(a,b) memset(a,b,sizeof(a))\n# define debug freopen("r.txt","r",stdin)\n# define pi pair<int,int>\n\n#ifdef DEBUG\n#define log(frm, args...) {    printf(frm, ##args);}\n#else\n#define log(frm, args...)\n#endif\n\ntypedef long long ll;\n\nusing namespace std;\n/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    vector<int> list;\n    vector<vector<int>> ans;\n    vector<vector<int>> closestNodes(TreeNode* root, vector<int>& queries) {\n        dfs(root);\n        for (auto &q : queries) {\n            vector<int> item(2);\n            item[0] = find1(q);\n            item[1] = find2(q);\n            ans.push_back(item);\n        }\n        return ans;\n    }\n    void dfs(TreeNode *node) {\n        if (!node) return;\n        dfs(node->left);\n        list.push_back(node->val);\n        dfs(node->right);\n    }\n    int find1(int q) {\n        int l = -1, r = list.size() - 1, m;\n        while (l < r) {\n            m = (l + r + 1) / 2;\n            if (list[m] > q) r = m - 1;\n            else l = m;\n        }\n        if (l == -1) return l;\n        return list[l];\n    }\n\n    int find2(int q) {\n        int l = 0, r = list.size(), m;\n        while (l < r) {\n            m = (l + r) / 2;\n            if (list[m] >= q) r = m;\n            else l = m + 1;\n        }\n        if (l == list.size()) return -1;\n        return list[l];\n    }\n};\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-02-24"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a582ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a74.37MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u540e\u6392\u5e8f\u5904\u7406queries\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def closestNodes(self, root: Optional[TreeNode], queries: List[int]) -> List[List[int]]:\n        arr = []\n        def inorder(node: Optional[TreeNode]):\n            if not node: return\n            inorder(node.left)\n            arr.append(node.val)\n            inorder(node.right)\n        inorder(root)\n        idx = 0\n        ans = [[] for _ in range(len(queries))]\n        queries = sorted((q, i) for i, q in enumerate(queries))\n        for q, i in queries:\n            while idx < len(arr) and arr[idx] < q:\n                idx += 1\n            ans[i] = [-1, -1]\n            if idx < len(arr) and arr[idx] == q:\n                ans[i] = [q, q]\n            else:\n                if idx > 0: ans[i][0] = arr[idx - 1]\n                if idx < len(arr): ans[i][1] = arr[idx]\n        return ans\n"})})]})}function f(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>o});var i=r(30758);const t={},s=i.createContext(t);function l(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);