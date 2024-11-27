"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[8725],{996:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/1701-1800/\u5403\u82f9\u679c\u7684\u6700\u5927\u6570\u76ee","title":"1705.\u5403\u82f9\u679c\u7684\u6700\u5927\u6570\u76ee","description":"\u94fe\u63a5\uff1a1705.\u5403\u82f9\u679c\u7684\u6700\u5927\u6570\u76ee","source":"@site/docs/leetcode/1701-1800/1705.\u5403\u82f9\u679c\u7684\u6700\u5927\u6570\u76ee.md","sourceDirName":"leetcode/1701-1800","slug":"/leetcode/1701-1800/\u5403\u82f9\u679c\u7684\u6700\u5927\u6570\u76ee","permalink":"/docs/leetcode/1701-1800/\u5403\u82f9\u679c\u7684\u6700\u5927\u6570\u76ee","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1705,"frontMatter":{},"sidebar":"journal","previous":{"title":"1704.\u5224\u65ad\u5b57\u7b26\u4e32\u7684\u4e24\u534a\u662f\u5426\u76f8\u4f3c","permalink":"/docs/leetcode/1701-1800/\u5224\u65ad\u5b57\u7b26\u4e32\u7684\u4e24\u534a\u662f\u5426\u76f8\u4f3c"},"next":{"title":"1706.\u7403\u4f1a\u843d\u4f55\u5904","permalink":"/docs/leetcode/1701-1800/\u7403\u4f1a\u843d\u4f55\u5904"}}');var r=t(86070),c=t(31503);const i={},l="1705.\u5403\u82f9\u679c\u7684\u6700\u5927\u6570\u76ee",o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1705\u5403\u82f9\u679c\u7684\u6700\u5927\u6570\u76ee",children:"1705.\u5403\u82f9\u679c\u7684\u6700\u5927\u6570\u76ee"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-number-of-eaten-apples",children:"1705.\u5403\u82f9\u679c\u7684\u6700\u5927\u6570\u76ee"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e24\u4e2a\u957f\u5ea6\u4e3a n \u7684\u6574\u6570\u6570\u7ec4 days \u548c apples \uff0c\u8fd4\u56de\u4f60\u53ef\u4ee5\u5403\u6389\u7684\u82f9\u679c\u7684\u6700\u5927\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-24"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.6MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5f02\u6216\u5f97\u5230\u4e24\u4e2a\u552f\u4e00\u6570\u7684\u503c\uff0c\u6839\u636e\u9996\u4e2a\u4e0d\u540c\u7684\u4f4d\u6570\uff0c\u5206\u522b\u5f02\u6216\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    vector<int> singleNumbers(vector<int> &nums) {\n        int val = 0;\n        for (auto &num : nums) val ^= num;\n        vector<int> ans(2, 0);\n        int bit = 0;\n        while ((val & 1 << bit) == 0) bit++;\n        bit = 1 << bit;\n        for (auto &num : nums) {\n            if (num & bit)\n                ans[0] ^= num;\n            else\n                ans[1] ^= num;\n        }\n        return ans;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(30758);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);