"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[43484],{7408:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"leetcode/101-200/\u6768\u8f89\u4e09\u89d2II","title":"119.\u6768\u8f89\u4e09\u89d2II","description":"\u94fe\u63a5\uff1a119.\u6768\u8f89\u4e09\u89d2II","source":"@site/docs/leetcode/101-200/119.\u6768\u8f89\u4e09\u89d2II.md","sourceDirName":"leetcode/101-200","slug":"/leetcode/101-200/\u6768\u8f89\u4e09\u89d2II","permalink":"/docs/leetcode/101-200/\u6768\u8f89\u4e09\u89d2II","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":119,"frontMatter":{},"sidebar":"journal","previous":{"title":"118.\u6768\u8f89\u4e09\u89d2","permalink":"/docs/leetcode/101-200/\u6768\u8f89\u4e09\u89d2"},"next":{"title":"120.\u4e09\u89d2\u5f62\u6700\u5c0f\u8def\u5f84\u548c","permalink":"/docs/leetcode/101-200/\u4e09\u89d2\u5f62\u6700\u5c0f\u8def\u5f84\u548c"}}');var s=r(86070),i=r(31503);const l={},c="119.\u6768\u8f89\u4e09\u89d2II",d={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2},{value:"\u9898\u89e3 4 - typescript",id:"\u9898\u89e3-4---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"119\u6768\u8f89\u4e09\u89d2ii",children:"119.\u6768\u8f89\u4e09\u89d2II"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/pascals-triangle-ii",children:"119.\u6768\u8f89\u4e09\u89d2II"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u975e\u8d1f\u7d22\u5f15 k\uff0c\u5176\u4e2d k \u2264 33\uff0c\u8fd4\u56de\u6768\u8f89\u4e09\u89d2\u7684\u7b2c k \u884c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-12"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.5MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u6240\u6709\u503c\u8fdb\u884c\u50a8\u5b58\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function getRow(rowIndex: number): number[] {\n  const cache: number[][] = [[1], [1, 1]];\n  for (let i = 2; i <= 33; i++) {\n    const arr = [1];\n    const prev = cache[i - 1];\n    for (let j = 0, l = prev.length; j < l - 1; j++) {\n      arr.push(prev[j] + prev[j + 1]);\n    }\n    arr.push(1);\n    cache.push(arr);\n  }\n  return cache[rowIndex];\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-12"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.5MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f18\u5316\u9898\u89e3 1\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const cache = [[1],[1,1],...]\n      function getRow(rowIndex: number): number[] {\n        return cache[rowIndex];\n      }\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-12"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.1MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528 1 \u4e2a\u6570\u7ec4\u8fdb\u884c\u8986\u76d6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function getRow(rowIndex: number): number[] {\n  if (rowIndex === 0) return [1];\n  const arr = [1, 1];\n  if (rowIndex === 1) return arr;\n  for (let i = 2; i <= rowIndex; i++) {\n    for (let j = 0, l = arr.length; j < l - 1; j++) {\n      arr[j] = arr[j] + arr[j + 1];\n    }\n    arr.unshift(1);\n    arr.splice(arr.length - 1, 1, 1);\n  }\n  return arr;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-4---typescript",children:"\u9898\u89e3 4 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-04"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.2MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function getRow(rowIndex: number): number[] {\n  const list: number[][] = new Array(2).fill(0).map(_ => []);\n  list[0].push(1);\n  list[1].push(1, 1);\n  for (let i = 2; i <= rowIndex; i++) {\n    const idx = i % 2;\n    const prevIdx = idx ^ 1;\n    list[idx].length = 0;\n    list[idx].push(1);\n    for (let j = 1; j <= i - 1; j++) list[idx].push(list[prevIdx][j] + list[prevIdx][j - 1]);\n    list[idx].push(1);\n  }\n  return list[rowIndex % 2];\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},31503:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var t=r(30758);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);