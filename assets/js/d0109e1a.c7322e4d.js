"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[25624],{66395:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var t=i(86070),r=i(25710);const s={},l="1851.\u5305\u542b\u6bcf\u4e2a\u67e5\u8be2\u7684\u6700\u5c0f\u533a\u95f4",d={id:"leetcode/1801-1900/\u5305\u542b\u6bcf\u4e2a\u67e5\u8be2\u7684\u6700\u5c0f\u533a\u95f4",title:"1851.\u5305\u542b\u6bcf\u4e2a\u67e5\u8be2\u7684\u6700\u5c0f\u533a\u95f4",description:"\u94fe\u63a5\uff1a1851.\u5305\u542b\u6bcf\u4e2a\u67e5\u8be2\u7684\u6700\u5c0f\u533a\u95f4",source:"@site/docs/leetcode/1801-1900/1851.\u5305\u542b\u6bcf\u4e2a\u67e5\u8be2\u7684\u6700\u5c0f\u533a\u95f4.md",sourceDirName:"leetcode/1801-1900",slug:"/leetcode/1801-1900/\u5305\u542b\u6bcf\u4e2a\u67e5\u8be2\u7684\u6700\u5c0f\u533a\u95f4",permalink:"/docs/leetcode/1801-1900/\u5305\u542b\u6bcf\u4e2a\u67e5\u8be2\u7684\u6700\u5c0f\u533a\u95f4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1851,frontMatter:{},sidebar:"journal",previous:{title:"1838.\u6700\u9ad8\u9891\u5143\u7d20\u7684\u9891\u6570",permalink:"/docs/leetcode/1801-1900/\u6700\u9ad8\u9891\u5143\u7d20\u7684\u9891\u6570"},next:{title:"1856.\u5b50\u6570\u7ec4\u6700\u5c0f\u4e58\u79ef\u7684\u6700\u5927\u503c",permalink:"/docs/leetcode/1801-1900/\u5b50\u6570\u7ec4\u6700\u5c0f\u4e58\u79ef\u7684\u6700\u5927\u503c"}},c={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"1851\u5305\u542b\u6bcf\u4e2a\u67e5\u8be2\u7684\u6700\u5c0f\u533a\u95f4",children:"1851.\u5305\u542b\u6bcf\u4e2a\u67e5\u8be2\u7684\u6700\u5c0f\u533a\u95f4"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/minimum-interval-to-include-each-query",children:"1851.\u5305\u542b\u6bcf\u4e2a\u67e5\u8be2\u7684\u6700\u5c0f\u533a\u95f4"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u6392\u5e8f\u3001\u626b\u63cf\u7ebf\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e8c\u7ef4\u6574\u6570\u6570\u7ec4 intervals \uff0c\u5176\u4e2d intervals[i] = [lefti, righti] \u8868\u793a\u7b2c i \u4e2a\u533a\u95f4\u5f00\u59cb\u4e8e lefti \u3001\u7ed3\u675f\u4e8e righti\uff08\u5305\u542b\u4e24\u4fa7\u53d6\u503c\uff0c\u95ed\u533a\u95f4\uff09\u3002\u533a\u95f4\u7684 \u957f\u5ea6 \u5b9a\u4e49\u4e3a\u533a\u95f4\u4e2d\u5305\u542b\u7684\u6574\u6570\u6570\u76ee\uff0c\u66f4\u6b63\u5f0f\u5730\u8868\u8fbe\u662f righti - lefti + 1 \u3002\u518d\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 queries \u3002\u7b2c j \u4e2a\u67e5\u8be2\u7684\u7b54\u6848\u662f\u6ee1\u8db3\xa0lefti <= queries[j] <= righti \u7684 \u957f\u5ea6\u6700\u5c0f\u533a\u95f4 i \u7684\u957f\u5ea6 \u3002\u5982\u679c\u4e0d\u5b58\u5728\u8fd9\u6837\u7684\u533a\u95f4\uff0c\u90a3\u4e48\u7b54\u6848\u662f -1 \u3002\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\u5bf9\u5e94\u67e5\u8be2\u7684\u6240\u6709\u7b54\u6848\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-18"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a440ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a106.5MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u7528\u5806\u8bb0\u5f55\u533a\u95f4\u6700\u503c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"#define SORT(list, fn) sort(list.begin(), list.end(), [&](auto &v1, auto &v2){ fn });\nclass Solution {\npublic:\n    vector<int> minInterval(vector<vector<int>>& intervals, vector<int>& queries) {\n        vector<int> res(queries.size(), -1);\n        SORT(intervals, {\n            return v1[0] != v2[0] ? v1[0] < v2[0] : v1[1] < v2[1];\n        });\n        vector<int> idxs;\n        for (int i = 0; i < queries.size(); i++) idxs.push_back(i);\n        SORT(idxs, {\n            return queries[v1] < queries[v2];\n        });\n        auto cmp = [&](int i1, int i2) {\n            int n1 = intervals[i1][1] - intervals[i1][0] + 1,\n                n2 = intervals[i2][1] - intervals[i2][0] + 1;\n            return n2 < n1;\n        };\n        priority_queue<int, vector<int>, decltype(cmp)> q(cmp);\n        int iidx = 0;\n        for (auto &idx : idxs) {\n            int cur = queries[idx];\n            while (iidx < intervals.size() && intervals[iidx][0] <= cur) {\n                q.push(iidx++);\n            }\n            while (q.size() && intervals[q.top()][1] < cur) {\n                q.pop();\n            }\n            if (q.size()) {\n                auto &interval = intervals[q.top()];\n                res[idx] = interval[1] - interval[0] + 1;\n            }\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-18"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a944ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a64.9MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def minInterval(self, intervals: List[List[int]], queries: List[int]) -> List[int]:\n        class CmpNode:\n            def __init__(self, idx: int) -> None:\n                self.idx = idx\n\n            def __lt__(self, o: 'CmpNode') -> bool:\n                n1 = intervals[self.idx][1] - intervals[self.idx][0] + 1\n                n2 = intervals[o.idx][1] - intervals[o.idx][0] + 1\n                return n1 < n2\n        res = [-1 for _ in range(len(queries))]\n        intervals.sort(key=lambda v: v[0])\n        idxs = [i for i in range(len(queries))]\n        idxs.sort(key=lambda v: queries[v])\n        q: List[CmpNode] = []\n        iidx = 0\n        for idx in idxs:\n            cur = queries[idx]\n            while iidx < len(intervals) and intervals[iidx][0] <= cur:\n                heappush(q, CmpNode(iidx))\n                iidx += 1\n            while len(q) and intervals[q[0].idx][1] < cur:\n                heappop(q)\n            if len(q):\n                interval = intervals[q[0].idx]\n                res[idx] = interval[1] - interval[0] + 1\n        return res\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-18"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a12.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"#[derive(Clone, PartialEq, Eq, Ord)]\nstruct Node<'a> {\n    idx: usize,\n    intervals: &'a Vec<Vec<i32>>,\n}\nimpl<'a> Node<'a> {\n    fn new(idx: usize, intervals: &'a Vec<Vec<i32>>) -> Self {\n        Node { idx, intervals }\n    }\n    fn len(&self) -> i32 {\n        self.intervals[self.idx][1] - self.intervals[self.idx][0] + 1\n    }\n}\nimpl PartialOrd for Node<'_> {\n    fn partial_cmp(&self, o: &Self) -> Option<std::cmp::Ordering> {\n        o.len().partial_cmp(&self.len())\n    }\n}\n\nimpl Solution {\n    pub fn min_interval(mut intervals: Vec<Vec<i32>>, queries: Vec<i32>) -> Vec<i32> {\n        let mut res = vec![-1; queries.len()];\n        intervals.sort_by_key(|v| v[0]);\n        let mut idxs = vec![0; queries.len()]\n            .into_iter()\n            .enumerate()\n            .map(|v| v.0)\n            .collect::<Vec<_>>();\n        idxs.sort_by_key(|i| queries[*i]);\n        let mut q = std::collections::BinaryHeap::<Node>::new();\n        let mut iidx = 0;\n        for idx in idxs {\n            let cur = queries[idx];\n            while iidx < intervals.len() && intervals[iidx][0] <= cur {\n                q.push(Node::new(iidx, &intervals));\n                iidx += 1;\n            }\n            while !q.is_empty() && intervals[q.peek().unwrap().idx][1] < cur {\n                q.pop();\n            }\n            if !q.is_empty() {\n                res[idx] = q.peek().unwrap().len();\n            }\n        }\n        res\n    }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>d});var t=i(30758);const r={},s=t.createContext(r);function l(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);