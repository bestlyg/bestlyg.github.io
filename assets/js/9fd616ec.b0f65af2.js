"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[98901],{46795:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=i(86070),s=i(31503);const t={},l="1419.\u6570\u9752\u86d9",c={id:"leetcode/1401-1500/\u6570\u9752\u86d9",title:"1419.\u6570\u9752\u86d9",description:"\u94fe\u63a5\uff1a1419.\u6570\u9752\u86d9",source:"@site/docs/leetcode/1401-1500/1419.\u6570\u9752\u86d9.md",sourceDirName:"leetcode/1401-1500",slug:"/leetcode/1401-1500/\u6570\u9752\u86d9",permalink:"/docs/leetcode/1401-1500/\u6570\u9752\u86d9",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1419,frontMatter:{},sidebar:"journal",previous:{title:"1418.\u70b9\u83dc\u5c55\u793a\u8868",permalink:"/docs/leetcode/1401-1500/\u70b9\u83dc\u5c55\u793a\u8868"},next:{title:"1422.\u5206\u5272\u5b57\u7b26\u4e32\u7684\u6700\u5927\u5f97\u5206",permalink:"/docs/leetcode/1401-1500/\u5206\u5272\u5b57\u7b26\u4e32\u7684\u6700\u5927\u5f97\u5206"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"1419\u6570\u9752\u86d9",children:"1419.\u6570\u9752\u86d9"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/minimum-number-of-frogs-croaking",children:"1419.\u6570\u9752\u86d9"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u8ba1\u6570",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u6a21\u62df\u5b57\u7b26\u4e32\u4e2d\u6240\u6709\u86d9\u9e23\u6240\u9700\u4e0d\u540c\u9752\u86d9\u7684\u6700\u5c11\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-06"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minNumberOfFrogs(string croakOfFrogs) {\n        int n = croakOfFrogs.size(), wait[5] = {0}, res = 0;\n        unordered_map<char, int> m;\n        m['c'] = 0; m['r'] = 1; m['o'] = 2; m['a'] = 3; m['k'] = 4;\n        for (int i = 0; i < n; i++) {\n            int idx = m[croakOfFrogs[i]];\n            if (idx == 0) {\n                if (wait[4] == 0) res++;\n                else wait[4] -= 1;\n                wait[idx]++;\n            } else {\n                if (wait[idx - 1] == 0) return -1;\n                wait[idx - 1]--;\n                wait[idx]++;\n            }\n        }\n        return wait[4] == res ? res : -1;\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-06"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a172ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.6MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def minNumberOfFrogs(self, croakOfFrogs: str) -> int:\n        n = len(croakOfFrogs)\n        wait = [0] * 5\n        res = 0\n        m = {}\n        m['c'] = 0\n        m['r'] = 1\n        m['o'] = 2\n        m['a'] = 3\n        m['k'] = 4\n        for i in range(n):\n            idx = m[croakOfFrogs[i]]\n            if idx == 0:\n                if wait[4] == 0:\n                    res += 1\n                else:\n                    wait[4] -= 1\n                wait[idx] += 1\n            else:\n                if wait[idx - 1] == 0:\n                    return -1\n                wait[idx-1] -= 1\n                wait[idx] += 1\n        return res if wait[4] == res else -1\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-06"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.6MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"fn get_idx(c: char) -> usize {\n    match c {\n        'c' => 0,\n        'r' => 1,\n        'o' => 2,\n        'a' => 3,\n        'k' => 4,\n        _ => 0,\n    }\n}\nfn str_to_vec(s: &String) -> Vec<char> {\n    s.chars().collect()\n}\nimpl Solution {\n    pub fn min_number_of_frogs(croak_of_frogs: String) -> i32 {\n        let croak_of_frogs = str_to_vec(&croak_of_frogs);\n        let n = croak_of_frogs.len();\n        let mut wait = vec![0; 5];\n        let mut res = 0;\n        for i in 0..croak_of_frogs.len() {\n            let idx = get_idx(croak_of_frogs[i]);\n            if idx == 0 {\n                if wait[4] == 0 {\n                    res += 1\n                } else {\n                    wait[4] -= 1;\n                }\n                wait[idx] += 1;\n            } else {\n                if wait[idx - 1] == 0 {\n                    return -1;\n                };\n                wait[idx - 1] -= 1;\n                wait[idx] += 1\n            }\n        }\n        return if wait[4] == res { res } else { -1 };\n    }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var r=i(30758);const s={},t=r.createContext(s);function l(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);