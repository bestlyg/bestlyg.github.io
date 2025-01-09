"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[43656],{61722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/701-800/\u81ea\u9664\u6570","title":"728.\u81ea\u9664\u6570","description":"\u94fe\u63a5\uff1a728.\u81ea\u9664\u6570","source":"@site/docs/leetcode/701-800/728.\u81ea\u9664\u6570.md","sourceDirName":"leetcode/701-800","slug":"/leetcode/701-800/\u81ea\u9664\u6570","permalink":"/docs/leetcode/701-800/\u81ea\u9664\u6570","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":728,"frontMatter":{},"sidebar":"journal","previous":{"title":"726.\u539f\u5b50\u7684\u6570\u91cf","permalink":"/docs/leetcode/701-800/\u539f\u5b50\u7684\u6570\u91cf"},"next":{"title":"729.\u6211\u7684\u65e5\u7a0b\u5b89\u6392\u8868I","permalink":"/docs/leetcode/701-800/\u6211\u7684\u65e5\u7a0b\u5b89\u6392\u8868I"}}');var s=t(25105),c=t(8556);const i={},o="728.\u81ea\u9664\u6570",l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"728\u81ea\u9664\u6570",children:"728.\u81ea\u9664\u6570"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/self-dividing-numbers",children:"728.\u81ea\u9664\u6570"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e24\u4e2a\u6574\u6570 left \u548c right \uff0c\u8fd4\u56de\u4e00\u4e2a\u5217\u8868\uff0c\u5217\u8868\u7684\u5143\u7d20\u662f\u8303\u56f4 [left, right] \u5185\u6240\u6709\u7684 \u81ea\u9664\u6570 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-17"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.8MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    vector<int> selfDividingNumbers(int left, int right) {\n        vector<int> ans;\n        ans.reserve(1e4);\n        for (int num = left; num <= right; num++) check(ans, num);\n        return ans;\n    }\n    void check(vector<int> &ans, int num) {\n        int tmp = num;\n        for (; tmp; tmp /= 10) {\n            if (tmp % 10 == 0) return;\n            if (num % (tmp % 10) != 0) return;\n        }\n        ans.push_back(num);\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(58101);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);