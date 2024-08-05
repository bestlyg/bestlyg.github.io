"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[27710],{94884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(86070),r=t(25710);const i={},c="90.\u5b50\u96c6II",o={id:"leetcode/1-100/\u5b50\u96c6II",title:"90.\u5b50\u96c6II",description:"\u94fe\u63a5\uff1a90.\u5b50\u96c6II",source:"@site/docs/leetcode/1-100/90.\u5b50\u96c6II.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u5b50\u96c6II",permalink:"/web/site/docs/leetcode/1-100/\u5b50\u96c6II",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:90,frontMatter:{},sidebar:"journal",previous:{title:"89.\u683c\u96f7\u7f16\u7801",permalink:"/web/site/docs/leetcode/1-100/\u683c\u96f7\u7f16\u7801"},next:{title:"92.\u53cd\u8f6c\u94fe\u8868II",permalink:"/web/site/docs/leetcode/1-100/\u53cd\u8f6c\u94fe\u8868II"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"90\u5b50\u96c6ii",children:"90.\u5b50\u96c6II"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/subsets-ii",children:"90.\u5b50\u96c6II"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4\u3001\u56de\u6eaf",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \uff0c\u5176\u4e2d\u53ef\u80fd\u5305\u542b\u91cd\u590d\u5143\u7d20\uff0c\u8bf7\u4f60\u8fd4\u56de\u8be5\u6570\u7ec4\u6240\u6709\u53ef\u80fd\u7684\u5b50\u96c6\uff08\u5e42\u96c6\uff09\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-03-31"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a108ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a44.8MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u67e5\u627e\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function subsetsWithDup(nums: number[]): number[][] {\n  const set = new Set<string>();\n  const ans: number[][] = [[]];\n  const find = (arr: number[]) => {\n    const len = arr.length;\n    if (len === 0) return;\n    const str = arr.sort((a, b) => a - b).join(':');\n    if (set.has(str)) return;\n    set.add(str);\n    ans.push(arr);\n    for (let i = 0; i < len; i++) find([...arr.slice(0, i), ...arr.slice(i + 1)]);\n  };\n  find(nums);\n  return ans;\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(30758);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);