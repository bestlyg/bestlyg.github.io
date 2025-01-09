"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[36794],{11018:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/601-700/\u56de\u6587\u5b50\u4e32","title":"647.\u56de\u6587\u5b50\u4e32","description":"\u94fe\u63a5\uff1a647.\u56de\u6587\u5b50\u4e32","source":"@site/docs/leetcode/601-700/647.\u56de\u6587\u5b50\u4e32.md","sourceDirName":"leetcode/601-700","slug":"/leetcode/601-700/\u56de\u6587\u5b50\u4e32","permalink":"/docs/leetcode/601-700/\u56de\u6587\u5b50\u4e32","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":647,"frontMatter":{},"sidebar":"journal","previous":{"title":"646.\u6700\u957f\u6570\u5bf9\u94fe","permalink":"/docs/leetcode/601-700/\u6700\u957f\u6570\u5bf9\u94fe"},"next":{"title":"648.\u5355\u8bcd\u66ff\u6362","permalink":"/docs/leetcode/601-700/\u5355\u8bcd\u66ff\u6362"}}');var r=t(25105),c=t(8556);const i={},l="647.\u56de\u6587\u5b50\u4e32",o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"647\u56de\u6587\u5b50\u4e32",children:"647.\u56de\u6587\u5b50\u4e32"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/palindromic-substrings",children:"647.\u56de\u6587\u5b50\u4e32"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u4f60\u7684\u4efb\u52a1\u662f\u8ba1\u7b97\u8fd9\u4e2a\u5b57\u7b26\u4e32\u4e2d\u6709\u591a\u5c11\u4e2a\u56de\u6587\u5b50\u4e32\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-08-19"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a37.5MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u6bcf\u4e2a\u4e2d\u5fc3\u70b9,\u8fdb\u884c\u5411\u5916\u6269\u5f20\u5224\u65ad\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function countSubstrings(s: string): number {\n  const n = s.length;\n  let ans = 0;\n  for (let i = 0; i < 2 * n - 1; ++i) {\n    let l = ~~(i / 2);\n    let r = l + (i % 2);\n    while (l >= 0 && r < n && s[l] === s[r]) {\n      --l;\n      ++r;\n      ++ans;\n    }\n  }\n  return ans;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(58101);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);