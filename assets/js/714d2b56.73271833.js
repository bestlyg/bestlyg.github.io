"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[63862],{47161:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"leetcode/1001-1100/\u8d1f\u4e8c\u8fdb\u5236\u8f6c\u6362","title":"1017.\u8d1f\u4e8c\u8fdb\u5236\u8f6c\u6362","description":"\u94fe\u63a5\uff1a1017.\u8d1f\u4e8c\u8fdb\u5236\u8f6c\u6362","source":"@site/docs/leetcode/1001-1100/1017.\u8d1f\u4e8c\u8fdb\u5236\u8f6c\u6362.md","sourceDirName":"leetcode/1001-1100","slug":"/leetcode/1001-1100/\u8d1f\u4e8c\u8fdb\u5236\u8f6c\u6362","permalink":"/docs/leetcode/1001-1100/\u8d1f\u4e8c\u8fdb\u5236\u8f6c\u6362","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1017,"frontMatter":{},"sidebar":"journal","previous":{"title":"1016.\u5b50\u4e32\u80fd\u8868\u793a\u4ece1\u5230N\u6570\u5b57\u7684\u4e8c\u8fdb\u5236\u4e32","permalink":"/docs/leetcode/1001-1100/\u5b50\u4e32\u80fd\u8868\u793a\u4ece1\u5230N\u6570\u5b57\u7684\u4e8c\u8fdb\u5236\u4e32"},"next":{"title":"1018.\u53ef\u88ab5\u6574\u9664\u7684\u4e8c\u8fdb\u5236\u524d\u7f00","permalink":"/docs/leetcode/1001-1100/\u53ef\u88ab5\u6574\u9664\u7684\u4e8c\u8fdb\u5236\u524d\u7f00"}}');var t=s(86070),r=s(31503);const i={},c="1017.\u8d1f\u4e8c\u8fdb\u5236\u8f6c\u6362",o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"1017\u8d1f\u4e8c\u8fdb\u5236\u8f6c\u6362",children:"1017.\u8d1f\u4e8c\u8fdb\u5236\u8f6c\u6362"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/convert-to-base-2",children:"1017.\u8d1f\u4e8c\u8fdb\u5236\u8f6c\u6362"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570 n \uff0c\u4ee5\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\u8fd4\u56de\u8be5\u6574\u6570\u7684 \u8d1f\u4e8c\u8fdb\u5236\uff08base -2\uff09\u8868\u793a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-06"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.8MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:'class Solution {\npublic:\n    string baseNeg2(int n) {\n        return n == 0 ? "0" :\n               n == 1 ? "1" :\n               n % 2 != 0 ? baseNeg2((n - 1) / -2) + "1" :\n               baseNeg2(n / -2) + "0";\n    }\n};\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-06"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.7MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'class Solution:\n    def baseNeg2(self, n: int) -> str:\n        if n == 0:\n            return "0"\n        elif n == 1:\n            return "1"\n        elif n % 2 != 0:\n            return self.baseNeg2((n - 1) / -2) + "1"\n        else:\n            return self.baseNeg2(n / -2) + "0"\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-06"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:'impl Solution {\n    pub fn base_neg2(n: i32) -> String {\n        if n == 0 {\n            "0".to_string()\n        } else if n == 1 {\n            "1".to_string()\n        } else if n % 2 != 0 {\n            Solution::base_neg2((n - 1) / -2) + "1"\n        } else {\n            Solution::base_neg2(n / -2) + "0"\n        }\n    }\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},31503:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>c});var l=s(30758);const t={},r=l.createContext(t);function i(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);