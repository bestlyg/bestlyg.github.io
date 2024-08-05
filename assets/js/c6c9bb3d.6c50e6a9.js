"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[68749],{7749:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=s(86070),r=s(25710);const i={},o="2765.\u6700\u957f\u4ea4\u66ff\u5b50\u6570\u7ec4",l={id:"leetcode/2701-2800/\u6700\u957f\u4ea4\u66ff\u5b50\u6570\u7ec4",title:"2765.\u6700\u957f\u4ea4\u66ff\u5b50\u6570\u7ec4",description:"\u94fe\u63a5\uff1a2765.\u6700\u957f\u4ea4\u66ff\u5b50\u6570\u7ec4",source:"@site/docs/leetcode/2701-2800/2765.\u6700\u957f\u4ea4\u66ff\u5b50\u6570\u7ec4.md",sourceDirName:"leetcode/2701-2800",slug:"/leetcode/2701-2800/\u6700\u957f\u4ea4\u66ff\u5b50\u6570\u7ec4",permalink:"/web/site/docs/leetcode/2701-2800/\u6700\u957f\u4ea4\u66ff\u5b50\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2765,frontMatter:{},sidebar:"journal",previous:{title:"2763.\u6240\u6709\u5b50\u6570\u7ec4\u4e2d\u4e0d\u5e73\u8861\u6570\u5b57\u4e4b\u548c",permalink:"/web/site/docs/leetcode/2701-2800/\u6240\u6709\u5b50\u6570\u7ec4\u4e2d\u4e0d\u5e73\u8861\u6570\u5b57\u4e4b\u548c"},next:{title:"2766.\u91cd\u65b0\u653e\u7f6e\u77f3\u5757",permalink:"/web/site/docs/leetcode/2701-2800/\u91cd\u65b0\u653e\u7f6e\u77f3\u5757"}},c={},a=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"2765\u6700\u957f\u4ea4\u66ff\u5b50\u6570\u7ec4",children:"2765.\u6700\u957f\u4ea4\u66ff\u5b50\u6570\u7ec4"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/longest-alternating-subarray",children:"2765.\u6700\u957f\u4ea4\u66ff\u5b50\u6570\u7ec4"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u679a\u4e3e",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de nums \u4e2d\u6240\u6709 \u4ea4\u66ff \u5b50\u6570\u7ec4\u4e2d\uff0c\u6700\u957f\u7684\u957f\u5ea6\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u4ea4\u66ff\u5b50\u6570\u7ec4\uff0c\u8bf7\u4f60\u8fd4\u56de -1 \u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-01-23"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a57ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.51MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e00\u6b21\u904d\u5386\uff0c\u8bb0\u5f55\u5f53\u524d\u4e0b\u6807\u4e3a\u7ed3\u5c3e\u7684\u6700\u5927\u503c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def alternatingSubarray(self, nums: List[int]) -> int:\n        n = len(nums)\n        ans = res = 2 if nums[1] - nums[0] == 1 else 0\n        for i in range(2, n):\n            if res and nums[i] == nums[i - 2]:\n                res += 1\n            elif nums[i] - nums[i - 1] == 1:\n                res = 2\n            else:\n                res = 0\n            ans = max(ans, res)\n        return ans if ans else -1\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},25710:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(30758);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);