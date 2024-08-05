"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[68466],{89074:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var r=t(86070),o=t(25710);const s={},l="1074.\u5143\u7d20\u548c\u4e3a\u76ee\u6807\u503c\u7684\u5b50\u77e9\u9635\u6570\u91cf",i={id:"leetcode/1001-1100/\u5143\u7d20\u548c\u4e3a\u76ee\u6807\u503c\u7684\u5b50\u77e9\u9635\u6570\u91cf",title:"1074.\u5143\u7d20\u548c\u4e3a\u76ee\u6807\u503c\u7684\u5b50\u77e9\u9635\u6570\u91cf",description:"\u94fe\u63a5\uff1a1074.\u5143\u7d20\u548c\u4e3a\u76ee\u6807\u503c\u7684\u5b50\u77e9\u9635\u6570\u91cf",source:"@site/docs/leetcode/1001-1100/1074.\u5143\u7d20\u548c\u4e3a\u76ee\u6807\u503c\u7684\u5b50\u77e9\u9635\u6570\u91cf.md",sourceDirName:"leetcode/1001-1100",slug:"/leetcode/1001-1100/\u5143\u7d20\u548c\u4e3a\u76ee\u6807\u503c\u7684\u5b50\u77e9\u9635\u6570\u91cf",permalink:"/web/site/docs/leetcode/1001-1100/\u5143\u7d20\u548c\u4e3a\u76ee\u6807\u503c\u7684\u5b50\u77e9\u9635\u6570\u91cf",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1074,frontMatter:{},sidebar:"journal",previous:{title:"1073.\u8d1f\u4e8c\u8fdb\u5236\u6570\u76f8\u52a0",permalink:"/web/site/docs/leetcode/1001-1100/\u8d1f\u4e8c\u8fdb\u5236\u6570\u76f8\u52a0"},next:{title:"1078.Bigram\u5206\u8bcd",permalink:"/web/site/docs/leetcode/1001-1100/Bigram\u5206\u8bcd"}},c={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"1074\u5143\u7d20\u548c\u4e3a\u76ee\u6807\u503c\u7684\u5b50\u77e9\u9635\u6570\u91cf",children:"1074.\u5143\u7d20\u548c\u4e3a\u76ee\u6807\u503c\u7684\u5b50\u77e9\u9635\u6570\u91cf"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/number-of-submatrices-that-sum-to-target",children:"1074.\u5143\u7d20\u548c\u4e3a\u76ee\u6807\u503c\u7684\u5b50\u77e9\u9635\u6570\u91cf"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u77e9\u9635\u3001\u524d\u7f00\u548c",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u51fa\u77e9\u9635 matrix \u548c\u76ee\u6807\u503c target\uff0c\u8fd4\u56de\u5143\u7d20\u603b\u548c\u7b49\u4e8e\u76ee\u6807\u503c\u7684\u975e\u7a7a\u5b50\u77e9\u9635\u7684\u6570\u91cf\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-29"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a500ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.3MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u66b4\u529b\u5faa\u73af\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function numSubmatrixSumTarget(matrix: number[][], target: number): number {\n  const rowLen = matrix.length;\n  const colLen = matrix[0].length;\n  const prefixSumList: number[][] = new Array(rowLen + 1)\n    .fill(0)\n    .map(_ => new Array(colLen + 1).fill(0));\n  for (let row = 0; row < rowLen; row++) {\n    for (let col = 0; col < colLen; col++) {\n      prefixSumList[row + 1][col + 1] =\n        prefixSumList[row + 1][col] +\n        prefixSumList[row][col + 1] -\n        prefixSumList[row][col] +\n        matrix[row][col];\n    }\n  }\n  let ans = 0;\n  for (let endRow = 0; endRow < rowLen; endRow++) {\n    for (let endCol = 0; endCol < colLen; endCol++) {\n      for (let startRow = 0; startRow <= endRow; startRow++) {\n        for (let startCol = 0; startCol <= endCol; startCol++) {\n          if (\n            prefixSumList[endRow + 1][endCol + 1] -\n              prefixSumList[endRow + 1][startCol] -\n              prefixSumList[startRow][endCol + 1] +\n              prefixSumList[startRow][startCol] ===\n            target\n          ) {\n            ans++;\n          }\n        }\n      }\n    }\n  }\n  return ans;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(30758);const o={},s=r.createContext(o);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);