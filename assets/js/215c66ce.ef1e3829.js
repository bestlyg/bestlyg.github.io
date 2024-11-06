"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[47504],{9582:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(86070),s=t(31503);const i={},o="\u6808(Stack)",c={id:"\u6570\u636e\u7ed3\u6784/\u6808/\u6808",title:"\u6808(Stack)",description:"\u7279\u6b8a\u7ebf\u6027\u8868\uff0c\u5c31\u6709\u5148\u8fdb\u540e\u51fa\u7684\u7279\u6027\uff0c\u53ea\u80fd\u5728\u4e00\u7aef\u8fdb\u884c\u64cd\u4f5c\u3002",source:"@site/docs/\u6570\u636e\u7ed3\u6784/\u6808/\u6808.mdx",sourceDirName:"\u6570\u636e\u7ed3\u6784/\u6808",slug:"/\u6570\u636e\u7ed3\u6784/\u6808/",permalink:"/docs/\u6570\u636e\u7ed3\u6784/\u6808/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"\u96c6\u5408(Set)",permalink:"/docs/\u6570\u636e\u7ed3\u6784/\u6620\u5c04/\u96c6\u5408"},next:{title:"\u6811(Tree)",permalink:"/docs/\u6570\u636e\u7ed3\u6784/\u6811/"}},a={},l=[{value:"\u6838\u5fc3\u4ee3\u7801",id:"\u6838\u5fc3\u4ee3\u7801",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u6808stack",children:"\u6808(Stack)"})}),"\n",(0,r.jsx)(n.p,{children:"\u7279\u6b8a\u7ebf\u6027\u8868\uff0c\u5c31\u6709\u5148\u8fdb\u540e\u51fa\u7684\u7279\u6027\uff0c\u53ea\u80fd\u5728\u4e00\u7aef\u8fdb\u884c\u64cd\u4f5c\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6838\u5fc3\u4ee3\u7801",children:"\u6838\u5fc3\u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { ErrorEnum, ERROR_EMPTY_ELEMENT, throwError } from '@/shared';\n\nexport interface IStack<T> {\n  /** \u6808\u5185\u5143\u7d20\u6570\u91cf */\n  size: number;\n  /** \u6808\u9876\u5143\u7d20 */\n  top(): T;\n  /** \u5165\u6808 */\n  push(val: T): void;\n  /** \u51fa\u6808 */\n  pop(): T;\n}\nexport class Stack<T> implements IStack<T> {\n  private list: T[] = [];\n  get size() {\n    return this.list.length;\n  }\n  top(): T {\n    this.checkRange();\n    return this.list[this.size - 1];\n  }\n  push(val: T): void {\n    this.list.push(val);\n  }\n  pop(): T {\n    this.checkRange();\n    return this.list.pop()!;\n  }\n  private checkRange() {\n    if (this.size === 0) {\n      throwError(ERROR_EMPTY_ELEMENT, ErrorEnum.range);\n    }\n  }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(30758);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);