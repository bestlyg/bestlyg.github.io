"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[54331],{59184:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"leetcode/801-900/\u6570\u7ec4\u7684\u5747\u503c\u5206\u5272","title":"805.\u6570\u7ec4\u7684\u5747\u503c\u5206\u5272","description":"\u94fe\u63a5\uff1a805.\u6570\u7ec4\u7684\u5747\u503c\u5206\u5272","source":"@site/docs/leetcode/801-900/805.\u6570\u7ec4\u7684\u5747\u503c\u5206\u5272.md","sourceDirName":"leetcode/801-900","slug":"/leetcode/801-900/\u6570\u7ec4\u7684\u5747\u503c\u5206\u5272","permalink":"/docs/leetcode/801-900/\u6570\u7ec4\u7684\u5747\u503c\u5206\u5272","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":805,"frontMatter":{},"sidebar":"journal","previous":{"title":"804.\u552f\u4e00\u6469\u5c14\u65af\u5bc6\u7801\u8bcd","permalink":"/docs/leetcode/801-900/\u552f\u4e00\u6469\u5c14\u65af\u5bc6\u7801\u8bcd"},"next":{"title":"806.\u5199\u5b57\u7b26\u4e32\u9700\u8981\u7684\u884c\u6570","permalink":"/docs/leetcode/801-900/\u5199\u5b57\u7b26\u4e32\u9700\u8981\u7684\u884c\u6570"}}');var l=t(25105),r=t(8556);const c={},s="805.\u6570\u7ec4\u7684\u5747\u503c\u5206\u5272",o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"805\u6570\u7ec4\u7684\u5747\u503c\u5206\u5272",children:"805.\u6570\u7ec4\u7684\u5747\u503c\u5206\u5272"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(e.a,{href:"https://leetcode.cn/problems/split-array-with-same-average",children:"805.\u6570\u7ec4\u7684\u5747\u503c\u5206\u5272"}),(0,l.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,l.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u4f4d\u8fd0\u7b97\u3001\u6570\u7ec4\u3001\u6570\u5b66\u3001\u52a8\u6001\u89c4\u5212\u3001\u72b6\u6001\u538b\u7f29",(0,l.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6211\u4eec\u8981\u5c06 \xa0nums\xa0 \u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u79fb\u52a8\u5230 \xa0A\xa0 \u6570\u7ec4 \u6216\u8005 \xa0B\xa0 \u6570\u7ec4\u4e2d\uff0c\u4f7f\u5f97 \xa0A\xa0 \u6570\u7ec4\u548c \xa0B\xa0 \u6570\u7ec4\u4e0d\u4e3a\u7a7a\uff0c\u5e76\u4e14 \xa0average(A) == average(B)\xa0\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-14"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a148ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a18.1MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6298\u534a\u641c\u7d22\uff0c\u5229\u7528\u4e8c\u8fdb\u5236\u7edf\u8ba1\u524d\u534a\u90e8\u5206\u53d6 n \u4e2a\u6570\u7684 sum \u5b58\u5165 map\uff0c\u518d\u7edf\u8ba1\u540e\u534a\u90e8\u5206\u53d6 n \u4e2a\u6570\uff0c\u4e24\u8005\u76f8\u52a0\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool splitArraySameAverage(vector<int>& nums) {\n        int n = nums.size(), half = n / 2,\n            sum = accumulate(nums.begin(), nums.end(), 0);\n        unordered_map<int, unordered_set<int>> m;\n        for (int i = 0, len = 1 << half; i < len; i++) {\n            int total = 0, cnt = 0;\n            for (int j = 0; j < half; j++) {\n                if ((i & (1 << j)) == 0) continue;\n                total += nums[j];\n                cnt++;\n            }\n            m[cnt].insert(total);\n        }\n        for (int i = 0; i < (1 << (n - half)); i++) {\n            int total = 0, cnt = 0;\n            for (int j = half; j < n; j++) {\n                if ((i & 1 << (j - half)) == 0) continue;\n                total += nums[j];\n                cnt++;\n            }\n            // j : \u5de6\u8fb9\u62ff\u51e0\u4e2a\u6570\n            for (int j = max(1, cnt); j < n - 1; j++) {\n                if (j * sum % n != 0) continue;\n                int prevCnt = j - cnt;\n                if (!m.count(prevCnt)) continue;\n                int leftTotal = j * sum / n;\n                int prevTotal = leftTotal - total;\n                if (!m[prevCnt].count(prevTotal)) continue;\n                return true;\n            }\n        }\n        return false;\n    }\n};\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-14"}),"\n",(0,l.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a176ms"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a51.3MB"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool splitArraySameAverage(vector<int>& nums) {\n        int n = nums.size(), half = n / 2,\n            sum = accumulate(nums.begin(), nums.end(), 0);\n        unordered_map<int, unordered_set<int>> m;\n        for (int i = 0, len = 1 << half; i < len; i++) {\n            int total = 0, cnt = 0;\n            for (int j = 0; j < half; j++) {\n                if ((i & (1 << j)) == 0) continue;\n                total += nums[j];\n                cnt++;\n            }\n            m[total].insert(cnt);\n        }\n        for (int i = 0; i < (1 << (n - half)); i++) {\n            int total = 0, cnt = 0;\n            for (int j = half; j < n; j++) {\n                if ((i & 1 << (j - half)) == 0) continue;\n                total += nums[j];\n                cnt++;\n            }\n            // j : \u5de6\u8fb9\u62ff\u51e0\u4e2a\u6570\n            for (int j = max(1, cnt); j < n - 1; j++) {\n                if (j * sum % n != 0) continue;\n                int need = j * sum / n - total;\n                if (!m.count(need)) continue;\n                if (!m[need].count(j - cnt)) continue;\n                return true;\n            }\n        }\n        return false;\n    }\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},8556:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>s});var i=t(58101);const l={},r=i.createContext(l);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);