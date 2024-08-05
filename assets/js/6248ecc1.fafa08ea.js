"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[41271],{91383:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var s=i(86070),t=i(25710);const r={},l="2565.\u6700\u5c11\u5f97\u5206\u5b50\u5e8f\u5217",c={id:"leetcode/2501-2600/\u6700\u5c11\u5f97\u5206\u5b50\u5e8f\u5217",title:"2565.\u6700\u5c11\u5f97\u5206\u5b50\u5e8f\u5217",description:"\u94fe\u63a5\uff1a2565.\u6700\u5c11\u5f97\u5206\u5b50\u5e8f\u5217",source:"@site/docs/leetcode/2501-2600/2565.\u6700\u5c11\u5f97\u5206\u5b50\u5e8f\u5217.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u6700\u5c11\u5f97\u5206\u5b50\u5e8f\u5217",permalink:"/web/site/docs/leetcode/2501-2600/\u6700\u5c11\u5f97\u5206\u5b50\u5e8f\u5217",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2565,frontMatter:{},sidebar:"journal",previous:{title:"2564.\u5b50\u5b57\u7b26\u4e32\u5f02\u6216\u67e5\u8be2",permalink:"/web/site/docs/leetcode/2501-2600/\u5b50\u5b57\u7b26\u4e32\u5f02\u6216\u67e5\u8be2"},next:{title:"2570.\u5408\u5e76\u4e24\u4e2a\u4e8c\u7ef4\u6570\u7ec4-\u6c42\u548c\u6cd5",permalink:"/web/site/docs/leetcode/2501-2600/\u5408\u5e76\u4e24\u4e2a\u4e8c\u7ef4\u6570\u7ec4-\u6c42\u548c\u6cd5"}},o={},p=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"2565\u6700\u5c11\u5f97\u5206\u5b50\u5e8f\u5217",children:"2565.\u6700\u5c11\u5f97\u5206\u5b50\u5e8f\u5217"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/subsequence-with-the-minimum-score",children:"2565.\u6700\u5c11\u5f97\u5206\u5b50\u5e8f\u5217"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32\u3001\u4e8c\u5206\u67e5\u627e",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u4f7f t \u6210\u4e3a s \u5b50\u5e8f\u5217\u7684\u6700\u5c0f\u5f97\u5206\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-12"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a11.2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u540e\u7f00\u5339\u914d\uff0c\u628as\u5206\u6210\u524d\u540e\u4e24\u90e8\u5206\u8fdb\u884c\u679a\u4e3e\uff0c\u5bf9\u4e8e\u6bcf\u4e00\u90e8\u5206\u5c1d\u8bd5\u5339\u914dt\u7684\u524d\u540e\u7f00\u7684\u6700\u5927\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minimumScore(string s, string t) {\n        int n = s.size(), m = t.size();\n        vector<int> pre(n), suf(n + 1, m);\n        for (int i = 0, p = 0; i < n && p < m; i++) {\n            if (s[i] == t[p]) p++;\n            pre[i] = p;\n        }\n        for (int i = n - 1, p = m - 1; i >= 0 && p >= 0; i--) {\n            if (s[i] == t[p]) p--;\n            suf[i] = p + 1;\n        }\n        int res = suf[0];\n        for (int i = 0; i < n; i++) {\n            if (suf[i + 1] < pre[i]) return 0;\n            res = min(res, suf[i + 1] - pre[i]);\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-12"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a156ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a23.2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def minimumScore(self, s: str, t: str) -> int:\n        n, m = len(s), len(t)\n        pre, suf = [0] * n, [m] * (n + 1)\n        i, p = 0, 0\n        while i < n and p < m:\n            if s[i] == t[p]:\n                p += 1\n            pre[i] = p\n            i += 1\n        i, p = n-1, m-1\n        while i >= 0 and p >= 0:\n            if s[i] == t[p]:\n                p -= 1\n            suf[i] = p+1\n            i -= 1\n        res = suf[0]\n        for i in range(n):\n            if suf[i + 1] < pre[i]:\n                return 0\n            res = min(res, suf[i + 1] - pre[i])\n        return res\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-12"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a4.8MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn minimum_score(s: String, t: String) -> i32 {\n        let (s, t) = (\n            s.chars().collect::<Vec<char>>(),\n            t.chars().collect::<Vec<char>>(),\n        );\n        let (n, m) = (s.len(), t.len());\n        let (mut pre, mut suf) = (vec![0; n], vec![m; n + 1]);\n        let (mut i, mut p) = (0, 0);\n        while i < n && p < m {\n            if s[i] == t[p] {\n                p += 1;\n            }\n            pre[i] = p;\n            i += 1;\n        }\n        let (mut i, mut p) = ((n - 1) as i32, (m - 1) as i32);\n        while i >= 0 && p >= 0 {\n            if s[i as usize] == t[p as usize] {\n                p -= 1;\n            }\n            suf[i as usize] = p as usize + 1;\n            i -= 1;\n        }\n        let mut res = suf[0];\n        for i in 0..n {\n            if suf[i + 1] < pre[i] {\n                return 0;\n            }\n            res = res.min(suf[i + 1] - pre[i]);\n        }\n        res as i32\n    }\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var s=i(30758);const t={},r=s.createContext(t);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);