"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[18015],{24479:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var r=t(86070),s=t(25710);const l={},i="45.\u8df3\u8dc3\u6e38\u620fII",c={id:"leetcode/1-100/\u8df3\u8dc3\u6e38\u620fII",title:"45.\u8df3\u8dc3\u6e38\u620fII",description:"\u94fe\u63a5\uff1a45.\u8df3\u8dc3\u6e38\u620fII",source:"@site/docs/leetcode/1-100/45.\u8df3\u8dc3\u6e38\u620fII.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u8df3\u8dc3\u6e38\u620fII",permalink:"/docs/leetcode/1-100/\u8df3\u8dc3\u6e38\u620fII",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:45,frontMatter:{},sidebar:"journal",previous:{title:"44.\u901a\u914d\u7b26\u5339\u914d",permalink:"/docs/leetcode/1-100/\u901a\u914d\u7b26\u5339\u914d"},next:{title:"46.\u5168\u6392\u5217",permalink:"/docs/leetcode/1-100/\u5168\u6392\u5217"}},o={},a=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"45\u8df3\u8dc3\u6e38\u620fii",children:"45.\u8df3\u8dc3\u6e38\u620fII"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/jump-game-ii",children:"45.\u8df3\u8dc3\u6e38\u620fII"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u975e\u8d1f\u6574\u6570\u6570\u7ec4\uff0c\u4f60\u6700\u521d\u4f4d\u4e8e\u6570\u7ec4\u7684\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\u3002\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u4ee3\u8868\u4f60\u5728\u8be5\u4f4d\u7f6e\u53ef\u4ee5\u8df3\u8dc3\u7684\u6700\u5927\u957f\u5ea6\u3002\u4f60\u7684\u76ee\u6807\u662f\u4f7f\u7528\u6700\u5c11\u7684\u8df3\u8dc3\u6b21\u6570\u5230\u8fbe\u6570\u7ec4\u7684\u6700\u540e\u4e00\u4e2a\u4f4d\u7f6e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-04"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a36.43MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u901a\u8fc7\u9012\u5f52\u5bf9\u6bcf\u5c42\u5224\u65ad\u540e\u538b\u6808\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'/**\n * @param {number[]} nums\n * @return {number}\n */\nvar jump = function (nums) {\n  const len = nums.length;\n  if (len === 1) return 0;\n  // console.log(len);\n  let maxStep = 1;\n  let maxIndex = nums[0];\n  let tempMaxIndex = 0;\n  const newArr = new Array();\n  newArr[0] = 0;\n  newArr[maxIndex] = 1;\n  for (let i = 1; i < len; i++) {\n    const num = nums[i];\n    // console.log("==");\n    // console.log("i:" + i);\n    // console.log("num:" + num);\n    // console.log("num+i:" + (num + i));\n    if (i > maxIndex) {\n      maxIndex = tempMaxIndex;\n      newArr[maxIndex] = ++maxStep;\n      if (newArr.length >= len) break;\n    }\n    const nextIndex = num + i;\n    if (nextIndex >= tempMaxIndex) {\n      tempMaxIndex = nextIndex;\n    }\n  }\n  // console.log(newArr);\n  let resIndex = len - 1;\n  let res = newArr[resIndex];\n  while (res === undefined) {\n    res = newArr[++resIndex];\n  }\n  return res;\n};\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-21"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6bcf\u6b21\u8df3\u8dc3\uff0c\u83b7\u53d6\u5f53\u524d\u53ef\u8df3\u8dc3\u8303\u56f4\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function jump(nums: number[]): number {\n  const n = nums.length;\n  if (n <= 1) return 0;\n  let curP = 0;\n  let maxP = nums[0];\n  let ans = 1;\n  while (maxP + 1 < n) {\n    let nextMaxP = nums[curP];\n    for (let i = curP + 1; i <= maxP; i++) {\n      nextMaxP = Math.max(nums[i] + i, nextMaxP);\n    }\n    curP = maxP;\n    maxP = nextMaxP;\n    ans++;\n  }\n  return ans;\n}\n"})})]})}function x(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>c});var r=t(30758);const s={},l=r.createContext(s);function i(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);