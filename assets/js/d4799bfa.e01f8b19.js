"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[50525],{80403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/101-200/\u9636\u4e58\u540e\u7684\u96f6","title":"172.\u9636\u4e58\u540e\u7684\u96f6","description":"\u94fe\u63a5\uff1a172.\u9636\u4e58\u540e\u7684\u96f6","source":"@site/docs/leetcode/101-200/172.\u9636\u4e58\u540e\u7684\u96f6.md","sourceDirName":"leetcode/101-200","slug":"/leetcode/101-200/\u9636\u4e58\u540e\u7684\u96f6","permalink":"/docs/leetcode/101-200/\u9636\u4e58\u540e\u7684\u96f6","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":172,"frontMatter":{},"sidebar":"journal","previous":{"title":"171.Excel\u8868\u5217\u5e8f\u53f7","permalink":"/docs/leetcode/101-200/Excel\u8868\u5217\u5e8f\u53f7"},"next":{"title":"173.\u4e8c\u53c9\u641c\u7d22\u6811\u8fed\u4ee3\u5668","permalink":"/docs/leetcode/101-200/\u4e8c\u53c9\u641c\u7d22\u6811\u8fed\u4ee3\u5668"}}');var r=t(86070),c=t(31503);const l={},i="172.\u9636\u4e58\u540e\u7684\u96f6",o={},a=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"172\u9636\u4e58\u540e\u7684\u96f6",children:"172.\u9636\u4e58\u540e\u7684\u96f6"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/factorial-trailing-zeroes",children:"172.\u9636\u4e58\u540e\u7684\u96f6"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570 n\uff0c\u8fd4\u56de n! \u7ed3\u679c\u5c3e\u6570\u4e2d\u96f6\u7684\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-29"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.1MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53ea\u6709 2*5 \u624d\u4f1a\u51fa\u73b0 0\uff0c\u7edf\u8ba1\u51fa\u73b0 5 \u7684\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"var trailingZeroes = function (n) {\n  let ans = 0;\n  let m = 5;\n  while (n / m) {\n    ans += ~~(n / m);\n    m *= 5;\n  }\n  return ans;\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-25"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7edf\u8ba1\u6709\u51e0\u4e2a 5\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int trailingZeroes(int n) {\n        int ans = 0;\n        for (int cnt = 1; pow(5, cnt) <= n; cnt++) ans += n / pow(5, cnt);\n        return ans;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(30758);const r={},c=s.createContext(r);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);