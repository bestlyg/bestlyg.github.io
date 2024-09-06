"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[91720],{16526:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(86070),l=t(25710);const s={},o="1233.\u5220\u9664\u5b50\u6587\u4ef6\u5939",i={id:"leetcode/1201-1300/\u5220\u9664\u5b50\u6587\u4ef6\u5939",title:"1233.\u5220\u9664\u5b50\u6587\u4ef6\u5939",description:"\u94fe\u63a5\uff1a1233.\u5220\u9664\u5b50\u6587\u4ef6\u5939",source:"@site/docs/leetcode/1201-1300/1233.\u5220\u9664\u5b50\u6587\u4ef6\u5939.md",sourceDirName:"leetcode/1201-1300",slug:"/leetcode/1201-1300/\u5220\u9664\u5b50\u6587\u4ef6\u5939",permalink:"/docs/leetcode/1201-1300/\u5220\u9664\u5b50\u6587\u4ef6\u5939",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1233,frontMatter:{},sidebar:"journal",previous:{title:"1232.\u7f00\u70b9\u6210\u7ebf",permalink:"/docs/leetcode/1201-1300/\u7f00\u70b9\u6210\u7ebf"},next:{title:"1234.\u66ff\u6362\u5b50\u4e32\u5f97\u5230\u5e73\u8861\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/1201-1300/\u66ff\u6362\u5b50\u4e32\u5f97\u5230\u5e73\u8861\u5b57\u7b26\u4e32"}},d={},c=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"1233\u5220\u9664\u5b50\u6587\u4ef6\u5939",children:"1233.\u5220\u9664\u5b50\u6587\u4ef6\u5939"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/remove-sub-folders-from-the-filesystem",children:"1233.\u5220\u9664\u5b50\u6587\u4ef6\u5939"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5b57\u5178\u6811\u3001\u6570\u7ec4\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4f60\u662f\u4e00\u4f4d\u7cfb\u7edf\u7ba1\u7406\u5458\uff0c\u624b\u91cc\u6709\u4e00\u4efd\u6587\u4ef6\u5939\u5217\u8868 folder\uff0c\u4f60\u7684\u4efb\u52a1\u662f\u8981\u5220\u9664\u8be5\u5217\u8868\u4e2d\u7684\u6240\u6709 \u5b50\u6587\u4ef6\u5939\uff0c\u5e76\u4ee5 \u4efb\u610f\u987a\u5e8f \u8fd4\u56de\u5269\u4e0b\u7684\u6587\u4ef6\u5939\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-08"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a208ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a51.4MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","trie\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"struct Node {\n    bool end;\n    unordered_map<string, Node*> children;\n    Node(): end(false) {}\n};\nclass Solution {\npublic:\n    vector<string> removeSubfolders(vector<string>& folder) {\n        sort(folder.begin(), folder.end());\n        Node *root = new Node();\n        vector<string> ans;\n        for (auto &path : folder) {\n            Node *next = root;\n            istringstream iss(path);\n            string tmp;\n            getline(iss, tmp, '/');\n            while (getline(iss, tmp, '/')) {\n                if (!next->children.count(tmp)) next = next->children[tmp] = new Node();\n                else next = next->children[tmp];\n                if (next->end) break;\n            }\n            if (!next->end) ans.push_back(path);\n            next->end = true;\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-08"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a140ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a25.4MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Node:\n    def __init__(self) -> None:\n        self.end = False\n        self.children = defaultdict(Node)\n\nclass Solution:\n    def removeSubfolders(self, folder: List[str]) -> List[str]:\n        folder.sort()\n        root = Node()\n        ans = []\n        for path in folder:\n            nextNode = root\n            l = path.split('/')\n            for i in range(1, len(l)):\n                nextNode = nextNode.children[l[i]]\n                if nextNode.end:\n                    break\n            if not nextNode.end:\n                ans.append(path)\n            nextNode.end = True\n        return ans\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-08"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a56ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.8MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'use std::collections::HashMap;\n#[derive(Clone)]\nstruct Node {\n    end: bool,\n    children: HashMap<String, Node>,\n}\nimpl Node {\n    fn new() -> Self {\n        Self {\n            end: false,\n            children: HashMap::new(),\n        }\n    }\n}\n\nimpl Solution {\n    pub fn remove_subfolders(folder: Vec<String>) -> Vec<String> {\n        let mut folder = folder;\n        folder.sort();\n        let mut root = Node::new();\n        let mut ans = vec![];\n        for path in folder {\n            let mut next = &mut root;\n            let l: Vec<&str> = path.split("/").collect();\n            for i in 1..l.len() {\n                if !next.children.contains_key(l[i]) {\n                    next.children.insert(l[i].to_string(), Node::new());\n                }\n                next = next.children.get_mut(l[i]).unwrap();\n                if next.end {\n                    break;\n                }\n            }\n            if !next.end {\n                ans.push(path);\n            }\n            next.end = true;\n        }\n        ans\n    }\n}\n'})})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>i});var r=t(30758);const l={},s=r.createContext(l);function o(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);