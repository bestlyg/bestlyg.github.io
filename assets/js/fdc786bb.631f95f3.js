"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[1093],{66388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/2001-2100/\u77f3\u5b50\u6e38\u620fIX","title":"2029.\u77f3\u5b50\u6e38\u620fIX","description":"\u94fe\u63a5\uff1a2029.\u77f3\u5b50\u6e38\u620fIX","source":"@site/docs/leetcode/2001-2100/2029.\u77f3\u5b50\u6e38\u620fIX.md","sourceDirName":"leetcode/2001-2100","slug":"/leetcode/2001-2100/\u77f3\u5b50\u6e38\u620fIX","permalink":"/docs/leetcode/2001-2100/\u77f3\u5b50\u6e38\u620fIX","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2029,"frontMatter":{},"sidebar":"journal","previous":{"title":"2028.\u627e\u51fa\u7f3a\u5931\u7684\u89c2\u6d4b\u6570\u636e","permalink":"/docs/leetcode/2001-2100/\u627e\u51fa\u7f3a\u5931\u7684\u89c2\u6d4b\u6570\u636e"},"next":{"title":"2032.\u81f3\u5c11\u5728\u4e24\u4e2a\u6570\u7ec4\u4e2d\u51fa\u73b0\u7684\u503c","permalink":"/docs/leetcode/2001-2100/\u81f3\u5c11\u5728\u4e24\u4e2a\u6570\u7ec4\u4e2d\u51fa\u73b0\u7684\u503c"}}');var c=t(86070),r=t(31503);const l={},i="2029.\u77f3\u5b50\u6e38\u620fIX",o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"2029\u77f3\u5b50\u6e38\u620fix",children:"2029.\u77f3\u5b50\u6e38\u620fIX"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,c.jsx)(n.a,{href:"https://leetcode.cn/problems/stone-game-ix",children:"2029.\u77f3\u5b50\u6e38\u620fIX"}),(0,c.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,c.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u6570\u5b66\u3001\u8ba1\u6570\u3001\u535a\u5f08",(0,c.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","Alice \u548c Bob \u518d\u6b21\u8bbe\u8ba1\u4e86\u4e00\u6b3e\u65b0\u7684\u77f3\u5b50\u6e38\u620f\u3002\u5047\u8bbe\u4e24\u4f4d\u73a9\u5bb6\u5747\u91c7\u7528 \u6700\u4f73 \u51b3\u7b56\u3002\u5982\u679c Alice \u83b7\u80dc\uff0c\u8fd4\u56de true \uff1b\u5982\u679c Bob \u83b7\u80dc\uff0c\u8fd4\u56de false \u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-01-20"}),"\n",(0,c.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a140ms"}),"\n",(0,c.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a124.2MB"}),"\n",(0,c.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,c.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u628a\u6240\u6709\u6570\u6a21 3 \u53d6\u503c\uff0c\u5206\u522b\u5224\u65ad\u5f53\u6709\u5076\u6570\u4e2a 0 \u548c\u5947\u6570\u4e2a 0 \u7684\u60c5\u51b5\u4e0b\u5fc5\u80dc\u6761\u4ef6\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    bool stoneGameIX(vector<int>& stones) {\n        int cnts[3] = {0};\n        for (auto& num : stones) cnts[num % 3]++;\n        return cnts[0] % 2 == 0 ? cnts[1] >= 1 && cnts[2] >= 1\n                                : abs(cnts[2] - cnts[1]) >= 3;\n    }\n};\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-01-20"}),"\n",(0,c.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a112ms"}),"\n",(0,c.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a52.6MB"}),"\n",(0,c.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,c.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"function stoneGameIX(stones: number[]): boolean {\n  const cnts: number[] = new Array(3).fill(0);\n  for (const num of stones) cnts[num % 3]++;\n  return cnts[0] % 2 == 0 ? cnts[1] * cnts[2] >= 1 : Math.abs(cnts[2] - cnts[1]) >= 3;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(30758);const c={},r=s.createContext(c);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);