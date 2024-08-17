"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[48015],{30444:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(86070),c=t(25710);const r={},i="394.\u5b57\u7b26\u4e32\u89e3\u7801",l={id:"leetcode/301-400/\u5b57\u7b26\u4e32\u89e3\u7801",title:"394.\u5b57\u7b26\u4e32\u89e3\u7801",description:"\u94fe\u63a5\uff1a394.\u5b57\u7b26\u4e32\u89e3\u7801",source:"@site/docs/leetcode/301-400/394.\u5b57\u7b26\u4e32\u89e3\u7801.md",sourceDirName:"leetcode/301-400",slug:"/leetcode/301-400/\u5b57\u7b26\u4e32\u89e3\u7801",permalink:"/docs/leetcode/301-400/\u5b57\u7b26\u4e32\u89e3\u7801",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:394,frontMatter:{},sidebar:"journal",previous:{title:"393.UTF-8\u7f16\u7801\u9a8c\u8bc1",permalink:"/docs/leetcode/301-400/UTF-8\u7f16\u7801\u9a8c\u8bc1"},next:{title:"395.\u81f3\u5c11\u6709K\u4e2a\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",permalink:"/docs/leetcode/301-400/\u81f3\u5c11\u6709K\u4e2a\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"394\u5b57\u7b26\u4e32\u89e3\u7801",children:"394.\u5b57\u7b26\u4e32\u89e3\u7801"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/decode-string",children:"394.\u5b57\u7b26\u4e32\u89e3\u7801"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u9012\u5f52\u3001\u5b57\u7b26\u4e32",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u7ecf\u8fc7\u7f16\u7801\u7684\u5b57\u7b26\u4e32\uff0c\u8fd4\u56de\u5b83\u89e3\u7801\u540e\u7684\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-28"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a64ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a32.3MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5224\u65ad\u662f\u6570\u5b57\u8fd8\u662f\u5b57\u6bcd\u8fd8\u662f[]\u7b26\u53f7\uff0c\u7136\u540e\u9012\u5f52\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"const numReg = /\\d/;\nconst charReg = /[a-zA-Z]{1}/;\nvar decodeString = function (s: string): string {\n  let res = '';\n  let numCache = '';\n  for (let i = 0, len = s.length; i < len; i++) {\n    const c = s[i];\n    if (charReg.test(c)) {\n      res += c;\n    } else if (numReg.test(c)) {\n      numCache += c;\n    } else if (c === '[') {\n      let count = 1;\n      let lastIndex = i;\n      while (count !== 0 && lastIndex < len) {\n        lastIndex++;\n        if (s[lastIndex] === '[') count++;\n        if (s[lastIndex] === ']') count--;\n      }\n      const inS = decodeString(s.substring(i + 1, lastIndex));\n      i = lastIndex;\n      let insert = '';\n      for (let j = 0; j < +numCache; j++) insert += inS;\n      res += insert;\n      numCache = '';\n    }\n  }\n  return res;\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-07"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a132ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.3MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6808\u50a8\u5b58\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function decodeString(s: string): string {\n  const numReg = /\\d/;\n  const stack: string[] = [];\n  for (const c of s) {\n    if (c === ']') {\n      let str = '';\n      while (stack[stack.length - 1] !== '[') str = stack.pop()! + str;\n      stack.pop();\n      let numStr = '';\n      while (stack.length !== 0 && numReg.test(stack[stack.length - 1]))\n        numStr = stack.pop() + numStr;\n      str = str.repeat(+numStr);\n      stack.push(str);\n    } else {\n      stack.push(c);\n    }\n  }\n  return stack.join('');\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>l});var s=t(30758);const c={},r=s.createContext(c);function i(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);