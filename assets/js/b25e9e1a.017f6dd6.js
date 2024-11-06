"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[79237],{27104:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=t(86070),s=t(31503);const r={},l="1465.\u5207\u5272\u540e\u9762\u79ef\u6700\u5927\u7684\u86cb\u7cd5",o={id:"leetcode/1401-1500/\u5207\u5272\u540e\u9762\u79ef\u6700\u5927\u7684\u86cb\u7cd5",title:"1465.\u5207\u5272\u540e\u9762\u79ef\u6700\u5927\u7684\u86cb\u7cd5",description:"\u94fe\u63a5\uff1a1465.\u5207\u5272\u540e\u9762\u79ef\u6700\u5927\u7684\u86cb\u7cd5",source:"@site/docs/leetcode/1401-1500/1465.\u5207\u5272\u540e\u9762\u79ef\u6700\u5927\u7684\u86cb\u7cd5.md",sourceDirName:"leetcode/1401-1500",slug:"/leetcode/1401-1500/\u5207\u5272\u540e\u9762\u79ef\u6700\u5927\u7684\u86cb\u7cd5",permalink:"/docs/leetcode/1401-1500/\u5207\u5272\u540e\u9762\u79ef\u6700\u5927\u7684\u86cb\u7cd5",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1465,frontMatter:{},sidebar:"journal",previous:{title:"1464.\u6570\u7ec4\u4e2d\u4e24\u5143\u7d20\u7684\u6700\u5927\u4e58\u79ef",permalink:"/docs/leetcode/1401-1500/\u6570\u7ec4\u4e2d\u4e24\u5143\u7d20\u7684\u6700\u5927\u4e58\u79ef"},next:{title:"1466.\u91cd\u65b0\u89c4\u5212\u8def\u7ebf",permalink:"/docs/leetcode/1401-1500/\u91cd\u65b0\u89c4\u5212\u8def\u7ebf"}},c={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"1465\u5207\u5272\u540e\u9762\u79ef\u6700\u5927\u7684\u86cb\u7cd5",children:"1465.\u5207\u5272\u540e\u9762\u79ef\u6700\u5927\u7684\u86cb\u7cd5"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts",children:"1465.\u5207\u5272\u540e\u9762\u79ef\u6700\u5927\u7684\u86cb\u7cd5"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u6392\u5e8f",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u6309\u6570\u7ec4 horizontalCuts \u548c verticalCuts \u4e2d\u63d0\u4f9b\u7684\u6c34\u5e73\u548c\u7ad6\u76f4\u4f4d\u7f6e\u5207\u5272\u540e\uff0c\u8bf7\u4f60\u627e\u51fa \u9762\u79ef\u6700\u5927 \u7684\u90a3\u4efd\u86cb\u7cd5\uff0c\u5e76\u8fd4\u56de\u5176 \u9762\u79ef \u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-27"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a64ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a31.09MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u8ba1\u7b97\u95f4\u9694\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxArea(int h, int w, vector<int>& horizontalCuts, vector<int>& verticalCuts) {\n        long long resH = 0, resW = 0;\n        sort(horizontalCuts.begin(), horizontalCuts.end());\n        horizontalCuts.insert(horizontalCuts.begin(), 0);\n        horizontalCuts.push_back(h);\n        for (int i = 1; i < horizontalCuts.size(); i++) resH = max(resH, (long long)horizontalCuts[i] - horizontalCuts[i - 1]);\n        sort(verticalCuts.begin(), verticalCuts.end());\n        verticalCuts.insert(verticalCuts.begin(), 0);\n        verticalCuts.push_back(w);\n        for (int i = 1; i < verticalCuts.size(); i++) resW = max(resW, (long long)verticalCuts[i] - verticalCuts[i - 1]);\n        return resH * resW % ((long long)1e9 + 7);\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-27"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a108ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a27.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def maxArea(self, h: int, w: int, horizontalCuts: List[int], verticalCuts: List[int]) -> int:\n        res = [0, 0]\n        horizontalCuts.sort()\n        horizontalCuts = [0] + horizontalCuts + [h]\n        for i in range(1, len(horizontalCuts)):\n            res[0] = max(res[0], horizontalCuts[i] - horizontalCuts[i - 1])\n        \n        verticalCuts.sort()\n        verticalCuts = [0] + verticalCuts + [w]\n        for i in range(1, len(verticalCuts)):\n            res[1] = max(res[1], verticalCuts[i] - verticalCuts[i - 1])\n        return res[0] * res[1] % (10 ** 9 + 7)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-27"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a4.29MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn max_area(h: i32, w: i32, horizontal_cuts: Vec<i32>, vertical_cuts: Vec<i32>) -> i32 {\n        let mut horizontal_cuts = horizontal_cuts\n            .into_iter()\n            .map(|v| v as i64)\n            .collect::<Vec<_>>();\n        horizontal_cuts.sort();\n        horizontal_cuts.insert(0, 0);\n        horizontal_cuts.push(h as i64);\n        let mut h = 0;\n        for i in 1..horizontal_cuts.len() {\n            h = h.max(horizontal_cuts[i] - horizontal_cuts[i - 1]);\n        }\n        let mut vertical_cuts = vertical_cuts\n            .into_iter()\n            .map(|v| v as i64)\n            .collect::<Vec<_>>();\n        vertical_cuts.sort();\n        vertical_cuts.insert(0, 0);\n        vertical_cuts.push(w as i64);\n        let mut w = 0;\n        for i in 1..vertical_cuts.len() {\n            w = w.max(vertical_cuts[i] - vertical_cuts[i - 1]);\n        }\n        (h * w % (10i64.pow(9) + 7)) as i32\n    }\n}\n"})})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>o});var i=t(30758);const s={},r=i.createContext(s);function l(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);