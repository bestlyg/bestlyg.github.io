"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[6452],{41454:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=i(86070),t=i(25710);const o={},s="1754.\u6784\u9020\u5b57\u5178\u5e8f\u6700\u5927\u7684\u5408\u5e76\u5b57\u7b26\u4e32",c={id:"leetcode/1701-1800/\u6784\u9020\u5b57\u5178\u5e8f\u6700\u5927\u7684\u5408\u5e76\u5b57\u7b26\u4e32",title:"1754.\u6784\u9020\u5b57\u5178\u5e8f\u6700\u5927\u7684\u5408\u5e76\u5b57\u7b26\u4e32",description:"\u94fe\u63a5\uff1a1754.\u6784\u9020\u5b57\u5178\u5e8f\u6700\u5927\u7684\u5408\u5e76\u5b57\u7b26\u4e32",source:"@site/docs/leetcode/1701-1800/1754.\u6784\u9020\u5b57\u5178\u5e8f\u6700\u5927\u7684\u5408\u5e76\u5b57\u7b26\u4e32.md",sourceDirName:"leetcode/1701-1800",slug:"/leetcode/1701-1800/\u6784\u9020\u5b57\u5178\u5e8f\u6700\u5927\u7684\u5408\u5e76\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/1701-1800/\u6784\u9020\u5b57\u5178\u5e8f\u6700\u5927\u7684\u5408\u5e76\u5b57\u7b26\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1754,frontMatter:{},sidebar:"journal",previous:{title:"1753.\u79fb\u9664\u77f3\u5b50\u7684\u6700\u5927\u5f97\u5206",permalink:"/docs/leetcode/1701-1800/\u79fb\u9664\u77f3\u5b50\u7684\u6700\u5927\u5f97\u5206"},next:{title:"1758.\u751f\u6210\u4ea4\u66ff\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u7684\u6700\u5c11\u64cd\u4f5c\u6570",permalink:"/docs/leetcode/1701-1800/\u751f\u6210\u4ea4\u66ff\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u7684\u6700\u5c11\u64cd\u4f5c\u6570"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"1754\u6784\u9020\u5b57\u5178\u5e8f\u6700\u5927\u7684\u5408\u5e76\u5b57\u7b26\u4e32",children:"1754.\u6784\u9020\u5b57\u5178\u5e8f\u6700\u5927\u7684\u5408\u5e76\u5b57\u7b26\u4e32"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/largest-merge-of-two-strings",children:"1754.\u6784\u9020\u5b57\u5178\u5e8f\u6700\u5927\u7684\u5408\u5e76\u5b57\u7b26\u4e32"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4f60\u53ef\u4ee5\u6784\u9020\u7684\u5b57\u5178\u5e8f \u6700\u5927 \u7684\u5408\u5e76\u5b57\u7b26\u4e32 merge \u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-24"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.3MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540e\u7f00\u6bd4\u8f83\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:'class Solution {\npublic:\n    string largestMerge(string word1, string word2) {\n        string ans = "";\n        int i1 = 0, i2 = 0, n1 = word1.size(), n2 = word2.size();\n        function<bool(int, int)> check = [&](int i1, int i2) -> bool {\n            while (i1 < n1 && i2 < n2 && word1[i1] == word2[i2]) i1++, i2++;\n            if (i2 == n2 && i1 == n1) return true;\n            if (i2 == n2 && i1 != n1) return true;\n            if (i2 != n2 && i1 == n1) return false;\n            return word1[i1] > word2[i2];\n        };\n        while (i1 < n1 || i2 < n2) {\n            if (i2 == n2 || word1[i1] > word2[i2]) ans += word1[i1++];\n            else if (i1 == n1 || word1[i1] < word2[i2]) ans += word2[i2++];\n            else {\n                bool f = check(i1, i2);\n                while (i1 < n1 && i2 < n2 && word1[i1] == word2[i2])\n                    if (f) ans += word1[i1++];\n                    else ans += word2[i2++];\n            }\n        }\n        return ans;\n    }\n};\n'})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},25710:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>c});var r=i(30758);const t={},o=r.createContext(t);function s(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);