"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[12900],{15527:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=t(86070),r=t(25710);const i={},c="134.\u52a0\u6cb9\u7ad9",l={id:"leetcode/101-200/\u52a0\u6cb9\u7ad9",title:"134.\u52a0\u6cb9\u7ad9",description:"\u94fe\u63a5\uff1a134.\u52a0\u6cb9\u7ad9",source:"@site/docs/leetcode/101-200/134.\u52a0\u6cb9\u7ad9.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u52a0\u6cb9\u7ad9",permalink:"/docs/leetcode/101-200/\u52a0\u6cb9\u7ad9",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:134,frontMatter:{},sidebar:"journal",previous:{title:"133.\u514b\u9686\u56fe",permalink:"/docs/leetcode/101-200/\u514b\u9686\u56fe"},next:{title:"135.\u5206\u53d1\u7cd6\u679c",permalink:"/docs/leetcode/101-200/\u5206\u53d1\u7cd6\u679c"}},o={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"134\u52a0\u6cb9\u7ad9",children:"134.\u52a0\u6cb9\u7ad9"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/gas-station",children:"134.\u52a0\u6cb9\u7ad9"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5728\u4e00\u6761\u73af\u8def\u4e0a\u6709 \xa0N\xa0 \u4e2a\u52a0\u6cb9\u7ad9\uff0c\u5176\u4e2d\u7b2c \xa0i\xa0 \u4e2a\u52a0\u6cb9\u7ad9\u6709\u6c7d\u6cb9 \xa0gas[i]\xa0 \u5347\u3002\u4f60\u6709\u4e00\u8f86\u6cb9\u7bb1\u5bb9\u91cf\u65e0\u9650\u7684\u7684\u6c7d\u8f66\uff0c\u4ece\u7b2c i \u4e2a\u52a0\u6cb9\u7ad9\u5f00\u5f80\u7b2c i+1\xa0 \u4e2a\u52a0\u6cb9\u7ad9\u9700\u8981\u6d88\u8017\u6c7d\u6cb9 \xa0cost[i]\xa0 \u5347\u3002\u4f60\u4ece\u5176\u4e2d\u7684\u4e00\u4e2a\u52a0\u6cb9\u7ad9\u51fa\u53d1\uff0c\u5f00\u59cb\u65f6\u6cb9\u7bb1\u4e3a\u7a7a\u3002\u5982\u679c\u4f60\u53ef\u4ee5\u7ed5\u73af\u8def\u884c\u9a76\u4e00\u5468\uff0c\u5219\u8fd4\u56de\u51fa\u53d1\u65f6\u52a0\u6cb9\u7ad9\u7684\u7f16\u53f7\uff0c\u5426\u5219\u8fd4\u56de -1\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-11-18"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a272ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9009\u53d6\u9996\u70b9\u8fdb\u884c\u904d\u5386\u8ba1\u7b97\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function canCompleteCircuit(gas: number[], cost: number[]): number {\n  const len = gas.length;\n  const starts: number[] = [];\n  for (let i = 0; i < len; i++) {\n    gas[i] >= cost[i] && starts.push(i);\n  }\n  for (const start of starts) {\n    let arg = gas[start] - cost[start];\n    let i = (start + 1) % len;\n    while (i !== start) {\n      arg += gas[i] - cost[i];\n      if (arg < 0) break;\n      i = (i + 1) % len;\n    }\n    if (i === start) return i;\n  }\n  return -1;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-10-06"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a95ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a22.05MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u4e0b\u6807\u8fdb\u884c\u5c1d\u8bd5\uff0c\u5982\u679c\u5c1d\u8bd5\u5931\u8d25\u5219\u4ece\u4e0b\u4e00\u4e2a\u5931\u8d25\u70b9\u8fdb\u884c\u5c1d\u8bd5\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:\n        def run(start: int) -> Tuple[int, int]:\n            i = start\n            cur = gas[start]\n            for _ in range(n):\n                cur -= cost[i]\n                if cur < 0: return (-1, (i + 1) % n)\n                i = (i + 1) % n\n                cur += gas[i]\n            return (start, i)\n        n = len(gas)\n        start = 0\n        while True:\n            res, next = run(start)\n            if res != -1: return res\n            if next <= start: return -1\n            start = next\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var s=t(30758);const r={},i=s.createContext(r);function c(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);