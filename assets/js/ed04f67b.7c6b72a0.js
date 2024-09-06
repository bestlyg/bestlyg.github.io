"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[72587],{53539:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=i(86070),t=i(25710);const r={},c="1447.\u6700\u7b80\u5206\u6570",l={id:"leetcode/1401-1500/\u6700\u7b80\u5206\u6570",title:"1447.\u6700\u7b80\u5206\u6570",description:"\u94fe\u63a5\uff1a1447.\u6700\u7b80\u5206\u6570",source:"@site/docs/leetcode/1401-1500/1447.\u6700\u7b80\u5206\u6570.md",sourceDirName:"leetcode/1401-1500",slug:"/leetcode/1401-1500/\u6700\u7b80\u5206\u6570",permalink:"/docs/leetcode/1401-1500/\u6700\u7b80\u5206\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1447,frontMatter:{},sidebar:"journal",previous:{title:"1446.\u8fde\u7eed\u5b57\u7b26",permalink:"/docs/leetcode/1401-1500/\u8fde\u7eed\u5b57\u7b26"},next:{title:"1448.\u7edf\u8ba1\u4e8c\u53c9\u6811\u4e2d\u597d\u8282\u70b9\u7684\u6570\u76ee",permalink:"/docs/leetcode/1401-1500/\u7edf\u8ba1\u4e8c\u53c9\u6811\u4e2d\u597d\u8282\u70b9\u7684\u6570\u76ee"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"1447\u6700\u7b80\u5206\u6570",children:"1447.\u6700\u7b80\u5206\u6570"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/simplified-fractions",children:"1447.\u6700\u7b80\u5206\u6570"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u5b57\u7b26\u4e32\u3001\u6570\u8bba",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570 n \uff0c\u8bf7\u4f60\u8fd4\u56de\u6240\u6709 0 \u5230 1 \u4e4b\u95f4\uff08\u4e0d\u5305\u62ec 0 \u548c 1\uff09\u6ee1\u8db3\u5206\u6bcd\u5c0f\u4e8e\u7b49\u4e8e n \u7684 \u6700\u7b80 \u5206\u6570 \u3002\u5206\u6570\u53ef\u4ee5\u4ee5 \u4efb\u610f \u987a\u5e8f\u8fd4\u56de\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-11"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.8MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6700\u5927\u516c\u7ea6\u6570\u4e3a 1\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function gcd(a: number, b: number) {\n  return b ? gcd(b, a % b) : a;\n}\nfunction simplifiedFractions(n: number): string[] {\n  const ans: string[] = [];\n  for (let i = 2; i <= n; i++) {\n    for (let j = 1; j < i; j++) {\n      if (gcd(i, j) === 1) ans.push(`${j}/${i}`);\n    }\n  }\n  return ans;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-10"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a116ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a32.5MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5224\u65ad\u6700\u5927\u516c\u7ea6\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'class Solution {\n   public:\n    vector<string> simplifiedFractions(int n) {\n        unordered_set<string> s;\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j < i; j++) {\n                int num = gcd(i, j);\n                s.insert(to_string(j / num) + "/" + to_string(i / num));\n            }\n        }\n        vector<string> ans;\n        for (auto& str : s) ans.push_back(str);\n        return ans;\n    }\n};\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-10"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a21.3MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5224\u65ad\u6700\u5927\u516c\u7ea6\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:'class Solution {\n   public:\n    vector<string> simplifiedFractions(int n) {\n        vector<string> ans;\n        for (int i = 2; i <= n; i++) {\n            for (int j = 1; j < i; j++) {\n                if (j == 1 || gcd(i, j) == 1)\n                    ans.push_back(to_string(j) + "/" + to_string(i));\n            }\n        }\n        return ans;\n    }\n};\n'})})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>l});var s=i(30758);const t={},r=s.createContext(t);function c(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);