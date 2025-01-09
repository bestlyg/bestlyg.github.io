"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[99163],{86150:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"leetcode/501-600/N\u53c9\u6811\u7684\u540e\u5e8f\u904d\u5386","title":"590.N\u53c9\u6811\u7684\u540e\u5e8f\u904d\u5386","description":"\u94fe\u63a5\uff1a590.N\u53c9\u6811\u7684\u540e\u5e8f\u904d\u5386","source":"@site/docs/leetcode/501-600/590.N\u53c9\u6811\u7684\u540e\u5e8f\u904d\u5386.md","sourceDirName":"leetcode/501-600","slug":"/leetcode/501-600/N\u53c9\u6811\u7684\u540e\u5e8f\u904d\u5386","permalink":"/docs/leetcode/501-600/N\u53c9\u6811\u7684\u540e\u5e8f\u904d\u5386","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":590,"frontMatter":{},"sidebar":"journal","previous":{"title":"589.N\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386","permalink":"/docs/leetcode/501-600/N\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386"},"next":{"title":"591.\u6807\u7b7e\u9a8c\u8bc1\u5668","permalink":"/docs/leetcode/501-600/\u6807\u7b7e\u9a8c\u8bc1\u5668"}}');var i=r(25105),l=r(8556);const t={},o="590.N\u53c9\u6811\u7684\u540e\u5e8f\u904d\u5386",d={},c=[{value:"\u9898\u89e3 1 - java",id:"\u9898\u89e3-1---java",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2},{value:"\u9898\u89e3 4 - cpp",id:"\u9898\u89e3-4---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"590n\u53c9\u6811\u7684\u540e\u5e8f\u904d\u5386",children:"590.N\u53c9\u6811\u7684\u540e\u5e8f\u904d\u5386"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/n-ary-tree-postorder-traversal",children:"590.N\u53c9\u6811\u7684\u540e\u5e8f\u904d\u5386"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a N \u53c9\u6811\uff0c\u8fd4\u56de\u5176\u8282\u70b9\u503c\u7684\u540e\u5e8f\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---java",children:"\u9898\u89e3 1 - java"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-02-21"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.7MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajava"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u6bcf\u4e2a\u5b50\u8282\u70b9\u518d\u9012\u5f52\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"/*\n// Definition for a Node.\nclass Node {\n    public int val;\n    public List<Node> children;\n    public Node() {}\n    public Node(int _val) {\n        val = _val;\n    }\n    public Node(int _val, List<Node> _children) {\n        val = _val;\n        children = _children;\n    }\n};\n*/\nclass Solution {\n\tLinkedList<Integer> list = new LinkedList<Integer>();\n    public List<Integer> postorder(Node root) {\n    \tinPostorder(root);\n        return list;\n    }\n    void inPostorder(Node node) {\n    \tif(node==null)return;\n    \tif(node.children!=null)\n    \tfor(int i=0,len=node.children.size();i<len;i++) {\n    \t\tinPostorder(node.children.get(i));\n    \t}\n\t\tlist.add(node.val);\n    }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-02-19"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a53ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a18.12MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def postorder(self, root: 'Node') -> List[int]:\n        if not root: return []\n        return reduce(lambda arr, cur: arr + cur, [self.postorder(child) for child in root.children], []) + [root.val] \n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-12"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a20ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a12.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8fed\u4ee3\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    vector<int> postorder(Node *root) {\n        vector<int> ans;\n        stack<Node *> s;\n        unordered_set<Node *> sset;\n        if (root) s.push(root);\n        while (s.size()) {\n            Node *node = s.top();\n            s.pop();\n            if (sset.count(node)) {\n                ans.push_back(node->val);\n                continue;\n            }\n            sset.insert(node);\n            s.push(node);\n            for (auto it = node->children.rbegin(); it != node->children.rend();\n                 it++) {\n                s.push(*it);\n            }\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-4---cpp",children:"\u9898\u89e3 4 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-12"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a11.3MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    vector<int> postorder(Node *root) {\n        vector<int> ans;\n        if (root) dfs(ans, root);\n        return ans;\n    }\n    void dfs(vector<int> &ans, Node *&root) {\n        for (auto &child : root->children) dfs(ans, child);\n        ans.push_back(root->val);\n    }\n};\n"})})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},8556:(n,e,r)=>{r.d(e,{R:()=>t,x:()=>o});var s=r(58101);const i={},l=s.createContext(i);function t(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);