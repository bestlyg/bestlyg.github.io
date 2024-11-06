"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[16782],{33290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(86070),s=t(31503);const i={},c="523.\u8fde\u7eed\u7684\u5b50\u6570\u7ec4\u548c",l={id:"leetcode/501-600/\u8fde\u7eed\u7684\u5b50\u6570\u7ec4\u548c",title:"523.\u8fde\u7eed\u7684\u5b50\u6570\u7ec4\u548c",description:"\u94fe\u63a5\uff1a523.\u8fde\u7eed\u7684\u5b50\u6570\u7ec4\u548c",source:"@site/docs/leetcode/501-600/523.\u8fde\u7eed\u7684\u5b50\u6570\u7ec4\u548c.md",sourceDirName:"leetcode/501-600",slug:"/leetcode/501-600/\u8fde\u7eed\u7684\u5b50\u6570\u7ec4\u548c",permalink:"/docs/leetcode/501-600/\u8fde\u7eed\u7684\u5b50\u6570\u7ec4\u548c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:523,frontMatter:{},sidebar:"journal",previous:{title:"522.\u6700\u957f\u7279\u6b8a\u5e8f\u5217II",permalink:"/docs/leetcode/501-600/\u6700\u957f\u7279\u6b8a\u5e8f\u5217II"},next:{title:"524.\u901a\u8fc7\u5220\u9664\u5b57\u6bcd\u5339\u914d\u5230\u5b57\u5178\u91cc\u6700\u957f\u5355\u8bcd",permalink:"/docs/leetcode/501-600/\u901a\u8fc7\u5220\u9664\u5b57\u6bcd\u5339\u914d\u5230\u5b57\u5178\u91cc\u6700\u957f\u5355\u8bcd"}},o={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"523\u8fde\u7eed\u7684\u5b50\u6570\u7ec4\u548c",children:"523.\u8fde\u7eed\u7684\u5b50\u6570\u7ec4\u548c"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/continuous-subarray-sum",children:"523.\u8fde\u7eed\u7684\u5b50\u6570\u7ec4\u548c"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u6570\u5b66\u3001\u524d\u7f00\u548c",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \u548c\u4e00\u4e2a\u6574\u6570 k\u3002\u5982\u679c\u5b58\u5728\u4e00\u4e2a\u6574\u6570 n \uff0c\u4ee4\u6574\u6570 x \u7b26\u5408 x = n * k \uff0c\u5219\u79f0 x \u662f k \u7684\u4e00\u4e2a\u500d\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-06-02"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a156ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a53.9MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5f53 prefixSums[q]\u2212prefixSums[p] \u4e3a kk \u7684\u500d\u6570\u65f6\uff0cprefixSums[p] \u548c prefixSums[q] \u9664\u4ee5 k \u7684\u4f59\u6570\u76f8\u540c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function checkSubarraySum(nums: number[], k: number): boolean {\n  const len = nums.length;\n  if (len < 2 || k === 0) return false;\n  const map = new Map<number, number>([[0, -1]]);\n  let num = 0;\n  for (let i = 0; i < len; i++) {\n    num = (num + nums[i]) % k;\n    let prev = map.get(num);\n    if (prev !== undefined) {\n      if (i - prev >= 2) return true;\n    } else map.set(num, i);\n  }\n  return false;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(30758);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);