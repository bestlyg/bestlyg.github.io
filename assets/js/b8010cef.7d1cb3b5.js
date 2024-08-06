"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[26230],{91757:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(86070),o=t(25710);const i={},r="2101.\u5f15\u7206\u6700\u591a\u7684\u70b8\u5f39",c={id:"leetcode/2101-2200/\u5f15\u7206\u6700\u591a\u7684\u70b8\u5f39",title:"2101.\u5f15\u7206\u6700\u591a\u7684\u70b8\u5f39",description:"\u94fe\u63a5\uff1a2101.\u5f15\u7206\u6700\u591a\u7684\u70b8\u5f39",source:"@site/docs/leetcode/2101-2200/2101.\u5f15\u7206\u6700\u591a\u7684\u70b8\u5f39.md",sourceDirName:"leetcode/2101-2200",slug:"/leetcode/2101-2200/\u5f15\u7206\u6700\u591a\u7684\u70b8\u5f39",permalink:"/docs/leetcode/2101-2200/\u5f15\u7206\u6700\u591a\u7684\u70b8\u5f39",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2101,frontMatter:{},sidebar:"journal",previous:{title:"2100.\u9002\u5408\u91ce\u708a\u7684\u65e5\u5b50",permalink:"/docs/leetcode/2001-2100/\u9002\u5408\u91ce\u708a\u7684\u65e5\u5b50"},next:{title:"2103.\u73af\u548c\u6746",permalink:"/docs/leetcode/2101-2200/\u73af\u548c\u6746"}},l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"2101\u5f15\u7206\u6700\u591a\u7684\u70b8\u5f39",children:"2101.\u5f15\u7206\u6700\u591a\u7684\u70b8\u5f39"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/detonate-the-maximum-bombs",children:"2101.\u5f15\u7206\u6700\u591a\u7684\u70b8\u5f39"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u56fe\u3001\u51e0\u4f55\u3001\u6570\u7ec4\u3001\u6570\u5b66",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u6570\u7ec4 bombs \uff0c\u8bf7\u4f60\u8fd4\u56de\u5728\u5f15\u7206 \u4e00\u4e2a \u70b8\u5f39\u7684\u524d\u63d0\u4e0b\uff0c\u6700\u591a \u80fd\u5f15\u7206\u7684\u70b8\u5f39\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-07-22"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a510ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.08MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u5b58\u50a8\u6240\u6709\u7206\u70b8\u94fe\u63a5\u540edfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def maximumDetonation(self, bombs: List[List[int]]) -> int:\n        n = len(bombs)\n        nexts = [[] for _ in range(n)]\n        for i in range(n):\n            for j in range(n):\n                if i != j:\n                    if (bombs[i][0] - bombs[j][0]) ** 2 + (bombs[i][1] - bombs[j][1]) ** 2 <= bombs[i][2] ** 2:\n                        nexts[i].append(j)\n        def dfs(cur: int, used: List[bool]) -> int:\n            used[cur] = True\n            return sum(\n                dfs(next, used)\n                for next in nexts[cur]\n                if not used[next]\n            ) + 1\n        return max(dfs(i, [False] * n) for i in range(n))\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(30758);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);