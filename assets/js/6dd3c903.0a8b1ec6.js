"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[39765],{90304:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"leetcode/2201-2300/\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u9700\u8981\u7684\u6700\u5c11\u8f6e\u6570","title":"2244.\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u9700\u8981\u7684\u6700\u5c11\u8f6e\u6570","description":"\u94fe\u63a5\uff1a2244.\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u9700\u8981\u7684\u6700\u5c11\u8f6e\u6570","source":"@site/docs/leetcode/2201-2300/2244.\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u9700\u8981\u7684\u6700\u5c11\u8f6e\u6570.md","sourceDirName":"leetcode/2201-2300","slug":"/leetcode/2201-2300/\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u9700\u8981\u7684\u6700\u5c11\u8f6e\u6570","permalink":"/docs/leetcode/2201-2300/\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u9700\u8981\u7684\u6700\u5c11\u8f6e\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2244,"frontMatter":{},"sidebar":"journal","previous":{"title":"2240.\u4e70\u94a2\u7b14\u548c\u94c5\u7b14\u7684\u65b9\u6848\u6570","permalink":"/docs/leetcode/2201-2300/\u4e70\u94a2\u7b14\u548c\u94c5\u7b14\u7684\u65b9\u6848\u6570"},"next":{"title":"2251.\u82b1\u671f\u5185\u82b1\u7684\u6570\u76ee","permalink":"/docs/leetcode/2201-2300/\u82b1\u671f\u5185\u82b1\u7684\u6570\u76ee"}}');var r=t(86070),c=t(31503);const i={},o="2244.\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u9700\u8981\u7684\u6700\u5c11\u8f6e\u6570",l={},u=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"2244\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u9700\u8981\u7684\u6700\u5c11\u8f6e\u6570",children:"2244.\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u9700\u8981\u7684\u6700\u5c11\u8f6e\u6570"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/minimum-rounds-to-complete-all-tasks",children:"2244.\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u9700\u8981\u7684\u6700\u5c11\u8f6e\u6570"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u8ba1\u6570",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u9700\u8981\u7684 \u6700\u5c11 \u8f6e\u6570\uff0c\u5982\u679c\u65e0\u6cd5\u5b8c\u6210\u6240\u6709\u4efb\u52a1\uff0c\u8fd4\u56de -1 \u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-05-14"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a147ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a70.3MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"@cache\n    def check(num: int) -> int:\n        if num == 0: return 0\n        if num == 1: return inf\n        if num == 2 or num == 3: return 1\n        res = min(check(num - 2), check(num - 3))\n        if res == inf: return inf\n        return res + 1\n    class Solution:\n        def minimumRounds(self, tasks: List[int]) -> int:\n            counter = Counter(tasks)\n            res = 0\n            for cnt in counter.values():\n                check_res = check(cnt)\n                if check_res == inf: return -1\n                res += check_res \n            return res\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-05-14"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a99ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a31.63MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8d2a\u5fc3\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def minimumRounds(self, tasks: List[int]) -> int:\n        counter = Counter(tasks)\n        res = 0\n        for cnt in counter.values():\n            if cnt == 1: return -1\n            res += cnt // 3\n            if cnt % 3 != 0: res += 1 \n        return res\n"})})]})}function h(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>o});var s=t(30758);const r={},c=s.createContext(r);function i(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);