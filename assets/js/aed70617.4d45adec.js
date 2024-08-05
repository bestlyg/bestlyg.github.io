"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[33880],{30389:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=i(86070),t=i(25710);const s={},l="188.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aIV",c={id:"leetcode/101-200/\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aIV",title:"188.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aIV",description:"\u94fe\u63a5\uff1a188.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aIV",source:"@site/docs/leetcode/101-200/188.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aIV.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aIV",permalink:"/web/site/docs/leetcode/101-200/\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aIV",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:188,frontMatter:{},sidebar:"journal",previous:{title:"187.\u91cd\u590d\u7684DNA\u5e8f\u5217",permalink:"/web/site/docs/leetcode/101-200/\u91cd\u590d\u7684DNA\u5e8f\u5217"},next:{title:"189.\u8f6e\u8f6c\u6570\u7ec4",permalink:"/web/site/docs/leetcode/101-200/\u8f6e\u8f6c\u6570\u7ec4"}},o={},p=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"188\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aiv",children:"188.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aIV"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv",children:"188.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aIV"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bbe\u8ba1\u4e00\u4e2a\u7b97\u6cd5\u6765\u8ba1\u7b97\u4f60\u6240\u80fd\u83b7\u53d6\u7684\u6700\u5927\u5229\u6da6\u3002\u4f60\u6700\u591a\u53ef\u4ee5\u5b8c\u6210 k \u7b14\u4ea4\u6613\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4f60\u6700\u591a\u53ef\u4ee5\u4e70 k \u6b21\uff0c\u5356 k \u6b21\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-12-28"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a120ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.6MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function maxProfit(k: number, prices: number[]): number {\n    const len = prices.length;\n    if (len === 0) return 0;\n    k = Math.min(~~(len / 2), k);\n    const buy = new Array(len).fill(0).map(() => new Array(k + 1).fill(0));\n    const sell = new Array(len).fill(0).map(() => new Array(k + 1).fill(0));\n    [buy[0][0], sell[0][0]] = [-prices[0], 0];\n    for (let i = 1; i <= k; ++i) buy[0][i] = sell[0][i] = -Number.MAX_VALUE;\n    for (let i = 1; i < len; ++i) {\n      const price = prices[i];\n      const prevBuy = buy[i - 1];\n      const prevSell = sell[i - 1];\n      buy[i][0] = Math.max(prevBuy[0], prevSell[0] - price);\n      for (let j = 1; j <= k; ++j) {\n        buy[i][j] = Math.max(prevBuy[j], prevSell[j] - price);\n        sell[i][j] = Math.max(prevSell[j], prevBuy[j - 1] + price);\n      }\n    }\n    return Math.max(...sell[len - 1]);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-04"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a256ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a31.78MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i][j][k]\u8868\u793ai\u5929j\u7b14\u624b\u4e0a\u6709\u65e0\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def maxProfit(self, k: int, prices: List[int]) -> int:\n        n = len(prices)\n        # [i][j][k] i\u5929j\u7b14\u624b\u4e0a\u6709\u65e0\n        dp = [[[-inf for _ in range(2)] for _ in range(k + 1)] for _ in range(n + 1)]\n        nums = [[-inf for _ in range(2)] for _ in range(k + 1)]\n        res = dp[0][0][0] = dp[0][0][1] = nums[0][0] = 0\n        for i in range(0, n):\n            dp[i][0][0] = 0\n            dp[i][0][1] = -prices[i]\n            for j in range(1, k + 1):\n                dp[i][j][0] = nums[j - 1][1] + prices[i]\n                dp[i][j][1] = nums[j][0] - prices[i]\n                res = max(res, dp[i][j][0])\n            for j in range(0, k + 1):\n                nums[j][0] = max(nums[j][0], dp[i][j][0])\n                nums[j][1] = max(nums[j][1], dp[i][j][1])\n        return res\n\n"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var r=i(30758);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);