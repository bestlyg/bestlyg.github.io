"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[44340],{94396:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"leetcode/2601-2700/\u6c42\u4e00\u4e2a\u6574\u6570\u7684\u60e9\u7f5a\u6570","title":"2698.\u6c42\u4e00\u4e2a\u6574\u6570\u7684\u60e9\u7f5a\u6570","description":"\u94fe\u63a5\uff1a2698.\u6c42\u4e00\u4e2a\u6574\u6570\u7684\u60e9\u7f5a\u6570","source":"@site/docs/leetcode/2601-2700/2698.\u6c42\u4e00\u4e2a\u6574\u6570\u7684\u60e9\u7f5a\u6570.md","sourceDirName":"leetcode/2601-2700","slug":"/leetcode/2601-2700/\u6c42\u4e00\u4e2a\u6574\u6570\u7684\u60e9\u7f5a\u6570","permalink":"/docs/leetcode/2601-2700/\u6c42\u4e00\u4e2a\u6574\u6570\u7684\u60e9\u7f5a\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2698,"frontMatter":{},"sidebar":"journal","previous":{"title":"2697.\u5b57\u5178\u5e8f\u6700\u5c0f\u56de\u6587\u4e32","permalink":"/docs/leetcode/2601-2700/\u5b57\u5178\u5e8f\u6700\u5c0f\u56de\u6587\u4e32"},"next":{"title":"2699.\u4fee\u6539\u56fe\u4e2d\u7684\u8fb9\u6743","permalink":"/docs/leetcode/2601-2700/\u4fee\u6539\u56fe\u4e2d\u7684\u8fb9\u6743"}}');var s=t(25105),r=t(8556);const l={},c="2698.\u6c42\u4e00\u4e2a\u6574\u6570\u7684\u60e9\u7f5a\u6570",d={},o=[{value:"\u9898\u89e3 1 - rust",id:"\u9898\u89e3-1---rust",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"2698\u6c42\u4e00\u4e2a\u6574\u6570\u7684\u60e9\u7f5a\u6570",children:"2698.\u6c42\u4e00\u4e2a\u6574\u6570\u7684\u60e9\u7f5a\u6570"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/find-the-punishment-number-of-an-integer",children:"2698.\u6c42\u4e00\u4e2a\u6574\u6570\u7684\u60e9\u7f5a\u6570"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u56de\u6eaf",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6b63\u6574\u6570 n \uff0c\u8bf7\u4f60\u8fd4\u56de n \u7684 \u60e9\u7f5a\u6570 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---rust",children:"\u9898\u89e3 1 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-25"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a124ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a1.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"fn check(num: i32) -> bool {\n    let s = num.pow(2).to_string().chars().collect::<Vec<_>>();\n    fn dfs(s: &Vec<char>, idx: usize, target: i32) -> bool {\n        if idx == s.len() {\n            target == 0\n        } else {\n            for cnt in 1..=(s.len() - idx) {\n                if dfs(\n                    s,\n                    idx + cnt,\n                    target - &s[idx..idx + cnt].iter().collect::<String>().parse::<i32>().unwrap(),\n                ) {\n                    return true;\n                }\n            }\n            false\n        }\n    }\n    dfs(&s, 0, num)\n}\nimpl Solution {\n    pub fn punishment_number(n: i32) -> i32 {\n        (1..=n).map(|i| if check(i) { i * i } else { 0 }).sum()\n    }\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-25"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1416ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.71MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"def check(num: int) -> bool:\n        s = str(num * num)\n        def dfs(idx: int, target: int) -> bool:\n            if idx == len(s): return target == 0\n            for cnt in range(1, len(s) - idx + 1):\n                if dfs(idx + cnt, target - int(s[idx: idx + cnt])): return True\n            return False\n        return dfs(0, num)\n    class Solution:\n        def punishmentNumber(self, n: int) -> int:\n            return sum(i * i if check(i) else 0 for i in range(1, n + 1))\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-25"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a316ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.92MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u8ba1\u7b97\u5f53\u524d\u503c\u662f\u5426\u53ef\u884c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool check(int num) {\n        string s = to_string(num * num);\n        function<bool(int, int)> dfs = [&](int idx, int target) -> bool {\n            if (idx == s.size()) return target == 0;\n            for (int cnt = 1; cnt <= s.size() - idx; cnt++) {\n                if (dfs(idx + cnt, target - stoi(s.substr(idx, cnt)))) return true;\n            }\n            return false;\n        };\n        return dfs(0, num);\n    }\n    int punishmentNumber(int n) {\n        int res = 0;\n        for (int i = 1; i <= n; i++) res += check(i) ? i * i : 0;\n        return res;\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},8556:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var i=t(58101);const s={},r=i.createContext(s);function l(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);