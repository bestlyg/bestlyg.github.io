"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[86608],{15695:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=r(86070),t=r(31503);const s={},o="2555.\u4e24\u4e2a\u7ebf\u6bb5\u83b7\u5f97\u7684\u6700\u591a\u5956\u54c1",a={id:"leetcode/2501-2600/\u4e24\u4e2a\u7ebf\u6bb5\u83b7\u5f97\u7684\u6700\u591a\u5956\u54c1",title:"2555.\u4e24\u4e2a\u7ebf\u6bb5\u83b7\u5f97\u7684\u6700\u591a\u5956\u54c1",description:"\u94fe\u63a5\uff1a2555.\u4e24\u4e2a\u7ebf\u6bb5\u83b7\u5f97\u7684\u6700\u591a\u5956\u54c1",source:"@site/docs/leetcode/2501-2600/2555.\u4e24\u4e2a\u7ebf\u6bb5\u83b7\u5f97\u7684\u6700\u591a\u5956\u54c1.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u4e24\u4e2a\u7ebf\u6bb5\u83b7\u5f97\u7684\u6700\u591a\u5956\u54c1",permalink:"/docs/leetcode/2501-2600/\u4e24\u4e2a\u7ebf\u6bb5\u83b7\u5f97\u7684\u6700\u591a\u5956\u54c1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2555,frontMatter:{},sidebar:"journal",previous:{title:"2552.\u7edf\u8ba1\u4e0a\u5347\u56db\u5143\u7ec4",permalink:"/docs/leetcode/2501-2600/\u7edf\u8ba1\u4e0a\u5347\u56db\u5143\u7ec4"},next:{title:"2558.\u4ece\u6570\u91cf\u6700\u591a\u7684\u5806\u53d6\u8d70\u793c\u7269",permalink:"/docs/leetcode/2501-2600/\u4ece\u6570\u91cf\u6700\u591a\u7684\u5806\u53d6\u8d70\u793c\u7269"}},l={},c=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"2555\u4e24\u4e2a\u7ebf\u6bb5\u83b7\u5f97\u7684\u6700\u591a\u5956\u54c1",children:"2555.\u4e24\u4e2a\u7ebf\u6bb5\u83b7\u5f97\u7684\u6700\u591a\u5956\u54c1"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/maximize-win-from-two-segments",children:"2555.\u4e24\u4e2a\u7ebf\u6bb5\u83b7\u5f97\u7684\u6700\u591a\u5956\u54c1"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u6ed1\u52a8\u7a97\u53e3",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u5728\u9009\u62e9\u4e24\u4e2a\u6700\u4f18\u7ebf\u6bb5\u7684\u524d\u63d0\u4e0b\uff0c\u53ef\u4ee5\u83b7\u5f97\u7684 \u6700\u591a \u5956\u54c1\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-09-12"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a614ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a28.86MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u6240\u6709\u533a\u95f4\uff0c\u5e76\u4e14\u7edf\u8ba1\u975e\u533a\u95f4\u5185\u7684\u6700\u5927\u503c"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"from sortedcontainers import SortedList\nclass Solution:\n    def maximizeWin(self, prizePositions: List[int], k: int) -> int:\n        n = len(prizePositions)\n        arr1 = []\n        i = 0\n        while i < n:\n            cnt = 1\n            p = i\n            while i + 1 < n and prizePositions[i + 1] == prizePositions[p]:\n                cnt += 1\n                i += 1\n            arr1.append((prizePositions[i], cnt))\n            i += 1\n        n = len(arr1)\n        arr2 = []\n        r = 0\n        cnt = 0\n        for i in range(n):\n            while r < n and arr1[r][0] <= arr1[i][0] + k:\n                cnt += arr1[r][1]\n                r += 1\n            arr2.append(cnt)\n            cnt -= arr1[i][1]\n        arr3 = []\n        l = n - 1\n        cnt = 0\n        for i in range(n - 1, -1, -1):\n            while l >= 0 and arr1[l][0] >= arr1[i][0] - k:\n                cnt += arr1[l][1]\n                l -= 1\n            arr3.append(cnt)\n            cnt -= arr1[i][1]\n        arr3.reverse()\n    \n        res = 0\n        sl = SortedList(key=lambda i: arr3[i])\n        sr = SortedList(key=lambda i: arr2[i])\n        for i in range(n): sr.add(i)\n        r = 0\n        for i in range(n):\n            val = arr2[i]\n            while r < n and arr1[r][0] <= arr1[i][0] + k:\n                sr.remove(r)\n                r += 1\n            val2 = 0\n            if sl: val2 = max(val2, arr3[sl[-1]])\n            if sr: val2 = max(val2, arr2[sr[-1]])\n            res = max(res, val + val2)\n            sl.add(i)\n        return res\n"})})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},31503:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>a});var i=r(30758);const t={},s=i.createContext(t);function o(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);