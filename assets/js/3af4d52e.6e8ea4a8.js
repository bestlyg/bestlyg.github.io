"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[73267],{75027:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(86070),i=t(25710);const r={},l="283.\u79fb\u52a8\u96f6",c={id:"leetcode/201-300/\u79fb\u52a8\u96f6",title:"283.\u79fb\u52a8\u96f6",description:"\u94fe\u63a5\uff1a283.\u79fb\u52a8\u96f6",source:"@site/docs/leetcode/201-300/283.\u79fb\u52a8\u96f6.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u79fb\u52a8\u96f6",permalink:"/web/site/docs/leetcode/201-300/\u79fb\u52a8\u96f6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:283,frontMatter:{},sidebar:"journal",previous:{title:"282.\u7ed9\u8868\u8fbe\u5f0f\u6dfb\u52a0\u8fd0\u7b97\u7b26",permalink:"/web/site/docs/leetcode/201-300/\u7ed9\u8868\u8fbe\u5f0f\u6dfb\u52a0\u8fd0\u7b97\u7b26"},next:{title:"284.\u7aa5\u89c6\u8fed\u4ee3\u5668",permalink:"/web/site/docs/leetcode/201-300/\u7aa5\u89c6\u8fed\u4ee3\u5668"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"283\u79fb\u52a8\u96f6",children:"283.\u79fb\u52a8\u96f6"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/move-zeroes",children:"283.\u79fb\u52a8\u96f6"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u53cc\u6307\u9488",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6570\u7ec4 nums\uff0c\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\u5c06\u6240\u6709 0 \u79fb\u52a8\u5230\u6570\u7ec4\u7684\u672b\u5c3e\uff0c\u540c\u65f6\u4fdd\u6301\u975e\u96f6\u5143\u7d20\u7684\u76f8\u5bf9\u987a\u5e8f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-11-19"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.7MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u4e0b\u6807\u8fdb\u884c\u5220\u9664\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function moveZeroes(nums: number[]): void {\n  const indexes: number[] = [];\n  for (let i = 0, l = nums.length; i < l; i++) {\n    nums[i] === 0 && indexes.unshift(i);\n  }\n  indexes.forEach(v => nums.splice(v, 1));\n  nums.push(...new Array(indexes.length).fill(0));\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-11-19"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.2MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function moveZeroes(nums: number[]): void {\n  let left = 0;\n  let right = 0;\n  const len = nums.length;\n  const swap = (i1: number, i2: number) => ([nums[i1], nums[i2]] = [nums[i2], nums[i1]]);\n  while (right < len) {\n    if (nums[right] != 0) {\n      swap(left, right);\n      left++;\n    }\n    right++;\n  }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(30758);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);