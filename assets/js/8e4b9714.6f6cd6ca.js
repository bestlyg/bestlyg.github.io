"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[28679],{74608:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/1401-1500/\u7528\u6808\u64cd\u4f5c\u6784\u5efa\u6570\u7ec4","title":"1441.\u7528\u6808\u64cd\u4f5c\u6784\u5efa\u6570\u7ec4","description":"\u94fe\u63a5\uff1a1441.\u7528\u6808\u64cd\u4f5c\u6784\u5efa\u6570\u7ec4","source":"@site/docs/leetcode/1401-1500/1441.\u7528\u6808\u64cd\u4f5c\u6784\u5efa\u6570\u7ec4.md","sourceDirName":"leetcode/1401-1500","slug":"/leetcode/1401-1500/\u7528\u6808\u64cd\u4f5c\u6784\u5efa\u6570\u7ec4","permalink":"/docs/leetcode/1401-1500/\u7528\u6808\u64cd\u4f5c\u6784\u5efa\u6570\u7ec4","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1441,"frontMatter":{},"sidebar":"journal","previous":{"title":"1439.\u6709\u5e8f\u77e9\u9635\u4e2d\u7684\u7b2ck\u4e2a\u6700\u5c0f\u6570\u7ec4\u548c","permalink":"/docs/leetcode/1401-1500/\u6709\u5e8f\u77e9\u9635\u4e2d\u7684\u7b2ck\u4e2a\u6700\u5c0f\u6570\u7ec4\u548c"},"next":{"title":"1442.\u5f62\u6210\u4e24\u4e2a\u5f02\u6216\u76f8\u7b49\u6570\u7ec4\u7684\u4e09\u5143\u7ec4\u6570\u76ee","permalink":"/docs/leetcode/1401-1500/\u5f62\u6210\u4e24\u4e2a\u5f02\u6216\u76f8\u7b49\u6570\u7ec4\u7684\u4e09\u5143\u7ec4\u6570\u76ee"}}');var r=t(25105),c=t(8556);const i={},l="1441.\u7528\u6808\u64cd\u4f5c\u6784\u5efa\u6570\u7ec4",o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1441\u7528\u6808\u64cd\u4f5c\u6784\u5efa\u6570\u7ec4",children:"1441.\u7528\u6808\u64cd\u4f5c\u6784\u5efa\u6570\u7ec4"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/build-an-array-with-stack-operations",children:"1441.\u7528\u6808\u64cd\u4f5c\u6784\u5efa\u6570\u7ec4"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u6570\u7ec4\u3001\u6a21\u62df",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6570\u7ec4 target \u548c\u4e00\u4e2a\u6574\u6570 n\u3002\u6bcf\u6b21\u8fed\u4ee3\uff0c\u9700\u8981\u4ece list = { 1 , 2 , 3 ..., n } \u4e2d\u4f9d\u6b21\u8bfb\u53d6\u4e00\u4e2a\u6570\u5b57\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-15"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.6MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'class Solution {\npublic:\n    vector<string> buildArray(vector<int>& target, int n) {\n        vector<string> list;\n        int cur = 1;\n        for (auto &item : target) {\n            while (cur < item) {\n                list.push_back("Push");\n                list.push_back("Pop");\n                cur++;\n            }\n            list.push_back("Push");\n            cur++;\n        }\n        return list;\n    }\n};\n'})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(58101);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);