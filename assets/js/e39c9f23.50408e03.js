"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[65387],{31365:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var c=t(86070),r=t(25710);const s={},i="1370.\u4e0a\u5347\u4e0b\u964d\u5b57\u7b26\u4e32",o={id:"leetcode/1301-1400/\u4e0a\u5347\u4e0b\u964d\u5b57\u7b26\u4e32",title:"1370.\u4e0a\u5347\u4e0b\u964d\u5b57\u7b26\u4e32",description:"\u94fe\u63a5\uff1a1370.\u4e0a\u5347\u4e0b\u964d\u5b57\u7b26\u4e32",source:"@site/docs/leetcode/1301-1400/1370.\u4e0a\u5347\u4e0b\u964d\u5b57\u7b26\u4e32.md",sourceDirName:"leetcode/1301-1400",slug:"/leetcode/1301-1400/\u4e0a\u5347\u4e0b\u964d\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/1301-1400/\u4e0a\u5347\u4e0b\u964d\u5b57\u7b26\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1370,frontMatter:{},sidebar:"journal",previous:{title:"1367.\u4e8c\u53c9\u6811\u4e2d\u7684\u94fe\u8868",permalink:"/docs/leetcode/1301-1400/\u4e8c\u53c9\u6811\u4e2d\u7684\u94fe\u8868"},next:{title:"1371.\u6bcf\u4e2a\u5143\u97f3\u5305\u542b\u5076\u6570\u6b21\u7684\u6700\u957f\u5b50\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/1301-1400/\u6bcf\u4e2a\u5143\u97f3\u5305\u542b\u5076\u6570\u6b21\u7684\u6700\u957f\u5b50\u5b57\u7b26\u4e32"}},l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"1370\u4e0a\u5347\u4e0b\u964d\u5b57\u7b26\u4e32",children:"1370.\u4e0a\u5347\u4e0b\u964d\u5b57\u7b26\u4e32"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,c.jsx)(n.a,{href:"https://leetcode.cn/problems/increasing-decreasing-string",children:"1370.\u4e0a\u5347\u4e0b\u964d\u5b57\u7b26\u4e32"}),(0,c.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,c.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u8ba1\u6570",(0,c.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 s \uff0c\u8bf7\u4f60\u6839\u636e\u4e0b\u9762\u7684\u7b97\u6cd5\u91cd\u65b0\u6784\u9020\u5b57\u7b26\u4e32\uff0c\u8bf7\u4f60\u8fd4\u56de\u5c06 s \u4e2d\u5b57\u7b26\u91cd\u65b0\u6392\u5e8f\u540e\u7684 \u7ed3\u679c\u5b57\u7b26\u4e32 \u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-11-25"}),"\n",(0,c.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a124ms"}),"\n",(0,c.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.1MB"}),"\n",(0,c.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,c.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528 while \u8fdb\u884c\u6c38\u52a8\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"function sortString(s: string): string {\n  let len = s.length;\n  const cache: Record<string, number> = {};\n  const setCache = (c: string) => {\n    cache[c] = 1 + (cache[c] ? cache[c] : 0);\n  };\n  for (const c of s) setCache(c);\n  const arr = Object.entries(cache).sort(([c1], [c2]) => c1.codePointAt(0)! - c2.codePointAt(0)!);\n  let i = -1;\n  let ans = '';\n  const compute = () => {\n    ans += arr[i][0];\n    arr[i][1]--;\n    len--;\n  };\n  while (len !== 0) {\n    while (len !== 0) {\n      i++;\n      if (i === arr.length) break;\n      if (arr[i][1] === 0) continue;\n      compute();\n    }\n    while (len !== 0) {\n      i--;\n      if (i === -1) break;\n      if (arr[i][1] === 0) continue;\n      compute();\n    }\n  }\n  return ans;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var c=t(30758);const r={},s=c.createContext(r);function i(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);