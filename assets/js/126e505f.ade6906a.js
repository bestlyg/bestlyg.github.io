"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[14247],{67359:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(86070),i=t(31503);const r={},c="2813.\u5b50\u5e8f\u5217\u6700\u5927\u4f18\u96c5\u5ea6",o={id:"leetcode/2801-2900/\u5b50\u5e8f\u5217\u6700\u5927\u4f18\u96c5\u5ea6",title:"2813.\u5b50\u5e8f\u5217\u6700\u5927\u4f18\u96c5\u5ea6",description:"\u94fe\u63a5\uff1a2813.\u5b50\u5e8f\u5217\u6700\u5927\u4f18\u96c5\u5ea6",source:"@site/docs/leetcode/2801-2900/2813.\u5b50\u5e8f\u5217\u6700\u5927\u4f18\u96c5\u5ea6.md",sourceDirName:"leetcode/2801-2900",slug:"/leetcode/2801-2900/\u5b50\u5e8f\u5217\u6700\u5927\u4f18\u96c5\u5ea6",permalink:"/docs/leetcode/2801-2900/\u5b50\u5e8f\u5217\u6700\u5927\u4f18\u96c5\u5ea6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2813,frontMatter:{},sidebar:"journal",previous:{title:"2810.\u6545\u969c\u952e\u76d8",permalink:"/docs/leetcode/2801-2900/\u6545\u969c\u952e\u76d8"},next:{title:"2824.\u7edf\u8ba1\u548c\u5c0f\u4e8e\u76ee\u6807\u7684\u4e0b\u6807\u5bf9\u6570\u76ee",permalink:"/docs/leetcode/2801-2900/\u7edf\u8ba1\u548c\u5c0f\u4e8e\u76ee\u6807\u7684\u4e0b\u6807\u5bf9\u6570\u76ee"}},l={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2813\u5b50\u5e8f\u5217\u6700\u5927\u4f18\u96c5\u5ea6",children:"2813.\u5b50\u5e8f\u5217\u6700\u5927\u4f18\u96c5\u5ea6"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-elegance-of-a-k-length-subsequence",children:"2813.\u5b50\u5e8f\u5217\u6700\u5927\u4f18\u96c5\u5ea6"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u6392\u5e8f\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4f60\u7684\u4efb\u52a1\u662f\u4ece items \u6240\u6709\u957f\u5ea6\u4e3a k \u7684\u5b50\u5e8f\u5217\u4e2d\uff0c\u627e\u51fa \u6700\u5927\u4f18\u96c5\u5ea6 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-06-13"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a237ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a42.13MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4ece\u5927\u5230\u5c0f\u6536\u76ca\u6392\u5e8f\u540e\uff0c\u904d\u5386\u65f6\u8bb0\u5f55\u5f53\u524d\u7c7b\u76ee\u5b58\u5728\u7684\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def findMaximumElegance(self, items: List[List[int]], k: int) -> int:\n        items.sort(key = lambda item: -item[0])\n        print(items)\n        set1 = set()\n        stack2 = []\n        cur = 0\n        for i in range(k):\n            item = items[i]\n            cur += item[0]\n            if item[1] in set1:\n                stack2.append(item[0])\n            else:\n                set1.add(item[1])\n        res = cur + len(set1) ** 2\n        for i in range(k, len(items)):\n            item = items[i]\n            if item[1] not in set1 and len(stack2):\n                cur += item[0] - stack2.pop()\n                set1.add(item[1])\n            res = max(res, cur + len(set1) ** 2)\n        return res\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(30758);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);