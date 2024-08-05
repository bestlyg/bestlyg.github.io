"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[53348],{7487:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=e(86070),s=e(25710);const r={},o="30.\u4e32\u8054\u6240\u6709\u5355\u8bcd\u7684\u5b50\u4e32",c={id:"leetcode/1-100/\u4e32\u8054\u6240\u6709\u5355\u8bcd\u7684\u5b50\u4e32",title:"30.\u4e32\u8054\u6240\u6709\u5355\u8bcd\u7684\u5b50\u4e32",description:"\u94fe\u63a5\uff1a30.\u4e32\u8054\u6240\u6709\u5355\u8bcd\u7684\u5b50\u4e32",source:"@site/docs/leetcode/1-100/30.\u4e32\u8054\u6240\u6709\u5355\u8bcd\u7684\u5b50\u4e32.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u4e32\u8054\u6240\u6709\u5355\u8bcd\u7684\u5b50\u4e32",permalink:"/web/site/docs/leetcode/1-100/\u4e32\u8054\u6240\u6709\u5355\u8bcd\u7684\u5b50\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"journal",previous:{title:"29.\u4e24\u6570\u76f8\u9664",permalink:"/web/site/docs/leetcode/1-100/\u4e24\u6570\u76f8\u9664"},next:{title:"31.\u4e0b\u4e00\u4e2a\u6392\u5217",permalink:"/web/site/docs/leetcode/1-100/\u4e0b\u4e00\u4e2a\u6392\u5217"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(t){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"30\u4e32\u8054\u6240\u6709\u5355\u8bcd\u7684\u5b50\u4e32",children:"30.\u4e32\u8054\u6240\u6709\u5355\u8bcd\u7684\u5b50\u4e32"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/substring-with-concatenation-of-all-words",children:"30.\u4e32\u8054\u6240\u6709\u5355\u8bcd\u7684\u5b50\u4e32"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u6ed1\u52a8\u7a97\u53e3",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32 s \u548c\u4e00\u4e9b \u957f\u5ea6\u76f8\u540c \u7684\u5355\u8bcd words \u3002\u627e\u51fa s \u4e2d\u6070\u597d\u53ef\u4ee5\u7531 words \u4e2d\u6240\u6709\u5355\u8bcd\u4e32\u8054\u5f62\u6210\u7684\u5b50\u4e32\u7684\u8d77\u59cb\u4f4d\u7f6e\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-06-23"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a172ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a28.3MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u68c0\u6d4b\u6bcf\u4e00\u4e2a\u53ef\u80fd\u6210\u529f\u7684\u70b9\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int wordSize, sSize, wordsSize;\n    unordered_map<string, int> m;\n    string s;\n    vector<string> words;\n    vector<int> findSubstring(string s, vector<string> &words) {\n        this->s = s;\n        this->words = words;\n        sSize = s.size();\n        wordSize = words[0].size();\n        wordsSize = words.size();\n        for (auto &w : words) m[w]++;\n        vector<int> ans, list = getlist();\n        unordered_map<int, int> listmap;\n        for (int i = 0; i < list.size(); i++) listmap[list[i]] = i;\n        for (int i = 0; i < list.size(); i++)\n            if (check(list, listmap, i)) ans.push_back(list[i]);\n        return ans;\n    }\n    vector<int> getlist() {\n        vector<int> list;\n        string tmp = s.substr(0, wordSize);\n        for (int i = wordSize; i < sSize; i++) {\n            if (m.count(tmp)) list.push_back(i - wordSize);\n            tmp = tmp.substr(1, wordSize - 1) + s[i];\n        }\n        if (m.count(tmp)) list.push_back(sSize - wordSize);\n        return list;\n    }\n    bool check(vector<int> &list, unordered_map<int, int> &listmap, int start) {\n        int firstIdx = list[start];\n        int lastIdx = firstIdx + (wordsSize - 1) * wordSize;\n        if (!listmap.count(lastIdx)) return false;\n        return _check(list, listmap, start, m);\n    }\n    bool _check(vector<int> &list, unordered_map<int, int> &listmap, int start,\n                unordered_map<string, int> m) {\n        for (int i = list[start], cnt = 0; cnt < wordsSize;\n             cnt++, i += wordSize) {\n            if (!listmap.count(i)) return false;\n            if (m[s.substr(list[listmap[i]], wordSize)]-- == 0) return false;\n        }\n        return true;\n    }\n};\n"})})]})}function u(t={}){const{wrapper:n}={...(0,s.R)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(a,{...t})}):a(t)}},25710:(t,n,e)=>{e.d(n,{R:()=>o,x:()=>c});var i=e(30758);const s={},r=i.createContext(s);function o(t){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),i.createElement(r.Provider,{value:n},t.children)}}}]);