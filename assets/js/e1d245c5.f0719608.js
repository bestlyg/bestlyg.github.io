"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[25462],{89697:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"leetcode/501-600/\u6700\u5c0f\u65f6\u95f4\u5dee","title":"539.\u6700\u5c0f\u65f6\u95f4\u5dee","description":"\u94fe\u63a5\uff1a539.\u6700\u5c0f\u65f6\u95f4\u5dee","source":"@site/docs/leetcode/501-600/539.\u6700\u5c0f\u65f6\u95f4\u5dee.md","sourceDirName":"leetcode/501-600","slug":"/leetcode/501-600/\u6700\u5c0f\u65f6\u95f4\u5dee","permalink":"/docs/leetcode/501-600/\u6700\u5c0f\u65f6\u95f4\u5dee","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":539,"frontMatter":{},"sidebar":"journal","previous":{"title":"538.\u628a\u4e8c\u53c9\u641c\u7d22\u6811\u8f6c\u6362\u4e3a\u7d2f\u52a0\u6811","permalink":"/docs/leetcode/501-600/\u628a\u4e8c\u53c9\u641c\u7d22\u6811\u8f6c\u6362\u4e3a\u7d2f\u52a0\u6811"},"next":{"title":"540.\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u5355\u4e00\u5143\u7d20","permalink":"/docs/leetcode/501-600/\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u5355\u4e00\u5143\u7d20"}}');var s=t(86070),r=t(31503);const c={},o="539.\u6700\u5c0f\u65f6\u95f4\u5dee",l={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"539\u6700\u5c0f\u65f6\u95f4\u5dee",children:"539.\u6700\u5c0f\u65f6\u95f4\u5dee"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-time-difference",children:"539.\u6700\u5c0f\u65f6\u95f4\u5dee"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66\u3001\u5b57\u7b26\u4e32\u3001\u6392\u5e8f",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a",'\u7ed9\u5b9a\u4e00\u4e2a 24 \u5c0f\u65f6\u5236\uff08\u5c0f\u65f6:\u5206\u949f "HH:MM"\uff09\u7684\u65f6\u95f4\u5217\u8868\uff0c\u627e\u51fa\u5217\u8868\u4e2d\u4efb\u610f\u4e24\u4e2a\u65f6\u95f4\u7684\u6700\u5c0f\u65f6\u95f4\u5dee\u5e76\u4ee5\u5206\u949f\u6570\u8868\u793a\u3002']}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-23"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a13.8MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int toMin(string s) {\n        int hor = (s[0] - '0') * 10 + s[1] - '0';\n        int min = (s[3] - '0') * 10 + s[4] - '0';\n        return hor * 60 + min;\n    }\n    int findMinDifference(vector<string>& timePoints) {\n        vector<int> data;\n        for (int i = 0; i < timePoints.size(); i++) {\n            int min = toMin(timePoints[i]);\n            data.push_back(min);\n            data.push_back(24 * 60 + min);\n        }\n        sort(data.begin(), data.end());\n        int ans = INT_MAX;\n        for (int i = 1; i < data.size(); i++) {\n            ans = min(ans, data[i] - data[i - 1]);\n        }\n        return ans;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var i=t(30758);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);