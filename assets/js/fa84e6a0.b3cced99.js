"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[2850],{84180:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/3201-3300/\u4ea4\u66ff\u7ec4II","title":"3208.\u4ea4\u66ff\u7ec4II","description":"\u94fe\u63a5\uff1a3208.\u4ea4\u66ff\u7ec4II","source":"@site/docs/leetcode/3201-3300/3208.\u4ea4\u66ff\u7ec4II.md","sourceDirName":"leetcode/3201-3300","slug":"/leetcode/3201-3300/\u4ea4\u66ff\u7ec4II","permalink":"/docs/leetcode/3201-3300/\u4ea4\u66ff\u7ec4II","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3208,"frontMatter":{},"sidebar":"journal","previous":{"title":"3206.\u4ea4\u66ff\u7ec4I","permalink":"/docs/leetcode/3201-3300/\u4ea4\u66ff\u7ec4I"},"next":{"title":"3211.\u751f\u6210\u4e0d\u542b\u76f8\u90bb\u96f6\u7684\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32","permalink":"/docs/leetcode/3201-3300/\u751f\u6210\u4e0d\u542b\u76f8\u90bb\u96f6\u7684\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32"}}');var l=t(25105),s=t(8556);const o={},i="3208.\u4ea4\u66ff\u7ec4II",c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"3208\u4ea4\u66ff\u7ec4ii",children:"3208.\u4ea4\u66ff\u7ec4II"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/alternating-groups-ii",children:"3208.\u4ea4\u66ff\u7ec4II"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6ed1\u52a8\u7a97\u53e3",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de \u4ea4\u66ff \u7ec4\u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-11-27"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a183ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a20.6MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8bb0\u5f55\u4ee5r\u4e3a\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u6ed1\u52a8\u7a97\u53e3"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def numberOfAlternatingGroups(self, colors: List[int], k: int) -> int:\n        n = len(colors)\n        l = 0\n        while colors[l] != colors[(l + n - 1) % n]:\n            l = (l + n - 1) % n\n            if l == 0:\n                l = 1\n                break\n        res = 0\n        for r in range(n):\n            if colors[r] == colors[(r + n - 1) % n]:\n                l = r\n            else:\n                cnt = r - l + 1 if l <= r else r + 1 + n - l\n                if cnt >= k: res += 1\n            if (r + 1) % n == l:\n                l = (l + 1) % n\n        return res\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(58101);const l={},s=r.createContext(l);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);