"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[86937],{1147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(86070),s=t(25710);const o={},i="2639.\u67e5\u8be2\u7f51\u683c\u56fe\u4e2d\u6bcf\u4e00\u5217\u7684\u5bbd\u5ea6",l={id:"leetcode/2601-2700/\u67e5\u8be2\u7f51\u683c\u56fe\u4e2d\u6bcf\u4e00\u5217\u7684\u5bbd\u5ea6",title:"2639.\u67e5\u8be2\u7f51\u683c\u56fe\u4e2d\u6bcf\u4e00\u5217\u7684\u5bbd\u5ea6",description:"\u94fe\u63a5\uff1a2639.\u67e5\u8be2\u7f51\u683c\u56fe\u4e2d\u6bcf\u4e00\u5217\u7684\u5bbd\u5ea6",source:"@site/docs/leetcode/2601-2700/2639.\u67e5\u8be2\u7f51\u683c\u56fe\u4e2d\u6bcf\u4e00\u5217\u7684\u5bbd\u5ea6.md",sourceDirName:"leetcode/2601-2700",slug:"/leetcode/2601-2700/\u67e5\u8be2\u7f51\u683c\u56fe\u4e2d\u6bcf\u4e00\u5217\u7684\u5bbd\u5ea6",permalink:"/docs/leetcode/2601-2700/\u67e5\u8be2\u7f51\u683c\u56fe\u4e2d\u6bcf\u4e00\u5217\u7684\u5bbd\u5ea6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2639,frontMatter:{},sidebar:"journal",previous:{title:"2637.\u6709\u65f6\u95f4\u9650\u5236\u7684Promise\u5bf9\u8c61",permalink:"/docs/leetcode/2601-2700/\u6709\u65f6\u95f4\u9650\u5236\u7684Promise\u5bf9\u8c61"},next:{title:"2641.\u4e8c\u53c9\u6811\u7684\u5802\u5144\u5f1f\u8282\u70b9II",permalink:"/docs/leetcode/2601-2700/\u4e8c\u53c9\u6811\u7684\u5802\u5144\u5f1f\u8282\u70b9II"}},c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"2639\u67e5\u8be2\u7f51\u683c\u56fe\u4e2d\u6bcf\u4e00\u5217\u7684\u5bbd\u5ea6",children:"2639.\u67e5\u8be2\u7f51\u683c\u56fe\u4e2d\u6bcf\u4e00\u5217\u7684\u5bbd\u5ea6"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/find-the-width-of-columns-of-a-grid",children:"2639.\u67e5\u8be2\u7f51\u683c\u56fe\u4e2d\u6bcf\u4e00\u5217\u7684\u5bbd\u5ea6"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u77e9\u9635",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u7684 m x n \u6574\u6570\u77e9\u9635 grid \u3002\u77e9\u9635\u4e2d\u67d0\u4e00\u5217\u7684\u5bbd\u5ea6\u662f\u8fd9\u4e00\u5217\u6570\u5b57\u7684\u6700\u5927 \u5b57\u7b26\u4e32\u957f\u5ea6 \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-04-27"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a44ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.66MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def findColumnWidth(self, grid: List[List[int]]) -> List[int]:\n        return [\n            max(len(str(grid[i][j])) for i in range(len(grid)))\n            for j in range(len(grid[0]))\n        ]\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(30758);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);