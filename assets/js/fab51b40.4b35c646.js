"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[77446],{93118:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var s=t(86070),r=t(31503);const c={},i="674.\u6700\u957f\u8fde\u7eed\u9012\u589e\u5e8f\u5217",l={id:"leetcode/601-700/\u6700\u957f\u8fde\u7eed\u9012\u589e\u5e8f\u5217",title:"674.\u6700\u957f\u8fde\u7eed\u9012\u589e\u5e8f\u5217",description:"\u94fe\u63a5\uff1a674.\u6700\u957f\u8fde\u7eed\u9012\u589e\u5e8f\u5217",source:"@site/docs/leetcode/601-700/674.\u6700\u957f\u8fde\u7eed\u9012\u589e\u5e8f\u5217.md",sourceDirName:"leetcode/601-700",slug:"/leetcode/601-700/\u6700\u957f\u8fde\u7eed\u9012\u589e\u5e8f\u5217",permalink:"/docs/leetcode/601-700/\u6700\u957f\u8fde\u7eed\u9012\u589e\u5e8f\u5217",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:674,frontMatter:{},sidebar:"journal",previous:{title:"673.\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570",permalink:"/docs/leetcode/601-700/\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u4e2a\u6570"},next:{title:"675.\u4e3a\u9ad8\u5c14\u592b\u6bd4\u8d5b\u780d\u6811",permalink:"/docs/leetcode/601-700/\u4e3a\u9ad8\u5c14\u592b\u6bd4\u8d5b\u780d\u6811"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"674\u6700\u957f\u8fde\u7eed\u9012\u589e\u5e8f\u5217",children:"674.\u6700\u957f\u8fde\u7eed\u9012\u589e\u5e8f\u5217"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/longest-continuous-increasing-subsequence",children:"674.\u6700\u957f\u8fde\u7eed\u9012\u589e\u5e8f\u5217"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u672a\u7ecf\u6392\u5e8f\u7684\u6574\u6570\u6570\u7ec4\uff0c\u627e\u5230\u6700\u957f\u4e14 \u8fde\u7eed\u9012\u589e\u7684\u5b50\u5e8f\u5217\uff0c\u5e76\u8fd4\u56de\u8be5\u5e8f\u5217\u7684\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-01-24"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.2MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u4e00\u904d\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function findLengthOfLCIS(nums: number[]): number {\n  const len = nums.length;\n  if (len === 0) return 0;\n  const dp = new Array(len).fill(1);\n  let max = 1;\n  for (let i = 1; i < len; i++)\n    nums[i] > nums[i - 1] && (max = Math.max(max, (dp[i] = dp[i - 1] + 1)));\n  return max;\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(30758);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);