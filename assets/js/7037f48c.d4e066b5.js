"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[99849],{3046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/901-1000/\u957f\u6309\u952e\u5165","title":"925.\u957f\u6309\u952e\u5165","description":"\u94fe\u63a5\uff1a925.\u957f\u6309\u952e\u5165","source":"@site/docs/leetcode/901-1000/925.\u957f\u6309\u952e\u5165.md","sourceDirName":"leetcode/901-1000","slug":"/leetcode/901-1000/\u957f\u6309\u952e\u5165","permalink":"/docs/leetcode/901-1000/\u957f\u6309\u952e\u5165","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":925,"frontMatter":{},"sidebar":"journal","previous":{"title":"924.\u5c3d\u91cf\u51cf\u5c11\u6076\u610f\u8f6f\u4ef6\u7684\u4f20\u64ad","permalink":"/docs/leetcode/901-1000/\u5c3d\u91cf\u51cf\u5c11\u6076\u610f\u8f6f\u4ef6\u7684\u4f20\u64ad"},"next":{"title":"926.\u5c06\u5b57\u7b26\u4e32\u7ffb\u8f6c\u5230\u5355\u8c03\u9012\u589e","permalink":"/docs/leetcode/901-1000/\u5c06\u5b57\u7b26\u4e32\u7ffb\u8f6c\u5230\u5355\u8c03\u9012\u589e"}}');var r=t(25105),c=t(8556);const i={},l="925.\u957f\u6309\u952e\u5165",o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"925\u957f\u6309\u952e\u5165",children:"925.\u957f\u6309\u952e\u5165"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/long-pressed-name",children:"925.\u957f\u6309\u952e\u5165"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4f60\u7684\u670b\u53cb\u6b63\u5728\u4f7f\u7528\u952e\u76d8\u8f93\u5165\u4ed6\u7684\u540d\u5b57 \xa0name\u3002\u5076\u5c14\uff0c\u5728\u952e\u5165\u5b57\u7b26 \xa0c\xa0 \u65f6\uff0c\u6309\u952e\u53ef\u80fd\u4f1a\u88ab\u957f\u6309\uff0c\u800c\u5b57\u7b26\u53ef\u80fd\u88ab\u8f93\u5165 1 \u6b21\u6216\u591a\u6b21\u3002\u4f60\u5c06\u4f1a\u68c0\u67e5\u952e\u76d8\u8f93\u5165\u7684\u5b57\u7b26 \xa0typed\u3002\u5982\u679c\u5b83\u5bf9\u5e94\u7684\u53ef\u80fd\u662f\u4f60\u7684\u670b\u53cb\u7684\u540d\u5b57\uff08\u5176\u4e2d\u4e00\u4e9b\u5b57\u7b26\u53ef\u80fd\u88ab\u957f\u6309\uff09\uff0c\u90a3\u4e48\u5c31\u8fd4\u56de \xa0True\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-10-23"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.2MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u6307\u9488\u9010\u4e2a\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function isLongPressedName(name: string, typed: string): boolean {\n  let p = 0;\n  for (let i = 0, l = typed.length; i < l; i++) {\n    const c = typed[i];\n    if (c === name[p]) {\n      p++;\n    } else if (i !== 0 && typed[i] === typed[i - 1]) {\n    } else return false;\n  }\n  return p === name.length;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(58101);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);