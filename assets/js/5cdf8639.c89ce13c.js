"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[82259],{25669:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var d=e(86070),t=e(25710);const l={},r="1335.\u5de5\u4f5c\u8ba1\u5212\u7684\u6700\u4f4e\u96be\u5ea6",c={id:"leetcode/1301-1400/\u5de5\u4f5c\u8ba1\u5212\u7684\u6700\u4f4e\u96be\u5ea6",title:"1335.\u5de5\u4f5c\u8ba1\u5212\u7684\u6700\u4f4e\u96be\u5ea6",description:"\u94fe\u63a5\uff1a1335.\u5de5\u4f5c\u8ba1\u5212\u7684\u6700\u4f4e\u96be\u5ea6",source:"@site/docs/leetcode/1301-1400/1335.\u5de5\u4f5c\u8ba1\u5212\u7684\u6700\u4f4e\u96be\u5ea6.md",sourceDirName:"leetcode/1301-1400",slug:"/leetcode/1301-1400/\u5de5\u4f5c\u8ba1\u5212\u7684\u6700\u4f4e\u96be\u5ea6",permalink:"/docs/leetcode/1301-1400/\u5de5\u4f5c\u8ba1\u5212\u7684\u6700\u4f4e\u96be\u5ea6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1335,frontMatter:{},sidebar:"journal",previous:{title:"1334.\u9608\u503c\u8ddd\u79bb\u5185\u90bb\u5c45\u6700\u5c11\u7684\u57ce\u5e02",permalink:"/docs/leetcode/1301-1400/\u9608\u503c\u8ddd\u79bb\u5185\u90bb\u5c45\u6700\u5c11\u7684\u57ce\u5e02"},next:{title:"1337.\u77e9\u9635\u4e2d\u6218\u6597\u529b\u6700\u5f31\u7684K\u884c",permalink:"/docs/leetcode/1301-1400/\u77e9\u9635\u4e2d\u6218\u6597\u529b\u6700\u5f31\u7684K\u884c"}},s={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function u(n){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.h1,{id:"1335\u5de5\u4f5c\u8ba1\u5212\u7684\u6700\u4f4e\u96be\u5ea6",children:"1335.\u5de5\u4f5c\u8ba1\u5212\u7684\u6700\u4f4e\u96be\u5ea6"}),"\n",(0,d.jsxs)(i.blockquote,{children:["\n",(0,d.jsxs)(i.p,{children:["\u94fe\u63a5\uff1a",(0,d.jsx)(i.a,{href:"https://leetcode.cn/problems/minimum-difficulty-of-a-job-schedule",children:"1335.\u5de5\u4f5c\u8ba1\u5212\u7684\u6700\u4f4e\u96be\u5ea6"}),(0,d.jsx)(i.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,d.jsx)(i.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,d.jsx)(i.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u6574\u4e2a\u5de5\u4f5c\u8ba1\u5212\u7684 \u6700\u5c0f\u96be\u5ea6 \u3002\u5982\u679c\u65e0\u6cd5\u5236\u5b9a\u5de5\u4f5c\u8ba1\u5212\uff0c\u5219\u8fd4\u56de -1 \u3002"]}),"\n"]}),"\n",(0,d.jsx)(i.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-16"}),"\n",(0,d.jsx)(i.li,{children:"\u6267\u884c\u7528\u65f6\uff1a52ms"}),"\n",(0,d.jsx)(i.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.4MB"}),"\n",(0,d.jsx)(i.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,d.jsxs)(i.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i][j]\u8868\u793a\u53ea\u6709i\u5929\u65f6\uff0c\u53ea\u6709j\u4e2ajob\u65f6\u7684\u6700\u5c0f\u96be\u5ea6\u3002"]}),"\n"]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minDifficulty(vector<int>& jobDifficulty, int d) {\n        int n = jobDifficulty.size(), num = 0;\n        if (n < d) return -1;\n        vector<vector<int>> dp(d, vector<int>(n, INT_MAX));\n        for (int i = 0; i < n; i++) dp[0][i] = num = max(num, jobDifficulty[i]);\n        for (int dd = 1; dd < d; dd++) {\n            for (int i = dd; i < n; i++) {\n                num = 0;\n                for (int j = i; j >= dd; j--) {\n                    num = max(num, jobDifficulty[j]);\n                    dp[dd][i] = min(dp[dd][i], dp[dd - 1][j - 1] + num);\n                }\n            }\n        }\n        return dp[d - 1][n - 1];\n    }\n};\n"})}),"\n",(0,d.jsx)(i.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-16"}),"\n",(0,d.jsx)(i.li,{children:"\u6267\u884c\u7528\u65f6\uff1a892ms"}),"\n",(0,d.jsx)(i.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.2MB"}),"\n",(0,d.jsx)(i.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,d.jsxs)(i.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-python",children:"class Solution:\n    def minDifficulty(self, jobDifficulty: List[int], d: int) -> int:\n        n = len(jobDifficulty)\n        if n < d:\n            return -1\n        num = 0\n        dp = [[inf for _ in range(n)] for _ in range(d)]\n        for i in range(n):\n            dp[0][i] = num = max(num, jobDifficulty[i])\n        for dd in range(1, d):\n            for i in range(dd, n):\n                num = 0\n                for j in range(i, dd - 1, -1):\n                    num = max(num, jobDifficulty[j])\n                    dp[dd][i] = min(dp[dd][i], dp[dd - 1][j - 1] + num)\n        return dp[d - 1][n - 1]\n"})}),"\n",(0,d.jsx)(i.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-16"}),"\n",(0,d.jsx)(i.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,d.jsx)(i.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,d.jsx)(i.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,d.jsxs)(i.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-rust",children:"impl Solution {\n    pub fn min_difficulty(job_difficulty: Vec<i32>, d: i32) -> i32 {\n        let d = d as usize;\n        let n = job_difficulty.len();\n        if n < d {\n            -1\n        } else {\n            let mut num = 0;\n            let mut dp = vec![vec![i32::MAX; n]; d];\n            for i in 0..n {\n                num = num.max(job_difficulty[i]);\n                dp[0][i] = num;\n            }\n            for dd in 1..d {\n                for i in dd..n {\n                    num = 0;\n                    for j in (dd..=i).rev() {\n                        num = num.max(job_difficulty[j]);\n                        dp[dd][i] = dp[dd][i].min(dp[dd - 1][j - 1] + num);\n                    }\n                }\n            }\n            dp[d - 1][n - 1]\n        }\n    }\n}\n\n"})})]})}function f(n={}){const{wrapper:i}={...(0,t.R)(),...n.components};return i?(0,d.jsx)(i,{...n,children:(0,d.jsx)(u,{...n})}):u(n)}},25710:(n,i,e)=>{e.d(i,{R:()=>r,x:()=>c});var d=e(30758);const t={},l=d.createContext(t);function r(n){const i=d.useContext(l);return d.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),d.createElement(l.Provider,{value:i},n.children)}}}]);