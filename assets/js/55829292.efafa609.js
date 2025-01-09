"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[65307],{82695:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"leetcode/801-900/\u5b50\u57df\u540d\u8bbf\u95ee\u8ba1\u6570","title":"811.\u5b50\u57df\u540d\u8bbf\u95ee\u8ba1\u6570","description":"\u94fe\u63a5\uff1a811.\u5b50\u57df\u540d\u8bbf\u95ee\u8ba1\u6570","source":"@site/docs/leetcode/801-900/811.\u5b50\u57df\u540d\u8bbf\u95ee\u8ba1\u6570.md","sourceDirName":"leetcode/801-900","slug":"/leetcode/801-900/\u5b50\u57df\u540d\u8bbf\u95ee\u8ba1\u6570","permalink":"/docs/leetcode/801-900/\u5b50\u57df\u540d\u8bbf\u95ee\u8ba1\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":811,"frontMatter":{},"sidebar":"journal","previous":{"title":"810.\u9ed1\u677f\u5f02\u6216\u6e38\u620f","permalink":"/docs/leetcode/801-900/\u9ed1\u677f\u5f02\u6216\u6e38\u620f"},"next":{"title":"812.\u6700\u5927\u4e09\u89d2\u5f62\u9762\u79ef","permalink":"/docs/leetcode/801-900/\u6700\u5927\u4e09\u89d2\u5f62\u9762\u79ef"}}');var i=t(25105),r=t(8556);const o={},c="811.\u5b50\u57df\u540d\u8bbf\u95ee\u8ba1\u6570",a={},l=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"811\u5b50\u57df\u540d\u8bbf\u95ee\u8ba1\u6570",children:"811.\u5b50\u57df\u540d\u8bbf\u95ee\u8ba1\u6570"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/subdomain-visit-count",children:"811.\u5b50\u57df\u540d\u8bbf\u95ee\u8ba1\u6570"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u8ba1\u6570",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a \u8ba1\u6570\u914d\u5bf9\u57df\u540d \u7ec4\u6210\u7684\u6570\u7ec4 cpdomains \uff0c\u89e3\u6790\u5f97\u5230\u8f93\u5165\u4e2d\u6bcf\u4e2a\u5b50\u57df\u540d\u5bf9\u5e94\u7684 \u8ba1\u6570\u914d\u5bf9\u57df\u540d \uff0c\u5e76\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-05"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a20ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a12.6MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<string> subdomainVisits(vector<string>& cpdomains) {\n        unordered_map<string, int> m;\n        for (auto &s : cpdomains) {\n            string data = \"\";\n            int cnt = 0;\n            analysisDomain(s, data, cnt);\n            for (auto &item : analysisData(data)) {\n                m[item] += cnt;\n            }\n        }\n        vector<string> ans;\n        for (auto &item : m) {\n            ans.push_back(to_string(item.second) + \" \" + item.first);\n        }\n        return ans;\n    }\n    void analysisDomain(string &s, string &data, int &cnt) {\n        bool isCnt = true;\n        for (int i = 0; i < s.size(); i++) {\n            if (s[i] == ' ') {\n                isCnt = false;\n            } else if (isCnt) {\n                cnt = cnt * 10 + s[i] - '0';\n            } else {\n                data += s[i];\n            }\n        }\n    }\n    vector<string> analysisData(string &data) {\n        vector<string> list;\n        list.push_back(data);\n        int n = data.size();\n        for (int i = 0; i < n; i++) {\n            if (data[i] == '.') {\n                list.push_back(data.substr(i + 1, n - i));\n            }\n        }\n        return list;\n    }\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8556:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var s=t(58101);const i={},r=s.createContext(i);function o(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);