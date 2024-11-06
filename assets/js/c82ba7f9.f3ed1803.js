"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[36549],{19552:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=t(86070),s=t(31503);const r={},c="39.\u7ec4\u5408\u603b\u548c",l={id:"leetcode/1-100/\u7ec4\u5408\u603b\u548c",title:"39.\u7ec4\u5408\u603b\u548c",description:"\u94fe\u63a5\uff1a39.\u7ec4\u5408\u603b\u548c",source:"@site/docs/leetcode/1-100/39.\u7ec4\u5408\u603b\u548c.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u7ec4\u5408\u603b\u548c",permalink:"/docs/leetcode/1-100/\u7ec4\u5408\u603b\u548c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:39,frontMatter:{},sidebar:"journal",previous:{title:"38.\u5916\u89c2\u6570\u5217",permalink:"/docs/leetcode/1-100/\u5916\u89c2\u6570\u5217"},next:{title:"40.\u7ec4\u5408\u603b\u548cII",permalink:"/docs/leetcode/1-100/\u7ec4\u5408\u603b\u548cII"}},d={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"39\u7ec4\u5408\u603b\u548c",children:"39.\u7ec4\u5408\u603b\u548c"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/combination-sum",children:"39.\u7ec4\u5408\u603b\u548c"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u56de\u6eaf",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u65e0\u91cd\u590d\u5143\u7d20\u7684\u6570\u7ec4 candidates \u548c\u4e00\u4e2a\u76ee\u6807\u6570 target \uff0c\u627e\u51fa candidates \u4e2d\u6240\u6709\u53ef\u4ee5\u4f7f\u6570\u5b57\u548c\u4e3a target \u7684\u7ec4\u5408\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-09-09"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.9MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u6570\u7ec4\u9012\u5f52\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function combinationSum(candidates: number[], target: number): number[][] {\n  const len = candidates.length;\n  if (len === 0) return [];\n  else if (len === 1) {\n    const num = candidates[0];\n    return target % num === 0 ? [new Array(target / num).fill(num)] : [];\n  }\n  const ans: number[][] = [];\n  for (let i = 0; i < len; i++) {\n    const num = candidates[i];\n    let sum = 0;\n    let arr = combinationSum([num], target);\n    let count = 0;\n    if (arr.length !== 0) ans.push(...arr);\n    while ((sum += num) < target) {\n      count++;\n      arr = combinationSum(candidates.slice(i + 1), target - sum);\n      arr.length !== 0 && ans.push(...arr.map(v => new Array(count).fill(num).concat(v)));\n    }\n  }\n  return ans;\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-25"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.7MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs+\u526a\u679d\uff0c\u6bcf\u6b21\u904d\u5386\u65f6\uff0c\u53ef\u4ee5\u9009\u5f53\u524d\u503c\u6216\u8005\u4e0b\u4e00\u503c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function combinationSum(candidates: number[], target: number): number[][] {\n  const ans: number[][] = [];\n  dfs();\n  return ans;\n  function dfs(index = 0, value = 0, list: number[] = []) {\n    if (value >= target || index === candidates.length) {\n      value === target && ans.push([...list]);\n      return;\n    }\n    const candy = candidates[index];\n    list.push(candy);\n    dfs(index, value + candy, list);\n    list.pop();\n    dfs(index + 1, value, list);\n  }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-04-20"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a42ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.42MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        res = []\n        n = len(candidates)\n        def dfs(index: int, cur: int, arr: List[int]):\n            if index == n:\n                if cur == target:\n                    res.append(arr[:])\n            elif cur > target:\n                return\n            else:\n                dfs(index + 1, cur, arr)\n                cnt = 1\n                while cur + cnt * candidates[index] <=  target:\n                    dfs(index + 1, cur + cnt * candidates[index], arr + [candidates[index]] * cnt)\n                    cnt += 1\n        dfs(0, 0, [])\n        return res\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var i=t(30758);const s={},r=i.createContext(s);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);