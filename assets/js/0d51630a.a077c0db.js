"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[58009],{14055:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"leetcode/1101-1200/\u6784\u5efa\u56de\u6587\u4e32\u68c0\u6d4b","title":"1177.\u6784\u5efa\u56de\u6587\u4e32\u68c0\u6d4b","description":"\u94fe\u63a5\uff1a1177.\u6784\u5efa\u56de\u6587\u4e32\u68c0\u6d4b","source":"@site/docs/leetcode/1101-1200/1177.\u6784\u5efa\u56de\u6587\u4e32\u68c0\u6d4b.md","sourceDirName":"leetcode/1101-1200","slug":"/leetcode/1101-1200/\u6784\u5efa\u56de\u6587\u4e32\u68c0\u6d4b","permalink":"/docs/leetcode/1101-1200/\u6784\u5efa\u56de\u6587\u4e32\u68c0\u6d4b","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1177,"frontMatter":{},"sidebar":"journal","previous":{"title":"1175.\u8d28\u6570\u6392\u5217","permalink":"/docs/leetcode/1101-1200/\u8d28\u6570\u6392\u5217"},"next":{"title":"1184.\u516c\u4ea4\u7ad9\u95f4\u7684\u8ddd\u79bb","permalink":"/docs/leetcode/1101-1200/\u516c\u4ea4\u7ad9\u95f4\u7684\u8ddd\u79bb"}}');var i=s(86070),l=s(31503);const r={},c="1177.\u6784\u5efa\u56de\u6587\u4e32\u68c0\u6d4b",o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"1177\u6784\u5efa\u56de\u6587\u4e32\u68c0\u6d4b",children:"1177.\u6784\u5efa\u56de\u6587\u4e32\u68c0\u6d4b"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/can-make-palindrome-from-substring",children:"1177.\u6784\u5efa\u56de\u6587\u4e32\u68c0\u6d4b"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u524d\u7f00\u548c",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32\xa0s\uff0c\u8bf7\u4f60\u5bf9\xa0s\xa0\u7684\u5b50\u4e32\u8fdb\u884c\u68c0\u6d4b\u3002\u6bcf\u6b21\u68c0\u6d4b\uff0c\u5f85\u68c0\u5b50\u4e32\u90fd\u53ef\u4ee5\u8868\u793a\u4e3a\xa0queries[i] = [left, right, k]\u3002\u6211\u4eec\u53ef\u4ee5 \u91cd\u65b0\u6392\u5217 \u5b50\u4e32\xa0s[left], ..., s[right]\uff0c\u5e76\u4ece\u4e2d\u9009\u62e9 \u6700\u591a k\xa0\u9879\u66ff\u6362\u6210\u4efb\u4f55\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u3002\xa0    \u5982\u679c\u5728\u4e0a\u8ff0\u68c0\u6d4b\u8fc7\u7a0b\u4e2d\uff0c\u5b50\u4e32\u53ef\u4ee5\u53d8\u6210\u56de\u6587\u5f62\u5f0f\u7684\u5b57\u7b26\u4e32\uff0c\u90a3\u4e48\u68c0\u6d4b\u7ed3\u679c\u4e3a\xa0true\uff0c\u5426\u5219\u7ed3\u679c\u4e3a\xa0false\u3002    \u8fd4\u56de\u7b54\u6848\u6570\u7ec4\xa0answer[]\uff0c\u5176\u4e2d\xa0answer[i]\xa0\u662f\u7b2c\xa0i\xa0\u4e2a\u5f85\u68c0\u5b50\u4e32\xa0queries[i]\xa0\u7684\u68c0\u6d4b\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-15"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a284ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a92.6MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u56e0\u4e3a\u53ef\u4ee5\u91cd\u65b0\u6392\u5217\uff0c\u6240\u4ee5\u53ea\u9700\u8981\u8003\u8651\u533a\u95f4\u5185\u7684\u5947\u5076\u5373\u53ef\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<bool> canMakePaliQueries(string s, vector<vector<int>>& queries) {\n        vector<int> list(1, 0);\n        for (auto &c : s) list.push_back(list.back() ^ (1 << (c - 'a')));\n        vector<bool> res;\n        for (auto &q : queries) {\n            int l = q[0], r = q[1], k = q[2], val = list[r + 1] ^ list[l], cnt = 0;\n            for (int i = 0; i < 26; i++) \n                if (val & (1 << i)) cnt++;\n            if ((r - l + 1) % 2 == 0) res.push_back(2 * k >= cnt);\n            else res.push_back(2 * k >= cnt - 1);\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-15"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a588ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a56.4MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def canMakePaliQueries(self, s: str, queries: List[List[int]]) -> List[bool]:\n        list = [1]\n        for c in s:\n            list.append(list[-1] ^ (1 << (ord(c) - ord('a'))))\n        def check(q: List[int]):\n            l, r, k = q[0], q[1], q[2]\n            val = list[r+1] ^ list[l]\n            cnt = 0\n            for i in range(26):\n                if val & (1 << i):\n                    cnt += 1\n            if (r-l+1) % 2:\n                return 2 * k >= cnt - 1\n            else:\n                return 2 * k >= cnt\n        return [check(q) for q in queries]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-15"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a28ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.5MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn can_make_pali_queries(s: String, queries: Vec<Vec<i32>>) -> Vec<bool> {\n        let mut list = vec![0];\n        for c in s.as_bytes() {\n            list.push(list.last().unwrap() ^ (1 << (*c - b'a')));\n        }\n        let check = |q: Vec<i32>| -> bool {\n            let l = q[0] as usize;\n            let r = q[1] as usize;\n            let k = q[2];\n            let val = list[r + 1] ^ list[l];\n            let mut cnt = 0;\n            for i in 0..26 {\n                if (val & (1 << i)) != 0 {\n                    cnt += 1;\n                }\n            }\n            if (r - l + 1) % 2 == 0 {\n                2 * k >= cnt\n            } else {\n                2 * k >= cnt - 1\n            }\n        };\n        queries.into_iter().map(|q| check(q)).collect()\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},31503:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(30758);const i={},l=t.createContext(i);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);