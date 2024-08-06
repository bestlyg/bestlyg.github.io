"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[25593],{92590:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=t(86070),c=t(25710);const s={},o="1218.\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217",i={id:"leetcode/1201-1300/\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217",title:"1218.\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217",description:"\u94fe\u63a5\uff1a1218.\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217",source:"@site/docs/leetcode/1201-1300/1218.\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217.md",sourceDirName:"leetcode/1201-1300",slug:"/leetcode/1201-1300/\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217",permalink:"/docs/leetcode/1201-1300/\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1218,frontMatter:{},sidebar:"journal",previous:{title:"1217.\u73a9\u7b79\u7801",permalink:"/docs/leetcode/1201-1300/\u73a9\u7b79\u7801"},next:{title:"1219.\u9ec4\u91d1\u77ff\u5de5",permalink:"/docs/leetcode/1201-1300/\u9ec4\u91d1\u77ff\u5de5"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"1218\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217",children:"1218.\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/longest-arithmetic-subsequence-of-given-difference",children:"1218.\u6700\u957f\u5b9a\u5dee\u5b50\u5e8f\u5217"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 \xa0arr\xa0 \u548c\u4e00\u4e2a\u6574\u6570 \xa0difference\uff0c\u8bf7\u4f60\u627e\u51fa\u5e76\u8fd4\u56de arr\xa0 \u4e2d\u6700\u957f\u7b49\u5dee\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\uff0c\u8be5\u5b50\u5e8f\u5217\u4e2d\u76f8\u90bb\u5143\u7d20\u4e4b\u95f4\u7684\u5dee\u7b49\u4e8e difference \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-05"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a96ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a48.5MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function longestSubsequence(arr: number[], difference: number): number {\n  let max = 1;\n  const map = new Map<number, number>();\n  for (const num of arr) {\n    const cnt = (map.get(num) ?? 0) + 1;\n    map.set(num + difference, cnt);\n    max = Math.max(max, cnt);\n  }\n  return max;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(30758);const c={},s=r.createContext(c);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);