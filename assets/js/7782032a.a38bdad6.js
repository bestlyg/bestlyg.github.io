"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[31607],{96480:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=r(86070),o=r(31503);const s={},c="304.\u4e8c\u7ef4\u533a\u57df\u548c\u68c0\u7d22-\u77e9\u9635\u4e0d\u53ef\u53d8",l={id:"leetcode/301-400/\u4e8c\u7ef4\u533a\u57df\u548c\u68c0\u7d22-\u77e9\u9635\u4e0d\u53ef\u53d8",title:"304.\u4e8c\u7ef4\u533a\u57df\u548c\u68c0\u7d22-\u77e9\u9635\u4e0d\u53ef\u53d8",description:"\u94fe\u63a5\uff1a304.\u4e8c\u7ef4\u533a\u57df\u548c\u68c0\u7d22-\u77e9\u9635\u4e0d\u53ef\u53d8",source:"@site/docs/leetcode/301-400/304.\u4e8c\u7ef4\u533a\u57df\u548c\u68c0\u7d22-\u77e9\u9635\u4e0d\u53ef\u53d8.md",sourceDirName:"leetcode/301-400",slug:"/leetcode/301-400/\u4e8c\u7ef4\u533a\u57df\u548c\u68c0\u7d22-\u77e9\u9635\u4e0d\u53ef\u53d8",permalink:"/docs/leetcode/301-400/\u4e8c\u7ef4\u533a\u57df\u548c\u68c0\u7d22-\u77e9\u9635\u4e0d\u53ef\u53d8",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:304,frontMatter:{},sidebar:"journal",previous:{title:"303.\u533a\u57df\u548c\u68c0\u7d22-\u6570\u7ec4\u4e0d\u53ef\u53d8",permalink:"/docs/leetcode/301-400/\u533a\u57df\u548c\u68c0\u7d22-\u6570\u7ec4\u4e0d\u53ef\u53d8"},next:{title:"306.\u7d2f\u52a0\u6570",permalink:"/docs/leetcode/301-400/\u7d2f\u52a0\u6570"}},i={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"304\u4e8c\u7ef4\u533a\u57df\u548c\u68c0\u7d22-\u77e9\u9635\u4e0d\u53ef\u53d8",children:"304.\u4e8c\u7ef4\u533a\u57df\u548c\u68c0\u7d22-\u77e9\u9635\u4e0d\u53ef\u53d8"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/range-sum-query-2d-immutable",children:"304.\u4e8c\u7ef4\u533a\u57df\u548c\u68c0\u7d22-\u77e9\u9635\u4e0d\u53ef\u53d8"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u6570\u7ec4\u3001\u77e9\u9635\u3001\u524d\u7f00\u548c",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u7ef4\u77e9\u9635\uff0c\u8ba1\u7b97\u5176\u5b50\u77e9\u5f62\u8303\u56f4\u5185\u5143\u7d20\u7684\u603b\u548c\uff0c\u8be5\u5b50\u77e9\u9635\u7684\u5de6\u4e0a\u89d2\u4e3a (row1, col1) \uff0c\u53f3\u4e0b\u89d2\u4e3a (row2, col2) \u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-02"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a120ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.9MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u524d\u7f00\u548c\u8fdb\u884c\u5feb\u901f\u8ba1\u7b97\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class NumMatrix {\n  private sumMatrix: number[][] = [];\n  constructor(matrix: number[][]) {\n    const rowLen = matrix.length;\n    if (rowLen === 0) return;\n    const colLen = matrix[0].length;\n    for (let row = 0; row < rowLen; row++) {\n      const arr: number[] = [];\n      for (let col = 0; col < colLen; col++) {\n        const num = matrix[row][col];\n        if (col === 0 && row === 0) {\n          arr.push(num);\n        } else if (col === 0) {\n          arr.push(this.sumMatrix[row - 1][col] + num);\n        } else if (row === 0) {\n          arr.push(arr[col - 1] + num);\n        } else {\n          arr.push(\n            this.sumMatrix[row - 1][col] + arr[col - 1] + num - this.sumMatrix[row - 1][col - 1]\n          );\n        }\n      }\n      this.sumMatrix.push(arr);\n    }\n  }\n  sumRegion(row1: number, col1: number, row2: number, col2: number): number {\n    return (\n      this.sumMatrix[row2][col2] -\n      (col1 > 0 ? this.sumMatrix[row2][col1 - 1] : 0) -\n      (row1 > 0 ? this.sumMatrix[row1 - 1][col2] : 0) +\n      (row1 > 0 && col1 > 0 ? this.sumMatrix[row1 - 1][col1 - 1] : 0)\n    );\n  }\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},31503:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>l});var t=r(30758);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);