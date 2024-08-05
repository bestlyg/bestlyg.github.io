"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[68786],{78166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var s=n(86070),r=n(25710);const o={},l="113.\u8def\u5f84\u603b\u548cII",c={id:"leetcode/101-200/\u8def\u5f84\u603b\u548cII",title:"113.\u8def\u5f84\u603b\u548cII",description:"\u94fe\u63a5\uff1a113.\u8def\u5f84\u603b\u548cII",source:"@site/docs/leetcode/101-200/113.\u8def\u5f84\u603b\u548cII.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u8def\u5f84\u603b\u548cII",permalink:"/web/site/docs/leetcode/101-200/\u8def\u5f84\u603b\u548cII",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:113,frontMatter:{},sidebar:"journal",previous:{title:"112.\u8def\u5f84\u603b\u548c",permalink:"/web/site/docs/leetcode/101-200/\u8def\u5f84\u603b\u548c"},next:{title:"114.\u4e8c\u53c9\u6811\u5c55\u5f00\u4e3a\u94fe\u8868",permalink:"/web/site/docs/leetcode/101-200/\u4e8c\u53c9\u6811\u5c55\u5f00\u4e3a\u94fe\u8868"}},i={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function a(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"113\u8def\u5f84\u603b\u548cii",children:"113.\u8def\u5f84\u603b\u548cII"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(t.a,{href:"https://leetcode.cn/problems/path-sum-ii",children:"113.\u8def\u5f84\u603b\u548cII"}),(0,s.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u56de\u6eaf\u3001\u4e8c\u53c9\u6811",(0,s.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\u548c\u4e00\u4e2a\u76ee\u6807\u548c\uff0c\u627e\u5230\u6240\u6709\u4ece\u6839\u8282\u70b9\u5230\u53f6\u5b50\u8282\u70b9\u8def\u5f84\u603b\u548c\u7b49\u4e8e\u7ed9\u5b9a\u76ee\u6807\u548c\u7684\u8def\u5f84\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-09-26"}),"\n",(0,s.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a124ms"}),"\n",(0,s.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a47.1MB"}),"\n",(0,s.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u8c03\u7528\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"function pathSum(root: TreeNode | null, sum: number): number[][] {\n  if (root === null) return [];\n  const val = root.val;\n  if (val === sum && root.left === null && root.right === null) return [[val]];\n  const nextSum = sum - val;\n  const ans: number[][] = [];\n  ans.push(...pathSum(root.left, nextSum).map(v => [val, ...v]));\n  ans.push(...pathSum(root.right, nextSum).map(v => [val, ...v]));\n  return ans;\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25710:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var s=n(30758);const r={},o=s.createContext(r);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);