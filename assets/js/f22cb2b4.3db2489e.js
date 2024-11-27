"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[67108],{78040:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/1101-1200/\u4e00\u5468\u4e2d\u7684\u7b2c\u51e0\u5929","title":"1185.\u4e00\u5468\u4e2d\u7684\u7b2c\u51e0\u5929","description":"\u94fe\u63a5\uff1a1185.\u4e00\u5468\u4e2d\u7684\u7b2c\u51e0\u5929","source":"@site/docs/leetcode/1101-1200/1185.\u4e00\u5468\u4e2d\u7684\u7b2c\u51e0\u5929.md","sourceDirName":"leetcode/1101-1200","slug":"/leetcode/1101-1200/\u4e00\u5468\u4e2d\u7684\u7b2c\u51e0\u5929","permalink":"/docs/leetcode/1101-1200/\u4e00\u5468\u4e2d\u7684\u7b2c\u51e0\u5929","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1185,"frontMatter":{},"sidebar":"journal","previous":{"title":"1184.\u516c\u4ea4\u7ad9\u95f4\u7684\u8ddd\u79bb","permalink":"/docs/leetcode/1101-1200/\u516c\u4ea4\u7ad9\u95f4\u7684\u8ddd\u79bb"},"next":{"title":"1186.\u5220\u9664\u4e00\u6b21\u5f97\u5230\u5b50\u6570\u7ec4\u6700\u5927\u548c","permalink":"/docs/leetcode/1101-1200/\u5220\u9664\u4e00\u6b21\u5f97\u5230\u5b50\u6570\u7ec4\u6700\u5927\u548c"}}');var s=t(86070),a=t(31503);const i={},o="1185.\u4e00\u5468\u4e2d\u7684\u7b2c\u51e0\u5929",l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1185\u4e00\u5468\u4e2d\u7684\u7b2c\u51e0\u5929",children:"1185.\u4e00\u5468\u4e2d\u7684\u7b2c\u51e0\u5929"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/day-of-the-week",children:"1185.\u4e00\u5468\u4e2d\u7684\u7b2c\u51e0\u5929"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u65e5\u671f\uff0c\u8bf7\u4f60\u8bbe\u8ba1\u4e00\u4e2a\u7b97\u6cd5\u6765\u5224\u65ad\u5b83\u662f\u5bf9\u5e94\u4e00\u5468\u4e2d\u7684\u54ea\u4e00\u5929\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-01-04"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.9MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u6c42\u51fa\u8ddd\u79bb\u7b2c\u4e00\u5929\u7684\u5929\u6570\u5e76\u53d6\u6a21\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'string names[] = {"Friday",  "Saturday",  "Sunday",  "Monday",\n                  "Tuesday", "Wednesday", "Thursday"};\nint isLeapYear(int year) {\n    return year % 400 == 0 || year % 100 != 0 && year % 4 == 0;\n}\nclass Solution {\n   public:\n    string dayOfTheWeek(int day, int month, int year) {\n        int months[] = {\n            0,  31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31,\n            30, 31};\n        while (month) day += months[--month];\n        while (year > 1971) day += isLeapYear(--year) ? 366 : 365;\n        return names[(day - 1) % 7];\n    }\n};\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-30"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.09MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8ba1\u7b97\u5929\u6570\u540e\u53d6\u6a21\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def isLeapYear(year: int) -> bool:\n        return (year % 4 == 0 and year % 100 != 0) or year % 400 == 0\n    weeks = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]\n    \n    class Solution:\n        def dayOfTheWeek(self, day: int, month: int, year: int) -> str:\n            months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30]\n            if isLeapYear(year): months[1] = 29\n            day += sum(365 + isLeapYear(y) for y in range(1971, year)) + sum(months[:month - 1])\n            return weeks[(day + 3) % 7]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(30758);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);