"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[58289],{27082:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(86070),i=t(25710);const s={},l="377.\u7ec4\u5408\u603b\u548c\u2163",c={id:"leetcode/301-400/\u7ec4\u5408\u603b\u548c\u2163",title:"377.\u7ec4\u5408\u603b\u548c\u2163",description:"\u94fe\u63a5\uff1a377.\u7ec4\u5408\u603b\u548c\u2163",source:"@site/docs/leetcode/301-400/377.\u7ec4\u5408\u603b\u548c\u2163.md",sourceDirName:"leetcode/301-400",slug:"/leetcode/301-400/\u7ec4\u5408\u603b\u548c\u2163",permalink:"/docs/leetcode/301-400/\u7ec4\u5408\u603b\u548c\u2163",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:377,frontMatter:{},sidebar:"journal",previous:{title:"375.\u731c\u6570\u5b57\u5927\u5c0fII",permalink:"/docs/leetcode/301-400/\u731c\u6570\u5b57\u5927\u5c0fII"},next:{title:"378.\u6709\u5e8f\u77e9\u9635\u4e2d\u7b2cK\u5c0f\u7684\u5143\u7d20",permalink:"/docs/leetcode/301-400/\u6709\u5e8f\u77e9\u9635\u4e2d\u7b2cK\u5c0f\u7684\u5143\u7d20"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - javascript",id:"\u9898\u89e3-2---javascript",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2},{value:"\u9898\u89e3 4 - python",id:"\u9898\u89e3-4---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"377\u7ec4\u5408\u603b\u548c\u2173",children:"377.\u7ec4\u5408\u603b\u548c\u2163"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/combination-sum-iv",children:"377.\u7ec4\u5408\u603b\u548c\u2163"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u7531 \u4e0d\u540c \u6574\u6570\u7ec4\u6210\u7684\u6570\u7ec4 nums \uff0c\u548c\u4e00\u4e2a\u76ee\u6807\u6574\u6570 target \u3002\u8bf7\u4f60\u4ece nums \u4e2d\u627e\u51fa\u5e76\u8fd4\u56de\u603b\u548c\u4e3a target \u7684\u5143\u7d20\u7ec4\u5408\u7684\u4e2a\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-24"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function combinationSum4(nums: number[], target: number): number {\n  const dp = new Array(target + 1).fill(0);\n  dp[0] = 1;\n  for (let i = 1; i <= target; i++) {\n    for (const num of nums) {\n      if (i >= num) {\n        dp[i] += dp[i - num];\n      }\n    }\n  }\n  return dp[target];\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---javascript",children:"\u9898\u89e3 2 - javascript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-14"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"function combinationSum4(nums: number[], target: number): number {\n  nums.sort((a, b) => a - b);\n  const dp = new Array(target + 1).fill(0);\n  dp[0] = 1;\n  for (let i = 1; i <= target; i++) {\n    for (const num of nums) {\n      if (i < num) break;\n      dp[i] += dp[i - num];\n    }\n  }\n  return dp[target];\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-04-22"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a44ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.5MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def combinationSum4(self, nums: List[int], target: int) -> int:\n        nums.sort()\n        @cache\n        def dfs(target: int) -> int:\n            if target == 0: return 1\n            res = 0\n            for num in nums:\n                if num > target: break\n                res += dfs(target - num)\n            return res\n        return dfs(target)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-4---python",children:"\u9898\u89e3 4 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-04-23"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a37ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.5MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i]\u8868\u793ai\u4e3atarget\u65f6\u7684\u6700\u5927\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def combinationSum4(self, nums: List[int], target: int) -> int:\n        nums.sort()\n        dp = [0 for _ in range(target + 1)]\n        dp[0] = 1\n        for cur_target in range(1, target + 1):\n            for num in nums:\n                if num > cur_target: break\n                dp[cur_target] += dp[cur_target - num]\n        return dp[target]\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var r=t(30758);const i={},s=r.createContext(i);function l(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);