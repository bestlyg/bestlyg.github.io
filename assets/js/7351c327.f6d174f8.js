"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[66620],{57428:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"leetcode/2801-2900/\u7edf\u8ba1\u6811\u4e2d\u7684\u5408\u6cd5\u8def\u5f84\u6570\u76ee","title":"2867.\u7edf\u8ba1\u6811\u4e2d\u7684\u5408\u6cd5\u8def\u5f84\u6570\u76ee","description":"\u94fe\u63a5\uff1a2867.\u7edf\u8ba1\u6811\u4e2d\u7684\u5408\u6cd5\u8def\u5f84\u6570\u76ee","source":"@site/docs/leetcode/2801-2900/2867.\u7edf\u8ba1\u6811\u4e2d\u7684\u5408\u6cd5\u8def\u5f84\u6570\u76ee.md","sourceDirName":"leetcode/2801-2900","slug":"/leetcode/2801-2900/\u7edf\u8ba1\u6811\u4e2d\u7684\u5408\u6cd5\u8def\u5f84\u6570\u76ee","permalink":"/docs/leetcode/2801-2900/\u7edf\u8ba1\u6811\u4e2d\u7684\u5408\u6cd5\u8def\u5f84\u6570\u76ee","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2867,"frontMatter":{},"sidebar":"journal","previous":{"title":"2866.\u7f8e\u4e3d\u5854II","permalink":"/docs/leetcode/2801-2900/\u7f8e\u4e3d\u5854II"},"next":{"title":"2908.\u5143\u7d20\u548c\u6700\u5c0f\u7684\u5c71\u5f62\u4e09\u5143\u7ec4I","permalink":"/docs/leetcode/2901-3000/\u5143\u7d20\u548c\u6700\u5c0f\u7684\u5c71\u5f62\u4e09\u5143\u7ec4I"}}');var i=r(86070),s=r(31503);const o={},c="2867.\u7edf\u8ba1\u6811\u4e2d\u7684\u5408\u6cd5\u8def\u5f84\u6570\u76ee",d={},l=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"2867\u7edf\u8ba1\u6811\u4e2d\u7684\u5408\u6cd5\u8def\u5f84\u6570\u76ee",children:"2867.\u7edf\u8ba1\u6811\u4e2d\u7684\u5408\u6cd5\u8def\u5f84\u6570\u76ee"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/count-valid-paths-in-a-tree",children:"2867.\u7edf\u8ba1\u6811\u4e2d\u7684\u5408\u6cd5\u8def\u5f84\u6570\u76ee"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u5b66\u3001\u52a8\u6001\u89c4\u5212\u3001\u6570\u8bba",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u6811\u4e2d\u7684 \u5408\u6cd5\u8def\u5f84\u6570\u76ee \u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-02-27"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a322ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a58.63MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9884\u5904\u7406\u597d\u8d28\u6570\u8868\uff0c\u901a\u8fc7\u904d\u5386\u6240\u6709\u8d28\u6570\uff0c\u627e\u5230\u4ee5\u5f53\u524d\u8d28\u6570\u4e3a\u6839\u7ed3\u70b9\u7684\u65f6\u5019\uff0c\u6240\u6709\u5b50\u6811\u7684\u957f\u5ea6\uff0c\u8fdb\u884c\u4e24\u4e24\u76f8\u4e58\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"def get_primes2(n: int) -> List[bool]:\n        n += 1\n        primes = [True for _ in range(n)]\n        primes[0] = primes[1] = False\n        for i in range(2, n):\n            if primes[i]:\n                j = 2\n                while i * j < n:\n                    primes[i*j] = False\n                    j += 1\n        return primes\n    primes = get_primes2(10 ** 5 + 1)\n    \n    class Solution:\n        def countPaths(self, n: int, edges: List[List[int]]) -> int:\n            nodes = [[] for _ in range(n + 1)]\n            for n1, n2 in edges:\n                nodes[n1].append(n2)\n                nodes[n2].append(n1)\n            ans = 0\n    \n            cache = defaultdict(int)\n            def dfs(arr: List[int], node: int, parent: int):\n                if primes[node]: return\n                arr.append(node)\n                ans = 1\n                for child in nodes[node]:\n                    if not primes[child] and child != parent:\n                        ans += dfs(arr, child, node)\n                return ans\n    \n            for node in range(1, n + 1):\n                if primes[node]:\n                    cur = 0\n                    for child in nodes[node]:\n                        if not primes[child]:\n                            if child not in cache:\n                                arr = []\n                                res = dfs(arr, child, node)\n                                for item in arr: cache[item] = res\n                            ans += cache[child] * cur\n                            cur += cache[child]\n                    ans += cur\n        return ans\n"})})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},31503:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>c});var t=r(30758);const i={},s=t.createContext(i);function o(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);