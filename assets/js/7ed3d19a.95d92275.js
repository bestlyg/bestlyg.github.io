"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[11327],{62468:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"leetcode/501-600/\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20II","title":"503.\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20II","description":"\u94fe\u63a5\uff1a503.\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20II","source":"@site/docs/leetcode/501-600/503.\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20II.md","sourceDirName":"leetcode/501-600","slug":"/leetcode/501-600/\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20II","permalink":"/docs/leetcode/501-600/\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20II","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":503,"frontMatter":{},"sidebar":"journal","previous":{"title":"502.IPO","permalink":"/docs/leetcode/501-600/IPO"},"next":{"title":"504.\u4e03\u8fdb\u5236\u6570","permalink":"/docs/leetcode/501-600/\u4e03\u8fdb\u5236\u6570"}}');var r=s(25105),i=s(8556);const l={},c="503.\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20II",o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"503\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20ii",children:"503.\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20II"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/next-greater-element-ii",children:"503.\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20II"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6570\u7ec4\u3001\u5355\u8c03\u6808",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5faa\u73af\u6570\u7ec4\uff08\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u4e0b\u4e00\u4e2a\u5143\u7d20\u662f\u6570\u7ec4\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\uff09\uff0c\u8f93\u51fa\u6bcf\u4e2a\u5143\u7d20\u7684\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20\u3002\u6570\u5b57 x \u7684\u4e0b\u4e00\u4e2a\u66f4\u5927\u7684\u5143\u7d20\u662f\u6309\u6570\u7ec4\u904d\u5386\u987a\u5e8f\uff0c\u8fd9\u4e2a\u6570\u5b57\u4e4b\u540e\u7684\u7b2c\u4e00\u4e2a\u6bd4\u5b83\u66f4\u5927\u7684\u6570\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u5e94\u8be5\u5faa\u73af\u5730\u641c\u7d22\u5b83\u7684\u4e0b\u4e00\u4e2a\u66f4\u5927\u7684\u6570\u3002\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u8f93\u51fa -1\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-06"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a576ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.8MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u76f4\u63a5 for \u5faa\u73af\u5224\u65ad\u4e0b\u4e00\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function nextGreaterElements(nums: number[]): number[] {\n  const len = nums.length;\n  const ans: number[] = [];\n  for (let i = 0; i < len; i++) {\n    const num = nums[i];\n    for (let j = i === len - 1 ? 0 : i + 1; ; j = (j + 1) % len) {\n      if (nums[j] > num) {\n        ans[i] = nums[j];\n        break;\n      }\n      if (j === i) {\n        ans[i] = -1;\n        break;\n      }\n    }\n  }\n  return ans;\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-06-24"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a57ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a18.21MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5355\u8c03\u6808\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def nextGreaterElements(self, nums: List[int]) -> List[int]:\n        n = len(nums)\n        arr = [-1] * n\n        s = []\n        def run(need_append):\n            for i in range(n):\n                while s and nums[s[-1]] < nums[i]: arr[s.pop()] = nums[i]\n                if need_append: s.append(i)\n        run(True)\n        run(False)\n        return arr\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-06"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a128ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.5MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u6808\u50a8\u5b58\u4e0b\u6807\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function nextGreaterElements(nums: number[]): number[] {\n  const len = nums.length;\n  const ans = new Array(len).fill(-1);\n  const stack: number[] = [];\n  for (let i = 0, l = len * 2 - 1; i < l; i++) {\n    const num = nums[i % len];\n    while (stack.length && nums[stack[stack.length - 1]] < num) {\n      ans[stack[stack.length - 1]] = num;\n      stack.pop();\n    }\n    stack.push(i % len);\n  }\n  return ans;\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},8556:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var t=s(58101);const r={},i=t.createContext(r);function l(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);