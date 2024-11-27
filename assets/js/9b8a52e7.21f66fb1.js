"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[9430],{49629:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/2301-2400/\u88ab\u5217\u8986\u76d6\u7684\u6700\u591a\u884c\u6570","title":"2397.\u88ab\u5217\u8986\u76d6\u7684\u6700\u591a\u884c\u6570","description":"\u94fe\u63a5\uff1a2397.\u88ab\u5217\u8986\u76d6\u7684\u6700\u591a\u884c\u6570","source":"@site/docs/leetcode/2301-2400/2397.\u88ab\u5217\u8986\u76d6\u7684\u6700\u591a\u884c\u6570.md","sourceDirName":"leetcode/2301-2400","slug":"/leetcode/2301-2400/\u88ab\u5217\u8986\u76d6\u7684\u6700\u591a\u884c\u6570","permalink":"/docs/leetcode/2301-2400/\u88ab\u5217\u8986\u76d6\u7684\u6700\u591a\u884c\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2397,"frontMatter":{},"sidebar":"journal","previous":{"title":"2395.\u548c\u76f8\u7b49\u7684\u5b50\u6570\u7ec4","permalink":"/docs/leetcode/2301-2400/\u548c\u76f8\u7b49\u7684\u5b50\u6570\u7ec4"},"next":{"title":"2398.\u9884\u7b97\u5185\u7684\u6700\u591a\u673a\u5668\u4eba\u6570\u76ee","permalink":"/docs/leetcode/2301-2400/\u9884\u7b97\u5185\u7684\u6700\u591a\u673a\u5668\u4eba\u6570\u76ee"}}');var r=t(86070),o=t(31503);const i={},c="2397.\u88ab\u5217\u8986\u76d6\u7684\u6700\u591a\u884c\u6570",l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"2397\u88ab\u5217\u8986\u76d6\u7684\u6700\u591a\u884c\u6570",children:"2397.\u88ab\u5217\u8986\u76d6\u7684\u6700\u591a\u884c\u6570"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-rows-covered-by-columns",children:"2397.\u88ab\u5217\u8986\u76d6\u7684\u6700\u591a\u884c\u6570"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4\u3001\u56de\u6eaf\u3001\u679a\u4e3e\u3001\u77e9\u9635",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u53ef\u4ee5\u7531 numSelect \u5217\u6784\u6210\u7684\u96c6\u5408 \u8986\u76d6 \u7684 \u6700\u5927\u884c\u6570 \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-01-04"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.85MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u6240\u6709\u5217\u8986\u76d6\u7684\u60c5\u51b5\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def maximumRows(self, matrix: List[List[int]], numSelect: int) -> int:\n        n = len(matrix)\n        m = len(matrix[0])\n        rows = []\n        for i in range(n):\n            used = 0\n            for j in range(m):\n                if matrix[i][j] == 1: used |= 1 << j\n            rows.append(used)\n        ans = 0\n        for used in range(1 << m):\n            if bin(used).count('1') != numSelect: continue\n            count = sum((rows[i] & used) == rows[i] for i in range(n))\n            ans = max(ans, count)\n        return ans\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(30758);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);