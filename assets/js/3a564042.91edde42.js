"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[256],{87080:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var i=t(86070),s=t(25710);const c={},r="LCR178.\u8bad\u7ec3\u8ba1\u5212VI",o={id:"leetcode/1-100/LCR178.\u8bad\u7ec3\u8ba1\u5212VI",title:"LCR178.\u8bad\u7ec3\u8ba1\u5212VI",description:"\u94fe\u63a5\uff1aLCR178.\u8bad\u7ec3\u8ba1\u5212VI",source:"@site/docs/leetcode/1-100/LCR178.\u8bad\u7ec3\u8ba1\u5212VI.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/LCR178.\u8bad\u7ec3\u8ba1\u5212VI",permalink:"/docs/leetcode/1-100/LCR178.\u8bad\u7ec3\u8ba1\u5212VI",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"LCR174.\u5bfb\u627e\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u76ee\u6807\u8282\u70b9",permalink:"/docs/leetcode/1-100/LCR174.\u5bfb\u627e\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u76ee\u6807\u8282\u70b9"},next:{title:"LCR184.\u8bbe\u8ba1\u81ea\u52a9\u7ed3\u7b97\u7cfb\u7edf",permalink:"/docs/leetcode/1-100/LCR184.\u8bbe\u8ba1\u81ea\u52a9\u7ed3\u7b97\u7cfb\u7edf"}},l={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"lcr178\u8bad\u7ec3\u8ba1\u5212vi",children:"LCR178.\u8bad\u7ec3\u8ba1\u5212VI"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof",children:"LCR178.\u8bad\u7ec3\u8ba1\u5212VI"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5728\u4e00\u4e2a\u6570\u7ec4 nums \u4e2d\u9664\u4e00\u4e2a\u6570\u5b57\u53ea\u51fa\u73b0\u4e00\u6b21\u4e4b\u5916\uff0c\u5176\u4ed6\u6570\u5b57\u90fd\u51fa\u73b0\u4e86\u4e09\u6b21\u3002\u8bf7\u627e\u51fa\u90a3\u4e2a\u53ea\u51fa\u73b0\u4e00\u6b21\u7684\u6570\u5b57\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-24"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.8MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7528\u6570\u7ec4\u5b58\u50a8\u6bcf\u4e2a\u4f4d\u6709\u51e0\u4e2a 1\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int singleNumber(vector<int>& nums) {\n        int list[40] = {0};\n        for (auto& num : nums) {\n            for (int i = 0; i < 32; i++) {\n                if (num & (1 << i)) list[i]++;\n            }\n        }\n        int ans = 0;\n        for (int i = 0; i < 32; i++) {\n            if (list[i] % 3) {\n                ans |= 1 << i;\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>o});var i=t(30758);const s={},c=i.createContext(s);function r(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);