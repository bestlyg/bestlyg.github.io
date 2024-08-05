"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[99255],{55304:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=i(86070),t=i(25710);const r={},o="1828.\u7edf\u8ba1\u4e00\u4e2a\u5706\u4e2d\u70b9\u7684\u6570\u76ee",c={id:"leetcode/1801-1900/\u7edf\u8ba1\u4e00\u4e2a\u5706\u4e2d\u70b9\u7684\u6570\u76ee",title:"1828.\u7edf\u8ba1\u4e00\u4e2a\u5706\u4e2d\u70b9\u7684\u6570\u76ee",description:"\u94fe\u63a5\uff1a1828.\u7edf\u8ba1\u4e00\u4e2a\u5706\u4e2d\u70b9\u7684\u6570\u76ee",source:"@site/docs/leetcode/1801-1900/1828.\u7edf\u8ba1\u4e00\u4e2a\u5706\u4e2d\u70b9\u7684\u6570\u76ee.md",sourceDirName:"leetcode/1801-1900",slug:"/leetcode/1801-1900/\u7edf\u8ba1\u4e00\u4e2a\u5706\u4e2d\u70b9\u7684\u6570\u76ee",permalink:"/web/site/docs/leetcode/1801-1900/\u7edf\u8ba1\u4e00\u4e2a\u5706\u4e2d\u70b9\u7684\u6570\u76ee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1828,frontMatter:{},sidebar:"journal",previous:{title:"1827.\u6700\u5c11\u64cd\u4f5c\u4f7f\u6570\u7ec4\u9012\u589e",permalink:"/web/site/docs/leetcode/1801-1900/\u6700\u5c11\u64cd\u4f5c\u4f7f\u6570\u7ec4\u9012\u589e"},next:{title:"1832.\u5224\u65ad\u53e5\u5b50\u662f\u5426\u4e3a\u5168\u5b57\u6bcd\u53e5",permalink:"/web/site/docs/leetcode/1801-1900/\u5224\u65ad\u53e5\u5b50\u662f\u5426\u4e3a\u5168\u5b57\u6bcd\u53e5"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1828\u7edf\u8ba1\u4e00\u4e2a\u5706\u4e2d\u70b9\u7684\u6570\u76ee",children:"1828.\u7edf\u8ba1\u4e00\u4e2a\u5706\u4e2d\u70b9\u7684\u6570\u76ee"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/queries-on-number-of-points-inside-a-circle",children:"1828.\u7edf\u8ba1\u4e00\u4e2a\u5706\u4e2d\u70b9\u7684\u6570\u76ee"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u51e0\u4f55\u3001\u6570\u7ec4\u3001\u6570\u5b66",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4 answer \uff0c\u5176\u4e2d answer[j]\u662f\u7b2c j \u4e2a\u67e5\u8be2\u7684\u7b54\u6848\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-24"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.8MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> countPoints(vector<vector<int>>& points, vector<vector<int>>& queries) {\n        auto d = [&](vector<int> &a, vector<int> &b) {\n            return pow(abs(a[0] - b[0]), 2) + pow(abs(a[1] - b[1]), 2);\n        };\n        vector<int> ans(queries.size(), 0);\n        for (int i = 0; i < queries.size(); i++) {\n            for (auto &p : points) {\n                if (d(p, queries[i]) <= pow(queries[i][2], 2)) ans[i]++;\n            }\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-24"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a2832ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.2MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def countPoints(self, points: List[List[int]], queries: List[List[int]]) -> List[int]:\n        ans = [0] * len(queries)\n        def d(a, b): return pow(abs(a[0] - b[0]), 2) + pow(abs(a[1] - b[1]), 2)\n        for i in range(0, len(queries)):\n            for p in points:\n                if d(p, queries[i]) <= pow(queries[i][2], 2):\n                    ans[i] += 1\n        return ans\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-24"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a20ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.2MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn count_points(points: Vec<Vec<i32>>, queries: Vec<Vec<i32>>) -> Vec<i32> {\n        let d =\n            |a: &Vec<i32>, b: &Vec<i32>| (a[0] - b[0]).abs().pow(2) + (a[1] - b[1]).abs().pow(2);\n        let mut ans = vec![0; queries.len()];\n        for i in 0..queries.len() {\n            for p in points.iter() {\n                if d(&queries[i], p) <= queries[i][2].pow(2) {\n                    ans[i] += 1;\n                }\n            }\n        }\n        ans\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},25710:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var s=i(30758);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);