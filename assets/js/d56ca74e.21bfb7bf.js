"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[95858],{52772:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(86070),r=t(25710);const i={},c="665.\u975e\u9012\u51cf\u6570\u5217",o={id:"leetcode/601-700/\u975e\u9012\u51cf\u6570\u5217",title:"665.\u975e\u9012\u51cf\u6570\u5217",description:"\u94fe\u63a5\uff1a665.\u975e\u9012\u51cf\u6570\u5217",source:"@site/docs/leetcode/601-700/665.\u975e\u9012\u51cf\u6570\u5217.md",sourceDirName:"leetcode/601-700",slug:"/leetcode/601-700/\u975e\u9012\u51cf\u6570\u5217",permalink:"/docs/leetcode/601-700/\u975e\u9012\u51cf\u6570\u5217",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:665,frontMatter:{},sidebar:"journal",previous:{title:"664.\u5947\u602a\u7684\u6253\u5370\u673a",permalink:"/docs/leetcode/601-700/\u5947\u602a\u7684\u6253\u5370\u673a"},next:{title:"667.\u4f18\u7f8e\u7684\u6392\u5217II",permalink:"/docs/leetcode/601-700/\u4f18\u7f8e\u7684\u6392\u5217II"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"665\u975e\u9012\u51cf\u6570\u5217",children:"665.\u975e\u9012\u51cf\u6570\u5217"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/non-decreasing-array",children:"665.\u975e\u9012\u51cf\u6570\u5217"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u957f\u5ea6\u4e3a n \u7684\u6574\u6570\u6570\u7ec4\uff0c\u8bf7\u4f60\u5224\u65ad\u5728 \u6700\u591a \u6539\u53d8 1 \u4e2a\u5143\u7d20\u7684\u60c5\u51b5\u4e0b\uff0c\u8be5\u6570\u7ec4\u80fd\u5426\u53d8\u6210\u4e00\u4e2a\u975e\u9012\u51cf\u6570\u5217\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-07"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a108ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","[\u53c2\u8003\u94fe\u63a5](https://leetcode-cn.com/problems/non-decreasing-array/solution/fei-di-jian-shu-lie-by-leetcode-solution-zdsm/)\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function checkPossibility(nums: number[]): boolean {\n  const n = nums.length;\n  let f = false;\n  for (let i = 0; i < n - 1; i++) {\n    const num = nums[i];\n    const nextNum = nums[i + 1];\n    if (num > nextNum) {\n      if (f) return false;\n      f = true;\n      if (i > 0 && nextNum < nums[i - 1]) nums[i + 1] = num;\n    }\n  }\n  return true;\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(30758);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);