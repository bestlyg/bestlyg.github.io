"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[16942],{97600:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=r(86070),i=r(25710);const s={},l="204.\u8ba1\u6570\u8d28\u6570",c={id:"leetcode/201-300/\u8ba1\u6570\u8d28\u6570",title:"204.\u8ba1\u6570\u8d28\u6570",description:"\u94fe\u63a5\uff1a204.\u8ba1\u6570\u8d28\u6570",source:"@site/docs/leetcode/201-300/204.\u8ba1\u6570\u8d28\u6570.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u8ba1\u6570\u8d28\u6570",permalink:"/docs/leetcode/201-300/\u8ba1\u6570\u8d28\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:204,frontMatter:{},sidebar:"journal",previous:{title:"203.\u79fb\u9664\u94fe\u8868\u5143\u7d20",permalink:"/docs/leetcode/201-300/\u79fb\u9664\u94fe\u8868\u5143\u7d20"},next:{title:"205.\u540c\u6784\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/201-300/\u540c\u6784\u5b57\u7b26\u4e32"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"204\u8ba1\u6570\u8d28\u6570",children:"204.\u8ba1\u6570\u8d28\u6570"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/count-primes",children:"204.\u8ba1\u6570\u8d28\u6570"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66\u3001\u679a\u4e3e\u3001\u6570\u8bba",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7edf\u8ba1\u6240\u6709\u5c0f\u4e8e\u975e\u8d1f\u6574\u6570 n \u7684\u8d28\u6570\u7684\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-12-03"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a136ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a52.1MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u57c3\u6c0f\u7b5b\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function countPrimes(n: number): number {\n  const isPrime = new Array(n).fill(1);\n  let ans = 0;\n  for (let i = 2; i < n; ++i) {\n    if (isPrime[i]) {\n      ans += 1;\n      for (let j = i * i; j < n; j += i) {\n        isPrime[j] = 0;\n      }\n    }\n  }\n  return ans;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-20"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a256ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a109.5MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5206\u522b\u7edf\u8ba1\u6bcf\u4e2a\u6570\u7684\u500d\u6570\u5feb\u901f\u6807\u8bb0\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function countPrimes(n: number): number {\n  const arr: boolean[] = new Array(n).fill(true);\n  arr[0] = arr[1] = false;\n  for (let i = 2; i <= n - 1; i++) {\n    if (arr[i]) for (let num = 2; num * i < n; num++) arr[num * i] = false;\n  }\n  return arr.filter(Boolean).length;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},25710:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var t=r(30758);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);