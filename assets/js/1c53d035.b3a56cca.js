"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[92359],{20079:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"leetcode/301-400/\u533a\u95f4\u548c\u7684\u4e2a\u6570","title":"327.\u533a\u95f4\u548c\u7684\u4e2a\u6570","description":"\u94fe\u63a5\uff1a327.\u533a\u95f4\u548c\u7684\u4e2a\u6570","source":"@site/docs/leetcode/301-400/327.\u533a\u95f4\u548c\u7684\u4e2a\u6570.md","sourceDirName":"leetcode/301-400","slug":"/leetcode/301-400/\u533a\u95f4\u548c\u7684\u4e2a\u6570","permalink":"/docs/leetcode/301-400/\u533a\u95f4\u548c\u7684\u4e2a\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":327,"frontMatter":{},"sidebar":"journal","previous":{"title":"324.\u6446\u52a8\u6392\u5e8fII","permalink":"/docs/leetcode/301-400/\u6446\u52a8\u6392\u5e8fII"},"next":{"title":"328.\u5947\u5076\u94fe\u8868","permalink":"/docs/leetcode/301-400/\u5947\u5076\u94fe\u8868"}}');var i=t(86070),s=t(31503);const l={},c="327.\u533a\u95f4\u548c\u7684\u4e2a\u6570",o={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"327\u533a\u95f4\u548c\u7684\u4e2a\u6570",children:"327.\u533a\u95f4\u548c\u7684\u4e2a\u6570"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/count-of-range-sum",children:"327.\u533a\u95f4\u548c\u7684\u4e2a\u6570"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u72b6\u6570\u7ec4\u3001\u7ebf\u6bb5\u6811\u3001\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u5206\u6cbb\u3001\u6709\u5e8f\u96c6\u5408\u3001\u5f52\u5e76\u6392\u5e8f",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums\uff0c\u8fd4\u56de\u533a\u95f4\u548c\u5728 [lower, upper] \u4e4b\u95f4\u7684\u4e2a\u6570\uff0c\u5305\u542b lower \u548c upper\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-11-07"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a280ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.4MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u66b4\u529b\u6cd5\u5faa\u73af\u6240\u6709\u6570\uff0c\u6b64\u9898\u6709\u591a\u79cd\u89e3\u6cd5,[\u53c2\u8003\u94fe\u63a5](https://leetcode-cn.com/problems/count-of-range-sum/solution/qu-jian-he-de-ge-shu-by-leetcode-solution/)\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function countRangeSum(nums: number[], lower: number, upper: number): number {\n  const len = nums.length;\n  let c = 0;\n  for (let i = 0; i < len; i++) {\n    let sum = 0;\n    for (let j = i; j < len; j++) {\n      sum += nums[j];\n      if (lower <= sum && sum <= upper) cpp;\n    }\n  }\n  return c;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-14"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a160ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a50.7MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5206\u6cbb\uff0c\u7edf\u8ba1\u4e24\u90e8\u5206\u4e2d\u7684\u7b26\u5408\u7ed3\u679c\u7684\u524d\u7f00\u548c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function countRangeSum(nums: number[], lower: number, upper: number): number {\n  const len = nums.length;\n  if (len === 0) return 0;\n  const prefixSumList = [0];\n  for (let i = 0; i < len; i++) prefixSumList[i + 1] = prefixSumList[i] + nums[i];\n  const count = (left: number, mid: number, right: number) => {\n    let i1 = left,\n      i2 = left,\n      ans = 0;\n    for (let i = mid + 1; i <= right; i++) {\n      const sum = prefixSumList[i];\n      const l = sum - upper;\n      const r = sum - lower;\n      while (i1 <= mid && prefixSumList[i1] < l) i1++;\n      while (i2 <= mid && prefixSumList[i2] <= r) i2++;\n      ans += i2 - i1;\n    }\n    return ans;\n  };\n  const mergeSort = (left: number, right: number): number => {\n    if (left === right) return 0;\n    const mid = (left + right) >> 1;\n    const ans = mergeSort(left, mid) + mergeSort(mid + 1, right) + count(left, mid, right);\n    const temp = prefixSumList.slice(left, mid + 1);\n    let p1 = 0,\n      end1 = mid - left,\n      p2 = mid + 1,\n      i = left;\n    while (p1 <= end1) {\n      if (p2 > right || temp[p1] <= prefixSumList[p2]) prefixSumList[i++] = temp[p1++];\n      else prefixSumList[i++] = prefixSumList[p2++];\n    }\n    return ans;\n  };\n  return mergeSort(0, len);\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var r=t(30758);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);