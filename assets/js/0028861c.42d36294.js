"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[15779],{50664:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/101-200/\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a","title":"121.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a","description":"\u94fe\u63a5\uff1a121.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a","source":"@site/docs/leetcode/101-200/121.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a.md","sourceDirName":"leetcode/101-200","slug":"/leetcode/101-200/\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a","permalink":"/docs/leetcode/101-200/\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":121,"frontMatter":{},"sidebar":"journal","previous":{"title":"120.\u4e09\u89d2\u5f62\u6700\u5c0f\u8def\u5f84\u548c","permalink":"/docs/leetcode/101-200/\u4e09\u89d2\u5f62\u6700\u5c0f\u8def\u5f84\u548c"},"next":{"title":"122.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aII","permalink":"/docs/leetcode/101-200/\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673aII"}}');var r=s(25105),t=s(8556);const c={},l="121.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a",o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"121\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a",children:"121.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock",children:"121.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u6570\u7ec4 prices \uff0c\u5b83\u7684\u7b2c \xa0i \u4e2a\u5143\u7d20 \xa0prices[i] \u8868\u793a\u4e00\u652f\u7ed9\u5b9a\u80a1\u7968\u7b2c i \u5929\u7684\u4ef7\u683c\u3002\u4f60\u53ea\u80fd\u9009\u62e9 \u67d0\u4e00\u5929 \u4e70\u5165\u8fd9\u53ea\u80a1\u7968\uff0c\u5e76\u9009\u62e9\u5728 \u672a\u6765\u7684\u67d0\u4e00\u4e2a\u4e0d\u540c\u7684\u65e5\u5b50 \u5356\u51fa\u8be5\u80a1\u7968\u3002\u8bbe\u8ba1\u4e00\u4e2a\u7b97\u6cd5\u6765\u8ba1\u7b97\u4f60\u6240\u80fd\u83b7\u53d6\u7684\u6700\u5927\u5229\u6da6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-14"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a100ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a91MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8003\u8651\u5230\u53ea\u80fd\u4ea4\u6613\u4e00\u6b21\uff0c\u6bcf\u904d\u5386\u5230\u4e00\u4e2a\u503c\u4e0e\u524d\u9762\u7684\u6700\u5c0f\u503c\u8fdb\u884c\u6bd4\u8f83\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int maxProfit(vector<int> &prices) {\n        int nmin = prices[0], ans = 0;\n        for (int i = 1; i < prices.size(); i++) {\n            ans = max(ans, prices[i] - nmin);\n            nmin = min(nmin, prices[i]);\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-10-01"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a224ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a25.9MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n            def maxProfit(self, prices: List[int]) -> int:\n                prev = prices[0]\n                res = 0\n                for i in range(1, len(prices)):\n                    res = max(res, prices[i] - prev)\n                    prev = min(prev, prices[i])\n                return res\n"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8556:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var i=s(58101);const r={},t=i.createContext(r);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);