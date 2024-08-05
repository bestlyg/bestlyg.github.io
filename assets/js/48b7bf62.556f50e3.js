"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[58006],{51871:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var i=s(86070),t=s(25710);const l={},r="1012.\u81f3\u5c11\u67091\u4f4d\u91cd\u590d\u7684\u6570\u5b57",d={id:"leetcode/1001-1100/\u81f3\u5c11\u67091\u4f4d\u91cd\u590d\u7684\u6570\u5b57",title:"1012.\u81f3\u5c11\u67091\u4f4d\u91cd\u590d\u7684\u6570\u5b57",description:"\u94fe\u63a5\uff1a1012.\u81f3\u5c11\u67091\u4f4d\u91cd\u590d\u7684\u6570\u5b57",source:"@site/docs/leetcode/1001-1100/1012.\u81f3\u5c11\u67091\u4f4d\u91cd\u590d\u7684\u6570\u5b57.md",sourceDirName:"leetcode/1001-1100",slug:"/leetcode/1001-1100/\u81f3\u5c11\u67091\u4f4d\u91cd\u590d\u7684\u6570\u5b57",permalink:"/web/site/docs/leetcode/1001-1100/\u81f3\u5c11\u67091\u4f4d\u91cd\u590d\u7684\u6570\u5b57",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1012,frontMatter:{},sidebar:"journal",previous:{title:"1011.\u5728D\u5929\u5185\u9001\u8fbe\u5305\u88f9\u7684\u80fd\u529b",permalink:"/web/site/docs/leetcode/1001-1100/\u5728D\u5929\u5185\u9001\u8fbe\u5305\u88f9\u7684\u80fd\u529b"},next:{title:"1013.\u5c06\u6570\u7ec4\u5206\u6210\u548c\u76f8\u7b49\u7684\u4e09\u4e2a\u90e8\u5206",permalink:"/web/site/docs/leetcode/1001-1100/\u5c06\u6570\u7ec4\u5206\u6210\u548c\u76f8\u7b49\u7684\u4e09\u4e2a\u90e8\u5206"}},c={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function m(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"1012\u81f3\u5c11\u67091\u4f4d\u91cd\u590d\u7684\u6570\u5b57",children:"1012.\u81f3\u5c11\u67091\u4f4d\u91cd\u590d\u7684\u6570\u5b57"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/numbers-with-repeated-digits",children:"1012.\u81f3\u5c11\u67091\u4f4d\u91cd\u590d\u7684\u6570\u5b57"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u52a8\u6001\u89c4\u5212",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u6b63\u6574\u6570 n\uff0c\u8fd4\u56de\u5728 [1, n] \u8303\u56f4\u5185\u5177\u6709 \u81f3\u5c11 1 \u4f4d \u91cd\u590d\u6570\u5b57\u7684\u6b63\u6574\u6570\u7684\u4e2a\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-20"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.3MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6570\u4f4ddp\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    unordered_map<int, unordered_map<int, int>> m;\n    int dfs(string &sn, int idx, int mask, bool limit, bool empty) {\n        if (idx == sn.size()) return empty ? 0 : 1;\n        if (!limit && !empty && m[idx].count(mask)) return m[idx][mask];\n        int res = 0;\n        if (empty) res += dfs(sn, idx + 1, mask, false, true);\n        for (int j = empty ? 1 : 0, nmax = limit ? sn[idx] - '0' : 9; j <= nmax; j++)\n            if ((mask & (1 << j)) == 0) res += dfs(sn, idx + 1, mask | (1 << j), limit && j == nmax, false);\n        return m[idx][mask] = res;\n    };\n    int numDupDigitsAtMostN(int n) {\n        string sn = to_string(n);\n        return n - dfs(sn, 0, 0, true, true);\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-20"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a280ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19.4MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def numDupDigitsAtMostN(self, n: int) -> int:\n        sn = str(n)\n  \n        @cache\n        def dfs(idx: int, mask: int, limit: bool, empty: bool):\n            if idx == len(sn):\n                return 0 if empty else 1\n            res = 0\n            if empty:\n                res += dfs(idx+1, mask, False, True)\n            nmax = int(sn[idx]) if limit else 9\n            for j in range(1 if empty else 0, nmax+1):\n                if (mask & (1 << j)) == 0:\n                    res += dfs(idx+1, mask | (1 << j),\n                               limit and j == nmax, False)\n            return res\n        return n - dfs(0, 0, True, True)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-20"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a1.9MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn num_dup_digits_at_most_n(n: i32) -> i32 {\n        let sn = format!(\"{}\", n).chars().collect::<Vec<char>>();\n        let mut m = vec![vec![-1; 1 << 10]; sn.len()];\n        fn dfs(\n            sn: &Vec<char>,\n            m: &mut Vec<Vec<i32>>,\n            idx: usize,\n            mask: usize,\n            limit: bool,\n            empty: bool,\n        ) -> i32 {\n            if idx == sn.len() {\n                if empty {\n                    0\n                } else {\n                    1\n                }\n            } else if !limit && !empty && m[idx][mask] != -1 {\n                m[idx][mask]\n            } else {\n                let mut res = if empty {\n                    dfs(sn, m, idx + 1, mask, false, true)\n                } else {\n                    0\n                };\n                let nmax = if limit {\n                    sn[idx] as usize - '0' as usize\n                } else {\n                    9\n                };\n                for j in (if empty { 1 } else { 0 })..=nmax {\n                    if (mask & (1 << j)) == 0 {\n                        res += dfs(sn, m, idx + 1, mask | (1 << j), limit && j == nmax, false);\n                    }\n                }\n                m[idx][mask] = res;\n                res\n            }\n        }\n        return n - dfs(&sn, &mut m, 0, 0, true, true);\n    }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(m,{...n})}):m(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>d});var i=s(30758);const t={},l=i.createContext(t);function r(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);