"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[39655],{4243:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=i(86070),s=i(25710);const r={},l="1042.\u4e0d\u90bb\u63a5\u690d\u82b1",c={id:"leetcode/1001-1100/\u4e0d\u90bb\u63a5\u690d\u82b1",title:"1042.\u4e0d\u90bb\u63a5\u690d\u82b1",description:"\u94fe\u63a5\uff1a1042.\u4e0d\u90bb\u63a5\u690d\u82b1",source:"@site/docs/leetcode/1001-1100/1042.\u4e0d\u90bb\u63a5\u690d\u82b1.md",sourceDirName:"leetcode/1001-1100",slug:"/leetcode/1001-1100/\u4e0d\u90bb\u63a5\u690d\u82b1",permalink:"/docs/leetcode/1001-1100/\u4e0d\u90bb\u63a5\u690d\u82b1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1042,frontMatter:{},sidebar:"journal",previous:{title:"1041.\u56f0\u4e8e\u73af\u4e2d\u7684\u673a\u5668\u4eba",permalink:"/docs/leetcode/1001-1100/\u56f0\u4e8e\u73af\u4e2d\u7684\u673a\u5668\u4eba"},next:{title:"1043.\u5206\u9694\u6570\u7ec4\u4ee5\u5f97\u5230\u6700\u5927\u548c",permalink:"/docs/leetcode/1001-1100/\u5206\u9694\u6570\u7ec4\u4ee5\u5f97\u5230\u6700\u5927\u548c"}},o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"1042\u4e0d\u90bb\u63a5\u690d\u82b1",children:"1042.\u4e0d\u90bb\u63a5\u690d\u82b1"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/flower-planting-with-no-adjacent",children:"1042.\u4e0d\u90bb\u63a5\u690d\u82b1"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u56fe",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6709 n \u4e2a\u82b1\u56ed\uff0c\u6309\u4ece\xa01\xa0\u5230 n \u6807\u8bb0\u3002\u53e6\u6709\u6570\u7ec4 paths \uff0c\u5176\u4e2d paths[i] = [xi, yi]\xa0\u63cf\u8ff0\u4e86\u82b1\u56ed\xa0xi \u5230\u82b1\u56ed\xa0yi \u7684\u53cc\u5411\u8def\u5f84\u3002\u5728\u6bcf\u4e2a\u82b1\u56ed\u4e2d\uff0c\u4f60\u6253\u7b97\u79cd\u4e0b\u56db\u79cd\u82b1\u4e4b\u4e00\u3002\u53e6\u5916\uff0c\u6240\u6709\u82b1\u56ed \u6700\u591a \u6709 3 \u6761\u8def\u5f84\u53ef\u4ee5\u8fdb\u5165\u6216\u79bb\u5f00.\u4f60\u9700\u8981\u4e3a\u6bcf\u4e2a\u82b1\u56ed\u9009\u62e9\u4e00\u79cd\u82b1\uff0c\u4f7f\u5f97\u901a\u8fc7\u8def\u5f84\u76f8\u8fde\u7684\u4efb\u4f55\u4e24\u4e2a\u82b1\u56ed\u4e2d\u7684\u82b1\u7684\u79cd\u7c7b\u4e92\u4e0d\u76f8\u540c\u3002\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de \u4efb\u4e00 \u53ef\u884c\u7684\u65b9\u6848\u4f5c\u4e3a\u7b54\u6848\xa0answer\uff0c\u5176\u4e2d\xa0answer[i]\xa0\u4e3a\u5728\u7b2c\xa0(i+1)\xa0\u4e2a\u82b1\u56ed\u4e2d\u79cd\u690d\u7684\u82b1\u7684\u79cd\u7c7b\u3002\u82b1\u7684\u79cd\u7c7b\u7528 \xa01\u30012\u30013\u30014 \u8868\u793a\u3002\u4fdd\u8bc1\u5b58\u5728\u7b54\u6848\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-15"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u76f4\u63a5\u627e\u5468\u56f4\u8fd8\u7a7a\u7684\u4f4d\u7f6e\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> gardenNoAdj(int n, vector<vector<int>>& paths) {\n        vector<vector<int>> list(n);\n        for (auto &p : paths)\n            list[p[0] - 1].push_back(p[1] - 1),\n            list[p[1] - 1].push_back(p[0] - 1);\n        vector<int> res(n, 0);\n        for (int i = 0; i < n; i++) {\n            int cache[5] = {0};\n            for (int next : list[i])\n                if (res[next] != 0) cache[res[next]] = 1;\n            for (int j = 1; j < 5; j++)\n                if (cache[j] != 1) { res[i] = j; break; }\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-15"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a20.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def gardenNoAdj(self, n: int, paths: List[List[int]]) -> List[int]:\n        list = [[] for _ in range(n)]\n        for [p1, p2] in paths:\n            list[p1-1].append(p2-1)\n            list[p2-1].append(p1-1)\n        res = [0] * n\n        for i in range(n):\n            cache = [False] * 5\n            for next in list[i]:\n                if res[next] != 0:\n                    cache[res[next]] = 1\n            for j in range(1, 5):\n                if cache[j] != 1:\n                    res[i] = j\n                    break\n        return res\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-15"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a3.6MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn garden_no_adj(n: i32, paths: Vec<Vec<i32>>) -> Vec<i32> {\n        let n = n as usize;\n        let mut list = vec![vec![]; n];\n        for p in paths {\n            let (p0, p1) = (p[0] as usize, p[1] as usize);\n            list[p0 - 1].push(p1 - 1);\n            list[p1 - 1].push(p0 - 1);\n        }\n        let mut res = vec![0; n];\n        for i in 0..n {\n            let mut cache = [false; 5];\n            for next in list[i].iter() {\n                if res[*next] != 0 {\n                    cache[res[*next]] = true;\n                }\n            }\n            for j in 1..5 {\n                if !cache[j] {\n                    res[i] = j;\n                    break;\n                }\n            }\n        }\n        res.into_iter().map(|v| v as i32).collect()\n    }\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var t=i(30758);const s={},r=t.createContext(s);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);