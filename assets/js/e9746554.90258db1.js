"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[73556],{64643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/1101-1200/\u62fc\u5199\u5355\u8bcd","title":"1160.\u62fc\u5199\u5355\u8bcd","description":"\u94fe\u63a5\uff1a1160.\u62fc\u5199\u5355\u8bcd","source":"@site/docs/leetcode/1101-1200/1160.\u62fc\u5199\u5355\u8bcd.md","sourceDirName":"leetcode/1101-1200","slug":"/leetcode/1101-1200/\u62fc\u5199\u5355\u8bcd","permalink":"/docs/leetcode/1101-1200/\u62fc\u5199\u5355\u8bcd","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1160,"frontMatter":{},"sidebar":"journal","previous":{"title":"1156.\u5355\u5b57\u7b26\u91cd\u590d\u5b50\u4e32\u7684\u6700\u5927\u957f\u5ea6","permalink":"/docs/leetcode/1101-1200/\u5355\u5b57\u7b26\u91cd\u590d\u5b50\u4e32\u7684\u6700\u5927\u957f\u5ea6"},"next":{"title":"1161.\u6700\u5927\u5c42\u5185\u5143\u7d20\u548c","permalink":"/docs/leetcode/1101-1200/\u6700\u5927\u5c42\u5185\u5143\u7d20\u548c"}}');var r=t(86070),c=t(31503);const o={},i="1160.\u62fc\u5199\u5355\u8bcd",l={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1160\u62fc\u5199\u5355\u8bcd",children:"1160.\u62fc\u5199\u5355\u8bcd"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/find-words-that-can-be-formed-by-characters",children:"1160.\u62fc\u5199\u5355\u8bcd"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u8bcd\u6c47\u8868 words \u4e2d\u4f60\u638c\u63e1\u7684\u6240\u6709\u5355\u8bcd\u7684 \u957f\u5ea6\u4e4b\u548c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-29"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a14.9MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int countCharacters(vector<string> &words, string chars) {\n        int list[26] = {0}, ans = 0, tmp[26] = {0};\n        for (auto &ch : chars) list[ch - 'a']++;\n        for (auto &word : words) {\n            memset(tmp, 0, sizeof(int) * 26);\n            int f = 1;\n            for (auto &ch : word) tmp[ch - 'a']++;\n            for (int i = 0; i < 26; i++) {\n                if (list[i] < tmp[i]) {\n                    f = 0;\n                    break;\n                }\n            }\n            if (f) ans += word.size();\n        }\n        return ans;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(30758);const r={},c=s.createContext(r);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);