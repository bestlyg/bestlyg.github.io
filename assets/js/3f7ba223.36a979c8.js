"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[73519],{6664:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var t=s(86070),i=s(25710);const l={},o="37.\u89e3\u6570\u72ec",r={id:"leetcode/1-100/\u89e3\u6570\u72ec",title:"37.\u89e3\u6570\u72ec",description:"\u94fe\u63a5\uff1a37.\u89e3\u6570\u72ec",source:"@site/docs/leetcode/1-100/37.\u89e3\u6570\u72ec.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u89e3\u6570\u72ec",permalink:"/docs/leetcode/1-100/\u89e3\u6570\u72ec",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:37,frontMatter:{},sidebar:"journal",previous:{title:"36.\u6709\u6548\u7684\u6570\u72ec",permalink:"/docs/leetcode/1-100/\u6709\u6548\u7684\u6570\u72ec"},next:{title:"38.\u5916\u89c2\u6570\u5217",permalink:"/docs/leetcode/1-100/\u5916\u89c2\u6570\u5217"}},c={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"37\u89e3\u6570\u72ec",children:"37.\u89e3\u6570\u72ec"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/sudoku-solver",children:"37.\u89e3\u6570\u72ec"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u56de\u6eaf\u3001\u77e9\u9635",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7f16\u5199\u4e00\u4e2a\u7a0b\u5e8f\uff0c\u901a\u8fc7\u5df2\u586b\u5145\u7684\u7a7a\u683c\u6765\u89e3\u51b3\u6570\u72ec\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-09-15"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a38.4MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","[\u53c2\u8003\u8fde\u63a5](https://leetcode-cn.com/problems/sudoku-solver/solution/di-gui-hui-su-wei-yun-suan-by-zoffer-3/)\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"class Sudoku {\n  private rows = new Array(9).fill(0);\n  private cols = new Array(9).fill(0);\n  private boxs = Array.from({ length: 3 }, () => new Array(3).fill(0));\n  private emptyCells = new Set<number>();\n  constructor(private board: string[][]) {}\n  solve() {\n    //\u521d\u59cb\u5316\u5df2\u77e5\u7684\u6570\u5b57\n    for (let i = 0; i < 9; i++) {\n      for (let j = 0; j < 9; j++) {\n        const num = this.board[i][j];\n        if (num !== '.') {\n          //\u5c06\u6570\u5b57\u8f6c\u5316\u4e3a\u4e8c\u8fdb\u5236\u6807\u8bb0\n          //1 -> 0b1, 2 -> 0b10, 3 -> 0b100, 4 -> 0b1000 ...\n          const sign = 1 << (Number(num) - 1);\n          this.rows[i] |= sign;\n          this.cols[j] |= sign;\n          this.boxs[Math.floor(i / 3)][Math.floor(j / 3)] |= sign;\n        } else {\n          this.emptyCells.add((i << 4) | j);\n        }\n      }\n    }\n    //\u4e3b\u903b\u8f91\n    return this.fillNext();\n  }\n  fillNext() {\n    let cellInfo = this.getEmptyCell();\n    if (cellInfo === null) {\n      //\u6ca1\u6709\u7a7a\u683c\uff0c\u89e3\u9898\u6210\u529f\n      return true;\n    }\n    let [i, j, possible] = cellInfo;\n    while (possible) {\n      //\u622a\u53d6\u5176\u4e2d\u4e00\u4e2a\u53ef\u80fd\u6027\n      const sign = -possible & possible;\n      //\u586b\u5165\u7a7a\u683c\n      this.fillCell(i, j, sign);\n      //\u7ee7\u7eed\u4e0b\u4e00\u4e2a\u586b\u5145\n      if (this.fillNext()) {\n        //\u586b\u5145\u6210\u529f\n        return true;\n      } else {\n        //\u6392\u9664\u5f53\u524d\u6570\u5b57\n        possible ^= sign;\n        //\u6e05\u7a7a\u7a7a\u683c\n        this.cleanCell(i, j, sign);\n      }\n    }\n    //\u7a77\u5c3d\u6240\u6709\u53ef\u80fd\u6027\uff0c\u56de\u6eaf\n    return false;\n  }\n  getEmptyCell() {\n    let min = 10;\n    let cellInfo = null;\n    for (const id of this.emptyCells) {\n      const i = id >> 4,\n        j = id & 0b1111;\n      const possible = this.getCellPossible(i, j);\n      const count = this.countPossible(possible);\n      if (min > count) {\n        //\u6311\u9009\u53ef\u80fd\u6027\u6700\u5c11\u7684\u683c\u5b50\uff0c\u7406\u8bba\u4e0a\u53ef\u51cf\u5c11\u72af\u9519\u56de\u6eaf\n        cellInfo = [i, j, possible];\n        min = count;\n      }\n    }\n    return cellInfo;\n  }\n  countPossible(possible: number) {\n    //\u8ba1\u7b97\u4e8c\u8fdb\u5236 1 \u7684\u6570\u91cf\n    let count = 0;\n    while (possible) {\n      possible &= possible - 1;\n      count++;\n    }\n    return count;\n  }\n  fillCell(i: number, j: number, sign: number) {\n    //\u5bf9\u5e94\u4f4d\u53d8\u62101\uff0c\u6807\u8bb0\u5360\u7528\n    this.rows[i] |= sign;\n    this.cols[j] |= sign;\n    this.boxs[Math.floor(i / 3)][Math.floor(j / 3)] |= sign;\n    //\u586b\u5165\u7a7a\u683c\n    this.emptyCells.delete((i << 4) | j);\n    this.board[i][j] = String(Math.log2(sign) + 1);\n  }\n  cleanCell(i: number, j: number, sign: number) {\n    //\u5bf9\u5e94\u4f4d\u53d8\u4e3a0\uff0c\u6e05\u9664\u5360\u7528\n    this.rows[i] &= ~sign;\n    this.cols[j] &= ~sign;\n    this.boxs[Math.floor(i / 3)][Math.floor(j / 3)] &= ~sign;\n    //\u6e05\u7a7a\u683c\u5b50\n    this.emptyCells.add((i << 4) | j);\n    this.board[i][j] = '.';\n  }\n  getCellPossible(i: number, j: number) {\n    //\u83b7\u53d6\u683c\u5b50\u53ef\u80fd\u7684\u53d6\u503c\uff0c\u4e8c\u8fdb\u52361\u8868\u793a\u53ef\u9009\n    return (\n      (this.rows[i] | this.cols[j] | this.boxs[Math.floor(i / 3)][Math.floor(j / 3)]) ^ 0b111111111\n    );\n  }\n}\nfunction solveSudoku(board: string[][]): void {\n  new Sudoku(board).solve();\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>r});var t=s(30758);const i={},l=t.createContext(i);function o(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);