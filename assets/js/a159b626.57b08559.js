"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[29447],{49565:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var s=t(86070),i=t(25710);const c={},l="2105.\u7ed9\u690d\u7269\u6d47\u6c34II",a={id:"leetcode/2101-2200/\u7ed9\u690d\u7269\u6d47\u6c34II",title:"2105.\u7ed9\u690d\u7269\u6d47\u6c34II",description:"\u94fe\u63a5\uff1a2105.\u7ed9\u690d\u7269\u6d47\u6c34II",source:"@site/docs/leetcode/2101-2200/2105.\u7ed9\u690d\u7269\u6d47\u6c34II.md",sourceDirName:"leetcode/2101-2200",slug:"/leetcode/2101-2200/\u7ed9\u690d\u7269\u6d47\u6c34II",permalink:"/web/site/docs/leetcode/2101-2200/\u7ed9\u690d\u7269\u6d47\u6c34II",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2105,frontMatter:{},sidebar:"journal",previous:{title:"2104.\u5b50\u6570\u7ec4\u8303\u56f4\u548c",permalink:"/web/site/docs/leetcode/2101-2200/\u5b50\u6570\u7ec4\u8303\u56f4\u548c"},next:{title:"2106.\u6458\u6c34\u679c",permalink:"/web/site/docs/leetcode/2101-2200/\u6458\u6c34\u679c"}},r={},o=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"2105\u7ed9\u690d\u7269\u6d47\u6c34ii",children:"2105.\u7ed9\u690d\u7269\u6d47\u6c34II"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/watering-plants-ii",children:"2105.\u7ed9\u690d\u7269\u6d47\u6c34II"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u6a21\u62df",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u7684\u6574\u6570\u6570\u7ec4 plants \uff0c\u6570\u7ec4\u7531 n \u4e2a\u6574\u6570\u7ec4\u6210\u3002\u5176\u4e2d\uff0cplants[i] \u4e3a\u7b2c i \u682a\u690d\u7269\u9700\u8981\u7684\u6c34\u91cf\u3002\u53e6\u6709\u4e24\u4e2a\u6574\u6570 capacityA \u548c capacityB \u5206\u522b\u8868\u793a Alice \u548c Bob \u6c34\u7f50\u7684\u5bb9\u91cf\u3002\u8fd4\u56de\u4e24\u4eba\u6d47\u704c\u6240\u6709\u690d\u7269\u8fc7\u7a0b\u4e2d\u91cd\u65b0\u704c\u6ee1\u6c34\u7f50\u7684 \u6b21\u6570 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-05-09"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a86ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a31.19MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def minimumRefill(self, plants: List[int], capacityA: int, capacityB: int) -> int:\n        res = 0\n        n = len(plants)\n        a = 0\n        wa = capacityA\n        b = n - 1\n        wb = capacityB\n        while a < b:\n            if wa < plants[a]:\n                wa = capacityA\n                res += 1\n            wa -= plants[a]\n            if wb < plants[b]:\n                wb = capacityB\n                res += 1\n            wb -= plants[b]\n            a += 1\n            b -= 1\n        if a == b and max(wa, wb) < plants[a]:\n            res += 1\n        return res\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>a});var s=t(30758);const i={},c=s.createContext(i);function l(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);