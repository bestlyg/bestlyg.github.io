"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[24839],{21302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/601-700/\u6700\u957f\u6570\u5bf9\u94fe","title":"646.\u6700\u957f\u6570\u5bf9\u94fe","description":"\u94fe\u63a5\uff1a646.\u6700\u957f\u6570\u5bf9\u94fe","source":"@site/docs/leetcode/601-700/646.\u6700\u957f\u6570\u5bf9\u94fe.md","sourceDirName":"leetcode/601-700","slug":"/leetcode/601-700/\u6700\u957f\u6570\u5bf9\u94fe","permalink":"/docs/leetcode/601-700/\u6700\u957f\u6570\u5bf9\u94fe","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":646,"frontMatter":{},"sidebar":"journal","previous":{"title":"643.\u5b50\u6570\u7ec4\u6700\u5927\u5e73\u5747\u6570I","permalink":"/docs/leetcode/601-700/\u5b50\u6570\u7ec4\u6700\u5927\u5e73\u5747\u6570I"},"next":{"title":"647.\u56de\u6587\u5b50\u4e32","permalink":"/docs/leetcode/601-700/\u56de\u6587\u5b50\u4e32"}}');var i=t(86070),r=t(31503);const c={},l="646.\u6700\u957f\u6570\u5bf9\u94fe",o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"646\u6700\u957f\u6570\u5bf9\u94fe",children:"646.\u6700\u957f\u6570\u5bf9\u94fe"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-length-of-pair-chain",children:"646.\u6700\u957f\u6570\u5bf9\u94fe"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u6392\u5e8f",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6570\u5bf9\u96c6\u5408\uff0c\u627e\u51fa\u80fd\u591f\u5f62\u6210\u7684\u6700\u957f\u6570\u5bf9\u94fe\u7684\u957f\u5ea6\u3002\u4f60\u4e0d\u9700\u8981\u7528\u5230\u6240\u6709\u7684\u6570\u5bf9\uff0c\u4f60\u53ef\u4ee5\u4ee5\u4efb\u4f55\u987a\u5e8f\u9009\u62e9\u5176\u4e2d\u7684\u4e00\u4e9b\u6570\u5bf9\u6765\u6784\u9020\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-09-03"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a32ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp \u8bb0\u5f55\u5f53\u524d\u70b9\u4e3a\u7ed3\u5c3e\u7684\u6700\u5927\u94fe\u8def\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"impl Solution {\n    pub fn find_longest_chain(pairs: Vec<Vec<i32>>) -> i32 {\n        let mut pairs = pairs;\n        pairs.sort_by(|a, b| {\n            if a[0] != b[0] {\n                a[0].cmp(&b[0])\n            } else {\n                a[1].cmp(&b[1])\n            }\n        });\n        let len = pairs.len();\n        let mut dp = vec![1; len];\n        let mut ans = 0;\n        for i in 0..len {\n            for j in 0..i {\n                if pairs[j][1] < pairs[i][0] {\n                    dp[i] = dp[i].max(dp[j] + 1)\n                }\n            }\n            ans = ans.max(dp[i]);\n        }\n        ans\n    }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var s=t(30758);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);