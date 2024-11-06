"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[86511],{28191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(86070),s=t(31503);const o={},c="2650.\u8bbe\u8ba1\u53ef\u53d6\u6d88\u51fd\u6570",l={id:"leetcode/2601-2700/\u8bbe\u8ba1\u53ef\u53d6\u6d88\u51fd\u6570",title:"2650.\u8bbe\u8ba1\u53ef\u53d6\u6d88\u51fd\u6570",description:"\u94fe\u63a5\uff1a2650.\u8bbe\u8ba1\u53ef\u53d6\u6d88\u51fd\u6570",source:"@site/docs/leetcode/2601-2700/2650.\u8bbe\u8ba1\u53ef\u53d6\u6d88\u51fd\u6570.md",sourceDirName:"leetcode/2601-2700",slug:"/leetcode/2601-2700/\u8bbe\u8ba1\u53ef\u53d6\u6d88\u51fd\u6570",permalink:"/docs/leetcode/2601-2700/\u8bbe\u8ba1\u53ef\u53d6\u6d88\u51fd\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2650,frontMatter:{},sidebar:"journal",previous:{title:"2649.\u5d4c\u5957\u6570\u7ec4\u751f\u6210\u5668",permalink:"/docs/leetcode/2601-2700/\u5d4c\u5957\u6570\u7ec4\u751f\u6210\u5668"},next:{title:"2651.\u8ba1\u7b97\u5217\u8f66\u5230\u7ad9\u65f6\u95f4",permalink:"/docs/leetcode/2601-2700/\u8ba1\u7b97\u5217\u8f66\u5230\u7ad9\u65f6\u95f4"}},i={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"2650\u8bbe\u8ba1\u53ef\u53d6\u6d88\u51fd\u6570",children:"2650.\u8bbe\u8ba1\u53ef\u53d6\u6d88\u51fd\u6570"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/design-cancellable-function",children:"2650.\u8bbe\u8ba1\u53ef\u53d6\u6d88\u51fd\u6570"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6709\u65f6\u5019\u4f60\u4f1a\u6709\u4e00\u4e2a\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u4efb\u52a1\uff0c\u5e76\u4e14\u4f60\u53ef\u80fd\u5e0c\u671b\u5728\u5b83\u5b8c\u6210\u4e4b\u524d\u53d6\u6d88\u5b83\u3002\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e2a\u76ee\u6807\uff0c\u8bf7\u4f60\u7f16\u5199\u4e00\u4e2a\u540d\u4e3a cancellable \u7684\u51fd\u6570\uff0c\u5b83\u63a5\u6536\u4e00\u4e2a\u751f\u6210\u5668\u5bf9\u8c61\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u4e24\u4e2a\u503c\u7684\u6570\u7ec4\uff1a\u4e00\u4e2a \u53d6\u6d88\u51fd\u6570 \u548c\u4e00\u4e2a promise \u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-24"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a64ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.5MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function cancellable<T>(generator: Generator<Promise<any>, T, unknown>): [() => void, Promise<T>] {\n  let cancel = false;\n  function dfs(node) {\n    if (node.done) return Promise.resolve(node.value);\n    if (node.value instanceof Promise)\n      return node.value.then(\n        res => (cancel ? dfs(generator.throw('Cancelled')) : dfs(generator.next(res))),\n        res => dfs(generator.throw(res))\n      );\n    else return dfs(generator.next(node.value));\n  }\n  return [\n    () => (cancel = true),\n    new Promise<T>((resolve, reject) => dfs(generator.next()).then(resolve, reject)),\n  ];\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(30758);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);