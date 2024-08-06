"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[95006],{74846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=t(86070),r=t(25710);const o={},i="2834.\u627e\u51fa\u7f8e\u4e3d\u6570\u7ec4\u7684\u6700\u5c0f\u548c",l={id:"leetcode/2801-2900/\u627e\u51fa\u7f8e\u4e3d\u6570\u7ec4\u7684\u6700\u5c0f\u548c",title:"2834.\u627e\u51fa\u7f8e\u4e3d\u6570\u7ec4\u7684\u6700\u5c0f\u548c",description:"\u94fe\u63a5\uff1a2834.\u627e\u51fa\u7f8e\u4e3d\u6570\u7ec4\u7684\u6700\u5c0f\u548c",source:"@site/docs/leetcode/2801-2900/2834.\u627e\u51fa\u7f8e\u4e3d\u6570\u7ec4\u7684\u6700\u5c0f\u548c.md",sourceDirName:"leetcode/2801-2900",slug:"/leetcode/2801-2900/\u627e\u51fa\u7f8e\u4e3d\u6570\u7ec4\u7684\u6700\u5c0f\u548c",permalink:"/docs/leetcode/2801-2900/\u627e\u51fa\u7f8e\u4e3d\u6570\u7ec4\u7684\u6700\u5c0f\u548c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2834,frontMatter:{},sidebar:"journal",previous:{title:"2831.\u627e\u51fa\u6700\u957f\u7b49\u503c\u5b50\u6570\u7ec4",permalink:"/docs/leetcode/2801-2900/\u627e\u51fa\u6700\u957f\u7b49\u503c\u5b50\u6570\u7ec4"},next:{title:"2844.\u751f\u6210\u7279\u6b8a\u6570\u5b57\u7684\u6700\u5c11\u64cd\u4f5c",permalink:"/docs/leetcode/2801-2900/\u751f\u6210\u7279\u6b8a\u6570\u5b57\u7684\u6700\u5c11\u64cd\u4f5c"}},c={},a=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"2834\u627e\u51fa\u7f8e\u4e3d\u6570\u7ec4\u7684\u6700\u5c0f\u548c",children:"2834.\u627e\u51fa\u7f8e\u4e3d\u6570\u7ec4\u7684\u6700\u5c0f\u548c"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/find-the-minimum-possible-sum-of-a-beautiful-array",children:"2834.\u627e\u51fa\u7f8e\u4e3d\u6570\u7ec4\u7684\u6700\u5c0f\u548c"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u5b66",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u7b26\u5408\u6761\u4ef6\u7684\u7f8e\u4e3d\u6570\u7ec4\u6240\u53ef\u80fd\u5177\u5907\u7684 \u6700\u5c0f \u548c\uff0c\u5e76\u5bf9\u7ed3\u679c\u8fdb\u884c\u53d6\u6a21 109 + 7\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-03-08"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a159ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19.35MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8d2a\u5fc3\u83b7\u53d6target\u524d\u534a\u6bb5\u548ctarget\u5f00\u59cb\u5f80\u540e\u7684\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def minimumPossibleSum(self, n: int, target: int) -> int:\n        val = min(n, target // 2)\n        sum = (1 + val) * val // 2\n        if n > target // 2:\n            n -= target // 2\n            sum += (target + target + n - 1) * n // 2\n        return sum % ((11-1) ** 9 + 7)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(30758);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);