"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[733],{80728:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"leetcode/2601-2700/\u8bbe\u8ba1\u53ef\u4ee5\u6c42\u6700\u77ed\u8def\u5f84\u7684\u56fe\u7c7b","title":"2642.\u8bbe\u8ba1\u53ef\u4ee5\u6c42\u6700\u77ed\u8def\u5f84\u7684\u56fe\u7c7b","description":"\u94fe\u63a5\uff1a2642.\u8bbe\u8ba1\u53ef\u4ee5\u6c42\u6700\u77ed\u8def\u5f84\u7684\u56fe\u7c7b","source":"@site/docs/leetcode/2601-2700/2642.\u8bbe\u8ba1\u53ef\u4ee5\u6c42\u6700\u77ed\u8def\u5f84\u7684\u56fe\u7c7b.md","sourceDirName":"leetcode/2601-2700","slug":"/leetcode/2601-2700/\u8bbe\u8ba1\u53ef\u4ee5\u6c42\u6700\u77ed\u8def\u5f84\u7684\u56fe\u7c7b","permalink":"/docs/leetcode/2601-2700/\u8bbe\u8ba1\u53ef\u4ee5\u6c42\u6700\u77ed\u8def\u5f84\u7684\u56fe\u7c7b","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2642,"frontMatter":{},"sidebar":"journal","previous":{"title":"2641.\u4e8c\u53c9\u6811\u7684\u5802\u5144\u5f1f\u8282\u70b9II","permalink":"/docs/leetcode/2601-2700/\u4e8c\u53c9\u6811\u7684\u5802\u5144\u5f1f\u8282\u70b9II"},"next":{"title":"2643.\u4e00\u6700\u591a\u7684\u884c","permalink":"/docs/leetcode/2601-2700/\u4e00\u6700\u591a\u7684\u884c"}}');var o=t(86070),d=t(31503);const r={},c="2642.\u8bbe\u8ba1\u53ef\u4ee5\u6c42\u6700\u77ed\u8def\u5f84\u7684\u56fe\u7c7b",l={},i=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"2642\u8bbe\u8ba1\u53ef\u4ee5\u6c42\u6700\u77ed\u8def\u5f84\u7684\u56fe\u7c7b",children:"2642.\u8bbe\u8ba1\u53ef\u4ee5\u6c42\u6700\u77ed\u8def\u5f84\u7684\u56fe\u7c7b"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(n.a,{href:"https://leetcode.cn/problems/design-graph-with-shortest-path-calculator",children:"2642.\u8bbe\u8ba1\u53ef\u4ee5\u6c42\u6700\u77ed\u8def\u5f84\u7684\u56fe\u7c7b"}),(0,o.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,o.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u56fe\u3001\u8bbe\u8ba1\u3001\u6700\u77ed\u8def\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,o.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u5b9e\u73b0\u4e00\u4e2a Graph \u7c7b\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-03-26"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a349ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a20.49MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u56fe\u7684\u6700\u77ed\u8def\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Node:\n    def __init__(self):\n        self.f = []\n        self.t = []\nclass Graph:\n    def __init__(self, n: int, edges: List[List[int]]):\n        self.n = n\n        self.nodes = [Node() for _ in range(n)]\n        for [f, t, cost] in edges:\n            self.nodes[f].t.append((t, cost))\n            self.nodes[t].f.append((f, cost))\n    def addEdge(self, edge: List[int]) -> None:\n        self.nodes[edge[0]].t.append((edge[1], edge[2]))\n    def shortestPath(self, node1: int, node2: int) -> int:\n        q = [(0, node1)]\n        used = {}\n        while q: \n            cost, node = heappop(q)\n            if node == node2: return cost\n            for next_node, next_cost in self.nodes[node].t:\n                cost2 = next_cost + cost\n                if next_node not in used or used[next_node] > cost2:\n                    heappush(q, (cost2, next_node))\n                    used[next_node] = cost2\n        return -1\n"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(30758);const o={},d=s.createContext(o);function r(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);