"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[91330],{80546:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"leetcode/1401-1500/\u901a\u8fc7\u7ffb\u8f6c\u5b50\u6570\u7ec4\u4f7f\u4e24\u4e2a\u6570\u7ec4\u76f8\u7b49","title":"1460.\u901a\u8fc7\u7ffb\u8f6c\u5b50\u6570\u7ec4\u4f7f\u4e24\u4e2a\u6570\u7ec4\u76f8\u7b49","description":"\u94fe\u63a5\uff1a1460.\u901a\u8fc7\u7ffb\u8f6c\u5b50\u6570\u7ec4\u4f7f\u4e24\u4e2a\u6570\u7ec4\u76f8\u7b49","source":"@site/docs/leetcode/1401-1500/1460.\u901a\u8fc7\u7ffb\u8f6c\u5b50\u6570\u7ec4\u4f7f\u4e24\u4e2a\u6570\u7ec4\u76f8\u7b49.md","sourceDirName":"leetcode/1401-1500","slug":"/leetcode/1401-1500/\u901a\u8fc7\u7ffb\u8f6c\u5b50\u6570\u7ec4\u4f7f\u4e24\u4e2a\u6570\u7ec4\u76f8\u7b49","permalink":"/docs/leetcode/1401-1500/\u901a\u8fc7\u7ffb\u8f6c\u5b50\u6570\u7ec4\u4f7f\u4e24\u4e2a\u6570\u7ec4\u76f8\u7b49","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1460,"frontMatter":{},"sidebar":"journal","previous":{"title":"1457.\u4e8c\u53c9\u6811\u4e2d\u7684\u4f2a\u56de\u6587\u8def\u5f84","permalink":"/docs/leetcode/1401-1500/\u4e8c\u53c9\u6811\u4e2d\u7684\u4f2a\u56de\u6587\u8def\u5f84"},"next":{"title":"1462.\u8bfe\u7a0b\u8868IV","permalink":"/docs/leetcode/1401-1500/\u8bfe\u7a0b\u8868IV"}}');var s=r(86070),l=r(31503);const c={},i="1460.\u901a\u8fc7\u7ffb\u8f6c\u5b50\u6570\u7ec4\u4f7f\u4e24\u4e2a\u6570\u7ec4\u76f8\u7b49",o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - rust",id:"\u9898\u89e3-2---rust",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1460\u901a\u8fc7\u7ffb\u8f6c\u5b50\u6570\u7ec4\u4f7f\u4e24\u4e2a\u6570\u7ec4\u76f8\u7b49",children:"1460.\u901a\u8fc7\u7ffb\u8f6c\u5b50\u6570\u7ec4\u4f7f\u4e24\u4e2a\u6570\u7ec4\u76f8\u7b49"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/make-two-arrays-equal-by-reversing-subarrays",children:"1460.\u901a\u8fc7\u7ffb\u8f6c\u5b50\u6570\u7ec4\u4f7f\u4e24\u4e2a\u6570\u7ec4\u76f8\u7b49"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u6392\u5e8f",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e24\u4e2a\u957f\u5ea6\u76f8\u540c\u7684\u6574\u6570\u6570\u7ec4 target \u548c arr \u3002\u6bcf\u4e00\u6b65\u4e2d\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9 arr \u7684\u4efb\u610f \u975e\u7a7a\u5b50\u6570\u7ec4 \u5e76\u5c06\u5b83\u7ffb\u8f6c\u3002\u4f60\u53ef\u4ee5\u6267\u884c\u6b64\u8fc7\u7a0b\u4efb\u610f\u6b21\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-08-24"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a12ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a13.9MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53ea\u8981\u6570\u7684\u6570\u91cf\u76f8\u540c\u5c31\u53ef\u4ee5\u5339\u914d\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool canBeEqual(vector<int>& target, vector<int>& arr) {\n       int map[1005] = {0};\n       for (auto &num : arr) map[num]++;\n       for (auto &num : target) {\n           if (map[num]-- == 0) return false;\n       }\n       return true;\n    }\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---rust",children:"\u9898\u89e3 2 - rust"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-08-24"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53ea\u8981\u6570\u7684\u6570\u91cf\u76f8\u540c\u5c31\u53ef\u4ee5\u5339\u914d\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn can_be_equal(target: Vec<i32>, arr: Vec<i32>) -> bool {\n        let mut map = [0; 1005];\n        for num in arr {\n            map[num as usize] += 1;\n        }\n        for num in target {\n            if map[num as usize] == 0 {\n                return false;\n            }\n            map[num as usize] -= 1;\n        }\n        true\n    }\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},31503:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var t=r(30758);const s={},l=t.createContext(s);function c(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);