"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[70191],{39283:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(86070),r=t(25710);const i={},o="911.\u5728\u7ebf\u9009\u4e3e",c={id:"leetcode/901-1000/\u5728\u7ebf\u9009\u4e3e",title:"911.\u5728\u7ebf\u9009\u4e3e",description:"\u94fe\u63a5\uff1a911.\u5728\u7ebf\u9009\u4e3e",source:"@site/docs/leetcode/901-1000/911.\u5728\u7ebf\u9009\u4e3e.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u5728\u7ebf\u9009\u4e3e",permalink:"/docs/leetcode/901-1000/\u5728\u7ebf\u9009\u4e3e",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:911,frontMatter:{},sidebar:"journal",previous:{title:"909.\u86c7\u68af\u68cb",permalink:"/docs/leetcode/901-1000/\u86c7\u68af\u68cb"},next:{title:"912.\u6392\u5e8f\u6570\u7ec4",permalink:"/docs/leetcode/901-1000/\u6392\u5e8f\u6570\u7ec4"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"911\u5728\u7ebf\u9009\u4e3e",children:"911.\u5728\u7ebf\u9009\u4e3e"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/online-election",children:"911.\u5728\u7ebf\u9009\u4e3e"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u4e8c\u5206\u67e5\u627e",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e24\u4e2a\u6574\u6570\u6570\u7ec4 persons \u548c times \u3002\u5728\u9009\u4e3e\u4e2d\uff0c\u7b2c \xa0i\xa0 \u5f20\u7968\u662f\u5728\u65f6\u523b\u4e3a \xa0times[i]\xa0 \u65f6\u6295\u7ed9\u5019\u9009\u4eba persons[i]\xa0 \u7684\u3002\u5bf9\u4e8e\u53d1\u751f\u5728\u65f6\u523b t \u7684\u6bcf\u4e2a\u67e5\u8be2\uff0c\u9700\u8981\u627e\u51fa\u5728 \xa0t \u65f6\u523b\u5728\u9009\u4e3e\u4e2d\u9886\u5148\u7684\u5019\u9009\u4eba\u7684\u7f16\u53f7\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-11"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a292ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a51.5MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u521d\u59cb\u5316\u65f6\u8bb0\u5f55\u6bcf\u4e2a\u65f6\u523b\u7684\u83b7\u80dc\u4eba\u6570\uff0c\u904d\u5386\u7528\u4e8c\u5206\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class TopVotedCandidate {\n  arr: number[] = [];\n  constructor(persons: number[], private times: number[]) {\n    const n = persons.length;\n    const temp = new Array(n).fill(0);\n    let max = 0;\n    for (const person of persons) {\n      if (++temp[person] >= temp[max]) max = person;\n      this.arr.push(max);\n    }\n  }\n  q(t: number): number {\n    let l = 0;\n    let r = this.times.length - 1;\n    while (l < r) {\n      const mid = (l + r + 1) >> 1;\n      if (this.times[mid] <= t) l = mid;\n      else r = mid - 1;\n    }\n    return this.arr[l];\n  }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(30758);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);