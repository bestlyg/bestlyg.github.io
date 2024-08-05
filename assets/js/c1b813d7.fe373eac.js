"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[5150],{76061:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=t(86070),o=t(25710);const r={},c="1684.\u7edf\u8ba1\u4e00\u81f4\u5b57\u7b26\u4e32\u7684\u6570\u76ee",i={id:"leetcode/1601-1700/\u7edf\u8ba1\u4e00\u81f4\u5b57\u7b26\u4e32\u7684\u6570\u76ee",title:"1684.\u7edf\u8ba1\u4e00\u81f4\u5b57\u7b26\u4e32\u7684\u6570\u76ee",description:"\u94fe\u63a5\uff1a1684.\u7edf\u8ba1\u4e00\u81f4\u5b57\u7b26\u4e32\u7684\u6570\u76ee",source:"@site/docs/leetcode/1601-1700/1684.\u7edf\u8ba1\u4e00\u81f4\u5b57\u7b26\u4e32\u7684\u6570\u76ee.md",sourceDirName:"leetcode/1601-1700",slug:"/leetcode/1601-1700/\u7edf\u8ba1\u4e00\u81f4\u5b57\u7b26\u4e32\u7684\u6570\u76ee",permalink:"/web/site/docs/leetcode/1601-1700/\u7edf\u8ba1\u4e00\u81f4\u5b57\u7b26\u4e32\u7684\u6570\u76ee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1684,frontMatter:{},sidebar:"journal",previous:{title:"1681.\u6700\u5c0f\u4e0d\u517c\u5bb9\u6027",permalink:"/web/site/docs/leetcode/1601-1700/\u6700\u5c0f\u4e0d\u517c\u5bb9\u6027"},next:{title:"1686.\u77f3\u5b50\u6e38\u620fVI",permalink:"/web/site/docs/leetcode/1601-1700/\u77f3\u5b50\u6e38\u620fVI"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1684\u7edf\u8ba1\u4e00\u81f4\u5b57\u7b26\u4e32\u7684\u6570\u76ee",children:"1684.\u7edf\u8ba1\u4e00\u81f4\u5b57\u7b26\u4e32\u7684\u6570\u76ee"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/count-the-number-of-consistent-strings",children:"1684.\u7edf\u8ba1\u4e00\u81f4\u5b57\u7b26\u4e32\u7684\u6570\u76ee"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de words \u6570\u7ec4\u4e2d \u4e00\u81f4\u5b57\u7b26\u4e32 \u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-08"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a32ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a29.4MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int countConsistentStrings(string allowed, vector<string>& words) {\n        int list[26] = {0};\n        for (auto &c : allowed) list[c - 'a'] = 1;\n        int ans = 0;\n        for (auto &s : words) {\n            bool f = true;\n            for (auto &c : s) {\n                if (list[c - 'a'] == 0) {\n                    f = false;\n                    break;\n                }\n            }\n            if (f) ans++;\n        }\n        return ans;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(30758);const o={},r=s.createContext(o);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);