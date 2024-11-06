"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[33824],{6714:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var s=t(86070),c=t(31503);const o={},r="227.\u57fa\u672c\u8ba1\u7b97\u5668II",i={id:"leetcode/201-300/\u57fa\u672c\u8ba1\u7b97\u5668II",title:"227.\u57fa\u672c\u8ba1\u7b97\u5668II",description:"\u94fe\u63a5\uff1a227.\u57fa\u672c\u8ba1\u7b97\u5668II",source:"@site/docs/leetcode/201-300/227.\u57fa\u672c\u8ba1\u7b97\u5668II.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u57fa\u672c\u8ba1\u7b97\u5668II",permalink:"/docs/leetcode/201-300/\u57fa\u672c\u8ba1\u7b97\u5668II",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:227,frontMatter:{},sidebar:"journal",previous:{title:"226.\u7ffb\u8f6c\u4e8c\u53c9\u6811",permalink:"/docs/leetcode/201-300/\u7ffb\u8f6c\u4e8c\u53c9\u6811"},next:{title:"228.\u6c47\u603b\u533a\u95f4",permalink:"/docs/leetcode/201-300/\u6c47\u603b\u533a\u95f4"}},l={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"227\u57fa\u672c\u8ba1\u7b97\u5668ii",children:"227.\u57fa\u672c\u8ba1\u7b97\u5668II"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/basic-calculator-ii",children:"227.\u57fa\u672c\u8ba1\u7b97\u5668II"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6570\u5b66\u3001\u5b57\u7b26\u4e32",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32\u8868\u8fbe\u5f0f s \uff0c\u8bf7\u4f60\u5b9e\u73b0\u4e00\u4e2a\u57fa\u672c\u8ba1\u7b97\u5668\u6765\u8ba1\u7b97\u5e76\u8fd4\u56de\u5b83\u7684\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-11"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a148ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a50.6MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5148\u4e58\u9664\u540e\u52a0\u51cf\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"const numReg = /\\-?\\d+/;\nconst opMap: Record<string, (num1: number, num2: number) => number> = {\n  '+': (num1, num2) => num1 + num2,\n  '-': (num1, num2) => num1 - num2,\n  '*': (num1, num2) => num1 * num2,\n  '/': (num1, num2) => ~~(num1 / num2),\n};\nfunction calculate(s: string): number {\n  s = s.replace(/ /g, '');\n  const len = s.length;\n  const stack: string[] = [];\n  const peek = () => stack[stack.length - 1];\n  // \u53bb\u4e58\u9664\n  for (let i = 0; i < len; i++) {\n    let c = s[i];\n    if (c === '*' || c === '/' || c === '+') {\n      stack.push(c);\n    } else if (c === '-') {\n      if (stack.length === 0) stack.push('0');\n      stack.push(c);\n    } else {\n      while (i < len - 1 && numReg.test(s[i + 1])) {\n        c += s[i + 1];\n        i++;\n      }\n      const top = peek();\n      if (stack.length === 0) {\n        stack.push(c);\n      } else if (top === '*' || top === '/') {\n        const op = stack.pop()!;\n        const num1 = +stack.pop()!;\n        const num2 = +c;\n        stack.push(opMap[op](num1, num2) + '');\n      } else if (top === '-') {\n        stack[stack.length - 1] = '+';\n        stack.push(c.startsWith('-') ? c.substr(1) : '-' + c);\n      } else {\n        stack.push(c);\n      }\n    }\n  }\n  // \u53bb\u52a0\u51cf\n  const newStack: string[] = [];\n  for (const c of stack) {\n    if (numReg.test(c)) {\n      if (newStack[newStack.length - 1] === '+') {\n        const op = newStack.pop()!;\n        const num1 = +newStack.pop()!;\n        const num2 = +c;\n        newStack.push(opMap[op](num1, num2) + '');\n      } else {\n        newStack.push(c);\n      }\n    } else {\n      newStack.push(c);\n    }\n  }\n  return +newStack[0];\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>i});var s=t(30758);const c={},o=s.createContext(c);function r(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);