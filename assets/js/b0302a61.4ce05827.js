"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[244],{91679:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>j,frontMatter:()=>t,metadata:()=>c,toc:()=>p});var l=i(86070),r=i(25710);const t={},s="2573.\u627e\u51fa\u5bf9\u5e94LCP\u77e9\u9635\u7684\u5b57\u7b26\u4e32",c={id:"leetcode/2501-2600/\u627e\u51fa\u5bf9\u5e94LCP\u77e9\u9635\u7684\u5b57\u7b26\u4e32",title:"2573.\u627e\u51fa\u5bf9\u5e94LCP\u77e9\u9635\u7684\u5b57\u7b26\u4e32",description:"\u94fe\u63a5\uff1a2573.\u627e\u51fa\u5bf9\u5e94LCP\u77e9\u9635\u7684\u5b57\u7b26\u4e32",source:"@site/docs/leetcode/2501-2600/2573.\u627e\u51fa\u5bf9\u5e94LCP\u77e9\u9635\u7684\u5b57\u7b26\u4e32.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u627e\u51fa\u5bf9\u5e94LCP\u77e9\u9635\u7684\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/2501-2600/\u627e\u51fa\u5bf9\u5e94LCP\u77e9\u9635\u7684\u5b57\u7b26\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2573,frontMatter:{},sidebar:"journal",previous:{title:"2572.\u65e0\u5e73\u65b9\u5b50\u96c6\u8ba1\u6570",permalink:"/docs/leetcode/2501-2600/\u65e0\u5e73\u65b9\u5b50\u96c6\u8ba1\u6570"},next:{title:"2574.\u5de6\u53f3\u5143\u7d20\u548c\u7684\u5dee\u503c",permalink:"/docs/leetcode/2501-2600/\u5de6\u53f3\u5143\u7d20\u548c\u7684\u5dee\u503c"}},o={},p=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"2573\u627e\u51fa\u5bf9\u5e94lcp\u77e9\u9635\u7684\u5b57\u7b26\u4e32",children:"2573.\u627e\u51fa\u5bf9\u5e94LCP\u77e9\u9635\u7684\u5b57\u7b26\u4e32"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(e.a,{href:"https://leetcode.cn/problems/find-the-string-with-lcp",children:"2573.\u627e\u51fa\u5bf9\u5e94LCP\u77e9\u9635\u7684\u5b57\u7b26\u4e32"}),(0,l.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,l.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u5e76\u67e5\u96c6\u3001\u6570\u7ec4\u3001\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212\u3001\u77e9\u9635",(0,l.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a n x n \u7684\u77e9\u9635 lcp \u3002\u8fd4\u56de\u4e0e lcp \u5bf9\u5e94\u7684\u3001\u6309\u5b57\u5178\u5e8f\u6700\u5c0f\u7684\u5b57\u7b26\u4e32 word \u3002\u5982\u679c\u4e0d\u5b58\u5728\u8fd9\u6837\u7684\u5b57\u7b26\u4e32\uff0c\u5219\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-19"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a168ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a67.1MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8d2a\u5fc3\u7684\u6784\u9020\u51fa\u5b57\u7b26\u4e32\uff0c\u518d\u901a\u8fc7lcp\u9a8c\u8bc1\u5b57\u7b26\u4e32\u662f\u5426\u6210\u7acb\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:'class Solution {\npublic:\n    string findTheString(vector<vector<int>>& lcp) {\n        int n = lcp.size(), i = 0;\n        string s;\n        for (int j = 0; j < n; j++) s += "#";\n        for (char c = \'a\'; c <= \'z\'; cpp) {\n            while (i < n && s[i] != \'#\') i++;\n            if (i == n) break;\n            for (int j = i; j < n; j++)\n                if (lcp[i][j]) s[j] = c;\n        }\n        if (s.find(\'#\') != string::npos) return "";\n        for (int i = n - 1; i >= 0; i--) {\n            for (int j = n - 1; j >= 0; j--) {\n                if (s[i] == s[j]) {\n                    if (i == n - 1 || j == n - 1) {\n                        if (lcp[i][j] != 1) return "";\n                    } else if (lcp[i][j] != lcp[i + 1][j + 1] + 1) return "";\n                } else if (lcp[i][j]) return "";\n            }\n        }\n        return s;\n    }\n};\n'})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-19"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a320ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.2MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def findTheString(self, lcp: List[List[int]]) -> str:\n        n = len(lcp)\n        i = 0\n        s = [''] * n\n        for c in ascii_lowercase:\n            while i < n and s[i] != '':\n                i += 1\n            if i == n:\n                break\n            for j in range(i, n):\n                if lcp[i][j]:\n                    s[j] = c\n        if '' in s:\n            return ''\n        for i in range(n-1, -1, -1):\n            for j in range(n-1, -1, -1):\n                if s[i] == s[j]:\n                    if i == n - 1 or j == n - 1:\n                        if lcp[i][j] != 1:\n                            return ''\n                    elif lcp[i][j] != lcp[i+1][j+1] + 1:\n                        return ''\n                elif lcp[i][j]:\n                    return ''\n        return ''.join(s)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-19"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a28ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.4MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn find_the_string(lcp: Vec<Vec<i32>>) -> String {\n        let n = lcp.len();\n        let mut list = vec!['\\0'; n];\n        let mut c = 'a';\n        let mut i = 0;\n        while (c as u8) <= ('z' as u8) {\n            while i < n && list[i] != '\\0' {\n                i += 1;\n            }\n            if i == n {\n                break;\n            }\n            for j in i..n {\n                if lcp[i][j] != 0 {\n                    list[j] = c;\n                }\n            }\n            c = ((c as u8) + 1) as char;\n        }\n        if list.contains(&'\\0') {\n            String::new()\n        } else {\n            for i in (0..n).rev() {\n                for j in (0..n).rev() {\n                    if list[i] == list[j] {\n                        if i == n - 1 || j == n - 1 {\n                            if lcp[i][j] != 1 {\n                                return String::new();\n                            }\n                        } else if lcp[i][j] != lcp[i + 1][j + 1] + 1 {\n                            return String::new();\n                        }\n                    } else if lcp[i][j] != 0 {\n                        return String::new();\n                    }\n                }\n            }\n            String::from_utf8(list.into_iter().map(|c| c as u8).collect::<Vec<u8>>()).unwrap()\n        }\n    }\n}\n"})})]})}function j(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>c});var l=i(30758);const r={},t=l.createContext(r);function s(n){const e=l.useContext(t);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);