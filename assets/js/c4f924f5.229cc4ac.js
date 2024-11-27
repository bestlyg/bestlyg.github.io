"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[97352],{96218:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/501-600/\u6309\u6743\u91cd\u968f\u673a\u9009\u62e9","title":"528.\u6309\u6743\u91cd\u968f\u673a\u9009\u62e9","description":"\u94fe\u63a5\uff1a528.\u6309\u6743\u91cd\u968f\u673a\u9009\u62e9","source":"@site/docs/leetcode/501-600/528.\u6309\u6743\u91cd\u968f\u673a\u9009\u62e9.md","sourceDirName":"leetcode/501-600","slug":"/leetcode/501-600/\u6309\u6743\u91cd\u968f\u673a\u9009\u62e9","permalink":"/docs/leetcode/501-600/\u6309\u6743\u91cd\u968f\u673a\u9009\u62e9","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":528,"frontMatter":{},"sidebar":"journal","previous":{"title":"526.\u4f18\u7f8e\u7684\u6392\u5217","permalink":"/docs/leetcode/501-600/\u4f18\u7f8e\u7684\u6392\u5217"},"next":{"title":"529.\u626b\u96f7\u6e38\u620f","permalink":"/docs/leetcode/501-600/\u626b\u96f7\u6e38\u620f"}}');var r=t(86070),i=t(31503);const c={},l="528.\u6309\u6743\u91cd\u968f\u673a\u9009\u62e9",o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"528\u6309\u6743\u91cd\u968f\u673a\u9009\u62e9",children:"528.\u6309\u6743\u91cd\u968f\u673a\u9009\u62e9"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/random-pick-with-weight",children:"528.\u6309\u6743\u91cd\u968f\u673a\u9009\u62e9"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66\u3001\u4e8c\u5206\u67e5\u627e\u3001\u524d\u7f00\u548c\u3001\u968f\u673a\u5316",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6b63\u6574\u6570\u6570\u7ec4 \xa0w \uff0c\u5176\u4e2d \xa0w[i]\xa0 \u4ee3\u8868\u4e0b\u6807 i\xa0 \u7684\u6743\u91cd\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09\uff0c\u8bf7\u5199\u4e00\u4e2a\u51fd\u6570 \xa0pickIndex\xa0\uff0c\u5b83\u53ef\u4ee5\u968f\u673a\u5730\u83b7\u53d6\u4e0b\u6807 i\uff0c\u9009\u53d6\u4e0b\u6807 i\xa0 \u7684\u6982\u7387\u4e0e \xa0w[i]\xa0 \u6210\u6b63\u6bd4\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-20"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a168ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a47.4MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u7f00\u548c\u8fdb\u884c\u5feb\u901f\u67e5\u627e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"class Solution {\n  sums: number[] = [0];\n  constructor(public w: number[]) {\n    for (const num of w) this.sums.push(this.sums[this.sums.length - 1] + num);\n  }\n  pickIndex(): number {\n    const random = this.random();\n    let l = 0;\n    let r = this.sums.length - 1;\n    while (l < r) {\n      const mid = (l + r) >> 1;\n      if (this.sums[mid] <= random) l = mid + 1;\n      else r = mid;\n    }\n    return l - 1;\n  }\n  random(min: number = 0, max: number = this.sums[this.sums.length - 1]): number {\n    return min + ~~(Math.random() * (max - min + 1));\n  }\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-30"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a240ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a47.1MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u524d\u7f00\u548c\u968f\u673a\u53d6\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"class Solution {\n  sums: number;\n  constructor(private w: number[]) {\n    this.sums = w.reduce((total, cur) => total + cur, 0);\n  }\n  pickIndex(): number {\n    let random = this.random();\n    for (let i = 0; i < this.w.length; i++) {\n      const w = this.w[i];\n      if (random <= w) return i;\n      random -= w;\n    }\n    return 0;\n  }\n  random(min: number = 1, max: number = this.sums): number {\n    return min + ~~(Math.random() * (max - min + 1));\n  }\n}\n"})})]})}function m(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var s=t(30758);const r={},i=s.createContext(r);function c(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);