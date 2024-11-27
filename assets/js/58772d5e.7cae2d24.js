"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[89642],{16699:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/1001-1100/\u6700\u957f\u5b57\u7b26\u4e32\u94fe","title":"1048.\u6700\u957f\u5b57\u7b26\u4e32\u94fe","description":"\u94fe\u63a5\uff1a1048.\u6700\u957f\u5b57\u7b26\u4e32\u94fe","source":"@site/docs/leetcode/1001-1100/1048.\u6700\u957f\u5b57\u7b26\u4e32\u94fe.md","sourceDirName":"leetcode/1001-1100","slug":"/leetcode/1001-1100/\u6700\u957f\u5b57\u7b26\u4e32\u94fe","permalink":"/docs/leetcode/1001-1100/\u6700\u957f\u5b57\u7b26\u4e32\u94fe","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1048,"frontMatter":{},"sidebar":"journal","previous":{"title":"1047.\u5220\u9664\u5b57\u7b26\u4e32\u4e2d\u7684\u6240\u6709\u76f8\u90bb\u91cd\u590d\u9879","permalink":"/docs/leetcode/1001-1100/\u5220\u9664\u5b57\u7b26\u4e32\u4e2d\u7684\u6240\u6709\u76f8\u90bb\u91cd\u590d\u9879"},"next":{"title":"1049.\u6700\u540e\u4e00\u5757\u77f3\u5934\u7684\u91cd\u91cfII","permalink":"/docs/leetcode/1001-1100/\u6700\u540e\u4e00\u5757\u77f3\u5934\u7684\u91cd\u91cfII"}}');var i=s(86070),t=s(31503);const l={},o="1048.\u6700\u957f\u5b57\u7b26\u4e32\u94fe",c={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"1048\u6700\u957f\u5b57\u7b26\u4e32\u94fe",children:"1048.\u6700\u957f\u5b57\u7b26\u4e32\u94fe"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/longest-string-chain",children:"1048.\u6700\u957f\u5b57\u7b26\u4e32\u94fe"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212\u3001\u6392\u5e8f",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4ece\u7ed9\u5b9a\u5355\u8bcd\u5217\u8868 words \u4e2d\u9009\u62e9\u5355\u8bcd\u7ec4\u6210\u8bcd\u94fe\uff0c\u8fd4\u56de \u8bcd\u94fe\u7684 \u6700\u957f\u53ef\u80fd\u957f\u5ea6 \u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-27"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a12.8MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool cmp(string &s1, string &s2, int i1 = 0, int i2 = 0, int err = 1) {\n        if (i1 == s1.size()) return i2 + err == s2.size();\n        if (i2 == s2.size()) return i1 + err == s1.size();\n        if (s1[i1] == s2[i2]) return cmp(s1, s2, i1 + 1, i2 + 1, err);\n        if (err == 0) return false;\n        return cmp(s1, s2, i1 + 1, i2, err - 1) || cmp(s1, s2, i1, i2 + 1, err - 1);\n    }\n    int longestStrChain(vector<string>& words) {\n        sort(words.begin(), words.end(), [&](auto &a, auto &b) { return a.size() < b.size(); });\n        int n = words.size(), res = 1;\n        vector<int> dp(n, 1);\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < i; j++) {\n                if (words[j].size() == words[i].size()) break;\n                if (cmp(words[i], words[j])) dp[i] = max(dp[i], dp[j] + 1);\n            }\n            res = max(res, dp[i]);\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-27"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1836ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.2MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"def cmp(s1: str, s2: str, i1: int, i2: int, err: int):\n    if i1 == len(s1):\n        return i2 + err == len(s2)\n    if i2 == len(s2):\n        return i1 + err == len(s1)\n    if s1[i1] == s2[i2]:\n        return cmp(s1, s2, i1 + 1, i2 + 1, err)\n    if err == 0:\n        return False\n    return cmp(s1, s2, i1 + 1, i2, err - 1) or cmp(s1, s2, i1, i2 + 1, err - 1)\n\nclass Solution:\n    def longestStrChain(self, words: List[str]) -> int:\n        words.sort(key=lambda v: len(v))\n        n = len(words)\n        res = 1\n        dp = [1] * n\n        for i in range(n):\n            for j in range(i):\n                if len(words[j]) == len(words[i]):\n                    break\n                if cmp(words[i], words[j], 0, 0, 1):\n                    dp[i] = max(dp[i], dp[j] + 1)\n            res = max(res, dp[i])\n        return res\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-27"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a28ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:"fn cmp(s1: &[u8], s2: &[u8], i1: usize, i2: usize, err: usize) -> bool {\n    if i1 == s1.len() {\n        i2 + err == s2.len()\n    } else if i2 == s2.len() {\n        i1 + err == s1.len()\n    } else if s1[i1] == s2[i2] {\n        cmp(s1, s2, i1 + 1, i2 + 1, err)\n    } else if err == 0 {\n        false\n    } else {\n        cmp(s1, s2, i1 + 1, i2, err - 1) || cmp(s1, s2, i1, i2 + 1, err - 1)\n    }\n}\nimpl Solution {\n    pub fn longest_str_chain(mut words: Vec<String>) -> i32 {\n        words.sort_by_key(|v| v.len());\n        let n = words.len();\n        let mut res = 1;\n        let mut dp = vec![1; n];\n        for i in 0..n {\n            for j in 0..i {\n                if words[i].len() == words[j].len() {\n                    break;\n                }\n                let s1 = words[i].as_bytes();\n                if cmp(words[i].as_bytes(), words[j].as_bytes(), 0, 0, 1) {\n                    dp[i] = dp[i].max(dp[j] + 1);\n                }\n            }\n            res = res.max(dp[i]);\n        }\n        res as i32\n    }\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},31503:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>o});var r=s(30758);const i={},t=r.createContext(i);function l(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);