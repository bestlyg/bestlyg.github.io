"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[60188],{39177:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=t(86070),s=t(25710);const c={},i="22.\u62ec\u53f7\u751f\u6210",o={id:"leetcode/1-100/\u62ec\u53f7\u751f\u6210",title:"22.\u62ec\u53f7\u751f\u6210",description:"\u94fe\u63a5\uff1a22.\u62ec\u53f7\u751f\u6210",source:"@site/docs/leetcode/1-100/22.\u62ec\u53f7\u751f\u6210.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u62ec\u53f7\u751f\u6210",permalink:"/web/site/docs/leetcode/1-100/\u62ec\u53f7\u751f\u6210",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{},sidebar:"journal",previous:{title:"21.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868",permalink:"/web/site/docs/leetcode/1-100/\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868"},next:{title:"23.\u5408\u5e76K\u4e2a\u5347\u5e8f\u94fe\u8868",permalink:"/web/site/docs/leetcode/1-100/\u5408\u5e76K\u4e2a\u5347\u5e8f\u94fe\u8868"}},a={},l=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"22\u62ec\u53f7\u751f\u6210",children:"22.\u62ec\u53f7\u751f\u6210"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/generate-parentheses",children:"22.\u62ec\u53f7\u751f\u6210"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212\u3001\u56de\u6eaf",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6570\u5b57 n \u4ee3\u8868\u751f\u6210\u62ec\u53f7\u7684\u5bf9\u6570\uff0c\u8bf7\u4f60\u8bbe\u8ba1\u4e00\u4e2a\u51fd\u6570\uff0c\u7528\u4e8e\u80fd\u591f\u751f\u6210\u6240\u6709\u53ef\u80fd\u7684\u5e76\u4e14 \u6709\u6548\u7684 \u62ec\u53f7\u7ec4\u5408\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-04-09"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a35.1MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u901a\u8fc7\u96c6\u5408\u53bb\u91cd\uff0c\u518d\u9012\u5f52\u5224\u65ad\u62ec\u53f7\u5185\u90e8\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {number} n\n * @return {string[]}\n */\nconst cache = new Map();\ncache.set(1, ['()']);\ncache.set(2, ['()()', '(())']);\nvar generateParenthesis = function (n) {\n  if (cache.has(n)) return cache.get(n);\n  const res = new Set();\n  for (let i = 1; i < n; i++) {\n    for (let left of generateParenthesis(i))\n      for (let right of generateParenthesis(n - i)) res.add(`${left}${right}`);\n  }\n  for (let item of generateParenthesis(n - 1)) res.add(`(${item})`);\n  const arr = [...res];\n  cache.set(n, arr);\n  return arr;\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(30758);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);