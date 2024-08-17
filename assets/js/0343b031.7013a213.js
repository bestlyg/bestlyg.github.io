"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[36905],{61927:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=t(86070),i=t(25710);const s={},o="2627.\u51fd\u6570\u9632\u6296",l={id:"leetcode/2601-2700/\u51fd\u6570\u9632\u6296",title:"2627.\u51fd\u6570\u9632\u6296",description:"\u94fe\u63a5\uff1a2627.\u51fd\u6570\u9632\u6296",source:"@site/docs/leetcode/2601-2700/2627.\u51fd\u6570\u9632\u6296.md",sourceDirName:"leetcode/2601-2700",slug:"/leetcode/2601-2700/\u51fd\u6570\u9632\u6296",permalink:"/docs/leetcode/2601-2700/\u51fd\u6570\u9632\u6296",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2627,frontMatter:{},sidebar:"journal",previous:{title:"2626.\u6570\u7ec4\u5f52\u7ea6\u8fd0\u7b97",permalink:"/docs/leetcode/2601-2700/\u6570\u7ec4\u5f52\u7ea6\u8fd0\u7b97"},next:{title:"2628.\u5b8c\u5168\u76f8\u7b49\u7684JSON\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/2601-2700/\u5b8c\u5168\u76f8\u7b49\u7684JSON\u5b57\u7b26\u4e32"}},c={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"2627\u51fd\u6570\u9632\u6296",children:"2627.\u51fd\u6570\u9632\u6296"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/debounce",children:"2627.\u51fd\u6570\u9632\u6296"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\uff0c\u63a5\u6536\u53c2\u6570\u4e3a\u53e6\u4e00\u4e2a\u51fd\u6570\u548c\u4e00\u4e2a\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u7684\u65f6\u95f4 t \uff0c\u5e76\u8fd4\u56de\u8be5\u51fd\u6570\u7684 \u51fd\u6570\u9632\u6296 \u540e\u7684\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-23"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a120ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a50.1MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u95ed\u5305\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function stringCompare(str1: string, str2: string) {\n  const [n1, n2] = [str1.length, str2.length];\n  let i = 0;\n  while (i < n1 && i < n2)\n    if (str1[i] == str2[i]) i++;\n    else return str1.codePointAt(i)! - str2.codePointAt(i)!;\n  if (i == n1 && i == n2) return 0;\n  if (i == n1) return -1;\n  else return 1;\n}\nconst sort = (o: object) => Object.entries(o).sort(([k1], [k2]) => stringCompare(k1, k2));\nfunction areDeeplyEqual(o1: any, o2: any): boolean {\n  const [t1, t2] = [typeof o1, typeof o2];\n  // \u7c7b\u578b\u4e0d\u7b49\u5c31\u9519\u4e86\n  if (t1 !== t2) return false;\n  // \u5982\u679c\u4e0d\u662f\u5bf9\u8c61\uff0c\u76f4\u63a5\u5224\u65ad\n  if (t1 !== 'object') return o1 === o2;\n  // \u5982\u679c\u662fnull\u6216undefined\uff0c\u76f4\u63a5\u5224\u65ad\n  if (o1 === null || o1 === undefined || o2 === null || o2 === undefined) return o1 === o2;\n  // \u5982\u679c\u662f\u6570\u7ec4\uff0c\u5148\u5224\u65ad\u662f\u5426\u90fd\u662f\u6570\u7ec4\u6216\u8005\u90fd\u4e0d\u662f\u6570\u7ec4\n  const [isArr1, isArr2] = [Array.isArray(o1), Array.isArray(o2)];\n  if ((!isArr1 && isArr2) || (isArr1 && !isArr2)) return false;\n  // \u952e\u503c\u5bf9\u6392\u5e8f\n  const [item1, item2] = [sort(o1), sort(o2)];\n  // \u5982\u679c\u957f\u5ea6\u4e0d\u60f3\u7b49\uff0c\u5c31\u9519\u4e86\n  if (item1.length !== item2.length) return false;\n  // \u5982\u679c\u952e\u4e0d\u7b49\uff0c\u6216\u8005\u503c\u4e0d\u7b49\uff0c\u5c31\u9519\u4e86\n  for (let i = 0; i < item1.length; i++)\n    if (item1[i][0] !== item2[i][0] || !areDeeplyEqual(item1[i][1], item2[i][1])) return false;\n  return true;\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(30758);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);