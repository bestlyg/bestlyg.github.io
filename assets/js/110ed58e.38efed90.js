"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[77644],{86769:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/2701-2800/\u7edf\u8ba1\u6574\u6570\u6570\u76ee","title":"2719.\u7edf\u8ba1\u6574\u6570\u6570\u76ee","description":"\u94fe\u63a5\uff1a2719.\u7edf\u8ba1\u6574\u6570\u6570\u76ee","source":"@site/docs/leetcode/2701-2800/2719.\u7edf\u8ba1\u6574\u6570\u6570\u76ee.md","sourceDirName":"leetcode/2701-2800","slug":"/leetcode/2701-2800/\u7edf\u8ba1\u6574\u6570\u6570\u76ee","permalink":"/docs/leetcode/2701-2800/\u7edf\u8ba1\u6574\u6570\u6570\u76ee","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2719,"frontMatter":{},"sidebar":"journal","previous":{"title":"2717.\u534a\u6709\u5e8f\u6392\u5217","permalink":"/docs/leetcode/2701-2800/\u534a\u6709\u5e8f\u6392\u5217"},"next":{"title":"2731.\u79fb\u52a8\u673a\u5668\u4eba","permalink":"/docs/leetcode/2701-2800/\u79fb\u52a8\u673a\u5668\u4eba"}}');var s=t(25105),l=t(8556);const r={},o="2719.\u7edf\u8ba1\u6574\u6570\u6570\u76ee",c={},d=[{value:"\u9898\u89e3 1 - python",id:"\u9898\u89e3-1---python",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"2719\u7edf\u8ba1\u6574\u6570\u6570\u76ee",children:"2719.\u7edf\u8ba1\u6574\u6570\u6570\u76ee"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/count-of-integers",children:"2719.\u7edf\u8ba1\u6574\u6570\u6570\u76ee"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66\u3001\u5b57\u7b26\u4e32\u3001\u52a8\u6001\u89c4\u5212",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u597d\u6574\u6570\u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---python",children:"\u9898\u89e3 1 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-01-16"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a232ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a18.31MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6570\u4f4ddp\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"def digit_dp(n: int, min_num: str, max_num: str, min_sum: int, max_sum: int):\n    @cache\n    def dfs(i: int, val: int, limit_low: bool, limit_high: bool) -> int:\n        if val > max_sum: return 0\n        if i == n: return val >= min_sum\n        lo = int(min_num[i]) if limit_low else 0\n        hi = int(max_num[i]) if limit_high else 9\n        return sum(\n            dfs(i + 1, val + d, limit_low and lo == d, limit_high and hi == d)\n            for d in range(lo, hi + 1)\n        )\n    return  dfs\n    \nclass Solution:\n    def count(self, num1: str, num2: str, min_sum: int, max_sum: int) -> int:\n        dfs = digit_dp(len(num2), num1.zfill(len(num2)), num2, min_sum, max_sum)\n        return dfs(0, 0, True, True) % (10 ** 9 + 7)\n"})})]})}function a(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},8556:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>o});var i=t(58101);const s={},l=i.createContext(s);function r(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);