"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[79210],{13249:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/1601-1700/\u77f3\u5b50\u6e38\u620fVI","title":"1686.\u77f3\u5b50\u6e38\u620fVI","description":"\u94fe\u63a5\uff1a1686.\u77f3\u5b50\u6e38\u620fVI","source":"@site/docs/leetcode/1601-1700/1686.\u77f3\u5b50\u6e38\u620fVI.md","sourceDirName":"leetcode/1601-1700","slug":"/leetcode/1601-1700/\u77f3\u5b50\u6e38\u620fVI","permalink":"/docs/leetcode/1601-1700/\u77f3\u5b50\u6e38\u620fVI","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1686,"frontMatter":{},"sidebar":"journal","previous":{"title":"1684.\u7edf\u8ba1\u4e00\u81f4\u5b57\u7b26\u4e32\u7684\u6570\u76ee","permalink":"/docs/leetcode/1601-1700/\u7edf\u8ba1\u4e00\u81f4\u5b57\u7b26\u4e32\u7684\u6570\u76ee"},"next":{"title":"1687.\u4ece\u4ed3\u5e93\u5230\u7801\u5934\u8fd0\u8f93\u7bb1\u5b50","permalink":"/docs/leetcode/1601-1700/\u4ece\u4ed3\u5e93\u5230\u7801\u5934\u8fd0\u8f93\u7bb1\u5b50"}}');var o=t(25105),r=t(8556);const i={},l="1686.\u77f3\u5b50\u6e38\u620fVI",c={},a=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"1686\u77f3\u5b50\u6e38\u620fvi",children:"1686.\u77f3\u5b50\u6e38\u620fVI"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(n.a,{href:"https://leetcode.cn/problems/stone-game-vi",children:"1686.\u77f3\u5b50\u6e38\u620fVI"}),(0,o.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,o.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u6570\u5b66\u3001\u535a\u5f08\u3001\u6392\u5e8f\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,o.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6240\u6709\u77f3\u5b50\u90fd\u88ab\u53d6\u5b8c\u540e\uff0c\u5f97\u5206\u8f83\u9ad8\u7684\u4eba\u4e3a\u80dc\u8005\u3002\u5982\u679c\u4e24\u4e2a\u73a9\u5bb6\u5f97\u5206\u76f8\u540c\uff0c\u90a3\u4e48\u4e3a\u5e73\u5c40\u3002\u4e24\u4f4d\u73a9\u5bb6\u90fd\u4f1a\u91c7\u7528 \u6700\u4f18\u7b56\u7565 \u8fdb\u884c\u6e38\u620f\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-02-02"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a241ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a27.69MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f18\u5148\u62ff\u5206\u6570\u603b\u548c\u6700\u5927\u7684\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def stoneGameVI(self, aliceValues: List[int], bobValues: List[int]) -> int:\n        values = sorted((av + bv, av, bv) for av, bv in zip(aliceValues, bobValues))\n        asum = sum(item[1] for item in values[-1::-2])\n        bsum = sum(item[2] for item in values[-2::-2])\n        if asum > bsum: return 1\n        if asum < bsum: return -1\n        return 0\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(58101);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);