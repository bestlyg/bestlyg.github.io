"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[46021],{18911:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"leetcode/401-500/\u66ff\u6362\u540e\u7684\u6700\u957f\u91cd\u590d\u5b57\u7b26","title":"424.\u66ff\u6362\u540e\u7684\u6700\u957f\u91cd\u590d\u5b57\u7b26","description":"\u94fe\u63a5\uff1a424.\u66ff\u6362\u540e\u7684\u6700\u957f\u91cd\u590d\u5b57\u7b26","source":"@site/docs/leetcode/401-500/424.\u66ff\u6362\u540e\u7684\u6700\u957f\u91cd\u590d\u5b57\u7b26.md","sourceDirName":"leetcode/401-500","slug":"/leetcode/401-500/\u66ff\u6362\u540e\u7684\u6700\u957f\u91cd\u590d\u5b57\u7b26","permalink":"/docs/leetcode/401-500/\u66ff\u6362\u540e\u7684\u6700\u957f\u91cd\u590d\u5b57\u7b26","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":424,"frontMatter":{},"sidebar":"journal","previous":{"title":"423.\u4ece\u82f1\u6587\u4e2d\u91cd\u5efa\u6570\u5b57","permalink":"/docs/leetcode/401-500/\u4ece\u82f1\u6587\u4e2d\u91cd\u5efa\u6570\u5b57"},"next":{"title":"427.\u5efa\u7acb\u56db\u53c9\u6811","permalink":"/docs/leetcode/401-500/\u5efa\u7acb\u56db\u53c9\u6811"}}');var c=t(86070),s=t(31503);const i={},o="424.\u66ff\u6362\u540e\u7684\u6700\u957f\u91cd\u590d\u5b57\u7b26",l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"424\u66ff\u6362\u540e\u7684\u6700\u957f\u91cd\u590d\u5b57\u7b26",children:"424.\u66ff\u6362\u540e\u7684\u6700\u957f\u91cd\u590d\u5b57\u7b26"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,c.jsx)(n.a,{href:"https://leetcode.cn/problems/longest-repeating-character-replacement",children:"424.\u66ff\u6362\u540e\u7684\u6700\u957f\u91cd\u590d\u5b57\u7b26"}),(0,c.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,c.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u6ed1\u52a8\u7a97\u53e3",(0,c.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4ec5\u7531\u5927\u5199\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210\u7684\u5b57\u7b26\u4e32\uff0c\u4f60\u53ef\u4ee5\u5c06\u4efb\u610f\u4f4d\u7f6e\u4e0a\u7684\u5b57\u7b26\u66ff\u6362\u6210\u53e6\u5916\u7684\u5b57\u7b26\uff0c\u603b\u5171\u53ef\u6700\u591a\u66ff\u6362 k \u6b21\u3002\u5728\u6267\u884c\u4e0a\u8ff0\u64cd\u4f5c\u540e\uff0c\u627e\u5230\u5305\u542b\u91cd\u590d\u5b57\u6bcd\u7684\u6700\u957f\u5b50\u4e32\u7684\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-02"}),"\n",(0,c.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a140ms"}),"\n",(0,c.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.6MB"}),"\n",(0,c.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,c.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","[\u53c2\u8003\u94fe\u63a5](https://leetcode-cn.com/problems/longest-repeating-character-replacement/solution/ti-huan-hou-de-zui-chang-zhong-fu-zi-fu-n6aza/)\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"function characterReplacement(s: string, k: number): number {\n  const num = new Array(26).fill(0);\n  const n = s.length;\n  const compute = (i: number) => s[i].charCodeAt(0) - 'A'.charCodeAt(0);\n  let max = 0,\n    left = 0,\n    right = 0;\n  while (right < n) {\n    num[compute(right)]++;\n    max = Math.max(max, num[compute(right)]);\n    if (right - left + 1 - max > k) {\n      num[compute(left)]--;\n      left++;\n    }\n    right++;\n  }\n  return right - left;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(30758);const c={},s=r.createContext(c);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);