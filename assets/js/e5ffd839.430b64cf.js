"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[32801],{25371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/401-500/\u73af\u7ed5\u5b57\u7b26\u4e32\u4e2d\u552f\u4e00\u7684\u5b50\u5b57\u7b26\u4e32","title":"467.\u73af\u7ed5\u5b57\u7b26\u4e32\u4e2d\u552f\u4e00\u7684\u5b50\u5b57\u7b26\u4e32","description":"\u94fe\u63a5\uff1a467.\u73af\u7ed5\u5b57\u7b26\u4e32\u4e2d\u552f\u4e00\u7684\u5b50\u5b57\u7b26\u4e32","source":"@site/docs/leetcode/401-500/467.\u73af\u7ed5\u5b57\u7b26\u4e32\u4e2d\u552f\u4e00\u7684\u5b50\u5b57\u7b26\u4e32.md","sourceDirName":"leetcode/401-500","slug":"/leetcode/401-500/\u73af\u7ed5\u5b57\u7b26\u4e32\u4e2d\u552f\u4e00\u7684\u5b50\u5b57\u7b26\u4e32","permalink":"/docs/leetcode/401-500/\u73af\u7ed5\u5b57\u7b26\u4e32\u4e2d\u552f\u4e00\u7684\u5b50\u5b57\u7b26\u4e32","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":467,"frontMatter":{},"sidebar":"journal","previous":{"title":"466.\u7edf\u8ba1\u91cd\u590d\u4e2a\u6570","permalink":"/docs/leetcode/401-500/\u7edf\u8ba1\u91cd\u590d\u4e2a\u6570"},"next":{"title":"468.\u9a8c\u8bc1IP\u5730\u5740","permalink":"/docs/leetcode/401-500/\u9a8c\u8bc1IP\u5730\u5740"}}');var s=t(25105),r=t(8556);const c={},o="467.\u73af\u7ed5\u5b57\u7b26\u4e32\u4e2d\u552f\u4e00\u7684\u5b50\u5b57\u7b26\u4e32",l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"467\u73af\u7ed5\u5b57\u7b26\u4e32\u4e2d\u552f\u4e00\u7684\u5b50\u5b57\u7b26\u4e32",children:"467.\u73af\u7ed5\u5b57\u7b26\u4e32\u4e2d\u552f\u4e00\u7684\u5b50\u5b57\u7b26\u4e32"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/unique-substrings-in-wraparound-string",children:"467.\u73af\u7ed5\u5b57\u7b26\u4e32\u4e2d\u552f\u4e00\u7684\u5b50\u5b57\u7b26\u4e32"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u73b0\u5728\u7ed9\u5b9a\u53e6\u4e00\u4e2a\u5b57\u7b26\u4e32 p \u3002\u8fd4\u56de s \u4e2d \u552f\u4e00 \u7684 p \u7684 \u975e\u7a7a\u5b50\u4e32 \u7684\u6570\u91cf \u3002 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-25"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\uff0c\u6bcf\u6b21\u50a8\u5b58\u4ee5\u5f53\u524d\u503c\u7ed3\u5c3e\u7684\u6700\u957f\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int findSubstringInWraproundString(string p) {\n        int n = p.size(), ans = 0;\n        vector<int> dp(n);\n        unordered_map<char, int> m;\n        dp[0] = 1;\n        m[p[0]] = 1;\n        for (int i = 1; i < n; i++) {\n            int next = p[i - 1] == 'z' ? 'a' : p[i - 1] + 1;\n            if (next != p[i])\n                dp[i] = 1;\n            else\n                dp[i] = dp[i - 1] + 1;\n            m[p[i]] = max(m[p[i]], dp[i]);\n        }\n        for (auto& item : m) ans += item.second;\n        return ans;\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var i=t(58101);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);