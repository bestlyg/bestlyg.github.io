"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[23690],{18641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/901-1000/\u6c34\u679c\u6210\u7bee","title":"904.\u6c34\u679c\u6210\u7bee","description":"\u94fe\u63a5\uff1a904.\u6c34\u679c\u6210\u7bee","source":"@site/docs/leetcode/901-1000/904.\u6c34\u679c\u6210\u7bee.md","sourceDirName":"leetcode/901-1000","slug":"/leetcode/901-1000/\u6c34\u679c\u6210\u7bee","permalink":"/docs/leetcode/901-1000/\u6c34\u679c\u6210\u7bee","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":904,"frontMatter":{},"sidebar":"journal","previous":{"title":"902.\u6700\u5927\u4e3aN\u7684\u6570\u5b57\u7ec4\u5408","permalink":"/docs/leetcode/901-1000/\u6700\u5927\u4e3aN\u7684\u6570\u5b57\u7ec4\u5408"},"next":{"title":"905.\u6309\u5947\u5076\u6392\u5e8f\u6570\u7ec4","permalink":"/docs/leetcode/901-1000/\u6309\u5947\u5076\u6392\u5e8f\u6570\u7ec4"}}');var r=t(25105),i=t(8556);const l={},c="904.\u6c34\u679c\u6210\u7bee",o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"904\u6c34\u679c\u6210\u7bee",children:"904.\u6c34\u679c\u6210\u7bee"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/fruit-into-baskets",children:"904.\u6c34\u679c\u6210\u7bee"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u6ed1\u52a8\u7a97\u53e3",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 fruits \uff0c\u8fd4\u56de\u4f60\u53ef\u4ee5\u6536\u96c6\u7684\u6c34\u679c\u7684 \u6700\u5927 \u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-17"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a204ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a69.4MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6ed1\u52a8\u7a97\u53e3\uff0c\u6bcf\u6b21\u8bb0\u5f55\u7a97\u53e3\u4e2d\u5c0f\u4e8e 3 \u5143\u7d20\u65f6\u7684\u6700\u5927\u53ef\u80fd\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int totalFruit(vector<int>& fruits) {\n        unordered_map<int, int> m;\n        int ans = 0, l = 0, r = 0, n = fruits.size();\n        while (r < n) {\n            m[fruits[r]]++;\n            if (m.size() == 3) {\n                do {\n                    m[fruits[l]]--;\n                    if (m[fruits[l]] == 0) m.erase(fruits[l]);\n                    l++;\n                } while (l < n && m.size() == 3);\n            }\n            ans = max(ans, r - l + 1);\n            r++;\n        }\n        return ans;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(58101);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);