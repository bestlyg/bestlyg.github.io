"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[90036],{668:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"leetcode/1301-1400/T\u79d2\u540e\u9752\u86d9\u7684\u4f4d\u7f6e","title":"1377.T\u79d2\u540e\u9752\u86d9\u7684\u4f4d\u7f6e","description":"\u94fe\u63a5\uff1a1377.T\u79d2\u540e\u9752\u86d9\u7684\u4f4d\u7f6e","source":"@site/docs/leetcode/1301-1400/1377.T\u79d2\u540e\u9752\u86d9\u7684\u4f4d\u7f6e.md","sourceDirName":"leetcode/1301-1400","slug":"/leetcode/1301-1400/T\u79d2\u540e\u9752\u86d9\u7684\u4f4d\u7f6e","permalink":"/docs/leetcode/1301-1400/T\u79d2\u540e\u9752\u86d9\u7684\u4f4d\u7f6e","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1377,"frontMatter":{},"sidebar":"journal","previous":{"title":"1376.\u901a\u77e5\u6240\u6709\u5458\u5de5\u6240\u9700\u7684\u65f6\u95f4","permalink":"/docs/leetcode/1301-1400/\u901a\u77e5\u6240\u6709\u5458\u5de5\u6240\u9700\u7684\u65f6\u95f4"},"next":{"title":"1379.\u627e\u51fa\u514b\u9686\u4e8c\u53c9\u6811\u4e2d\u7684\u76f8\u540c\u8282\u70b9","permalink":"/docs/leetcode/1301-1400/\u627e\u51fa\u514b\u9686\u4e8c\u53c9\u6811\u4e2d\u7684\u76f8\u540c\u8282\u70b9"}}');var r=t(86070),i=t(31503);const o={},d="1377.T\u79d2\u540e\u9752\u86d9\u7684\u4f4d\u7f6e",u={},l=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1377t\u79d2\u540e\u9752\u86d9\u7684\u4f4d\u7f6e",children:"1377.T\u79d2\u540e\u9752\u86d9\u7684\u4f4d\u7f6e"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/frog-position-after-t-seconds",children:"1377.T\u79d2\u540e\u9752\u86d9\u7684\u4f4d\u7f6e"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u56fe",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u9752\u86d9\u5728 t \u79d2\u540e\u4f4d\u4e8e\u76ee\u6807\u9876\u70b9 target \u4e0a\u7684\u6982\u7387\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-24"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.5MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u904d\u5386\uff0c\u56e0\u4e3a\u6bcf\u4e2a\u70b9\u4e4b\u95f4\u90fd\u8fde\u901a\uff0c\u5224\u65ad\u5f53\u9752\u86d9\u5230\u76ee\u6807\u70b9\u540e\u662f\u5426\u8fd8\u80fd\u7ee7\u7eed\u5411\u5916\u8df3\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    double frogPosition(int n, vector<vector<int>>& edges, int t, int target) {\n        vector<vector<int>> nodes(n + 1);\n        for (auto &e : edges) {\n            nodes[e[0]].push_back(e[1]);\n            nodes[e[1]].push_back(e[0]);\n        }\n        vector<bool> used(n + 1, false);\n        used[1] = true;\n        function<double(int, int)> dfs = [&](int cur, int t) {\n            int sum = 0;\n            for (auto &next : nodes[cur]) {\n                if (!used[next]) sum += 1;\n            }\n            if (cur == target || t == 0) {\n                return cur == target && (t == 0 || sum == 0) ? 1.0 : 0.0;\n            }\n            for (auto &next : nodes[cur]) {\n                if (!used[next]) {\n                    used[next] = true;\n                    auto res = dfs(next, t - 1);\n                    used[next] = false;\n                    if (res != 0.0) return res / sum;\n                }\n            }\n            return 0.0;\n        };\n        return dfs(1, t);\n    }\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-24"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a52ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.4MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def frogPosition(self, n: int, edges: List[List[int]], t: int, target: int) -> float:\n        nodes = [[] for _ in range(n + 1)]\n        for e in edges:\n            nodes[e[0]].append(e[1])\n            nodes[e[1]].append(e[0])\n        used = [False for _ in range(n + 1)]\n        used[1] = True\n        def dfs(cur: int, t: int) -> float:\n            sum = 0\n            for next in nodes[cur]:\n                if not used[next]:\n                    sum += 1\n            if cur == target or t == 0:\n                return 1 if cur == target and (t == 0 or sum == 0) else 0\n            for next in nodes[cur]:\n                if not used[next]:\n                    used[next] = True\n                    res = dfs(next, t - 1)\n                    used[next] = False\n                    if res != 0:\n                        return res / sum\n            return 0\n        return dfs(1, t)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-24"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a1.9MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"fn dfs(nodes: &Vec<Vec<usize>>, used: &mut Vec<bool>, target: usize, cur: usize, t: i32) -> f64 {\nlet mut sum: f64 = 0.0;\nfor next in &nodes[cur] {\n    if !used[*next] {\n        sum += 1.0;\n    }\n}\nif cur == target || t == 0 {\n    if cur == target && (t == 0 || sum == 0.0) {\n        1.0\n    } else {\n        0.0\n    }\n} else {\n    for next in &nodes[cur] {\n        if !used[*next] {\n            used[*next] = true;\n            let res = dfs(nodes, used, target, *next, t - 1);\n            used[*next] = false;\n            if res != 0.0 {\n                return res / sum;\n            }\n        }\n    }\n    0.0\n}\n}\nimpl Solution {\n    pub fn frog_position(n: i32, edges: Vec<Vec<i32>>, t: i32, target: i32) -> f64 {\n        let n = n as usize;\n        let mut nodes: Vec<Vec<usize>> = vec![vec![]; n + 1];\n        for e in edges {\n            let (e0, e1) = (e[0] as usize, e[1] as usize);\n            nodes[e0].push(e1);\n            nodes[e1].push(e0);\n        }\n        let mut used = vec![false; n + 1];\n        used[1] = true;\n        dfs(&nodes, &mut used, target as usize, 1, t)\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(30758);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);