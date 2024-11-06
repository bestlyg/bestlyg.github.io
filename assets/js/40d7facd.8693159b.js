"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[58650],{55249:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(86070),i=t(31503);const r={},o="2558.\u4ece\u6570\u91cf\u6700\u591a\u7684\u5806\u53d6\u8d70\u793c\u7269",c={id:"leetcode/2501-2600/\u4ece\u6570\u91cf\u6700\u591a\u7684\u5806\u53d6\u8d70\u793c\u7269",title:"2558.\u4ece\u6570\u91cf\u6700\u591a\u7684\u5806\u53d6\u8d70\u793c\u7269",description:"\u94fe\u63a5\uff1a2558.\u4ece\u6570\u91cf\u6700\u591a\u7684\u5806\u53d6\u8d70\u793c\u7269",source:"@site/docs/leetcode/2501-2600/2558.\u4ece\u6570\u91cf\u6700\u591a\u7684\u5806\u53d6\u8d70\u793c\u7269.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u4ece\u6570\u91cf\u6700\u591a\u7684\u5806\u53d6\u8d70\u793c\u7269",permalink:"/docs/leetcode/2501-2600/\u4ece\u6570\u91cf\u6700\u591a\u7684\u5806\u53d6\u8d70\u793c\u7269",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2558,frontMatter:{},sidebar:"journal",previous:{title:"2555.\u4e24\u4e2a\u7ebf\u6bb5\u83b7\u5f97\u7684\u6700\u591a\u5956\u54c1",permalink:"/docs/leetcode/2501-2600/\u4e24\u4e2a\u7ebf\u6bb5\u83b7\u5f97\u7684\u6700\u591a\u5956\u54c1"},next:{title:"2560.\u6253\u5bb6\u52ab\u820dIV",permalink:"/docs/leetcode/2501-2600/\u6253\u5bb6\u52ab\u820dIV"}},l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2558\u4ece\u6570\u91cf\u6700\u591a\u7684\u5806\u53d6\u8d70\u793c\u7269",children:"2558.\u4ece\u6570\u91cf\u6700\u591a\u7684\u5806\u53d6\u8d70\u793c\u7269"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/take-gifts-from-the-richest-pile",children:"2558.\u4ece\u6570\u91cf\u6700\u591a\u7684\u5806\u53d6\u8d70\u793c\u7269"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6a21\u62df\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u5728 k \u79d2\u540e\u5269\u4e0b\u7684\u793c\u7269\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-28"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a52ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.66MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5806\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def pickGifts(self, gifts: List[int], k: int) -> int:\n        gifts = [-v for v in gifts]\n        heapify(gifts)\n        for _ in range(k):\n            heappush(gifts, -int((-heappop(gifts)) ** 0.5))\n        return -sum(gifts)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(30758);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);