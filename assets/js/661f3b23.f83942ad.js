"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[19948],{34287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"leetcode/201-300/\u7aa5\u89c6\u8fed\u4ee3\u5668","title":"284.\u7aa5\u89c6\u8fed\u4ee3\u5668","description":"\u94fe\u63a5\uff1a284.\u7aa5\u89c6\u8fed\u4ee3\u5668","source":"@site/docs/leetcode/201-300/284.\u7aa5\u89c6\u8fed\u4ee3\u5668.md","sourceDirName":"leetcode/201-300","slug":"/leetcode/201-300/\u7aa5\u89c6\u8fed\u4ee3\u5668","permalink":"/docs/leetcode/201-300/\u7aa5\u89c6\u8fed\u4ee3\u5668","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":284,"frontMatter":{},"sidebar":"journal","previous":{"title":"283.\u79fb\u52a8\u96f6","permalink":"/docs/leetcode/201-300/\u79fb\u52a8\u96f6"},"next":{"title":"287.\u5bfb\u627e\u91cd\u590d\u6570","permalink":"/docs/leetcode/201-300/\u5bfb\u627e\u91cd\u590d\u6570"}}');var s=n(25105),i=n(8556);const c={},a="284.\u7aa5\u89c6\u8fed\u4ee3\u5668",l={},o=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"284\u7aa5\u89c6\u8fed\u4ee3\u5668",children:"284.\u7aa5\u89c6\u8fed\u4ee3\u5668"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(t.a,{href:"https://leetcode.cn/problems/peeking-iterator",children:"284.\u7aa5\u89c6\u8fed\u4ee3\u5668"}),(0,s.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u6570\u7ec4\u3001\u8fed\u4ee3\u5668",(0,s.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u8fed\u4ee3\u5668\u7c7b\u7684\u63a5\u53e3\uff0c\u63a5\u53e3\u5305\u542b\u4e24\u4e2a\u65b9\u6cd5\uff1a\xa0next()\xa0 \u548c \xa0hasNext()\u3002\u8bbe\u8ba1\u5e76\u5b9e\u73b0\u4e00\u4e2a\u652f\u6301 \xa0peek()\xa0 \u64cd\u4f5c\u7684\u9876\u7aef\u8fed\u4ee3\u5668 -- \u5176\u672c\u8d28\u5c31\u662f\u628a\u539f\u672c\u5e94\u7531 \xa0next()\xa0 \u65b9\u6cd5\u8fd4\u56de\u7684\u5143\u7d20 \xa0peek()\xa0 \u51fa\u6765\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-17"}),"\n",(0,s.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a75ms"}),"\n",(0,s.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a35MB"}),"\n",(0,s.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,s.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7f13\u5b58\u503c"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"class PeekingIterator {\n  constructor(iterator) {\n    this.iterator = iterator;\n    this.cacheNext = iterator.next();\n    this.cacheHasNext = iterator.hasNext();\n  }\n  /**\n   * @return {number}\n   */\n  peek() {\n    return this.cacheNext;\n  }\n  /**\n   * @return {number}\n   */\n  next() {\n    const cache = this.cacheNext;\n    this.cacheHasNext = this.iterator.hasNext();\n    this.cacheNext = this.iterator.next();\n    return cache;\n  }\n  /**\n   * @return {boolean}\n   */\n  hasNext() {\n    return this.cacheHasNext;\n  }\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-05"}),"\n",(0,s.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,s.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.4MB"}),"\n",(0,s.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u50a8\u5b58\u4e0b\u4e00\u4e2a\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class PeekingIterator {\n  private nextVal: number;\n  private nextState: boolean;\n  constructor(private iterator: Iterator) {\n    this.next();\n  }\n  peek(): number {\n    return this.nextVal;\n  }\n  next(): number {\n    const ans = this.nextVal;\n    this.nextState = this.iterator.hasNext();\n    this.nextVal = this.iterator.next();\n    return ans;\n  }\n  hasNext(): boolean {\n    return this.nextState;\n  }\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8556:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var r=n(58101);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);