"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[78490],{13030:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"leetcode/301-400/\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a\u542b\u51b7\u51bb\u671f","title":"309.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a\u542b\u51b7\u51bb\u671f","description":"\u94fe\u63a5\uff1a309.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a\u542b\u51b7\u51bb\u671f","source":"@site/docs/leetcode/301-400/309.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a\u542b\u51b7\u51bb\u671f.md","sourceDirName":"leetcode/301-400","slug":"/leetcode/301-400/\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a\u542b\u51b7\u51bb\u671f","permalink":"/docs/leetcode/301-400/\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a\u542b\u51b7\u51bb\u671f","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":309,"frontMatter":{},"sidebar":"journal","previous":{"title":"307.\u533a\u57df\u548c\u68c0\u7d22-\u6570\u7ec4\u53ef\u4fee\u6539","permalink":"/docs/leetcode/301-400/\u533a\u57df\u548c\u68c0\u7d22-\u6570\u7ec4\u53ef\u4fee\u6539"},"next":{"title":"310.\u6700\u5c0f\u9ad8\u5ea6\u6811","permalink":"/docs/leetcode/301-400/\u6700\u5c0f\u9ad8\u5ea6\u6811"}}');var s=i(86070),r=i(31503);const l={},c="309.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a\u542b\u51b7\u51bb\u671f",o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"309\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a\u542b\u51b7\u51bb\u671f",children:"309.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a\u542b\u51b7\u51bb\u671f"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown",children:"309.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a\u542b\u51b7\u51bb\u671f"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u6570\u7ec4\uff0c\u5176\u4e2d\u7b2c i \u4e2a\u5143\u7d20\u4ee3\u8868\u4e86\u7b2c i \u5929\u7684\u80a1\u7968\u4ef7\u683c\uff0c\u8bbe\u8ba1\u4e00\u4e2a\u7b97\u6cd5\u8ba1\u7b97\u51fa\u6700\u5927\u5229\u6da6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-07-11"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a36.5MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6211\u4eec\u76ee\u524d\u6301\u6709\u4e00\u652f\u80a1\u7968\uff0c\u5bf9\u5e94\u7684\u300c\u7d2f\u8ba1\u6700\u5927\u6536\u76ca\u300d\u8bb0\u4e3a f[i][0]f[i][0]\uff1b\u6211\u4eec\u76ee\u524d\u4e0d\u6301\u6709\u4efb\u4f55\u80a1\u7968\uff0c\u5e76\u4e14\u5904\u4e8e\u51b7\u51bb\u671f\u4e2d\uff0c\u5bf9\u5e94\u7684\u300c\u7d2f\u8ba1\u6700\u5927\u6536\u76ca\u300d\u8bb0\u4e3a f[i][1]f[i][1]\uff1b\u6211\u4eec\u76ee\u524d\u4e0d\u6301\u6709\u4efb\u4f55\u80a1\u7968\uff0c\u5e76\u4e14\u4e0d\u5904\u4e8e\u51b7\u51bb\u671f\u4e2d\uff0c\u5bf9\u5e94\u7684\u300c\u7d2f\u8ba1\u6700\u5927\u6536\u76ca\u300d\u8bb0\u4e3a f[i][2]f[i][2]\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function maxProfit(prices: number[]): number {\n  const len = prices.length;\n  if (len === 0) return 0;\n  const dp = new Array(len).fill(0).map(_ => new Array(3).fill(0));\n  dp[0][0] = -prices[0];\n  for (let i = 1; i < len; i++) {\n    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);\n    dp[i][1] = dp[i - 1][0] + prices[i];\n    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);\n  }\n  return Math.max(dp[len - 1][1], dp[len - 1][2]);\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-05"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a3408ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a560.76MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8bb0\u5fc6\u5316\u9012\u5f52\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        n = len(prices)\n        @cache\n        def dfs(idx: int, cooldown: bool, cur: int):\n            if idx == n: return 0\n            res = dfs(idx + 1, False, cur)\n            if not cooldown:\n                if cur != -inf: res = max(res, dfs(idx + 1, True, -inf) + prices[idx] - cur)\n                else: res = max(res, dfs(idx + 1, False, prices[idx]))\n            return res\n        return dfs(0, False, -inf)\n        \n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},31503:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var t=i(30758);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);