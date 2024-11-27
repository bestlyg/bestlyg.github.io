"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[84114],{58989:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"leetcode/1601-1700/\u65e0\u6cd5\u5403\u5348\u9910\u7684\u5b66\u751f\u6570\u91cf","title":"1700.\u65e0\u6cd5\u5403\u5348\u9910\u7684\u5b66\u751f\u6570\u91cf","description":"\u94fe\u63a5\uff1a1700.\u65e0\u6cd5\u5403\u5348\u9910\u7684\u5b66\u751f\u6570\u91cf","source":"@site/docs/leetcode/1601-1700/1700.\u65e0\u6cd5\u5403\u5348\u9910\u7684\u5b66\u751f\u6570\u91cf.md","sourceDirName":"leetcode/1601-1700","slug":"/leetcode/1601-1700/\u65e0\u6cd5\u5403\u5348\u9910\u7684\u5b66\u751f\u6570\u91cf","permalink":"/docs/leetcode/1601-1700/\u65e0\u6cd5\u5403\u5348\u9910\u7684\u5b66\u751f\u6570\u91cf","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1700,"frontMatter":{},"sidebar":"journal","previous":{"title":"1696.\u8df3\u8dc3\u6e38\u620fVI","permalink":"/docs/leetcode/1601-1700/\u8df3\u8dc3\u6e38\u620fVI"},"next":{"title":"1702.\u4fee\u6539\u540e\u7684\u6700\u5927\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32","permalink":"/docs/leetcode/1701-1800/\u4fee\u6539\u540e\u7684\u6700\u5927\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32"}}');var i=s(86070),c=s(31503);const l={},r="1700.\u65e0\u6cd5\u5403\u5348\u9910\u7684\u5b66\u751f\u6570\u91cf",o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"1700\u65e0\u6cd5\u5403\u5348\u9910\u7684\u5b66\u751f\u6570\u91cf",children:"1700.\u65e0\u6cd5\u5403\u5348\u9910\u7684\u5b66\u751f\u6570\u91cf"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/number-of-students-unable-to-eat-lunch",children:"1700.\u65e0\u6cd5\u5403\u5348\u9910\u7684\u5b66\u751f\u6570\u91cf"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u961f\u5217\u3001\u6570\u7ec4\u3001\u6a21\u62df",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u65e0\u6cd5\u5403\u5348\u9910\u7684\u5b66\u751f\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-19"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int countStudents(vector<int>& students, vector<int>& sandwiches) {\n        int n = sandwiches.size(), list[2] = {0};\n        queue<int> q1, q2;\n        for (auto &s : students) q1.push(s), list[s]++;;\n        for (auto &s : sandwiches) q2.push(s);\n        while (q2.size()) {\n            int size = q2.size();\n            while (q1.size() && q1.front() == q2.front()) list[q1.front()]--, q1.pop(), q2.pop();\n            if (q2.size()) q1.push(q1.front()), q1.pop();\n            if (q2.size() && list[q2.front()] == 0) break;\n        }\n        return q1.size();\n    }\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-19"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.4MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int countStudents(vector<int>& students, vector<int>& sandwiches) {\n        int list[2] = {0};\n        for (auto &s : students) list[s]++;\n        for (int i = 0; i < sandwiches.size() && list[sandwiches[i]]; i++) list[sandwiches[i]]--;\n        return list[0] + list[1];\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},31503:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var t=s(30758);const i={},c=t.createContext(i);function l(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);