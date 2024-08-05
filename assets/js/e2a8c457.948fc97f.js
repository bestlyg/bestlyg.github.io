"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[13264],{59703:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var t=c(86070),l=c(25710);const o={},r="1201.\u4e11\u6570III",i={id:"leetcode/1201-1300/\u4e11\u6570III",title:"1201.\u4e11\u6570III",description:"\u94fe\u63a5\uff1a1201.\u4e11\u6570III",source:"@site/docs/leetcode/1201-1300/1201.\u4e11\u6570III.md",sourceDirName:"leetcode/1201-1300",slug:"/leetcode/1201-1300/\u4e11\u6570III",permalink:"/web/site/docs/leetcode/1201-1300/\u4e11\u6570III",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1201,frontMatter:{},sidebar:"journal",previous:{title:"1200.\u6700\u5c0f\u7edd\u5bf9\u5dee",permalink:"/web/site/docs/leetcode/1101-1200/\u6700\u5c0f\u7edd\u5bf9\u5dee"},next:{title:"1202.\u4ea4\u6362\u5b57\u7b26\u4e32\u4e2d\u7684\u5143\u7d20",permalink:"/web/site/docs/leetcode/1201-1300/\u4ea4\u6362\u5b57\u7b26\u4e32\u4e2d\u7684\u5143\u7d20"}},s={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"1201\u4e11\u6570iii",children:"1201.\u4e11\u6570III"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/ugly-number-iii",children:"1201.\u4e11\u6570III"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u4e8c\u5206\u67e5\u627e\u3001\u7ec4\u5408\u6570\u5b66\u3001\u6570\u8bba",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u56db\u4e2a\u6574\u6570\uff1an \u3001a \u3001b \u3001c \uff0c\u8bf7\u4f60\u8bbe\u8ba1\u4e00\u4e2a\u7b97\u6cd5\u6765\u627e\u51fa\u7b2c n \u4e2a\u4e11\u6570\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-01-07"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.8MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u7b54\u6848\uff0c\u6c42\u51fa\u5728\u6570\u503c x \u4e4b\u524d\u6709\u51e0\u4e2a\u4e11\u6570\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:'class Solution {\n   public:\n    long long gcd(long long a, long long b) {\n        if (b) return gcd(b, a % b);\n        return a;\n    }\n    long long lcm(long long a, long long b) {\n        return (long long)(a * b / gcd(a, b));\n    }\n    long long a, b, c, ab, ac, bc, abc;\n    long long get(long long cnt) {\n        //printf("a = %d, b = %d, c = %d, ab = %d, ac = %d, bc = %d, abc = %d\n",\n        //       a, b, c, ab, ac, bc, abc);\n        return cnt / a + cnt / b + cnt / c - cnt / ab - cnt / bc - cnt / ac +\n               cnt / abc;\n    }\n    int nthUglyNumber(int n, int a, int b, int c) {\n        this->a = a;\n        this->b = b;\n        this->c = c;\n        ab = lcm(a, b);\n        ac = lcm(a, c);\n        bc = lcm(b, c);\n        abc = lcm(a, lcm(b, c));\n        long long l = 1, r = 2000000000, m;\n        while (l < r) {\n            m = (l + r) / 2;\n            if (get(m) >= n)\n                r = m;\n            else\n                l = m + 1;\n        }\n        return l;\n    }\n};\n'})})]})}function b(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},25710:(n,e,c)=>{c.d(e,{R:()=>r,x:()=>i});var t=c(30758);const l={},o=t.createContext(l);function r(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);