"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[26034],{39719:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=s(86070),r=s(31503);const i={},l="930.\u548c\u76f8\u540c\u7684\u4e8c\u5143\u5b50\u6570\u7ec4",c={id:"leetcode/901-1000/\u548c\u76f8\u540c\u7684\u4e8c\u5143\u5b50\u6570\u7ec4",title:"930.\u548c\u76f8\u540c\u7684\u4e8c\u5143\u5b50\u6570\u7ec4",description:"\u94fe\u63a5\uff1a930.\u548c\u76f8\u540c\u7684\u4e8c\u5143\u5b50\u6570\u7ec4",source:"@site/docs/leetcode/901-1000/930.\u548c\u76f8\u540c\u7684\u4e8c\u5143\u5b50\u6570\u7ec4.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u548c\u76f8\u540c\u7684\u4e8c\u5143\u5b50\u6570\u7ec4",permalink:"/docs/leetcode/901-1000/\u548c\u76f8\u540c\u7684\u4e8c\u5143\u5b50\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:930,frontMatter:{},sidebar:"journal",previous:{title:"929.\u72ec\u7279\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740",permalink:"/docs/leetcode/901-1000/\u72ec\u7279\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740"},next:{title:"931.\u4e0b\u964d\u8def\u5f84\u6700\u5c0f\u548c",permalink:"/docs/leetcode/901-1000/\u4e0b\u964d\u8def\u5f84\u6700\u5c0f\u548c"}},o={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"930\u548c\u76f8\u540c\u7684\u4e8c\u5143\u5b50\u6570\u7ec4",children:"930.\u548c\u76f8\u540c\u7684\u4e8c\u5143\u5b50\u6570\u7ec4"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/binary-subarrays-with-sum",children:"930.\u548c\u76f8\u540c\u7684\u4e8c\u5143\u5b50\u6570\u7ec4"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u524d\u7f00\u548c\u3001\u6ed1\u52a8\u7a97\u53e3",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e8c\u5143\u6570\u7ec4 nums \uff0c\u548c\u4e00\u4e2a\u6574\u6570 goal \uff0c\u8bf7\u4f60\u7edf\u8ba1\u5e76\u8fd4\u56de\u6709\u591a\u5c11\u4e2a\u548c\u4e3a goal \u7684 \u975e\u7a7a \u5b50\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-08"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1800ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46.1MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u4e24\u6b21\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function numSubarraysWithSum(nums: number[], goal: number): number {\n  const len = nums.length;\n  const sums = [0];\n  for (let i = 0; i < len; i++) sums.push(nums[i] + sums[sums.length - 1]);\n  let ans = 0;\n  for (let i = 1; i <= len; i++) {\n    for (let j = 0; j < i; j++) {\n      const num = sums[i] - sums[j];\n      if (num < goal) break;\n      if (num === goal) ans++;\n    }\n  }\n  return ans;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-08"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.6MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u54c8\u5e0c\u8868\u50a8\u5b58\u524d\u7f00\u548c\u8fdb\u884c\u5feb\u901f\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function numSubarraysWithSum(nums: number[], goal: number): number {\n  let ans = 0;\n  let sum = 0;\n  const map = new Map<number, number>();\n  for (const num of nums) {\n    map.set(sum, (map.get(sum) ?? 0) + 1);\n    sum += num;\n    ans += map.get(sum - goal) ?? 0;\n  }\n  return ans;\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},31503:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var t=s(30758);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);