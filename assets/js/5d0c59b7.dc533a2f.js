"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[42892],{28813:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=t(86070),s=t(25710);const i={},o="\u9762\u8bd5\u989801.07.\u65cb\u8f6c\u77e9\u9635",c={id:"leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.07.\u65cb\u8f6c\u77e9\u9635",title:"\u9762\u8bd5\u989801.07.\u65cb\u8f6c\u77e9\u9635",description:"\u94fe\u63a5\uff1a\u9762\u8bd5\u989801.07.\u65cb\u8f6c\u77e9\u9635",source:"@site/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.07.\u65cb\u8f6c\u77e9\u9635.md",sourceDirName:"leetcode/\u9762\u8bd5\u9898",slug:"/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.07.\u65cb\u8f6c\u77e9\u9635",permalink:"/web/site/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.07.\u65cb\u8f6c\u77e9\u9635",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"\u9762\u8bd5\u989801.05.\u4e00\u6b21\u7f16\u8f91",permalink:"/web/site/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.05.\u4e00\u6b21\u7f16\u8f91"},next:{title:"\u9762\u8bd5\u989801.08.\u96f6\u77e9\u9635",permalink:"/web/site/docs/leetcode/\u9762\u8bd5\u9898/\u9762\u8bd5\u989801.08.\u96f6\u77e9\u9635"}},l={},a=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u9762\u8bd5\u98980107\u65cb\u8f6c\u77e9\u9635",children:"\u9762\u8bd5\u989801.07.\u65cb\u8f6c\u77e9\u9635"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/rotate-matrix-lcci",children:"\u9762\u8bd5\u989801.07.\u65cb\u8f6c\u77e9\u9635"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66\u3001\u77e9\u9635",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u5e45\u7531 N \xd7 N \u77e9\u9635\u8868\u793a\u7684\u56fe\u50cf\uff0c\u5176\u4e2d\u6bcf\u4e2a\u50cf\u7d20\u7684\u5927\u5c0f\u4e3a 4 \u5b57\u8282\u3002\u8bf7\u4f60\u8bbe\u8ba1\u4e00\u79cd\u7b97\u6cd5\uff0c\u5c06\u56fe\u50cf\u65cb\u8f6c 90 \u5ea6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-07"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a100ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a33.8MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8f6c\u6362\u6210\u4fa7\u8fb9\u8bfb\u53d6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {number[][]} matrix\n * @return {void} Do not return anything, modify matrix in-place instead.\n */\nvar rotate = function (matrix) {\n  const result = [];\n  for (let i = 0; i < matrix.length; i++) {\n    const newRow = [];\n    for (let j = matrix.length - 1; j >= 0; j--) {\n      newRow.push(matrix[j][i]);\n    }\n    result.push(newRow);\n  }\n  for (const row in matrix) {\n    matrix[row] = result[row];\n  }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(30758);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);