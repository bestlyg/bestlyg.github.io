"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[59501],{86002:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"leetcode/1201-1300/\u5f97\u5206\u6700\u9ad8\u7684\u5355\u8bcd\u96c6\u5408","title":"1255.\u5f97\u5206\u6700\u9ad8\u7684\u5355\u8bcd\u96c6\u5408","description":"\u94fe\u63a5\uff1a1255.\u5f97\u5206\u6700\u9ad8\u7684\u5355\u8bcd\u96c6\u5408","source":"@site/docs/leetcode/1201-1300/1255.\u5f97\u5206\u6700\u9ad8\u7684\u5355\u8bcd\u96c6\u5408.md","sourceDirName":"leetcode/1201-1300","slug":"/leetcode/1201-1300/\u5f97\u5206\u6700\u9ad8\u7684\u5355\u8bcd\u96c6\u5408","permalink":"/docs/leetcode/1201-1300/\u5f97\u5206\u6700\u9ad8\u7684\u5355\u8bcd\u96c6\u5408","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1255,"frontMatter":{},"sidebar":"journal","previous":{"title":"1254.\u7edf\u8ba1\u5c01\u95ed\u5c9b\u5c7f\u7684\u6570\u76ee","permalink":"/docs/leetcode/1201-1300/\u7edf\u8ba1\u5c01\u95ed\u5c9b\u5c7f\u7684\u6570\u76ee"},"next":{"title":"1260.\u4e8c\u7ef4\u7f51\u683c\u8fc1\u79fb","permalink":"/docs/leetcode/1201-1300/\u4e8c\u7ef4\u7f51\u683c\u8fc1\u79fb"}}');var t=s(86070),i=s(31503);const c={},l="1255.\u5f97\u5206\u6700\u9ad8\u7684\u5355\u8bcd\u96c6\u5408",o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"1255\u5f97\u5206\u6700\u9ad8\u7684\u5355\u8bcd\u96c6\u5408",children:"1255.\u5f97\u5206\u6700\u9ad8\u7684\u5355\u8bcd\u96c6\u5408"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/maximum-score-words-formed-by-letters",children:"1255.\u5f97\u5206\u6700\u9ad8\u7684\u5355\u8bcd\u96c6\u5408"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4\u3001\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212\u3001\u56de\u6eaf\u3001\u72b6\u6001\u538b\u7f29",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u5e2e\u5fd9\u8ba1\u7b97\u73a9\u5bb6\u5728\u5355\u8bcd\u62fc\u5199\u6e38\u620f\u4e2d\u6240\u80fd\u83b7\u5f97\u7684\u300c\u6700\u9ad8\u5f97\u5206\u300d\uff1a\u80fd\u591f\u7531\xa0letters\xa0\u91cc\u7684\u5b57\u6bcd\u62fc\u5199\u51fa\u7684\xa0\u4efb\u610f\xa0\u5c5e\u4e8e words\xa0\u5355\u8bcd\u5b50\u96c6\u4e2d\uff0c\u5206\u6570\u6700\u9ad8\u7684\u5355\u8bcd\u96c6\u5408\u7684\u5f97\u5206\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-26"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.3MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u72b6\u6001\u538b\u7f29\u540e\u904d\u5386\u6240\u6709\u53ef\u80fd\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxScoreWords(vector<string>& words, vector<char>& letters, vector<int>& score) {\n        int ans = 0, n = words.size();\n        vector<int> clist(26, 0), wscore(n, 0), cclist;\n        for (auto &c : letters) clist[c - 'a']++;\n        for (int i = 0; i < n; i++) {\n            for (auto &c : words[i]) wscore[i] += score[c - 'a'];\n        }\n        for (int i = 0; i < (1 << n); i++) {\n            cclist = clist;\n            bool f = true;\n            int s = 0;\n            for (int j = 0; j < n && f; j++) {\n                if (i & (1 << j)) {\n                    s += wscore[j];\n                    for (auto &c : words[j]) {\n                        if (cclist[c - 'a'] == 0) {\n                            f = false;\n                            break;\n                        }\n                        cclist[c - 'a']--;\n                    }\n                }\n            }\n            if (f) ans = max(ans, s);\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-26"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a468ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.9MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def maxScoreWords(self, words: List[str], letters: List[str], score: List[int]) -> int:\n        def toScore(word: str) -> int:\n            res = 0\n            for c in word:\n                res += score[ord(c) - ord('a')]\n            return res\n  \n        ans = 0\n        n = len(words)\n        clist = [0] * 26\n        for c in letters:\n            clist[ord(c) - ord('a')] += 1\n        wscore = [toScore(w) for w in words]\n        for i in range(1 << n):\n            cclist = [clist[i] for i in range(26)]\n            f = True\n            s = 0\n            for j in range(n):\n                if i & (1 << j):\n                    s += wscore[j]\n                    for c in words[j]:\n                        if cclist[ord(c) - ord('a')] == 0:\n                            f = False\n                            break\n                        cclist[ord(c) - ord('a')] -= 1\n                if f:\n                    ans = max(ans, s)\n        return ans\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-26"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n        pub fn max_score_words(words: Vec<String>, letters: Vec<char>, score: Vec<i32>) -> i32 {\n            let words = words\n                .into_iter()\n                .map(|s| s.chars().collect::<Vec<char>>())\n                .collect::<Vec<Vec<char>>>();\n            let mut ans = 0;\n            let n = words.len();\n            let list = letters.into_iter().fold([0; 26], |list, c| {\n                let mut list = list;\n                list[c as usize - 'a' as usize] += 1;\n                list\n            });\n            let wscore = words\n                .iter()\n                .map(|w| {\n                    let mut s = 0;\n                    for c in w.iter() {\n                        s += score[*c as usize - 'a' as usize];\n                    }\n                    s\n                })\n                .collect::<Vec<i32>>();\n            for i in 0..(1 << n) {\n                let mut clist = list.clone();\n                let mut f = true;\n                let mut s = 0;\n                for j in 0..n {\n                    if (i & (1 << j)) != 0 {\n                        s += wscore[j];\n                        for c in words[j].iter() {\n                            if clist[*c as usize - 'a' as usize] == 0 {\n                                f = false;\n                                break;\n                            }\n                            clist[*c as usize - 'a' as usize] -= 1;\n                        }\n                    }\n                }\n                if f {\n                    ans = ans.max(s);\n                }\n            }\n            ans\n        }\n    }\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},31503:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>l});var r=s(30758);const t={},i=r.createContext(t);function c(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);