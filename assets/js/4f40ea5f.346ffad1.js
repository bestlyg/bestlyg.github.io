"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[1186],{81085:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=i(86070),t=i(25710);const r={},l="2586.\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570",c={id:"leetcode/2501-2600/\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570",title:"2586.\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570",description:"\u94fe\u63a5\uff1a2586.\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570",source:"@site/docs/leetcode/2501-2600/2586.\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570",permalink:"/web/site/docs/leetcode/2501-2600/\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2586,frontMatter:{},sidebar:"journal",previous:{title:"2583.\u4e8c\u53c9\u6811\u4e2d\u7684\u7b2cK\u5927\u5c42\u548c",permalink:"/web/site/docs/leetcode/2501-2600/\u4e8c\u53c9\u6811\u4e2d\u7684\u7b2cK\u5927\u5c42\u548c"},next:{title:"2586.\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570",permalink:"/web/site/docs/leetcode/2501-2600/\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2},{value:"\u9898\u89e3 4 - python",id:"\u9898\u89e3-4---python",level:2},{value:"\u9898\u89e3 5 - typescript",id:"\u9898\u89e3-5---typescript",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"2586\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570",children:"2586.\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/count-the-number-of-vowel-strings-in-range",children:"2586.\u7edf\u8ba1\u8303\u56f4\u5185\u7684\u5143\u97f3\u5b57\u7b26\u4e32\u6570"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u5b57\u7b26\u4e32",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u7684\u5b57\u7b26\u4e32\u6570\u7ec4 words \u548c\u4e24\u4e2a\u6574\u6570\uff1aleft \u548c right \u3002\u5982\u679c\u5b57\u7b26\u4e32\u4ee5\u5143\u97f3\u5b57\u6bcd\u5f00\u5934\u5e76\u4ee5\u5143\u97f3\u5b57\u6bcd\u7ed3\u5c3e\uff0c\u90a3\u4e48\u8be5\u5b57\u7b26\u4e32\u5c31\u662f\u4e00\u4e2a \u5143\u97f3\u5b57\u7b26\u4e32 \uff0c\u5176\u4e2d\u5143\u97f3\u5b57\u6bcd\u662f 'a'\u3001'e'\u3001'i'\u3001'o'\u3001'u' \u3002\u8fd4\u56de words[i] \u662f\u5143\u97f3\u5b57\u7b26\u4e32\u7684\u6570\u76ee\uff0c\u5176\u4e2d i \u5728\u95ed\u533a\u95f4 [left, right] \u5185\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-12"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a31.1MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int vowelStrings(vector<string>& words, int left, int right) {\n        unordered_set<char> s{ 'a', 'e', 'i', 'o', 'u'};\n        int res = 0;\n        for (int i = left; i <= right; i++) {\n            if (s.count(words[i][0]) && s.count(words[i][words[i].size() - 1])) res++;\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-12"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a32ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def vowelStrings(self, words: List[str], left: int, right: int) -> int:\n        s = {'a', 'e', 'i', 'o', 'u'}\n        res = 0\n        return len(list(filter(\n            lambda w: w[0] in s and w[-1] in s,\n            words[left:right+1]\n        )))\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-12"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn vowel_strings(words: Vec<String>, left: i32, right: i32) -> i32 {\n        let left = left as usize;\n        let right = right as usize;\n        let mut s = std::collections::HashSet::<char>::new();\n        ['a', 'e', 'i', 'o', 'u'].into_iter().for_each(|c| {\n            s.insert(*c);\n        });\n        let mut res = 0;\n        for word in words[left..=right].into_iter() {\n            let word = word.chars().collect::<Vec<char>>();\n            if s.contains(&word[0]) && s.contains(&word.last().unwrap()) {\n                res += 1;\n            }\n        }\n        res\n    }\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-4---python",children:"\u9898\u89e3 4 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-11-07"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.77MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5408\u8ba1\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def vowelStrings(self, words: List[str], left: int, right: int) -> int:\n        return sum(word[0] in 'aeiou' and word[-1] in 'aeiou' for word in words[left:right + 1])\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-5---typescript",children:"\u9898\u89e3 5 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-11-07"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43.89MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5408\u8ba1\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function vowelStrings(words: string[], left: number, right: number): number {\n    return words.slice(left, right + 1).filter(s => 'aeiou'.includes(s[0]) && 'aeiou'.includes(s[s.length - 1])).length\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var s=i(30758);const t={},r=s.createContext(t);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);