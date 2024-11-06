"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[80824],{43852:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(86070),r=t(31503);const i={},c="433.\u6700\u5c0f\u57fa\u56e0\u53d8\u5316",o={id:"leetcode/401-500/\u6700\u5c0f\u57fa\u56e0\u53d8\u5316",title:"433.\u6700\u5c0f\u57fa\u56e0\u53d8\u5316",description:"\u94fe\u63a5\uff1a433.\u6700\u5c0f\u57fa\u56e0\u53d8\u5316",source:"@site/docs/leetcode/401-500/433.\u6700\u5c0f\u57fa\u56e0\u53d8\u5316.md",sourceDirName:"leetcode/401-500",slug:"/leetcode/401-500/\u6700\u5c0f\u57fa\u56e0\u53d8\u5316",permalink:"/docs/leetcode/401-500/\u6700\u5c0f\u57fa\u56e0\u53d8\u5316",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:433,frontMatter:{},sidebar:"journal",previous:{title:"432.\u5168O(1)\u7684\u6570\u636e\u7ed3\u6784",permalink:"/docs/leetcode/401-500/\u5168O(1)\u7684\u6570\u636e\u7ed3\u6784"},next:{title:"434.\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd\u6570",permalink:"/docs/leetcode/401-500/\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u8bcd\u6570"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"433\u6700\u5c0f\u57fa\u56e0\u53d8\u5316",children:"433.\u6700\u5c0f\u57fa\u56e0\u53d8\u5316"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-genetic-mutation",children:"433.\u6700\u5c0f\u57fa\u56e0\u53d8\u5316"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e24\u4e2a\u57fa\u56e0\u5e8f\u5217 start \u548c end \uff0c\u4ee5\u53ca\u4e00\u4e2a\u57fa\u56e0\u5e93 bank \uff0c\u8bf7\u4f60\u627e\u51fa\u5e76\u8fd4\u56de\u80fd\u591f\u4f7f \xa0start \u53d8\u5316\u4e3a end \u6240\u9700\u7684\u6700\u5c11\u53d8\u5316\u6b21\u6570\u3002\u5982\u679c\u65e0\u6cd5\u5b8c\u6210\u6b64\u57fa\u56e0\u53d8\u5316\uff0c\u8fd4\u56de -1 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-07"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.4MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minMutation(string start, string end, vector<string>& bank) {\n        unordered_set<string> s;\n        for (auto &v : bank) s.insert(v);\n        queue<string> q;\n        q.push(start);\n        int level = 0, size = 1;\n        while (q.size()) {\n            string cur = q.front(); q.pop();\n            if (cur == end) return level;\n            for (auto &s : next(s, cur)) q.push(s);\n            if (--size == 0) { size = q.size(); level++; }\n        }\n        return -1;\n    }\n    char list[4] = {'A', 'C', 'G', 'T'};\n    vector<string> next(unordered_set<string> &s, string &str) {\n        vector<string> ans;\n        for (int i = 0; i < 8; i++) {\n            for (int j = 0; j < 4; j++) {\n                if (str[i] == list[j]) continue;\n                string next = str;\n                next[i] = list[j];\n                if (s.count(next)) {\n                    ans.emplace_back(next);\n                    s.erase(next);\n                }\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(30758);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);