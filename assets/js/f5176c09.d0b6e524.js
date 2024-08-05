"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[36248],{63896:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var s=t(86070),o=t(25710);const c={},r="409.\u6700\u957f\u56de\u6587\u4e32",i={id:"leetcode/401-500/\u6700\u957f\u56de\u6587\u4e32",title:"409.\u6700\u957f\u56de\u6587\u4e32",description:"\u94fe\u63a5\uff1a409.\u6700\u957f\u56de\u6587\u4e32",source:"@site/docs/leetcode/401-500/409.\u6700\u957f\u56de\u6587\u4e32.md",sourceDirName:"leetcode/401-500",slug:"/leetcode/401-500/\u6700\u957f\u56de\u6587\u4e32",permalink:"/web/site/docs/leetcode/401-500/\u6700\u957f\u56de\u6587\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:409,frontMatter:{},sidebar:"journal",previous:{title:"406.\u6839\u636e\u8eab\u9ad8\u91cd\u5efa\u961f\u5217",permalink:"/web/site/docs/leetcode/401-500/\u6839\u636e\u8eab\u9ad8\u91cd\u5efa\u961f\u5217"},next:{title:"410.\u5206\u5272\u6570\u7ec4\u7684\u6700\u5927\u503c",permalink:"/web/site/docs/leetcode/401-500/\u5206\u5272\u6570\u7ec4\u7684\u6700\u5927\u503c"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"409\u6700\u957f\u56de\u6587\u4e32",children:"409.\u6700\u957f\u56de\u6587\u4e32"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/longest-palindrome",children:"409.\u6700\u957f\u56de\u6587\u4e32"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5305\u542b\u5927\u5199\u5b57\u6bcd\u548c\u5c0f\u5199\u5b57\u6bcd\u7684\u5b57\u7b26\u4e32 s \uff0c\u8fd4\u56de \u901a\u8fc7\u8fd9\u4e9b\u5b57\u6bcd\u6784\u9020\u6210\u7684 \u6700\u957f\u7684\u56de\u6587\u4e32 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-15"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.6MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7edf\u8ba1\u5b57\u7b26\u7684\u5947\u5076\u6027\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int longestPalindrome(string s) {\n        unordered_map<char, int> m;\n        for (auto &c : s) m[c]++;\n        int ans = 0, odd = 0;\n        for (auto &item : m) {\n            if (item.second & 1) {\n                odd = 1;\n                item.second -= 1;\n            }\n            ans += item.second;\n        }\n        return ans + odd;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(30758);const o={},c=s.createContext(o);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);