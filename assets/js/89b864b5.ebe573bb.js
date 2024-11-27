"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[31869],{73:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/1-100/\u6587\u672c\u5de6\u53f3\u5bf9\u9f50","title":"68.\u6587\u672c\u5de6\u53f3\u5bf9\u9f50","description":"\u94fe\u63a5\uff1a68.\u6587\u672c\u5de6\u53f3\u5bf9\u9f50","source":"@site/docs/leetcode/1-100/68.\u6587\u672c\u5de6\u53f3\u5bf9\u9f50.md","sourceDirName":"leetcode/1-100","slug":"/leetcode/1-100/\u6587\u672c\u5de6\u53f3\u5bf9\u9f50","permalink":"/docs/leetcode/1-100/\u6587\u672c\u5de6\u53f3\u5bf9\u9f50","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":68,"frontMatter":{},"sidebar":"journal","previous":{"title":"67.\u4e8c\u8fdb\u5236\u6c42\u548c","permalink":"/docs/leetcode/1-100/\u4e8c\u8fdb\u5236\u6c42\u548c"},"next":{"title":"69.x\u7684\u5e73\u65b9\u6839","permalink":"/docs/leetcode/1-100/x\u7684\u5e73\u65b9\u6839"}}');var i=t(86070),r=t(31503);const l={},o="68.\u6587\u672c\u5de6\u53f3\u5bf9\u9f50",c={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"68\u6587\u672c\u5de6\u53f3\u5bf9\u9f50",children:"68.\u6587\u672c\u5de6\u53f3\u5bf9\u9f50"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/text-justification",children:"68.\u6587\u672c\u5de6\u53f3\u5bf9\u9f50"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u5b57\u7b26\u4e32\u3001\u6a21\u62df",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5355\u8bcd\u6570\u7ec4\u548c\u4e00\u4e2a\u957f\u5ea6 maxWidth\uff0c\u91cd\u65b0\u6392\u7248\u5355\u8bcd\uff0c\u4f7f\u5176\u6210\u4e3a\u6bcf\u884c\u6070\u597d\u6709 maxWidth \u4e2a\u5b57\u7b26\uff0c\u4e14\u5de6\u53f3\u4e24\u7aef\u5bf9\u9f50\u7684\u6587\u672c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-09"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.4MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9010\u4e2a\u5206\u89e3\u5355\u8bcd\u7ec4\u8fdb\u884c\u62fc\u63a5\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function repeat(len: number) {\n  return ''.padEnd(len, ' ');\n}\nfunction fullJustify(words: string[], maxWidth: number): string[] {\n  let idx = 0;\n  const ans: string[] = [];\n  const n = words.length;\n  while (idx < n) {\n    let len = 0;\n    const list: string[] = [];\n    while (idx < n && len + words[idx].length <= maxWidth) {\n      const str = words[idx];\n      len += str.length + 1;\n      list.push(str);\n      idx++;\n    }\n    if (idx === n) {\n      ans.push(list.join(' ').padEnd(maxWidth, ' '));\n    } else if (list.length === 1) {\n      ans.push(list[0].padEnd(maxWidth, ' '));\n    } else {\n      const strlen = list.join('').length;\n      let empty = maxWidth - strlen;\n      const emptyList: number[] = new Array(list.length - 1).fill(0);\n      for (let i = 0; empty !== 0; i = (i + 1) % (list.length - 1)) {\n        emptyList[i]++;\n        empty--;\n      }\n      let str = '';\n      for (let i = 0; i < list.length; i++) {\n        str += list[i] + repeat(emptyList.shift()!);\n      }\n      ans.push(str);\n    }\n  }\n  return ans;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(30758);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);