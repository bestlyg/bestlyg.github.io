"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[72959],{23282:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=t(86070),s=t(25710);const o={},i="2007.\u4ece\u53cc\u500d\u6570\u7ec4\u4e2d\u8fd8\u539f\u539f\u6570\u7ec4",c={id:"leetcode/2001-2100/\u4ece\u53cc\u500d\u6570\u7ec4\u4e2d\u8fd8\u539f\u539f\u6570\u7ec4",title:"2007.\u4ece\u53cc\u500d\u6570\u7ec4\u4e2d\u8fd8\u539f\u539f\u6570\u7ec4",description:"\u94fe\u63a5\uff1a2007.\u4ece\u53cc\u500d\u6570\u7ec4\u4e2d\u8fd8\u539f\u539f\u6570\u7ec4",source:"@site/docs/leetcode/2001-2100/2007.\u4ece\u53cc\u500d\u6570\u7ec4\u4e2d\u8fd8\u539f\u539f\u6570\u7ec4.md",sourceDirName:"leetcode/2001-2100",slug:"/leetcode/2001-2100/\u4ece\u53cc\u500d\u6570\u7ec4\u4e2d\u8fd8\u539f\u539f\u6570\u7ec4",permalink:"/web/site/docs/leetcode/2001-2100/\u4ece\u53cc\u500d\u6570\u7ec4\u4e2d\u8fd8\u539f\u539f\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2007,frontMatter:{},sidebar:"journal",previous:{title:"2006.\u5dee\u7684\u7edd\u5bf9\u503c\u4e3aK\u7684\u6570\u5bf9\u6570\u76ee",permalink:"/web/site/docs/leetcode/2001-2100/\u5dee\u7684\u7edd\u5bf9\u503c\u4e3aK\u7684\u6570\u5bf9\u6570\u76ee"},next:{title:"2008.\u51fa\u79df\u8f66\u7684\u6700\u5927\u76c8\u5229",permalink:"/web/site/docs/leetcode/2001-2100/\u51fa\u79df\u8f66\u7684\u6700\u5927\u76c8\u5229"}},l={},a=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"2007\u4ece\u53cc\u500d\u6570\u7ec4\u4e2d\u8fd8\u539f\u539f\u6570\u7ec4",children:"2007.\u4ece\u53cc\u500d\u6570\u7ec4\u4e2d\u8fd8\u539f\u539f\u6570\u7ec4"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/find-original-array-from-doubled-array",children:"2007.\u4ece\u53cc\u500d\u6570\u7ec4\u4e2d\u8fd8\u539f\u539f\u6570\u7ec4"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u6392\u5e8f",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6570\u7ec4 changed \uff0c\u5982\u679c change \u662f \u53cc\u500d \u6570\u7ec4\uff0c\u90a3\u4e48\u8bf7\u4f60\u8fd4\u56de original\u6570\u7ec4\uff0c\u5426\u5219\u8bf7\u8fd4\u56de\u7a7a\u6570\u7ec4\u3002original \u7684\u5143\u7d20\u53ef\u4ee5\u4ee5 \u4efb\u610f \u987a\u5e8f\u8fd4\u56de\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-04-18"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a194ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a32.71MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u5b58\u50a8\u540e\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def findOriginalArray(self, changed: List[int]) -> List[int]:\n        map = Counter(changed)\n        arr = sorted(map.keys())\n        res = []\n        for num in arr:\n            if map[num] == 0: continue\n            if num == 0:\n                if map[num] % 2 != 0: return []\n                res += [0] * (map[num] // 2)\n                continue\n            if map[num] > map[num * 2]: return []\n            map[num * 2] -= map[num]\n            res += [num] * map[num]\n        return res\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(30758);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);