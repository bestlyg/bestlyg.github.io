"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[80056],{92985:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/1101-1200/\u53f6\u503c\u7684\u6700\u5c0f\u4ee3\u4ef7\u751f\u6210\u6811","title":"1130.\u53f6\u503c\u7684\u6700\u5c0f\u4ee3\u4ef7\u751f\u6210\u6811","description":"\u94fe\u63a5\uff1a1130.\u53f6\u503c\u7684\u6700\u5c0f\u4ee3\u4ef7\u751f\u6210\u6811","source":"@site/docs/leetcode/1101-1200/1130.\u53f6\u503c\u7684\u6700\u5c0f\u4ee3\u4ef7\u751f\u6210\u6811.md","sourceDirName":"leetcode/1101-1200","slug":"/leetcode/1101-1200/\u53f6\u503c\u7684\u6700\u5c0f\u4ee3\u4ef7\u751f\u6210\u6811","permalink":"/docs/leetcode/1101-1200/\u53f6\u503c\u7684\u6700\u5c0f\u4ee3\u4ef7\u751f\u6210\u6811","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1130,"frontMatter":{},"sidebar":"journal","previous":{"title":"1129.\u989c\u8272\u4ea4\u66ff\u7684\u6700\u77ed\u8def\u5f84","permalink":"/docs/leetcode/1101-1200/\u989c\u8272\u4ea4\u66ff\u7684\u6700\u77ed\u8def\u5f84"},"next":{"title":"1137.\u7b2cN\u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570","permalink":"/docs/leetcode/1101-1200/\u7b2cN\u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570"}}');var s=r(86070),t=r(31503);const l={},a="1130.\u53f6\u503c\u7684\u6700\u5c0f\u4ee3\u4ef7\u751f\u6210\u6811",c={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1130\u53f6\u503c\u7684\u6700\u5c0f\u4ee3\u4ef7\u751f\u6210\u6811",children:"1130.\u53f6\u503c\u7684\u6700\u5c0f\u4ee3\u4ef7\u751f\u6210\u6811"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-cost-tree-from-leaf-values",children:"1130.\u53f6\u503c\u7684\u6700\u5c0f\u4ee3\u4ef7\u751f\u6210\u6811"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u5355\u8c03\u6808",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5728\u6240\u6709\u8fd9\u6837\u7684\u4e8c\u53c9\u6811\u4e2d\uff0c\u8fd4\u56de\u6bcf\u4e2a\u975e\u53f6\u8282\u70b9\u7684\u503c\u7684\u6700\u5c0f\u53ef\u80fd\u603b\u548c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-31"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a11.6MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6811\u5f62dp\uff0c\u5bf9\u4e00\u4e2a\u533a\u95f4\u53bb\u83b7\u53d6\u4ed6\u7684\u6700\u5927\u503c\u548c\u6700\u5c0f\u548c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"#define pii pair<int, int>\n#define X first\n#define Y second\nclass Solution {\npublic:\n    unordered_map<int, unordered_map<int, pii>> m;\n    pii dfs(vector<int> &arr, int l, int r) {\n        if (m[l].count(r)) return m[l][r];\n        if (l == r) return m[l][r] = make_pair(arr[l], 0);\n        pii res = make_pair(arr[r], INT_MAX);\n        for (int i = l; i < r; i++) {\n            res.X = max(res.X, arr[i]);\n            auto left = dfs(arr, l, i), right = dfs(arr, i + 1, r);\n            int sum = left.X * right.X + left.Y + right.Y;\n            res.Y = min(res.Y, sum);\n        }\n        return m[l][r] = res;\n    }\n    int mctFromLeafValues(vector<int>& arr) {\n        return dfs(arr, 0, arr.size() - 1).Y;\n    }\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-31"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a152ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.1MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def mctFromLeafValues(self, arr: List[int]) -> int:\n        @cache\n        def dfs(l: int, r: int) -> List[int]:\n            if l == r: return [arr[l],0]\n            res = [arr[r], inf]\n            for i in range(l,r):\n                res[0] = max(res[0], arr[i])\n                left,right = dfs(l,i),dfs(i+1,r)\n                sum = left[0] * right[0] + left[1] + right[1]\n                res[1] = min(res[1], sum)\n            return res\n        return dfs(0, len(arr) - 1)[1]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-31"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use std::collections::HashMap;\nfn dfs(\n    m: &mut HashMap<usize, HashMap<usize, (i32, i32)>>,\n    arr: &Vec<i32>,\n    l: usize,\n    r: usize,\n) -> (i32, i32) {\n    if m.entry(l).or_insert(Default::default()).contains_key(&r) {\n        *m.get(&l).unwrap().get(&r).unwrap()\n    } else if l == r {\n        let res = (arr[l], 0);\n        (*m.get_mut(&l).unwrap()).insert(r, res);\n        res\n    } else {\n        let mut res = (arr[r], i32::MAX);\n        for i in l..r {\n            res.0 = res.0.max(arr[i]);\n            let (left, right) = (dfs(m, arr, l, i), dfs(m, arr, i + 1, r));\n            let sum = left.0 * right.0 + left.1 + right.1;\n            res.1 = res.1.min(sum);\n        }\n        (*m.get_mut(&l).unwrap()).insert(r, res);\n        res\n    }\n}\nimpl Solution {\n    pub fn mct_from_leaf_values(arr: Vec<i32>) -> i32 {\n        let mut m = HashMap::<usize, HashMap<usize, (i32, i32)>>::new();\n        dfs(&mut m, &arr, 0, arr.len() - 1).1\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},31503:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var i=r(30758);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);