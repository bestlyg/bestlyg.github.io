"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[95653],{4079:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"leetcode/2401-2500/\u53ef\u88ab\u4e09\u6574\u9664\u7684\u5076\u6570\u7684\u5e73\u5747\u503c","title":"2455.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u5076\u6570\u7684\u5e73\u5747\u503c","description":"\u94fe\u63a5\uff1a2455.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u5076\u6570\u7684\u5e73\u5747\u503c","source":"@site/docs/leetcode/2401-2500/2455.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u5076\u6570\u7684\u5e73\u5747\u503c.md","sourceDirName":"leetcode/2401-2500","slug":"/leetcode/2401-2500/\u53ef\u88ab\u4e09\u6574\u9664\u7684\u5076\u6570\u7684\u5e73\u5747\u503c","permalink":"/docs/leetcode/2401-2500/\u53ef\u88ab\u4e09\u6574\u9664\u7684\u5076\u6570\u7684\u5e73\u5747\u503c","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2455,"frontMatter":{},"sidebar":"journal","previous":{"title":"2451.\u5dee\u503c\u6570\u7ec4\u4e0d\u540c\u7684\u5b57\u7b26\u4e32","permalink":"/docs/leetcode/2401-2500/\u5dee\u503c\u6570\u7ec4\u4e0d\u540c\u7684\u5b57\u7b26\u4e32"},"next":{"title":"2456.\u6700\u6d41\u884c\u7684\u89c6\u9891\u521b\u4f5c\u8005","permalink":"/docs/leetcode/2401-2500/\u6700\u6d41\u884c\u7684\u89c6\u9891\u521b\u4f5c\u8005"}}');var l=s(86070),r=s(31503);const c={},i="2455.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u5076\u6570\u7684\u5e73\u5747\u503c",o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"2455\u53ef\u88ab\u4e09\u6574\u9664\u7684\u5076\u6570\u7684\u5e73\u5747\u503c",children:"2455.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u5076\u6570\u7684\u5e73\u5747\u503c"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(e.a,{href:"https://leetcode.cn/problems/average-value-of-even-numbers-that-are-divisible-by-three",children:"2455.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u5076\u6570\u7684\u5e73\u5747\u503c"}),(0,l.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,l.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66",(0,l.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u7531\u6b63\u6574\u6570\u7ec4\u6210\u7684\u6574\u6570\u6570\u7ec4 nums \uff0c\u8fd4\u56de\u5176\u4e2d\u53ef\u88ab 3 \u6574\u9664\u7684\u6240\u6709\u5076\u6570\u7684\u5e73\u5747\u503c\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-29"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a13.3MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int averageValue(vector<int>& nums) {\n        int sum = 0, cnt = 0;\n        for (auto &num : nums) {\n            if (num % 6 == 0) sum += num, cnt++;\n        }\n        return cnt ? sum / cnt : 0;\n    }\n};\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-29"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.9MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def averageValue(self, nums: List[int]) -> int:\n        sum = cnt = 0\n        for num in nums:\n            if num % 6 == 0:\n                sum += num\n                cnt += 1\n        return 0 if not cnt else sum // cnt\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-29"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn average_value(nums: Vec<i32>) -> i32 {\n        let (mut sum, mut cnt) = (0, 0);\n        for num in nums {\n            if num % 6 == 0 {\n                sum += num;\n                cnt += 1;\n            }\n        }\n        if cnt == 0 {\n            0\n        } else {\n            sum / cnt\n        }\n    }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},31503:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>i});var t=s(30758);const l={},r=t.createContext(l);function c(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);