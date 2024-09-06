"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[58439],{71385:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var r=t(86070),s=t(25710);const c={},i="LCP07.\u4f20\u9012\u4fe1\u606f",l={id:"leetcode/LCP/LCP07.\u4f20\u9012\u4fe1\u606f",title:"LCP07.\u4f20\u9012\u4fe1\u606f",description:"\u94fe\u63a5\uff1aLCP07.\u4f20\u9012\u4fe1\u606f",source:"@site/docs/leetcode/LCP/LCP07.\u4f20\u9012\u4fe1\u606f.md",sourceDirName:"leetcode/LCP",slug:"/leetcode/LCP/LCP07.\u4f20\u9012\u4fe1\u606f",permalink:"/docs/leetcode/LCP/LCP07.\u4f20\u9012\u4fe1\u606f",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"LCP06.\u62ff\u786c\u5e01",permalink:"/docs/leetcode/LCP/LCP06.\u62ff\u786c\u5e01"},next:{title:"LCP19.\u79cb\u53f6\u6536\u85cf\u96c6",permalink:"/docs/leetcode/LCP/LCP19.\u79cb\u53f6\u6536\u85cf\u96c6"}},o={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"lcp07\u4f20\u9012\u4fe1\u606f",children:"LCP07.\u4f20\u9012\u4fe1\u606f"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/chuan-di-xin-xi",children:"LCP07.\u4f20\u9012\u4fe1\u606f"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u56fe\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u603b\u73a9\u5bb6\u6570 n\uff0c\u4ee5\u53ca\u6309 [\u73a9\u5bb6\u7f16\u53f7,\u5bf9\u5e94\u53ef\u4f20\u9012\u73a9\u5bb6\u7f16\u53f7] \u5173\u7cfb\u7ec4\u6210\u7684\u4e8c\u7ef4\u6570\u7ec4 relation\u3002\u8fd4\u56de\u4fe1\u606f\u4ece\u5c0f A (\u7f16\u53f7 0 ) \u7ecf\u8fc7 k \u8f6e\u4f20\u9012\u5230\u7f16\u53f7\u4e3a n-1 \u7684\u5c0f\u4f19\u4f34\u5904\u7684\u65b9\u6848\u6570\uff1b\u82e5\u4e0d\u80fd\u5230\u8fbe\uff0c\u8fd4\u56de 0\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-01"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41.5MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u50a8\u5b58\u6bcf\u4e2a\u4f19\u4f34\u7684\u4e0b\u4e00\u4e2a\u4f19\u4f34\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function numWays(n: number, relation: number[][], k: number): number {\n  const nextPartnerMap = new Map<number, Set<number>>();\n  for (const [cur, next] of relation) {\n    let set = nextPartnerMap.get(cur);\n    if (!set) nextPartnerMap.set(cur, (set = new Set()));\n    set.add(next);\n  }\n  let list = [0];\n  while (k--) {\n    list = list\n      .map(item => (nextPartnerMap.has(item) ? [...nextPartnerMap.get(item)!] : []))\n      .flat();\n  }\n  return list.filter(v => v === n - 1).length;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(30758);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);