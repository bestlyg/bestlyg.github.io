"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[12075],{72963:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>u,contentTitle:()=>t,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/701-800/\u4e58\u79ef\u5c0f\u4e8eK\u7684\u5b50\u6570\u7ec4","title":"713.\u4e58\u79ef\u5c0f\u4e8eK\u7684\u5b50\u6570\u7ec4","description":"\u94fe\u63a5\uff1a713.\u4e58\u79ef\u5c0f\u4e8eK\u7684\u5b50\u6570\u7ec4","source":"@site/docs/leetcode/701-800/713.\u4e58\u79ef\u5c0f\u4e8eK\u7684\u5b50\u6570\u7ec4.md","sourceDirName":"leetcode/701-800","slug":"/leetcode/701-800/\u4e58\u79ef\u5c0f\u4e8eK\u7684\u5b50\u6570\u7ec4","permalink":"/docs/leetcode/701-800/\u4e58\u79ef\u5c0f\u4e8eK\u7684\u5b50\u6570\u7ec4","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":713,"frontMatter":{},"sidebar":"journal","previous":{"title":"710.\u9ed1\u540d\u5355\u4e2d\u7684\u968f\u673a\u6570","permalink":"/docs/leetcode/701-800/\u9ed1\u540d\u5355\u4e2d\u7684\u968f\u673a\u6570"},"next":{"title":"714.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a\u542b\u624b\u7eed\u8d39","permalink":"/docs/leetcode/701-800/\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a\u542b\u624b\u7eed\u8d39"}}');var l=s(25105),i=s(8556);const c={},t="713.\u4e58\u79ef\u5c0f\u4e8eK\u7684\u5b50\u6570\u7ec4",u={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"713\u4e58\u79ef\u5c0f\u4e8ek\u7684\u5b50\u6570\u7ec4",children:"713.\u4e58\u79ef\u5c0f\u4e8eK\u7684\u5b50\u6570\u7ec4"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(e.a,{href:"https://leetcode.cn/problems/subarray-product-less-than-k",children:"713.\u4e58\u79ef\u5c0f\u4e8eK\u7684\u5b50\u6570\u7ec4"}),(0,l.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,l.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6ed1\u52a8\u7a97\u53e3",(0,l.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u627e\u51fa\u8be5\u6570\u7ec4\u5185\u4e58\u79ef\u5c0f\u4e8e k \u7684\u8fde\u7eed\u7684\u5b50\u6570\u7ec4\u7684\u4e2a\u6570\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-05"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.4MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6ed1\u52a8\u7a97\u53e3\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"int numSubarrayProductLessThanK(int *nums, int numsSize, int k) {\n    int l = 0, r = 0, sum = 1, ans = 0;\n    while (l < numsSize) {\n        while (r < numsSize && sum * nums[r] < k) sum *= nums[r++];\n        if (l == r) {\n            l++;\n            r++;\n        } else {\n            ans += r - l;\n            sum /= nums[l++];\n        }\n    }\n    return ans;\n}\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-24"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a49ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a59.8MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int numSubarrayProductLessThanK(vector<int>& nums, int k) {\n        if (k == 0) return 0;\n        int ans = 0, num = 1, l = 0;\n        for (int r = 0; r < nums.size(); r++) {\n            num *= nums[r];\n            while (l <= r && num >= k) num /= nums[l++];\n            ans += r - l + 1;\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-24"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a59.8MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int numSubarrayProductLessThanK(vector<int>& nums, int k) {\n        if (k == 0) return 0;\n        int n = nums.size(), l = 0, r = 0, num = 1, ans = 0;\n        while (l < n && r <= n) {\n            while (r < n && num < k) num *= nums[r++];\n            ans += r - l - (num >= k ? 1 : 0);\n            num /= nums[l++];\n        }\n        return max(ans, 0);\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},8556:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>t});var r=s(58101);const l={},i=r.createContext(l);function c(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);