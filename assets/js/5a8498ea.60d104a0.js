"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[16288],{94149:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=t(86070),s=t(25710);const i={},c="LCR146.\u87ba\u65cb\u904d\u5386\u4e8c\u7ef4\u6570\u7ec4",o={id:"leetcode/1-100/LCR146.\u87ba\u65cb\u904d\u5386\u4e8c\u7ef4\u6570\u7ec4",title:"LCR146.\u87ba\u65cb\u904d\u5386\u4e8c\u7ef4\u6570\u7ec4",description:"\u94fe\u63a5\uff1aLCR146.\u87ba\u65cb\u904d\u5386\u4e8c\u7ef4\u6570\u7ec4",source:"@site/docs/leetcode/1-100/LCR146.\u87ba\u65cb\u904d\u5386\u4e8c\u7ef4\u6570\u7ec4.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/LCR146.\u87ba\u65cb\u904d\u5386\u4e8c\u7ef4\u6570\u7ec4",permalink:"/web/site/docs/leetcode/1-100/LCR146.\u87ba\u65cb\u904d\u5386\u4e8c\u7ef4\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"LCR143.\u5b50\u7ed3\u6784\u5224\u65ad",permalink:"/web/site/docs/leetcode/1-100/LCR143.\u5b50\u7ed3\u6784\u5224\u65ad"},next:{title:"LCR152.\u9a8c\u8bc1\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u540e\u5e8f\u904d\u5386\u5e8f\u5217",permalink:"/web/site/docs/leetcode/1-100/LCR152.\u9a8c\u8bc1\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u540e\u5e8f\u904d\u5386\u5e8f\u5217"}},l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"lcr146\u87ba\u65cb\u904d\u5386\u4e8c\u7ef4\u6570\u7ec4",children:"LCR146.\u87ba\u65cb\u904d\u5386\u4e8c\u7ef4\u6570\u7ec4"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof",children:"LCR146.\u87ba\u65cb\u904d\u5386\u4e8c\u7ef4\u6570\u7ec4"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u77e9\u9635\u3001\u6a21\u62df",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8f93\u5165\u4e00\u4e2a\u77e9\u9635\uff0c\u6309\u7167\u4ece\u5916\u5411\u91cc\u4ee5\u987a\u65f6\u9488\u7684\u987a\u5e8f\u4f9d\u6b21\u6253\u5370\u51fa\u6bcf\u4e00\u4e2a\u6570\u5b57\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-06-05"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.6MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u5224\u65ad\u6bcf\u4e00\u5708"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function spiralOrder(matrix: number[][]): number[] {\n  const row = matrix.length;\n  if (row === 0) return [];\n  else if (row === 1) return matrix[0];\n  const ans: number[] = [];\n  const col = matrix[0].length;\n  spiral(0, row - 1, 0, col - 1);\n  return ans;\n  function spiral(startI: number, endI: number, startJ: number, endJ: number): void {\n    if (endI < startI || endJ < startJ) return;\n    for (let i = startJ; i <= endJ; i++) ans.push(matrix[startI][i]);\n    for (let i = startI + 1; i <= endI; i++) ans.push(matrix[i][endJ]);\n    for (let i = endJ - 1; startI !== endI && i >= startJ; i--) ans.push(matrix[endI][i]);\n    for (let i = endI - 1; startJ !== endJ && i >= startI + 1; i--) ans.push(matrix[i][startJ]);\n    if (startI !== endI && startJ !== endJ) spiral(startI + 1, endI - 1, startJ + 1, endJ - 1);\n  }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(30758);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);