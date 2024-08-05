"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[91916],{90723:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var s=r(86070),i=r(25710);const l={},t="2697.\u5b57\u5178\u5e8f\u6700\u5c0f\u56de\u6587\u4e32",c={id:"leetcode/2601-2700/\u5b57\u5178\u5e8f\u6700\u5c0f\u56de\u6587\u4e32",title:"2697.\u5b57\u5178\u5e8f\u6700\u5c0f\u56de\u6587\u4e32",description:"\u94fe\u63a5\uff1a2697.\u5b57\u5178\u5e8f\u6700\u5c0f\u56de\u6587\u4e32",source:"@site/docs/leetcode/2601-2700/2697.\u5b57\u5178\u5e8f\u6700\u5c0f\u56de\u6587\u4e32.md",sourceDirName:"leetcode/2601-2700",slug:"/leetcode/2601-2700/\u5b57\u5178\u5e8f\u6700\u5c0f\u56de\u6587\u4e32",permalink:"/web/site/docs/leetcode/2601-2700/\u5b57\u5178\u5e8f\u6700\u5c0f\u56de\u6587\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2697,frontMatter:{},sidebar:"journal",previous:{title:"2696.\u5220\u9664\u5b50\u4e32\u540e\u7684\u5b57\u7b26\u4e32\u6700\u5c0f\u957f\u5ea6",permalink:"/web/site/docs/leetcode/2601-2700/\u5220\u9664\u5b50\u4e32\u540e\u7684\u5b57\u7b26\u4e32\u6700\u5c0f\u957f\u5ea6"},next:{title:"2698.\u6c42\u4e00\u4e2a\u6574\u6570\u7684\u60e9\u7f5a\u6570",permalink:"/web/site/docs/leetcode/2601-2700/\u6c42\u4e00\u4e2a\u6574\u6570\u7684\u60e9\u7f5a\u6570"}},o={},a=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"2697\u5b57\u5178\u5e8f\u6700\u5c0f\u56de\u6587\u4e32",children:"2697.\u5b57\u5178\u5e8f\u6700\u5c0f\u56de\u6587\u4e32"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/lexicographically-smallest-palindrome",children:"2697.\u5b57\u5178\u5e8f\u6700\u5c0f\u56de\u6587\u4e32"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u6700\u7ec8\u7684\u56de\u6587\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-13"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a148ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.23MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def makeSmallestPalindrome(self, s: str) -> str:\n        arr = list(s)\n        for i in range(len(arr) // 2):\n            arr[i] = arr[len(arr) - 1 - i]= min(arr[i], arr[len(arr) - 1 - i])\n        return ''.join(arr)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-13"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a32ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.03MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    string makeSmallestPalindrome(string s) {\n        for (int i = 0; i < s.size() / 2; i++) {\n            s[i] = s[s.size() - 1 - i] = min(s[i], s[s.size() - 1 - i]);\n        }\n        return s;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-13"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.35MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn make_smallest_palindrome(s: String) -> String {\n        let mut arr = s.chars().map(|c| c as u8).collect::<Vec<u8>>();\n        let n = arr.len();\n        for i in 0..n / 2 {\n            arr[i] = arr[i].min(arr[n - 1 - i]);\n            arr[n - 1 - i] = arr[i];\n        }\n        String::from_utf8(arr).unwrap()\n    }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>t,x:()=>c});var s=r(30758);const i={},l=s.createContext(i);function t(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);