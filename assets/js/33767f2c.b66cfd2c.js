"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[83724],{9445:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var r=t(86070),s=t(25710);const c={},i="2447.\u6700\u5927\u516c\u56e0\u6570\u7b49\u4e8eK\u7684\u5b50\u6570\u7ec4\u6570\u76ee",o={id:"leetcode/2401-2500/\u6700\u5927\u516c\u56e0\u6570\u7b49\u4e8eK\u7684\u5b50\u6570\u7ec4\u6570\u76ee",title:"2447.\u6700\u5927\u516c\u56e0\u6570\u7b49\u4e8eK\u7684\u5b50\u6570\u7ec4\u6570\u76ee",description:"\u94fe\u63a5\uff1a2447.\u6700\u5927\u516c\u56e0\u6570\u7b49\u4e8eK\u7684\u5b50\u6570\u7ec4\u6570\u76ee",source:"@site/docs/leetcode/2401-2500/2447.\u6700\u5927\u516c\u56e0\u6570\u7b49\u4e8eK\u7684\u5b50\u6570\u7ec4\u6570\u76ee.md",sourceDirName:"leetcode/2401-2500",slug:"/leetcode/2401-2500/\u6700\u5927\u516c\u56e0\u6570\u7b49\u4e8eK\u7684\u5b50\u6570\u7ec4\u6570\u76ee",permalink:"/web/site/docs/leetcode/2401-2500/\u6700\u5927\u516c\u56e0\u6570\u7b49\u4e8eK\u7684\u5b50\u6570\u7ec4\u6570\u76ee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2447,frontMatter:{},sidebar:"journal",previous:{title:"2446.\u5224\u65ad\u4e24\u4e2a\u4e8b\u4ef6\u662f\u5426\u5b58\u5728\u51b2\u7a81",permalink:"/web/site/docs/leetcode/2401-2500/\u5224\u65ad\u4e24\u4e2a\u4e8b\u4ef6\u662f\u5426\u5b58\u5728\u51b2\u7a81"},next:{title:"2448.\u4f7f\u6570\u7ec4\u76f8\u7b49\u7684\u6700\u5c0f\u5f00\u9500",permalink:"/web/site/docs/leetcode/2401-2500/\u4f7f\u6570\u7ec4\u76f8\u7b49\u7684\u6700\u5c0f\u5f00\u9500"}},l={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"2447\u6700\u5927\u516c\u56e0\u6570\u7b49\u4e8ek\u7684\u5b50\u6570\u7ec4\u6570\u76ee",children:"2447.\u6700\u5927\u516c\u56e0\u6570\u7b49\u4e8eK\u7684\u5b50\u6570\u7ec4\u6570\u76ee"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/number-of-subarrays-with-gcd-equal-to-k",children:"2447.\u6700\u5927\u516c\u56e0\u6570\u7b49\u4e8eK\u7684\u5b50\u6570\u7ec4\u6570\u76ee"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66\u3001\u6570\u8bba",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6570\u7ec4\u7684\u6700\u5927\u516c\u56e0\u6570 \u662f\u80fd\u6574\u9664\u6570\u7ec4\u4e2d\u6240\u6709\u5143\u7d20\u7684\u6700\u5927\u6574\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-23"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.4MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","gcd \u540e\u66b4\u529b\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function gcd(a: number, b: number): number {\n  if (a < b) return gcd(b, a);\n  if (b) return gcd(b, a % b);\n  return a;\n}\nfunction subarrayGCD(nums: number[], k: number): number {\n  let ans = 0;\n  const n = nums.length;\n  for (let i = 0; i < n; i++) {\n    if (nums[i] === k) {\n      ans++;\n    }\n    let num = nums[i];\n    for (let j = i - 1; j >= 0; j--) {\n      num = gcd(nums[j], num);\n      if (num === k) ans++;\n    }\n  }\n  return ans;\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(30758);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);