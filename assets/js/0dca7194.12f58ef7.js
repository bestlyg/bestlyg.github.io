"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[90240],{28758:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var t=s(86070),i=s(25710);const r={},l="187.\u91cd\u590d\u7684DNA\u5e8f\u5217",c={id:"leetcode/101-200/\u91cd\u590d\u7684DNA\u5e8f\u5217",title:"187.\u91cd\u590d\u7684DNA\u5e8f\u5217",description:"\u94fe\u63a5\uff1a187.\u91cd\u590d\u7684DNA\u5e8f\u5217",source:"@site/docs/leetcode/101-200/187.\u91cd\u590d\u7684DNA\u5e8f\u5217.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u91cd\u590d\u7684DNA\u5e8f\u5217",permalink:"/docs/leetcode/101-200/\u91cd\u590d\u7684DNA\u5e8f\u5217",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:187,frontMatter:{},sidebar:"journal",previous:{title:"179.\u6700\u5927\u6570",permalink:"/docs/leetcode/101-200/\u6700\u5927\u6570"},next:{title:"188.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aIV",permalink:"/docs/leetcode/101-200/\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aIV"}},d={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - typescript",id:"\u9898\u89e3-3---typescript",level:2},{value:"\u9898\u89e3 4 - python",id:"\u9898\u89e3-4---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"187\u91cd\u590d\u7684dna\u5e8f\u5217",children:"187.\u91cd\u590d\u7684DNA\u5e8f\u5217"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/repeated-dna-sequences",children:"187.\u91cd\u590d\u7684DNA\u5e8f\u5217"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u6ed1\u52a8\u7a97\u53e3\u3001\u54c8\u5e0c\u51fd\u6570\u3001\u6eda\u52a8\u54c8\u5e0c",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\u6765\u627e\u51fa\u6240\u6709\u76ee\u6807\u5b50\u4e32\uff0c\u76ee\u6807\u5b50\u4e32\u7684\u957f\u5ea6\u4e3a 10\uff0c\u4e14\u5728 DNA \u5b57\u7b26\u4e32 s \u4e2d\u51fa\u73b0\u6b21\u6570\u8d85\u8fc7\u4e00\u6b21\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-07-24"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a50.4MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u6240\u6b32\u5b50\u4e32\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function findRepeatedDnaSequences(s: string): string[] {\n  const set = new Set<string>();\n  const ans = new Set<string>();\n  for (let i = 0, l = s.length; i <= l - 10; i++) {\n    const subStr = s.substr(i, 10);\n    if (set.has(subStr)) ans.add(subStr);\n    else set.add(subStr);\n  }\n  return [...ans];\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-08"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a128ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a52.1MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6ed1\u52a8\u7a97\u53e3\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function findRepeatedDnaSequences(s: string): string[] {\n  const set = new Set<string>();\n  const window = s.substr(0, 10).split('');\n  set.add(window.join(''));\n  const ans = new Set<string>();\n  for (let i = 10, l = s.length; i < l; i++) {\n    window.shift();\n    window.push(s[i]);\n    const str = window.join('');\n    if (set.has(str)) ans.add(str);\n    set.add(str);\n  }\n  return [...ans];\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---typescript",children:"\u9898\u89e3 3 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-10-08"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a50.6MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6ed1\u52a8\u7a97\u53e3\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function findRepeatedDnaSequences(s: string): string[] {\n  const set = new Set<string>();\n  let str = s.substr(0, 10);\n  set.add(str);\n  const ans = new Set<string>();\n  for (let i = 10, l = s.length; i < l; i++) {\n    str = str.substring(1) + s[i];\n    if (set.has(str)) ans.add(str);\n    set.add(str);\n  }\n  return [...ans];\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-4---python",children:"\u9898\u89e3 4 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-11-05"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a80ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a28.48MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def findRepeatedDnaSequences(self, s: str) -> List[str]:\n        res = []\n        m = Counter()\n        for i in range(len(s) - 9):\n            subs = s[i: i + 10]\n            m[subs] += 1\n            if m[subs] == 2: res.append(subs)\n        return res\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var t=s(30758);const i={},r=t.createContext(i);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);