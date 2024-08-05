"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[68442],{31122:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=t(86070),s=t(25710);const c={},i="690.\u5458\u5de5\u7684\u91cd\u8981\u6027",o={id:"leetcode/601-700/\u5458\u5de5\u7684\u91cd\u8981\u6027",title:"690.\u5458\u5de5\u7684\u91cd\u8981\u6027",description:"\u94fe\u63a5\uff1a690.\u5458\u5de5\u7684\u91cd\u8981\u6027",source:"@site/docs/leetcode/601-700/690.\u5458\u5de5\u7684\u91cd\u8981\u6027.md",sourceDirName:"leetcode/601-700",slug:"/leetcode/601-700/\u5458\u5de5\u7684\u91cd\u8981\u6027",permalink:"/web/site/docs/leetcode/601-700/\u5458\u5de5\u7684\u91cd\u8981\u6027",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:690,frontMatter:{},sidebar:"journal",previous:{title:"689.\u4e09\u4e2a\u65e0\u91cd\u53e0\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c",permalink:"/web/site/docs/leetcode/601-700/\u4e09\u4e2a\u65e0\u91cd\u53e0\u5b50\u6570\u7ec4\u7684\u6700\u5927\u548c"},next:{title:"692.\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd",permalink:"/web/site/docs/leetcode/601-700/\u524dK\u4e2a\u9ad8\u9891\u5355\u8bcd"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"690\u5458\u5de5\u7684\u91cd\u8981\u6027",children:"690.\u5458\u5de5\u7684\u91cd\u8981\u6027"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/employee-importance",children:"690.\u5458\u5de5\u7684\u91cd\u8981\u6027"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u73b0\u5728\u8f93\u5165\u4e00\u4e2a\u516c\u53f8\u7684\u6240\u6709\u5458\u5de5\u4fe1\u606f\uff0c\u4ee5\u53ca\u5355\u4e2a\u5458\u5de5 id \uff0c\u8fd4\u56de\u8fd9\u4e2a\u5458\u5de5\u548c\u4ed6\u6240\u6709\u4e0b\u5c5e\u7684\u91cd\u8981\u5ea6\u4e4b\u548c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-05-01"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.2MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u8868\u50a8\u5b58\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function GetImportance(employees: Employee[], id: number): number {\n  const map = employees.reduce((map, emp) => {\n    map.set(emp.id, emp);\n    return map;\n  }, new Map<number, Employee>());\n  const find = (id: number): number => {\n    const emp = map.get(id)!;\n    return (\n      emp.importance + emp.subordinates.map(id => find(id)).reduce((total, cur) => total + cur, 0)\n    );\n  };\n  return find(id);\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(30758);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);