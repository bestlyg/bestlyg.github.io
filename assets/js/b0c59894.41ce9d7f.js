"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[88141],{90494:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(86070),i=t(25710);const r={},o="1035.\u4e0d\u76f8\u4ea4\u7684\u7ebf",c={id:"leetcode/1001-1100/\u4e0d\u76f8\u4ea4\u7684\u7ebf",title:"1035.\u4e0d\u76f8\u4ea4\u7684\u7ebf",description:"\u94fe\u63a5\uff1a1035.\u4e0d\u76f8\u4ea4\u7684\u7ebf",source:"@site/docs/leetcode/1001-1100/1035.\u4e0d\u76f8\u4ea4\u7684\u7ebf.md",sourceDirName:"leetcode/1001-1100",slug:"/leetcode/1001-1100/\u4e0d\u76f8\u4ea4\u7684\u7ebf",permalink:"/docs/leetcode/1001-1100/\u4e0d\u76f8\u4ea4\u7684\u7ebf",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1035,frontMatter:{},sidebar:"journal",previous:{title:"1034.\u8fb9\u754c\u7740\u8272",permalink:"/docs/leetcode/1001-1100/\u8fb9\u754c\u7740\u8272"},next:{title:"1035.\u4e0d\u76f8\u4ea4\u7684\u7ebf",permalink:"/docs/leetcode/1001-1100/\u4e0d\u76f8\u4ea4\u7684\u7ebf"}},l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1035\u4e0d\u76f8\u4ea4\u7684\u7ebf",children:"1035.\u4e0d\u76f8\u4ea4\u7684\u7ebf"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/uncrossed-lines",children:"1035.\u4e0d\u76f8\u4ea4\u7684\u7ebf"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4ee5\u8fd9\u79cd\u65b9\u6cd5\u7ed8\u5236\u7ebf\u6761\uff0c\u5e76\u8fd4\u56de\u53ef\u4ee5\u7ed8\u5236\u7684\u6700\u5927\u8fde\u7ebf\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-08-11"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a169ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a23.7MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8bb0\u5fc6\u8bdddfs\u904d\u5386\u6240\u6709\u4e0d\u60f3\u4ea4\u7684\u53ef\u80fd"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def maxUncrossedLines(self, nums1: List[int], nums2: List[int]) -> int:\n        map2 = defaultdict(list)\n        for i, num in enumerate(nums2): map2[num].append(i)\n        @cache\n        def run(idx: int, last: int) -> int:\n            if idx == len(nums1): return 0\n            res = run(idx + 1, last)\n            for next_idx in map2[nums1[idx]]:\n                if next_idx <= last: continue\n                res = max(res, run(idx + 1, next_idx) + 1)\n            return res\n        return run(0, -1)\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(30758);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);