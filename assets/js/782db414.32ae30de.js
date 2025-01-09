"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[55717],{30375:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/2401-2500/\u4e0d\u540c\u7684\u5e73\u5747\u503c\u6570\u76ee","title":"2465.\u4e0d\u540c\u7684\u5e73\u5747\u503c\u6570\u76ee","description":"\u94fe\u63a5\uff1a2465.\u4e0d\u540c\u7684\u5e73\u5747\u503c\u6570\u76ee","source":"@site/docs/leetcode/2401-2500/2465.\u4e0d\u540c\u7684\u5e73\u5747\u503c\u6570\u76ee.md","sourceDirName":"leetcode/2401-2500","slug":"/leetcode/2401-2500/\u4e0d\u540c\u7684\u5e73\u5747\u503c\u6570\u76ee","permalink":"/docs/leetcode/2401-2500/\u4e0d\u540c\u7684\u5e73\u5747\u503c\u6570\u76ee","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2465,"frontMatter":{},"sidebar":"journal","previous":{"title":"2463.\u6700\u5c0f\u79fb\u52a8\u603b\u8ddd\u79bb","permalink":"/docs/leetcode/2401-2500/\u6700\u5c0f\u79fb\u52a8\u603b\u8ddd\u79bb"},"next":{"title":"2469.\u6e29\u5ea6\u8f6c\u6362","permalink":"/docs/leetcode/2401-2500/\u6e29\u5ea6\u8f6c\u6362"}}');var r=t(25105),c=t(8556);const o={},l="2465.\u4e0d\u540c\u7684\u5e73\u5747\u503c\u6570\u76ee",i={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"2465\u4e0d\u540c\u7684\u5e73\u5747\u503c\u6570\u76ee",children:"2465.\u4e0d\u540c\u7684\u5e73\u5747\u503c\u6570\u76ee"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/number-of-distinct-averages",children:"2465.\u4e0d\u540c\u7684\u5e73\u5747\u503c\u6570\u76ee"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u53cc\u6307\u9488\u3001\u6392\u5e8f",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u957f\u5ea6\u4e3a \u5076\u6570 \u7684\u6574\u6570\u6570\u7ec4 nums \u3002\u8fd4\u56de\u4e0a\u8ff0\u8fc7\u7a0b\u80fd\u5f97\u5230\u7684 \u4e0d\u540c \u5e73\u5747\u503c\u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-06-05"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.8MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u53cc\u6307\u9488\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int distinctAverages(vector<int>& nums) {\n        unordered_set<double> s;\n        sort(nums.begin(), nums.end());\n        int l = 0, r = nums.size() - 1;\n        while (l < r) s.insert((nums[l++] + nums[r--]) * 1.0 / 2);\n        return s.size();\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(58101);const r={},c=s.createContext(r);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);