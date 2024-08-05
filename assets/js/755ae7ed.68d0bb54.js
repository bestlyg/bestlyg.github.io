"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[15646],{30158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=n(86070),l=n(25710);const i={},s="LCR143.\u5b50\u7ed3\u6784\u5224\u65ad",c={id:"leetcode/1-100/LCR143.\u5b50\u7ed3\u6784\u5224\u65ad",title:"LCR143.\u5b50\u7ed3\u6784\u5224\u65ad",description:"\u94fe\u63a5\uff1aLCR143.\u5b50\u7ed3\u6784\u5224\u65ad",source:"@site/docs/leetcode/1-100/LCR143.\u5b50\u7ed3\u6784\u5224\u65ad.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/LCR143.\u5b50\u7ed3\u6784\u5224\u65ad",permalink:"/web/site/docs/leetcode/1-100/LCR143.\u5b50\u7ed3\u6784\u5224\u65ad",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"LCR140.\u8bad\u7ec3\u8ba1\u5212II",permalink:"/web/site/docs/leetcode/1-100/LCR140.\u8bad\u7ec3\u8ba1\u5212II"},next:{title:"LCR146.\u87ba\u65cb\u904d\u5386\u4e8c\u7ef4\u6570\u7ec4",permalink:"/web/site/docs/leetcode/1-100/LCR146.\u87ba\u65cb\u904d\u5386\u4e8c\u7ef4\u6570\u7ec4"}},u={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"lcr143\u5b50\u7ed3\u6784\u5224\u65ad",children:"LCR143.\u5b50\u7ed3\u6784\u5224\u65ad"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(t.a,{href:"https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof",children:"LCR143.\u5b50\u7ed3\u6784\u5224\u65ad"}),(0,r.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u6811\u3001\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u4e8c\u53c9\u6811",(0,r.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8f93\u5165\u4e24\u68f5\u4e8c\u53c9\u6811 A \u548c B\uff0c\u5224\u65ad B \u662f\u4e0d\u662f A \u7684\u5b50\u7ed3\u6784\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-03"}),"\n",(0,r.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a144ms"}),"\n",(0,r.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a58.2MB"}),"\n",(0,r.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4f9d\u6b21\u6bd4\u8f83\u6240\u6709\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {\n  if (!A || !B) return false;\n  if (A.val === B.val) {\n    if (\n      (!B.left && !B.right) ||\n      (!B.left && A.right?.val === B.right?.val && isSubStructure(A.right, B.right)) ||\n      (!B.right && A.left?.val === B.left?.val && isSubStructure(A.left, B.left)) ||\n      (A.right?.val === B.right?.val &&\n        A.left?.val === B.left?.val &&\n        isSubStructure(A.left, B.left) &&\n        isSubStructure(A.right, B.right))\n    )\n      return true;\n    return isSubStructure(A.left, B) || isSubStructure(A.right, B);\n  } else {\n    return isSubStructure(A.left, B) || isSubStructure(A.right, B);\n  }\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-04-03"}),"\n",(0,r.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a144ms"}),"\n",(0,r.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a58.1MB"}),"\n",(0,r.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,r.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u8f85\u52a9\u68c0\u6d4b\u5224\u65ad\u662f\u5426\u76f8\u7b49\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"const check = (A: TreeNode | null, B: TreeNode | null): boolean => {\n  if (!B) return true;\n  if (!A) return false;\n  return A.val === B.val && check(A.left, B.left) && check(A.right, B.right);\n};\nfunction isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {\n  if (!A || !B) return false;\n  if (check(A, B)) return true;\n  return isSubStructure(A.left, B) || isSubStructure(A.right, B);\n}\n"})})]})}function a(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(30758);const l={},i=r.createContext(l);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);