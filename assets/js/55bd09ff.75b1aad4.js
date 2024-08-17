"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[57910],{34939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(86070),r=t(25710);const i={},o="494.\u76ee\u6807\u548c",c={id:"leetcode/401-500/\u76ee\u6807\u548c",title:"494.\u76ee\u6807\u548c",description:"\u94fe\u63a5\uff1a494.\u76ee\u6807\u548c",source:"@site/docs/leetcode/401-500/494.\u76ee\u6807\u548c.md",sourceDirName:"leetcode/401-500",slug:"/leetcode/401-500/\u76ee\u6807\u548c",permalink:"/docs/leetcode/401-500/\u76ee\u6807\u548c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:494,frontMatter:{},sidebar:"journal",previous:{title:"492.\u6784\u9020\u77e9\u5f62",permalink:"/docs/leetcode/401-500/\u6784\u9020\u77e9\u5f62"},next:{title:"495.\u63d0\u83ab\u653b\u51fb",permalink:"/docs/leetcode/401-500/\u63d0\u83ab\u653b\u51fb"}},l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"494\u76ee\u6807\u548c",children:"494.\u76ee\u6807\u548c"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/target-sum",children:"494.\u76ee\u6807\u548c"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212\u3001\u56de\u6eaf",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u53ef\u4ee5\u901a\u8fc7\u4e0a\u8ff0\u65b9\u6cd5\u6784\u9020\u7684\u3001\u8fd0\u7b97\u7ed3\u679c\u7b49\u4e8e target \u7684\u4e0d\u540c \u8868\u8fbe\u5f0f \u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-06-30"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a200ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43.27MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dfs\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def findTargetSumWays(self, nums: List[int], target: int) -> int:\n        @cache\n        def dfs(idx: int, target: int) -> int:\n            if idx == len(nums): return int(0 == target) \n            return dfs(idx + 1, target + nums[idx]) + dfs(idx + 1, target - nums[idx])\n        return dfs(0, target)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(30758);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);