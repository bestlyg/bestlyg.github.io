"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[13817],{26067:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=l(86070),t=l(25710);const o={},i="2550.\u7334\u5b50\u78b0\u649e\u7684\u65b9\u6cd5\u6570",r={id:"leetcode/2501-2600/\u7334\u5b50\u78b0\u649e\u7684\u65b9\u6cd5\u6570",title:"2550.\u7334\u5b50\u78b0\u649e\u7684\u65b9\u6cd5\u6570",description:"\u94fe\u63a5\uff1a2550.\u7334\u5b50\u78b0\u649e\u7684\u65b9\u6cd5\u6570",source:"@site/docs/leetcode/2501-2600/2550.\u7334\u5b50\u78b0\u649e\u7684\u65b9\u6cd5\u6570.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u7334\u5b50\u78b0\u649e\u7684\u65b9\u6cd5\u6570",permalink:"/docs/leetcode/2501-2600/\u7334\u5b50\u78b0\u649e\u7684\u65b9\u6cd5\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2550,frontMatter:{},sidebar:"journal",previous:{title:"2549.\u7edf\u8ba1\u684c\u9762\u4e0a\u7684\u4e0d\u540c\u6570\u5b57",permalink:"/docs/leetcode/2501-2600/\u7edf\u8ba1\u684c\u9762\u4e0a\u7684\u4e0d\u540c\u6570\u5b57"},next:{title:"2551.\u5c06\u73e0\u5b50\u653e\u5165\u80cc\u5305\u4e2d",permalink:"/docs/leetcode/2501-2600/\u5c06\u73e0\u5b50\u653e\u5165\u80cc\u5305\u4e2d"}},c={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"2550\u7334\u5b50\u78b0\u649e\u7684\u65b9\u6cd5\u6570",children:"2550.\u7334\u5b50\u78b0\u649e\u7684\u65b9\u6cd5\u6570"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/count-collisions-of-monkeys-on-a-polygon",children:"2550.\u7334\u5b50\u78b0\u649e\u7684\u65b9\u6cd5\u6570"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u9012\u5f52\u3001\u6570\u5b66",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u7334\u5b50\u81f3\u5c11\u53d1\u751f \u4e00\u6b21\u78b0\u649e \u7684\u79fb\u52a8\u65b9\u6cd5\u6570\u3002\u7531\u4e8e\u7b54\u6848\u53ef\u80fd\u975e\u5e38\u5927\uff0c\u8bf7\u8fd4\u56de\u5bf9 109+7 \u53d6\u4f59\u540e\u7684\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-29"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.3MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8d2a\u5fc3\uff0c \u53ea\u6709\u5728\u90fd\u987a\u548c\u90fd\u9006\u624d\u4e0d\u76f8\u649e, \u5feb\u901f\u5e42\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"typedef long long ll;\nint mod = 1e9 + 7;\nll quick_pow(ll a, ll b) {\n    ll ans = 1, tmp = a;\n    for (; b; b >>= 1) {\n        if (b & 1) ans = (ans * tmp) % mod;\n        tmp = (tmp * tmp) % mod;\n    }\n    return ans;\n}\n\nclass Solution {\npublic:\n    int monkeyMove(int n) {\n        return (quick_pow(2, n) + mod - 2) % mod;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-29"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a32ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.8MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def monkeyMove(self, n: int) -> int:\n        mod = 10 ** 9 + 7\n        return (pow(2, n, mod) + mod - 2) % mod\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-29"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"fn pow(base: i64, exp: i64, mod_num: i64) -> i64 {\n    let mut exp = exp;\n    let mut tmp = base;\n    let mut ans = 1;\n    while exp != 0 {\n        if exp % 2 == 1 {\n            ans = (ans * tmp) % mod_num;\n        }\n        tmp = (tmp * tmp) % mod_num;\n        exp >>= 1\n    }\n    ans\n}\n\nimpl Solution {\n    pub fn monkey_move(n: i32) -> i32 {\n        let mod_num = 1000000007;\n        ((pow(2, n as i64, mod_num) + mod_num - 2) % mod_num) as i32\n    }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},25710:(n,e,l)=>{l.d(e,{R:()=>i,x:()=>r});var s=l(30758);const t={},o=s.createContext(t);function i(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);