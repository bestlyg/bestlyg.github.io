"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[97995],{79284:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"leetcode/2601-2700/\u627e\u51fa\u8f6c\u5708\u6e38\u620f\u8f93\u5bb6","title":"2682.\u627e\u51fa\u8f6c\u5708\u6e38\u620f\u8f93\u5bb6","description":"\u94fe\u63a5\uff1a2682.\u627e\u51fa\u8f6c\u5708\u6e38\u620f\u8f93\u5bb6","source":"@site/docs/leetcode/2601-2700/2682.\u627e\u51fa\u8f6c\u5708\u6e38\u620f\u8f93\u5bb6.md","sourceDirName":"leetcode/2601-2700","slug":"/leetcode/2601-2700/\u627e\u51fa\u8f6c\u5708\u6e38\u620f\u8f93\u5bb6","permalink":"/docs/leetcode/2601-2700/\u627e\u51fa\u8f6c\u5708\u6e38\u620f\u8f93\u5bb6","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2682,"frontMatter":{},"sidebar":"journal","previous":{"title":"2681.\u82f1\u96c4\u7684\u529b\u91cf","permalink":"/docs/leetcode/2601-2700/\u82f1\u96c4\u7684\u529b\u91cf"},"next":{"title":"2684.\u77e9\u9635\u4e2d\u79fb\u52a8\u7684\u6700\u5927\u6b21\u6570","permalink":"/docs/leetcode/2601-2700/\u77e9\u9635\u4e2d\u79fb\u52a8\u7684\u6700\u5927\u6b21\u6570"}}');var s=i(25105),l=i(8556);const t={},c="2682.\u627e\u51fa\u8f6c\u5708\u6e38\u620f\u8f93\u5bb6",o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"2682\u627e\u51fa\u8f6c\u5708\u6e38\u620f\u8f93\u5bb6",children:"2682.\u627e\u51fa\u8f6c\u5708\u6e38\u620f\u8f93\u5bb6"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/find-the-losers-of-the-circular-game",children:"2682.\u627e\u51fa\u8f6c\u5708\u6e38\u620f\u8f93\u5bb6"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u6a21\u62df",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u53c2\u4e0e\u6e38\u620f\u7684\u670b\u53cb\u6570\u91cf n \u548c\u4e00\u4e2a\u6574\u6570 k \uff0c\u8bf7\u6309\u5347\u5e8f\u6392\u5217\u8fd4\u56de\u5305\u542b\u6240\u6709\u8f93\u5bb6\u7f16\u53f7\u7684\u6570\u7ec4 answer \u4f5c\u4e3a\u7b54\u6848\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-16"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a13.16MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> circularGameLosers(int n, int k) {\n        int list[50] = {0}, cur = 0;\n        list[cur] += 1;\n        for (int i = 1; ; i++) {\n            cur = (cur + i * k) % n;\n            list[cur] += 1;\n            if (list[cur] > 1) break;\n        }\n        vector<int> res;\n        for (int i = 0; i < n; i++) {\n            if (list[i] == 0) res.push_back(i + 1);\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-16"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.46MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def circularGameLosers(self, n: int, k: int) -> List[int]:\n        list = [0 for _ in range(n)]\n        cur = 0\n        list[cur] += 1\n        i = 1\n        while True:\n            cur = (cur + i * k) % n\n            list[cur] += 1\n            i += 1\n            if list[cur] > 1:\n                break\n        res = []\n        for i in range(n):\n            if list[i] == 0:\n                res.append(i + 1)\n        return res\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-08-16"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a1.88MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn circular_game_losers(n: i32, k: i32) -> Vec<i32> {\n        let n = n as usize;\n        let k = k as usize;\n        let mut list = vec![0; n];\n        let mut cur = 0;\n        list[cur] += 1;\n        for i in 1.. {\n            cur = (cur + i * k) % n;\n            list[cur] += 1;\n            if list[cur] > 1 {\n                break;\n            }\n        }\n        (0..n)\n            .collect::<Vec<_>>()\n            .into_iter()\n            .filter(|i| list[*i] == 0)\n            .map(|v| (v + 1) as i32)\n            .collect()\n    }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8556:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>c});var r=i(58101);const s={},l=r.createContext(s);function t(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);