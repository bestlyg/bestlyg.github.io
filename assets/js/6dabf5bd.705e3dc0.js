"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[57497],{47298:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var t=s(86070),i=s(25710);const r={},l="385.\u8ff7\u4f60\u8bed\u6cd5\u5206\u6790\u5668",c={id:"leetcode/301-400/\u8ff7\u4f60\u8bed\u6cd5\u5206\u6790\u5668",title:"385.\u8ff7\u4f60\u8bed\u6cd5\u5206\u6790\u5668",description:"\u94fe\u63a5\uff1a385.\u8ff7\u4f60\u8bed\u6cd5\u5206\u6790\u5668",source:"@site/docs/leetcode/301-400/385.\u8ff7\u4f60\u8bed\u6cd5\u5206\u6790\u5668.md",sourceDirName:"leetcode/301-400",slug:"/leetcode/301-400/\u8ff7\u4f60\u8bed\u6cd5\u5206\u6790\u5668",permalink:"/docs/leetcode/301-400/\u8ff7\u4f60\u8bed\u6cd5\u5206\u6790\u5668",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:385,frontMatter:{},sidebar:"journal",previous:{title:"384.\u6253\u4e71\u6570\u7ec4",permalink:"/docs/leetcode/301-400/\u6253\u4e71\u6570\u7ec4"},next:{title:"386.\u5b57\u5178\u5e8f\u6392\u6570",permalink:"/docs/leetcode/301-400/\u5b57\u5178\u5e8f\u6392\u6570"}},d={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"385\u8ff7\u4f60\u8bed\u6cd5\u5206\u6790\u5668",children:"385.\u8ff7\u4f60\u8bed\u6cd5\u5206\u6790\u5668"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/mini-parser",children:"385.\u8ff7\u4f60\u8bed\u6cd5\u5206\u6790\u5668"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5b57\u7b26\u4e32",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32 s \u8868\u793a\u4e00\u4e2a\u6574\u6570\u5d4c\u5957\u5217\u8868\uff0c\u5b9e\u73b0\u4e00\u4e2a\u89e3\u6790\u5b83\u7684\u8bed\u6cd5\u5206\u6790\u5668\u5e76\u8fd4\u56de\u89e3\u6790\u7684\u7ed3\u679c NestedInteger \u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-19"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a12.9MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    NestedInteger deserialize(string s) {\n        if (s[0] == '[') return analysis(s.substr(1, s.size() - 2));\n        NestedInteger ans;\n        ans.setInteger(stoi(s));\n        return ans;\n    }\n    NestedInteger analysis(const string &s) {\n        NestedInteger ans;\n        vector<int> res = find_split(s);\n        int prev = -1;\n        for (auto &split : res) {\n            ans.add(deserialize(s.substr(prev + 1, split - prev - 1)));\n            prev = split;\n        }\n        string last = s.substr(prev + 1, s.size() - prev - 1);\n        if (last != \"\") ans.add(deserialize(last));\n        return ans;\n    }\n    vector<int> find_split(const string &s) {\n        int deep = 0;\n        vector<int> ans;\n        for (int i = 0; i < s.size(); i++) {\n            if (deep == 0 && s[i] == ',')\n                ans.push_back(i);\n            else if (s[i] == '[')\n                deep++;\n            else if (s[i] == ']')\n                deep--;\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-04-15"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a12.3MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    NestedInteger deserialize(string s) {\n        NestedInteger res;\n        if (s == \"[]\")\n            return res;\n        else if (s[0] == '[')\n            split(res, s.substr(1, s.size() - 2));\n        else\n            res.setInteger(stoi(s));\n        return res;\n    }\n    void split(NestedInteger &obj, string s) {\n        int level = 0, start = 0, n = s.size();\n        for (int i = 0; i < n; i++) {\n            char ch = s[i];\n            if (ch == '[')\n                level++;\n            else if (ch == ']')\n                level--;\n            else if (ch == ',' && level == 0)\n                obj.add(deserialize(s.substr(start, i - start))), start = i + 1;\n        }\n        obj.add(deserialize(s.substr(start, n - start)));\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},25710:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var t=s(30758);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);