"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[48127],{29821:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"leetcode/2001-2100/\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6","title":"2024.\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6","description":"\u94fe\u63a5\uff1a2024.\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6","source":"@site/docs/leetcode/2001-2100/2024.\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6.md","sourceDirName":"leetcode/2001-2100","slug":"/leetcode/2001-2100/\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6","permalink":"/docs/leetcode/2001-2100/\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2024,"frontMatter":{},"sidebar":"journal","previous":{"title":"2022.\u5c06\u4e00\u7ef4\u6570\u7ec4\u8f6c\u53d8\u6210\u4e8c\u7ef4\u6570\u7ec4","permalink":"/docs/leetcode/2001-2100/\u5c06\u4e00\u7ef4\u6570\u7ec4\u8f6c\u53d8\u6210\u4e8c\u7ef4\u6570\u7ec4"},"next":{"title":"2027.\u8f6c\u6362\u5b57\u7b26\u4e32\u7684\u6700\u5c11\u64cd\u4f5c\u6b21\u6570","permalink":"/docs/leetcode/2001-2100/\u8f6c\u6362\u5b57\u7b26\u4e32\u7684\u6700\u5c11\u64cd\u4f5c\u6b21\u6570"}}');var s=r(86070),i=r(31503);const l={},c="2024.\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6",o={},h=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"2024\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6",children:"2024.\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/maximize-the-confusion-of-an-exam",children:"2024.\u8003\u8bd5\u7684\u6700\u5927\u56f0\u6270\u5ea6"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u4e8c\u5206\u67e5\u627e\u3001\u524d\u7f00\u548c\u3001\u6ed1\u52a8\u7a97\u53e3",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u5728\u4e0d\u8d85\u8fc7 k \u6b21\u64cd\u4f5c\u7684\u60c5\u51b5\u4e0b\uff0c\u6700\u5927 \u8fde\u7eed 'T' \u6216\u8005 'F' \u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-29"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a11.7MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u7ef4\u62a4\u4e2d\u95f4 k\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int maxConsecutiveAnswers(string answerKey, int k) {\n        return max(check('T', answerKey, k), check('F', answerKey, k));\n    }\n    int check(char ch, string str, int k) {\n        int n = str.size(), l = 0, r = 0, ans = 0;\n        do {\n            while (r < n && k > 0) {\n                while (r < n && str[r] == ch) r++;\n                k--;\n                if (r < n) r++;\n                while (r < n && str[r] == ch) r++;\n            }\n            ans = max(ans, r - l);\n            while (l < n && k <= 0) {\n                if (str[l] != ch) k++;\n                l++;\n            }\n        } while (r < n);\n        return ans;\n    }\n};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2024-09-02"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a204ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.68MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6ed1\u52a8\u7a97\u53e3\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:\n        n = len(answerKey)\n        def run(ch: str, k: int) -> int:\n            left = 0\n            right = 0\n            while right < n and (k or answerKey[right] == ch):\n                if answerKey[right] != ch: k -= 1\n                right += 1\n            res = right - left\n            while right < n:\n                if answerKey[right] == ch:\n                    res = max(res, right + 1 - left)\n                else:\n                    while answerKey[left] == ch: left += 1\n                    left += 1\n                    res = max(res, right - left)\n                right += 1\n            return res\n        return max(run('T', k), run('F', k))\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},31503:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>c});var t=r(30758);const s={},i=t.createContext(s);function l(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);