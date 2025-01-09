"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[32793],{33390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"leetcode/501-600/\u968f\u673a\u7ffb\u8f6c\u77e9\u9635","title":"519.\u968f\u673a\u7ffb\u8f6c\u77e9\u9635","description":"\u94fe\u63a5\uff1a519.\u968f\u673a\u7ffb\u8f6c\u77e9\u9635","source":"@site/docs/leetcode/501-600/519.\u968f\u673a\u7ffb\u8f6c\u77e9\u9635.md","sourceDirName":"leetcode/501-600","slug":"/leetcode/501-600/\u968f\u673a\u7ffb\u8f6c\u77e9\u9635","permalink":"/docs/leetcode/501-600/\u968f\u673a\u7ffb\u8f6c\u77e9\u9635","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":519,"frontMatter":{},"sidebar":"journal","previous":{"title":"518.\u96f6\u94b1\u5151\u6362II","permalink":"/docs/leetcode/501-600/\u96f6\u94b1\u5151\u6362II"},"next":{"title":"520.\u68c0\u6d4b\u5927\u5199\u5b57\u6bcd","permalink":"/docs/leetcode/501-600/\u68c0\u6d4b\u5927\u5199\u5b57\u6bcd"}}');var s=t(25105),i=t(8556);const o={},c="519.\u968f\u673a\u7ffb\u8f6c\u77e9\u9635",l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"519\u968f\u673a\u7ffb\u8f6c\u77e9\u9635",children:"519.\u968f\u673a\u7ffb\u8f6c\u77e9\u9635"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/random-flip-matrix",children:"519.\u968f\u673a\u7ffb\u8f6c\u77e9\u9635"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6c34\u5858\u62bd\u6837\u3001\u54c8\u5e0c\u8868\u3001\u6570\u5b66\u3001\u968f\u673a\u5316",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a m x n \u7684\u4e8c\u5143\u77e9\u9635 matrix \uff0c\u4e14\u6240\u6709\u503c\u88ab\u521d\u59cb\u5316\u4e3a 0 \u3002\u8bf7\u4f60\u8bbe\u8ba1\u4e00\u4e2a\u7b97\u6cd5\uff0c\u968f\u673a\u9009\u53d6\u4e00\u4e2a\u6ee1\u8db3 \xa0matrix[i][j] == 0 \u7684\u4e0b\u6807 \xa0(i, j) \uff0c\u5e76\u5c06\u5b83\u7684\u503c\u53d8\u4e3a 1 \u3002\u6240\u6709\u6ee1\u8db3 matrix[i][j] == 0 \u7684\u4e0b\u6807 (i, j) \u88ab\u9009\u53d6\u7684\u6982\u7387\u5e94\u5f53\u5747\u7b49\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-27"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a100ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43.8MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u968f\u673a\u503c\uff0c\u6bcf\u6b21\u904d\u5386\u5230\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u628a\u8be5\u4f4d\u7f6e\u4e0e\u6700\u540e\u4e00\u4e2a\u4f4d\u7f6e\u8fdb\u884c\u4ea4\u6362\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class Solution {\n  map = new Map<number, number>();\n  total: number;\n  constructor(public m: number, public n: number) {\n    this.total = m * n;\n  }\n  flip(): number[] {\n    const num = this.random(0, --this.total);\n    const idx = this.map.get(num) ?? num;\n    this.map.set(num, this.map.get(this.total) ?? this.total);\n    return [Math.floor(idx / this.n), idx % this.n];\n  }\n  reset(): void {\n    this.map.clear();\n    this.total = this.m * this.n;\n  }\n  random(min: number, max: number): number {\n    return min + Math.floor(Math.random() * (max - min + 1));\n  }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(58101);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);