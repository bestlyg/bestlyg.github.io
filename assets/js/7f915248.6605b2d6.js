"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[78823],{88889:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/1501-1600/\u5403\u6389N\u4e2a\u6a58\u5b50\u7684\u6700\u5c11\u5929\u6570","title":"1553.\u5403\u6389N\u4e2a\u6a58\u5b50\u7684\u6700\u5c11\u5929\u6570","description":"\u94fe\u63a5\uff1a1553.\u5403\u6389N\u4e2a\u6a58\u5b50\u7684\u6700\u5c11\u5929\u6570","source":"@site/docs/leetcode/1501-1600/1553.\u5403\u6389N\u4e2a\u6a58\u5b50\u7684\u6700\u5c11\u5929\u6570.md","sourceDirName":"leetcode/1501-1600","slug":"/leetcode/1501-1600/\u5403\u6389N\u4e2a\u6a58\u5b50\u7684\u6700\u5c11\u5929\u6570","permalink":"/docs/leetcode/1501-1600/\u5403\u6389N\u4e2a\u6a58\u5b50\u7684\u6700\u5c11\u5929\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1553,"frontMatter":{},"sidebar":"journal","previous":{"title":"1547.\u5207\u68cd\u5b50\u7684\u6700\u5c0f\u6210\u672c","permalink":"/docs/leetcode/1501-1600/\u5207\u68cd\u5b50\u7684\u6700\u5c0f\u6210\u672c"},"next":{"title":"1572.\u77e9\u9635\u5bf9\u89d2\u7ebf\u5143\u7d20\u7684\u548c","permalink":"/docs/leetcode/1501-1600/\u77e9\u9635\u5bf9\u89d2\u7ebf\u5143\u7d20\u7684\u548c"}}');var r=t(86070),o=t(31503);const c={},l="1553.\u5403\u6389N\u4e2a\u6a58\u5b50\u7684\u6700\u5c11\u5929\u6570",i={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1553\u5403\u6389n\u4e2a\u6a58\u5b50\u7684\u6700\u5c11\u5929\u6570",children:"1553.\u5403\u6389N\u4e2a\u6a58\u5b50\u7684\u6700\u5c11\u5929\u6570"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-number-of-days-to-eat-n-oranges",children:"1553.\u5403\u6389N\u4e2a\u6a58\u5b50\u7684\u6700\u5c11\u5929\u6570"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8bb0\u5fc6\u5316\u641c\u7d22\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u5403\u6389\u6240\u6709 n \u4e2a\u6a58\u5b50\u7684\u6700\u5c11\u5929\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-05-12"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a50ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a18.6MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5c3d\u53ef\u80fd\u7528\u9664\u6cd5\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    @cache\n    def minDays(self, n: int) -> int:\n        if n <= 1: return n\n        return min(self.minDays(n // 2) + n % 2, self.minDays(n // 3) + n % 3) + 1\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var s=t(30758);const r={},o=s.createContext(r);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);