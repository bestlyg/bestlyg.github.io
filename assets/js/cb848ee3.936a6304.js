"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[57305],{58104:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"leetcode/2601-2700/\u4fdd\u9f84\u7403\u6e38\u620f\u7684\u83b7\u80dc\u8005","title":"2660.\u4fdd\u9f84\u7403\u6e38\u620f\u7684\u83b7\u80dc\u8005","description":"\u94fe\u63a5\uff1a2660.\u4fdd\u9f84\u7403\u6e38\u620f\u7684\u83b7\u80dc\u8005","source":"@site/docs/leetcode/2601-2700/2660.\u4fdd\u9f84\u7403\u6e38\u620f\u7684\u83b7\u80dc\u8005.md","sourceDirName":"leetcode/2601-2700","slug":"/leetcode/2601-2700/\u4fdd\u9f84\u7403\u6e38\u620f\u7684\u83b7\u80dc\u8005","permalink":"/docs/leetcode/2601-2700/\u4fdd\u9f84\u7403\u6e38\u620f\u7684\u83b7\u80dc\u8005","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2660,"frontMatter":{},"sidebar":"journal","previous":{"title":"2656.K\u4e2a\u5143\u7d20\u7684\u6700\u5927\u548c","permalink":"/docs/leetcode/2601-2700/K\u4e2a\u5143\u7d20\u7684\u6700\u5927\u548c"},"next":{"title":"2661.\u627e\u51fa\u53e0\u6d82\u5143\u7d20","permalink":"/docs/leetcode/2601-2700/\u627e\u51fa\u53e0\u6d82\u5143\u7d20"}}');var l=r(25105),t=r(8556);const i={},c="2660.\u4fdd\u9f84\u7403\u6e38\u620f\u7684\u83b7\u80dc\u8005",o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"2660\u4fdd\u9f84\u7403\u6e38\u620f\u7684\u83b7\u80dc\u8005",children:"2660.\u4fdd\u9f84\u7403\u6e38\u620f\u7684\u83b7\u80dc\u8005"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/determine-the-winner-of-a-bowling-game",children:"2660.\u4fdd\u9f84\u7403\u6e38\u620f\u7684\u83b7\u80dc\u8005"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6a21\u62df",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u5982\u679c\u73a9\u5bb6 1 \u7684\u5f97\u5206\u9ad8\u4e8e\u73a9\u5bb6 2 \u7684\u5f97\u5206\uff0c\u5219\u4e3a 1 \uff1b\u5982\u679c\u73a9\u5bb6 2 \u7684\u5f97\u5206\u9ad8\u4e8e\u73a9\u5bb6 1 \u7684\u5f97\u5206\uff0c\u5219\u4e3a 2 \uff1b\u5982\u679c\u5e73\u5c40\uff0c\u5219\u4e3a 0 \u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-27"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a44ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a70.5MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int getScore(vector<int>& player) {\n        int cur = 0, sum = 0;\n        for (auto &v: player) {\n            sum += v + v * ((cur & 0b11) != 0);\n            cur = cur << 1 | (v == 10);\n        }\n        return sum;\n    }\n    int isWinner(vector<int>& player1, vector<int>& player2) {\n        int s1 = getScore(player1), s2 = getScore(player2);\n        return s1 > s2 ? 1 : s2 > s1 ? 2 : 0;\n    }\n};\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-27"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.9MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def isWinner(self, player1: List[int], player2: List[int]) -> int:\n        def getScore(player: List[int]) -> int:\n            cur = 0\n            sum = 0\n            for v in player:\n                sum += v + v * ((cur & 0b11) != 0)\n                cur = cur << 1 | (v == 10)\n            return sum\n        s1, s2 = getScore(player1), getScore(player2)\n        return 1 if s1 > s2 else 2 if s2 > s1 else 0\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-27"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.12MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn is_winner(player1: Vec<i32>, player2: Vec<i32>) -> i32 {\n        fn getScore(player: &Vec<i32>) -> i32 {\n            let mut cur = 0;\n            let mut sum = 0;\n            for v in player {\n                sum += *v + *v * ((cur & 0b11) != 0) as i32;\n                cur = cur << 1 | (*v == 10) as i32;\n            }\n            sum\n        }\n        let (s1, s2) = (getScore(&player1), getScore(&player2));\n        if s1 > s2 {\n            1\n        } else if s2 > s1 {\n            2\n        } else {\n            0\n        }\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8556:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var s=r(58101);const l={},t=s.createContext(l);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);