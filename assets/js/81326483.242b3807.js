"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[47320],{20646:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var s=i(86070),t=i(25710);const l={},r="2595.\u5947\u5076\u4f4d\u6570",c={id:"leetcode/2501-2600/\u5947\u5076\u4f4d\u6570",title:"2595.\u5947\u5076\u4f4d\u6570",description:"\u94fe\u63a5\uff1a2595.\u5947\u5076\u4f4d\u6570",source:"@site/docs/leetcode/2501-2600/2595.\u5947\u5076\u4f4d\u6570.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u5947\u5076\u4f4d\u6570",permalink:"/docs/leetcode/2501-2600/\u5947\u5076\u4f4d\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2595,frontMatter:{},sidebar:"journal",previous:{title:"2594.\u4fee\u8f66\u7684\u6700\u5c11\u65f6\u95f4",permalink:"/docs/leetcode/2501-2600/\u4fee\u8f66\u7684\u6700\u5c11\u65f6\u95f4"},next:{title:"2596.\u68c0\u67e5\u9a91\u58eb\u5de1\u89c6\u65b9\u6848",permalink:"/docs/leetcode/2501-2600/\u68c0\u67e5\u9a91\u58eb\u5de1\u89c6\u65b9\u6848"}},d={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"2595\u5947\u5076\u4f4d\u6570",children:"2595.\u5947\u5076\u4f4d\u6570"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/number-of-even-and-odd-bits",children:"2595.\u5947\u5076\u4f4d\u6570"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a \u6b63 \u6574\u6570 n \u3002\u7528 even \u8868\u793a\u5728 n \u7684\u4e8c\u8fdb\u5236\u5f62\u5f0f\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09\u4e2d\u503c\u4e3a 1 \u7684\u5076\u6570\u4e0b\u6807\u7684\u4e2a\u6570\u3002\u7528 odd \u8868\u793a\u5728 n \u7684\u4e8c\u8fdb\u5236\u5f62\u5f0f\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09\u4e2d\u503c\u4e3a 1 \u7684\u5947\u6570\u4e0b\u6807\u7684\u4e2a\u6570\u3002\u8fd4\u56de\u6574\u6570\u6570\u7ec4 answer \uff0c\u5176\u4e2d answer = [even, odd] \u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-19"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> evenOddBit(int n) {\n        int even = 0, odd = 0;\n        for (int i = 0; i < 32; i++) {\n            if (n & (1 << i)) {\n                if (i & 1) odd++;\n                else even++;\n            }\n        }\n        return vector<int>{ even, odd };\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-19"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def evenOddBit(self, n: int) -> List[int]:\n        even, odd = 0, 0\n        for i in range(32):\n            if n & (1 << i):\n                if i & 1:\n                    odd += 1\n                else:\n                    even += 1\n        return [even, odd]\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-03-19"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a1.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn even_odd_bit(n: i32) -> Vec<i32> {\n        let mut res = vec![0, 0];\n        for i in 0..32 {\n            if (n & (1 << i)) != 0{\n                res[i % 2] += 1;\n            }\n        }\n        res\n    }\n}\n"})})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var s=i(30758);const t={},l=s.createContext(t);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);