"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[17167],{2484:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"leetcode/LCP/LCP61.\u6c14\u6e29\u53d8\u5316\u8d8b\u52bf","title":"LCP61.\u6c14\u6e29\u53d8\u5316\u8d8b\u52bf","description":"\u94fe\u63a5\uff1aLCP61.\u6c14\u6e29\u53d8\u5316\u8d8b\u52bf","source":"@site/docs/leetcode/LCP/LCP61.\u6c14\u6e29\u53d8\u5316\u8d8b\u52bf.md","sourceDirName":"leetcode/LCP","slug":"/leetcode/LCP/LCP61.\u6c14\u6e29\u53d8\u5316\u8d8b\u52bf","permalink":"/docs/leetcode/LCP/LCP61.\u6c14\u6e29\u53d8\u5316\u8d8b\u52bf","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"LCP50.\u5b9d\u77f3\u8865\u7ed9","permalink":"/docs/leetcode/LCP/LCP50.\u5b9d\u77f3\u8865\u7ed9"},"next":{"title":"LCR003.\u6bd4\u7279\u4f4d\u8ba1\u6570","permalink":"/docs/leetcode/LCR/LCR003.\u6bd4\u7279\u4f4d\u8ba1\u6570"}}');var s=r(86070),i=r(31503);const l={},c="LCP61.\u6c14\u6e29\u53d8\u5316\u8d8b\u52bf",o={},a=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"lcp61\u6c14\u6e29\u53d8\u5316\u8d8b\u52bf",children:"LCP61.\u6c14\u6e29\u53d8\u5316\u8d8b\u52bf"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/6CE719",children:"LCP61.\u6c14\u6e29\u53d8\u5316\u8d8b\u52bf"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5df2\u77e5 temperatureA[i] \u548c temperatureB[i] \u5206\u522b\u8868\u793a\u7b2c i \u5929\u4e24\u5730\u533a\u7684\u6c14\u6e29\u3002 \u7ec4\u59d4\u4f1a\u5e0c\u671b\u627e\u5230\u4e00\u6bb5\u5929\u6570\u5c3d\u53ef\u80fd\u591a\uff0c\u4e14\u4e24\u5730\u6c14\u6e29\u53d8\u5316\u8d8b\u52bf\u76f8\u540c\u7684\u65f6\u95f4\u4e3e\u529e\u5609\u5e74\u534e\u6d3b\u52a8\u3002\u8bf7\u5206\u6790\u5e76\u8fd4\u56de\u4e24\u5730\u6c14\u6e29\u53d8\u5316\u8d8b\u52bf\u76f8\u540c\u7684\u6700\u5927\u8fde\u7eed\u5929\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-06-21"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a51ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.46MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"clamp = lambda v, nmin, nmax: min(max(v, nmin), nmax)\nclass Solution:\n    def temperatureTrend(self, temperatureA: List[int], temperatureB: List[int]) -> int:\n        res = cur = 0\n        arrA = [clamp(temperatureA[i + 1] - temperatureA[i], -1, 1) for i in range(len(temperatureA) - 1)]\n        arrB = [clamp(temperatureB[i + 1] - temperatureB[i], -1, 1) for i in range(len(temperatureB) - 1)]\n        for i in range(len(arrA)):\n            if arrA[i] == arrB[i]:\n                cur += 1\n                res = max(res, cur)\n            else:\n                cur = 0\n        return res\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},31503:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var t=r(30758);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);