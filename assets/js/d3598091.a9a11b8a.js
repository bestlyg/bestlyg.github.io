"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[77400],{1420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(86070),r=t(25710);const o={},i="3072.\u5c06\u5143\u7d20\u5206\u914d\u5230\u4e24\u4e2a\u6570\u7ec4\u4e2dII",c={id:"leetcode/3001-3100/\u5c06\u5143\u7d20\u5206\u914d\u5230\u4e24\u4e2a\u6570\u7ec4\u4e2dII",title:"3072.\u5c06\u5143\u7d20\u5206\u914d\u5230\u4e24\u4e2a\u6570\u7ec4\u4e2dII",description:"\u94fe\u63a5\uff1a3072.\u5c06\u5143\u7d20\u5206\u914d\u5230\u4e24\u4e2a\u6570\u7ec4\u4e2dII",source:"@site/docs/leetcode/3001-3100/3072.\u5c06\u5143\u7d20\u5206\u914d\u5230\u4e24\u4e2a\u6570\u7ec4\u4e2dII.md",sourceDirName:"leetcode/3001-3100",slug:"/leetcode/3001-3100/\u5c06\u5143\u7d20\u5206\u914d\u5230\u4e24\u4e2a\u6570\u7ec4\u4e2dII",permalink:"/docs/leetcode/3001-3100/\u5c06\u5143\u7d20\u5206\u914d\u5230\u4e24\u4e2a\u6570\u7ec4\u4e2dII",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3072,frontMatter:{},sidebar:"journal",previous:{title:"3067.\u5728\u5e26\u6743\u6811\u7f51\u7edc\u4e2d\u7edf\u8ba1\u53ef\u8fde\u63a5\u670d\u52a1\u5668\u5bf9\u6570\u76ee",permalink:"/docs/leetcode/3001-3100/\u5728\u5e26\u6743\u6811\u7f51\u7edc\u4e2d\u7edf\u8ba1\u53ef\u8fde\u63a5\u670d\u52a1\u5668\u5bf9\u6570\u76ee"},next:{title:"3096.\u5f97\u5230\u66f4\u591a\u5206\u6570\u7684\u6700\u5c11\u5173\u5361\u6570\u76ee",permalink:"/docs/leetcode/3001-3100/\u5f97\u5230\u66f4\u591a\u5206\u6570\u7684\u6700\u5c11\u5173\u5361\u6570\u76ee"}},l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"3072\u5c06\u5143\u7d20\u5206\u914d\u5230\u4e24\u4e2a\u6570\u7ec4\u4e2dii",children:"3072.\u5c06\u5143\u7d20\u5206\u914d\u5230\u4e24\u4e2a\u6570\u7ec4\u4e2dII"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/distribute-elements-into-two-arrays-ii",children:"3072.\u5c06\u5143\u7d20\u5206\u914d\u5230\u4e24\u4e2a\u6570\u7ec4\u4e2dII"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u72b6\u6570\u7ec4\u3001\u7ebf\u6bb5\u6811\u3001\u6570\u7ec4\u3001\u6a21\u62df",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u6574\u6570\u6570\u7ec4 result \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-06-05"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a6345ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a33.59MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6709\u5e8f\u6570\u7ec4\u5b58\u50a8\u540e\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from sortedcontainers import SortedList\n    class Solution:\n        def resultArray(self, nums: List[int]) -> List[int]:\n            res1 = [nums[0]]\n            sorted1 = SortedList(res1)\n            res2 = [nums[1]]\n            sorted2 = SortedList(res2)\n            for num in nums[2:]:\n                cnt1 = len(res1) - bisect_right(sorted1, num)\n                cnt2 = len(res2) - bisect_right(sorted2, num)\n                if cnt1 > cnt2 or (cnt1 == cnt2 and len(res1) <= len(res2)):\n                    res1.append(num)\n                    sorted1.add(num)\n                else:\n                    res2.append(num)\n                    sorted2.add(num)\n            return res1 + res2\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(30758);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);