"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[13032],{65186:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(86070),s=t(31503);const i={},l="1423.\u53ef\u83b7\u5f97\u7684\u6700\u5927\u70b9\u6570",c={id:"leetcode/1401-1500/\u53ef\u83b7\u5f97\u7684\u6700\u5927\u70b9\u6570",title:"1423.\u53ef\u83b7\u5f97\u7684\u6700\u5927\u70b9\u6570",description:"\u94fe\u63a5\uff1a1423.\u53ef\u83b7\u5f97\u7684\u6700\u5927\u70b9\u6570",source:"@site/docs/leetcode/1401-1500/1423.\u53ef\u83b7\u5f97\u7684\u6700\u5927\u70b9\u6570.md",sourceDirName:"leetcode/1401-1500",slug:"/leetcode/1401-1500/\u53ef\u83b7\u5f97\u7684\u6700\u5927\u70b9\u6570",permalink:"/docs/leetcode/1401-1500/\u53ef\u83b7\u5f97\u7684\u6700\u5927\u70b9\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1423,frontMatter:{},sidebar:"journal",previous:{title:"1422.\u5206\u5272\u5b57\u7b26\u4e32\u7684\u6700\u5927\u5f97\u5206",permalink:"/docs/leetcode/1401-1500/\u5206\u5272\u5b57\u7b26\u4e32\u7684\u6700\u5927\u5f97\u5206"},next:{title:"1431.\u62e5\u6709\u6700\u591a\u7cd6\u679c\u7684\u5b69\u5b50",permalink:"/docs/leetcode/1401-1500/\u62e5\u6709\u6700\u591a\u7cd6\u679c\u7684\u5b69\u5b50"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"1423\u53ef\u83b7\u5f97\u7684\u6700\u5927\u70b9\u6570",children:"1423.\u53ef\u83b7\u5f97\u7684\u6700\u5927\u70b9\u6570"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/maximum-points-you-can-obtain-from-cards",children:"1423.\u53ef\u83b7\u5f97\u7684\u6700\u5927\u70b9\u6570"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u524d\u7f00\u548c\u3001\u6ed1\u52a8\u7a97\u53e3",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 cardPoints \u548c\u6574\u6570 k\uff0c\u8bf7\u4f60\u8fd4\u56de\u53ef\u4ee5\u83b7\u5f97\u7684\u6700\u5927\u70b9\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-06"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46.5MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u6ed1\u52a8\u7a97\u53e3\u51cf\u5c11\u6b21\u6570\u5224\u65ad\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"function maxScore(cardPoints: number[], k: number): number {\n  const len = cardPoints.length;\n  let rightNum = 0;\n  let num = cardPoints.slice(0, k).reduce((total, cur) => total + cur, 0);\n  let max = num;\n  while (rightNum < k) {\n    max = Math.max(\n      max,\n      (num = num - cardPoints[k - rightNum - 1] + cardPoints[len - rightNum - 1])\n    );\n    rightNum++;\n  }\n  return max;\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-03"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a26.23MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6ed1\u52a8\u7a97\u53e3\u8bb0\u5f55\u5de6\u53f3\u4e24\u4fa7\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def maxScore(self, cardPoints: List[int], k: int) -> int:\n        n = len(cardPoints)\n        l = sum(cardPoints[0:k])\n        r = 0\n        ans = l\n        for i in range(k):\n            r += cardPoints[n - 1 - i]\n            l -= cardPoints[k - 1 - i]\n            ans = max(ans, l + r)\n        return ans\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-12-03"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a3.19MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn max_score(card_points: Vec<i32>, k: i32) -> i32 {\n        let k = k as usize;\n        let n = card_points.len();\n        let mut l = card_points[0..k].iter().sum::<i32>();\n        let mut r = 0;\n        let mut ans = l;\n        for i in 0..k {\n            r += card_points[n - 1 - i];\n            l -= card_points[k - 1 - i];\n            ans = ans.max(l + r);\n        }\n        ans\n    }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var r=t(30758);const s={},i=r.createContext(s);function l(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);