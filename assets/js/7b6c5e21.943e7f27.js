"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[17984],{70683:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>o,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=r(86070),t=r(25710);const s={},l="1310.\u5b50\u6570\u7ec4\u5f02\u6216\u67e5\u8be2",c={id:"leetcode/1301-1400/\u5b50\u6570\u7ec4\u5f02\u6216\u67e5\u8be2",title:"1310.\u5b50\u6570\u7ec4\u5f02\u6216\u67e5\u8be2",description:"\u94fe\u63a5\uff1a1310.\u5b50\u6570\u7ec4\u5f02\u6216\u67e5\u8be2",source:"@site/docs/leetcode/1301-1400/1310.\u5b50\u6570\u7ec4\u5f02\u6216\u67e5\u8be2.md",sourceDirName:"leetcode/1301-1400",slug:"/leetcode/1301-1400/\u5b50\u6570\u7ec4\u5f02\u6216\u67e5\u8be2",permalink:"/docs/leetcode/1301-1400/\u5b50\u6570\u7ec4\u5f02\u6216\u67e5\u8be2",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1310,frontMatter:{},sidebar:"journal",previous:{title:"1305.\u4e24\u68f5\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u6240\u6709\u5143\u7d20",permalink:"/docs/leetcode/1301-1400/\u4e24\u68f5\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u6240\u6709\u5143\u7d20"},next:{title:"1319.\u8fde\u901a\u7f51\u7edc\u7684\u64cd\u4f5c\u6b21\u6570",permalink:"/docs/leetcode/1301-1400/\u8fde\u901a\u7f51\u7edc\u7684\u64cd\u4f5c\u6b21\u6570"}},u={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"1310\u5b50\u6570\u7ec4\u5f02\u6216\u67e5\u8be2",children:"1310.\u5b50\u6570\u7ec4\u5f02\u6216\u67e5\u8be2"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/xor-queries-of-a-subarray",children:"1310.\u5b50\u6570\u7ec4\u5f02\u6216\u67e5\u8be2"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4\u3001\u524d\u7f00\u548c",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6709\u4e00\u4e2a\u6b63\u6574\u6570\u6570\u7ec4 arr\uff0c\u73b0\u7ed9\u4f60\u4e00\u4e2a\u5bf9\u5e94\u7684\u67e5\u8be2\u6570\u7ec4 queries\uff0c\u5176\u4e2d queries[i] = [Li, Ri]\uff0c\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u7ed9\u5b9a\u67e5\u8be2 queries \u6240\u6709\u7ed3\u679c\u7684\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-12"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a1492ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a52.9MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u76f4\u63a5\u5faa\u73af\u5f02\u6216\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function xorQueries(arr: number[], queries: number[][]): number[] {\n  return queries.map(([start, end]) => {\n    let ans!: number;\n    for (let i = start; i <= end; i++) {\n      if (ans) ans ^= arr[i];\n      else ans = arr[i];\n    }\n    return ans;\n  });\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-12"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a132ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a53.2MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u7f00\u548c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function xorQueries(arr: number[], queries: number[][]): number[] {\n  let num = arr[0];\n  const prefixSumList: number[] = arr.map((v, i) => (i === 0 ? num : (num ^= v)));\n  return queries.map(([start, end]) => prefixSumList[start - 1] ^ prefixSumList[end]);\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-14"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a124ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a52.7MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6811\u72b6\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"class FenwickTree {\n  private arr: number[];\n  constructor(private n: number) {\n    this.arr = new Array(n + 1).fill(0);\n  }\n  add(idx: number, num: number): void {\n    while (idx <= this.n) {\n      this.arr[idx] += num;\n      idx += this.lowbit(idx);\n    }\n  }\n  at(idx: number): number {\n    return this.query(idx) - this.query(idx - 1);\n  }\n  query(idx: number): number {\n    let sum = 0;\n    while (idx) {\n      sum += this.arr[idx];\n      idx -= this.lowbit(idx);\n    }\n    return sum;\n  }\n  private lowbit(num: number) {\n    return num & -num;\n  }\n}\nclass StreamRank {\n  tree = new FenwickTree(50001);\n  track(x: number): void {\n    this.tree.add(x + 1, 1);\n  }\n  getRankOfNumber(x: number): number {\n    return this.tree.query(x + 1);\n  }\n}\n"})})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},25710:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var i=r(30758);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);