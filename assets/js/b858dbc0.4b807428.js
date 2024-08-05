"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[6665],{34234:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(86070),s=t(25710);const o={},i="2136.\u5168\u90e8\u5f00\u82b1\u7684\u6700\u65e9\u4e00\u5929",l={id:"leetcode/2101-2200/\u5168\u90e8\u5f00\u82b1\u7684\u6700\u65e9\u4e00\u5929",title:"2136.\u5168\u90e8\u5f00\u82b1\u7684\u6700\u65e9\u4e00\u5929",description:"\u94fe\u63a5\uff1a2136.\u5168\u90e8\u5f00\u82b1\u7684\u6700\u65e9\u4e00\u5929",source:"@site/docs/leetcode/2101-2200/2136.\u5168\u90e8\u5f00\u82b1\u7684\u6700\u65e9\u4e00\u5929.md",sourceDirName:"leetcode/2101-2200",slug:"/leetcode/2101-2200/\u5168\u90e8\u5f00\u82b1\u7684\u6700\u65e9\u4e00\u5929",permalink:"/docs/leetcode/2101-2200/\u5168\u90e8\u5f00\u82b1\u7684\u6700\u65e9\u4e00\u5929",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2136,frontMatter:{},sidebar:"journal",previous:{title:"2132.\u7528\u90ae\u7968\u8d34\u6ee1\u7f51\u683c\u56fe",permalink:"/docs/leetcode/2101-2200/\u7528\u90ae\u7968\u8d34\u6ee1\u7f51\u683c\u56fe"},next:{title:"2171.\u62ff\u51fa\u6700\u5c11\u6570\u76ee\u7684\u9b54\u6cd5\u8c46",permalink:"/docs/leetcode/2101-2200/\u62ff\u51fa\u6700\u5c11\u6570\u76ee\u7684\u9b54\u6cd5\u8c46"}},c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"2136\u5168\u90e8\u5f00\u82b1\u7684\u6700\u65e9\u4e00\u5929",children:"2136.\u5168\u90e8\u5f00\u82b1\u7684\u6700\u65e9\u4e00\u5929"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/earliest-possible-day-of-full-bloom",children:"2136.\u5168\u90e8\u5f00\u82b1\u7684\u6700\u65e9\u4e00\u5929"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u6392\u5e8f",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4ece\u7b2c 0 \u5f00\u59cb\uff0c\u4f60\u53ef\u4ee5\u6309 \u4efb\u610f \u987a\u5e8f\u64ad\u79cd\u79cd\u5b50\u3002\u8fd4\u56de\u6240\u6709\u79cd\u5b50\u90fd\u5f00\u82b1\u7684 \u6700\u65e9 \u4e00\u5929\u662f\u7b2c\u51e0\u5929\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-09-30"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a256ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a32MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def earliestFullBloom(self, plantTime: List[int], growTime: List[int]) -> int:\n        l = [i for i in range(len(plantTime))]\n        l.sort(key=lambda i: growTime[i], reverse=True)\n        cur = 0\n        res = 0\n        for i in l:\n            res = max(res, cur + growTime[i] + plantTime[i])\n            cur += plantTime[i]\n        return res\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(30758);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);