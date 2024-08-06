"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[25795],{2128:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=r(86070),s=r(25710);const o={},i="1766.\u4e92\u8d28\u6811",l={id:"leetcode/1701-1800/\u4e92\u8d28\u6811",title:"1766.\u4e92\u8d28\u6811",description:"\u94fe\u63a5\uff1a1766.\u4e92\u8d28\u6811",source:"@site/docs/leetcode/1701-1800/1766.\u4e92\u8d28\u6811.md",sourceDirName:"leetcode/1701-1800",slug:"/leetcode/1701-1800/\u4e92\u8d28\u6811",permalink:"/docs/leetcode/1701-1800/\u4e92\u8d28\u6811",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1766,frontMatter:{},sidebar:"journal",previous:{title:"1765.\u5730\u56fe\u4e2d\u7684\u6700\u9ad8\u70b9",permalink:"/docs/leetcode/1701-1800/\u5730\u56fe\u4e2d\u7684\u6700\u9ad8\u70b9"},next:{title:"1768.\u4ea4\u66ff\u5408\u5e76\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/1701-1800/\u4ea4\u66ff\u5408\u5e76\u5b57\u7b26\u4e32"}},c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"1766\u4e92\u8d28\u6811",children:"1766.\u4e92\u8d28\u6811"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/tree-of-coprimes",children:"1766.\u4e92\u8d28\u6811"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u6570\u5b66\u3001\u6570\u8bba",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u4e00\u4e2a\u5927\u5c0f\u4e3a n \u7684\u6570\u7ec4 ans \uff0c\u5176\u4e2d ans[i]\u662f\u79bb\u8282\u70b9 i \u6700\u8fd1\u7684\u7956\u5148\u8282\u70b9\u4e14\u6ee1\u8db3 nums[i] \u548c nums[ans[i]] \u662f \u4e92\u8d28\u7684 \uff0c\u5982\u679c\u4e0d\u5b58\u5728\u8fd9\u6837\u7684\u7956\u5148\u8282\u70b9\uff0cans[i] \u4e3a -1 \u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-04-11"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1017ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a66.86MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9884\u5904\u7406\u540edfs\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"primes = [0 for _ in range(51)]\n    for num1 in range(1, 51):\n        for num2 in range(1, 51):\n            if gcd(num1, num2) == 1:\n                primes[num1] |= 1 << num2\n                primes[num2] |= 1 << num1\n    \n    class Solution:\n        def getCoprimes(self, nums: List[int], edges: List[List[int]]) -> List[int]:\n            n = len(nums)\n            nodes = [[] for _ in range(n)]\n            for n1, n2 in edges:\n                nodes[n1].append(n2)\n                nodes[n2].append(n1)\n            ans = [-1 for _ in range(n)]\n            def dfs(node: int, arr: List[Tuple[int, int]], parent: int, level: int):\n                num1 = nums[node]\n                cur = (-1, -1)\n                for num2 in range(1, 51):\n                    if arr[num2][0] != -1 and primes[num1] & (1 << num2) and (cur[1] == -1 or arr[num2][1] > cur[1]):\n                        cur = arr[num2]\n                ans[node] = cur[0]\n                oldv = arr[num1]\n                arr[num1] = (node, level)\n                for child in nodes[node]:\n                    if child != parent:\n                        dfs(child, arr, node, level + 1)\n                arr[num1] = oldv\n            dfs(0, [(-1, -1) for _ in range(51)], -1, 0)\n            return ans\n"})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>l});var t=r(30758);const s={},o=t.createContext(s);function i(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);