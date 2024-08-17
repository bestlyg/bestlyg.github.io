"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[46192],{60990:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=s(86070),i=s(25710);const r={},l="345.\u53cd\u8f6c\u5b57\u7b26\u4e32\u4e2d\u7684\u5143\u97f3\u5b57\u6bcd",c={id:"leetcode/301-400/\u53cd\u8f6c\u5b57\u7b26\u4e32\u4e2d\u7684\u5143\u97f3\u5b57\u6bcd",title:"345.\u53cd\u8f6c\u5b57\u7b26\u4e32\u4e2d\u7684\u5143\u97f3\u5b57\u6bcd",description:"\u94fe\u63a5\uff1a345.\u53cd\u8f6c\u5b57\u7b26\u4e32\u4e2d\u7684\u5143\u97f3\u5b57\u6bcd",source:"@site/docs/leetcode/301-400/345.\u53cd\u8f6c\u5b57\u7b26\u4e32\u4e2d\u7684\u5143\u97f3\u5b57\u6bcd.md",sourceDirName:"leetcode/301-400",slug:"/leetcode/301-400/\u53cd\u8f6c\u5b57\u7b26\u4e32\u4e2d\u7684\u5143\u97f3\u5b57\u6bcd",permalink:"/docs/leetcode/301-400/\u53cd\u8f6c\u5b57\u7b26\u4e32\u4e2d\u7684\u5143\u97f3\u5b57\u6bcd",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:345,frontMatter:{},sidebar:"journal",previous:{title:"344.\u53cd\u8f6c\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/301-400/\u53cd\u8f6c\u5b57\u7b26\u4e32"},next:{title:"347.\u524dK\u4e2a\u9ad8\u9891\u5143\u7d20",permalink:"/docs/leetcode/301-400/\u524dK\u4e2a\u9ad8\u9891\u5143\u7d20"}},o={},d=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2},{value:"\u9898\u89e3 4 - typescript",id:"\u9898\u89e3-4---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"345\u53cd\u8f6c\u5b57\u7b26\u4e32\u4e2d\u7684\u5143\u97f3\u5b57\u6bcd",children:"345.\u53cd\u8f6c\u5b57\u7b26\u4e32\u4e2d\u7684\u5143\u97f3\u5b57\u6bcd"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/reverse-vowels-of-a-string",children:"345.\u53cd\u8f6c\u5b57\u7b26\u4e32\u4e2d\u7684\u5143\u97f3\u5b57\u6bcd"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\uff0c\u4ee5\u5b57\u7b26\u4e32\u4f5c\u4e3a\u8f93\u5165\uff0c\u53cd\u8f6c\u8be5\u5b57\u7b26\u4e32\u4e2d\u7684\u5143\u97f3\u5b57\u6bcd\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-07"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a120ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.6MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6784\u5efa\u5143\u97f3\u96c6\u5408\u8fdb\u884c\u5012\u5e8f\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {string} s\n * @return {string}\n */\nvar reverseVowels = function (s) {\n  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);\n  let result = [...s];\n  let tempNum = [];\n  let tempStr = [];\n  for (let i = 0, len = s.length; i < len; i++) {\n    if (vowels.has(s[i].toLowerCase())) {\n      tempNum.push(i);\n      tempStr.push(s[i]);\n    }\n  }\n  tempNum = tempNum.reverse();\n  for (const [index, num] of tempNum.entries()) {\n    result.splice(num, 1, tempStr[index]);\n  }\n  return result.join('');\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-19"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46.3MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9010\u4e2a\u5224\u65ad\u5e76\u53cd\u5411\u53d6\u503c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function reverseVowels(s: string): string {\n  const idxList: number[] = [];\n  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);\n  for (let i = 0; i < s.length; i++) if (set.has(s[i])) idxList.push(i);\n  const idxSet = new Set(idxList);\n  let ans = '';\n  for (let i = 0, pos = idxList.length - 1; i < s.length; i++) {\n    if (idxSet.has(i)) ans += s[idxList[pos--]];\n    else ans += s[i];\n  }\n  return ans;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-19"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.4MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f18\u5316\u5185\u5b58\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function reverseVowels(s: string): string {\n  const idxList: number[] = [];\n  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);\n  for (let i = 0; i < s.length; i++) if (set.has(s[i])) idxList.push(i);\n  let ans = '';\n  for (let i = 0, pos = idxList.length - 1; i < s.length; i++) {\n    if (set.has(s[i])) ans += s[idxList[pos--]];\n    else ans += s[i];\n  }\n  return ans;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-4---typescript",children:"\u9898\u89e3 4 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-19"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a180ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.2MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f18\u5316\u5185\u5b58\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function reverseVowels(s: string): string {\n  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);\n  let l = 0;\n  let r = s.length - 1;\n  while (l < r) {\n    if (set.has(s[r]) && set.has(s[l])) {\n      s = s.substring(0, l) + s[r] + s.substring(l + 1, r) + s[l] + s.substring(r + 1);\n      l++;\n      r--;\n    }\n    if (!set.has(s[l])) l++;\n    if (!set.has(s[r])) r--;\n  }\n  return s;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},25710:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var t=s(30758);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);