"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[78801],{36564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"leetcode/801-900/\u6bd4\u8f83\u542b\u9000\u683c\u7684\u5b57\u7b26\u4e32","title":"844.\u6bd4\u8f83\u542b\u9000\u683c\u7684\u5b57\u7b26\u4e32","description":"\u94fe\u63a5\uff1a844.\u6bd4\u8f83\u542b\u9000\u683c\u7684\u5b57\u7b26\u4e32","source":"@site/docs/leetcode/801-900/844.\u6bd4\u8f83\u542b\u9000\u683c\u7684\u5b57\u7b26\u4e32.md","sourceDirName":"leetcode/801-900","slug":"/leetcode/801-900/\u6bd4\u8f83\u542b\u9000\u683c\u7684\u5b57\u7b26\u4e32","permalink":"/docs/leetcode/801-900/\u6bd4\u8f83\u542b\u9000\u683c\u7684\u5b57\u7b26\u4e32","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":844,"frontMatter":{},"sidebar":"journal","previous":{"title":"842.\u5c06\u6570\u7ec4\u62c6\u5206\u6210\u6590\u6ce2\u90a3\u5951\u5e8f\u5217","permalink":"/docs/leetcode/801-900/\u5c06\u6570\u7ec4\u62c6\u5206\u6210\u6590\u6ce2\u90a3\u5951\u5e8f\u5217"},"next":{"title":"845.\u6570\u7ec4\u4e2d\u7684\u6700\u957f\u5c71\u8109","permalink":"/docs/leetcode/801-900/\u6570\u7ec4\u4e2d\u7684\u6700\u957f\u5c71\u8109"}}');var s=t(86070),c=t(31503);const i={},l="844.\u6bd4\u8f83\u542b\u9000\u683c\u7684\u5b57\u7b26\u4e32",o={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"844\u6bd4\u8f83\u542b\u9000\u683c\u7684\u5b57\u7b26\u4e32",children:"844.\u6bd4\u8f83\u542b\u9000\u683c\u7684\u5b57\u7b26\u4e32"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/backspace-string-compare",children:"844.\u6bd4\u8f83\u542b\u9000\u683c\u7684\u5b57\u7b26\u4e32"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32\u3001\u6a21\u62df",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a S \u548c T \u4e24\u4e2a\u5b57\u7b26\u4e32\uff0c\u5f53\u5b83\u4eec\u5206\u522b\u88ab\u8f93\u5165\u5230\u7a7a\u767d\u7684\u6587\u672c\u7f16\u8f91\u5668\u540e\uff0c\u5224\u65ad\u4e8c\u8005\u662f\u5426\u76f8\u7b49\uff0c\u5e76\u8fd4\u56de\u7ed3\u679c\u3002 # \u4ee3\u8868\u9000\u683c\u5b57\u7b26\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-10-19"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.2MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u6b63\u5219\u53bb\u6389\u9000\u683c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function backspaceCompare(S: string, T: string): boolean {\n  return replace(S) === replace(T);\n  function replace(str: string): string {\n    const reg = /[a-z]#/g;\n    let arr: RegExpMatchArray | null;\n    while ((arr = str.match(reg)) !== null) {\n      arr.forEach(v => (str = str.replace(v, '')));\n      arr = str.match(reg);\n      // console.log(str);\n    }\n    while (str.startsWith('#')) str = str.substr(1);\n    // console.log(str);\n    return str;\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-19"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.7MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6808\u7ef4\u62a4\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function backspaceCompare(S: string, T: string): boolean {\n  function compStr(str: string): string {\n    const stack: string[] = [];\n    for (let i = 0, l = str.length; i < l; i++) {\n      const c = str[i];\n      if (c === '#') {\n        if (stack.length === 0) continue;\n        else stack.pop();\n      } else {\n        stack.push(c);\n      }\n    }\n    return stack.join('');\n  }\n  return compStr(S) === compStr(T);\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(30758);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);