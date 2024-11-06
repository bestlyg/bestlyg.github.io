"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[73167],{48781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(86070),s=n(31503);const i={},o="2675.\u5c06\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u77e9\u9635",c={id:"leetcode/2601-2700/\u5c06\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u77e9\u9635",title:"2675.\u5c06\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u77e9\u9635",description:"\u94fe\u63a5\uff1a2675.\u5c06\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u77e9\u9635",source:"@site/docs/leetcode/2601-2700/2675.\u5c06\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u77e9\u9635.md",sourceDirName:"leetcode/2601-2700",slug:"/leetcode/2601-2700/\u5c06\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u77e9\u9635",permalink:"/docs/leetcode/2601-2700/\u5c06\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u77e9\u9635",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2675,frontMatter:{},sidebar:"journal",previous:{title:"2673.\u4f7f\u4e8c\u53c9\u6811\u6240\u6709\u8def\u5f84\u503c\u76f8\u7b49\u7684\u6700\u5c0f\u4ee3\u4ef7",permalink:"/docs/leetcode/2601-2700/\u4f7f\u4e8c\u53c9\u6811\u6240\u6709\u8def\u5f84\u503c\u76f8\u7b49\u7684\u6700\u5c0f\u4ee3\u4ef7"},next:{title:"2676.\u8282\u6d41",permalink:"/docs/leetcode/2601-2700/\u8282\u6d41"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"2675\u5c06\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u77e9\u9635",children:"2675.\u5c06\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u77e9\u9635"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(t.a,{href:"https://leetcode.cn/problems/array-of-objects-to-matrix",children:"2675.\u5c06\u5bf9\u8c61\u6570\u7ec4\u8f6c\u6362\u4e3a\u77e9\u9635"}),(0,r.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a",(0,r.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\uff0c\u5c06\u5bf9\u8c61\u6570\u7ec4 arr \u8f6c\u6362\u4e3a\u77e9\u9635 m \u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-05-16"}),"\n",(0,r.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a360ms"}),"\n",(0,r.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a67.9MB"}),"\n",(0,r.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5148\u6df1\u5ea6\u904d\u5386\u62ff\u6240\u6709\u7684Key\uff0c\u518d\u5bf9\u6bcf\u4e2a\u5bf9\u8c61\u5c1d\u8bd5\u8bfbkey\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"const isObject = (o: unknown): o is object => o instanceof Object;\nfunction jsonToMatrix(arr: any[]): (string | number | boolean | null)[][] {\n    const keySet = new Set<string>();\n    for (const item of arr) findKey(item);\n    keySet.delete('');\n    const keys = Array.from(keySet.keys()).sort();\n    return [keys, ...arr.map(item => keys.map(k => get(item, k)))];\n    function findKey(item: any[] | object, key = '') {\n        if (isObject(item))\n        for (const k of Object.keys(item)) findKey(item[k], key ? key + '.' + k : `${k}`);\n        else keySet.add(key);\n    }\n    function get(item: object, k: string): any {\n        for (const nextK of k.split('.'))\n        if (!isObject(item) || item[nextK] === undefined) return '';\n        else item = item[nextK];\n        return isObject(item) ? '' : item;\n    }\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31503:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(30758);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);