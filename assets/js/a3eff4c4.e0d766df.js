"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[9189],{75288:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"leetcode/1601-1700/\u7edf\u8ba1\u5b57\u5178\u5e8f\u5143\u97f3\u5b57\u7b26\u4e32\u7684\u6570\u76ee","title":"1641.\u7edf\u8ba1\u5b57\u5178\u5e8f\u5143\u97f3\u5b57\u7b26\u4e32\u7684\u6570\u76ee","description":"\u94fe\u63a5\uff1a1641.\u7edf\u8ba1\u5b57\u5178\u5e8f\u5143\u97f3\u5b57\u7b26\u4e32\u7684\u6570\u76ee","source":"@site/docs/leetcode/1601-1700/1641.\u7edf\u8ba1\u5b57\u5178\u5e8f\u5143\u97f3\u5b57\u7b26\u4e32\u7684\u6570\u76ee.md","sourceDirName":"leetcode/1601-1700","slug":"/leetcode/1601-1700/\u7edf\u8ba1\u5b57\u5178\u5e8f\u5143\u97f3\u5b57\u7b26\u4e32\u7684\u6570\u76ee","permalink":"/docs/leetcode/1601-1700/\u7edf\u8ba1\u5b57\u5178\u5e8f\u5143\u97f3\u5b57\u7b26\u4e32\u7684\u6570\u76ee","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1641,"frontMatter":{},"sidebar":"journal","previous":{"title":"1640.\u80fd\u5426\u8fde\u63a5\u5f62\u6210\u6570\u7ec4","permalink":"/docs/leetcode/1601-1700/\u80fd\u5426\u8fde\u63a5\u5f62\u6210\u6570\u7ec4"},"next":{"title":"1646.\u83b7\u53d6\u751f\u6210\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c","permalink":"/docs/leetcode/1601-1700/\u83b7\u53d6\u751f\u6210\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c"}}');var s=i(86070),r=i(31503);const l={},c="1641.\u7edf\u8ba1\u5b57\u5178\u5e8f\u5143\u97f3\u5b57\u7b26\u4e32\u7684\u6570\u76ee",o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"1641\u7edf\u8ba1\u5b57\u5178\u5e8f\u5143\u97f3\u5b57\u7b26\u4e32\u7684\u6570\u76ee",children:"1641.\u7edf\u8ba1\u5b57\u5178\u5e8f\u5143\u97f3\u5b57\u7b26\u4e32\u7684\u6570\u76ee"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/count-sorted-vowel-strings",children:"1641.\u7edf\u8ba1\u5b57\u5178\u5e8f\u5143\u97f3\u5b57\u7b26\u4e32\u7684\u6570\u76ee"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u52a8\u6001\u89c4\u5212\u3001\u7ec4\u5408\u6570\u5b66",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570 n\uff0c\u8bf7\u8fd4\u56de\u957f\u5ea6\u4e3a n \u3001\u4ec5\u7531\u5143\u97f3 (a, e, i, o, u) \u7ec4\u6210\u4e14\u6309 \u5b57\u5178\u5e8f\u6392\u5217 \u7684\u5b57\u7b26\u4e32\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-29"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i][j]\u8868\u793ai\u4e2a\u5b57\u7b26\u957f\u5ea6\u65f6j\u5b57\u7b26\u4e3a\u9996\u6709\u51e0\u79cd\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int countVowelStrings(int n) {\n        int dp[55][5] = {0};\n        for (int j = 0; j < 5; j++) dp[1][j] = 1;\n        for (int i = 2; i <= n; i++) {\n            int v = 0;\n            for (int j = 0; j < 5; j++) {\n                v += dp[i - 1][j];\n                dp[i][j] = v;\n            }\n        }\n        return accumulate(dp[n], dp[n] + 5, 0);\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-29"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a20ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.8MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def countVowelStrings(self, n: int) -> int:\n        dp = [[0] * 5 for _ in range(55)]\n        for j in range(5):\n            dp[1][j] = 1\n        for i in range(2, n+1):\n            v = 0\n            for j in range(5):\n                v += dp[i-1][j]\n                dp[i][j] = v\n        return sum(dp[n])\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-29"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn count_vowel_strings(n: i32) -> i32 {\n        let n = n as usize;\n        let mut dp = vec![vec![0; 5]; 55];\n        for j in 0..5 {\n            dp[1][j] = 1;\n        }\n        for i in 2..=n {\n            let mut v = 0;\n            for j in 0..5 {\n                v += dp[i - 1][j];\n                dp[i][j] = v\n            }\n        }\n        dp[n].iter().sum()\n    }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var t=i(30758);const s={},r=t.createContext(s);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);