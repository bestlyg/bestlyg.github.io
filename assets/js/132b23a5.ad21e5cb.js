"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[79716],{29320:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var s=t(86070),r=t(31503);const c={},l="628.\u4e09\u4e2a\u6570\u7684\u6700\u5927\u4e58\u79ef",i={id:"leetcode/601-700/\u4e09\u4e2a\u6570\u7684\u6700\u5927\u4e58\u79ef",title:"628.\u4e09\u4e2a\u6570\u7684\u6700\u5927\u4e58\u79ef",description:"\u94fe\u63a5\uff1a628.\u4e09\u4e2a\u6570\u7684\u6700\u5927\u4e58\u79ef",source:"@site/docs/leetcode/601-700/628.\u4e09\u4e2a\u6570\u7684\u6700\u5927\u4e58\u79ef.md",sourceDirName:"leetcode/601-700",slug:"/leetcode/601-700/\u4e09\u4e2a\u6570\u7684\u6700\u5927\u4e58\u79ef",permalink:"/docs/leetcode/601-700/\u4e09\u4e2a\u6570\u7684\u6700\u5927\u4e58\u79ef",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:628,frontMatter:{},sidebar:"journal",previous:{title:"623.\u5728\u4e8c\u53c9\u6811\u4e2d\u589e\u52a0\u4e00\u884c",permalink:"/docs/leetcode/601-700/\u5728\u4e8c\u53c9\u6811\u4e2d\u589e\u52a0\u4e00\u884c"},next:{title:"629.K\u4e2a\u9006\u5e8f\u5bf9\u6570\u7ec4",permalink:"/docs/leetcode/601-700/K\u4e2a\u9006\u5e8f\u5bf9\u6570\u7ec4"}},o={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"628\u4e09\u4e2a\u6570\u7684\u6700\u5927\u4e58\u79ef",children:"628.\u4e09\u4e2a\u6570\u7684\u6700\u5927\u4e58\u79ef"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-product-of-three-numbers",children:"628.\u4e09\u4e2a\u6570\u7684\u6700\u5927\u4e58\u79ef"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66\u3001\u6392\u5e8f",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6574\u578b\u6570\u7ec4\uff0c\u5728\u6570\u7ec4\u4e2d\u627e\u51fa\u7531\u4e09\u4e2a\u6570\u7ec4\u6210\u7684\u6700\u5927\u4e58\u79ef\uff0c\u5e76\u8f93\u51fa\u8fd9\u4e2a\u4e58\u79ef\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-01-20"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a148ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8ba1\u7b97\u6700\u5927\u4e09\u4e2a\u6570\uff0c\u8fdb\u884c\u7279\u6b8a\u503c\uff0c\u6709\u4e24\u4e2a\u8d1f\u6570\u7684\u6bd4\u8f83\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function maximumProduct(nums: number[]): number {\n  nums.sort((a, b) => a - b);\n  const len = nums.length;\n  const compute = (arr: number[]) => arr.reduce((total, cur) => total * cur, 1);\n  const maxNum = compute(nums.slice(-3));\n  return nums[0] < 0 && nums[1] < 0 && nums[len - 1] > 0\n    ? Math.max(compute([nums[0], nums[1], nums[len - 1]]), maxNum)\n    : maxNum;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-01-20"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a152ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43.2MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f18\u5316\u9898\u89e3 1\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function maximumProduct(nums: number[]): number {\n  nums.sort((a, b) => a - b);\n  const len = nums.length;\n  return Math.max(nums[0] * nums[1] * nums[len - 1], nums[len - 1] * nums[len - 2] * nums[len - 3]);\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(30758);const r={},c=s.createContext(r);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);