"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[70526],{1574:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(86070),r=t(25710);const o={},i="3038.\u76f8\u540c\u5206\u6570\u7684\u6700\u5927\u64cd\u4f5c\u6570\u76eeI",c={id:"leetcode/3001-3100/\u76f8\u540c\u5206\u6570\u7684\u6700\u5927\u64cd\u4f5c\u6570\u76eeI",title:"3038.\u76f8\u540c\u5206\u6570\u7684\u6700\u5927\u64cd\u4f5c\u6570\u76eeI",description:"\u94fe\u63a5\uff1a3038.\u76f8\u540c\u5206\u6570\u7684\u6700\u5927\u64cd\u4f5c\u6570\u76eeI",source:"@site/docs/leetcode/3001-3100/3038.\u76f8\u540c\u5206\u6570\u7684\u6700\u5927\u64cd\u4f5c\u6570\u76eeI.md",sourceDirName:"leetcode/3001-3100",slug:"/leetcode/3001-3100/\u76f8\u540c\u5206\u6570\u7684\u6700\u5927\u64cd\u4f5c\u6570\u76eeI",permalink:"/docs/leetcode/3001-3100/\u76f8\u540c\u5206\u6570\u7684\u6700\u5927\u64cd\u4f5c\u6570\u76eeI",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3038,frontMatter:{},sidebar:"journal",previous:{title:"3011.\u5224\u65ad\u4e00\u4e2a\u6570\u7ec4\u662f\u5426\u53ef\u4ee5\u53d8\u4e3a\u6709\u5e8f",permalink:"/docs/leetcode/3001-3100/\u5224\u65ad\u4e00\u4e2a\u6570\u7ec4\u662f\u5426\u53ef\u4ee5\u53d8\u4e3a\u6709\u5e8f"},next:{title:"3040.\u76f8\u540c\u5206\u6570\u7684\u6700\u5927\u64cd\u4f5c\u6570\u76eeII",permalink:"/docs/leetcode/3001-3100/\u76f8\u540c\u5206\u6570\u7684\u6700\u5927\u64cd\u4f5c\u6570\u76eeII"}},l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"3038\u76f8\u540c\u5206\u6570\u7684\u6700\u5927\u64cd\u4f5c\u6570\u76eei",children:"3038.\u76f8\u540c\u5206\u6570\u7684\u6700\u5927\u64cd\u4f5c\u6570\u76eeI"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-number-of-operations-with-the-same-score-i",children:"3038.\u76f8\u540c\u5206\u6570\u7684\u6700\u5927\u64cd\u4f5c\u6570\u76eeI"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6a21\u62df",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5728\u786e\u4fdd \u6240\u6709\u64cd\u4f5c\u5206\u6570\u76f8\u540c \u7684\u524d\u63d0\u4e0b\uff0c\u8bf7\u4f60\u6c42\u51fa \u6700\u591a \u80fd\u8fdb\u884c\u591a\u5c11\u6b21\u64cd\u4f5c\u3002\u8bf7\u4f60\u8fd4\u56de\u6309\u7167\u4e0a\u8ff0\u8981\u6c42 \u6700\u591a \u53ef\u4ee5\u8fdb\u884c\u7684\u64cd\u4f5c\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-06-07"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a33ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.42MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def maxOperations(self, nums: List[int]) -> int:\n        prev = nums[0] + nums[1]\n        res = 1\n        for i in range(3, len(nums), 2):\n            if nums[i] + nums[i - 1] == prev:\n                res += 1\n            else:\n                break\n        return res\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(30758);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);