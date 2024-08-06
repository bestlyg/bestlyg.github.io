"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[44963],{30368:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>m});var i=n(86070),s=n(25710);const r={},l="981.\u57fa\u4e8e\u65f6\u95f4\u7684\u952e\u503c\u5b58\u50a8",a={id:"leetcode/901-1000/\u57fa\u4e8e\u65f6\u95f4\u7684\u952e\u503c\u5b58\u50a8",title:"981.\u57fa\u4e8e\u65f6\u95f4\u7684\u952e\u503c\u5b58\u50a8",description:"\u94fe\u63a5\uff1a981.\u57fa\u4e8e\u65f6\u95f4\u7684\u952e\u503c\u5b58\u50a8",source:"@site/docs/leetcode/901-1000/981.\u57fa\u4e8e\u65f6\u95f4\u7684\u952e\u503c\u5b58\u50a8.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u57fa\u4e8e\u65f6\u95f4\u7684\u952e\u503c\u5b58\u50a8",permalink:"/docs/leetcode/901-1000/\u57fa\u4e8e\u65f6\u95f4\u7684\u952e\u503c\u5b58\u50a8",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:981,frontMatter:{},sidebar:"journal",previous:{title:"980.\u4e0d\u540c\u8def\u5f84III",permalink:"/docs/leetcode/901-1000/\u4e0d\u540c\u8def\u5f84III"},next:{title:"983.\u6700\u4f4e\u7968\u4ef7",permalink:"/docs/leetcode/901-1000/\u6700\u4f4e\u7968\u4ef7"}},d={},m=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function c(t){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"981\u57fa\u4e8e\u65f6\u95f4\u7684\u952e\u503c\u5b58\u50a8",children:"981.\u57fa\u4e8e\u65f6\u95f4\u7684\u952e\u503c\u5b58\u50a8"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/time-based-key-value-store",children:"981.\u57fa\u4e8e\u65f6\u95f4\u7684\u952e\u503c\u5b58\u50a8"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u4e8c\u5206\u67e5\u627e",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8e\u65f6\u95f4\u7684\u952e\u503c\u5b58\u50a8\u7c7b TimeMap\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-10"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a412ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a77.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528 map \u50a8\u5b58\u6240\u6709\u503c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"class TimeMap {\n  private map: Record<string, [string, number][]> = {};\n  set(key: string, value: string, timestamp: number): void {\n    let list = this.map[key];\n    if (!list) this.map[key] = list = [];\n    list.push([value, timestamp]);\n  }\n  get(key: string, timestamp: number): string {\n    return this.find(this.map[key] ?? [], timestamp);\n  }\n  private find(\n    list: [string, number][],\n    timestamp: number,\n    first = 0,\n    last = list.length - 1\n  ): string {\n    if (first > last) {\n      while (first > list.length - 1) first--;\n      while (first >= 0) {\n        if (list[first][1] < timestamp) return list[first][0];\n        first--;\n      }\n      return '';\n    }\n    const mid = (first + last) >> 1;\n    const [midStr, midTime] = list[mid];\n    if (midTime > timestamp) return this.find(list, timestamp, first, mid - 1);\n    else if (midTime < timestamp) return this.find(list, timestamp, mid + 1, last);\n    else return midStr;\n  }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-14"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a404ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a76.4MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","map \u50a8\u5b58\uff0c\u4e8c\u5206\u67e5\u627e\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"class TimeMap {\n  map = new Map<string, [string, number][]>();\n  set(key: string, value: string, timestamp: number): void {\n    let data = this.map.get(key);\n    if (!data) this.map.set(key, (data = []));\n    data.push([value, timestamp]);\n  }\n  get(key: string, timestamp: number): string {\n    let data = this.map.get(key);\n    if (!data) return '';\n    const idx = this.bs(data, timestamp);\n    if (idx === 0) {\n      if (data[idx][1] > timestamp) return '';\n      else return data[idx][0];\n    }\n    if (data[idx][1] <= timestamp) return data[idx][0];\n    return data[idx - 1][0];\n  }\n  bs(data: [string, number][], timestamp: number): number {\n    let l = 0;\n    let r = data.length - 1;\n    while (l < r) {\n      const mid = (l + r) >> 1;\n      if (data[mid][1] > timestamp) r = mid;\n      else l = mid + 1;\n    }\n    return l;\n  }\n}\n"})})]})}function p(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(c,{...t})}):c(t)}},25710:(t,e,n)=>{n.d(e,{R:()=>l,x:()=>a});var i=n(30758);const s={},r=i.createContext(s);function l(t){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:l(t.components),i.createElement(r.Provider,{value:e},t.children)}}}]);