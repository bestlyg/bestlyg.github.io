"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[14373],{65826:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=t(86070),s=t(31503);const i={},c="867.\u8f6c\u7f6e\u77e9\u9635",l={id:"leetcode/801-900/\u8f6c\u7f6e\u77e9\u9635",title:"867.\u8f6c\u7f6e\u77e9\u9635",description:"\u94fe\u63a5\uff1a867.\u8f6c\u7f6e\u77e9\u9635",source:"@site/docs/leetcode/801-900/867.\u8f6c\u7f6e\u77e9\u9635.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u8f6c\u7f6e\u77e9\u9635",permalink:"/docs/leetcode/801-900/\u8f6c\u7f6e\u77e9\u9635",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:867,frontMatter:{},sidebar:"journal",previous:{title:"865.\u5177\u6709\u6240\u6709\u6700\u6df1\u8282\u70b9\u7684\u6700\u5c0f\u5b50\u6811",permalink:"/docs/leetcode/801-900/\u5177\u6709\u6240\u6709\u6700\u6df1\u8282\u70b9\u7684\u6700\u5c0f\u5b50\u6811"},next:{title:"868.\u4e8c\u8fdb\u5236\u95f4\u8ddd",permalink:"/docs/leetcode/801-900/\u4e8c\u8fdb\u5236\u95f4\u8ddd"}},o={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"867\u8f6c\u7f6e\u77e9\u9635",children:"867.\u8f6c\u7f6e\u77e9\u9635"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/transpose-matrix",children:"867.\u8f6c\u7f6e\u77e9\u9635"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u77e9\u9635\u3001\u6a21\u62df",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e8c\u7ef4\u6574\u6570\u6570\u7ec4 matrix\uff0c \u8fd4\u56de matrix \u7684 \u8f6c\u7f6e\u77e9\u9635 \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-25"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a100ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.1MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u5faa\u73af\u7eb5\u5411\u53d6\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function transpose(matrix: number[][]): number[][] {\n  const ans: number[][] = [];\n  for (let i = 0, colLen = matrix[0].length; i < colLen; i++) {\n    const arr: number[] = [];\n    for (let j = 0, rowLen = matrix.length; j < rowLen; j++) arr.push(matrix[j][i]);\n    ans.push(arr);\n  }\n  return ans;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-02-25"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.2MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8bfb\u53d6\u6570\u7ec4\u957f\u5ea6\u8fdb\u884c\u7eb5\u5411\u6620\u5c04\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function transpose(matrix: number[][]): number[][] {\n  return matrix[0].map((_, i) => matrix.map(arr => arr[i]));\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(30758);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);