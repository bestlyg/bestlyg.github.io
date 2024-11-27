"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[61290],{50518:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/2001-2100/\u7ed9\u690d\u7269\u6d47\u6c34","title":"2079.\u7ed9\u690d\u7269\u6d47\u6c34","description":"\u94fe\u63a5\uff1a2079.\u7ed9\u690d\u7269\u6d47\u6c34","source":"@site/docs/leetcode/2001-2100/2079.\u7ed9\u690d\u7269\u6d47\u6c34.md","sourceDirName":"leetcode/2001-2100","slug":"/leetcode/2001-2100/\u7ed9\u690d\u7269\u6d47\u6c34","permalink":"/docs/leetcode/2001-2100/\u7ed9\u690d\u7269\u6d47\u6c34","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2079,"frontMatter":{},"sidebar":"journal","previous":{"title":"2073.\u4e70\u7968\u9700\u8981\u7684\u65f6\u95f4","permalink":"/docs/leetcode/2001-2100/\u4e70\u7968\u9700\u8981\u7684\u65f6\u95f4"},"next":{"title":"2085.\u7edf\u8ba1\u51fa\u73b0\u8fc7\u4e00\u6b21\u7684\u516c\u5171\u5b57\u7b26\u4e32","permalink":"/docs/leetcode/2001-2100/\u7edf\u8ba1\u51fa\u73b0\u8fc7\u4e00\u6b21\u7684\u516c\u5171\u5b57\u7b26\u4e32"}}');var r=t(86070),i=t(31503);const l={},c="2079.\u7ed9\u690d\u7269\u6d47\u6c34",o={},a=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"2079\u7ed9\u690d\u7269\u6d47\u6c34",children:"2079.\u7ed9\u690d\u7269\u6d47\u6c34"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/watering-plants",children:"2079.\u7ed9\u690d\u7269\u6d47\u6c34"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6a21\u62df",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u7684\u6574\u6570\u6570\u7ec4 plants \uff0c\u6570\u7ec4\u7531 n \u4e2a\u6574\u6570\u7ec4\u6210\u3002\u5176\u4e2d\uff0cplants[i] \u4e3a\u7b2c i \u682a\u690d\u7269\u9700\u8981\u7684\u6c34\u91cf\u3002\u53e6\u6709\u4e00\u4e2a\u6574\u6570 capacity \u8868\u793a\u6c34\u7f50\u7684\u5bb9\u91cf\uff0c\u8fd4\u56de\u6d47\u704c\u6240\u6709\u690d\u7269\u9700\u8981\u7684 \u6b65\u6570 \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-05-08"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.53MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def wateringPlants(self, plants: List[int], capacity: int) -> int:\n        water = capacity\n        res = 0\n        for i in range(len(plants)):\n            if water < plants[i]:\n                water = capacity\n                res += i * 2\n            water -= plants[i]\n            res += 1\n        return res\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(30758);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);