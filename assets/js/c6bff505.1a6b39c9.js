"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[40622],{21906:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/2701-2800/\u4f7f\u6240\u6709\u5b57\u7b26\u76f8\u7b49\u7684\u6700\u5c0f\u6210\u672c","title":"2712.\u4f7f\u6240\u6709\u5b57\u7b26\u76f8\u7b49\u7684\u6700\u5c0f\u6210\u672c","description":"\u94fe\u63a5\uff1a2712.\u4f7f\u6240\u6709\u5b57\u7b26\u76f8\u7b49\u7684\u6700\u5c0f\u6210\u672c","source":"@site/docs/leetcode/2701-2800/2712.\u4f7f\u6240\u6709\u5b57\u7b26\u76f8\u7b49\u7684\u6700\u5c0f\u6210\u672c.md","sourceDirName":"leetcode/2701-2800","slug":"/leetcode/2701-2800/\u4f7f\u6240\u6709\u5b57\u7b26\u76f8\u7b49\u7684\u6700\u5c0f\u6210\u672c","permalink":"/docs/leetcode/2701-2800/\u4f7f\u6240\u6709\u5b57\u7b26\u76f8\u7b49\u7684\u6700\u5c0f\u6210\u672c","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2712,"frontMatter":{},"sidebar":"journal","previous":{"title":"2711.\u5bf9\u89d2\u7ebf\u4e0a\u4e0d\u540c\u503c\u7684\u6570\u91cf\u5dee","permalink":"/docs/leetcode/2701-2800/\u5bf9\u89d2\u7ebf\u4e0a\u4e0d\u540c\u503c\u7684\u6570\u91cf\u5dee"},"next":{"title":"2713.\u77e9\u9635\u4e2d\u4e25\u683c\u9012\u589e\u7684\u5355\u5143\u683c\u6570","permalink":"/docs/leetcode/2701-2800/\u77e9\u9635\u4e2d\u4e25\u683c\u9012\u589e\u7684\u5355\u5143\u683c\u6570"}}');var s=l(25105),r=l(8556);const t={},c="2712.\u4f7f\u6240\u6709\u5b57\u7b26\u76f8\u7b49\u7684\u6700\u5c0f\u6210\u672c",o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"2712\u4f7f\u6240\u6709\u5b57\u7b26\u76f8\u7b49\u7684\u6700\u5c0f\u6210\u672c",children:"2712.\u4f7f\u6240\u6709\u5b57\u7b26\u76f8\u7b49\u7684\u6700\u5c0f\u6210\u672c"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/minimum-cost-to-make-all-characters-equal",children:"2712.\u4f7f\u6240\u6709\u5b57\u7b26\u76f8\u7b49\u7684\u6700\u5c0f\u6210\u672c"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4f7f\u5b57\u7b26\u4e32\u5185\u6240\u6709\u5b57\u7b26 \u76f8\u7b49 \u9700\u8981\u7684 \u6700\u5c0f\u6210\u672c \u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-28"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a20ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a11.8MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e00\u6b21\u904d\u5386\uff0c\u9047\u5230\u5de6\u53f3\u4e0d\u7b49\u7684\uff0c\u8981\u4e0d\u7ffb\u8f6c\u5de6\u8fb9\uff0c\u8981\u4e0d\u7ffb\u8f6c\u53f3\u8fb9\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    typedef long long ll;\n    ll minimumCost(string s) {\n        ll res = 0;\n        for (int i = 1; i < s.size(); i++) {\n            if (s[i] != s[i - 1]) res += min(i, (int)s.size() - i);\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-28"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a168ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.7MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def minimumCost(self, s: str) -> int:\n        res = 0\n        for i in range(1, len(s)):\n            if s[i] != s[i - 1]: res += min(i, len(s) - i)\n        return res\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-28"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a30.8MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4ece\u4e2d\u95f4\u5411\u4e24\u8fb9\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    typedef long long ll;\n    ll minimumCost(string s) {\n        ll n = s.size(), m = n / 2;\n        function<ll(ll, ll, bool)> compL = [&](ll idx, ll target, bool rev) -> ll {\n            if (idx == -1) return 0;\n            ll val = s[idx] - '0';\n            if (rev) val ^= 1;\n            if (val == target) return compL(idx - 1, target, rev);\n            return compL(idx - 1, target, !rev) + (idx + 1);\n        };\n        function<ll(ll, ll, bool)> compR = [&](ll idx, ll target, bool rev) -> ll {\n            if (idx == n) return 0;\n            ll val = s[idx] - '0';\n            if (rev) val ^= 1;\n            if (val == target) return compR(idx + 1, target, rev);\n            return compR(idx + 1, target, !rev) + (n - idx);\n        };\n        return min(compL(m - 1, 0, false) + compR(m, 0, false), compL(m - 1, 1, false) + compR(m, 1, false));\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-28"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.7MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"pub fn str_to_vec(s: &String) -> Vec<char> {\n    s.chars().collect()\n}\nimpl Solution {\n    pub fn minimum_cost(s: String) -> i64 {\n        let mut res = 0i64;\n        let s = str_to_vec(&s);\n        for i in 1..s.len() {\n            if s[i] != s[i - 1] {\n                res += i.min(s.len() - i) as i64;\n            }\n        }\n        res\n    }\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8556:(n,e,l)=>{l.d(e,{R:()=>t,x:()=>c});var i=l(58101);const s={},r=i.createContext(s);function t(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);