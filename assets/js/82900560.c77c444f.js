"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[83761],{40029:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"leetcode/2501-2600/\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570","title":"2559.\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570","description":"\u94fe\u63a5\uff1a2559.\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570","source":"@site/docs/leetcode/2501-2600/2559.\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570.md","sourceDirName":"leetcode/2501-2600","slug":"/leetcode/2501-2600/\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570","permalink":"/docs/leetcode/2501-2600/\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2559,"frontMatter":{},"sidebar":"journal","previous":{"title":"2583.\u4e8c\u53c9\u6811\u4e2d\u7684\u7b2cK\u5927\u5c42\u548c","permalink":"/docs/leetcode/2501-2600/\u4e8c\u53c9\u6811\u4e2d\u7684\u7b2cK\u5927\u5c42\u548c"},"next":{"title":"2586.\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570","permalink":"/docs/leetcode/2501-2600/\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570"}}');var t=s(25105),i=s(8556);const c={},l="2559.\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570",o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"2559\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570",children:"2559.\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/count-vowel-strings-in-ranges",children:"2559.\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u5b57\u7b26\u4e32\u3001\u524d\u7f00\u548c",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u7684\u5b57\u7b26\u4e32\u6570\u7ec4 words \u4ee5\u53ca\u4e00\u4e2a\u4e8c\u7ef4\u6574\u6570\u6570\u7ec4 queries \u3002\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\u6570\u7ec4\uff0c\u5176\u4e2d\u6570\u7ec4\u7684\u7b2c i \u4e2a\u5143\u7d20\u5bf9\u5e94\u7b2c i \u4e2a\u67e5\u8be2\u7684\u7b54\u6848\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-02"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a148ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a63.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u7f00\u548c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> vowelStrings(vector<string>& words, vector<vector<int>>& queries) {\n        unordered_set<char> s{ 'a', 'e', 'i', 'o', 'u'};\n        vector<int> sums(1, 0);\n        for (auto &w : words) sums.push_back(sums.back() + (s.count(w[0]) && s.count(w.back()) ? 1 : 0));\n        vector<int> res;\n        for (auto &q : queries) res.push_back(sums[q[1] + 1] - sums[q[0]]);\n        return res;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-05"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46.7MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n  def vowelStrings(self, words: List[str], queries: List[List[int]]) -> List[int]:\n      s = {'a', 'e', 'i', 'o', 'u'}\n      sums = list(accumulate(\n          (w[0] in s and w[-1] in s for w in words), initial=0))\n      return [sums[r + 1] - sums[l] for l, r in queries]\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-05"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a128ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a63.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u7f00\u548c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> vowelStrings(vector<string>& words, vector<vector<int>>& queries) {\n        int n = words.size();\n        vector<int> sums(1, 0), ans;\n        unordered_set<char> s;\n        s.insert('a');\n        s.insert('e');\n        s.insert('i');\n        s.insert('o');\n        s.insert('u');\n        for (auto &w : words) {\n            bool f = s.count(w[0]) && s.count(w[w.size() - 1]);\n            sums.push_back(sums.back() + f);\n        }\n        for (auto &q : queries) {\n            ans.push_back(sums[q[1] + 1] - sums[q[0]]);\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-05"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a28ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:'impl Solution {\n    pub fn vowel_strings(words: Vec<String>, queries: Vec<Vec<i32>>) -> Vec<i32> {\n        use std::collections::HashSet;\n        let mut set = HashSet::<char>::new();\n        for c in "aeiou".to_string().chars().collect::<Vec<char>>() {\n            set.insert(c);\n        }\n        let mut sums = vec![0; 1];\n        for w in words {\n            let w = w.chars().collect::<Vec<char>>();\n            let f = if set.contains(w.first().unwrap()) && set.contains(w.last().unwrap()) {\n                1\n            } else {\n                0\n            };\n            sums.push(f + *sums.last().unwrap());\n        }\n        let mut ans = vec![];\n        for q in queries {\n            ans.push(sums[q[1] as usize + 1] - sums[q[0] as usize]);\n        }\n        ans\n    }\n}\n      \n'})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8556:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>l});var r=s(58101);const t={},i=r.createContext(t);function c(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);