"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[50208],{28077:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"leetcode/LCR/LCR161.\u8fde\u7eed\u5929\u6570\u7684\u6700\u9ad8\u9500\u552e\u989d","title":"LCR161.\u8fde\u7eed\u5929\u6570\u7684\u6700\u9ad8\u9500\u552e\u989d","description":"\u94fe\u63a5\uff1aLCR161.\u8fde\u7eed\u5929\u6570\u7684\u6700\u9ad8\u9500\u552e\u989d","source":"@site/docs/leetcode/LCR/LCR161.\u8fde\u7eed\u5929\u6570\u7684\u6700\u9ad8\u9500\u552e\u989d.md","sourceDirName":"leetcode/LCR","slug":"/leetcode/LCR/LCR161.\u8fde\u7eed\u5929\u6570\u7684\u6700\u9ad8\u9500\u552e\u989d","permalink":"/docs/leetcode/LCR/LCR161.\u8fde\u7eed\u5929\u6570\u7684\u6700\u9ad8\u9500\u552e\u989d","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"LCR159.\u5e93\u5b58\u7ba1\u7406III","permalink":"/docs/leetcode/LCR/LCR159.\u5e93\u5b58\u7ba1\u7406III"},"next":{"title":"LCR165.\u89e3\u5bc6\u6570\u5b57","permalink":"/docs/leetcode/LCR/LCR165.\u89e3\u5bc6\u6570\u5b57"}}');var i=s(86070),r=s(31503);const l={},c="LCR161.\u8fde\u7eed\u5929\u6570\u7684\u6700\u9ad8\u9500\u552e\u989d",u={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2},{value:"\u9898\u89e3 4 - typescript",id:"\u9898\u89e3-4---typescript",level:2}];function m(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"lcr161\u8fde\u7eed\u5929\u6570\u7684\u6700\u9ad8\u9500\u552e\u989d",children:"LCR161.\u8fde\u7eed\u5929\u6570\u7684\u6700\u9ad8\u9500\u552e\u989d"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof",children:"LCR161.\u8fde\u7eed\u5929\u6570\u7684\u6700\u9ad8\u9500\u552e\u989d"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u5206\u6cbb\u3001\u52a8\u6001\u89c4\u5212",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8f93\u5165\u4e00\u4e2a\u6574\u578b\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u7684\u4e00\u4e2a\u6216\u8fde\u7eed\u591a\u4e2a\u6574\u6570\u7ec4\u6210\u4e00\u4e2a\u5b50\u6570\u7ec4\u3002\u6c42\u6240\u6709\u5b50\u6570\u7ec4\u7684\u548c\u7684\u6700\u5927\u503c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-17"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4620ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u7f00\u548c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function maxSubArray(nums: number[]): number {\n  let num = 0;\n  const len = nums.length;\n  const sums = [0, ...nums.map(v => (num += v))];\n  let ans = -Infinity;\n  for (let i = 0; i < len; i++) {\n    ans = Math.max(ans, nums[i]);\n    const sum = sums[i + 1];\n    for (let j = 0; j < i; j++) {\n      const num = sum - sums[j];\n      ans = Math.max(ans, num);\n    }\n  }\n  return ans;\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-17"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a47.6MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u7f00\u548c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function maxSubArray(nums: number[]): number {\n  let num = 0;\n  const len = nums.length;\n  const sums = [0, ...nums.map(v => (num += v))];\n  let min = 0;\n  let ans = -Infinity;\n  for (let i = 0; i < len; i++) {\n    const sum = sums[i + 1];\n    ans = Math.max(ans, sum - min, nums[i]);\n    min = Math.min(min, sum);\n  }\n  return ans;\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-22"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.6MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53d6\u6700\u5927\u503c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function maxSubArray(nums: number[]): number {\n  let ans = -Infinity;\n  let max = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (max > 0) max += nums[i];\n    else max = nums[i];\n    ans = Math.max(ans, max);\n  }\n  return ans;\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-4---typescript",children:"\u9898\u89e3 4 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-22"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.9MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5355\u8c03\u9012\u589e\u961f\u5217\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function maxSubArray(nums: number[]): number {\n  if (nums.length === 1) return nums[0];\n  const sums = [0];\n  nums.forEach((num, i) => sums.push(sums[i] + num));\n  const queue: number[] = [0];\n  let ans = -Infinity;\n  for (let i = 1; i <= nums.length; i++) {\n    const num = sums[i];\n    ans = Math.max(ans, num - queue[0]);\n    while (queue.length && queue[queue.length - 1] > num) queue.pop();\n    queue.push(num);\n  }\n  return ans;\n}\n"})})]})}function o(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(m,{...n})}):m(n)}},31503:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var t=s(30758);const i={},r=t.createContext(i);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);