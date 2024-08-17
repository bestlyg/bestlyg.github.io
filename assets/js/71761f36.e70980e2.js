"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[15730],{90994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=t(86070),s=t(25710);const i={},c="2677.\u5206\u5757\u6570\u7ec4",o={id:"leetcode/2601-2700/\u5206\u5757\u6570\u7ec4",title:"2677.\u5206\u5757\u6570\u7ec4",description:"\u94fe\u63a5\uff1a2677.\u5206\u5757\u6570\u7ec4",source:"@site/docs/leetcode/2601-2700/2677.\u5206\u5757\u6570\u7ec4.md",sourceDirName:"leetcode/2601-2700",slug:"/leetcode/2601-2700/\u5206\u5757\u6570\u7ec4",permalink:"/docs/leetcode/2601-2700/\u5206\u5757\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2677,frontMatter:{},sidebar:"journal",previous:{title:"2676.\u8282\u6d41",permalink:"/docs/leetcode/2601-2700/\u8282\u6d41"},next:{title:"2678.\u8001\u4eba\u7684\u6570\u76ee",permalink:"/docs/leetcode/2601-2700/\u8001\u4eba\u7684\u6570\u76ee"}},l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"2677\u5206\u5757\u6570\u7ec4",children:"2677.\u5206\u5757\u6570\u7ec4"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/chunk-array",children:"2677.\u5206\u5757\u6570\u7ec4"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6570\u7ec4\xa0arr\xa0\u548c\u4e00\u4e2a\u5757\u5927\u5c0f\xa0size\xa0\uff0c\u8fd4\u56de\u4e00\u4e2a \u5206\u5757\xa0\u7684\u6570\u7ec4\u3002\u5206\u5757\xa0\u7684\u6570\u7ec4\u5305\u542b\u4e86\xa0arr\xa0\u4e2d\u7684\u539f\u59cb\u5143\u7d20\uff0c\u4f46\u662f\u6bcf\u4e2a\u5b50\u6570\u7ec4\u7684\u957f\u5ea6\u90fd\u662f\xa0size\xa0\u3002\u5982\u679c\xa0arr.length\xa0\u4e0d\u80fd\u88ab\xa0size\xa0\u6574\u9664\uff0c\u90a3\u4e48\u6700\u540e\u4e00\u4e2a\u5b50\u6570\u7ec4\u7684\u957f\u5ea6\u53ef\u80fd\u5c0f\u4e8e\xa0size\xa0\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-16"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.5MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u4f59\u6570\u4e3a0\u5224\u65ad\u662f\u5426\u4ea7\u751f\u5206\u5272\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function chunk(arr: any[], size: number): any[][] {\n    const res: any[][] = [];\n    const item: any[] = [];\n    for (let i = 1; i <= arr.length; i++) {\n        item.push(arr[i - 1]);\n        if (i % size === 0) res.push([...item]), (item.length = 0);\n    }\n    if (item.length) res.push([...item]);\n    return res;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(30758);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);