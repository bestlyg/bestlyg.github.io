"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[68310],{48134:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var t=r(86070),i=r(25710);const s={},l="1438.\u7edd\u5bf9\u5dee\u4e0d\u8d85\u8fc7\u9650\u5236\u7684\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4",c={id:"leetcode/1401-1500/\u7edd\u5bf9\u5dee\u4e0d\u8d85\u8fc7\u9650\u5236\u7684\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4",title:"1438.\u7edd\u5bf9\u5dee\u4e0d\u8d85\u8fc7\u9650\u5236\u7684\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4",description:"\u94fe\u63a5\uff1a1438.\u7edd\u5bf9\u5dee\u4e0d\u8d85\u8fc7\u9650\u5236\u7684\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4",source:"@site/docs/leetcode/1401-1500/1438.\u7edd\u5bf9\u5dee\u4e0d\u8d85\u8fc7\u9650\u5236\u7684\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4.md",sourceDirName:"leetcode/1401-1500",slug:"/leetcode/1401-1500/\u7edd\u5bf9\u5dee\u4e0d\u8d85\u8fc7\u9650\u5236\u7684\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4",permalink:"/docs/leetcode/1401-1500/\u7edd\u5bf9\u5dee\u4e0d\u8d85\u8fc7\u9650\u5236\u7684\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1438,frontMatter:{},sidebar:"journal",previous:{title:"1436.\u65c5\u884c\u7ec8\u70b9\u7ad9",permalink:"/docs/leetcode/1401-1500/\u65c5\u884c\u7ec8\u70b9\u7ad9"},next:{title:"1439.\u6709\u5e8f\u77e9\u9635\u4e2d\u7684\u7b2ck\u4e2a\u6700\u5c0f\u6570\u7ec4\u548c",permalink:"/docs/leetcode/1401-1500/\u6709\u5e8f\u77e9\u9635\u4e2d\u7684\u7b2ck\u4e2a\u6700\u5c0f\u6570\u7ec4\u548c"}},o={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function m(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"1438\u7edd\u5bf9\u5dee\u4e0d\u8d85\u8fc7\u9650\u5236\u7684\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4",children:"1438.\u7edd\u5bf9\u5dee\u4e0d\u8d85\u8fc7\u9650\u5236\u7684\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit",children:"1438.\u7edd\u5bf9\u5dee\u4e0d\u8d85\u8fc7\u9650\u5236\u7684\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u961f\u5217\u3001\u6570\u7ec4\u3001\u6709\u5e8f\u96c6\u5408\u3001\u6ed1\u52a8\u7a97\u53e3\u3001\u5355\u8c03\u961f\u5217\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \uff0c\u548c\u4e00\u4e2a\u8868\u793a\u9650\u5236\u7684\u6574\u6570 limit\uff0c\u8bf7\u4f60\u8fd4\u56de\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4\u7684\u957f\u5ea6\uff0c\u8be5\u5b50\u6570\u7ec4\u4e2d\u7684\u4efb\u610f\u4e24\u4e2a\u5143\u7d20\u4e4b\u95f4\u7684\u7edd\u5bf9\u5dee\u5fc5\u987b\u5c0f\u4e8e\u6216\u8005\u7b49\u4e8e limit \u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-21"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a208ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a61.8MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6ed1\u52a8\u7a97\u53e3,\u8bb0\u5f55\u6700\u503c\u8fdb\u884c\u6bd4\u8f83\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function longestSubarray(nums: number[], limit: number): number {\n  const zero = nums[0];\n  let l = 0;\n  let r = 0;\n  let max = zero;\n  let min = zero;\n  let win: Record<number, number> = { [zero]: 1 };\n  let ans = 1;\n  let sortArr = [zero];\n  const len = nums.length;\n  while (++r < len) {\n    const num = nums[r];\n    const value = win[num];\n    win[num] = 1 + (value ?? 0);\n    if (!value) {\n      if (num > max) sortArr.push((max = num));\n      else if (num < min) sortArr.unshift((min = num));\n      else {\n        for (let i = 0, l = sortArr.length; i < l; i++) {\n          if (sortArr[i] > num) {\n            sortArr.splice(i, 0, num);\n            break;\n          }\n        }\n      }\n      while (l < r && max - min > limit) {\n        const prevNum = nums[l++];\n        const count = win[prevNum];\n        win[prevNum] = count - 1;\n        if (count === 1) {\n          if (prevNum === max) max = sortArr[sortArr.length - 2];\n          else if (prevNum === min) min = sortArr[1];\n          for (let i = 0, l = sortArr.length; i < l; i++) {\n            if (sortArr[i] === prevNum) {\n              sortArr.splice(i, 1);\n              break;\n            }\n          }\n        }\n      }\n    }\n    ans = Math.max(ans, r - l + 1);\n  }\n  return ans;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-21"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a2712ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a65.9MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u6bcf\u4e2a\u957f\u5ea6\uff0c\u5229\u7528\u5355\u8c03\u6808\u7ef4\u62a4\u6ed1\u52a8\u7a97\u53e3\u4e2d\u7684\u6700\u503c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function longestSubarray(nums: number[], limit: number): number {\n  const n = nums.length;\n  return search();\n  function search(l = 0, r = nums.length): number {\n    if (l === r) return l;\n    const mid = (l + r + 1) >> 1;\n    if (check(mid)) l = mid;\n    else r = mid - 1;\n    return search(l, r);\n  }\n  function check(len: number): boolean {\n    const qMax: number[] = [];\n    const qMin: number[] = [];\n    for (let i = 0; i < n; i++) {\n      const num = nums[i];\n      while (qMax.length && nums[qMax[qMax.length - 1]] < num) qMax.pop();\n      while (qMin.length && nums[qMin[qMin.length - 1]] > num) qMin.pop();\n      qMax.push(i);\n      qMin.push(i);\n      if (i + 1 < len) continue;\n      if (i - qMax[0] === len) qMax.shift();\n      if (i - qMin[0] === len) qMin.shift();\n      if (nums[qMax[0]] - nums[qMin[0]] <= limit) return true;\n    }\n    return false;\n  }\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(m,{...n})}):m(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>c});var t=r(30758);const i={},s=t.createContext(i);function l(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);