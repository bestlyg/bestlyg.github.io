"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[48127],{81418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var r=t(86070),s=t(25710);const c={},i="2024.\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6",l={id:"leetcode/2001-2100/\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6",title:"2024.\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6",description:"\u94fe\u63a5\uff1a2024.\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6",source:"@site/docs/leetcode/2001-2100/2024.\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6.md",sourceDirName:"leetcode/2001-2100",slug:"/leetcode/2001-2100/\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6",permalink:"/docs/leetcode/2001-2100/\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2024,frontMatter:{},sidebar:"journal",previous:{title:"2022.\u5c06\u4e00\u7ef4\u6570\u7ec4\u8f6c\u53d8\u6210\u4e8c\u7ef4\u6570\u7ec4",permalink:"/docs/leetcode/2001-2100/\u5c06\u4e00\u7ef4\u6570\u7ec4\u8f6c\u53d8\u6210\u4e8c\u7ef4\u6570\u7ec4"},next:{title:"2027.\u8f6c\u6362\u5b57\u7b26\u4e32\u7684\u6700\u5c11\u64cd\u4f5c\u6b21\u6570",permalink:"/docs/leetcode/2001-2100/\u8f6c\u6362\u5b57\u7b26\u4e32\u7684\u6700\u5c11\u64cd\u4f5c\u6b21\u6570"}},o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"2024\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6",children:"2024.\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/maximize-the-confusion-of-an-exam",children:"2024.\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u4e8c\u5206\u67e5\u627e\u3001\u524d\u7f00\u548c\u3001\u6ed1\u52a8\u7a97\u53e3",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u5728\u4e0d\u8d85\u8fc7 k \u6b21\u64cd\u4f5c\u7684\u60c5\u51b5\u4e0b\uff0c\u6700\u5927 \u8fde\u7eed 'T' \u6216\u8005 'F' \u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-29"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a11.7MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u7ef4\u62a4\u4e2d\u95f4 k\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int maxConsecutiveAnswers(string answerKey, int k) {\n        return max(check('T', answerKey, k), check('F', answerKey, k));\n    }\n    int check(char ch, string str, int k) {\n        int n = str.size(), l = 0, r = 0, ans = 0;\n        do {\n            while (r < n && k > 0) {\n                while (r < n && str[r] == ch) r++;\n                k--;\n                if (r < n) r++;\n                while (r < n && str[r] == ch) r++;\n            }\n            ans = max(ans, r - l);\n            while (l < n && k <= 0) {\n                if (str[l] != ch) k++;\n                l++;\n            }\n        } while (r < n);\n        return ans;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(30758);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);