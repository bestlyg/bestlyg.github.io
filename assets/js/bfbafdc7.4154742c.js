"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[7764],{39061:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(86070),s=t(25710);const r={},c="2742.\u7ed9\u5899\u58c1\u5237\u6cb9\u6f06",o={id:"leetcode/2701-2800/\u7ed9\u5899\u58c1\u5237\u6cb9\u6f06",title:"2742.\u7ed9\u5899\u58c1\u5237\u6cb9\u6f06",description:"\u94fe\u63a5\uff1a2742.\u7ed9\u5899\u58c1\u5237\u6cb9\u6f06",source:"@site/docs/leetcode/2701-2800/2742.\u7ed9\u5899\u58c1\u5237\u6cb9\u6f06.md",sourceDirName:"leetcode/2701-2800",slug:"/leetcode/2701-2800/\u7ed9\u5899\u58c1\u5237\u6cb9\u6f06",permalink:"/docs/leetcode/2701-2800/\u7ed9\u5899\u58c1\u5237\u6cb9\u6f06",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2742,frontMatter:{},sidebar:"journal",previous:{title:"2741.\u7279\u522b\u7684\u6392\u5217",permalink:"/docs/leetcode/2701-2800/\u7279\u522b\u7684\u6392\u5217"},next:{title:"2744.\u6700\u5927\u5b57\u7b26\u4e32\u914d\u5bf9\u6570\u76ee",permalink:"/docs/leetcode/2701-2800/\u6700\u5927\u5b57\u7b26\u4e32\u914d\u5bf9\u6570\u76ee"}},l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"2742\u7ed9\u5899\u58c1\u5237\u6cb9\u6f06",children:"2742.\u7ed9\u5899\u58c1\u5237\u6cb9\u6f06"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/painting-the-walls",children:"2742.\u7ed9\u5899\u58c1\u5237\u6cb9\u6f06"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u5237\u5b8c n \u5835\u5899\u6700\u5c11\u5f00\u9500\u4e3a\u591a\u5c11\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-06-29"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a2024ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a492.34MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def paintWalls(self, cost: List[int], time: List[int]) -> int:\n        n = len(cost)\n        @cache\n        def dfs(idx: int, cur_time: int) -> int:\n            if cur_time >= n - idx: return 0\n            if idx == n: return inf\n            return min(\n                dfs(idx + 1, cur_time + time[idx]) + cost[idx],\n                dfs(idx + 1, cur_time - 1)\n            )\n        return dfs(0, 0)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var i=t(30758);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);