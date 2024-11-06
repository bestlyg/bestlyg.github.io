"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[96620],{96589:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=r(86070),s=r(31503);const i={},c="383.\u8d4e\u91d1\u4fe1",o={id:"leetcode/301-400/\u8d4e\u91d1\u4fe1",title:"383.\u8d4e\u91d1\u4fe1",description:"\u94fe\u63a5\uff1a383.\u8d4e\u91d1\u4fe1",source:"@site/docs/leetcode/301-400/383.\u8d4e\u91d1\u4fe1.md",sourceDirName:"leetcode/301-400",slug:"/leetcode/301-400/\u8d4e\u91d1\u4fe1",permalink:"/docs/leetcode/301-400/\u8d4e\u91d1\u4fe1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:383,frontMatter:{},sidebar:"journal",previous:{title:"381.O(1)\u65f6\u95f4\u63d2\u5165\u3001\u5220\u9664\u548c\u83b7\u53d6\u968f\u673a\u5143\u7d20-\u5141\u8bb8\u91cd\u590d",permalink:"/docs/leetcode/301-400/O(1)\u65f6\u95f4\u63d2\u5165\u3001\u5220\u9664\u548c\u83b7\u53d6\u968f\u673a\u5143\u7d20-\u5141\u8bb8\u91cd\u590d"},next:{title:"384.\u6253\u4e71\u6570\u7ec4",permalink:"/docs/leetcode/301-400/\u6253\u4e71\u6570\u7ec4"}},l={},a=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - c",id:"\u9898\u89e3-2---c",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"383\u8d4e\u91d1\u4fe1",children:"383.\u8d4e\u91d1\u4fe1"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/ransom-note",children:"383.\u8d4e\u91d1\u4fe1"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u8ba1\u6570",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u8d4e\u91d1\u4fe1 (ransomNote) \u5b57\u7b26\u4e32\u548c\u4e00\u4e2a\u6742\u5fd7(magazine)\u5b57\u7b26\u4e32\uff0c\u5224\u65ad ransomNote \u80fd\u4e0d\u80fd\u7531 magazines \u91cc\u9762\u7684\u5b57\u7b26\u6784\u6210\u3002\u5982\u679c\u53ef\u4ee5\u6784\u6210\uff0c\u8fd4\u56de true \uff1b\u5426\u5219\u8fd4\u56de false \u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-04"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a92ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a41MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"function canConstruct(ransomNote: string, magazine: string): boolean {\n  const map: Record<string, number> = {};\n  for (const c of magazine) map[c] = (map[c] ?? 0) + 1;\n  for (const c of ransomNote) {\n    if (!map[c]) return false;\n    map[c]--;\n  }\n  return true;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-2---c",children:"\u9898\u89e3 2 - c"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-04"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a156ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.4MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"bool canConstruct(char * ransomNote, char * magazine){\n    int ans[26] = {0};\n    for (int i = 0; i < strlen(magazine); i++) ans[magazine[i] - 'a']++;\n    for (int i = 0; i < strlen(ransomNote); i++) {\n        if (!ans[ransomNote[i] - 'a']) return 0;\n        ans[ransomNote[i] - 'a']--;\n    }\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-01-07"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.06MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def canConstruct(self, ransomNote: str, magazine: str) -> bool:\n        map = Counter(magazine)\n        for c in ransomNote:\n            map[c] -= 1\n            if map[c] < 0: return False\n        return True\n"})})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},31503:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>o});var t=r(30758);const s={},i=t.createContext(s);function c(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);