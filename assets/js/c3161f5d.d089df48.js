"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[95402],{68642:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"leetcode/801-900/\u5199\u5b57\u7b26\u4e32\u9700\u8981\u7684\u884c\u6570","title":"806.\u5199\u5b57\u7b26\u4e32\u9700\u8981\u7684\u884c\u6570","description":"\u94fe\u63a5\uff1a806.\u5199\u5b57\u7b26\u4e32\u9700\u8981\u7684\u884c\u6570","source":"@site/docs/leetcode/801-900/806.\u5199\u5b57\u7b26\u4e32\u9700\u8981\u7684\u884c\u6570.md","sourceDirName":"leetcode/801-900","slug":"/leetcode/801-900/\u5199\u5b57\u7b26\u4e32\u9700\u8981\u7684\u884c\u6570","permalink":"/docs/leetcode/801-900/\u5199\u5b57\u7b26\u4e32\u9700\u8981\u7684\u884c\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":806,"frontMatter":{},"sidebar":"journal","previous":{"title":"805.\u6570\u7ec4\u7684\u5747\u503c\u5206\u5272","permalink":"/docs/leetcode/801-900/\u6570\u7ec4\u7684\u5747\u503c\u5206\u5272"},"next":{"title":"807.\u4fdd\u6301\u57ce\u5e02\u5929\u9645\u7ebf","permalink":"/docs/leetcode/801-900/\u4fdd\u6301\u57ce\u5e02\u5929\u9645\u7ebf"}}');var r=s(25105),i=s(8556);const c={},l="806.\u5199\u5b57\u7b26\u4e32\u9700\u8981\u7684\u884c\u6570",o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"806\u5199\u5b57\u7b26\u4e32\u9700\u8981\u7684\u884c\u6570",children:"806.\u5199\u5b57\u7b26\u4e32\u9700\u8981\u7684\u884c\u6570"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/number-of-lines-to-write-string",children:"806.\u5199\u5b57\u7b26\u4e32\u9700\u8981\u7684\u884c\u6570"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u81f3\u5c11\u591a\u5c11\u884c\u80fd\u653e\u4e0b S\uff0c\u4ee5\u53ca\u6700\u540e\u4e00\u884c\u4f7f\u7528\u7684\u5bbd\u5ea6\u662f\u591a\u5c11\u4e2a\u5355\u4f4d\uff1f\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-04-12"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.8MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> numberOfLines(vector<int>& widths, string s) {\n        int surplus = 100, line = 1;\n        for (auto &ch : s) {\n            int cnt = widths[ch - 'a'];\n            if (cnt > surplus) {\n                surplus = 100;\n                line++;\n            }\n            surplus -= cnt;\n        }\n        return {line, 100 - surplus};\n    }\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-19"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.6MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    vector<int> numberOfLines(vector<int>& widths, string s) {\n        int line = 1, surplus = 100;\n        for (auto& ch : s) {\n            int width = widths[ch - 'a'];\n            if (surplus < width) {\n                line++;\n                surplus = 100;\n            }\n            surplus -= width;\n        }\n        vector<int> ans = {line, 100 - surplus};\n        return ans;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8556:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>l});var t=s(58101);const r={},i=t.createContext(r);function c(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);