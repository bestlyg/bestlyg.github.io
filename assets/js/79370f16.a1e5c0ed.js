"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[27230],{6777:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=t(86070),s=t(31503);const c={},l="\u9762\u8bd5\u989816.11.\u8df3\u6c34\u677f",o={id:"leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989816.11.\u8df3\u6c34\u677f",title:"\u9762\u8bd5\u989816.11.\u8df3\u6c34\u677f",description:"\u94fe\u63a5\uff1a\u9762\u8bd5\u989816.11.\u8df3\u6c34\u677f",source:"@site/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989816.11.\u8df3\u6c34\u677f.md",sourceDirName:"leetcode/\u9762\u8bd5\u9898",slug:"/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989816.11.\u8df3\u6c34\u677f",permalink:"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989816.11.\u8df3\u6c34\u677f",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"\u9762\u8bd5\u989816.03.\u4ea4\u70b9",permalink:"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989816.03.\u4ea4\u70b9"},next:{title:"\u9762\u8bd5\u989816.18.\u6a21\u5f0f\u5339\u914d",permalink:"/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989816.18.\u6a21\u5f0f\u5339\u914d"}},i={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u9762\u8bd5\u98981611\u8df3\u6c34\u677f",children:"\u9762\u8bd5\u989816.11.\u8df3\u6c34\u677f"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/diving-board-lcci",children:"\u9762\u8bd5\u989816.11.\u8df3\u6c34\u677f"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4f60\u6b63\u5728\u4f7f\u7528\u4e00\u5806\u6728\u677f\u5efa\u9020\u8df3\u6c34\u677f\u3002\u6709\u4e24\u79cd\u7c7b\u578b\u7684\u6728\u677f\uff0c\u5176\u4e2d\u957f\u5ea6\u8f83\u77ed\u7684\u6728\u677f\u957f\u5ea6\u4e3a shorter\uff0c\u957f\u5ea6\u8f83\u957f\u7684\u6728\u677f\u957f\u5ea6\u4e3a longer\u3002\u4f60\u5fc5\u987b\u6b63\u597d\u4f7f\u7528 k \u5757\u6728\u677f\u3002\u7f16\u5199\u4e00\u4e2a\u65b9\u6cd5\uff0c\u751f\u6210\u8df3\u6c34\u677f\u6240\u6709\u53ef\u80fd\u7684\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-07-08"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a172ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a48.8MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u4f9d\u6b21\u589e\u52a0\u548c\u51cf\u5c11\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function divingBoard(shorter: number, longer: number, k: number): number[] {\n  if (k === 0) return [];\n  const ans = new Set<number>();\n  let l1 = k,\n    l2 = 0;\n  while (l1 !== -1) ans.add(l1-- * shorter + l2++ * longer);\n  return [...ans];\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(30758);const s={},c=r.createContext(s);function l(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);