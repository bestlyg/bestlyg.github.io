"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[75631],{47855:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/2501-2600/\u6b63\u6574\u6570\u548c\u8d1f\u6574\u6570\u7684\u6700\u5927\u8ba1\u6570","title":"2529.\u6b63\u6574\u6570\u548c\u8d1f\u6574\u6570\u7684\u6700\u5927\u8ba1\u6570","description":"\u94fe\u63a5\uff1a2529.\u6b63\u6574\u6570\u548c\u8d1f\u6574\u6570\u7684\u6700\u5927\u8ba1\u6570","source":"@site/docs/leetcode/2501-2600/2529.\u6b63\u6574\u6570\u548c\u8d1f\u6574\u6570\u7684\u6700\u5927\u8ba1\u6570.md","sourceDirName":"leetcode/2501-2600","slug":"/leetcode/2501-2600/\u6b63\u6574\u6570\u548c\u8d1f\u6574\u6570\u7684\u6700\u5927\u8ba1\u6570","permalink":"/docs/leetcode/2501-2600/\u6b63\u6574\u6570\u548c\u8d1f\u6574\u6570\u7684\u6700\u5927\u8ba1\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2529,"frontMatter":{},"sidebar":"journal","previous":{"title":"2525.\u6839\u636e\u89c4\u5219\u5c06\u7bb1\u5b50\u5206\u7c7b","permalink":"/docs/leetcode/2501-2600/\u6839\u636e\u89c4\u5219\u5c06\u7bb1\u5b50\u5206\u7c7b"},"next":{"title":"2530.\u6267\u884cK\u6b21\u64cd\u4f5c\u540e\u7684\u6700\u5927\u5206\u6570","permalink":"/docs/leetcode/2501-2600/\u6267\u884cK\u6b21\u64cd\u4f5c\u540e\u7684\u6700\u5927\u5206\u6570"}}');var o=t(25105),r=t(8556);const l={},i="2529.\u6b63\u6574\u6570\u548c\u8d1f\u6574\u6570\u7684\u6700\u5927\u8ba1\u6570",c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"2529\u6b63\u6574\u6570\u548c\u8d1f\u6574\u6570\u7684\u6700\u5927\u8ba1\u6570",children:"2529.\u6b63\u6574\u6570\u548c\u8d1f\u6574\u6570\u7684\u6700\u5927\u8ba1\u6570"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,o.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-count-of-positive-integer-and-negative-integer",children:"2529.\u6b63\u6574\u6570\u548c\u8d1f\u6574\u6570\u7684\u6700\u5927\u8ba1\u6570"}),(0,o.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,o.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u8ba1\u6570",(0,o.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6309 \u975e\u9012\u51cf\u987a\u5e8f \u6392\u5217\u7684\u6570\u7ec4 nums \uff0c\u8fd4\u56de\u6b63\u6574\u6570\u6570\u76ee\u548c\u8d1f\u6574\u6570\u6570\u76ee\u4e2d\u7684\u6700\u5927\u503c\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-04-09"}),"\n",(0,o.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a51ms"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.64MB"}),"\n",(0,o.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,o.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def maximumCount(self, nums: List[int]) -> int:\n        return max(\n            len(list(filter(lambda v: v > 0, nums))),\n            len(list(filter(lambda v: v < 0, nums)))\n        )\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(58101);const o={},r=s.createContext(o);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);