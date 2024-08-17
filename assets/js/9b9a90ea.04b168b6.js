"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[88821],{27334:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=t(86070),o=t(25710);const s={},l="129.\u6c42\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u6570\u5b57\u4e4b\u548c",c={id:"leetcode/101-200/\u6c42\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u6570\u5b57\u4e4b\u548c",title:"129.\u6c42\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u6570\u5b57\u4e4b\u548c",description:"\u94fe\u63a5\uff1a129.\u6c42\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u6570\u5b57\u4e4b\u548c",source:"@site/docs/leetcode/101-200/129.\u6c42\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u6570\u5b57\u4e4b\u548c.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u6c42\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u6570\u5b57\u4e4b\u548c",permalink:"/docs/leetcode/101-200/\u6c42\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u6570\u5b57\u4e4b\u548c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:129,frontMatter:{},sidebar:"journal",previous:{title:"128.\u6700\u957f\u8fde\u7eed\u5e8f\u5217",permalink:"/docs/leetcode/101-200/\u6700\u957f\u8fde\u7eed\u5e8f\u5217"},next:{title:"130.\u88ab\u56f4\u7ed5\u7684\u533a\u57df",permalink:"/docs/leetcode/101-200/\u88ab\u56f4\u7ed5\u7684\u533a\u57df"}},i={},u=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"129\u6c42\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u6570\u5b57\u4e4b\u548c",children:"129.\u6c42\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u6570\u5b57\u4e4b\u548c"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/sum-root-to-leaf-numbers",children:"129.\u6c42\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u6570\u5b57\u4e4b\u548c"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8ba1\u7b97\u4ece\u6839\u5230\u53f6\u5b50\u8282\u70b9\u751f\u6210\u7684\u6240\u6709\u6570\u5b57\u4e4b\u548c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-10-29"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a112ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.6MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u9012\u5f52\u6574\u5408\u6570\u7ec4\uff0c\u6df1\u5ea6\u4f18\u5148\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function sumNumbers(root: TreeNode | null): number {\n  if (root === null) return 0;\n  return find(root).reduce((total, cur) => total + Number(cur.join('')), 0);\n  function find(root: TreeNode): number[][] {\n    const val = root.val;\n    const ans: number[][] = [];\n    if (root.left === null && root.right === null) {\n      ans.push([val]);\n    }\n    if (root.left !== null) {\n      ans.push(...find(root.left).map(v => [val, ...v]));\n    }\n    if (root.right !== null) {\n      ans.push(...find(root.right).map(v => [val, ...v]));\n    }\n    return ans;\n  }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var r=t(30758);const o={},s=r.createContext(o);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);