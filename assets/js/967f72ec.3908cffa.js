"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[10114],{72957:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/1-100/\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32","title":"3.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32","description":"\u94fe\u63a5\uff1a3.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32","source":"@site/docs/leetcode/1-100/3.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32.md","sourceDirName":"leetcode/1-100","slug":"/leetcode/1-100/\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32","permalink":"/docs/leetcode/1-100/\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"journal","previous":{"title":"2.\u4e24\u6570\u76f8\u52a0","permalink":"/docs/leetcode/1-100/\u4e24\u6570\u76f8\u52a0"},"next":{"title":"4.\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570","permalink":"/docs/leetcode/1-100/\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570"}}');var i=r(86070),l=r(31503);const t={},c="3.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",a={},d=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - c",id:"\u9898\u89e3-3---c",level:2},{value:"\u9898\u89e3 4 - cpp",id:"\u9898\u89e3-4---cpp",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"3\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32",children:"3.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/longest-substring-without-repeating-characters",children:"3.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u6ed1\u52a8\u7a97\u53e3",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8bf7\u4f60\u627e\u51fa\u5176\u4e2d\u4e0d\u542b\u6709\u91cd\u590d\u5b57\u7b26\u7684 \u6700\u957f\u5b50\u4e32 \u7684\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2019-09-20"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a128ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a37.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u521b\u5efa\u6570\u7ec4\uff0c\u904d\u5386\u6bcf\u4e2a\u5b57\u7b26\uff0c\u82e5\u5b57\u7b26\u4e0d\u5b58\u5728\u6570\u7ec4\u4e2d\u5219\u538b\u6808\uff0c\u82e5\u5b57\u7b26\u5b58\u5728\u5219\u5faa\u73af\u51fa\u6808\u76f4\u5230\u5b57\u7b26\u4e0d\u5b58\u5728\uff0c\u6bcf\u6b21\u904d\u5386\u7684\u6700\u540e\u5224\u65ad\u6570\u7ec4\u957f\u5ea6\u5927\u4e8e length \u957f\u5ea6\uff0c\u5219\u8d4b\u503c\u7ed9 length\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"var lengthOfLongestSubstring = function (s) {\n  let arr = [],\n    length = 0;\n  for (let c of s) {\n    if (arr.indexOf(c) > -1) {\n      while (arr.indexOf(c) > -1) {\n        arr.shift();\n      }\n    }\n    arr.push(c);\n    if (arr.length > length) {\n      length = arr.length;\n    }\n  }\n  return length;\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-16"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a180ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a47.7MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function lengthOfLongestSubstring(s: string): number {\n  if (s.length === 0) return 0;\n  let min = 1;\n  let max = s.length;\n  while (min < max) {\n    const mid = (min + max + 1) >> 1;\n    if (check(mid)) min = mid;\n    else max = mid - 1;\n  }\n  return min;\n  function check(len: number): boolean {\n    const map: Record<string, number> = {};\n    let ans = 0;\n    for (let i = 0; s[i]; i++) {\n      if (!map[s[i]]) ans++;\n      map[s[i]] = (map[s[i]] ?? 0) + 1;\n      if (i >= len) {\n        map[s[i - len]]--;\n        if (map[s[i - len]] === 0) ans--;\n      }\n      if (ans === len) return true;\n    }\n    return false;\n  }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---c",children:"\u9898\u89e3 3 - c"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-30"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.7MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6ed1\u52a8\u7a97\u53e3\u5224\u65ad\u5f53\u524d\u7a97\u53e3\u4e2d\u662f\u5426\u5b58\u5728\u8d85\u8fc7\u4e24\u6b21\u7684\u5b57\u7b26\uff0c\u5b58\u5728\u5219\u5de6\u4fa7\u53f3\u79fb\uff0c\u5426\u5219\u53f3\u4fa7\u53f3\u79fb\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:"int lengthOfLongestSubstring(char * s){\n    int arr[128] = {0};\n    int cnt = 0, l = 0, r = 0, n = strlen(s), ans = 0;\n    while (r < n) {\n        while (r < n && cnt == 0) {\n            arr[s[r]] += 1;\n            if (arr[s[r]] == 2) {\n                ++cnt;\n            }\n            ++r;\n            if (cnt == 0 && ans < r - l) ans = r - l;\n        }\n        while (cnt != 0) {\n            arr[s[l]] -= 1;\n            if (arr[s[l]] == 1) --cnt;\n            ++l;\n        }\n    }\n    return ans;\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-4---cpp",children:"\u9898\u89e3 4 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-24"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.7MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n          public:\n    int lengthOfLongestSubstring(string s) {\n        int arr[200] = {0}, l = 0, r = 0, ans = 0, n = s.size();\n        while (r < n) {\n            while (r < n && arr[s[r]] < 1) arr[s[r++]]++;\n            ans = max(ans, r - l);\n            char ch = s[r++];\n            arr[ch]++;\n            while (s[l] != ch) arr[s[l++]]--;\n            arr[s[l++]]--;\n        }\n        return ans;\n    }\n};\n"})})]})}function o(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},31503:(n,e,r)=>{r.d(e,{R:()=>t,x:()=>c});var s=r(30758);const i={},l=s.createContext(i);function t(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);