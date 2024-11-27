"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[92827],{11832:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"leetcode/901-1000/\u6700\u4f4e\u7968\u4ef7","title":"983.\u6700\u4f4e\u7968\u4ef7","description":"\u94fe\u63a5\uff1a983.\u6700\u4f4e\u7968\u4ef7","source":"@site/docs/leetcode/901-1000/983.\u6700\u4f4e\u7968\u4ef7.md","sourceDirName":"leetcode/901-1000","slug":"/leetcode/901-1000/\u6700\u4f4e\u7968\u4ef7","permalink":"/docs/leetcode/901-1000/\u6700\u4f4e\u7968\u4ef7","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":983,"frontMatter":{},"sidebar":"journal","previous":{"title":"981.\u57fa\u4e8e\u65f6\u95f4\u7684\u952e\u503c\u5b58\u50a8","permalink":"/docs/leetcode/901-1000/\u57fa\u4e8e\u65f6\u95f4\u7684\u952e\u503c\u5b58\u50a8"},"next":{"title":"987.\u4e8c\u53c9\u6811\u7684\u5782\u5e8f\u904d\u5386","permalink":"/docs/leetcode/901-1000/\u4e8c\u53c9\u6811\u7684\u5782\u5e8f\u904d\u5386"}}');var a=e(86070),r=e(31503);const i={},c="983.\u6700\u4f4e\u7968\u4ef7",l={},o=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function d(n){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"983\u6700\u4f4e\u7968\u4ef7",children:"983.\u6700\u4f4e\u7968\u4ef7"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,a.jsx)(t.a,{href:"https://leetcode.cn/problems/minimum-cost-for-tickets",children:"983.\u6700\u4f4e\u7968\u4ef7"}),(0,a.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,a.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,a.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5728\u4e00\u4e2a\u706b\u8f66\u65c5\u884c\u5f88\u53d7\u6b22\u8fce\u7684\u56fd\u5ea6\uff0c\u4f60\u63d0\u524d\u4e00\u5e74\u8ba1\u5212\u4e86\u4e00\u4e9b\u706b\u8f66\u65c5\u884c\u3002\u5728\u63a5\u4e0b\u6765\u7684\u4e00\u5e74\u91cc\uff0c\u4f60\u8981\u65c5\u884c\u7684\u65e5\u5b50\u5c06\u4ee5\u4e00\u4e2a\u540d\u4e3a \xa0days\xa0 \u7684\u6570\u7ec4\u7ed9\u51fa\u3002\u6bcf\u4e00\u9879\u662f\u4e00\u4e2a\u4ece \xa01\xa0 \u5230 \xa0365\xa0 \u7684\u6574\u6570\u3002"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-06"}),"\n",(0,a.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a208ms"}),"\n",(0,a.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a38.2MB"}),"\n",(0,a.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,a.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u56de\u6eaf+\u526a\u679d\uff0c\u9012\u5f52\u5224\u65ad\u6bcf\u6b21\u904d\u5386\u7684\u503c\uff0c\u901a\u8fc7 cache \u50a8\u5b58\u8ba1\u7b97\u8fc7\u7684\u503c\u3002"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"/**\n * @param {number[]} days\n * @param {number[]} costs\n * @return {number}\n */\nvar mincostTickets = function (days, costs) {\n  const len = days.length;\n  const costDays = [1, 7, 30];\n  const lastDay = days[len];\n  const cache = {};\n  return getMin(0, 0);\n  function getMin(start, maxDay) {\n    if (cache[format(start, maxDay)]) return cache[format(start, maxDay)];\n    while (start < len && days[start] < maxDay) start++;\n    if (start === len || lastDay <= maxDay) return 0;\n    let minCost = 999999;\n    if (days[start] > maxDay)\n      for (let j = 0; j < 3; j++) {\n        const cost = costs[j];\n        minCost = Math.min(getMin(start + 1, days[start] + costDays[j] - 1) + cost, minCost);\n      }\n    else minCost = getMin(start + 1, maxDay);\n    cache[format(start, maxDay)] = minCost;\n    return minCost;\n  }\n  function format(start, maxDay) {\n    return `${start}-${maxDay}`;\n  }\n};\n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-10-01"}),"\n",(0,a.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a47ms"}),"\n",(0,a.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a18.82MB"}),"\n",(0,a.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,a.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def mincostTickets(self, days: List[int], costs: List[int]) -> int:\n        @cache\n        def walk(idx: int, last: int) -> int:\n            if idx == len(days): return 0\n            day = days[idx]\n            if day <= last: return walk(idx + 1, last)\n            return min(\n                walk(idx + 1, day + 1 - 1)  + costs[0],\n                walk(idx + 1, day + 7 - 1)  + costs[1],\n                walk(idx + 1, day + 30 - 1) + costs[2],\n            )\n        return walk(0, -1)\n"})})]})}function u(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},31503:(n,t,e)=>{e.d(t,{R:()=>i,x:()=>c});var s=e(30758);const a={},r=s.createContext(a);function i(n){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),s.createElement(r.Provider,{value:t},n.children)}}}]);