"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[59432],{76620:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(86070),o=t(25710);const s={},r="1997.\u8bbf\u95ee\u5b8c\u6240\u6709\u623f\u95f4\u7684\u7b2c\u4e00\u5929",l={id:"leetcode/1901-2000/\u8bbf\u95ee\u5b8c\u6240\u6709\u623f\u95f4\u7684\u7b2c\u4e00\u5929",title:"1997.\u8bbf\u95ee\u5b8c\u6240\u6709\u623f\u95f4\u7684\u7b2c\u4e00\u5929",description:"\u94fe\u63a5\uff1a1997.\u8bbf\u95ee\u5b8c\u6240\u6709\u623f\u95f4\u7684\u7b2c\u4e00\u5929",source:"@site/docs/leetcode/1901-2000/1997.\u8bbf\u95ee\u5b8c\u6240\u6709\u623f\u95f4\u7684\u7b2c\u4e00\u5929.md",sourceDirName:"leetcode/1901-2000",slug:"/leetcode/1901-2000/\u8bbf\u95ee\u5b8c\u6240\u6709\u623f\u95f4\u7684\u7b2c\u4e00\u5929",permalink:"/docs/leetcode/1901-2000/\u8bbf\u95ee\u5b8c\u6240\u6709\u623f\u95f4\u7684\u7b2c\u4e00\u5929",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1997,frontMatter:{},sidebar:"journal",previous:{title:"1996.\u6e38\u620f\u4e2d\u5f31\u89d2\u8272\u7684\u6570\u91cf",permalink:"/docs/leetcode/1901-2000/\u6e38\u620f\u4e2d\u5f31\u89d2\u8272\u7684\u6570\u91cf"},next:{title:"2000.\u53cd\u8f6c\u5355\u8bcd\u524d\u7f00",permalink:"/docs/leetcode/1901-2000/\u53cd\u8f6c\u5355\u8bcd\u524d\u7f00"}},c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"1997\u8bbf\u95ee\u5b8c\u6240\u6709\u623f\u95f4\u7684\u7b2c\u4e00\u5929",children:"1997.\u8bbf\u95ee\u5b8c\u6240\u6709\u623f\u95f4\u7684\u7b2c\u4e00\u5929"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/first-day-where-you-have-been-in-all-the-rooms",children:"1997.\u8bbf\u95ee\u5b8c\u6240\u6709\u623f\u95f4\u7684\u7b2c\u4e00\u5929"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u8fd4\u56de\u4f60\u8bbf\u95ee\u5b8c\u6240\u6709\u623f\u95f4\u7684\u7b2c\u4e00\u5929\u7684\u65e5\u671f\u7f16\u53f7\u3002\u9898\u76ee\u6570\u636e\u4fdd\u8bc1\u603b\u662f\u5b58\u5728\u8fd9\u6837\u7684\u4e00\u5929\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-03-28"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a289ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.05MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","dp[i][0]\u8868\u793a\u7b2ci\u4e2a\u6570,\u7b2c\u4e00\u6b21\u5947\u6570\u8bbf\u95ee\u7684\u5929\u6570\uff0cdp[i][1]\u8868\u793a\u7b2ci\u4e2a\u6570,\u7b2c\u4e00\u6b21\u5076\u6570\u8bbf\u95ee\u7684\u5929\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def firstDayBeenInAllRooms(self, nextVisit: List[int]) -> int:\n        n = len(nextVisit)\n        dp = [[0, 1] for _ in range(n)]\n        mod = 10 ** 9 + 7\n        for i in range(1, n):\n            dp[i][0] = (dp[i - 1][1] + 1) % mod\n            dp[i][1] = (dp[i][0] * 2 + 1 - dp[nextVisit[i]][0]) % mod\n        return dp[n - 1][0]\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(30758);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);