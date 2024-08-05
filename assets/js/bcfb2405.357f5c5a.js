"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[19393],{7191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(86070),o=t(25710);const i={},r="2216.\u7f8e\u5316\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6570",l={id:"leetcode/2201-2300/\u7f8e\u5316\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6570",title:"2216.\u7f8e\u5316\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6570",description:"\u94fe\u63a5\uff1a2216.\u7f8e\u5316\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6570",source:"@site/docs/leetcode/2201-2300/2216.\u7f8e\u5316\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6570.md",sourceDirName:"leetcode/2201-2300",slug:"/leetcode/2201-2300/\u7f8e\u5316\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6570",permalink:"/web/site/docs/leetcode/2201-2300/\u7f8e\u5316\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2216,frontMatter:{},sidebar:"journal",previous:{title:"2208.\u5c06\u6570\u7ec4\u548c\u51cf\u534a\u7684\u6700\u5c11\u64cd\u4f5c\u6b21\u6570",permalink:"/web/site/docs/leetcode/2201-2300/\u5c06\u6570\u7ec4\u548c\u51cf\u534a\u7684\u6700\u5c11\u64cd\u4f5c\u6b21\u6570"},next:{title:"2225.\u627e\u51fa\u8f93\u6389\u96f6\u573a\u6216\u4e00\u573a\u6bd4\u8d5b\u7684\u73a9\u5bb6",permalink:"/web/site/docs/leetcode/2201-2300/\u627e\u51fa\u8f93\u6389\u96f6\u573a\u6216\u4e00\u573a\u6bd4\u8d5b\u7684\u73a9\u5bb6"}},c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"2216\u7f8e\u5316\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6570",children:"2216.\u7f8e\u5316\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6570"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-deletions-to-make-array-beautiful",children:"2216.\u7f8e\u5316\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6570"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u8d2a\u5fc3\u3001\u6570\u7ec4",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4f7f nums \u53d8\u4e3a\u7f8e\u4e3d\u6570\u7ec4\u6240\u9700\u5220\u9664\u7684 \u6700\u5c11 \u5143\u7d20\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-11-21"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a216ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a26.28MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e00\u6b21\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def minDeletion(self, nums: List[int]) -> int:\n        ans = 0\n        for i in range(0, len(nums) - 1):\n            if (i - ans) % 2 == 0 and nums[i] == nums[i + 1]: ans += 1\n        return ans + (len(nums) - ans) % 2\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(30758);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);