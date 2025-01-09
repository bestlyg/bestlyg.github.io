"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[28731],{9551:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"leetcode/1001-1100/\u68c0\u67e5\u66ff\u6362\u540e\u7684\u8bcd\u662f\u5426\u6709\u6548","title":"1003.\u68c0\u67e5\u66ff\u6362\u540e\u7684\u8bcd\u662f\u5426\u6709\u6548","description":"\u94fe\u63a5\uff1a1003.\u68c0\u67e5\u66ff\u6362\u540e\u7684\u8bcd\u662f\u5426\u6709\u6548","source":"@site/docs/leetcode/1001-1100/1003.\u68c0\u67e5\u66ff\u6362\u540e\u7684\u8bcd\u662f\u5426\u6709\u6548.md","sourceDirName":"leetcode/1001-1100","slug":"/leetcode/1001-1100/\u68c0\u67e5\u66ff\u6362\u540e\u7684\u8bcd\u662f\u5426\u6709\u6548","permalink":"/docs/leetcode/1001-1100/\u68c0\u67e5\u66ff\u6362\u540e\u7684\u8bcd\u662f\u5426\u6709\u6548","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1003,"frontMatter":{},"sidebar":"journal","previous":{"title":"1002.\u67e5\u627e\u5171\u7528\u5b57\u7b26","permalink":"/docs/leetcode/1001-1100/\u67e5\u627e\u5171\u7528\u5b57\u7b26"},"next":{"title":"1004.\u6700\u5927\u8fde\u7eed1\u7684\u4e2a\u6570III","permalink":"/docs/leetcode/1001-1100/\u6700\u5927\u8fde\u7eed1\u7684\u4e2a\u6570III"}}');var i=s(25105),r=s(8556);const t={},c="1003.\u68c0\u67e5\u66ff\u6362\u540e\u7684\u8bcd\u662f\u5426\u6709\u6548",d={},o=[{value:"\u9898\u89e3 1 - rust",id:"\u9898\u89e3-1---rust",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2},{value:"\u9898\u89e3 4 - python",id:"\u9898\u89e3-4---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"1003\u68c0\u67e5\u66ff\u6362\u540e\u7684\u8bcd\u662f\u5426\u6709\u6548",children:"1003.\u68c0\u67e5\u66ff\u6362\u540e\u7684\u8bcd\u662f\u5426\u6709\u6548"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/check-if-word-is-valid-after-substitutions",children:"1003.\u68c0\u67e5\u66ff\u6362\u540e\u7684\u8bcd\u662f\u5426\u6709\u6548"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u5b57\u7b26\u4e32",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 s \uff0c\u8bf7\u4f60\u5224\u65ad\u5b83\u662f\u5426 \u6709\u6548 \u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---rust",children:"\u9898\u89e3 1 - rust"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-03"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:'impl Solution {\n    pub fn is_valid(mut s: String) -> bool {\n        while s != "" {\n            let n = s.replace("abc", "");\n            if n == s {\n                return false;\n            }\n            s = n;\n        }\n        s == ""\n    }\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-03"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a328ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.4MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e00\u76f4\u627eabc\u5b50\u4e32\uff0c\u66ff\u6362\u6210\u7a7a\u4e32\uff0c\u76f4\u5230\u4e0d\u80fd\u518d\u66ff\u6362\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'class Solution {\npublic:\n    bool isValid(string s) {\n        string next;\n        do {\n            int p = s.find("abc", 0);\n            if (p == -1) return false;\n            next = s.replace(p, 3, "");\n        } while (next != "");\n        return true;\n    }\n};\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-03"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a184ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a48.3MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:'function isValid(s: string): boolean {\n    while (s != "") {\n        const n = s.replace("abc", "");\n        if (n == s) return false;\n        s = n;\n    }\n    return s == "";\n};\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-4---python",children:"\u9898\u89e3 4 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-03"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a56ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.2MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'class Solution:\n    def isValid(self, s: str) -> bool:\n        while s != "":\n            n = s.replace("abc", "")\n            if n == s: return False\n            s = n\n        return s == ""\n'})})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},8556:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>c});var l=s(58101);const i={},r=l.createContext(i);function t(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);