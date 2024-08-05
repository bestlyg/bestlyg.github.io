"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[25418],{78175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=n(86070),s=n(25710);const o={},i="257.\u4e8c\u53c9\u6811\u7684\u6240\u6709\u8def\u5f84",c={id:"leetcode/201-300/\u4e8c\u53c9\u6811\u7684\u6240\u6709\u8def\u5f84",title:"257.\u4e8c\u53c9\u6811\u7684\u6240\u6709\u8def\u5f84",description:"\u94fe\u63a5\uff1a257.\u4e8c\u53c9\u6811\u7684\u6240\u6709\u8def\u5f84",source:"@site/docs/leetcode/201-300/257.\u4e8c\u53c9\u6811\u7684\u6240\u6709\u8def\u5f84.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u4e8c\u53c9\u6811\u7684\u6240\u6709\u8def\u5f84",permalink:"/web/site/docs/leetcode/201-300/\u4e8c\u53c9\u6811\u7684\u6240\u6709\u8def\u5f84",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:257,frontMatter:{},sidebar:"journal",previous:{title:"242.\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd",permalink:"/web/site/docs/leetcode/201-300/\u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd"},next:{title:"258.\u5404\u4f4d\u76f8\u52a0",permalink:"/web/site/docs/leetcode/201-300/\u5404\u4f4d\u76f8\u52a0"}},l={},a=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"257\u4e8c\u53c9\u6811\u7684\u6240\u6709\u8def\u5f84",children:"257.\u4e8c\u53c9\u6811\u7684\u6240\u6709\u8def\u5f84"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(t.a,{href:"https://leetcode.cn/problems/binary-tree-paths",children:"257.\u4e8c\u53c9\u6811\u7684\u6240\u6709\u8def\u5f84"}),(0,r.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,r.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5b57\u7b26\u4e32\u3001\u56de\u6eaf\u3001\u4e8c\u53c9\u6811",(0,r.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u53c9\u6811\uff0c\u8fd4\u56de\u6240\u6709\u4ece\u6839\u8282\u70b9\u5230\u53f6\u5b50\u8282\u70b9\u7684\u8def\u5f84\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-09-04"}),"\n",(0,r.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,r.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.7MB"}),"\n",(0,r.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,r.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u51fd\u6570\u5f0f\u7f16\u7a0b\uff0c\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"/**\n * @param {TreeNode} root\n * @return {string[]}\n */\nvar binaryTreePaths = function (root) {\n  if (!root) return [];\n  else if (!root.left && !root.right) return [root.val + ''];\n  else\n    return ['left', 'right']\n      .filter(sub => root[sub])\n      .map(sub =>\n        binaryTreePaths(root[sub])\n          .filter(v => v)\n          .map(v => `${root.val}->${v}`)\n      )\n      .flat();\n};\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(30758);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);