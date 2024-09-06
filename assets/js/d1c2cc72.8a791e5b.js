"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[38028],{45539:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(86070),o=t(25710);const r={},i="452.\u7528\u6700\u5c11\u6570\u91cf\u7684\u7bad\u5f15\u7206\u6c14\u7403",c={id:"leetcode/401-500/\u7528\u6700\u5c11\u6570\u91cf\u7684\u7bad\u5f15\u7206\u6c14\u7403",title:"452.\u7528\u6700\u5c11\u6570\u91cf\u7684\u7bad\u5f15\u7206\u6c14\u7403",description:"\u94fe\u63a5\uff1a452.\u7528\u6700\u5c11\u6570\u91cf\u7684\u7bad\u5f15\u7206\u6c14\u7403",source:"@site/docs/leetcode/401-500/452.\u7528\u6700\u5c11\u6570\u91cf\u7684\u7bad\u5f15\u7206\u6c14\u7403.md",sourceDirName:"leetcode/401-500",slug:"/leetcode/401-500/\u7528\u6700\u5c11\u6570\u91cf\u7684\u7bad\u5f15\u7206\u6c14\u7403",permalink:"/docs/leetcode/401-500/\u7528\u6700\u5c11\u6570\u91cf\u7684\u7bad\u5f15\u7206\u6c14\u7403",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:452,frontMatter:{},sidebar:"journal",previous:{title:"450.\u5220\u9664\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u8282\u70b9",permalink:"/docs/leetcode/401-500/\u5220\u9664\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u8282\u70b9"},next:{title:"453.\u6700\u5c0f\u64cd\u4f5c\u6b21\u6570\u4f7f\u6570\u7ec4\u5143\u7d20\u76f8\u7b49",permalink:"/docs/leetcode/401-500/\u6700\u5c0f\u64cd\u4f5c\u6b21\u6570\u4f7f\u6570\u7ec4\u5143\u7d20\u76f8\u7b49"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"452\u7528\u6700\u5c11\u6570\u91cf\u7684\u7bad\u5f15\u7206\u6c14\u7403",children:"452.\u7528\u6700\u5c11\u6570\u91cf\u7684\u7bad\u5f15\u7206\u6c14\u7403"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons",children:"452.\u7528\u6700\u5c11\u6570\u91cf\u7684\u7bad\u5f15\u7206\u6c14\u7403"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u6392\u5e8f",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6570\u7ec4 points \uff0c\u5176\u4e2d points [i] = [xstart,xend] \uff0c\u8fd4\u56de\u5f15\u7206\u6240\u6709\u6c14\u7403\u6240\u5fc5\u987b\u5c04\u51fa\u7684\u6700\u5c0f\u5f13\u7bad\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-11-24"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a140ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.9MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","[\u53c2\u8003\u94fe\u63a5](https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons/solution/yong-zui-shao-shu-liang-de-jian-yin-bao-qi-qiu-1-2/)\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function findMinArrowShots(points: number[][]): number {\n  if (points.length === 0) return 0;\n  points.sort(([, p1], [, p2]) => p1 - p2);\n  let [, pos] = points[0];\n  let ans = 1;\n  for (let [b0, b1] of points) {\n    if (b0 > pos) {\n      pos = b1;\n      ans++;\n    }\n  }\n  return ans;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(30758);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);