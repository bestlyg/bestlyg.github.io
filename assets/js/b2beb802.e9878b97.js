"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[24844],{77942:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var t=s(86070),i=s(25710);const r={},c="216.\u7ec4\u5408\u603b\u548cIII",o={id:"leetcode/201-300/\u7ec4\u5408\u603b\u548cIII",title:"216.\u7ec4\u5408\u603b\u548cIII",description:"\u94fe\u63a5\uff1a216.\u7ec4\u5408\u603b\u548cIII",source:"@site/docs/leetcode/201-300/216.\u7ec4\u5408\u603b\u548cIII.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u7ec4\u5408\u603b\u548cIII",permalink:"/docs/leetcode/201-300/\u7ec4\u5408\u603b\u548cIII",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:216,frontMatter:{},sidebar:"journal",previous:{title:"215.\u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20",permalink:"/docs/leetcode/201-300/\u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20"},next:{title:"217.\u5b58\u5728\u91cd\u590d\u5143\u7d20",permalink:"/docs/leetcode/201-300/\u5b58\u5728\u91cd\u590d\u5143\u7d20"}},l={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"216\u7ec4\u5408\u603b\u548ciii",children:"216.\u7ec4\u5408\u603b\u548cIII"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/combination-sum-iii",children:"216.\u7ec4\u5408\u603b\u548cIII"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u56de\u6eaf",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u627e\u51fa\u6240\u6709\u76f8\u52a0\u4e4b\u548c\u4e3a n \u7684 k \u4e2a\u6570\u7684\u7ec4\u5408\u3002\u7ec4\u5408\u4e2d\u53ea\u5141\u8bb8\u542b\u6709 1 - 9 \u7684\u6b63\u6574\u6570\uff0c\u5e76\u4e14\u6bcf\u79cd\u7ec4\u5408\u4e2d\u4e0d\u5b58\u5728\u91cd\u590d\u7684\u6570\u5b57\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-09-11"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a37.7MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u56de\u6eaf\u9012\u5f52\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function combinationSum3(k: number, n: number): number[][] {\n  const ans: number[][] = [];\n  const used: number[] = [];\n  dfs(k, n);\n  return ans;\n  function dfs(count: number, sum: number): void {\n    if (count === 1) {\n      if (sum >= 1 && sum <= 9 && sum > used[used.length - 1]) ans.push([...used, sum]);\n      return;\n    }\n    const max = used[used.length - 1] || 0;\n    for (let i = max + 1; i <= 9; i++) {\n      if (used.includes(i)) continue;\n      used.push(i);\n      dfs(count - 1, sum - i);\n      used.pop();\n    }\n  }\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-04-21"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a42ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.42MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def combinationSum3(self, k: int, n: int) -> List[List[int]]:\n        res = []\n        def dfs(num: int, k: int, n: int, arr: List[int]):\n            if k == 0:\n                if arr and n == 0:\n                    res.append(arr[:])\n            elif n < 0: return\n            elif num == 10: return\n            else:\n                arr.append(num)\n                dfs(num + 1, k - 1, n - num, arr)\n                arr.pop()\n                dfs(num + 1, k, n, arr)\n        dfs(1, k, n, [])\n        return res\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>o});var t=s(30758);const i={},r=t.createContext(i);function c(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);