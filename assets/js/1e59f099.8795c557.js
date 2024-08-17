"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[14011],{83461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(86070),r=t(25710);const s={},o="72.\u7f16\u8f91\u8ddd\u79bb",c={id:"leetcode/1-100/\u7f16\u8f91\u8ddd\u79bb",title:"72.\u7f16\u8f91\u8ddd\u79bb",description:"\u94fe\u63a5\uff1a72.\u7f16\u8f91\u8ddd\u79bb",source:"@site/docs/leetcode/1-100/72.\u7f16\u8f91\u8ddd\u79bb.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/\u7f16\u8f91\u8ddd\u79bb",permalink:"/docs/leetcode/1-100/\u7f16\u8f91\u8ddd\u79bb",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:72,frontMatter:{},sidebar:"journal",previous:{title:"71.\u7b80\u5316\u8def\u5f84",permalink:"/docs/leetcode/1-100/\u7b80\u5316\u8def\u5f84"},next:{title:"73.\u77e9\u9635\u7f6e\u96f6",permalink:"/docs/leetcode/1-100/\u77e9\u9635\u7f6e\u96f6"}},d={},l=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"72\u7f16\u8f91\u8ddd\u79bb",children:"72.\u7f16\u8f91\u8ddd\u79bb"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/edit-distance",children:"72.\u7f16\u8f91\u8ddd\u79bb"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e24\u4e2a\u5355\u8bcd word1 \u548c word2\uff0c \u8bf7\u8fd4\u56de\u5c06 word1 \u8f6c\u6362\u6210 word2 \u6240\u4f7f\u7528\u7684\u6700\u5c11\u64cd\u4f5c\u6570  \u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-23"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a18.8MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp\u5224\u65ad\u6bcf\u79cd\u60c5\u51b5\u4e0b\u7684\u6700\u5c0f\u64cd\u4f5c\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def minDistance(self, word1: str, word2: str) -> int:\n        n1, n2 = len(word1), len(word2)\n        @cache\n        def dfs(i1: int, i2: int) -> int:\n            if i1 == n1: return n2 - i2\n            if i2 == n2: return n1 - i1\n            if word1[i1] == word2[i2]: return dfs(i1 + 1, i2 + 1)\n            return min(\n                dfs(i1 + 1, i2) + 1,    # i1 \u5220\u9664\u4e00\u4e2a\u5b57\u7b26\n                dfs(i1, i2 + 1) + 1,    # i1 \u63d2\u5165\u4e00\u4e2a\u5b57\u7b26\n                dfs(i1 + 1, i2 + 1) + 1 # i1 \u66ff\u6362\u4e00\u4e2a\u5b57\u7b26\n            )\n        return dfs(0, 0) \n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(30758);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);