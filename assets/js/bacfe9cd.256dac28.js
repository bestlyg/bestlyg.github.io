"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[112],{67184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(86070),i=t(25710);const r={},o="3098.\u6c42\u51fa\u6240\u6709\u5b50\u5e8f\u5217\u7684\u80fd\u91cf\u548c",c={id:"leetcode/3001-3100/\u6c42\u51fa\u6240\u6709\u5b50\u5e8f\u5217\u7684\u80fd\u91cf\u548c",title:"3098.\u6c42\u51fa\u6240\u6709\u5b50\u5e8f\u5217\u7684\u80fd\u91cf\u548c",description:"\u94fe\u63a5\uff1a3098.\u6c42\u51fa\u6240\u6709\u5b50\u5e8f\u5217\u7684\u80fd\u91cf\u548c",source:"@site/docs/leetcode/3001-3100/3098.\u6c42\u51fa\u6240\u6709\u5b50\u5e8f\u5217\u7684\u80fd\u91cf\u548c.md",sourceDirName:"leetcode/3001-3100",slug:"/leetcode/3001-3100/\u6c42\u51fa\u6240\u6709\u5b50\u5e8f\u5217\u7684\u80fd\u91cf\u548c",permalink:"/docs/leetcode/3001-3100/\u6c42\u51fa\u6240\u6709\u5b50\u5e8f\u5217\u7684\u80fd\u91cf\u548c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3098,frontMatter:{},sidebar:"journal",previous:{title:"3096.\u5f97\u5230\u66f4\u591a\u5206\u6570\u7684\u6700\u5c11\u5173\u5361\u6570\u76ee",permalink:"/docs/leetcode/3001-3100/\u5f97\u5230\u66f4\u591a\u5206\u6570\u7684\u6700\u5c11\u5173\u5361\u6570\u76ee"},next:{title:"3099.\u54c8\u6c99\u5fb7\u6570",permalink:"/docs/leetcode/3001-3100/\u54c8\u6c99\u5fb7\u6570"}},l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"3098\u6c42\u51fa\u6240\u6709\u5b50\u5e8f\u5217\u7684\u80fd\u91cf\u548c",children:"3098.\u6c42\u51fa\u6240\u6709\u5b50\u5e8f\u5217\u7684\u80fd\u91cf\u548c"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/find-the-sum-of-subsequence-powers",children:"3098.\u6c42\u51fa\u6240\u6709\u5b50\u5e8f\u5217\u7684\u80fd\u91cf\u548c"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u6392\u5e8f",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de nums \u4e2d\u957f\u5ea6 \u7b49\u4e8e k \u7684 \u6240\u6709 \u5b50\u5e8f\u5217\u7684 \u80fd\u91cf\u548c \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-07-23"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a3583ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a759.11MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def sumOfPowers(self, nums: List[int], k: int) -> int:\n        n = len(nums)\n        nums.sort()\n        @cache\n        def dfs(idx: int, k: int, prev_idx: int, cur_min: int) -> int:\n            if k == 0: return cur_min\n            if idx == n: return 0\n            next_min = cur_min if prev_idx == -1 else min(cur_min, nums[idx] - nums[prev_idx])\n            return dfs(idx + 1, k, prev_idx, cur_min) + dfs(idx + 1, k - 1, idx, next_min)\n        return dfs(0, k, -1, inf) % (10 ** 9 + 7)\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(30758);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);