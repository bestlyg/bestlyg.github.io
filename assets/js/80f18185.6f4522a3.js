"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[93876],{23914:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=t(86070),s=t(25710);const i={},c="1646.\u83b7\u53d6\u751f\u6210\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c",o={id:"leetcode/1601-1700/\u83b7\u53d6\u751f\u6210\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c",title:"1646.\u83b7\u53d6\u751f\u6210\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c",description:"\u94fe\u63a5\uff1a1646.\u83b7\u53d6\u751f\u6210\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c",source:"@site/docs/leetcode/1601-1700/1646.\u83b7\u53d6\u751f\u6210\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c.md",sourceDirName:"leetcode/1601-1700",slug:"/leetcode/1601-1700/\u83b7\u53d6\u751f\u6210\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c",permalink:"/web/site/docs/leetcode/1601-1700/\u83b7\u53d6\u751f\u6210\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1646,frontMatter:{},sidebar:"journal",previous:{title:"1641.\u7edf\u8ba1\u5b57\u5178\u5e8f\u5143\u97f3\u5b57\u7b26\u4e32\u7684\u6570\u76ee",permalink:"/web/site/docs/leetcode/1601-1700/\u7edf\u8ba1\u5b57\u5178\u5e8f\u5143\u97f3\u5b57\u7b26\u4e32\u7684\u6570\u76ee"},next:{title:"1652.\u62c6\u70b8\u5f39",permalink:"/web/site/docs/leetcode/1601-1700/\u62c6\u70b8\u5f39"}},l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"1646\u83b7\u53d6\u751f\u6210\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c",children:"1646.\u83b7\u53d6\u751f\u6210\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/get-maximum-in-generated-array",children:"1646.\u83b7\u53d6\u751f\u6210\u6570\u7ec4\u4e2d\u7684\u6700\u5927\u503c"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6a21\u62df",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u751f\u6210\u6570\u7ec4 nums \u4e2d\u7684 \u6700\u5927 \u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-23"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.1MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5faa\u73af\u5206\u522b\u8ba1\u7b97\u6bcf\u4e2a\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function getMaximumGenerated(n: number): number {\n  if (n === 0) return 0;\n  if (n === 1) return 1;\n  let ans = 1;\n  const arr = new Array(n + 1);\n  arr[0] = 0;\n  arr[1] = 1;\n  for (let i = 1; 2 * i + 1 <= n; i++) {\n    ans = Math.max(ans, (arr[i * 2] = arr[i]));\n    ans = Math.max(ans, (arr[i * 2 + 1] = arr[i] + arr[i + 1]));\n  }\n  return ans;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(30758);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);