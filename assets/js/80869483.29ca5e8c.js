"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[7577],{93414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=t(86070),o=t(25710);const l={},s="2458.\u79fb\u9664\u5b50\u6811\u540e\u7684\u4e8c\u53c9\u6811\u9ad8\u5ea6",i={id:"leetcode/2401-2500/\u79fb\u9664\u5b50\u6811\u540e\u7684\u4e8c\u53c9\u6811\u9ad8\u5ea6",title:"2458.\u79fb\u9664\u5b50\u6811\u540e\u7684\u4e8c\u53c9\u6811\u9ad8\u5ea6",description:"\u94fe\u63a5\uff1a2458.\u79fb\u9664\u5b50\u6811\u540e\u7684\u4e8c\u53c9\u6811\u9ad8\u5ea6",source:"@site/docs/leetcode/2401-2500/2458.\u79fb\u9664\u5b50\u6811\u540e\u7684\u4e8c\u53c9\u6811\u9ad8\u5ea6.md",sourceDirName:"leetcode/2401-2500",slug:"/leetcode/2401-2500/\u79fb\u9664\u5b50\u6811\u540e\u7684\u4e8c\u53c9\u6811\u9ad8\u5ea6",permalink:"/docs/leetcode/2401-2500/\u79fb\u9664\u5b50\u6811\u540e\u7684\u4e8c\u53c9\u6811\u9ad8\u5ea6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2458,frontMatter:{},sidebar:"journal",previous:{title:"2457.\u7f8e\u4e3d\u6574\u6570\u7684\u6700\u5c0f\u589e\u91cf",permalink:"/docs/leetcode/2401-2500/\u7f8e\u4e3d\u6574\u6570\u7684\u6700\u5c0f\u589e\u91cf"},next:{title:"2460.\u5bf9\u6570\u7ec4\u6267\u884c\u64cd\u4f5c",permalink:"/docs/leetcode/2401-2500/\u5bf9\u6570\u7ec4\u6267\u884c\u64cd\u4f5c"}},c={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"2458\u79fb\u9664\u5b50\u6811\u540e\u7684\u4e8c\u53c9\u6811\u9ad8\u5ea6",children:"2458.\u79fb\u9664\u5b50\u6811\u540e\u7684\u4e8c\u53c9\u6811\u9ad8\u5ea6"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/height-of-binary-tree-after-subtree-removal-queries",children:"2458.\u79fb\u9664\u5b50\u6811\u540e\u7684\u4e8c\u53c9\u6811\u9ad8\u5ea6"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u4e8c\u53c9\u6811",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4e00\u4e2a\u957f\u5ea6\u4e3a m \u7684\u6570\u7ec4 answer \uff0c\u5176\u4e2d answer[i] \u662f\u6267\u884c\u7b2c i \u4e2a\u67e5\u8be2\u540e\u6811\u7684\u9ad8\u5ea6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-30"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a368ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a222.5MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e24\u6b21 dfs\uff0c\u7b2c\u4e00\u6b21\u7edf\u8ba1\u51fa\u6bcf\u9897\u5b50\u6811\u7684\u9ad8\u5ea6\uff0c\u7b2c\u4e8c\u6b21\u8bb0\u5f55\u5c42\u9ad8\uff0c\u7edf\u8ba1\u5f53\u524d\u5b50\u6811\u88ab\u79fb\u9664\u540e\u7684\u5269\u4f59\u9ad8\u5ea6\uff0c\u901a\u8fc7\u6700\u5927\u9ad8\u5ea6\u548c level+\u53f3\u5b50\u6811\u9ad8\u5ea6\u7684\u6700\u5927\u503c\u83b7\u53d6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    typedef pair<int, int> node;\n    unordered_map<int, node> m;\n    vector<int> treeQueries(TreeNode* root, vector<int>& queries) {\n        m[-1] = make_pair(0, 0);\n        dfs1(root);\n        dfs2(root);\n        vector<int> ans;\n        for (auto &q : queries) ans.push_back(m[q].second);\n        return ans;\n    }\n    int dfs1(TreeNode *node) {\n        if (node == nullptr) return 0;\n        int l = dfs1(node->left), r = dfs1(node->right), h = max(l, r) + 1;\n        m[node->val] = make_pair(h, 0);\n        return h;\n    }\n    void dfs2(TreeNode *node, int level = 0, int curH = 0) {\n        if (node == nullptr) return;\n        m[node->val].second = curH;\n        int l = node->left == nullptr ? -1 : node->left->val,\n            r = node->right == nullptr ? -1 : node->right->val;\n        dfs2(node->left, level + 1, max(curH, level + m[r].first));\n        dfs2(node->right, level + 1, max(curH, level + m[l].first));\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(30758);const o={},l=r.createContext(o);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);