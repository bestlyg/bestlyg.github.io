"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[29571],{23202:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=i(86070),t=i(31503);const l={},o="1105.\u586b\u5145\u4e66\u67b6",r={id:"leetcode/1101-1200/\u586b\u5145\u4e66\u67b6",title:"1105.\u586b\u5145\u4e66\u67b6",description:"\u94fe\u63a5\uff1a1105.\u586b\u5145\u4e66\u67b6",source:"@site/docs/leetcode/1101-1200/1105.\u586b\u5145\u4e66\u67b6.md",sourceDirName:"leetcode/1101-1200",slug:"/leetcode/1101-1200/\u586b\u5145\u4e66\u67b6",permalink:"/docs/leetcode/1101-1200/\u586b\u5145\u4e66\u67b6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1105,frontMatter:{},sidebar:"journal",previous:{title:"1104.\u4e8c\u53c9\u6811\u5bfb\u8def",permalink:"/docs/leetcode/1101-1200/\u4e8c\u53c9\u6811\u5bfb\u8def"},next:{title:"1106.\u89e3\u6790\u5e03\u5c14\u8868\u8fbe\u5f0f",permalink:"/docs/leetcode/1101-1200/\u89e3\u6790\u5e03\u5c14\u8868\u8fbe\u5f0f"}},c={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"1105\u586b\u5145\u4e66\u67b6",children:"1105.\u586b\u5145\u4e66\u67b6"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/filling-bookcase-shelves",children:"1105.\u586b\u5145\u4e66\u67b6"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6570\u7ec4 books \uff0c\u5176\u4e2d\xa0books[i] = [thicknessi, heighti]\xa0\u8868\u793a\u7b2c i \u672c\u4e66\u7684\u539a\u5ea6\u548c\u9ad8\u5ea6\u3002\u4f60\u4e5f\u4f1a\u5f97\u5230\u4e00\u4e2a\u6574\u6570 shelfWidth \u3002\u6bcf\u4e00\u5c42\u6240\u6446\u653e\u7684\u4e66\u7684\u6700\u5927\u9ad8\u5ea6\u5c31\u662f\u8fd9\u4e00\u5c42\u4e66\u67b6\u7684\u5c42\u9ad8\uff0c\u4e66\u67b6\u6574\u4f53\u7684\u9ad8\u5ea6\u4e3a\u5404\u5c42\u9ad8\u4e4b\u548c\u3002\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u5e03\u7f6e\u4e66\u67b6\uff0c\u8fd4\u56de\u4e66\u67b6\u6574\u4f53\u53ef\u80fd\u7684\u6700\u5c0f\u9ad8\u5ea6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-23"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i]\u8868\u793a\u4ee5i\u4e3a\u884c\u672b\u7684\u6700\u5927\u9ad8\u5ea6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minHeightShelves(vector<vector<int>>& books, int shelfWidth) {\n        int n = books.size();\n        vector<int> dp(n + 1, INT_MAX);\n        dp[0] = 0;\n        for (int i = 1; i <= n; i++) {\n            int sum = 0, h = 0;\n            for (int j = i - 1; j >= 0; j--) {\n                if (sum + books[j][0] > shelfWidth) break;\n                sum += books[j][0];\n                h = max(h, books[j][1]);\n                dp[i] = min(dp[i], dp[j] + h);\n            }\n        }\n        return dp[n];\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-23"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.3MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def minHeightShelves(self, books: List[List[int]], shelfWidth: int) -> int:\n        n = len(books)\n        dp = [inf] * (n + 1)\n        dp[0] = 0\n        for i in range(1, n+1):\n            sum = h = 0\n            for j in range(i-1, -1, -1):\n                if sum + books[j][0] > shelfWidth:\n                    break\n                sum += books[j][0]\n                h = max(h, books[j][1])\n                dp[i] = min(dp[i], dp[j]+h)\n        return dp[n]\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-23"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.3MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn min_height_shelves(books: Vec<Vec<i32>>, shelf_width: i32) -> i32 {\n        use std::cmp::{max, min};\n        let n = books.len();\n        let mut dp = vec![i32::MAX; n + 1];\n        dp[0] = 0;\n        for i in 1..=n {\n            let mut sum = 0;\n            let mut h = 0;\n            for j in (0..=i - 1).rev() {\n                if sum + books[j][0] > shelf_width {\n                    break;\n                }\n                sum += books[j][0];\n                h = max(h, books[j][1]);\n                dp[i] = min(dp[i], dp[j] + h);\n            }\n        }\n        dp[n]\n    }\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>r});var s=i(30758);const t={},l=s.createContext(t);function o(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);