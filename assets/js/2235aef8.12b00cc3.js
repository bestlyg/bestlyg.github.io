"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[25447],{26905:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"leetcode/901-1000/\u548c\u53ef\u88abK\u6574\u9664\u7684\u5b50\u6570\u7ec4","title":"974.\u548c\u53ef\u88abK\u6574\u9664\u7684\u5b50\u6570\u7ec4","description":"\u94fe\u63a5\uff1a974.\u548c\u53ef\u88abK\u6574\u9664\u7684\u5b50\u6570\u7ec4","source":"@site/docs/leetcode/901-1000/974.\u548c\u53ef\u88abK\u6574\u9664\u7684\u5b50\u6570\u7ec4.md","sourceDirName":"leetcode/901-1000","slug":"/leetcode/901-1000/\u548c\u53ef\u88abK\u6574\u9664\u7684\u5b50\u6570\u7ec4","permalink":"/docs/leetcode/901-1000/\u548c\u53ef\u88abK\u6574\u9664\u7684\u5b50\u6570\u7ec4","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":974,"frontMatter":{},"sidebar":"journal","previous":{"title":"973.\u6700\u63a5\u8fd1\u539f\u70b9\u7684K\u4e2a\u70b9","permalink":"/docs/leetcode/901-1000/\u6700\u63a5\u8fd1\u539f\u70b9\u7684K\u4e2a\u70b9"},"next":{"title":"976.\u4e09\u89d2\u5f62\u7684\u6700\u5927\u5468\u957f","permalink":"/docs/leetcode/901-1000/\u4e09\u89d2\u5f62\u7684\u6700\u5927\u5468\u957f"}}');var s=t(86070),c=t(31503);const o={},i="974.\u548c\u53ef\u88abK\u6574\u9664\u7684\u5b50\u6570\u7ec4",l={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"974\u548c\u53ef\u88abk\u6574\u9664\u7684\u5b50\u6570\u7ec4",children:"974.\u548c\u53ef\u88abK\u6574\u9664\u7684\u5b50\u6570\u7ec4"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/subarray-sums-divisible-by-k",children:"974.\u548c\u53ef\u88abK\u6574\u9664\u7684\u5b50\u6570\u7ec4"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u524d\u7f00\u548c",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 A\uff0c\u8fd4\u56de\u5176\u4e2d\u5143\u7d20\u4e4b\u548c\u53ef\u88ab K \u6574\u9664\u7684\uff08\u8fde\u7eed\u3001\u975e\u7a7a\uff09\u5b50\u6570\u7ec4\u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-27"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.7MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u4e00\u904d\uff0cO(n)\uff0c\u904d\u5386\u5230\u8be5\u503c\u65f6\u7d2f\u52a0\uff0c\u7136\u540e\u5224\u65ad\u662f\u5426\u80fd\u591f\u6574\u9664\uff0c\u82e5\u4e0d\u80fd\u5219\u5224\u65ad\u6240\u76f8\u5dee\u6570\uff0c\u5b58\u5165\u6570\u7ec4\uff0c\u82e5\u76f8\u5dee\u6570\u5728\u6570\u7ec4\u4e2d\u4e0d\u4e3a 1 \u5219\u7d2f\u52a0\u6570\u91cf\uff0c\u603b\u601d\u60f3\uff1a\u524d\u9762 i \u548c\u4e0e\u524d\u9762 j \u548c\u4f59\u6570\u76f8\u540c\uff0c\u76f8\u51cf\u5fc5\u53ef\u88ab\u6574\u9664\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"var subarraysDivByK = function (A: number[], K: number): number {\n  const arr: number[] = new Array(K).fill(0);\n  let sum = 0;\n  let count = 0;\n  for (const num of A) {\n    sum += num;\n    if (sum % K === 0) count++;\n    const y = (K - (sum % K)) % K;\n    if (arr[y] !== 0) count += arr[y];\n    arr[y] += 1;\n  }\n  return count;\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(30758);const s={},c=r.createContext(s);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);