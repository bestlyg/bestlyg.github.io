"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[27706],{432:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=t(86070),s=t(25710);const o={},i="1013.\u5c06\u6570\u7ec4\u5206\u6210\u548c\u76f8\u7b49\u7684\u4e09\u4e2a\u90e8\u5206",l={id:"leetcode/1001-1100/\u5c06\u6570\u7ec4\u5206\u6210\u548c\u76f8\u7b49\u7684\u4e09\u4e2a\u90e8\u5206",title:"1013.\u5c06\u6570\u7ec4\u5206\u6210\u548c\u76f8\u7b49\u7684\u4e09\u4e2a\u90e8\u5206",description:"\u94fe\u63a5\uff1a1013.\u5c06\u6570\u7ec4\u5206\u6210\u548c\u76f8\u7b49\u7684\u4e09\u4e2a\u90e8\u5206",source:"@site/docs/leetcode/1001-1100/1013.\u5c06\u6570\u7ec4\u5206\u6210\u548c\u76f8\u7b49\u7684\u4e09\u4e2a\u90e8\u5206.md",sourceDirName:"leetcode/1001-1100",slug:"/leetcode/1001-1100/\u5c06\u6570\u7ec4\u5206\u6210\u548c\u76f8\u7b49\u7684\u4e09\u4e2a\u90e8\u5206",permalink:"/docs/leetcode/1001-1100/\u5c06\u6570\u7ec4\u5206\u6210\u548c\u76f8\u7b49\u7684\u4e09\u4e2a\u90e8\u5206",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1013,frontMatter:{},sidebar:"journal",previous:{title:"1012.\u81f3\u5c11\u67091\u4f4d\u91cd\u590d\u7684\u6570\u5b57",permalink:"/docs/leetcode/1001-1100/\u81f3\u5c11\u67091\u4f4d\u91cd\u590d\u7684\u6570\u5b57"},next:{title:"1014.\u6700\u4f73\u89c2\u5149\u7ec4\u5408",permalink:"/docs/leetcode/1001-1100/\u6700\u4f73\u89c2\u5149\u7ec4\u5408"}},c={},a=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"1013\u5c06\u6570\u7ec4\u5206\u6210\u548c\u76f8\u7b49\u7684\u4e09\u4e2a\u90e8\u5206",children:"1013.\u5c06\u6570\u7ec4\u5206\u6210\u548c\u76f8\u7b49\u7684\u4e09\u4e2a\u90e8\u5206"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/partition-array-into-three-parts-with-equal-sum",children:"1013.\u5c06\u6570\u7ec4\u5206\u6210\u548c\u76f8\u7b49\u7684\u4e09\u4e2a\u90e8\u5206"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 arr\uff0c\u53ea\u6709\u53ef\u4ee5\u5c06\u5176\u5212\u5206\u4e3a\u4e09\u4e2a\u548c\u76f8\u7b49\u7684 \u975e\u7a7a \u90e8\u5206\u65f6\u624d\u8fd4\u56de true\uff0c\u5426\u5219\u8fd4\u56de false\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-21"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a248ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a26.3MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\ndef canThreePartsEqualSum(self, arr: List[int]) -> bool:\n    print(arr)\n    n = len(arr)\n    nsum = sum(arr)\n    print(nsum)\n    if nsum / 3 != nsum // 3:\n        return False\n    num = nsum // 3\n    f: bool = False\n    def dfs(i: int, frag: int):\n        nonlocal f\n        if i == n:\n            if frag == 3:\n                f = True\n            return\n        vsum = 0\n        for i in range(i, n):\n            vsum += arr[i]\n            if vsum == num:\n                dfs(i + 1, frag + 1)\n    dfs(0, 0)\n    return f\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>l});var r=t(30758);const s={},o=r.createContext(s);function i(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);