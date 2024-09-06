"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[36590],{60197:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var s=t(86070),r=t(25710);const l={},i="1610.\u53ef\u89c1\u70b9\u7684\u6700\u5927\u6570\u76ee",o={id:"leetcode/1601-1700/\u53ef\u89c1\u70b9\u7684\u6700\u5927\u6570\u76ee",title:"1610.\u53ef\u89c1\u70b9\u7684\u6700\u5927\u6570\u76ee",description:"\u94fe\u63a5\uff1a1610.\u53ef\u89c1\u70b9\u7684\u6700\u5927\u6570\u76ee",source:"@site/docs/leetcode/1601-1700/1610.\u53ef\u89c1\u70b9\u7684\u6700\u5927\u6570\u76ee.md",sourceDirName:"leetcode/1601-1700",slug:"/leetcode/1601-1700/\u53ef\u89c1\u70b9\u7684\u6700\u5927\u6570\u76ee",permalink:"/docs/leetcode/1601-1700/\u53ef\u89c1\u70b9\u7684\u6700\u5927\u6570\u76ee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1610,frontMatter:{},sidebar:"journal",previous:{title:"1609.\u5947\u5076\u6811",permalink:"/docs/leetcode/1601-1700/\u5947\u5076\u6811"},next:{title:"1614.\u62ec\u53f7\u7684\u6700\u5927\u5d4c\u5957\u6df1\u5ea6",permalink:"/docs/leetcode/1601-1700/\u62ec\u53f7\u7684\u6700\u5927\u5d4c\u5957\u6df1\u5ea6"}},c={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1610\u53ef\u89c1\u70b9\u7684\u6700\u5927\u6570\u76ee",children:"1610.\u53ef\u89c1\u70b9\u7684\u6700\u5927\u6570\u76ee"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-number-of-visible-points",children:"1610.\u53ef\u89c1\u70b9\u7684\u6700\u5927\u6570\u76ee"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u51e0\u4f55\u3001\u6570\u7ec4\u3001\u6570\u5b66\u3001\u6392\u5e8f\u3001\u6ed1\u52a8\u7a97\u53e3",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4f60\u80fd\u770b\u5230\u7684\u70b9\u7684\u6700\u5927\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-16"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a572ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a77.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u6bcf\u4e2a\u70b9\u83b7\u53d6\u89d2\u5ea6\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function visiblePoints(points: number[][], angle: number, location: number[]): number {\n  const [x, y] = location;\n  const list: number[] = [];\n  let same = 0;\n  for (const [px, py] of points) {\n    if (px === x && py === y) {\n      same++;\n      continue;\n    }\n    const angle = (Math.atan2(py - y, px - x) * 180) / Math.PI;\n    list.push(angle, angle + 360);\n  }\n  list.sort((a, b) => a - b);\n  const n = list.length;\n  let l = 0;\n  let r = 0;\n  let ans = 0;\n  while (r < n) {\n    while (r < n && list[r] - list[l] <= angle) r++;\n    ans = Math.max(ans, r - l);\n    l++;\n  }\n  return ans + same;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(30758);const r={},l=s.createContext(r);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);