"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[5645],{35130:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=i(86070),r=i(25710);const s={},c="2050.\u5e76\u884c\u8bfe\u7a0bIII",l={id:"leetcode/2001-2100/\u5e76\u884c\u8bfe\u7a0bIII",title:"2050.\u5e76\u884c\u8bfe\u7a0bIII",description:"\u94fe\u63a5\uff1a2050.\u5e76\u884c\u8bfe\u7a0bIII",source:"@site/docs/leetcode/2001-2100/2050.\u5e76\u884c\u8bfe\u7a0bIII.md",sourceDirName:"leetcode/2001-2100",slug:"/leetcode/2001-2100/\u5e76\u884c\u8bfe\u7a0bIII",permalink:"/docs/leetcode/2001-2100/\u5e76\u884c\u8bfe\u7a0bIII",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2050,frontMatter:{},sidebar:"journal",previous:{title:"2049.\u7edf\u8ba1\u6700\u9ad8\u5206\u7684\u8282\u70b9\u6570\u76ee",permalink:"/docs/leetcode/2001-2100/\u7edf\u8ba1\u6700\u9ad8\u5206\u7684\u8282\u70b9\u6570\u76ee"},next:{title:"2055.\u8721\u70db\u4e4b\u95f4\u7684\u76d8\u5b50",permalink:"/docs/leetcode/2001-2100/\u8721\u70db\u4e4b\u95f4\u7684\u76d8\u5b50"}},o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2},{value:"\u9898\u89e3 4 - rust",id:"\u9898\u89e3-4---rust",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"2050\u5e76\u884c\u8bfe\u7a0biii",children:"2050.\u5e76\u884c\u8bfe\u7a0bIII"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/parallel-courses-iii",children:"2050.\u5e76\u884c\u8bfe\u7a0bIII"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u56fe\u3001\u62d3\u6251\u6392\u5e8f\u3001\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u5b8c\u6210\u6240\u6709\u8bfe\u7a0b\u6240\u9700\u8981\u7684 \u6700\u5c11 \u6708\u4efd\u6570\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-28"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a636ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a222.5MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u62d3\u6251\u6392\u5e8f+\u5806\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"#define X first\n#define Y second\n#define pii pair<int, int>\nstruct Node {\n    unordered_set<int> p, c;\n};\nclass Solution {\npublic:\n    int minimumTime(int n, vector<vector<int>>& relations, vector<int>& time) {\n        unordered_set<int> start;\n        for (int i = 0; i < n; i++) start.insert(i);\n\n        vector<Node> list(n);\n        for (auto &item : relations) {\n            list[item[0] - 1].c.insert(item[1] - 1);\n            list[item[1] - 1].p.insert(item[0] - 1);\n            start.erase(item[1] - 1);\n        }\n\n        int res = 0;\n        auto cmp = [&](pii a, pii b) -> bool {\n            return b.Y < a.Y;\n        };\n        priority_queue<pii, vector<pii>, decltype(cmp)> q(cmp);\n        for (auto &v : start) {\n            q.push(make_pair(v, time[v]));\n        }\n        while (q.size()) {\n            auto cur = q.top();\n            res = max(res, cur.Y);\n            q.pop();\n            for (auto &c : list[cur.X].c) {\n                list[c].p.erase(cur.X);\n                if (list[c].p.empty()) {\n                    q.push(make_pair(c, cur.Y + time[c]));\n                }\n            }\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-28"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a388ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a161.2MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minimumTime(int n, vector<vector<int>>& relations, vector<int>& time) {\n        vector<vector<int>> list(n);\n        for (auto &item : relations) {\n            list[item[1] - 1].push_back(item[0] - 1);\n        }\n        unordered_map<int, int> cache;\n        function<int(int)> dfs = [&](int cur) -> int {\n            if (cache[cur]) return cache[cur];\n            int val = 0;\n            for (auto &p : list[cur]) val = max(val, dfs(p));\n            return cache[cur] = val + time[cur];\n        };\n        int res = 0;\n        for (int i = 0; i < n; i++) res = max(res, dfs(i));\n        return res;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-28"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a296ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a141.8MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def minimumTime(self, n: int, relations: List[List[int]], time: List[int]) -> int:\n        list = [[] for _ in range(n)]\n        for item in relations:\n            list[item[1]-1].append(item[0]-1)\n\n        @cache\n        def dfs(cur: int) -> int:\n            if len(list[cur]) == 0: return time[cur]\n            return max(dfs(i) for i in list[cur]) + time[cur]\n        return max(dfs(i) for i in range(n))\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-4---rust",children:"\u9898\u89e3 4 - rust"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-28"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a64ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a11.9MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn minimum_time(n: i32, relations: Vec<Vec<i32>>, time: Vec<i32>) -> i32 {\n        use std::collections::HashMap;\n        let n = n as usize;\n        let mut list = vec![vec![]; n];\n        for item in relations {\n            let (i0, i1) = (item[0] as usize - 1, item[1] as usize - 1);\n            list[i1].push(i0);\n        }\n        let mut cache = HashMap::<usize, i32>::new();\n        fn dfs(\n            cache: &mut HashMap<usize, i32>,\n            list: &Vec<Vec<usize>>,\n            time: &Vec<i32>,\n            cur: usize,\n        ) -> i32 {\n            if cache.contains_key(&cur) {\n                *cache.get(&cur).unwrap()\n            } else {\n                let res = list[cur]\n                    .iter()\n                    .map(|p| dfs(cache, list, time, *p))\n                    .max()\n                    .unwrap_or(0)\n                    + time[cur];\n                cache.insert(cur, res);\n                res\n            }\n        }\n        (0..n)\n            .into_iter()\n            .map(|i| dfs(&mut cache, &list, &time, i))\n            .max()\n            .unwrap()\n    }\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>l});var t=i(30758);const r={},s=t.createContext(r);function c(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);