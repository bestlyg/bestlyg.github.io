"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[42612],{91146:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=t(86070),s=t(25710);const r={},c="753.\u7834\u89e3\u4fdd\u9669\u7bb1",l={id:"leetcode/701-800/\u7834\u89e3\u4fdd\u9669\u7bb1",title:"753.\u7834\u89e3\u4fdd\u9669\u7bb1",description:"\u94fe\u63a5\uff1a753.\u7834\u89e3\u4fdd\u9669\u7bb1",source:"@site/docs/leetcode/701-800/753.\u7834\u89e3\u4fdd\u9669\u7bb1.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u7834\u89e3\u4fdd\u9669\u7bb1",permalink:"/docs/leetcode/701-800/\u7834\u89e3\u4fdd\u9669\u7bb1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:753,frontMatter:{},sidebar:"journal",previous:{title:"752.\u6253\u5f00\u8f6c\u76d8\u9501",permalink:"/docs/leetcode/701-800/\u6253\u5f00\u8f6c\u76d8\u9501"},next:{title:"757.\u8bbe\u7f6e\u4ea4\u96c6\u5927\u5c0f\u81f3\u5c11\u4e3a2",permalink:"/docs/leetcode/701-800/\u8bbe\u7f6e\u4ea4\u96c6\u5927\u5c0f\u81f3\u5c11\u4e3a2"}},o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - rust",id:"\u9898\u89e3-2---rust",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"753\u7834\u89e3\u4fdd\u9669\u7bb1",children:"753.\u7834\u89e3\u4fdd\u9669\u7bb1"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/cracking-the-safe",children:"753.\u7834\u89e3\u4fdd\u9669\u7bb1"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u56fe\u3001\u6b27\u62c9\u56de\u8def",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u8fd4\u56de\u4e00\u4e2a\u80fd\u6253\u5f00\u4fdd\u9669\u7bb1\u7684\u6700\u77ed\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-10"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a28.6MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'class Solution {\npublic:\n    int n, k, nmax;\n    string ans;\n    unordered_set<string> visit;\n    string crackSafe(int n, int k) {\n        this->n = n;\n        this->k = k;\n        this->ans = "";\n        for (int i = 0; i < n; i++) ans += "0";\n        nmax = pow(k, n);\n        visit.insert(ans);\n        dfs(ans);\n        return ans;\n    }\n    bool dfs(string cur) {\n        string prefix = cur.substr(cur.size() - n + 1, n - 1);\n        if (visit.size() == nmax) {\n            ans = cur;\n            return true;\n        }\n        for (int i = 0; i < k; i++) {\n            string next = prefix + to_string(i);\n            if (visit.count(next)) continue;\n            visit.insert(next);\n            if (dfs(cur + to_string(i))) return true;\n            visit.erase(next);\n        }\n        return false;\n    }\n};\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---rust",children:"\u9898\u89e3 2 - rust"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-10"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19.6MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:"use std::collections::HashSet;\nimpl Solution {\n    pub fn crack_safe(n: i32, k: i32) -> String {\n        let mut visit = HashSet::<String>::new();\n        let mut cur = String::new();\n        for _ in 0..n {\n            cur.push('0');\n        }\n        visit.insert(cur.clone());\n        Solution::dfs(n, k, &mut visit, cur).1\n    }\n    fn dfs<'a>(n: i32, k: i32, visit: &mut HashSet<String>, cur: String) -> (bool, String) {\n        if visit.len() == k.pow(n as u32) as usize {\n            (true, cur)\n        } else {\n            let pre = &cur[(cur.len() as i32 - n + 1) as usize..cur.len()];\n            for i in 0..k {\n                let mut next = String::from(pre);\n                next.push(char::from(i as u8 + '0' as u8));\n                if visit.contains(&next) {\n                    continue;\n                }\n                visit.insert(next.clone());\n                let mut cur = cur.clone();\n                cur.push(char::from(i as u8 + '0' as u8));\n                let res = Solution::dfs(n, k, visit, cur);\n                if res.0 {\n                    return res;\n                }\n                visit.remove(&next);\n            }\n\n            (false, \"\".to_string())\n        }\n    }\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var i=t(30758);const s={},r=i.createContext(s);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);