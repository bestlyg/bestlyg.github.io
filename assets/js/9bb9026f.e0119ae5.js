"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[27907],{24885:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"leetcode/1901-2000/\u6d88\u706d\u602a\u7269\u7684\u6700\u5927\u6570\u91cf","title":"1921.\u6d88\u706d\u602a\u7269\u7684\u6700\u5927\u6570\u91cf","description":"\u94fe\u63a5\uff1a1921.\u6d88\u706d\u602a\u7269\u7684\u6700\u5927\u6570\u91cf","source":"@site/docs/leetcode/1901-2000/1921.\u6d88\u706d\u602a\u7269\u7684\u6700\u5927\u6570\u91cf.md","sourceDirName":"leetcode/1901-2000","slug":"/leetcode/1901-2000/\u6d88\u706d\u602a\u7269\u7684\u6700\u5927\u6570\u91cf","permalink":"/docs/leetcode/1901-2000/\u6d88\u706d\u602a\u7269\u7684\u6700\u5927\u6570\u91cf","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1921,"frontMatter":{},"sidebar":"journal","previous":{"title":"1911.\u6700\u5927\u5b50\u5e8f\u5217\u4ea4\u66ff\u548c","permalink":"/docs/leetcode/1901-2000/\u6700\u5927\u5b50\u5e8f\u5217\u4ea4\u66ff\u548c"},"next":{"title":"1928.\u89c4\u5b9a\u65f6\u95f4\u5185\u5230\u8fbe\u7ec8\u70b9\u7684\u6700\u5c0f\u82b1\u8d39","permalink":"/docs/leetcode/1901-2000/\u89c4\u5b9a\u65f6\u95f4\u5185\u5230\u8fbe\u7ec8\u70b9\u7684\u6700\u5c0f\u82b1\u8d39"}}');var r=i(25105),t=i(8556);const l={},c="1921.\u6d88\u706d\u602a\u7269\u7684\u6700\u5927\u6570\u91cf",d={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1921\u6d88\u706d\u602a\u7269\u7684\u6700\u5927\u6570\u91cf",children:"1921.\u6d88\u706d\u602a\u7269\u7684\u6700\u5927\u6570\u91cf"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/eliminate-maximum-number-of-monsters",children:"1921.\u6d88\u706d\u602a\u7269\u7684\u6700\u5927\u6570\u91cf"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u6392\u5e8f",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u5728\u4f60\u8f93\u6389\u6e38\u620f\u524d\u53ef\u4ee5\u6d88\u706d\u7684\u602a\u7269\u7684 \u6700\u5927 \u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-03"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a86.8MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int eliminateMaximum(vector<int>& dist, vector<int>& speed) {\n        vector<double> arr;\n        for (int i = 0; i < dist.size(); i++) arr.push_back(1.0 * dist[i] / speed[i]);\n        sort(arr.begin(), arr.end());\n        for (int i = 0; i < dist.size(); i++) {\n            if (i >= arr[i]) return i;\n        }\n        return dist.size();\n    }\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-03"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a168ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a30.3MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def eliminateMaximum(self, dist: List[int], speed: List[int]) -> int:\n        arr = [dist[i] / speed[i] for i in range(len(dist))]\n        arr.sort()\n        for i in range(len(dist)):\n            if i >= arr[i]: return i\n        return len(dist)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-03"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a32ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a4.1MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn eliminate_maximum(dist: Vec<i32>, speed: Vec<i32>) -> i32 {\n        let mut arr = vec![];\n        for i in 0..dist.len() {\n            arr.push(dist[i] as f64 / speed[i] as f64);\n        }\n        arr.sort_by(|a, b| a.partial_cmp(b).unwrap());\n        for i in 0..dist.len() {\n            if i as f64 >= arr[i] {\n                return i as i32;\n            }\n        }\n        dist.len() as i32\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8556:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var s=i(58101);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);