"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[19913],{38233:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=s(86070),r=s(25710);const i={},l="238.\u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef",c={id:"leetcode/201-300/\u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef",title:"238.\u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef",description:"\u94fe\u63a5\uff1a238.\u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef",source:"@site/docs/leetcode/201-300/238.\u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef",permalink:"/docs/leetcode/201-300/\u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:238,frontMatter:{},sidebar:"journal",previous:{title:"237.\u5220\u9664\u94fe\u8868\u4e2d\u7684\u8282\u70b9",permalink:"/docs/leetcode/201-300/\u5220\u9664\u94fe\u8868\u4e2d\u7684\u8282\u70b9"},next:{title:"239.\u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c",permalink:"/docs/leetcode/201-300/\u6ed1\u52a8\u7a97\u53e3\u6700\u5927\u503c"}},u={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"238\u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef",children:"238.\u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/product-of-array-except-self",children:"238.\u9664\u81ea\u8eab\u4ee5\u5916\u6570\u7ec4\u7684\u4e58\u79ef"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u524d\u7f00\u548c",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u957f\u5ea6\u4e3a \xa0n\xa0 \u7684\u6574\u6570\u6570\u7ec4 \xa0nums\uff0c\u5176\u4e2d \xa0n > 1\uff0c\u8fd4\u56de\u8f93\u51fa\u6570\u7ec4 \xa0output\xa0\uff0c\u5176\u4e2d output[i]\xa0 \u7b49\u4e8e \xa0nums\xa0 \u4e2d\u9664 \xa0nums[i]\xa0 \u4e4b\u5916\u5176\u4f59\u5404\u5143\u7d20\u7684\u4e58\u79ef\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-06-04"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a132ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.7MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u867d\u901a\u8fc7\u4f46\u4f7f\u7528\u4e86\u9664\u6cd5\u4e0d\u7b26\u5408\u9898\u76ee\u8981\u6c42"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function productExceptSelf(nums: number[]): number[] {\n  let zeroIndex = nums.indexOf(0);\n  if (zeroIndex === -1) {\n    let sum = 1;\n    for (const num of nums) sum *= num;\n    return nums.map(v => sum / v);\n  } else if (nums.includes(0, zeroIndex + 1)) {\n    return nums.map(v => 0);\n  } else {\n    let sum = 1;\n    for (const num of nums) sum *= num === 0 ? 1 : num;\n    return nums.map(v => (v === 0 ? sum : 0));\n  }\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-06-04"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a132ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u50a8\u5b58\u5de6\u503c\u4e0e\u53f3\u503c,res[i]=l[i]*r[i]"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function productExceptSelf(nums: number[]): number[] {\n  const len = nums.length;\n  let l: number[] = [];\n  let r: number[] = [];\n  l[0] = 1;\n  for (let i = 1; i < len; i++) l[i] = l[i - 1] * nums[i - 1];\n  r[len - 1] = 1;\n  for (let i = len - 2; i >= 0; i--) r[i] = r[i + 1] * nums[i + 1];\n  return nums.map((_, i) => l[i] * r[i]);\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-06-04"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6839\u636e\u9898\u89e3 2\uff0c\u5229\u7528\u8f93\u51fa\u6570\u7ec4\uff0c\u5148\u5b58\u5165\u5de6\u503c\u518d\u7d2f\u4e58\u53f3\u503c\uff0c\u4f7f\u7a7a\u95f4\u53d8 O(1)"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function productExceptSelf(nums: number[]): number[] {\n  const len = nums.length;\n  let ans: number[] = [1];\n  for (let i = 1; i < len; i++) ans[i] = ans[i - 1] * nums[i - 1];\n  let r = nums[len - 1];\n  for (let i = len - 2; i >= 0; i--) {\n    ans[i] *= r;\n    r *= nums[i];\n  }\n  return ans;\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var t=s(30758);const r={},i=t.createContext(r);function l(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);