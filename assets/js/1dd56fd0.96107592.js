"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[84485],{29212:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(86070),r=t(25710);const s={},o="514.\u81ea\u7531\u4e4b\u8def",l={id:"leetcode/501-600/\u81ea\u7531\u4e4b\u8def",title:"514.\u81ea\u7531\u4e4b\u8def",description:"\u94fe\u63a5\uff1a514.\u81ea\u7531\u4e4b\u8def",source:"@site/docs/leetcode/501-600/514.\u81ea\u7531\u4e4b\u8def.md",sourceDirName:"leetcode/501-600",slug:"/leetcode/501-600/\u81ea\u7531\u4e4b\u8def",permalink:"/docs/leetcode/501-600/\u81ea\u7531\u4e4b\u8def",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:514,frontMatter:{},sidebar:"journal",previous:{title:"513.\u627e\u6811\u5de6\u4e0b\u89d2\u7684\u503c",permalink:"/docs/leetcode/501-600/\u627e\u6811\u5de6\u4e0b\u89d2\u7684\u503c"},next:{title:"515.\u5728\u6bcf\u4e2a\u6811\u884c\u4e2d\u627e\u6700\u5927\u503c",permalink:"/docs/leetcode/501-600/\u5728\u6bcf\u4e2a\u6811\u884c\u4e2d\u627e\u6700\u5927\u503c"}},c={},d=[{value:"\u9898\u89e3 1 - javascript",id:"\u9898\u89e3-1---javascript",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"514\u81ea\u7531\u4e4b\u8def",children:"514.\u81ea\u7531\u4e4b\u8def"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/freedom-trail",children:"514.\u81ea\u7531\u4e4b\u8def"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32 ring \uff0c\u8868\u793a\u523b\u5728\u5916\u73af\u4e0a\u7684\u7f16\u7801\uff1b\u7ed9\u5b9a\u53e6\u4e00\u4e2a\u5b57\u7b26\u4e32 key \uff0c\u8868\u793a\u9700\u8981\u62fc\u5199\u7684\u5173\u952e\u8bcd\u3002\u60a8\u9700\u8981\u7b97\u51fa\u80fd\u591f\u62fc\u5199\u5173\u952e\u8bcd\u4e2d\u6240\u6709\u5b57\u7b26\u7684\u6700\u5c11\u6b65\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---javascript",children:"\u9898\u89e3 1 - javascript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-11-11"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a140ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.82MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"const getIdx = (str, v) => str.codePointAt(v) - 'a'.codePointAt(0);\nvar findRotateSteps = function(ring, key) {\n    const n = ring.length, m = key.length;\n    const pos = new Array(26).fill(0).map(v => []);\n    for (let i = 0; i < n; ++i) {\n        pos[getIdx(ring, i)].push(i);\n    }\n    const dp = new Array(m).fill(0).map(v => new Array(n).fill(Number.MAX_SAFE_INTEGER));\n    for (const i of pos[getIdx(key, 0)]) {\n        dp[0][i] = Math.min(i, n - i) + 1;\n    }\n    for (let i = 1; i < m; ++i) {\n        for (const j of pos[getIdx(key, i)]) {\n            for (const k of pos[getIdx(key, i - 1)]) {\n                dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + Math.min(Math.abs(j - k), n - Math.abs(j - k)) + 1);\n            }\n        }\n    }\n    return dp[m - 1].reduce((pre, cur) => Math.min(pre, cur), Number.MAX_SAFE_INTEGER);\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-01-29"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a108ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.4MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def findRotateSteps(self, ring: str, key: str) -> int:\n        arr = defaultdict(list)\n        for i in range(len(ring)):\n            arr[ring[i]].append(i)\n        @cache\n        def dfs(i1: int, i2: int) -> int:\n            if i2 == len(key): return 0\n            if ring[i1] == key[i2]: return dfs(i1, i2 + 1) + 1\n            return min(\n                dfs(next_i, i2 + 1) + min(abs(i1 - next_i), len(ring) - abs(i1 - next_i)) + 1\n                for next_i in arr[key[i2]]\n            )\n        return dfs(0, 0)\n"})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>l});var i=t(30758);const r={},s=i.createContext(r);function o(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);