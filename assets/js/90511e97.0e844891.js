"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[99204],{95274:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/1001-1100/\u5b50\u4e32\u80fd\u8868\u793a\u4ece1\u5230N\u6570\u5b57\u7684\u4e8c\u8fdb\u5236\u4e32","title":"1016.\u5b50\u4e32\u80fd\u8868\u793a\u4ece1\u5230N\u6570\u5b57\u7684\u4e8c\u8fdb\u5236\u4e32","description":"\u94fe\u63a5\uff1a1016.\u5b50\u4e32\u80fd\u8868\u793a\u4ece1\u5230N\u6570\u5b57\u7684\u4e8c\u8fdb\u5236\u4e32","source":"@site/docs/leetcode/1001-1100/1016.\u5b50\u4e32\u80fd\u8868\u793a\u4ece1\u5230N\u6570\u5b57\u7684\u4e8c\u8fdb\u5236\u4e32.md","sourceDirName":"leetcode/1001-1100","slug":"/leetcode/1001-1100/\u5b50\u4e32\u80fd\u8868\u793a\u4ece1\u5230N\u6570\u5b57\u7684\u4e8c\u8fdb\u5236\u4e32","permalink":"/docs/leetcode/1001-1100/\u5b50\u4e32\u80fd\u8868\u793a\u4ece1\u5230N\u6570\u5b57\u7684\u4e8c\u8fdb\u5236\u4e32","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1016,"frontMatter":{},"sidebar":"journal","previous":{"title":"1015.\u53ef\u88abK\u6574\u9664\u7684\u6700\u5c0f\u6574\u6570","permalink":"/docs/leetcode/1001-1100/\u53ef\u88abK\u6574\u9664\u7684\u6700\u5c0f\u6574\u6570"},"next":{"title":"1017.\u8d1f\u4e8c\u8fdb\u5236\u8f6c\u6362","permalink":"/docs/leetcode/1001-1100/\u8d1f\u4e8c\u8fdb\u5236\u8f6c\u6362"}}');var r=s(25105),t=s(8556);const l={},c="1016.\u5b50\u4e32\u80fd\u8868\u793a\u4ece1\u5230N\u6570\u5b57\u7684\u4e8c\u8fdb\u5236\u4e32",o={},d=[{value:"\u9898\u89e3 1 - rust",id:"\u9898\u89e3-1---rust",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2},{value:"\u9898\u89e3 4 - python",id:"\u9898\u89e3-4---python",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"1016\u5b50\u4e32\u80fd\u8868\u793a\u4ece1\u5230n\u6570\u5b57\u7684\u4e8c\u8fdb\u5236\u4e32",children:"1016.\u5b50\u4e32\u80fd\u8868\u793a\u4ece1\u5230N\u6570\u5b57\u7684\u4e8c\u8fdb\u5236\u4e32"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/binary-string-with-substrings-representing-1-to-n",children:"1016.\u5b50\u4e32\u80fd\u8868\u793a\u4ece1\u5230N\u6570\u5b57\u7684\u4e8c\u8fdb\u5236\u4e32"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\xa0s\xa0\u548c\u4e00\u4e2a\u6b63\u6574\u6570\xa0n\uff0c\u5982\u679c\u5bf9\u4e8e\xa0[1, n]\xa0\u8303\u56f4\u5185\u7684\u6bcf\u4e2a\u6574\u6570\uff0c\u5176\u4e8c\u8fdb\u5236\u8868\u793a\u90fd\u662f\xa0s \u7684 \u5b50\u5b57\u7b26\u4e32 \uff0c\u5c31\u8fd4\u56de true\uff0c\u5426\u5219\u8fd4\u56de false\xa0\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---rust",children:"\u9898\u89e3 1 - rust"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-11"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'impl Solution {\n    pub fn query_string(s: String, n: i32) -> bool {\n        for num in 1..=n {\n            let snum = format!("{:b}", num);\n            if !s.contains(&snum) {\n                return false;\n            }\n        }\n        true\n    }\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-11"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.3MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5bf9\u4e8es\u7edf\u8ba1\u6240\u6709\u51fa\u73b0\u7684\u6570\u5b57\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool queryString(string s, int n) {\n        unordered_set<int> sset;\n        int len = s.size();\n        for (int i = 0; i < len; i++) {\n            int num = 0;\n            for (int j = i; j < len && j - i + 1 < 32; j++) {\n                num = (num << 1) | (s[j] - '0');\n                if (num <= n) sset.insert(num);\n                else break;\n            }\n        }\n        sset.erase(0);\n        return sset.size() == n;\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-11"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.1MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5bf9\u4e8e\u6240\u6709n\u8ba1\u7b97\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u662f\u5426\u5b58\u5728s\u91cc\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool queryString(string s, int n) {\n        for (int num = 1; num <= n; num++) {\n            string bin = bitset<32>(num).to_string(); \n            bin = bin.substr(bin.find('1'));\n            if (s.find(bin) == string::npos) return false;\n        }\n        return true;\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-4---python",children:"\u9898\u89e3 4 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-11"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a52ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.1MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def queryString(self, s: str, n: int) -> bool:\n        return all(bin(num)[2:] in s for num in range(1, n + 1))\n"})})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},8556:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var i=s(58101);const r={},t=i.createContext(r);function l(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);