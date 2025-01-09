"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[84873],{59562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/1101-1200/\u53cd\u8f6c\u6bcf\u5bf9\u62ec\u53f7\u95f4\u7684\u5b50\u4e32","title":"1190.\u53cd\u8f6c\u6bcf\u5bf9\u62ec\u53f7\u95f4\u7684\u5b50\u4e32","description":"\u94fe\u63a5\uff1a1190.\u53cd\u8f6c\u6bcf\u5bf9\u62ec\u53f7\u95f4\u7684\u5b50\u4e32","source":"@site/docs/leetcode/1101-1200/1190.\u53cd\u8f6c\u6bcf\u5bf9\u62ec\u53f7\u95f4\u7684\u5b50\u4e32.md","sourceDirName":"leetcode/1101-1200","slug":"/leetcode/1101-1200/\u53cd\u8f6c\u6bcf\u5bf9\u62ec\u53f7\u95f4\u7684\u5b50\u4e32","permalink":"/docs/leetcode/1101-1200/\u53cd\u8f6c\u6bcf\u5bf9\u62ec\u53f7\u95f4\u7684\u5b50\u4e32","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1190,"frontMatter":{},"sidebar":"journal","previous":{"title":"1189.\u201c\u6c14\u7403\u201d\u7684\u6700\u5927\u6570\u91cf","permalink":"/docs/leetcode/1101-1200/\u201c\u6c14\u7403\u201d\u7684\u6700\u5927\u6570\u91cf"},"next":{"title":"1200.\u6700\u5c0f\u7edd\u5bf9\u5dee","permalink":"/docs/leetcode/1101-1200/\u6700\u5c0f\u7edd\u5bf9\u5dee"}}');var r=n(25105),c=n(8556);const i={},o="1190.\u53cd\u8f6c\u6bcf\u5bf9\u62ec\u53f7\u95f4\u7684\u5b50\u4e32",l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"1190\u53cd\u8f6c\u6bcf\u5bf9\u62ec\u53f7\u95f4\u7684\u5b50\u4e32",children:"1190.\u53cd\u8f6c\u6bcf\u5bf9\u62ec\u53f7\u95f4\u7684\u5b50\u4e32"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(t.a,{href:"https://leetcode.cn/problems/reverse-substrings-between-each-pair-of-parentheses",children:"1190.\u53cd\u8f6c\u6bcf\u5bf9\u62ec\u53f7\u95f4\u7684\u5b50\u4e32"}),(0,r.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u5b57\u7b26\u4e32",(0,r.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u51fa\u4e00\u4e2a\u5b57\u7b26\u4e32 s\uff08\u4ec5\u542b\u6709\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u548c\u62ec\u53f7\uff09\u3002\u8bf7\u4f60\u6309\u7167\u4ece\u62ec\u53f7\u5185\u5230\u5916\u7684\u987a\u5e8f\uff0c\u9010\u5c42\u53cd\u8f6c\u6bcf\u5bf9\u5339\u914d\u62ec\u53f7\u4e2d\u7684\u5b57\u7b26\u4e32\uff0c\u5e76\u8fd4\u56de\u6700\u7ec8\u7684\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-26"}),"\n",(0,r.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,r.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.4MB"}),"\n",(0,r.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6808\u50a8\u5b58\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"function reverseParentheses(s: string): string {\n  const stack: string[] = [];\n  for (const c of s) {\n    if (c === ')') {\n      let str = '';\n      while (stack[stack.length - 1] !== '(') str = stack.pop()! + str;\n      stack.pop();\n      stack.push(str.split('').reverse().join(''));\n    } else stack.push(c);\n  }\n  return stack.join('');\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8556:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(58101);const r={},c=s.createContext(r);function i(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);