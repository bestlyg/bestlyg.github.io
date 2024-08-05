"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[46654],{20849:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=l(86070),s=l(25710);const i={},r="2413.\u6700\u5c0f\u5076\u500d\u6570",c={id:"leetcode/2401-2500/\u6700\u5c0f\u5076\u500d\u6570",title:"2413.\u6700\u5c0f\u5076\u500d\u6570",description:"\u94fe\u63a5\uff1a2413.\u6700\u5c0f\u5076\u500d\u6570",source:"@site/docs/leetcode/2401-2500/2413.\u6700\u5c0f\u5076\u500d\u6570.md",sourceDirName:"leetcode/2401-2500",slug:"/leetcode/2401-2500/\u6700\u5c0f\u5076\u500d\u6570",permalink:"/docs/leetcode/2401-2500/\u6700\u5c0f\u5076\u500d\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2413,frontMatter:{},sidebar:"journal",previous:{title:"2409.\u7edf\u8ba1\u5171\u540c\u5ea6\u8fc7\u7684\u65e5\u5b50\u6570",permalink:"/docs/leetcode/2401-2500/\u7edf\u8ba1\u5171\u540c\u5ea6\u8fc7\u7684\u65e5\u5b50\u6570"},next:{title:"2415.\u53cd\u8f6c\u4e8c\u53c9\u6811\u7684\u5947\u6570\u5c42",permalink:"/docs/leetcode/2401-2500/\u53cd\u8f6c\u4e8c\u53c9\u6811\u7684\u5947\u6570\u5c42"}},d={},o=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"2413\u6700\u5c0f\u5076\u500d\u6570",children:"2413.\u6700\u5c0f\u5076\u500d\u6570"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/smallest-even-multiple",children:"2413.\u6700\u5c0f\u5076\u500d\u6570"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u6570\u8bba",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6b63\u6574\u6570 n \uff0c\u8fd4\u56de 2 \u548c n \u7684\u6700\u5c0f\u516c\u500d\u6570\uff08\u6b63\u6574\u6570\uff09\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-21"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.8MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","gcd\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"int gcd(int a, int b) {\n    if (a < b) return gcd(b, a);\n    if (b == 0) return a;\n    return gcd(b, a % b);\n}\nclass Solution {\npublic:\n    int smallestEvenMultiple(int n) {\n        int res = gcd(2, n), num = 2 * n / res;\n        if (num % 2 != 0) num *= 2;\n        return num;\n    }\n};\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-21"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a52ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.7MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"def gcd(a: int, b: int):\n    if a < b:\n        return gcd(b, a)\n    if b == 0:\n        return a\n    return gcd(b, a % b)\n\n\nclass Solution:\n    def smallestEvenMultiple(self, n: int) -> int:\n        res = gcd(2, n)\n        num = 2*n/res\n        if num % 2 != 0:\n            num *= 2\n        return int(num) \n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-21"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"fn gcd(a: i32, b: i32) -> i32 {\n    if a < b {\n        gcd(b, a)\n    } else if b == 0 {\n        a\n    } else {\n        gcd(b, a % b)\n    }\n}\n\nimpl Solution {\n    pub fn smallest_even_multiple(n: i32) -> i32 {\n        let res = gcd(2, n);\n        let mut num = 2 * n / res;\n        if num % 2 != 0 {\n            num *= 2;\n        }\n        num\n    }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},25710:(n,e,l)=>{l.d(e,{R:()=>r,x:()=>c});var t=l(30758);const s={},i=t.createContext(s);function r(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);