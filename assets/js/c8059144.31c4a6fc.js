"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[87813],{54923:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/501-600/\u4e0d\u542b\u8fde\u7eed1\u7684\u975e\u8d1f\u6574\u6570","title":"600.\u4e0d\u542b\u8fde\u7eed1\u7684\u975e\u8d1f\u6574\u6570","description":"\u94fe\u63a5\uff1a600.\u4e0d\u542b\u8fde\u7eed1\u7684\u975e\u8d1f\u6574\u6570","source":"@site/docs/leetcode/501-600/600.\u4e0d\u542b\u8fde\u7eed1\u7684\u975e\u8d1f\u6574\u6570.md","sourceDirName":"leetcode/501-600","slug":"/leetcode/501-600/\u4e0d\u542b\u8fde\u7eed1\u7684\u975e\u8d1f\u6574\u6570","permalink":"/docs/leetcode/501-600/\u4e0d\u542b\u8fde\u7eed1\u7684\u975e\u8d1f\u6574\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":600,"frontMatter":{},"sidebar":"journal","previous":{"title":"598.\u533a\u95f4\u52a0\u6cd5II","permalink":"/docs/leetcode/501-600/\u533a\u95f4\u52a0\u6cd5II"},"next":{"title":"542.01\u77e9\u9635","permalink":"/docs/leetcode/501-600/542.01\u77e9\u9635"}}');var s=t(86070),i=t(31503);const l={},c="600.\u4e0d\u542b\u8fde\u7eed1\u7684\u975e\u8d1f\u6574\u6570",o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"600\u4e0d\u542b\u8fde\u7eed1\u7684\u975e\u8d1f\u6574\u6570",children:"600.\u4e0d\u542b\u8fde\u7eed1\u7684\u975e\u8d1f\u6574\u6570"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/non-negative-integers-without-consecutive-ones",children:"600.\u4e0d\u542b\u8fde\u7eed1\u7684\u975e\u8d1f\u6574\u6570"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u52a8\u6001\u89c4\u5212",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6b63\u6574\u6570 n\uff0c\u627e\u51fa\u5c0f\u4e8e\u6216\u7b49\u4e8e n \u7684\u975e\u8d1f\u6574\u6570\u4e2d\uff0c\u5176\u4e8c\u8fdb\u5236\u8868\u793a\u4e0d\u5305\u542b \u8fde\u7eed\u7684 1 \u7684\u4e2a\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-11"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.8MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","[\u53c2\u8003\u94fe\u63a5](https://leetcode-cn.com/problems/non-negative-integers-without-consecutive-ones/solution/bu-han-lian-xu-1de-fei-fu-zheng-shu-by-l-9l86/)\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function findIntegers(n: number): number {\n  const dp = new Array(31).fill(0);\n  dp[0] = dp[1] = 1;\n  for (let i = 2; i < 31; ++i) dp[i] = dp[i - 1] + dp[i - 2];\n  let pre = 0;\n  let res = 0;\n  for (let i = 29; i >= 0; --i) {\n    let val = 1 << i;\n    if ((n & val) !== 0) {\n      res += dp[i + 1];\n      if (pre === 1) break;\n      pre = 1;\n    } else pre = 0;\n    if (i === 0) res++;\n  }\n  return res;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-08-05"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a55ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.46MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6570\u4f4ddp\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"N = len(bin(10 ** 9)) - 2\narr = [0] * (N + 1)\narr[0] = arr[1] = 1\ntmp_sum = 1\nfor i in range(2, N + 1):\n    arr[i] = tmp_sum\n    tmp_sum += arr[i - 1]\nclass Solution:\n    def findIntegers(self, num: int) -> int:\n        if num == 0: return 1\n        n = len(bin(num)) - 2\n        res = sum(arr[:n])\n        next_num = num\n        if bin(next_num)[2:4] == '11':\n            next_num = (1 << (n - 1)) + (1 << (n - 2)) - 1\n        return sum(arr[:n]) + self.findIntegers(next_num - (1 << (n - 1)))\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var r=t(30758);const s={},i=r.createContext(s);function l(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);