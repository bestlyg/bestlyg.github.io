"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[59073],{37730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var r=t(86070),c=t(31503);const s={},i="890.\u67e5\u627e\u548c\u66ff\u6362\u6a21\u5f0f",o={id:"leetcode/801-900/\u67e5\u627e\u548c\u66ff\u6362\u6a21\u5f0f",title:"890.\u67e5\u627e\u548c\u66ff\u6362\u6a21\u5f0f",description:"\u94fe\u63a5\uff1a890.\u67e5\u627e\u548c\u66ff\u6362\u6a21\u5f0f",source:"@site/docs/leetcode/801-900/890.\u67e5\u627e\u548c\u66ff\u6362\u6a21\u5f0f.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u67e5\u627e\u548c\u66ff\u6362\u6a21\u5f0f",permalink:"/docs/leetcode/801-900/\u67e5\u627e\u548c\u66ff\u6362\u6a21\u5f0f",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:890,frontMatter:{},sidebar:"journal",previous:{title:"889.\u6839\u636e\u524d\u5e8f\u548c\u540e\u5e8f\u904d\u5386\u6784\u9020\u4e8c\u53c9\u6811",permalink:"/docs/leetcode/801-900/\u6839\u636e\u524d\u5e8f\u548c\u540e\u5e8f\u904d\u5386\u6784\u9020\u4e8c\u53c9\u6811"},next:{title:"891.\u5b50\u5e8f\u5217\u5bbd\u5ea6\u4e4b\u548c",permalink:"/docs/leetcode/801-900/\u5b50\u5e8f\u5217\u5bbd\u5ea6\u4e4b\u548c"}},l={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"890\u67e5\u627e\u548c\u66ff\u6362\u6a21\u5f0f",children:"890.\u67e5\u627e\u548c\u66ff\u6362\u6a21\u5f0f"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/find-and-replace-pattern",children:"890.\u67e5\u627e\u548c\u66ff\u6362\u6a21\u5f0f"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de words \u4e2d\u4e0e\u7ed9\u5b9a\u6a21\u5f0f\u5339\u914d\u7684\u5355\u8bcd\u5217\u8868\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-06-12"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.6MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u6bd4\u8f83\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int n;\n    vector<string> findAndReplacePattern(vector<string> &words,\n                                         string pattern) {\n        vector<string> ans;\n        n = pattern.size();\n        for (auto &word : words) {\n            if (check(pattern, word)) ans.push_back(word);\n        }\n        return ans;\n    }\n    bool check(string &pattern, string &word) {\n        char list[26] = {0};\n        bool check[26] = {0};\n        for (int i = 0; i < n; i++) {\n            char wc = word[i], pc = pattern[i];\n            if (list[pc - 'a'] && list[pc - 'a'] != wc) return false;\n            if (list[pc - 'a'] == '\\0' && check[wc - 'a']) return false;\n            check[wc - 'a'] = true;\n            list[pc - 'a'] = wc;\n        }\n        return true;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(30758);const c={},s=r.createContext(c);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);