"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[70933],{63631:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var l=t(86070),i=t(25710);const s={},r="312.\u6233\u6c14\u7403",c={id:"leetcode/301-400/\u6233\u6c14\u7403",title:"312.\u6233\u6c14\u7403",description:"\u94fe\u63a5\uff1a312.\u6233\u6c14\u7403",source:"@site/docs/leetcode/301-400/312.\u6233\u6c14\u7403.md",sourceDirName:"leetcode/301-400",slug:"/leetcode/301-400/\u6233\u6c14\u7403",permalink:"/docs/leetcode/301-400/\u6233\u6c14\u7403",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:312,frontMatter:{},sidebar:"journal",previous:{title:"310.\u6700\u5c0f\u9ad8\u5ea6\u6811",permalink:"/docs/leetcode/301-400/\u6700\u5c0f\u9ad8\u5ea6\u6811"},next:{title:"315.\u8ba1\u7b97\u53f3\u4fa7\u5c0f\u4e8e\u5f53\u524d\u5143\u7d20\u7684\u4e2a\u6570",permalink:"/docs/leetcode/301-400/\u8ba1\u7b97\u53f3\u4fa7\u5c0f\u4e8e\u5f53\u524d\u5143\u7d20\u7684\u4e2a\u6570"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"312\u6233\u6c14\u7403",children:"312.\u6233\u6c14\u7403"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(e.a,{href:"https://leetcode.cn/problems/burst-balloons",children:"312.\u6233\u6c14\u7403"}),(0,l.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,l.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,l.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6709 n \u4e2a\u6c14\u7403\uff0c\u7f16\u53f7\u4e3a 0 \u5230 n-1\uff0c\u6bcf\u4e2a\u6c14\u7403\u4e0a\u90fd\u6807\u6709\u4e00\u4e2a\u6570\u5b57\uff0c\u8fd9\u4e9b\u6570\u5b57\u5b58\u5728\u6570\u7ec4 \xa0nums\xa0 \u4e2d\u3002\u73b0\u5728\u8981\u6c42\u4f60\u6233\u7834\u6240\u6709\u7684\u6c14\u7403\u3002\u5982\u679c\u4f60\u6233\u7834\u6c14\u7403 i \uff0c\u5c31\u53ef\u4ee5\u83b7\u5f97 \xa0nums[left] _ nums[i] _ nums[right]\xa0 \u4e2a\u786c\u5e01\u3002\xa0 \u8fd9\u91cc\u7684 \xa0left\xa0 \u548c \xa0right\xa0 \u4ee3\u8868\u548c \xa0i\xa0 \u76f8\u90bb\u7684\u4e24\u4e2a\u6c14\u7403\u7684\u5e8f\u53f7\u3002\u6ce8\u610f\u5f53\u4f60\u6233\u7834\u4e86\u6c14\u7403 i \u540e\uff0c\u6c14\u7403 \xa0left\xa0 \u548c\u6c14\u7403 \xa0right\xa0 \u5c31\u53d8\u6210\u4e86\u76f8\u90bb\u7684\u6c14\u7403\u3002,\u6c42\u6240\u80fd\u83b7\u5f97\u786c\u5e01\u7684\u6700\u5927\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-07-25"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a124ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i][j] = \u5728 i \u5230 j \u4e2d\u7684\u6700\u5927\u503c\u3002dp[i][j] = dp[i]*dp[k]*dp[j] + dp[i][k] + dp[k][j],k \u4e3a\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:"function maxCoins(nums: number[]): number {\n  const len = nums.length;\n  const val = [1, ...nums, 1];\n  const dp = new Array(len + 2).fill(0).map(_ => new Array(len + 2).fill(-1));\n  return solve(0, len + 1);\n  function solve(left: number, right: number): number {\n    if (left >= right - 1) return 0;\n    if (dp[left][right] !== -1) return dp[left][right];\n    for (let i = left + 1; i < right; i++) {\n      let sum = val[left] * val[i] * val[right];\n      sum += solve(left, i) + solve(i, right);\n      dp[left][right] = Math.max(dp[left][right], sum);\n    }\n    return dp[left][right];\n  }\n}\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-07-25"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.2MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6839\u636e\u9898\u89e3 1 \u6539\u4e3a\u52a8\u6001\u89c4\u5212\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:"function maxCoins(nums: number[]): number {\n  const len = nums.length;\n  const val = [1, ...nums, 1];\n  const dp = new Array(len + 2).fill(0).map(_ => new Array(len + 2).fill(0));\n  for (let i = len - 1; i >= 0; i--) {\n    for (let j = i + 2; j <= len + 1; j++) {\n      for (let k = i + 1; k < j; k++) {\n        const sum = val[i] * val[k] * val[j] + dp[i][k] + dp[k][j];\n        dp[i][j] = Math.max(dp[i][j], sum);\n      }\n    }\n  }\n  return dp[0][len + 1];\n}\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-06-09"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a3651ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a33MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs, \u4ece\u4e0b\u5f80\u4e0a\uff0c\u521a\u5f00\u59cb\u6ca1\u6709\u6c14\u7403\uff0c\u9010\u6e10\u589e\u52a0\u6c14\u7403\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def maxCoins(self, nums: List[int]) -> int:\n        nums = [1] + nums + [1]\n        @cache\n        def dfs(l: int, r: int) -> int:\n            return max((nums[m] * nums[l] * nums[r] + dfs(l, m) + dfs(m, r) for m in range(l + 1, r)), default = 0)\n        return dfs(0, len(nums) - 1)\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var l=t(30758);const i={},s=l.createContext(i);function r(n){const e=l.useContext(s);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);