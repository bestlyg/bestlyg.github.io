"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[16289],{56823:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/1801-1900/\u6570\u7ec4\u5143\u7d20\u79ef\u7684\u7b26\u53f7","title":"1822.\u6570\u7ec4\u5143\u7d20\u79ef\u7684\u7b26\u53f7","description":"\u94fe\u63a5\uff1a1822.\u6570\u7ec4\u5143\u7d20\u79ef\u7684\u7b26\u53f7","source":"@site/docs/leetcode/1801-1900/1822.\u6570\u7ec4\u5143\u7d20\u79ef\u7684\u7b26\u53f7.md","sourceDirName":"leetcode/1801-1900","slug":"/leetcode/1801-1900/\u6570\u7ec4\u5143\u7d20\u79ef\u7684\u7b26\u53f7","permalink":"/docs/leetcode/1801-1900/\u6570\u7ec4\u5143\u7d20\u79ef\u7684\u7b26\u53f7","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1822,"frontMatter":{},"sidebar":"journal","previous":{"title":"1819.\u5e8f\u5217\u4e2d\u4e0d\u540c\u6700\u5927\u516c\u7ea6\u6570\u7684\u6570\u76ee","permalink":"/docs/leetcode/1801-1900/\u5e8f\u5217\u4e2d\u4e0d\u540c\u6700\u5927\u516c\u7ea6\u6570\u7684\u6570\u76ee"},"next":{"title":"1823.\u627e\u51fa\u6e38\u620f\u7684\u83b7\u80dc\u8005","permalink":"/docs/leetcode/1801-1900/\u627e\u51fa\u6e38\u620f\u7684\u83b7\u80dc\u8005"}}');var r=t(86070),c=t(31503);const o={},l="1822.\u6570\u7ec4\u5143\u7d20\u79ef\u7684\u7b26\u53f7",i={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1822\u6570\u7ec4\u5143\u7d20\u79ef\u7684\u7b26\u53f7",children:"1822.\u6570\u7ec4\u5143\u7d20\u79ef\u7684\u7b26\u53f7"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/sign-of-the-product-of-an-array",children:"1822.\u6570\u7ec4\u5143\u7d20\u79ef\u7684\u7b26\u53f7"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \u3002\u4ee4 product \u4e3a\u6570\u7ec4 nums \u4e2d\u6240\u6709\u5143\u7d20\u503c\u7684\u4e58\u79ef\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-27"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.9MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u68c0\u67e5\u6709\u51e0\u4e2a\u8d1f\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int arraySign(vector<int>& nums) {\n        int cnt = 0;\n        for (auto &num : nums) {\n            if (num == 0) return 0;\n            else if (num < 0) cnt ^= 1;\n        }\n        return cnt ? -1 : 1;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(30758);const r={},c=s.createContext(r);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);