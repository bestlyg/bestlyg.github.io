"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[10989],{51426:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var t=i(86070),s=i(31503);const l={},d="2316.\u7edf\u8ba1\u65e0\u5411\u56fe\u4e2d\u65e0\u6cd5\u4e92\u76f8\u5230\u8fbe\u70b9\u5bf9\u6570",r={id:"leetcode/2301-2400/\u7edf\u8ba1\u65e0\u5411\u56fe\u4e2d\u65e0\u6cd5\u4e92\u76f8\u5230\u8fbe\u70b9\u5bf9\u6570",title:"2316.\u7edf\u8ba1\u65e0\u5411\u56fe\u4e2d\u65e0\u6cd5\u4e92\u76f8\u5230\u8fbe\u70b9\u5bf9\u6570",description:"\u94fe\u63a5\uff1a2316.\u7edf\u8ba1\u65e0\u5411\u56fe\u4e2d\u65e0\u6cd5\u4e92\u76f8\u5230\u8fbe\u70b9\u5bf9\u6570",source:"@site/docs/leetcode/2301-2400/2316.\u7edf\u8ba1\u65e0\u5411\u56fe\u4e2d\u65e0\u6cd5\u4e92\u76f8\u5230\u8fbe\u70b9\u5bf9\u6570.md",sourceDirName:"leetcode/2301-2400",slug:"/leetcode/2301-2400/\u7edf\u8ba1\u65e0\u5411\u56fe\u4e2d\u65e0\u6cd5\u4e92\u76f8\u5230\u8fbe\u70b9\u5bf9\u6570",permalink:"/docs/leetcode/2301-2400/\u7edf\u8ba1\u65e0\u5411\u56fe\u4e2d\u65e0\u6cd5\u4e92\u76f8\u5230\u8fbe\u70b9\u5bf9\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2316,frontMatter:{},sidebar:"journal",previous:{title:"2315.\u7edf\u8ba1\u661f\u53f7",permalink:"/docs/leetcode/2301-2400/\u7edf\u8ba1\u661f\u53f7"},next:{title:"2319.\u5224\u65ad\u77e9\u9635\u662f\u5426\u662f\u4e00\u4e2aX\u77e9\u9635",permalink:"/docs/leetcode/2301-2400/\u5224\u65ad\u77e9\u9635\u662f\u5426\u662f\u4e00\u4e2aX\u77e9\u9635"}},c={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"2316\u7edf\u8ba1\u65e0\u5411\u56fe\u4e2d\u65e0\u6cd5\u4e92\u76f8\u5230\u8fbe\u70b9\u5bf9\u6570",children:"2316.\u7edf\u8ba1\u65e0\u5411\u56fe\u4e2d\u65e0\u6cd5\u4e92\u76f8\u5230\u8fbe\u70b9\u5bf9\u6570"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph",children:"2316.\u7edf\u8ba1\u65e0\u5411\u56fe\u4e2d\u65e0\u6cd5\u4e92\u76f8\u5230\u8fbe\u70b9\u5bf9\u6570"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e76\u67e5\u96c6\u3001\u56fe",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570 n \uff0c\u8868\u793a\u4e00\u5f20 \u65e0\u5411\u56fe \u4e2d\u6709 n \u4e2a\u8282\u70b9\uff0c\u7f16\u53f7\u4e3a 0 \u5230 n - 1 \u3002\u540c\u65f6\u7ed9\u4f60\u4e00\u4e2a\u4e8c\u7ef4\u6574\u6570\u6570\u7ec4 edges \uff0c\u5176\u4e2d edges[i] = [ai, bi] \u8868\u793a\u8282\u70b9 ai \u548c bi \u4e4b\u95f4\u6709\u4e00\u6761 \u65e0\u5411 \u8fb9\u3002\u8bf7\u4f60\u8fd4\u56de \u65e0\u6cd5\u4e92\u76f8\u5230\u8fbe \u7684\u4e0d\u540c \u70b9\u5bf9\u6570\u76ee \u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-21"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a352ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a130.11MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5e76\u67e5\u96c6\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class UnionFind {\npublic:\n    int n;\n    vector<int> data, cnt;\n    UnionFind(int n) : n(n), data(vector<int>(n, 0)), cnt(vector<int>(n, 1)) {\n        iota(data.begin(), data.end(), 0);\n    }\n    int size(int v) { return cnt[find(v)]; }\n    int find(int v) {\n        if (data[v] == v) return v;\n        return data[v] = find(data[v]);\n    }\n    void uni(int v1, int v2) {\n        int p1 = find(v1), p2 = find(v2);\n        if (p1 != p2) cnt[p1] += cnt[p2], data[p2] = p1;\n    }\n    bool same(int v1, int v2) { return find(v1) == find(v2); }\n};\nclass Solution {\npublic:\n    long long countPairs(int n, vector<vector<int>>& edges) {\n        UnionFind uf(n);\n        for (auto &edge : edges) uf.uni(edge[0], edge[1]);\n        long long res = 0;\n        for (int i = 0; i < n; i++) {\n            if (uf.data[i] != i) continue;\n            res += (long long)uf.cnt[i] * (n - uf.cnt[i]);\n        }\n        return res / 2;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-21"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a408ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a61.26MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class UnionFind:\n    def __init__(self, n) -> None:\n        self.n = n\n        self.data = [i for i in range(0, n)]\n        self.cnt = [1] * n\n    def size(self, v: int) -> int:\n        return self.cnt[self.find(v)]\n    def find(self, v: int) -> int:\n        if self.data[v] != v:\n            self.data[v] = self.find(self.data[v])\n        return self.data[v]\n    def uni(self, v1: int, v2: int):\n        p1 = self.find(v1)\n        p2 = self.find(v2)\n        if p1 != p2:\n            self.cnt[p1] += self.cnt[p2]\n            self.data[p2] = p1\n    def same(self, v1: int, v2: int):\n        return self.find(v1) == self.find(v2)\nclass Solution:\n    def countPairs(self, n: int, edges: List[List[int]]) -> int:\n        uf = UnionFind(n)\n        for [n1, n2] in edges:\n            uf.uni(n1, n2)\n        return sum(uf.cnt[i] * (n - uf.cnt[i]) if uf.data[i] == i else 0 for i in range(n)) // 2\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-21"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.85MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"pub struct UnionFind {\n    pub n: usize,\n    pub data: Vec<usize>,\n    pub cnt: Vec<usize>,\n}\nimpl UnionFind {\n    pub fn new(n: usize) -> Self {\n        let mut data = vec![0; n];\n        for i in 0..data.len() {\n            data[i] = i;\n        }\n        Self {\n            n,\n            data,\n            cnt: vec![1; n],\n        }\n    }\n    pub fn size(&mut self, v: usize) -> usize {\n        let idx = self.find(v);\n        self.cnt[idx]\n    }\n    pub fn find(&mut self, v: usize) -> usize {\n        if self.data[v] != v {\n            self.data[v] = self.find(self.data[v]);\n        }\n        self.data[v]\n    }\n    pub fn uni(&mut self, v1: usize, v2: usize) {\n        let p1 = self.find(v1);\n        let p2 = self.find(v2);\n        if p1 != p2 {\n            self.cnt[p1] += self.cnt[p2];\n            self.data[p2] = p1;\n        }\n    }\n    pub fn same(&mut self, v1: usize, v2: usize) -> bool {\n        self.find(v1) == self.find(v2)\n    }\n}\nimpl Solution {\n    pub fn count_pairs(n: i32, edges: Vec<Vec<i32>>) -> i64 {\n        let n = n as usize;\n        let mut uf = UnionFind::new(n);\n        for edge in edges {\n            uf.uni(edge[0] as usize, edge[1] as usize);\n        }\n        (0..n)\n            .map(|i| {\n                if uf.data[i] != i {\n                    0\n                } else {\n                    uf.cnt[i] * (n - uf.cnt[i])\n                }\n            })\n            .sum::<usize>() as i64\n            / 2\n    }\n}\n"})})]})}function f(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>d,x:()=>r});var t=i(30758);const s={},l=t.createContext(s);function d(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);