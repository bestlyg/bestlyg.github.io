"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[40754],{47345:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var t=s(86070),i=s(31503);const l={},o="682.\u68d2\u7403\u6bd4\u8d5b",c={id:"leetcode/601-700/\u68d2\u7403\u6bd4\u8d5b",title:"682.\u68d2\u7403\u6bd4\u8d5b",description:"\u94fe\u63a5\uff1a682.\u68d2\u7403\u6bd4\u8d5b",source:"@site/docs/leetcode/601-700/682.\u68d2\u7403\u6bd4\u8d5b.md",sourceDirName:"leetcode/601-700",slug:"/leetcode/601-700/\u68d2\u7403\u6bd4\u8d5b",permalink:"/docs/leetcode/601-700/\u68d2\u7403\u6bd4\u8d5b",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:682,frontMatter:{},sidebar:"journal",previous:{title:"680.\u9a8c\u8bc1\u56de\u6587\u4e32II",permalink:"/docs/leetcode/601-700/\u9a8c\u8bc1\u56de\u6587\u4e32II"},next:{title:"684.\u5197\u4f59\u8fde\u63a5",permalink:"/docs/leetcode/601-700/\u5197\u4f59\u8fde\u63a5"}},r={},p=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"682\u68d2\u7403\u6bd4\u8d5b",children:"682.\u68d2\u7403\u6bd4\u8d5b"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/baseball-game",children:"682.\u68d2\u7403\u6bd4\u8d5b"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6570\u7ec4\u3001\u6a21\u62df",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u8bb0\u5f55\u4e2d\u6240\u6709\u5f97\u5206\u7684\u603b\u548c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-19"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.9MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:'class Solution {\n   public:\n    int calPoints(vector<string> &ops) {\n        vector<int> list;\n        for (auto &op : ops) {\n            int n = list.size();\n            if (op == "+") {\n                list.push_back(list[n - 1] + list[n - 2]);\n            } else if (op == "D") {\n                list.push_back(list[n - 1] * 2);\n            } else if (op == "C") {\n                list.pop_back();\n            } else {\n                list.push_back(stoi(op));\n            }\n        }\n        int ans = 0;\n        for (auto &num : list) ans += num;\n        return ans;\n    }\n};\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-26"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:'class Solution {\n   public:\n    int calPoints(vector<string> &ops) {\n        vector<int> list;\n        for (auto &op : ops) {\n            int n = list.size();\n            if (op == "+") {\n                list.push_back(list[n - 1] + list[n - 2]);\n            } else if (op == "D") {\n                list.push_back(list[n - 1] * 2);\n            } else if (op == "C") {\n                list.pop_back();\n            } else {\n                list.push_back(stoi(op));\n            }\n        }\n        int ans = 0;\n        for (auto &num : list) ans += num;\n        return ans;\n    }\n};\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-07-29"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a32ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.43MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u679a\u4e3e\u6bcf\u4e00\u4e2a\u5757\u4e0e\u53e6\u4e00\u4e2a\u5757\u662f\u5426\u4f4d\u7f6e\u4ea7\u751f\u4ea4\u96c6\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def calPoints(self, operations: List[str]) -> int:\n        s = []\n        for op in operations:\n            if op == '+':\n                s.append(s[-1] + s[-2])\n            elif op == 'D':\n                s.append(s[-1] * 2)\n            elif op == 'C':\n                s.pop()\n            else:\n                s.append(int(op))\n        return sum(s)\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},31503:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>c});var t=s(30758);const i={},l=t.createContext(i);function o(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);