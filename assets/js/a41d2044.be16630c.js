"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[74677],{43780:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"leetcode/3101-3200/K\u5468\u671f\u5b57\u7b26\u4e32\u9700\u8981\u7684\u6700\u5c11\u64cd\u4f5c\u6b21\u6570","title":"3137.K\u5468\u671f\u5b57\u7b26\u4e32\u9700\u8981\u7684\u6700\u5c11\u64cd\u4f5c\u6b21\u6570","description":"\u94fe\u63a5\uff1a3137.K\u5468\u671f\u5b57\u7b26\u4e32\u9700\u8981\u7684\u6700\u5c11\u64cd\u4f5c\u6b21\u6570","source":"@site/docs/leetcode/3101-3200/3137.K\u5468\u671f\u5b57\u7b26\u4e32\u9700\u8981\u7684\u6700\u5c11\u64cd\u4f5c\u6b21\u6570.md","sourceDirName":"leetcode/3101-3200","slug":"/leetcode/3101-3200/K\u5468\u671f\u5b57\u7b26\u4e32\u9700\u8981\u7684\u6700\u5c11\u64cd\u4f5c\u6b21\u6570","permalink":"/docs/leetcode/3101-3200/K\u5468\u671f\u5b57\u7b26\u4e32\u9700\u8981\u7684\u6700\u5c11\u64cd\u4f5c\u6b21\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3137,"frontMatter":{},"sidebar":"journal","previous":{"title":"3133.\u6570\u7ec4\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u6700\u5c0f\u503c","permalink":"/docs/leetcode/3101-3200/\u6570\u7ec4\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u6700\u5c0f\u503c"},"next":{"title":"3142.\u5224\u65ad\u77e9\u9635\u662f\u5426\u6ee1\u8db3\u6761\u4ef6","permalink":"/docs/leetcode/3101-3200/\u5224\u65ad\u77e9\u9635\u662f\u5426\u6ee1\u8db3\u6761\u4ef6"}}');var r=t(86070),s=t(31503);const i={},l="3137.K\u5468\u671f\u5b57\u7b26\u4e32\u9700\u8981\u7684\u6700\u5c11\u64cd\u4f5c\u6b21\u6570",c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"3137k\u5468\u671f\u5b57\u7b26\u4e32\u9700\u8981\u7684\u6700\u5c11\u64cd\u4f5c\u6b21\u6570",children:"3137.K\u5468\u671f\u5b57\u7b26\u4e32\u9700\u8981\u7684\u6700\u5c11\u64cd\u4f5c\u6b21\u6570"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-number-of-operations-to-make-word-k-periodic",children:"3137.K\u5468\u671f\u5b57\u7b26\u4e32\u9700\u8981\u7684\u6700\u5c11\u64cd\u4f5c\u6b21\u6570"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4f7f word \u6210\u4e3a K \u5468\u671f\u5b57\u7b26\u4e32 \u6240\u9700\u7684 \u6700\u5c11 \u64cd\u4f5c\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-08-17"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a102ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19.83MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u540e\u7edf\u8ba1\u9891\u7387\u6700\u9ad8\u7684\u5b50\u4e32"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def minimumOperationsToMakeKPeriodic(self, word: str, k: int) -> int:\n        return len(word) // k - sorted(Counter(word[i:i + k] for i in range(0, len(word), k)).items(), key = lambda v: v[1])[-1][1]\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(30758);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);