"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[95081],{69066:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(86070),r=t(25710);const i={},c="89.\u683c\u96f7\u7f16\u7801",l={id:"leetcode/1-100/\u683c\u96f7\u7f16\u7801",title:"89.\u683c\u96f7\u7f16\u7801",description:"\u94fe\u63a5\uff1a89.\u683c\u96f7\u7f16\u7801",source:"@site/docs/leetcode/1-100/89.\u683c\u96f7\u7f16\u7801.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u683c\u96f7\u7f16\u7801",permalink:"/web/site/docs/leetcode/1-100/\u683c\u96f7\u7f16\u7801",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:89,frontMatter:{},sidebar:"journal",previous:{title:"88.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",permalink:"/web/site/docs/leetcode/1-100/\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4"},next:{title:"90.\u5b50\u96c6II",permalink:"/web/site/docs/leetcode/1-100/\u5b50\u96c6II"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"89\u683c\u96f7\u7f16\u7801",children:"89.\u683c\u96f7\u7f16\u7801"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/gray-code",children:"89.\u683c\u96f7\u7f16\u7801"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u5b66\u3001\u56de\u6eaf",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u4ee3\u8868\u7f16\u7801\u603b\u4f4d\u6570\u7684\u975e\u8d1f\u6574\u6570 n\uff0c\u6253\u5370\u5176\u683c\u96f7\u7f16\u7801\u5e8f\u5217\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-07"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a140ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a54.1MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function grayCode(n: number): number[] {\n  if (n === 0) return [0];\n  const set = new Set<number>([0]);\n  const ans: number[] = [0];\n  dfs();\n  return ans;\n  function dfs(num = 0): boolean {\n    if (set.size === 2 ** n) {\n      return true;\n    }\n    for (let i = 0; i <= n; i++) {\n      const bit = 1 << i;\n      const nextNum = num & bit ? num & ~bit : num | bit;\n      if (set.has(nextNum)) continue;\n      set.add(nextNum);\n      ans.push(nextNum);\n      if (dfs(nextNum)) return true;\n      ans.pop();\n      set.delete(nextNum);\n    }\n    return false;\n  }\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-07"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a108ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a50.3MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540e\u534a\u90e8\u5206\u9006\u5e8f\u8f93\u51fa\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function grayCode(n: number): number[] {\n  const ans = [0];\n  if (n === 0) return ans;\n  while (n--) {\n    ans.push(\n      ...Array.from(ans)\n        .reverse()\n        .map(v => v | (1 << n))\n    );\n  }\n  return ans;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-01-08"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a11.5MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6bcf\u6b21\u53cd\u5411\u8986\u76d6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    vector<int> grayCode(int n) {\n        vector<int> ans(2, 0);\n        ans[1] = 1;\n        for (int i = 1; i < n; i++) {\n            for (int j = ans.size() - 1; j >= 0; j--) {\n                ans.push_back(ans[j] | 1 << i);\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var s=t(30758);const r={},i=s.createContext(r);function c(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);