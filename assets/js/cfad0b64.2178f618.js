"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[94971],{18667:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var i=r(86070),t=r(25710);const s={},c="LCP40.\u5fc3\u7b97\u6311\u6218",d={id:"leetcode/LCP/LCP40.\u5fc3\u7b97\u6311\u6218",title:"LCP40.\u5fc3\u7b97\u6311\u6218",description:"\u94fe\u63a5\uff1aLCP40.\u5fc3\u7b97\u6311\u6218",source:"@site/docs/leetcode/LCP/LCP40.\u5fc3\u7b97\u6311\u6218.md",sourceDirName:"leetcode/LCP",slug:"/leetcode/LCP/LCP40.\u5fc3\u7b97\u6311\u6218",permalink:"/docs/leetcode/LCP/LCP40.\u5fc3\u7b97\u6311\u6218",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"LCP33.\u84c4\u6c34",permalink:"/docs/leetcode/LCP/LCP33.\u84c4\u6c34"},next:{title:"LCP41.\u9ed1\u767d\u7ffb\u8f6c\u68cb",permalink:"/docs/leetcode/LCP/LCP41.\u9ed1\u767d\u7ffb\u8f6c\u68cb"}},l={},o=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"lcp40\u5fc3\u7b97\u6311\u6218",children:"LCP40.\u5fc3\u7b97\u6311\u6218"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/uOAnQW",children:"LCP40.\u5fc3\u7b97\u6311\u6218"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u6392\u5e8f",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u300c\u529b\u6263\u6311\u6218\u8d5b\u300d\u5fc3\u7b97\u9879\u76ee\u7684\u6311\u6218\u6bd4\u8d5b\u4e2d\uff0c\u8981\u6c42\u9009\u624b\u4ece N \u5f20\u5361\u724c\u4e2d\u9009\u51fa cnt \u5f20\u5361\u724c\uff0c\u82e5\u8fd9 cnt \u5f20\u5361\u724c\u6570\u5b57\u603b\u548c\u4e3a\u5076\u6570\uff0c\u5219\u9009\u624b\u6210\u7ee9\u300c\u6709\u6548\u300d\u4e14\u5f97\u5206\u4e3a cnt \u5f20\u5361\u724c\u6570\u5b57\u603b\u548c\u3002 \u7ed9\u5b9a\u6570\u7ec4 cards \u548c cnt\uff0c\u5176\u4e2d cards[i] \u8868\u793a\u7b2c i \u5f20\u5361\u724c\u4e0a\u7684\u6570\u5b57\u3002 \u8bf7\u5e2e\u53c2\u8d5b\u9009\u624b\u8ba1\u7b97\u6700\u5927\u7684\u6709\u6548\u5f97\u5206\u3002\u82e5\u4e0d\u5b58\u5728\u83b7\u53d6\u6709\u6548\u5f97\u5206\u7684\u5361\u724c\u65b9\u6848\uff0c\u5219\u8fd4\u56de 0\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-08-01"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a209ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a25.76MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4ece\u5927\u5230\u5c0f\u6392\u5e8f\u540e\u4f9d\u6b21\u53d6\u503c\uff0c\u5982\u679c\u6700\u540e\u4e3a\u5076\u6570\u5219\u5c31\u662f\u6700\u5927\u503c\uff0c\u5982\u679c\u6700\u540e\u4e3a\u5947\u6570\uff0c\u6bd4\u8f83\u5220\u9664\u4e00\u4e2a\u5947\u6570\uff0c\u589e\u52a0\u4e00\u4e2a\u5076\u6570\uff0c\u548c\u5220\u9664\u4e00\u4e2a\u5076\u6570\uff0c\u589e\u52a0\u4e00\u4e2a\u5947\u6570\u4e24\u79cd\u65b9\u6848\u7684\u6700\u5927\u503c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def maxmiumScore(self, cards: List[int], cnt: int) -> int:\n        res = i = f = 0\n        arr = sorted(Counter(cards).items(), reverse = True)\n        while i < len(arr) and cnt > 0:\n            k, v = arr[i]\n            c = min(cnt, v)\n            cnt -= c\n            arr[i] = (k, v - c)\n            res += k * c\n            f ^= (k * c) & 1\n            i += 1\n        if f == 0: return res\n        else:\n            # v1\n            idx = i - 1\n            while idx > 0:\n                if arr[idx][0] % 2 != 0: break\n                idx -= 1\n            if idx == -1: v1 = 0\n            else:\n                v1 = res - arr[idx][0]\n                idx = i\n                if idx > 0 and arr[idx - 1][1] > 0: idx -= 1\n                while idx < len(arr):\n                    if arr[idx][0] % 2 == 0: break\n                    idx += 1\n                if idx == len(arr): v1 = 0\n                else: v1 += arr[idx][0]\n            # v2\n            idx = i - 1\n            while idx >= 0:\n                if arr[idx][0] % 2 == 0: break\n                idx -= 1\n            if idx == -1: v2 = 0\n            else:\n                v2 = res - arr[idx][0]\n                idx = i\n                if idx > 0 and arr[idx - 1][1] > 0: idx -= 1\n                while idx < len(arr):\n                    if arr[idx][0] % 2 != 0: break\n                    idx += 1\n                if idx == len(arr): v2 = 0\n                else: v2 += arr[idx][0]\n            return max(v1, v2)\n"})})]})}function x(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>d});var i=r(30758);const t={},s=i.createContext(t);function c(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);