"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[51088],{12440:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"leetcode/2401-2500/\u627e\u51fa\u4e2d\u67a2\u6574\u6570","title":"2485.\u627e\u51fa\u4e2d\u67a2\u6574\u6570","description":"\u94fe\u63a5\uff1a2485.\u627e\u51fa\u4e2d\u67a2\u6574\u6570","source":"@site/docs/leetcode/2401-2500/2485.\u627e\u51fa\u4e2d\u67a2\u6574\u6570.md","sourceDirName":"leetcode/2401-2500","slug":"/leetcode/2401-2500/\u627e\u51fa\u4e2d\u67a2\u6574\u6570","permalink":"/docs/leetcode/2401-2500/\u627e\u51fa\u4e2d\u67a2\u6574\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2485,"frontMatter":{},"sidebar":"journal","previous":{"title":"2481.\u5206\u5272\u5706\u7684\u6700\u5c11\u5207\u5272\u6b21\u6570","permalink":"/docs/leetcode/2401-2500/\u5206\u5272\u5706\u7684\u6700\u5c11\u5207\u5272\u6b21\u6570"},"next":{"title":"2486.\u8ffd\u52a0\u5b57\u7b26\u4ee5\u83b7\u5f97\u5b50\u5e8f\u5217","permalink":"/docs/leetcode/2401-2500/\u8ffd\u52a0\u5b57\u7b26\u4ee5\u83b7\u5f97\u5b50\u5e8f\u5217"}}');var r=i(86070),s=i(31503);const t={},c="2485.\u627e\u51fa\u4e2d\u67a2\u6574\u6570",d={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2},{value:"\u9898\u89e3 4 - python",id:"\u9898\u89e3-4---python",level:2},{value:"\u9898\u89e3 5 - rust",id:"\u9898\u89e3-5---rust",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"2485\u627e\u51fa\u4e2d\u67a2\u6574\u6570",children:"2485.\u627e\u51fa\u4e2d\u67a2\u6574\u6570"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/find-the-pivot-integer",children:"2485.\u627e\u51fa\u4e2d\u67a2\u6574\u6570"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u524d\u7f00\u548c",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4e2d\u67a2\u6574\u6570 x \u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-27"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.8MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n                public:\n                    int pivotInteger(int n) {\n                        int sum = (1 + n) * n / 2;\n                        int prev_sum = 0;\n                        for (int i = 1; i <=n ; i++) {\n                            int next_sum = sum - prev_sum;\n                            prev_sum += i;\n                            if (prev_sum == next_sum) return i;\n                        }\n                        return -1;\n                    }\n                };\n                \n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-27"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.9MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int pivotInteger(int n) {\n        int r = (1 + n) * n / 2, l = 0;\n        for (int i = 1; i <= n; i++) {\n            l += i;\n            if (l == r) return i;\n            r -= i;\n        }\n        return -1;\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-26"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.7MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5bf9\u4e8e\u5706\u5728\u77e9\u5f62\u7684\u56db\u8fb9\u548c\u5728\u56db\u4e2a\u8fdc\u90ca\u533a\u90fd\u8fdb\u884c\u68c0\u6d4b\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int pivotInteger(int n) {\n        int r = (1 + n) * n / 2, l = 0;\n        for (int i = 1; i <= n; i++) {\n            l += i;\n            if (l == r) return i;\n            r -= i;\n        }\n        return -1;\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-4---python",children:"\u9898\u89e3 4 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-26"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.8MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def pivotInteger(self, n: int) -> int:\n        l = 0\n        r = sum(range(1, n + 1))\n        for i in range(1, n + 1):\n            l += i\n            if l == r: return i\n            r -= i\n        return -1\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-5---rust",children:"\u9898\u89e3 5 - rust"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-26"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn pivot_integer(n: i32) -> i32 {\n        let mut l = 0;\n        let mut r: i32 = (1..=n).sum();\n        for i in 1..=n {\n            l += i;\n            if l == r {\n                return i\n            }\n            r -= i;\n        }\n        -1\n    }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>c});var l=i(30758);const r={},s=l.createContext(r);function t(n){const e=l.useContext(s);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);