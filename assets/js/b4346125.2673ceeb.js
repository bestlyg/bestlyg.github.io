"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[68136],{72770:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=t(86070),s=t(31503);const i={},l="2376.\u7edf\u8ba1\u7279\u6b8a\u6574\u6570",o={id:"leetcode/2301-2400/\u7edf\u8ba1\u7279\u6b8a\u6574\u6570",title:"2376.\u7edf\u8ba1\u7279\u6b8a\u6574\u6570",description:"\u94fe\u63a5\uff1a2376.\u7edf\u8ba1\u7279\u6b8a\u6574\u6570",source:"@site/docs/leetcode/2301-2400/2376.\u7edf\u8ba1\u7279\u6b8a\u6574\u6570.md",sourceDirName:"leetcode/2301-2400",slug:"/leetcode/2301-2400/\u7edf\u8ba1\u7279\u6b8a\u6574\u6570",permalink:"/docs/leetcode/2301-2400/\u7edf\u8ba1\u7279\u6b8a\u6574\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2376,frontMatter:{},sidebar:"journal",previous:{title:"2374.\u8fb9\u79ef\u5206\u6700\u9ad8\u7684\u8282\u70b9",permalink:"/docs/leetcode/2301-2400/\u8fb9\u79ef\u5206\u6700\u9ad8\u7684\u8282\u70b9"},next:{title:"2379.\u5f97\u5230K\u4e2a\u9ed1\u5757\u7684\u6700\u5c11\u6d82\u8272\u6b21\u6570",permalink:"/docs/leetcode/2301-2400/\u5f97\u5230K\u4e2a\u9ed1\u5757\u7684\u6700\u5c11\u6d82\u8272\u6b21\u6570"}},c={},a=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"2376\u7edf\u8ba1\u7279\u6b8a\u6574\u6570",children:"2376.\u7edf\u8ba1\u7279\u6b8a\u6574\u6570"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/count-special-integers",children:"2376.\u7edf\u8ba1\u7279\u6b8a\u6574\u6570"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5982\u679c\u4e00\u4e2a\u6b63\u6574\u6570\u6bcf\u4e00\u4e2a\u6570\u4f4d\u90fd\u662f \u4e92\u4e0d\u76f8\u540c \u7684\uff0c\u6211\u4eec\u79f0\u5b83\u662f \u7279\u6b8a\u6574\u6570 \u3002\u7ed9\u4f60\u4e00\u4e2a \u6b63 \u6574\u6570 n \uff0c\u8bf7\u4f60\u8fd4\u56de\u533a\u95f4 [1, n] \u4e4b\u95f4\u7279\u6b8a\u6574\u6570\u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-09-20"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a349ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a35.45MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6570\u4f4dDP"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    @cache\n    def countSpecialNumbers(self, n: int, used: int = 0, first = True) -> int:\n        if n < 10:\n            res = 0\n            # \u5982\u679c\u662f\u9996\u4f4d\uff0c\u4e0d\u8003\u86510\n            start = 1 if first else 0\n            for v in range(start, n + 1):\n                if not (used & (1 << v)):\n                    res += 1\n            return res\n        arr = list(str(n))\n        max_num = int(arr[0]) * 10 ** (len(arr) - 1)\n        res = 0\n        for v in range(int(arr[0])):\n            if v == 0 and first: # \u9996\u4f4d\u4e140\u7684\u8bdd\u4e00\u5b9a\u8981\n                res += self.countSpecialNumbers(10 ** (len(arr) - 1) - 1, used, first)\n            elif not (used & (1 << v)): # \u8fd9\u4e2a\u6570\u5b57\u6ca1\u904d\u5386\u8fc7\u65f6\u624d\u8981\n                res += self.countSpecialNumbers(10 ** (len(arr) - 1) - 1, used | (1 << v), False)\n        # \u5982\u679c\u9996\u4f4d\u6ca1\u6709\u904d\u5386\u8fc7 \u4e14 \u4e0d\u80fd\u5b58\u5728\u4e24\u4e2a0\n        if not (used & (1 << int(arr[0]))) and len(str(n)) - len(str(n - max_num)) <= 2:\n            next_used = used | (1 << int(arr[0]))\n            # \u5982\u679c\u4e2d\u95f4\u5b58\u5728\u4e00\u4e2a0\uff0c\u5c31\u628a0\u653e\u8fdbused\n            if len(str(n - max_num)) != len(str(n)) - 1: next_used |= 1\n            res += self.countSpecialNumbers(n - max_num, next_used, False)\n        return res\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(30758);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);