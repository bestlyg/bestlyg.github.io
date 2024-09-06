"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[67543],{80765:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(86070),s=t(25710);const o={},i="2786.\u8bbf\u95ee\u6570\u7ec4\u4e2d\u7684\u4f4d\u7f6e\u4f7f\u5206\u6570\u6700\u5927",c={id:"leetcode/2701-2800/\u8bbf\u95ee\u6570\u7ec4\u4e2d\u7684\u4f4d\u7f6e\u4f7f\u5206\u6570\u6700\u5927",title:"2786.\u8bbf\u95ee\u6570\u7ec4\u4e2d\u7684\u4f4d\u7f6e\u4f7f\u5206\u6570\u6700\u5927",description:"\u94fe\u63a5\uff1a2786.\u8bbf\u95ee\u6570\u7ec4\u4e2d\u7684\u4f4d\u7f6e\u4f7f\u5206\u6570\u6700\u5927",source:"@site/docs/leetcode/2701-2800/2786.\u8bbf\u95ee\u6570\u7ec4\u4e2d\u7684\u4f4d\u7f6e\u4f7f\u5206\u6570\u6700\u5927.md",sourceDirName:"leetcode/2701-2800",slug:"/leetcode/2701-2800/\u8bbf\u95ee\u6570\u7ec4\u4e2d\u7684\u4f4d\u7f6e\u4f7f\u5206\u6570\u6700\u5927",permalink:"/docs/leetcode/2701-2800/\u8bbf\u95ee\u6570\u7ec4\u4e2d\u7684\u4f4d\u7f6e\u4f7f\u5206\u6570\u6700\u5927",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2786,frontMatter:{},sidebar:"journal",previous:{title:"2779.\u6570\u7ec4\u7684\u6700\u5927\u7f8e\u4e3d\u503c",permalink:"/docs/leetcode/2701-2800/\u6570\u7ec4\u7684\u6700\u5927\u7f8e\u4e3d\u503c"},next:{title:"2788.\u6309\u5206\u9694\u7b26\u62c6\u5206\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/2701-2800/\u6309\u5206\u9694\u7b26\u62c6\u5206\u5b57\u7b26\u4e32"}},l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"2786\u8bbf\u95ee\u6570\u7ec4\u4e2d\u7684\u4f4d\u7f6e\u4f7f\u5206\u6570\u6700\u5927",children:"2786.\u8bbf\u95ee\u6570\u7ec4\u4e2d\u7684\u4f4d\u7f6e\u4f7f\u5206\u6570\u6700\u5927"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/visit-array-positions-to-maximize-score",children:"2786.\u8bbf\u95ee\u6570\u7ec4\u4e2d\u7684\u4f4d\u7f6e\u4f7f\u5206\u6570\u6700\u5927"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u4f60\u80fd\u5f97\u5230\u7684 \u6700\u5927 \u5f97\u5206\u4e4b\u548c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-06-14"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a264ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a31.34MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u65f6\u5b58\u50a8\u524d\u9762\u6700\u5927\u7684\u5947\u5076\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def maxScore(self, nums: List[int], x: int) -> int:\n        prev = [0, 0]\n        prev[nums[0] & 1] = nums[0]\n        prev[nums[0] & 1 ^ 1] = nums[0] - x\n        for num in nums[1:]:\n            v = max(prev[num & 1] + num, prev[num & 1 ^ 1] + num - x)\n            prev[num & 1] = max(prev[num & 1], v)\n        return max(prev)\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(30758);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);