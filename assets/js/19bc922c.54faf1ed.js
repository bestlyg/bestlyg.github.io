"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[56508],{9181:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/1201-1300/\u4e32\u8054\u5b57\u7b26\u4e32\u7684\u6700\u5927\u957f\u5ea6","title":"1239.\u4e32\u8054\u5b57\u7b26\u4e32\u7684\u6700\u5927\u957f\u5ea6","description":"\u94fe\u63a5\uff1a1239.\u4e32\u8054\u5b57\u7b26\u4e32\u7684\u6700\u5927\u957f\u5ea6","source":"@site/docs/leetcode/1201-1300/1239.\u4e32\u8054\u5b57\u7b26\u4e32\u7684\u6700\u5927\u957f\u5ea6.md","sourceDirName":"leetcode/1201-1300","slug":"/leetcode/1201-1300/\u4e32\u8054\u5b57\u7b26\u4e32\u7684\u6700\u5927\u957f\u5ea6","permalink":"/docs/leetcode/1201-1300/\u4e32\u8054\u5b57\u7b26\u4e32\u7684\u6700\u5927\u957f\u5ea6","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1239,"frontMatter":{},"sidebar":"journal","previous":{"title":"1238.\u5faa\u73af\u7801\u6392\u5217","permalink":"/docs/leetcode/1201-1300/\u5faa\u73af\u7801\u6392\u5217"},"next":{"title":"1240.\u94fa\u74f7\u7816","permalink":"/docs/leetcode/1201-1300/\u94fa\u74f7\u7816"}}');var r=t(86070),c=t(31503);const i={},o="1239.\u4e32\u8054\u5b57\u7b26\u4e32\u7684\u6700\u5927\u957f\u5ea6",l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"1239\u4e32\u8054\u5b57\u7b26\u4e32\u7684\u6700\u5927\u957f\u5ea6",children:"1239.\u4e32\u8054\u5b57\u7b26\u4e32\u7684\u6700\u5927\u957f\u5ea6"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/maximum-length-of-a-concatenated-string-with-unique-characters",children:"1239.\u4e32\u8054\u5b57\u7b26\u4e32\u7684\u6700\u5927\u957f\u5ea6"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4\u3001\u5b57\u7b26\u4e32\u3001\u56de\u6eaf",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4 arr\uff0c\u5b57\u7b26\u4e32 s \u662f\u5c06 arr \u67d0\u4e00\u5b50\u5e8f\u5217\u5b57\u7b26\u4e32\u8fde\u63a5\u6240\u5f97\u7684\u5b57\u7b26\u4e32\uff0c\u5982\u679c s \u4e2d\u7684\u6bcf\u4e00\u4e2a\u5b57\u7b26\u90fd\u53ea\u51fa\u73b0\u8fc7\u4e00\u6b21\uff0c\u90a3\u4e48\u5b83\u5c31\u662f\u4e00\u4e2a\u53ef\u884c\u89e3\u3002\u8bf7\u8fd4\u56de\u6240\u6709\u53ef\u884c\u89e3 s \u4e2d\u6700\u957f\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-06-19"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a188ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43.8MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u4e8c\u8fdb\u5236\u50a8\u5b58\uff0c\u8fdb\u884c\u6bd4\u8f83\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function maxLength(arr: string[]): number {\n  const masks = arr\n    .map(s => {\n      if (s === '') return -1;\n      let mask = 0;\n      for (const c of s) {\n        const num = c.codePointAt(0)!;\n        if ((mask >> num) & 1) return -1;\n        mask |= 1 << num;\n      }\n      return mask;\n    })\n    .filter(num => num !== -1);\n  let ans = 0;\n  const masksLen = masks.length;\n  const dfs = (index = 0, num = 0) => {\n    if (index === masksLen) {\n      ans = Math.max(ans, num.toString(2).split('0').join('').length);\n      return;\n    }\n    if ((num & masks[index]) === 0) dfs(index + 1, num | masks[index]);\n    dfs(index + 1, num);\n  };\n  dfs();\n  return ans;\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>o});var s=t(30758);const r={},c=s.createContext(r);function i(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);