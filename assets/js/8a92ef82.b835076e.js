"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[44072],{91513:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=t(86070),s=t(31503);const i={},l="416.\u5206\u5272\u7b49\u548c\u5b50\u96c6",c={id:"leetcode/401-500/\u5206\u5272\u7b49\u548c\u5b50\u96c6",title:"416.\u5206\u5272\u7b49\u548c\u5b50\u96c6",description:"\u94fe\u63a5\uff1a416.\u5206\u5272\u7b49\u548c\u5b50\u96c6",source:"@site/docs/leetcode/401-500/416.\u5206\u5272\u7b49\u548c\u5b50\u96c6.md",sourceDirName:"leetcode/401-500",slug:"/leetcode/401-500/\u5206\u5272\u7b49\u548c\u5b50\u96c6",permalink:"/docs/leetcode/401-500/\u5206\u5272\u7b49\u548c\u5b50\u96c6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:416,frontMatter:{},sidebar:"journal",previous:{title:"415.\u5b57\u7b26\u4e32\u76f8\u52a0",permalink:"/docs/leetcode/401-500/\u5b57\u7b26\u4e32\u76f8\u52a0"},next:{title:"417.\u592a\u5e73\u6d0b\u5927\u897f\u6d0b\u6c34\u6d41\u95ee\u9898",permalink:"/docs/leetcode/401-500/\u592a\u5e73\u6d0b\u5927\u897f\u6d0b\u6c34\u6d41\u95ee\u9898"}},u={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"416\u5206\u5272\u7b49\u548c\u5b50\u96c6",children:"416.\u5206\u5272\u7b49\u548c\u5b50\u96c6"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/partition-equal-subset-sum",children:"416.\u5206\u5272\u7b49\u548c\u5b50\u96c6"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u53ea\u5305\u542b\u6b63\u6574\u6570\u7684\u975e\u7a7a\u6570\u7ec4\u3002\u662f\u5426\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u6570\u7ec4\u5206\u5272\u6210\u4e24\u4e2a\u5b50\u96c6\uff0c\u4f7f\u5f97\u4e24\u4e2a\u5b50\u96c6\u7684\u5143\u7d20\u548c\u76f8\u7b49\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-10-11"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a132ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.4MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","[\u53c2\u8003\u94fe\u63a5](https://leetcode-cn.com/problems/partition-equal-subset-sum/solution/fen-ge-deng-he-zi-ji-by-leetcode-solution/)\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function canPartition(nums: number[]): boolean {\n  const len = nums.length;\n  // \u5982\u679c\u53ea\u6709\u4e00\u4e2a\u5143\u7d20\uff0c\u4e0d\u53ef\u80fd\u5e73\u5206\n  if (len < 2) return false;\n  let sum = nums.reduce((total, cur) => total + cur, 0);\n  let maxNum = Math.max(...nums);\n  // \u5982\u679c\u603b\u548c\u662f\u5947\u6570\uff0c\u4e0d\u53ef\u80fd\u5e73\u5206\n  if (sum & 1) return false;\n  const target = sum / 2;\n  // \u5982\u679c\u6709\u6570\u5927\u4e8e\u5e73\u5206\u503c\uff0c\u4e0d\u53ef\u80fd\u8bc4\u5206\n  if (maxNum > target) return false;\n  const dp: boolean[] = new Array(target + 1).fill(false);\n  dp[0] = true;\n  for (const num of nums) {\n    for (let j = target; j >= num; j--) {\n      dp[j] = dp[j] || dp[j - num];\n    }\n  }\n  return dp[target];\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-13"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a228ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a60.5MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function canPartition(nums: number[]): boolean {\n  const n = nums.length;\n  const sum = nums.reduce((total, cur) => total + cur, 0);\n  if (sum % 2 !== 0) return false;\n  const halfSum = sum / 2;\n  const dp: boolean[][] = new Array(n + 1).fill(0).map(_ => new Array(halfSum + 1).fill(false));\n  for (let num = 0; num <= halfSum; num++) dp[0][num] = true;\n  dp[1][nums[0]] = true;\n  for (let i = 2; i <= n; i++) {\n    const num = nums[i - 1];\n    dp[i][0] = dp[i][num] = true;\n    for (let j = 1; j <= halfSum; j++) {\n      dp[i][j] = dp[i - 1][j];\n      if (j < num) continue;\n      dp[i][j] ||= dp[i - 1][j - num];\n    }\n    if (dp[i][halfSum]) return true;\n  }\n  return false;\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-13"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a132ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.4MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u4f18\u5316\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function canPartition(nums: number[]): boolean {\n  const n = nums.length;\n  const sum = nums.reduce((total, cur) => total + cur, 0);\n  if (sum % 2 !== 0) return false;\n  const halfSum = sum / 2;\n  const dp: boolean[][] = new Array(2).fill(0).map(_ => new Array(halfSum + 1).fill(false));\n  dp[1][nums[0]] = true;\n  for (let i = 2; i <= n; i++) {\n    const idx = i % 2;\n    const prevIdx = idx ^ 1;\n    const num = nums[i - 1];\n    dp[idx][0] = dp[idx][num] = true;\n    for (let j = 1; j <= halfSum; j++) {\n      dp[idx][j] = dp[prevIdx][j];\n      if (j >= num) dp[idx][j] ||= dp[prevIdx][j - num];\n    }\n    if (dp[idx][halfSum]) return true;\n  }\n  return false;\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var r=t(30758);const s={},i=r.createContext(s);function l(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);