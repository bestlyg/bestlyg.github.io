"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[44576],{57919:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"leetcode/2601-2700/\u6709\u76f8\u540c\u989c\u8272\u7684\u76f8\u90bb\u5143\u7d20\u6570\u76ee","title":"2672.\u6709\u76f8\u540c\u989c\u8272\u7684\u76f8\u90bb\u5143\u7d20\u6570\u76ee","description":"\u94fe\u63a5\uff1a2672.\u6709\u76f8\u540c\u989c\u8272\u7684\u76f8\u90bb\u5143\u7d20\u6570\u76ee","source":"@site/docs/leetcode/2601-2700/2672.\u6709\u76f8\u540c\u989c\u8272\u7684\u76f8\u90bb\u5143\u7d20\u6570\u76ee.md","sourceDirName":"leetcode/2601-2700","slug":"/leetcode/2601-2700/\u6709\u76f8\u540c\u989c\u8272\u7684\u76f8\u90bb\u5143\u7d20\u6570\u76ee","permalink":"/docs/leetcode/2601-2700/\u6709\u76f8\u540c\u989c\u8272\u7684\u76f8\u90bb\u5143\u7d20\u6570\u76ee","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2672,"frontMatter":{},"sidebar":"journal","previous":{"title":"2671.\u9891\u7387\u8ddf\u8e2a\u5668","permalink":"/docs/leetcode/2601-2700/\u9891\u7387\u8ddf\u8e2a\u5668"},"next":{"title":"2673.\u4f7f\u4e8c\u53c9\u6811\u6240\u6709\u8def\u5f84\u503c\u76f8\u7b49\u7684\u6700\u5c0f\u4ee3\u4ef7","permalink":"/docs/leetcode/2601-2700/\u4f7f\u4e8c\u53c9\u6811\u6240\u6709\u8def\u5f84\u503c\u76f8\u7b49\u7684\u6700\u5c0f\u4ee3\u4ef7"}}');var l=i(86070),r=i(31503);const t={},c="2672.\u6709\u76f8\u540c\u989c\u8272\u7684\u76f8\u90bb\u5143\u7d20\u6570\u76ee",d={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function x(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"2672\u6709\u76f8\u540c\u989c\u8272\u7684\u76f8\u90bb\u5143\u7d20\u6570\u76ee",children:"2672.\u6709\u76f8\u540c\u989c\u8272\u7684\u76f8\u90bb\u5143\u7d20\u6570\u76ee"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/number-of-adjacent-elements-with-the-same-color",children:"2672.\u6709\u76f8\u540c\u989c\u8272\u7684\u76f8\u90bb\u5143\u7d20\u6570\u76ee"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u3001\u957f\u5ea6\u4e3a n \u7684\u6570\u7ec4 nums \u3002\u8bf7\u4f60\u8fd4\u56de\u4e00\u4e2a\u957f\u5ea6\u4e0e queries \u76f8\u7b49\u7684\u6570\u7ec4 answer \uff0c\u5176\u4e2d answer[i]\u662f\u524d i \u4e2a\u64cd\u4f5c \u4e4b\u540e \uff0c\u76f8\u90bb\u5143\u7d20\u989c\u8272\u76f8\u540c\u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-07"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a452ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a197.9MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6bcf\u6b21\u7740\u8272\u65f6\u7edf\u8ba1\u5bf9\u524d\u540e\u4e24\u4e2a\u503c\u5f97\u5f71\u54cd\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> colorTheArray(int n, vector<vector<int>>& queries) {\n        vector<int> res(queries.size(), 0), list(n, 0);\n        if (n == 1) return res;\n        int prev = 0;\n        for (int i = 0; i < queries.size(); i++) {\n            int idx = queries[i][0], col = queries[i][1];\n            if (list[idx] != col) {\n                if (idx != n - 1) {\n                    if (list[idx] == 0) {\n                        if (col == list[idx + 1]) prev++;\n                    } else {\n                        if (list[idx] == list[idx + 1]) prev--;\n                        else if (col == list[idx + 1]) prev++;\n                    }\n                }\n                if (idx != 0) {\n                    if (list[idx] == 0) {\n                        if (col == list[idx - 1]) prev++;\n                    } else {\n                        if (list[idx] == list[idx - 1]) prev--;\n                        else if (col == list[idx - 1]) prev++;\n                    }\n                }\n            }\n            list[idx] = col;\n            res[i] = prev;\n        }\n        return res;\n    }\n};\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-07"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a276ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a47.6MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def colorTheArray(self, n: int, queries: List[List[int]]) -> List[int]:\n        res = [0] * len(queries)\n        list = [0] * n\n        if n == 1:\n            return res\n        prev = 0\n        for i in range(0, len(queries)):\n            idx = queries[i][0]\n            col = queries[i][1]\n            if list[idx] != col:\n                if idx != n - 1:\n                    if list[idx] == 0:\n                        if col == list[idx + 1]:\n                            prev += 1\n                    else:\n                        if list[idx] == list[idx + 1]:\n                            prev -= 1\n                        elif col == list[idx + 1]:\n                            prev += 1\n                if idx != 0:\n                    if list[idx] == 0:\n                        if col == list[idx - 1]:\n                            prev += 1\n                    else:\n                        if list[idx] == list[idx - 1]:\n                            prev -= 1\n                        elif col == list[idx - 1]:\n                            prev += 1\n            list[idx] = col\n            res[i] = prev\n        return res\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-07"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a60ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.8MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn color_the_array(n: i32, queries: Vec<Vec<i32>>) -> Vec<i32> {\n        let n = n as usize;\n        let mut res = vec![0; queries.len()];\n        let mut list = vec![0; n];\n        if n != 1 {\n            let mut prev = 0;\n            for i in 0..queries.len() {\n                let idx = queries[i][0] as usize;\n                let col = queries[i][1];\n                if list[idx] != col {\n                    if idx != n - 1 {\n                        if list[idx] == 0 {\n                            if col == list[idx + 1] {\n                                prev += 1;\n                            }\n                        } else {\n                            if list[idx] == list[idx + 1] {\n                                prev -= 1;\n                            } else if col == list[idx + 1] {\n                                prev += 1;\n                            }\n                        }\n                    }\n                    if idx != 0 {\n                        if list[idx] == 0 {\n                            if col == list[idx - 1] {\n                                prev += 1;\n                            }\n                        } else {\n                            if list[idx] == list[idx - 1] {\n                                prev -= 1;\n                            } else if col == list[idx - 1] {\n                                prev += 1;\n                            }\n                        }\n                    }\n                }\n                list[idx] = col;\n                res[i] = prev;\n            }\n        }\n        res\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},31503:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var s=i(30758);const l={},r=s.createContext(l);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);