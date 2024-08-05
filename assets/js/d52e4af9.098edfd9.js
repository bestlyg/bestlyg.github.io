"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[41283],{11957:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var l=t(86070),s=t(25710);const r={},c="2676.\u8282\u6d41",o={id:"leetcode/2601-2700/\u8282\u6d41",title:"2676.\u8282\u6d41",description:"\u94fe\u63a5\uff1a2676.\u8282\u6d41",source:"@site/docs/leetcode/2601-2700/2676.\u8282\u6d41.md",sourceDirName:"leetcode/2601-2700",slug:"/leetcode/2601-2700/\u8282\u6d41",permalink:"/docs/leetcode/2601-2700/\u8282\u6d41",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2676,frontMatter:{},sidebar:"journal",previous:{title:"2675.\u5c06\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u77e9\u9635",permalink:"/docs/leetcode/2601-2700/\u5c06\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u77e9\u9635"},next:{title:"2677.\u5206\u5757\u6570\u7ec4",permalink:"/docs/leetcode/2601-2700/\u5206\u5757\u6570\u7ec4"}},i={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"2676\u8282\u6d41",children:"2676.\u8282\u6d41"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/throttle",children:"2676.\u8282\u6d41"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u73b0\u7ed9\u5b9a\u4e00\u4e2a\u51fd\u6570 fn \u548c\u4e00\u4e2a\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u7684\u65f6\u95f4 t \uff0c\u8bf7\u4f60\u8fd4\u56de\u8be5\u51fd\u6570\u7684 \u8282\u6d41 \u7248\u672c\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-16"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.4MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u95ed\u5305\u5b58\u50a8\u72b6\u6001\uff0c\u5229\u7528setTimeout\u6062\u590d\u72b6\u6001\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"type F = (...args: any[]) => void;\nfunction throttle(fn: F, t: number): F {\n    // \u5982\u679c\u6709\u9700\u8981\u8c03\u7528\u4f46\u672a\u8c03\u7528\u7684\u60c5\u51b5\uff0c\u50a8\u5b58\u53c2\u6570\n    let callArgs: any[] | null = null;\n    // \u8bb0\u5f55\u5f53\u524d\u72b6\u6001\u662f\u5426\u5df2\u7ecf\u6389\u7528\u8fc7\n    let called = false;\n    return function call(...args) {\n        if (called) callArgs = args;\n        else {\n            fn(...args);\n            called = true;\n            setTimeout(() => {\n                // \u6062\u590d\u8c03\u7528\u72b6\u6001\n                called = false;\n                if (callArgs) call(...callArgs), (callArgs = null);\n            }, t);\n        }\n    };\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var l=t(30758);const s={},r=l.createContext(s);function c(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);