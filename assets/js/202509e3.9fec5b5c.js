"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[5607],{53604:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"leetcode/501-600/\u5b57\u7b26\u4e32\u7684\u6392\u5217","title":"567.\u5b57\u7b26\u4e32\u7684\u6392\u5217","description":"\u94fe\u63a5\uff1a567.\u5b57\u7b26\u4e32\u7684\u6392\u5217","source":"@site/docs/leetcode/501-600/567.\u5b57\u7b26\u4e32\u7684\u6392\u5217.md","sourceDirName":"leetcode/501-600","slug":"/leetcode/501-600/\u5b57\u7b26\u4e32\u7684\u6392\u5217","permalink":"/docs/leetcode/501-600/\u5b57\u7b26\u4e32\u7684\u6392\u5217","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":567,"frontMatter":{},"sidebar":"journal","previous":{"title":"566.\u91cd\u5851\u77e9\u9635","permalink":"/docs/leetcode/501-600/\u91cd\u5851\u77e9\u9635"},"next":{"title":"572.\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811","permalink":"/docs/leetcode/501-600/\u53e6\u4e00\u68f5\u6811\u7684\u5b50\u6811"}}');var s=t(25105),c=t(8556);const i={},l="567.\u5b57\u7b26\u4e32\u7684\u6392\u5217",o={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"567\u5b57\u7b26\u4e32\u7684\u6392\u5217",children:"567.\u5b57\u7b26\u4e32\u7684\u6392\u5217"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/permutation-in-string",children:"567.\u5b57\u7b26\u4e32\u7684\u6392\u5217"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32\u3001\u6ed1\u52a8\u7a97\u53e3",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e24\u4e2a\u5b57\u7b26\u4e32 s1 \u548c s2\uff0c\u5199\u4e00\u4e2a\u51fd\u6570\u6765\u5224\u65ad s2 \u662f\u5426\u5305\u542b s1 \u7684\u6392\u5217\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-10"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a340ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528 map \u50a8\u5b58\u904d\u5386\u8fc7\u7684\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function checkInclusion(s1: string, s2: string): boolean {\n  const len1 = s1.length;\n  const getMap = (arr: string[]) =>\n    arr.reduce((total, cur) => {\n      total[cur] = (total[cur] ?? 0) + 1;\n      return total;\n    }, {} as Record<string, number>);\n  const charMap1 = getMap(s1.split(''));\n  const charMap2 = getMap(s2.substr(0, len1).split(''));\n  const check = () => Object.entries(charMap1).every(([k, v]) => charMap2[k] === v);\n  if (check()) return true;\n  for (let i = len1, len2 = s2.length; i < len2; i++) {\n    charMap2[s2[i - len1]]--;\n    charMap2[s2[i]] = (charMap2[s2[i]] ?? 0) + 1;\n    if (check()) return true;\n  }\n  return false;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-10"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a304ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u589e\u52a0 set \u4f18\u5316\u9898\u89e3 1\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function checkInclusion(s1: string, s2: string): boolean {\n  const len1 = s1.length;\n  const getMap = (arr: string[]) =>\n    arr.reduce((total, cur) => {\n      total[cur] = (total[cur] ?? 0) + 1;\n      return total;\n    }, {} as Record<string, number>);\n  const arr1 = s1.split('');\n  const map1 = getMap(arr1);\n  const set1 = new Set(arr1);\n  const map2 = getMap(s2.substr(0, len1).split(''));\n  const check = () => Object.entries(map1).every(([k, v]) => map2[k] === v);\n  if (check()) return true;\n  for (let i = len1, len2 = s2.length; i < len2; i++) {\n    const char = s2[i];\n    map2[s2[i - len1]]--;\n    map2[char] = (map2[char] ?? 0) + 1;\n    if (!set1.has(char)) continue;\n    if (check()) return true;\n  }\n  return false;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(58101);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);