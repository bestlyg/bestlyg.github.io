"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[99572],{57222:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"leetcode/801-900/\u6a21\u7cca\u5750\u6807","title":"816.\u6a21\u7cca\u5750\u6807","description":"\u94fe\u63a5\uff1a816.\u6a21\u7cca\u5750\u6807","source":"@site/docs/leetcode/801-900/816.\u6a21\u7cca\u5750\u6807.md","sourceDirName":"leetcode/801-900","slug":"/leetcode/801-900/\u6a21\u7cca\u5750\u6807","permalink":"/docs/leetcode/801-900/\u6a21\u7cca\u5750\u6807","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":816,"frontMatter":{},"sidebar":"journal","previous":{"title":"815.\u516c\u4ea4\u8def\u7ebf","permalink":"/docs/leetcode/801-900/\u516c\u4ea4\u8def\u7ebf"},"next":{"title":"817.\u94fe\u8868\u7ec4\u4ef6","permalink":"/docs/leetcode/801-900/\u94fe\u8868\u7ec4\u4ef6"}}');var r=t(25105),i=t(8556);const c={},o="816.\u6a21\u7cca\u5750\u6807",l={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"816\u6a21\u7cca\u5750\u6807",children:"816.\u6a21\u7cca\u5750\u6807"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/ambiguous-coordinates",children:"816.\u6a21\u7cca\u5750\u6807"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u56de\u6eaf\u3001\u679a\u4e3e",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u6240\u6709\u53ef\u80fd\u7684\u539f\u59cb\u5b57\u7b26\u4e32\u5230\u4e00\u4e2a\u5217\u8868\u4e2d\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-07"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a10MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7ec4\u5408\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<string> ambiguousCoordinates(string s) {\n        vector<string> ans;\n        int n = s.size();\n        for (int i = 2; i < n - 1; i++) {\n            for (auto &l : comp(s.substr(1, i - 1))) {\n                for (auto &r: comp(s.substr(i, s.size() - 1 - i))) {\n                    ans.push_back(\"(\" + l + \", \" + r + \")\");\n                }\n            }\n        }\n        return ans;\n    }\n    vector<string> comp(string str) {\n        vector<string> list;\n        int f = check1(str);\n        if (f) list.push_back(str);\n        if (str.size() > 1) {\n            for (int i = 1; i < str.size(); i++) {\n                string next = str.substr(0, i) + \".\" + str.substr(i);\n                int f = check2(next, i);\n                if (f) list.push_back(next);\n            }\n        }\n        return list;\n    }\n    bool check1(string &str) {\n        if (str[0] == '0' && str.size() != 1) return false;\n        return true;\n    }\n    bool check2(string &str, int idx) {\n        // \u5f00\u5934\u4e0d\u80fd\u662f0\uff0c\u9664\u975e\u53ea\u67090\n        if (str[0] == '0' && idx != 1) return false;\n        // \u7ed3\u5c3e\u4e0d\u80fd\u662f0\n        if (str.back() == '0') return false;\n        // \u5c0f\u6570\u4e0d\u80fd\u51680\n        int f = true;\n        for (int i = idx + 1; i < str.size(); i++) {\n            if (str[i] != '0') {\n                f = false;\n                break;\n            }\n        }\n        if (f) return false;\n        return true;\n    }\n};\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},8556:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var s=t(58101);const r={},i=s.createContext(r);function c(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);