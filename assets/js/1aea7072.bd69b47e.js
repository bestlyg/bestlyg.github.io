"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[74277],{32572:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"leetcode/101-200/\u5206\u6570\u6392\u540d","title":"178.\u5206\u6570\u6392\u540d","description":"\u94fe\u63a5\uff1a178.\u5206\u6570\u6392\u540d","source":"@site/docs/leetcode/101-200/178.\u5206\u6570\u6392\u540d.md","sourceDirName":"leetcode/101-200","slug":"/leetcode/101-200/\u5206\u6570\u6392\u540d","permalink":"/docs/leetcode/101-200/\u5206\u6570\u6392\u540d","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":178,"frontMatter":{},"sidebar":"journal","previous":{"title":"177.\u7b2cN\u9ad8\u7684\u85aa\u6c34","permalink":"/docs/leetcode/101-200/\u7b2cN\u9ad8\u7684\u85aa\u6c34"},"next":{"title":"179.\u6700\u5927\u6570","permalink":"/docs/leetcode/101-200/\u6700\u5927\u6570"}}');var r=s(86070),c=s(31503);const o={},l="178.\u5206\u6570\u6392\u540d",i={},d=[{value:"\u9898\u89e3 1 - sql",id:"\u9898\u89e3-1---sql",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"178\u5206\u6570\u6392\u540d",children:"178.\u5206\u6570\u6392\u540d"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/rank-scores",children:"178.\u5206\u6570\u6392\u540d"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u636e\u5e93",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7f16\u5199\u4e00\u4e2a\u89e3\u51b3\u65b9\u6848\u6765\u67e5\u8be2\u5206\u6570\u7684\u6392\u540d\u3002\u6309 score \u964d\u5e8f\u8fd4\u56de\u7ed3\u679c\u8868\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---sql",children:"\u9898\u89e3 1 - sql"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-10-15"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a805ms"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1asql"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u67e5\u627escore\u65f6\u540c\u65f6\u67e5\u627e\u5927\u4e8e\u5f53\u524d\u5206\u6570\u7684\u6570\u91cf"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select \n    score,\n    (\n        select count(distinct s2.score)\n        from Scores s2\n        where s2.score >= s1.score\n    ) as 'rank'\nfrom Scores s1\norder by score desc\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31503:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(30758);const r={},c=t.createContext(r);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);