"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[31722],{26268:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=s(86070),r=s(25710);const t={},c="1626.\u65e0\u77db\u76fe\u7684\u6700\u4f73\u7403\u961f",l={id:"leetcode/1601-1700/\u65e0\u77db\u76fe\u7684\u6700\u4f73\u7403\u961f",title:"1626.\u65e0\u77db\u76fe\u7684\u6700\u4f73\u7403\u961f",description:"\u94fe\u63a5\uff1a1626.\u65e0\u77db\u76fe\u7684\u6700\u4f73\u7403\u961f",source:"@site/docs/leetcode/1601-1700/1626.\u65e0\u77db\u76fe\u7684\u6700\u4f73\u7403\u961f.md",sourceDirName:"leetcode/1601-1700",slug:"/leetcode/1601-1700/\u65e0\u77db\u76fe\u7684\u6700\u4f73\u7403\u961f",permalink:"/web/site/docs/leetcode/1601-1700/\u65e0\u77db\u76fe\u7684\u6700\u4f73\u7403\u961f",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1626,frontMatter:{},sidebar:"journal",previous:{title:"1625.\u6267\u884c\u64cd\u4f5c\u540e\u5b57\u5178\u5e8f\u6700\u5c0f\u7684\u5b57\u7b26\u4e32",permalink:"/web/site/docs/leetcode/1601-1700/\u6267\u884c\u64cd\u4f5c\u540e\u5b57\u5178\u5e8f\u6700\u5c0f\u7684\u5b57\u7b26\u4e32"},next:{title:"1629.\u6309\u952e\u6301\u7eed\u65f6\u95f4\u6700\u957f\u7684\u952e",permalink:"/web/site/docs/leetcode/1601-1700/\u6309\u952e\u6301\u7eed\u65f6\u95f4\u6700\u957f\u7684\u952e"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"1626\u65e0\u77db\u76fe\u7684\u6700\u4f73\u7403\u961f",children:"1626.\u65e0\u77db\u76fe\u7684\u6700\u4f73\u7403\u961f"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/best-team-with-no-conflicts",children:"1626.\u65e0\u77db\u76fe\u7684\u6700\u4f73\u7403\u961f"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u6392\u5e8f",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e24\u4e2a\u5217\u8868 scores \u548c ages\uff0c\u5176\u4e2d\u6bcf\u7ec4 scores[i] \u548c ages[i] \u8868\u793a\u7b2c i \u540d\u7403\u5458\u7684\u5206\u6570\u548c\u5e74\u9f84\u3002\u8bf7\u4f60\u8fd4\u56de \u6240\u6709\u53ef\u80fd\u7684\u65e0\u77db\u76fe\u7403\u961f\u4e2d\u5f97\u5206\u6700\u9ad8\u90a3\u652f\u7684\u5206\u6570 \u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-22"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a452ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a18.4MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i]\u8868\u793a\u4ee5i\u4e3a\u7ed3\u5c3e\u65f6\u7684\u6700\u5927\u5206\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int bestTeamScore(vector<int>& scores, vector<int>& ages) {\n        int n = scores.size(), res = 0;\n        vector<int> idx(n), dp(n, 0);\n        for (int i = 0; i < n; i++) idx[i] = i;\n        sort(idx.begin(), idx.end(), [&](auto &a, auto &b){\n            return ages[a] != ages[b] ? ages[a] < ages[b] : scores[a] < scores[b];\n        });\n        for (int i = 0; i < n; i++) {\n            for (int j = i - 1; j >= 0; j--) {\n                if (ages[idx[i]] == ages[idx[j]] || ages[idx[i]] > ages[idx[j]] && scores[idx[i]] >= scores[idx[j]])\n                    dp[i] = max(dp[i], dp[j]);\n            }\n            dp[i] += scores[idx[i]];\n            res = max(res, dp[i]);\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-22"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a2676ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.1MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def bestTeamScore(self, scores: List[int], ages: List[int]) -> int:\n        n, res = len(scores), 0\n        l = sorted(zip(ages, scores))\n        dp = [0] * n\n        for i in range(n):\n            for j in range(i-1, -1, -1):\n                if l[i][0] == l[j][0] or (l[i][0] > l[j][0] and l[i][1] >= l[j][1]):\n                    dp[i] = max(dp[i], dp[j])\n            dp[i] += l[i][1]\n            res = max(res, dp[i])\n        return res\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-22"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a44ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn best_team_score(scores: Vec<i32>, ages: Vec<i32>) -> i32 {\n        let (n, mut res) = (scores.len(), 0);\n        let mut idx = (0..n).collect::<Vec<usize>>();\n        idx.sort_by(|a, b| {\n            if ages[*a] != ages[*b] {\n                ages[*a].cmp(&ages[*b])\n            } else {\n                scores[*a].cmp(&scores[*b])\n            }\n        });\n        let mut dp = vec![0; n];\n        for i in 0..n as i32 {\n            for j in ((0i32)..=(i - 1)).rev() {\n                let (i, j) = (i as usize, j as usize);\n                if ages[idx[i]] == ages[idx[j]]\n                    || ages[idx[i]] > ages[idx[j]] && scores[idx[i]] >= scores[idx[j]]\n                {\n                    dp[i] = dp[i].max(dp[j]);\n                }\n            }\n\n            dp[i as usize] += scores[idx[i as usize]];\n            res = res.max(dp[i as usize]);\n        }\n        res\n    }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},25710:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var i=s(30758);const r={},t=i.createContext(r);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);