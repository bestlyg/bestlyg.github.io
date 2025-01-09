"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[39117],{34311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/LCR/LCR074.\u5408\u5e76\u533a\u95f4","title":"LCR074.\u5408\u5e76\u533a\u95f4","description":"\u94fe\u63a5\uff1aLCR074.\u5408\u5e76\u533a\u95f4","source":"@site/docs/leetcode/LCR/LCR074.\u5408\u5e76\u533a\u95f4.md","sourceDirName":"leetcode/LCR","slug":"/leetcode/LCR/LCR074.\u5408\u5e76\u533a\u95f4","permalink":"/docs/leetcode/LCR/LCR074.\u5408\u5e76\u533a\u95f4","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"LCR069.\u5c71\u8109\u6570\u7ec4\u7684\u5cf0\u9876\u7d22\u5f15","permalink":"/docs/leetcode/LCR/LCR069.\u5c71\u8109\u6570\u7ec4\u7684\u5cf0\u9876\u7d22\u5f15"},"next":{"title":"LCR091.\u7c89\u5237\u623f\u5b50","permalink":"/docs/leetcode/LCR/LCR091.\u7c89\u5237\u623f\u5b50"}}');var r=t(25105),c=t(8556);const i={},l="LCR074.\u5408\u5e76\u533a\u95f4",o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"lcr074\u5408\u5e76\u533a\u95f4",children:"LCR074.\u5408\u5e76\u533a\u95f4"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/SsGoHC",children:"LCR074.\u5408\u5e76\u533a\u95f4"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6392\u5e8f",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u4ee5\u6570\u7ec4 intervals \u8868\u793a\u82e5\u5e72\u4e2a\u533a\u95f4\u7684\u96c6\u5408\uff0c\u5176\u4e2d\u5355\u4e2a\u533a\u95f4\u4e3a intervals[i] = [starti, endi] \u3002\u8bf7\u4f60\u5408\u5e76\u6240\u6709\u91cd\u53e0\u7684\u533a\u95f4\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u4e0d\u91cd\u53e0\u7684\u533a\u95f4\u6570\u7ec4\uff0c\u8be5\u6570\u7ec4\u9700\u6070\u597d\u8986\u76d6\u8f93\u5165\u4e2d\u7684\u6240\u6709\u533a\u95f4\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-23"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a20ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a13.8MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u5408\u5e76\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        sort(intervals.begin(), intervals.end());\n        vector<vector<int>> ans;\n        for (auto& interval : intervals) {\n            if (ans.size() > 0 && ans[ans.size() - 1][1] >= interval[0]) {\n                ans[ans.size() - 1][1] =\n                    max(interval[1], ans[ans.size() - 1][1]);\n            } else {\n                ans.push_back(interval);\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8556:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(58101);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);