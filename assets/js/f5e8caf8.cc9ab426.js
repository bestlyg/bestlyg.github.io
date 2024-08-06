"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[82345],{9360:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var c=t(86070),s=t(25710);const l={},r="1234.\u66ff\u6362\u5b50\u4e32\u5f97\u5230\u5e73\u8861\u5b57\u7b26\u4e32",i={id:"leetcode/1201-1300/\u66ff\u6362\u5b50\u4e32\u5f97\u5230\u5e73\u8861\u5b57\u7b26\u4e32",title:"1234.\u66ff\u6362\u5b50\u4e32\u5f97\u5230\u5e73\u8861\u5b57\u7b26\u4e32",description:"\u94fe\u63a5\uff1a1234.\u66ff\u6362\u5b50\u4e32\u5f97\u5230\u5e73\u8861\u5b57\u7b26\u4e32",source:"@site/docs/leetcode/1201-1300/1234.\u66ff\u6362\u5b50\u4e32\u5f97\u5230\u5e73\u8861\u5b57\u7b26\u4e32.md",sourceDirName:"leetcode/1201-1300",slug:"/leetcode/1201-1300/\u66ff\u6362\u5b50\u4e32\u5f97\u5230\u5e73\u8861\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/1201-1300/\u66ff\u6362\u5b50\u4e32\u5f97\u5230\u5e73\u8861\u5b57\u7b26\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1234,frontMatter:{},sidebar:"journal",previous:{title:"1233.\u5220\u9664\u5b50\u6587\u4ef6\u5939",permalink:"/docs/leetcode/1201-1300/\u5220\u9664\u5b50\u6587\u4ef6\u5939"},next:{title:"1235.\u89c4\u5212\u517c\u804c\u5de5\u4f5c",permalink:"/docs/leetcode/1201-1300/\u89c4\u5212\u517c\u804c\u5de5\u4f5c"}},a={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"1234\u66ff\u6362\u5b50\u4e32\u5f97\u5230\u5e73\u8861\u5b57\u7b26\u4e32",children:"1234.\u66ff\u6362\u5b50\u4e32\u5f97\u5230\u5e73\u8861\u5b57\u7b26\u4e32"}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,c.jsx)(e.a,{href:"https://leetcode.cn/problems/replace-the-substring-for-balanced-string",children:"1234.\u66ff\u6362\u5b50\u4e32\u5f97\u5230\u5e73\u8861\u5b57\u7b26\u4e32"}),(0,c.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,c.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u6ed1\u52a8\u7a97\u53e3",(0,c.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u8fd4\u56de\u5f85\u66ff\u6362\u5b50\u4e32\u7684\u6700\u5c0f\u53ef\u80fd\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-13"}),"\n",(0,c.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,c.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.5MB"}),"\n",(0,c.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,c.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\uff0c\u627e\u51fa\u6240\u6709\u53ef\u4ee5\u5339\u914d\u7684\u6bb5\u843d\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int id(char c) {\n        switch (c) {\n            case 'Q': return 0;\n            case 'W': return 1;\n            case 'E': return 2;\n            case 'R': return 3;\n        }\n        return -1;\n    }\n    bool isBalance(int *cnt, int target) {\n        return cnt[0] <= target && cnt[1] <= target && cnt[2] <= target && cnt[3] <= target;\n    }\n    int balancedString(string s) {\n        int n = s.size(), m = n / 4, cnt[4] = {0};\n        for (auto &c : s) cnt[id(c)] += 1;\n        if (isBalance(cnt, m)) return 0;\n        int ans = 0x3f3f3f3f;\n        for (int l = 0, r = 0; r < n; r++) {\n            cnt[id(s[r])]--;\n            while (l < r && isBalance(cnt, m)) {\n                cnt[id(s[l])]++;\n                if (isBalance(cnt, m)) l++;\n                else { cnt[id(s[l])]--; break; }\n            }\n            if (isBalance(cnt, m)) ans = min(ans, r - l + 1);\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-13"}),"\n",(0,c.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a348ms"}),"\n",(0,c.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.4MB"}),"\n",(0,c.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,c.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def balancedString(self, s: str) -> int:\n        n = len(s)\n        m = int(n/4)\n        cnt = [0] * 4\n\n        def getId(c: str) -> int:\n            match c:\n                case 'Q': return 0\n                case 'W': return 1\n                case 'E': return 2\n                case 'R': return 3\n            return -1\n\n        def isBalance() -> bool:\n            nonlocal m, cnt\n            return cnt[0] <= m and cnt[1] <= m and cnt[2] <= m and cnt[3] <= m\n\n        for c in s:\n            cnt[getId(c)] += 1\n        if isBalance():\n            return 0\n        ans = 0x3f3f3f3f\n        l = 0\n        for r in range(0, n):\n            cnt[getId(s[r])] -= 1\n            while l < r and isBalance():\n                cnt[getId(s[l])] += 1\n                if isBalance():\n                    l += 1\n                else:\n                    cnt[getId(s[l])] -= 1\n                    break\n            if isBalance():\n                ans = min(ans, r - l+1)\n        return ans\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-02-13"}),"\n",(0,c.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,c.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.5MB"}),"\n",(0,c.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,c.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn balanced_string(s: String) -> i32 {\n        let s = s.chars().collect::<Vec<char>>();\n        let n = s.len();\n        let m = (n / 4) as i32;\n        let mut cnt = [0; 4];\n        let id = |c| match c {\n            'Q' => 0,\n            'W' => 1,\n            'E' => 2,\n            'R' => 3,\n            _ => 0,\n        };\n        let is_balance = |cnt: &[i32; 4]| cnt[0] <= m && cnt[1] <= m && cnt[2] <= m && cnt[3] <= m;\n        for c in s.iter() {\n            cnt[id(*c)] += 1;\n        }\n        if is_balance(&cnt) {\n            0\n        } else {\n            let mut ans = 0x3f3f3f3f;\n            let mut l = 0;\n            for r in 0..n {\n                cnt[id(s[r])] -= 1;\n                while l < r && is_balance(&cnt) {\n                    cnt[id(s[l])] += 1;\n                    if is_balance(&cnt) {\n                        l += 1;\n                    } else {\n                        cnt[id(s[l])] -= 1;\n                        break;\n                    }\n                }\n                if is_balance(&cnt) {\n                    ans = ans.min(r - l + 1);\n                }\n            }\n            ans as i32\n        }\n    }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>i});var c=t(30758);const s={},l=c.createContext(s);function r(n){const e=c.useContext(l);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),c.createElement(l.Provider,{value:e},n.children)}}}]);