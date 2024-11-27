"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[36102],{36016:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/1701-1800/\u89e3\u7801\u5f02\u6216\u540e\u7684\u6392\u5217","title":"1734.\u89e3\u7801\u5f02\u6216\u540e\u7684\u6392\u5217","description":"\u94fe\u63a5\uff1a1734.\u89e3\u7801\u5f02\u6216\u540e\u7684\u6392\u5217","source":"@site/docs/leetcode/1701-1800/1734.\u89e3\u7801\u5f02\u6216\u540e\u7684\u6392\u5217.md","sourceDirName":"leetcode/1701-1800","slug":"/leetcode/1701-1800/\u89e3\u7801\u5f02\u6216\u540e\u7684\u6392\u5217","permalink":"/docs/leetcode/1701-1800/\u89e3\u7801\u5f02\u6216\u540e\u7684\u6392\u5217","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1734,"frontMatter":{},"sidebar":"journal","previous":{"title":"1732.\u627e\u5230\u6700\u9ad8\u6d77\u62d4","permalink":"/docs/leetcode/1701-1800/\u627e\u5230\u6700\u9ad8\u6d77\u62d4"},"next":{"title":"1736.\u66ff\u6362\u9690\u85cf\u6570\u5b57\u5f97\u5230\u7684\u6700\u665a\u65f6\u95f4","permalink":"/docs/leetcode/1701-1800/\u66ff\u6362\u9690\u85cf\u6570\u5b57\u5f97\u5230\u7684\u6700\u665a\u65f6\u95f4"}}');var o=t(86070),s=t(31503);const c={},i="1734.\u89e3\u7801\u5f02\u6216\u540e\u7684\u6392\u5217",l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"1734\u89e3\u7801\u5f02\u6216\u540e\u7684\u6392\u5217",children:"1734.\u89e3\u7801\u5f02\u6216\u540e\u7684\u6392\u5217"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(n.a,{href:"https://leetcode.cn/problems/decode-xored-permutation",children:"1734.\u89e3\u7801\u5f02\u6216\u540e\u7684\u6392\u5217"}),(0,o.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,o.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4",(0,o.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60 encoded \u6570\u7ec4\uff0c\u8bf7\u4f60\u8fd4\u56de\u539f\u59cb\u6570\u7ec4 perm \u3002\u9898\u76ee\u4fdd\u8bc1\u7b54\u6848\u5b58\u5728\u4e14\u552f\u4e00\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-11"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a392ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a71.4MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5df2\u77e5 1~n \u7684\u6240\u6709\u503c\u5f02\u6216\u7ed3\u679c\u8fdb\u884c\u6c42\u9996\u503c\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"function decode(encoded: number[]): number[] {\n  const n = encoded.length + 1;\n  let xorNum = 1;\n  for (let i = 2; i <= n; i++) xorNum ^= i;\n  for (let i = 1; i < n - 1; i += 2) xorNum ^= encoded[i];\n  return [xorNum, ...encoded.map(v => (xorNum ^= v))];\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(30758);const o={},s=r.createContext(o);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);