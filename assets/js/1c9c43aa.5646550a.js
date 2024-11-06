"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[42042],{79330:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=s(86070),i=s(31503);const t={},l="1092.\u6700\u77ed\u516c\u5171\u8d85\u5e8f\u5217",c={id:"leetcode/1001-1100/\u6700\u77ed\u516c\u5171\u8d85\u5e8f\u5217",title:"1092.\u6700\u77ed\u516c\u5171\u8d85\u5e8f\u5217",description:"\u94fe\u63a5\uff1a1092.\u6700\u77ed\u516c\u5171\u8d85\u5e8f\u5217",source:"@site/docs/leetcode/1001-1100/1092.\u6700\u77ed\u516c\u5171\u8d85\u5e8f\u5217.md",sourceDirName:"leetcode/1001-1100",slug:"/leetcode/1001-1100/\u6700\u77ed\u516c\u5171\u8d85\u5e8f\u5217",permalink:"/docs/leetcode/1001-1100/\u6700\u77ed\u516c\u5171\u8d85\u5e8f\u5217",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1092,frontMatter:{},sidebar:"journal",previous:{title:"1091.\u4e8c\u8fdb\u5236\u77e9\u9635\u4e2d\u7684\u6700\u77ed\u8def\u5f84",permalink:"/docs/leetcode/1001-1100/\u4e8c\u8fdb\u5236\u77e9\u9635\u4e2d\u7684\u6700\u77ed\u8def\u5f84"},next:{title:"1093.\u5927\u6837\u672c\u7edf\u8ba1",permalink:"/docs/leetcode/1001-1100/\u5927\u6837\u672c\u7edf\u8ba1"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function j(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"1092\u6700\u77ed\u516c\u5171\u8d85\u5e8f\u5217",children:"1092.\u6700\u77ed\u516c\u5171\u8d85\u5e8f\u5217"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/shortest-common-supersequence",children:"1092.\u6700\u77ed\u516c\u5171\u8d85\u5e8f\u5217"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u51fa\u4e24\u4e2a\u5b57\u7b26\u4e32 str1 \u548c str2\uff0c\u8fd4\u56de\u540c\u65f6\u4ee5 str1 \u548c str2 \u4f5c\u4e3a\u5b50\u5e8f\u5217\u7684\u6700\u77ed\u5b57\u7b26\u4e32\u3002\u5982\u679c\u7b54\u6848\u4e0d\u6b62\u4e00\u4e2a\uff0c\u5219\u53ef\u4ee5\u8fd4\u56de\u6ee1\u8db3\u6761\u4ef6\u7684\u4efb\u610f\u4e00\u4e2a\u7b54\u6848\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-28"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a12.7MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i][j]=str1\u524di\u4e2a\u5b57\u7b26\u5339\u914dstr2\u524dj\u4e2a\u5b57\u7b26\u7684\u6700\u77ed\u957f\u5ea6\uff0c\u518d\u4ece\u540e\u5f80\u524d\u904d\u5386\u6c42\u51fa\u8def\u5f84\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'class Solution {\npublic:\n    string shortestCommonSupersequence(string str1, string str2) {\n        int n1 = str1.size(), n2 = str2.size();\n        vector<vector<int>> dp(n1 + 1, vector<int>(n2 + 1));\n        for (int i = 0; i < n1; i++) dp[i][0] = i;\n        for (int j = 0; j < n2; j++) dp[0][j] = j;\n        for (int i = 1; i <= n1; i++) {\n            for (int j = 1; j <= n2; j++) {\n                if (str1[i - 1] == str2[j - 1]) {\n                    dp[i][j] = dp[i - 1][j - 1] + 1;\n                } else {\n                    dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + 1;\n                }\n            }\n        }\n        string res = "";\n        int i = n1, j = n2;\n        while (i > 0 && j > 0) {\n            if (str1[i - 1] == str2[j - 1]) {\n                res += str1[i - 1];\n                i -= 1;\n                j -= 1;\n            } else {\n                if (dp[i - 1][j] < dp[i][j - 1]) {\n                    res += str1[i - 1];\n                    i -= 1;\n                } else {\n                    res += str2[j - 1];\n                    j -= 1;\n                }\n            }\n        }\n        reverse(res.begin(), res.end());\n        return str1.substr(0, i) + str2.substr(0, j) + res;\n    }\n};\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-28"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a320ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a59.1MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'class Solution:\n    def shortestCommonSupersequence(self, str1: str, str2: str) -> str:\n        n1, n2 = len(str1), len(str2)\n        dp = [[0] * (n2 + 1) for _ in range(n1 + 1)]\n        for i in range(n1):\n            dp[i][0] = i\n        for j in range(n2):\n            dp[0][j] = j\n        for i in range(1, n1+1):\n            for j in range(1, n2+1):\n                if str1[i - 1] == str2[j - 1]:\n                    dp[i][j] = dp[i - 1][j - 1] + 1\n                else:\n                    dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + 1\n        res = ""\n        i, j = n1, n2\n        while i > 0 and j > 0:\n            if str1[i - 1] == str2[j - 1]:\n                res += str1[i - 1]\n                i -= 1\n                j -= 1\n            else:\n                if dp[i - 1][j] < dp[i][j - 1]:\n                    res += str1[i - 1]\n                    i -= 1\n                else:\n                    res += str2[j - 1]\n                    j -= 1\n        res = res[::-1]\n        return str1[0:i] + str2[0:j] + res\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-28"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.5MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn shortest_common_supersequence(str1: String, str2: String) -> String {\n        let (str1, str2) = (\n            str1.chars().collect::<Vec<char>>(),\n            str2.chars().collect::<Vec<char>>(),\n        );\n        let (n1, n2) = (str1.len(), str2.len());\n        let mut dp = vec![vec![0; n2 + 1]; n1 + 1];\n        for i in 0..n1 {\n            dp[i][0] = i;\n        }\n        for j in 0..n2 {\n            dp[0][j] = j;\n        }\n        for i in 1..=n1 {\n            for j in 1..=n2 {\n                if str1[i - 1] == str2[j - 1] {\n                    dp[i][j] = dp[i - 1][j - 1] + 1;\n                } else {\n                    dp[i][j] = dp[i - 1][j].min(dp[i][j - 1]) + 1;\n                }\n            }\n        }\n        let mut s = vec![];\n        let (mut i, mut j) = (n1, n2);\n        while i > 0 && j > 0 {\n            if str1[i - 1] == str2[j - 1] {\n                s.push(*&str1[i - 1]);\n                i -= 1;\n                j -= 1;\n            } else {\n                if dp[i - 1][j] < dp[i][j - 1] {\n                    s.push(*&str1[i - 1]);\n                    i -= 1;\n                } else {\n                    s.push(*&str2[j - 1]);\n                    j -= 1;\n                }\n            }\n        }\n        s = s.into_iter().rev().collect();\n        String::from_utf8(\n            [&str1[0..i], &str2[0..j], &s[..]]\n                .concat()\n                .into_iter()\n                .map(|v| v as u8)\n                .collect::<Vec<u8>>(),\n        )\n        .unwrap()\n    }\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(j,{...n})}):j(n)}},31503:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var r=s(30758);const i={},t=r.createContext(i);function l(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);