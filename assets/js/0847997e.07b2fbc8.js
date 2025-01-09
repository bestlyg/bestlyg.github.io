"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[68106],{98981:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/1601-1700/\u7279\u6b8a\u6570\u7ec4\u7684\u7279\u5f81\u503c","title":"1608.\u7279\u6b8a\u6570\u7ec4\u7684\u7279\u5f81\u503c","description":"\u94fe\u63a5\uff1a1608.\u7279\u6b8a\u6570\u7ec4\u7684\u7279\u5f81\u503c","source":"@site/docs/leetcode/1601-1700/1608.\u7279\u6b8a\u6570\u7ec4\u7684\u7279\u5f81\u503c.md","sourceDirName":"leetcode/1601-1700","slug":"/leetcode/1601-1700/\u7279\u6b8a\u6570\u7ec4\u7684\u7279\u5f81\u503c","permalink":"/docs/leetcode/1601-1700/\u7279\u6b8a\u6570\u7ec4\u7684\u7279\u5f81\u503c","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1608,"frontMatter":{},"sidebar":"journal","previous":{"title":"1605.\u7ed9\u5b9a\u884c\u548c\u5217\u7684\u548c\u6c42\u53ef\u884c\u77e9\u9635","permalink":"/docs/leetcode/1601-1700/\u7ed9\u5b9a\u884c\u548c\u5217\u7684\u548c\u6c42\u53ef\u884c\u77e9\u9635"},"next":{"title":"1609.\u5947\u5076\u6811","permalink":"/docs/leetcode/1601-1700/\u5947\u5076\u6811"}}');var r=t(25105),c=t(8556);const i={},o="1608.\u7279\u6b8a\u6570\u7ec4\u7684\u7279\u5f81\u503c",l={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1608\u7279\u6b8a\u6570\u7ec4\u7684\u7279\u5f81\u503c",children:"1608.\u7279\u6b8a\u6570\u7ec4\u7684\u7279\u5f81\u503c"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/special-array-with-x-elements-greater-than-or-equal-x",children:"1608.\u7279\u6b8a\u6570\u7ec4\u7684\u7279\u5f81\u503c"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u6392\u5e8f",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5982\u679c\u5b58\u5728\u4e00\u4e2a\u6570 x \uff0c\u4f7f\u5f97 nums \u4e2d\u6070\u597d\u6709 x \u4e2a\u5143\u7d20 \u5927\u4e8e\u6216\u8005\u7b49\u4e8e x \uff0c\u90a3\u4e48\u5c31\u79f0 nums \u662f\u4e00\u4e2a \u7279\u6b8a\u6570\u7ec4 \uff0c\u800c x \u662f\u8be5\u6570\u7ec4\u7684 \u7279\u5f81\u503c \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-09-12"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.1MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int specialArray(vector<int>& nums) {\n        sort(nums.begin(), nums.end());\n        int n = nums.size(), cnt = n;\n        for (int i = 0; i < n; i++, cnt--) {\n            if (nums[i] >= cnt && (i > 0 && cnt > nums[i - 1] || i == 0)) return cnt;\n        }\n        return -1;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(58101);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);