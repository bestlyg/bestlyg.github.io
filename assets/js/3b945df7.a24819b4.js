"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[86905],{1066:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(86070),c=t(25710);const i={},r="316.\u53bb\u9664\u91cd\u590d\u5b57\u6bcd",o={id:"leetcode/301-400/\u53bb\u9664\u91cd\u590d\u5b57\u6bcd",title:"316.\u53bb\u9664\u91cd\u590d\u5b57\u6bcd",description:"\u94fe\u63a5\uff1a316.\u53bb\u9664\u91cd\u590d\u5b57\u6bcd",source:"@site/docs/leetcode/301-400/316.\u53bb\u9664\u91cd\u590d\u5b57\u6bcd.md",sourceDirName:"leetcode/301-400",slug:"/leetcode/301-400/\u53bb\u9664\u91cd\u590d\u5b57\u6bcd",permalink:"/web/site/docs/leetcode/301-400/\u53bb\u9664\u91cd\u590d\u5b57\u6bcd",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:316,frontMatter:{},sidebar:"journal",previous:{title:"315.\u8ba1\u7b97\u53f3\u4fa7\u5c0f\u4e8e\u5f53\u524d\u5143\u7d20\u7684\u4e2a\u6570",permalink:"/web/site/docs/leetcode/301-400/\u8ba1\u7b97\u53f3\u4fa7\u5c0f\u4e8e\u5f53\u524d\u5143\u7d20\u7684\u4e2a\u6570"},next:{title:"318.\u6700\u5927\u5355\u8bcd\u957f\u5ea6\u4e58\u79ef",permalink:"/web/site/docs/leetcode/301-400/\u6700\u5927\u5355\u8bcd\u957f\u5ea6\u4e58\u79ef"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"316\u53bb\u9664\u91cd\u590d\u5b57\u6bcd",children:"316.\u53bb\u9664\u91cd\u590d\u5b57\u6bcd"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/remove-duplicate-letters",children:"316.\u53bb\u9664\u91cd\u590d\u5b57\u6bcd"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u8d2a\u5fc3\u3001\u5b57\u7b26\u4e32\u3001\u5355\u8c03\u6808",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 s \uff0c\u8bf7\u4f60\u53bb\u9664\u5b57\u7b26\u4e32\u4e2d\u91cd\u590d\u7684\u5b57\u6bcd\uff0c\u4f7f\u5f97\u6bcf\u4e2a\u5b57\u6bcd\u53ea\u51fa\u73b0\u4e00\u6b21\u3002\u9700\u4fdd\u8bc1 \u8fd4\u56de\u7ed3\u679c\u7684\u5b57\u5178\u5e8f\u6700\u5c0f\uff08\u8981\u6c42\u4e0d\u80fd\u6253\u4e71\u5176\u4ed6\u5b57\u7b26\u7684\u76f8\u5bf9\u4f4d\u7f6e\uff09\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-12-20"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a116ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.9MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","[\u53c2\u8003\u94fe\u63a5](https://leetcode-cn.com/problems/remove-duplicate-letters/solution/qu-chu-zhong-fu-zi-mu-by-leetcode-soluti-vuso/)\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function removeDuplicateLetters(s: string): string {\n  const vis = new Array(26).fill(0);\n  const num = _.countBy(s);\n  const getCode = (c: string) => c.codePointAt(0)! - 'a'.codePointAt(0)!;\n  const stack = new Array();\n  let c: string;\n  for (let i = 0; i < s.length; i++) {\n    const ch = s[i];\n    if (!vis[getCode(ch)]) {\n      while (stack.length > 0 && (c = stack[stack.length - 1]) > ch) {\n        if (num[c] > 0) {\n          vis[getCode(c)] = 0;\n          stack.pop();\n        } else {\n          break;\n        }\n      }\n      vis[getCode(ch)] = 1;\n      stack.push(ch);\n    }\n    num[ch]--;\n  }\n  return stack.join('');\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-30"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.9MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5355\u8c03\u6808\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function removeDuplicateLetters(s: string): string {\n  const map: Record<string, number> = {};\n  for (const c of s) map[c] = (map[c] ?? 0) + 1;\n  const stack: string[] = [];\n  const set = new Set<string>();\n  const toNum = (c: string) => c.codePointAt(0)! - 'a'.codePointAt(0)!;\n  for (const c of s) {\n    if (set.has(c)) {\n      map[c]--;\n      continue;\n    }\n    while (\n      stack.length &&\n      toNum(stack[stack.length - 1]) > toNum(c) &&\n      map[stack[stack.length - 1]] > 0\n    ) {\n      set.delete(stack.pop()!);\n    }\n    stack.push(c);\n    set.add(c);\n    map[c]--;\n  }\n  return stack.join('');\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(30758);const c={},i=s.createContext(c);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);