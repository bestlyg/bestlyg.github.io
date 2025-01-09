"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[18750],{36850:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"leetcode/501-600/\u96f6\u94b1\u5151\u6362II","title":"518.\u96f6\u94b1\u5151\u6362II","description":"\u94fe\u63a5\uff1a518.\u96f6\u94b1\u5151\u6362II","source":"@site/docs/leetcode/501-600/518.\u96f6\u94b1\u5151\u6362II.md","sourceDirName":"leetcode/501-600","slug":"/leetcode/501-600/\u96f6\u94b1\u5151\u6362II","permalink":"/docs/leetcode/501-600/\u96f6\u94b1\u5151\u6362II","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":518,"frontMatter":{},"sidebar":"journal","previous":{"title":"517.\u8d85\u7ea7\u6d17\u8863\u673a","permalink":"/docs/leetcode/501-600/\u8d85\u7ea7\u6d17\u8863\u673a"},"next":{"title":"519.\u968f\u673a\u7ffb\u8f6c\u77e9\u9635","permalink":"/docs/leetcode/501-600/\u968f\u673a\u7ffb\u8f6c\u77e9\u9635"}}');var c=i(25105),s=i(8556);const r={},o="518.\u96f6\u94b1\u5151\u6362II",l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - javascript",id:"\u9898\u89e3-2---javascript",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"518\u96f6\u94b1\u5151\u6362ii",children:"518.\u96f6\u94b1\u5151\u6362II"})}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,c.jsx)(e.a,{href:"https://leetcode.cn/problems/coin-change-ii",children:"518.\u96f6\u94b1\u5151\u6362II"}),(0,c.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,c.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,c.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e0d\u540c\u9762\u989d\u7684\u786c\u5e01\u548c\u4e00\u4e2a\u603b\u91d1\u989d\u3002\u5199\u51fa\u51fd\u6570\u6765\u8ba1\u7b97\u53ef\u4ee5\u51d1\u6210\u603b\u91d1\u989d\u7684\u786c\u5e01\u7ec4\u5408\u6570\u3002\u5047\u8bbe\u6bcf\u4e00\u79cd\u9762\u989d\u7684\u786c\u5e01\u6709\u65e0\u9650\u4e2a\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-06-10"}),"\n",(0,c.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,c.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.8MB"}),"\n",(0,c.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,c.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8ba1\u7b97\u6bcf\u79cd\u786c\u5e01\u7684\u53ef\u80fd\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-typescript",children:"function change(amount: number, coins: number[]): number {\n  const dp = new Array(amount + 1).fill(0);\n  dp[0] = 1;\n  for (const coin of coins) {\n    for (let i = 1; i <= amount; i++) {\n      if (i >= coin) {\n        dp[i] += dp[i - coin];\n      }\n    }\n  }\n  return dp[amount];\n}\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u9898\u89e3-2---javascript",children:"\u9898\u89e3 2 - javascript"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-13"}),"\n",(0,c.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a100ms"}),"\n",(0,c.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.9MB"}),"\n",(0,c.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,c.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"function change(amount: number, coins: number[]): number {\n  coins.sort((a, b) => a - b);\n  const dp = new Array(amount + 1).fill(0);\n  dp[0] = 1;\n  for (const coin of coins) {\n    for (let i = 1; i <= amount; i++) {\n      if (i >= coin) dp[i] += dp[i - coin];\n    }\n  }\n  return dp[amount];\n}\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-03-25"}),"\n",(0,c.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a81ms"}),"\n",(0,c.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.5MB"}),"\n",(0,c.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,c.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp\u8bb0\u5f55\u5f53\u524d\u91d1\u989d\u4e0b\u7684\u80fd\u5151\u6362\u7684\u65b9\u5f0f\u6570\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def change(self, amount: int, coins: List[int]) -> int:\n        dp = [0] * (amount + 1)\n        dp[0] = 1\n        for coin in coins:\n            for cur in range(coin, amount + 1):\n                dp[cur] += dp[cur - coin]\n        return dp[amount]\n"})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(a,{...n})}):a(n)}},8556:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>o});var t=i(58101);const c={},s=t.createContext(c);function r(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);