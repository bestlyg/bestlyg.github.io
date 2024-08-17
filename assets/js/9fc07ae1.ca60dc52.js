"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[75057],{61167:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=t(86070),i=t(25710);const s={},o="1053.\u4ea4\u6362\u4e00\u6b21\u7684\u5148\u524d\u6392\u5217",c={id:"leetcode/1001-1100/\u4ea4\u6362\u4e00\u6b21\u7684\u5148\u524d\u6392\u5217",title:"1053.\u4ea4\u6362\u4e00\u6b21\u7684\u5148\u524d\u6392\u5217",description:"\u94fe\u63a5\uff1a1053.\u4ea4\u6362\u4e00\u6b21\u7684\u5148\u524d\u6392\u5217",source:"@site/docs/leetcode/1001-1100/1053.\u4ea4\u6362\u4e00\u6b21\u7684\u5148\u524d\u6392\u5217.md",sourceDirName:"leetcode/1001-1100",slug:"/leetcode/1001-1100/\u4ea4\u6362\u4e00\u6b21\u7684\u5148\u524d\u6392\u5217",permalink:"/docs/leetcode/1001-1100/\u4ea4\u6362\u4e00\u6b21\u7684\u5148\u524d\u6392\u5217",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1053,frontMatter:{},sidebar:"journal",previous:{title:"1052.\u7231\u751f\u6c14\u7684\u4e66\u5e97\u8001\u677f",permalink:"/docs/leetcode/1001-1100/\u7231\u751f\u6c14\u7684\u4e66\u5e97\u8001\u677f"},next:{title:"1054.\u8ddd\u79bb\u76f8\u7b49\u7684\u6761\u5f62\u7801",permalink:"/docs/leetcode/1001-1100/\u8ddd\u79bb\u76f8\u7b49\u7684\u6761\u5f62\u7801"}},l={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"1053\u4ea4\u6362\u4e00\u6b21\u7684\u5148\u524d\u6392\u5217",children:"1053.\u4ea4\u6362\u4e00\u6b21\u7684\u5148\u524d\u6392\u5217"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/previous-permutation-with-one-swap",children:"1053.\u4ea4\u6362\u4e00\u6b21\u7684\u5148\u524d\u6392\u5217"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6b63\u6574\u6570\u6570\u7ec4 arr\uff08\u53ef\u80fd\u5b58\u5728\u91cd\u590d\u7684\u5143\u7d20\uff09\uff0c\u8bf7\u4f60\u8fd4\u56de\u53ef\u5728\xa0\u4e00\u6b21\u4ea4\u6362\uff08\u4ea4\u6362\u4e24\u6570\u5b57 arr[i] \u548c arr[j] \u7684\u4f4d\u7f6e\uff09\u540e\u5f97\u5230\u7684\u3001\u6309\u5b57\u5178\u5e8f\u6392\u5217\u5c0f\u4e8e arr \u7684\u6700\u5927\u6392\u5217\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-04-03"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a28ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a24.1MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u627e\u51fa\u672b\u5c3e\u7b2c\u4e00\u4e2a\u51fa\u73b0\u7684\u9006\u5e8f\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> prevPermOpt1(vector<int>& arr) {\n        map<int, int> m;\n        m[10005] = arr.size();\n        for (int i = arr.size() - 1; i >= 0; i--) {\n            auto it = m.lower_bound(arr[i]);\n            if (m.size() > 1 && it != m.begin()) {\n                swap(arr[i], arr[(*(--it)).second]);\n                break;\n            }\n            m[val] = i;\n        }\n        return arr;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(30758);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);