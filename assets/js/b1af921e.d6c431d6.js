"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[52714],{85503:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=t(86070),s=t(31503);const c={},o="1122.\u6570\u7ec4\u7684\u76f8\u5bf9\u6392\u5e8f",a={id:"leetcode/1101-1200/\u6570\u7ec4\u7684\u76f8\u5bf9\u6392\u5e8f",title:"1122.\u6570\u7ec4\u7684\u76f8\u5bf9\u6392\u5e8f",description:"\u94fe\u63a5\uff1a1122.\u6570\u7ec4\u7684\u76f8\u5bf9\u6392\u5e8f",source:"@site/docs/leetcode/1101-1200/1122.\u6570\u7ec4\u7684\u76f8\u5bf9\u6392\u5e8f.md",sourceDirName:"leetcode/1101-1200",slug:"/leetcode/1101-1200/\u6570\u7ec4\u7684\u76f8\u5bf9\u6392\u5e8f",permalink:"/docs/leetcode/1101-1200/\u6570\u7ec4\u7684\u76f8\u5bf9\u6392\u5e8f",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1122,frontMatter:{},sidebar:"journal",previous:{title:"1111.\u6709\u6548\u62ec\u53f7\u7684\u5d4c\u5957\u6df1\u5ea6",permalink:"/docs/leetcode/1101-1200/\u6709\u6548\u62ec\u53f7\u7684\u5d4c\u5957\u6df1\u5ea6"},next:{title:"1123.\u6700\u6df1\u53f6\u8282\u70b9\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148",permalink:"/docs/leetcode/1101-1200/\u6700\u6df1\u53f6\u8282\u70b9\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148"}},i={},l=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const r={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"1122\u6570\u7ec4\u7684\u76f8\u5bf9\u6392\u5e8f",children:"1122.\u6570\u7ec4\u7684\u76f8\u5bf9\u6392\u5e8f"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["\u94fe\u63a5\uff1a",(0,n.jsx)(r.a,{href:"https://leetcode.cn/problems/relative-sort-array",children:"1122.\u6570\u7ec4\u7684\u76f8\u5bf9\u6392\u5e8f"}),(0,n.jsx)(r.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,n.jsx)(r.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u8ba1\u6570\u6392\u5e8f\u3001\u6392\u5e8f",(0,n.jsx)(r.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5bf9 arr1 \u4e2d\u7684\u5143\u7d20\u8fdb\u884c\u6392\u5e8f\uff0c\u4f7f arr1 \u4e2d\u9879\u7684\u76f8\u5bf9\u987a\u5e8f\u548c arr2 \u4e2d\u7684\u76f8\u5bf9\u987a\u5e8f\u76f8\u540c\u3002\u672a\u5728 arr2 \u4e2d\u51fa\u73b0\u8fc7\u7684\u5143\u7d20\u9700\u8981\u6309\u7167\u5347\u5e8f\u653e\u5728 arr1 \u7684\u672b\u5c3e\u3002"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-11-14"}),"\n",(0,n.jsx)(r.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,n.jsx)(r.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.4MB"}),"\n",(0,n.jsx)(r.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,n.jsxs)(r.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8bfb\u53d6 arr2 \u6bcf\u4e2a\u70b9\u7684\u4e0b\u6807\u8fdb\u884c\u5bf9 arr1 \u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function relativeSortArray(arr1: number[], arr2: number[]): number[] {\n  const set = new Set(arr2);\n  const argNums = arr1.filter(v => !set.has(v)).sort((a, b) => a - b);\n  const map = new Map(Object.entries(arr2).map(([k, v]) => [v, Number(k)]));\n  arr1 = arr1.filter(v => set.has(v));\n  return arr1.sort((a, b) => map.get(a)! - map.get(b)!).concat(argNums);\n}\n"})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},31503:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>a});var n=t(30758);const s={},c=n.createContext(s);function o(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);