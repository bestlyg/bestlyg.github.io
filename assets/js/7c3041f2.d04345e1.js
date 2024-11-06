"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[10221],{31048:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(86070),r=t(31503);const o={},l="1845.\u5ea7\u4f4d\u9884\u7ea6\u7ba1\u7406\u7cfb\u7edf",i={id:"leetcode/1801-1900/\u5ea7\u4f4d\u9884\u7ea6\u7ba1\u7406\u7cfb\u7edf",title:"1845.\u5ea7\u4f4d\u9884\u7ea6\u7ba1\u7406\u7cfb\u7edf",description:"\u94fe\u63a5\uff1a1845.\u5ea7\u4f4d\u9884\u7ea6\u7ba1\u7406\u7cfb\u7edf",source:"@site/docs/leetcode/1801-1900/1845.\u5ea7\u4f4d\u9884\u7ea6\u7ba1\u7406\u7cfb\u7edf.md",sourceDirName:"leetcode/1801-1900",slug:"/leetcode/1801-1900/\u5ea7\u4f4d\u9884\u7ea6\u7ba1\u7406\u7cfb\u7edf",permalink:"/docs/leetcode/1801-1900/\u5ea7\u4f4d\u9884\u7ea6\u7ba1\u7406\u7cfb\u7edf",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1845,frontMatter:{},sidebar:"journal",previous:{title:"1838.\u6700\u9ad8\u9891\u5143\u7d20\u7684\u9891\u6570",permalink:"/docs/leetcode/1801-1900/\u6700\u9ad8\u9891\u5143\u7d20\u7684\u9891\u6570"},next:{title:"1851.\u5305\u542b\u6bcf\u4e2a\u67e5\u8be2\u7684\u6700\u5c0f\u533a\u95f4",permalink:"/docs/leetcode/1801-1900/\u5305\u542b\u6bcf\u4e2a\u67e5\u8be2\u7684\u6700\u5c0f\u533a\u95f4"}},c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1845\u5ea7\u4f4d\u9884\u7ea6\u7ba1\u7406\u7cfb\u7edf",children:"1845.\u5ea7\u4f4d\u9884\u7ea6\u7ba1\u7406\u7cfb\u7edf"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/seat-reservation-manager",children:"1845.\u5ea7\u4f4d\u9884\u7ea6\u7ba1\u7406\u7cfb\u7edf"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4f4d\u4e8e\u4f4d\u7f6e k\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09\u7684\u4eba\u5b8c\u6210\u4e70\u7968\u9700\u8981\u7684\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-09-30"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a423ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a45.07MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","heap"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class SeatManager:\n    def __init__(self, n: int):\n        self.q = [i + 1 for i in range(n)]\n    def reserve(self) -> int:\n        return heappop(self.q)\n    def unreserve(self, seatNumber: int) -> None:\n        heappush(self.q, seatNumber)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(30758);const r={},o=s.createContext(r);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);