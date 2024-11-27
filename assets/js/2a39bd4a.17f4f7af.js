"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[80227],{94701:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"leetcode/2401-2500/\u6570\u7ec4\u4e2d\u5b57\u7b26\u4e32\u7684\u6700\u5927\u503c","title":"2496.\u6570\u7ec4\u4e2d\u5b57\u7b26\u4e32\u7684\u6700\u5927\u503c","description":"\u94fe\u63a5\uff1a2496.\u6570\u7ec4\u4e2d\u5b57\u7b26\u4e32\u7684\u6700\u5927\u503c","source":"@site/docs/leetcode/2401-2500/2496.\u6570\u7ec4\u4e2d\u5b57\u7b26\u4e32\u7684\u6700\u5927\u503c.md","sourceDirName":"leetcode/2401-2500","slug":"/leetcode/2401-2500/\u6570\u7ec4\u4e2d\u5b57\u7b26\u4e32\u7684\u6700\u5927\u503c","permalink":"/docs/leetcode/2401-2500/\u6570\u7ec4\u4e2d\u5b57\u7b26\u4e32\u7684\u6700\u5927\u503c","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2496,"frontMatter":{},"sidebar":"journal","previous":{"title":"2493.\u5c06\u8282\u70b9\u5206\u6210\u5c3d\u53ef\u80fd\u591a\u7684\u7ec4","permalink":"/docs/leetcode/2401-2500/\u5c06\u8282\u70b9\u5206\u6210\u5c3d\u53ef\u80fd\u591a\u7684\u7ec4"},"next":{"title":"2501.\u6570\u7ec4\u4e2d\u6700\u957f\u7684\u65b9\u6ce2","permalink":"/docs/leetcode/2501-2600/\u6570\u7ec4\u4e2d\u6700\u957f\u7684\u65b9\u6ce2"}}');var t=s(86070),i=s(31503);const l={},c="2496.\u6570\u7ec4\u4e2d\u5b57\u7b26\u4e32\u7684\u6700\u5927\u503c",o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"2496\u6570\u7ec4\u4e2d\u5b57\u7b26\u4e32\u7684\u6700\u5927\u503c",children:"2496.\u6570\u7ec4\u4e2d\u5b57\u7b26\u4e32\u7684\u6700\u5927\u503c"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/maximum-value-of-a-string-in-an-array",children:"2496.\u6570\u7ec4\u4e2d\u5b57\u7b26\u4e32\u7684\u6700\u5927\u503c"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u5b57\u7b26\u4e32",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4 strs \uff0c\u6bcf\u4e2a\u5b57\u7b26\u4e32\u90fd\u53ea\u7531\u5b57\u6bcd\u548c\u6570\u5b57\u7ec4\u6210\uff0c\u8bf7\u4f60\u8fd4\u56de strs \u4e2d\u5b57\u7b26\u4e32\u7684 \u6700\u5927\u503c \u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-23"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.7MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maximumValue(vector<string>& strs) {\n        int res = 0;\n        for (auto &s : strs) {\n            int cur = 0;\n            for (auto &c : s) {\n                if (!isdigit(c)) {\n                    cur = s.size();\n                    break;\n                } else {\n                    cur = cur * 10 + c - '0';\n                }\n            }\n            res = max(res, cur);\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-23"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a32ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def maximumValue(self, strs: List[str]) -> int:\n        return max(\n            len(s) if not s.isdigit() else int(s)\n            for s in strs\n        )\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-23"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn maximum_value(strs: Vec<String>) -> i32 {\n        strs.into_iter()\n            .map(|s| s.parse().unwrap_or(s.len() as i32))\n            .max()\n            .unwrap()\n    }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},31503:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var r=s(30758);const t={},i=r.createContext(t);function l(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);