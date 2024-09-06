"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[86850],{50503:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var r=l(86070),s=l(25710);const t={},i="2432.\u5904\u7406\u7528\u65f6\u6700\u957f\u7684\u90a3\u4e2a\u4efb\u52a1\u7684\u5458\u5de5",o={id:"leetcode/2401-2500/\u5904\u7406\u7528\u65f6\u6700\u957f\u7684\u90a3\u4e2a\u4efb\u52a1\u7684\u5458\u5de5",title:"2432.\u5904\u7406\u7528\u65f6\u6700\u957f\u7684\u90a3\u4e2a\u4efb\u52a1\u7684\u5458\u5de5",description:"\u94fe\u63a5\uff1a2432.\u5904\u7406\u7528\u65f6\u6700\u957f\u7684\u90a3\u4e2a\u4efb\u52a1\u7684\u5458\u5de5",source:"@site/docs/leetcode/2401-2500/2432.\u5904\u7406\u7528\u65f6\u6700\u957f\u7684\u90a3\u4e2a\u4efb\u52a1\u7684\u5458\u5de5.md",sourceDirName:"leetcode/2401-2500",slug:"/leetcode/2401-2500/\u5904\u7406\u7528\u65f6\u6700\u957f\u7684\u90a3\u4e2a\u4efb\u52a1\u7684\u5458\u5de5",permalink:"/docs/leetcode/2401-2500/\u5904\u7406\u7528\u65f6\u6700\u957f\u7684\u90a3\u4e2a\u4efb\u52a1\u7684\u5458\u5de5",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2432,frontMatter:{},sidebar:"journal",previous:{title:"2427.\u516c\u56e0\u5b50\u7684\u6570\u76ee",permalink:"/docs/leetcode/2401-2500/\u516c\u56e0\u5b50\u7684\u6570\u76ee"},next:{title:"2437.\u6709\u6548\u65f6\u95f4\u7684\u6570\u76ee",permalink:"/docs/leetcode/2401-2500/\u6709\u6548\u65f6\u95f4\u7684\u6570\u76ee"}},c={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"2432\u5904\u7406\u7528\u65f6\u6700\u957f\u7684\u90a3\u4e2a\u4efb\u52a1\u7684\u5458\u5de5",children:"2432.\u5904\u7406\u7528\u65f6\u6700\u957f\u7684\u90a3\u4e2a\u4efb\u52a1\u7684\u5458\u5de5"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/the-employee-that-worked-on-the-longest-task",children:"2432.\u5904\u7406\u7528\u65f6\u6700\u957f\u7684\u90a3\u4e2a\u4efb\u52a1\u7684\u5458\u5de5"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u5904\u7406\u7528\u65f6\u6700\u957f\u7684\u90a3\u4e2a\u4efb\u52a1\u7684\u5458\u5de5\u7684 id \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-05"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a56ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a34.8MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int hardestWorker(int n, vector<vector<int>>& logs) {\n        int prev = 0, resVal = 0, res;\n        for (auto &log : logs) {\n            int val = log[1] - prev;\n            if (val > resVal || val == resVal && log[0] < res) resVal = val, res = log[0];\n            prev = log[1];\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-05"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a368ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.2MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def hardestWorker(self, n: int, logs: List[List[int]]) -> int:\n        prev = 0\n        resVal = 0\n        res = 0\n        for log in logs:\n            val = log[1] - prev\n            if val > resVal or val == resVal and log[0] < res:\n                resVal = val\n                res = log[0]\n            prev = log[1]\n        return res\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-05"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn hardest_worker(n: i32, logs: Vec<Vec<i32>>) -> i32 {\n        let mut prev = 0;\n        let mut resVal = 0;\n        let mut res = 0;\n        for log in logs {\n            let val = log[1] - prev;\n            if val > resVal || val == resVal && log[0] < res {\n                resVal = val;\n                res = log[0];\n            }\n            prev = log[1];\n        }\n        res\n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>o});var r=l(30758);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);