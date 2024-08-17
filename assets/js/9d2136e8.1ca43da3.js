"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[34715],{12972:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var t=i(86070),s=i(25710);const r={},l="2437.\u6709\u6548\u65f6\u95f4\u7684\u6570\u76ee",c={id:"leetcode/2401-2500/\u6709\u6548\u65f6\u95f4\u7684\u6570\u76ee",title:"2437.\u6709\u6548\u65f6\u95f4\u7684\u6570\u76ee",description:"\u94fe\u63a5\uff1a2437.\u6709\u6548\u65f6\u95f4\u7684\u6570\u76ee",source:"@site/docs/leetcode/2401-2500/2437.\u6709\u6548\u65f6\u95f4\u7684\u6570\u76ee.md",sourceDirName:"leetcode/2401-2500",slug:"/leetcode/2401-2500/\u6709\u6548\u65f6\u95f4\u7684\u6570\u76ee",permalink:"/docs/leetcode/2401-2500/\u6709\u6548\u65f6\u95f4\u7684\u6570\u76ee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2437,frontMatter:{},sidebar:"journal",previous:{title:"2432.\u5904\u7406\u7528\u65f6\u6700\u957f\u7684\u90a3\u4e2a\u4efb\u52a1\u7684\u5458\u5de5",permalink:"/docs/leetcode/2401-2500/\u5904\u7406\u7528\u65f6\u6700\u957f\u7684\u90a3\u4e2a\u4efb\u52a1\u7684\u5458\u5de5"},next:{title:"2441.\u4e0e\u5bf9\u5e94\u8d1f\u6570\u540c\u65f6\u5b58\u5728\u7684\u6700\u5927\u6b63\u6574\u6570",permalink:"/docs/leetcode/2401-2500/\u4e0e\u5bf9\u5e94\u8d1f\u6570\u540c\u65f6\u5b58\u5728\u7684\u6700\u5927\u6b63\u6574\u6570"}},d={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function m(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"2437\u6709\u6548\u65f6\u95f4\u7684\u6570\u76ee",children:"2437.\u6709\u6548\u65f6\u95f4\u7684\u6570\u76ee"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/number-of-valid-clock-times",children:"2437.\u6709\u6548\u65f6\u95f4\u7684\u6570\u76ee"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u679a\u4e3e",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u4e00\u4e2a\u6574\u6570 answer \uff0c\u5c06\u6bcf\u4e00\u4e2a ? \u90fd\u7528 0 \u5230 9 \u4e2d\u4e00\u4e2a\u6570\u5b57\u66ff\u6362\u540e\uff0c\u53ef\u4ee5\u5f97\u5230\u7684\u6709\u6548\u65f6\u95f4\u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-09"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.9MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u679a\u4e3e\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int countTime(string time) {\n        vector<int> idxs;\n        for (int i = 0; i < time.size(); i++) {\n            if (time[i] == '?') idxs.push_back(i);\n        }\n        int res = 0;\n        if (idxs.empty()) {\n            return check(time) ? 1 : 0;\n        }\n        function<void(int, string)> dfs = [&](int idx, string time) {\n            if (idx == idxs.size()) {\n                if (check(time)) res++;\n                return;\n            }\n            for (int i = 0; i <= 9; i++) {\n                time[idxs[idx]] = i + '0';\n                dfs(idx + 1, time);\n            }\n        };\n        dfs(0, time);\n        return res;\n    }\n    bool check(string &time) {\n        int h = (time[0] - '0') * 10 + (time[1] - '0'), \n            m = (time[3] - '0') * 10 + (time[4] - '0'); \n        if (h >= 24 || m >= 60) return false;\n        return true;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-09"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.9MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def countTime(self, time: str) -> int:\n        time = list(time)\n        def check(time: str) -> bool:\n            h = (ord(time[0]) - ord('0')) * 10 + ord(time[1]) - ord('0')\n            m = (ord(time[3]) - ord('0')) * 10 + ord(time[4]) - ord('0')\n            return h < 24 and m < 60\n        idxs = []\n        for i in range(len(time)):\n            if time[i] == '?':\n                idxs.append(i)\n        if len(idxs) == 0:\n            return 1 if check(time) else 0\n        res = 0\n\n        def dfs(idx: int, time: List[str]):\n            nonlocal res\n            if idx == len(idxs):\n                if check(time):\n                    res += 1\n            else:\n                for i in range(0, 10):\n                    time[idxs[idx]] = chr(i + ord('0'))\n                    dfs(idx+1, time)\n        dfs(0, time)\n        return res\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-09"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a1.9MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"fn str_to_vec(s: &String) -> Vec<char> {\n    s.chars().collect()\n}\nimpl Solution {\n    pub fn count_time(time: String) -> i32 {\n        let time = str_to_vec(&time);\n        let mut idxs = vec![];\n        for i in 0..time.len() {\n            if time[i] == '?' {\n                idxs.push(i);\n            }\n        }\n        if idxs.is_empty() {\n            if Solution::check(&time) {\n                1\n            } else {\n                0\n            }\n        } else {\n            let mut res = 0;\n            Solution::dfs(&mut res, &idxs, 0, time);\n            res\n        }\n    }\n    fn check(time: &Vec<char>) -> bool {\n        let h = (time[0] as u8 - b'0') * 10 + (time[1] as u8 - b'0');\n        let m = (time[3] as u8 - b'0') * 10 + (time[4] as u8 - b'0');\n        h < 24 && m < 60\n    }\n    fn dfs(res: &mut i32, idxs: &Vec<usize>, idx: usize, mut time: Vec<char>) {\n        if idx == idxs.len() {\n            if Solution::check(&time) {\n                *res += 1;\n            }\n        } else {\n            for i in 0..10 {\n                time[idxs[idx]] = (i + b'0') as char;\n                Solution::dfs(res, idxs, idx + 1, time.clone());\n            }\n        }\n    }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(m,{...n})}):m(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var t=i(30758);const s={},r=t.createContext(s);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);