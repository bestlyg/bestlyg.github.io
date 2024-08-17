"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[65252],{29227:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var i=e(86070),r=e(25710);const s={},c="155.\u6700\u5c0f\u6808",l={id:"leetcode/101-200/\u6700\u5c0f\u6808",title:"155.\u6700\u5c0f\u6808",description:"\u94fe\u63a5\uff1a155.\u6700\u5c0f\u6808",source:"@site/docs/leetcode/101-200/155.\u6700\u5c0f\u6808.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u6700\u5c0f\u6808",permalink:"/docs/leetcode/101-200/\u6700\u5c0f\u6808",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:155,frontMatter:{},sidebar:"journal",previous:{title:"154.\u5bfb\u627e\u65cb\u8f6c\u6392\u5e8f\u6570\u7ec4\u4e2d\u7684\u6700\u5c0f\u503cII",permalink:"/docs/leetcode/101-200/\u5bfb\u627e\u65cb\u8f6c\u6392\u5e8f\u6570\u7ec4\u4e2d\u7684\u6700\u5c0f\u503cII"},next:{title:"160.\u76f8\u4ea4\u94fe\u8868",permalink:"/docs/leetcode/101-200/\u76f8\u4ea4\u94fe\u8868"}},a={},o=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function h(n){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"155\u6700\u5c0f\u6808",children:"155.\u6700\u5c0f\u6808"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(t.a,{href:"https://leetcode.cn/problems/min-stack",children:"155.\u6700\u5c0f\u6808"}),(0,i.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u8bbe\u8ba1",(0,i.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bbe\u8ba1\u4e00\u4e2a\u652f\u6301 push \uff0cpop \uff0ctop \u64cd\u4f5c\uff0c\u5e76\u80fd\u5728\u5e38\u6570\u65f6\u95f4\u5185\u68c0\u7d22\u5230\u6700\u5c0f\u5143\u7d20\u7684\u6808\u3002"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-05-12"}),"\n",(0,i.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a156ms"}),"\n",(0,i.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.6MB"}),"\n",(0,i.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,i.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f18\u5316\u68c0\u7d22\u4e3a O1\u3002"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"/**\n * initialize your data structure here.\n */\nclass MinStack {\n  _arr = [];\n  _min = [];\n  /**\n   * @param {number} x\n   * @return {void}\n   */\n  push(x) {\n    this._arr.push(x);\n    const arrLen = this._arr.length - 1;\n    if (this._min.length === 0) this._min.push(0);\n    else {\n      for (let i = 0, len = this._min.length; i < len; i++) {\n        if (this._arr[this._min[i]] > x) {\n          this._min.splice(i, 0, arrLen);\n          return;\n        }\n      }\n      this._min.push(arrLen);\n    }\n  }\n  /**\n   * @return {void}\n   */\n  pop() {\n    this._min = this._min.filter(arrIndex => arrIndex !== this._arr.length - 1);\n    this._arr.pop();\n  }\n  /**\n   * @return {number}\n   */\n  top() {\n    return this._arr[this._arr.length - 1];\n  }\n  /**\n   * @return {number}\n   */\n  getMin() {\n    return this._arr[this._min[0]];\n  }\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-19"}),"\n",(0,i.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a112ms"}),"\n",(0,i.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a46MB"}),"\n",(0,i.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u50a8\u5b58\u5355\u8c03\u6808\u3002"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"class MinStack {\n  private stack: number[] = [];\n  private get topStack() {\n    return this.stack[this.stack.length - 1];\n  }\n  private minStack: number[] = [];\n  private get topMinStack() {\n    return this.minStack[this.minStack.length - 1];\n  }\n  push(val: number): void {\n    this.stack.push(val);\n    if (this.minStack.length === 0 || this.topMinStack >= val) this.minStack.push(val);\n  }\n  pop(): void {\n    if (this.topStack === this.topMinStack) this.minStack.pop();\n    this.stack.pop();\n  }\n  top(): number {\n    return this.topStack;\n  }\n  getMin(): number {\n    return this.topMinStack;\n  }\n}\n"})})]})}function p(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},25710:(n,t,e)=>{e.d(t,{R:()=>c,x:()=>l});var i=e(30758);const r={},s=i.createContext(r);function c(n){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function l(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(s.Provider,{value:t},n.children)}}}]);