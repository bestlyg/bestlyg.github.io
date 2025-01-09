"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[66972],{4613:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/801-900/\u5b89\u6392\u5de5\u4f5c\u4ee5\u8fbe\u5230\u6700\u5927\u6536\u76ca","title":"826.\u5b89\u6392\u5de5\u4f5c\u4ee5\u8fbe\u5230\u6700\u5927\u6536\u76ca","description":"\u94fe\u63a5\uff1a826.\u5b89\u6392\u5de5\u4f5c\u4ee5\u8fbe\u5230\u6700\u5927\u6536\u76ca","source":"@site/docs/leetcode/801-900/826.\u5b89\u6392\u5de5\u4f5c\u4ee5\u8fbe\u5230\u6700\u5927\u6536\u76ca.md","sourceDirName":"leetcode/801-900","slug":"/leetcode/801-900/\u5b89\u6392\u5de5\u4f5c\u4ee5\u8fbe\u5230\u6700\u5927\u6536\u76ca","permalink":"/docs/leetcode/801-900/\u5b89\u6392\u5de5\u4f5c\u4ee5\u8fbe\u5230\u6700\u5927\u6536\u76ca","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":826,"frontMatter":{},"sidebar":"journal","previous":{"title":"825.\u9002\u9f84\u7684\u670b\u53cb","permalink":"/docs/leetcode/801-900/\u9002\u9f84\u7684\u670b\u53cb"},"next":{"title":"827.\u6700\u5927\u4eba\u5de5\u5c9b","permalink":"/docs/leetcode/801-900/\u6700\u5927\u4eba\u5de5\u5c9b"}}');var r=t(25105),s=t(8556);const o={},l="826.\u5b89\u6392\u5de5\u4f5c\u4ee5\u8fbe\u5230\u6700\u5927\u6536\u76ca",c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"826\u5b89\u6392\u5de5\u4f5c\u4ee5\u8fbe\u5230\u6700\u5927\u6536\u76ca",children:"826.\u5b89\u6392\u5de5\u4f5c\u4ee5\u8fbe\u5230\u6700\u5927\u6536\u76ca"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/most-profit-assigning-work",children:"826.\u5b89\u6392\u5de5\u4f5c\u4ee5\u8fbe\u5230\u6700\u5927\u6536\u76ca"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u4e8c\u5206\u67e5\u627e\u3001\u6392\u5e8f",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de \u5728\u628a\u5de5\u4eba\u5206\u914d\u5230\u5de5\u4f5c\u5c97\u4f4d\u540e\uff0c\u6211\u4eec\u6240\u80fd\u83b7\u5f97\u7684\u6700\u5927\u5229\u6da6 \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-05-17"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a75ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a18.77MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u83b7\u53d6\u5f53\u524d\u96be\u5ea6\u4e0b\u6700\u5927\u7684\u6536\u76ca\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def maxProfitAssignment(self, difficulty: List[int], profit: List[int], worker: List[int]) -> int:\n        diff_list = sorted([i for i in range(len(difficulty))], key = lambda i: -difficulty[i])\n        res = 0\n        cur_profit = 0\n        for i in sorted([i for i in range(len(worker))], key = lambda i: worker[i]):\n            while diff_list and difficulty[diff_list[-1]] <= worker[i]:\n                cur_profit = max(cur_profit, profit[diff_list.pop()])\n            res += cur_profit\n        return res\n"})})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(58101);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);