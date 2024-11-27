"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[27490],{46289:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/1301-1400/\u5c06\u6570\u5b57\u53d8\u62100\u7684\u64cd\u4f5c\u6b21\u6570","title":"1342.\u5c06\u6570\u5b57\u53d8\u62100\u7684\u64cd\u4f5c\u6b21\u6570","description":"\u94fe\u63a5\uff1a1342.\u5c06\u6570\u5b57\u53d8\u62100\u7684\u64cd\u4f5c\u6b21\u6570","source":"@site/docs/leetcode/1301-1400/1342.\u5c06\u6570\u5b57\u53d8\u62100\u7684\u64cd\u4f5c\u6b21\u6570.md","sourceDirName":"leetcode/1301-1400","slug":"/leetcode/1301-1400/\u5c06\u6570\u5b57\u53d8\u62100\u7684\u64cd\u4f5c\u6b21\u6570","permalink":"/docs/leetcode/1301-1400/\u5c06\u6570\u5b57\u53d8\u62100\u7684\u64cd\u4f5c\u6b21\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1342,"frontMatter":{},"sidebar":"journal","previous":{"title":"1339.\u5206\u88c2\u4e8c\u53c9\u6811\u7684\u6700\u5927\u4e58\u79ef","permalink":"/docs/leetcode/1301-1400/\u5206\u88c2\u4e8c\u53c9\u6811\u7684\u6700\u5927\u4e58\u79ef"},"next":{"title":"1345.\u8df3\u8dc3\u6e38\u620fIV","permalink":"/docs/leetcode/1301-1400/\u8df3\u8dc3\u6e38\u620fIV"}}');var r=t(86070),c=t(31503);const o={},l="1342.\u5c06\u6570\u5b57\u53d8\u62100\u7684\u64cd\u4f5c\u6b21\u6570",i={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1342\u5c06\u6570\u5b57\u53d8\u62100\u7684\u64cd\u4f5c\u6b21\u6570",children:"1342.\u5c06\u6570\u5b57\u53d8\u62100\u7684\u64cd\u4f5c\u6b21\u6570"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/number-of-steps-to-reduce-a-number-to-zero",children:"1342.\u5c06\u6570\u5b57\u53d8\u62100\u7684\u64cd\u4f5c\u6b21\u6570"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u5b66",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u975e\u8d1f\u6574\u6570 num \uff0c\u8bf7\u4f60\u8fd4\u56de\u5c06\u5b83\u53d8\u6210 0 \u6240\u9700\u8981\u7684\u6b65\u6570\u3002 \u5982\u679c\u5f53\u524d\u6570\u5b57\u662f\u5076\u6570\uff0c\u4f60\u9700\u8981\u628a\u5b83\u9664\u4ee5 2 \uff1b\u5426\u5219\uff0c\u51cf\u53bb 1 \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-01-31"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.9MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int numberOfSteps(int num) {\n        int ans = 0;\n        while (num) {\n            num = num & 1 ? num - 1 : num / 2;\n            ++ans;\n        }\n        return ans;\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(30758);const r={},c=s.createContext(r);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);