"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[4568],{710:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var i=t(86070),s=t(25710);const c={},l="710.\u9ed1\u540d\u5355\u4e2d\u7684\u968f\u673a\u6570",r={id:"leetcode/701-800/\u9ed1\u540d\u5355\u4e2d\u7684\u968f\u673a\u6570",title:"710.\u9ed1\u540d\u5355\u4e2d\u7684\u968f\u673a\u6570",description:"\u94fe\u63a5\uff1a710.\u9ed1\u540d\u5355\u4e2d\u7684\u968f\u673a\u6570",source:"@site/docs/leetcode/701-800/710.\u9ed1\u540d\u5355\u4e2d\u7684\u968f\u673a\u6570.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u9ed1\u540d\u5355\u4e2d\u7684\u968f\u673a\u6570",permalink:"/docs/leetcode/701-800/\u9ed1\u540d\u5355\u4e2d\u7684\u968f\u673a\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:710,frontMatter:{},sidebar:"journal",previous:{title:"709.\u8f6c\u6362\u6210\u5c0f\u5199\u5b57\u6bcd",permalink:"/docs/leetcode/701-800/\u8f6c\u6362\u6210\u5c0f\u5199\u5b57\u6bcd"},next:{title:"713.\u4e58\u79ef\u5c0f\u4e8eK\u7684\u5b50\u6570\u7ec4",permalink:"/docs/leetcode/701-800/\u4e58\u79ef\u5c0f\u4e8eK\u7684\u5b50\u6570\u7ec4"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"710\u9ed1\u540d\u5355\u4e2d\u7684\u968f\u673a\u6570",children:"710.\u9ed1\u540d\u5355\u4e2d\u7684\u968f\u673a\u6570"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/random-pick-with-blacklist",children:"710.\u9ed1\u540d\u5355\u4e2d\u7684\u968f\u673a\u6570"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u6570\u5b66\u3001\u4e8c\u5206\u67e5\u627e\u3001\u6392\u5e8f\u3001\u968f\u673a\u5316",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570 n \u548c\u4e00\u4e2a \u65e0\u91cd\u590d \u9ed1\u540d\u5355\u6574\u6570\u6570\u7ec4 \xa0blacklist\xa0\u3002\u8bbe\u8ba1\u4e00\u79cd\u7b97\u6cd5\uff0c\u4ece [0, n - 1] \u8303\u56f4\u5185\u7684\u4efb\u610f\u6574\u6570\u4e2d\u9009\u53d6\u4e00\u4e2a \xa0 \u672a\u52a0\u5165 \xa0 \u9ed1\u540d\u5355 \xa0blacklist\xa0 \u7684\u6574\u6570\u3002\u4efb\u4f55\u5728\u4e0a\u8ff0\u8303\u56f4\u5185\u4e14\u4e0d\u5728\u9ed1\u540d\u5355 \xa0blacklist\xa0 \u4e2d\u7684\u6574\u6570\u90fd\u5e94\u8be5\u6709 \u540c\u7b49\u7684\u53ef\u80fd\u6027 \u88ab\u8fd4\u56de\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-06-26"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a112ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a68.6MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4fee\u6539\u968f\u673a\u8303\u56f4\u628a\u8303\u56f4\u5185\u4e0d\u53ef\u80fd\u53d6\u5230\u7684\u503c\u6620\u5c04\u51fa\u53bb\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int n;\n    unordered_map<int, int> m;\n    Solution(int n, vector<int> &blacklist) {\n        srand(time(0));\n        int size = blacklist.size(), nextN = n - size;\n        unordered_set<int> s;\n        for (auto &num : blacklist) {\n            if (num >= nextN) s.emplace(num);\n        }\n        int i = nextN;\n        for (auto &num : blacklist) {\n            if (num >= nextN) continue;\n            while (s.count(i)) i++;\n            m[num] = i++;\n        }\n        this->n = nextN;\n    }\n    int pick() {\n        int num = floor(random() % n);\n        return m.count(num) ? m[num] : num;\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>r});var i=t(30758);const s={},c=i.createContext(s);function l(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);