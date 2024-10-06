"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[83241],{67897:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(86070),r=t(25710);const i={},o="2187.\u5b8c\u6210\u65c5\u9014\u7684\u6700\u5c11\u65f6\u95f4",l={id:"leetcode/2101-2200/\u5b8c\u6210\u65c5\u9014\u7684\u6700\u5c11\u65f6\u95f4",title:"2187.\u5b8c\u6210\u65c5\u9014\u7684\u6700\u5c11\u65f6\u95f4",description:"\u94fe\u63a5\uff1a2187.\u5b8c\u6210\u65c5\u9014\u7684\u6700\u5c11\u65f6\u95f4",source:"@site/docs/leetcode/2101-2200/2187.\u5b8c\u6210\u65c5\u9014\u7684\u6700\u5c11\u65f6\u95f4.md",sourceDirName:"leetcode/2101-2200",slug:"/leetcode/2101-2200/\u5b8c\u6210\u65c5\u9014\u7684\u6700\u5c11\u65f6\u95f4",permalink:"/docs/leetcode/2101-2200/\u5b8c\u6210\u65c5\u9014\u7684\u6700\u5c11\u65f6\u95f4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2187,frontMatter:{},sidebar:"journal",previous:{title:"2185.\u7edf\u8ba1\u5305\u542b\u7ed9\u5b9a\u524d\u7f00\u7684\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/2101-2200/\u7edf\u8ba1\u5305\u542b\u7ed9\u5b9a\u524d\u7f00\u7684\u5b57\u7b26\u4e32"},next:{title:"2192.\u6709\u5411\u65e0\u73af\u56fe\u4e2d\u4e00\u4e2a\u8282\u70b9\u7684\u6240\u6709\u7956\u5148",permalink:"/docs/leetcode/2101-2200/\u6709\u5411\u65e0\u73af\u56fe\u4e2d\u4e00\u4e2a\u8282\u70b9\u7684\u6240\u6709\u7956\u5148"}},c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2187\u5b8c\u6210\u65c5\u9014\u7684\u6700\u5c11\u65f6\u95f4",children:"2187.\u5b8c\u6210\u65c5\u9014\u7684\u6700\u5c11\u65f6\u95f4"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/minimum-time-to-complete-trips",children:"2187.\u5b8c\u6210\u65c5\u9014\u7684\u6700\u5c11\u65f6\u95f4"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570 totalTrips \uff0c\u8868\u793a\u6240\u6709\u516c\u4ea4\u8f66 \u603b\u5171 \u9700\u8981\u5b8c\u6210\u7684\u65c5\u9014\u6570\u76ee\u3002\u8bf7\u4f60\u8fd4\u56de\u5b8c\u6210 \u81f3\u5c11 totalTrips \u8d9f\u65c5\u9014\u9700\u8981\u82b1\u8d39\u7684 \u6700\u5c11 \u65f6\u95f4\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-10-05"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a2504ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a28.99MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u7b54\u6848"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def minimumTime(self, time: List[int], totalTrips: int) -> int:\n        l = 0\n        r = sys.maxsize\n        while l < r:\n            m = (l + r) // 2\n            if sum(m // t for t in time) >= totalTrips:\n                r = m\n            else:\n                l = m + 1\n        return l\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(30758);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);