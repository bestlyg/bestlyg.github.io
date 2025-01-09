"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[20078],{4760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/LCR/LCR012.\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807","title":"LCR012.\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807","description":"\u94fe\u63a5\uff1aLCR012.\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807","source":"@site/docs/leetcode/LCR/LCR012.\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807.md","sourceDirName":"leetcode/LCR","slug":"/leetcode/LCR/LCR012.\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807","permalink":"/docs/leetcode/LCR/LCR012.\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"LCR011.\u8fde\u7eed\u6570\u7ec4","permalink":"/docs/leetcode/LCR/LCR011.\u8fde\u7eed\u6570\u7ec4"},"next":{"title":"LCR016.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32","permalink":"/docs/leetcode/LCR/LCR016.\u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32"}}');var r=t(25105),c=t(8556);const i={},l="LCR012.\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807",o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"lcr012\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807",children:"LCR012.\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/tvdfij",children:"LCR012.\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u524d\u7f00\u548c",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \uff0c\u8bf7\u8ba1\u7b97\u6570\u7ec4\u7684 \u4e2d\u5fc3\u4e0b\u6807 \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-23"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a30.2MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u7f00\u548c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int findMiddleIndex(vector<int>& nums) {\n        int sum = 0;\n        for (auto& num : nums) sum += num;\n        int pre = 0;\n        for (int i = 0; i < nums.size(); i++) {\n            if (sum - nums[i] == pre) return i;\n            pre += nums[i];\n            sum -= nums[i];\n        }\n        return -1;\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(58101);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);