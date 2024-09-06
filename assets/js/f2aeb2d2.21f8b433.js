"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[76123],{13368:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=s(86070),l=s(25710);const r={},t="1125.\u6700\u5c0f\u7684\u5fc5\u8981\u56e2\u961f",d={id:"leetcode/1101-1200/\u6700\u5c0f\u7684\u5fc5\u8981\u56e2\u961f",title:"1125.\u6700\u5c0f\u7684\u5fc5\u8981\u56e2\u961f",description:"\u94fe\u63a5\uff1a1125.\u6700\u5c0f\u7684\u5fc5\u8981\u56e2\u961f",source:"@site/docs/leetcode/1101-1200/1125.\u6700\u5c0f\u7684\u5fc5\u8981\u56e2\u961f.md",sourceDirName:"leetcode/1101-1200",slug:"/leetcode/1101-1200/\u6700\u5c0f\u7684\u5fc5\u8981\u56e2\u961f",permalink:"/docs/leetcode/1101-1200/\u6700\u5c0f\u7684\u5fc5\u8981\u56e2\u961f",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1125,frontMatter:{},sidebar:"journal",previous:{title:"1124.\u8868\u73b0\u826f\u597d\u7684\u6700\u957f\u65f6\u95f4\u6bb5",permalink:"/docs/leetcode/1101-1200/\u8868\u73b0\u826f\u597d\u7684\u6700\u957f\u65f6\u95f4\u6bb5"},next:{title:"1128.\u7b49\u4ef7\u591a\u7c73\u8bfa\u9aa8\u724c\u5bf9\u7684\u6570\u91cf",permalink:"/docs/leetcode/1101-1200/\u7b49\u4ef7\u591a\u7c73\u8bfa\u9aa8\u724c\u5bf9\u7684\u6570\u91cf"}},p={},c=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"1125\u6700\u5c0f\u7684\u5fc5\u8981\u56e2\u961f",children:"1125.\u6700\u5c0f\u7684\u5fc5\u8981\u56e2\u961f"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/smallest-sufficient-team",children:"1125.\u6700\u5c0f\u7684\u5fc5\u8981\u56e2\u961f"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u72b6\u6001\u538b\u7f29",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de \u4efb\u4e00 \u89c4\u6a21\u6700\u5c0f\u7684\u5fc5\u8981\u56e2\u961f\uff0c\u56e2\u961f\u6210\u5458\u7528\u4eba\u5458\u7f16\u53f7\u8868\u793a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-08"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a52ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19.1MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> smallestSufficientTeam(vector<string>& req_skills, vector<vector<string>>& people) {\n        int n = req_skills.size(), m = people.size(), nmask = (1 << n) - 1;\n        unordered_map<string, int> keym;\n        for (int i = 0; i < n; i++) keym[req_skills[i]] = i;\n        vector<vector<int>> dp(1 << n);\n        for (int i = 0; i < m; i++) {\n            int mask = 0;\n            for (auto &key : people[i]) mask |= 1 << keym[key];\n            for (int pmask = 0; pmask <= nmask; pmask++) {\n                int merged = mask | pmask;\n                if (merged == pmask || \n                    pmask && dp[pmask].empty() || \n                    dp[merged].size() && dp[merged].size() <= dp[pmask].size() + 1) continue;\n                dp[merged] = dp[pmask];\n                dp[merged].push_back(i);\n            }\n        }\n        return dp[nmask];\n    }\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-08"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a652ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a21.4MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:" class Solution:\n    def smallestSufficientTeam(self, req_skills: List[str], people: List[List[str]]) -> List[int]:\n        n, m = len(req_skills), len(people)\n        nmask = (1 << n) - 1\n        keym = {}\n        for i in range(n):\n            keym[req_skills[i]] = i\n        dp = [list() for _ in range(1 << n)]\n        for i in range(m):\n            mask = 0\n            for key in people[i]:\n                mask |= 1 << keym[key]\n            for pmask in range(nmask + 1):\n                merged = mask | pmask\n                if merged == pmask or pmask and len(dp[pmask]) == 0 or len(dp[merged]) and len(dp[merged]) <= len(dp[pmask]) + 1:\n                    continue\n                dp[merged] = dp[pmask] + [i]\n        return dp[nmask]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-08"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.7MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn smallest_sufficient_team(req_skills: Vec<String>, people: Vec<Vec<String>>) -> Vec<i32> {\n        use std::collections::HashMap;\n        let (n, m) = (req_skills.len(), people.len());\n        let nmask = (1 << n) - 1;\n        let mut keym = HashMap::<String, usize>::new();\n        let mut i = 0;\n        for key in req_skills {\n            keym.insert(key, i);\n            i += 1;\n        }\n        let mut dp: Vec<Vec<i32>> = vec![vec![]; 1 << n];\n        for i in 0..m {\n            let mut mask = 0;\n            for key in people[i].iter() {\n                mask |= 1 << keym.get(key).unwrap();\n            }\n            for pmask in 0..=nmask {\n                let merged = mask | pmask;\n                if merged == pmask\n                    || pmask > 0 && dp[pmask].is_empty()\n                    || !dp[merged].is_empty() && dp[merged].len() <= dp[pmask].len() + 1\n                {\n                    continue;\n                }\n                dp[merged] = dp[pmask].clone();\n                dp[merged].push(i as i32);\n            }\n        }\n        dp[nmask].clone()\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},25710:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var i=s(30758);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);