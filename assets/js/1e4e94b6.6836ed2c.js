"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[42027],{60633:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=t(86070),o=t(31503);const r={},i="2581.\u7edf\u8ba1\u53ef\u80fd\u7684\u6811\u6839\u6570\u76ee",d={id:"leetcode/2501-2600/\u7edf\u8ba1\u53ef\u80fd\u7684\u6811\u6839\u6570\u76ee",title:"2581.\u7edf\u8ba1\u53ef\u80fd\u7684\u6811\u6839\u6570\u76ee",description:"\u94fe\u63a5\uff1a2581.\u7edf\u8ba1\u53ef\u80fd\u7684\u6811\u6839\u6570\u76ee",source:"@site/docs/leetcode/2501-2600/2581.\u7edf\u8ba1\u53ef\u80fd\u7684\u6811\u6839\u6570\u76ee.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u7edf\u8ba1\u53ef\u80fd\u7684\u6811\u6839\u6570\u76ee",permalink:"/docs/leetcode/2501-2600/\u7edf\u8ba1\u53ef\u80fd\u7684\u6811\u6839\u6570\u76ee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2581,frontMatter:{},sidebar:"journal",previous:{title:"2580.\u7edf\u8ba1\u5c06\u91cd\u53e0\u533a\u95f4\u5408\u5e76\u6210\u7ec4\u7684\u65b9\u6848\u6570",permalink:"/docs/leetcode/2501-2600/\u7edf\u8ba1\u5c06\u91cd\u53e0\u533a\u95f4\u5408\u5e76\u6210\u7ec4\u7684\u65b9\u6848\u6570"},next:{title:"2582.\u9012\u6795\u5934",permalink:"/docs/leetcode/2501-2600/\u9012\u6795\u5934"}},c={},l=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"2581\u7edf\u8ba1\u53ef\u80fd\u7684\u6811\u6839\u6570\u76ee",children:"2581.\u7edf\u8ba1\u53ef\u80fd\u7684\u6811\u6839\u6570\u76ee"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/count-number-of-possible-root-nodes",children:"2581.\u7edf\u8ba1\u53ef\u80fd\u7684\u6811\u6839\u6570\u76ee"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e8c\u7ef4\u6574\u6570\u6570\u7ec4 edges \uff0cBob \u7684\u6240\u6709\u731c\u6d4b\u548c\u6574\u6570 k \uff0c\u8bf7\u4f60\u8fd4\u56de\u53ef\u80fd\u6210\u4e3a\u6811\u6839\u7684 \u8282\u70b9\u6570\u76ee \u3002\u5982\u679c\u6ca1\u6709\u8fd9\u6837\u7684\u6811\uff0c\u5219\u8fd4\u56de 0\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-02-29"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a425ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a97.89MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5148\u7edf\u8ba1\u4ee50\u4e3a\u6839\u7684\u731c\u5bf9\u4e2a\u6570\uff0c \u518d\u5bf9\u6bcf\u4e2a\u8282\u70b9\u4e3a\u6839\u8fdb\u884cdfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def rootCount(self, edges: List[List[int]], guesses: List[List[int]], k: int) -> int:\n        nodes = [[] for _ in range(len(edges) + 1)]\n        for n1, n2 in edges:\n            nodes[n1].append(n2)\n            nodes[n2].append(n1)\n        s = {(n1, n2) for n1, n2 in guesses}\n        def dfs(node: int, parent: int) -> int:\n            ans = 0\n            for child in nodes[node]:\n                if child != parent:\n                    ans += (node, child) in s\n                    ans += dfs(child, node)\n            return ans\n        def reroot(node: int, parent: int, cnt: int) -> int:\n            ans = cnt >= k\n            for child in nodes[node]:\n                if child != parent:\n                    ans += reroot(child, node, cnt + ((child, node) in s) - ((node, child) in s))\n            return ans\n        return reroot(0, -1, dfs(0, -1))\n"})})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>d});var s=t(30758);const o={},r=s.createContext(o);function i(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);