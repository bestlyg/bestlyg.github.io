"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[50428],{46342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var r=n(86070),i=n(31503);const s="import { Comparator } from '@/shared';\n\n/**\n * \u8bfb\u53d6\u7b2c\u4e00\u4e2a\u503c\u5f53\u4e2d\u95f4\u503c\n */\nexport const mergeSort = <T = any>(\n    compare: Comparator<T>,\n    list: T[],\n    left = 0,\n    right = list.length - 1,\n) => {\n    if (left >= right) return;\n    const mid = (left + right) >> 1;\n    mergeSort(compare, list, left, mid);\n    mergeSort(compare, list, mid + 1, right);\n    const tempList = list.slice(left, mid + 1);\n    let p1 = 0;\n    let p2 = mid + 1;\n    let i = left;\n    while (p1 <= mid - left) {\n        if (p2 > right || compare(tempList[p1], list[p2]) < 0) {\n            list[i++] = tempList[p1++];\n        } else {\n            list[i++] = list[p2++];\n        }\n    }\n};\n";var l=n(21644);const o={},c="\u5f52\u5e76\u6392\u5e8f(MergeSort)",a={id:"\u7b97\u6cd5/\u6392\u5e8f/\u5f52\u5e76\u6392\u5e8f",title:"\u5f52\u5e76\u6392\u5e8f(MergeSort)",description:"\u65b9\u5f0f",source:"@site/docs/\u7b97\u6cd5/\u6392\u5e8f/\u5f52\u5e76\u6392\u5e8f.mdx",sourceDirName:"\u7b97\u6cd5/\u6392\u5e8f",slug:"/\u7b97\u6cd5/\u6392\u5e8f/\u5f52\u5e76\u6392\u5e8f",permalink:"/docs/\u7b97\u6cd5/\u6392\u5e8f/\u5f52\u5e76\u6392\u5e8f",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"\u5806\u6392\u5e8f(HeapSort)",permalink:"/docs/\u7b97\u6cd5/\u6392\u5e8f/\u5806\u6392\u5e8f"},next:{title:"\u5feb\u901f\u6392\u5e8f(QuickSort)",permalink:"/docs/\u7b97\u6cd5/\u6392\u5e8f/\u5feb\u901f\u6392\u5e8f"}},d={},h=[{value:"\u65b9\u5f0f",id:"\u65b9\u5f0f",level:2},{value:"\u6838\u5fc3\u4ee3\u7801",id:"\u6838\u5fc3\u4ee3\u7801",level:2}];function p(e){const t={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u5f52\u5e76\u6392\u5e8fmergesort",children:"\u5f52\u5e76\u6392\u5e8f(MergeSort)"})}),"\n",(0,r.jsx)(t.h2,{id:"\u65b9\u5f0f",children:"\u65b9\u5f0f"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"\u53d6\u4e2d\u95f4\u503c\uff0c\u628a\u96c6\u5408\u5206\u6210\u4e24\u90e8\u5206"}),"\n",(0,r.jsx)(t.li,{children:"\u5206\u522b\u5bf9\u4e24\u90e8\u5206\u4f7f\u7528\u5f52\u5e76\u6392\u5e8f"}),"\n",(0,r.jsx)(t.li,{children:"\u5408\u5e76\u4e24\u90e8\u5206"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u6838\u5fc3\u4ee3\u7801",children:"\u6838\u5fc3\u4ee3\u7801"}),"\n",(0,r.jsx)(l.A,{language:"tsx",children:s})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);