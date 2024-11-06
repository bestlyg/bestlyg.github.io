"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[28708],{17988:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var t=r(86070),i=r(31503);const c={},s="1640.\u80fd\u5426\u8fde\u63a5\u5f62\u6210\u6570\u7ec4",o={id:"leetcode/1601-1700/\u80fd\u5426\u8fde\u63a5\u5f62\u6210\u6570\u7ec4",title:"1640.\u80fd\u5426\u8fde\u63a5\u5f62\u6210\u6570\u7ec4",description:"\u94fe\u63a5\uff1a1640.\u80fd\u5426\u8fde\u63a5\u5f62\u6210\u6570\u7ec4",source:"@site/docs/leetcode/1601-1700/1640.\u80fd\u5426\u8fde\u63a5\u5f62\u6210\u6570\u7ec4.md",sourceDirName:"leetcode/1601-1700",slug:"/leetcode/1601-1700/\u80fd\u5426\u8fde\u63a5\u5f62\u6210\u6570\u7ec4",permalink:"/docs/leetcode/1601-1700/\u80fd\u5426\u8fde\u63a5\u5f62\u6210\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1640,frontMatter:{},sidebar:"journal",previous:{title:"1638.\u7edf\u8ba1\u53ea\u5dee\u4e00\u4e2a\u5b57\u7b26\u7684\u5b50\u4e32\u6570\u76ee",permalink:"/docs/leetcode/1601-1700/\u7edf\u8ba1\u53ea\u5dee\u4e00\u4e2a\u5b57\u7b26\u7684\u5b50\u4e32\u6570\u76ee"},next:{title:"1641.\u7edf\u8ba1\u5b57\u5178\u5e8f\u5143\u97f3\u5b57\u7b26\u4e32\u7684\u6570\u76ee",permalink:"/docs/leetcode/1601-1700/\u7edf\u8ba1\u5b57\u5178\u5e8f\u5143\u97f3\u5b57\u7b26\u4e32\u7684\u6570\u76ee"}},l={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"1640\u80fd\u5426\u8fde\u63a5\u5f62\u6210\u6570\u7ec4",children:"1640.\u80fd\u5426\u8fde\u63a5\u5f62\u6210\u6570\u7ec4"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/check-array-formation-through-concatenation",children:"1640.\u80fd\u5426\u8fde\u63a5\u5f62\u6210\u6570\u7ec4"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5982\u679c\u53ef\u4ee5\u8fde\u63a5 pieces \u4e2d\u7684\u6570\u7ec4\u5f62\u6210 arr \uff0c\u8fd4\u56de true \uff1b\u5426\u5219\uff0c\u8fd4\u56de false \u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-09-22"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u5b58\u50a8\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool canFormArray(vector<int>& arr, vector<vector<int>>& pieces) {\n        unordered_map<int, int> m;\n        for (int i = 0; i < pieces.size(); i++) m[pieces[i][0]] = i;\n        for (int i = 0; i < arr.size();) {\n            if (!m.count(arr[i])) return false;\n            int idx = m[arr[i]];\n            for (int j = 0; j < pieces[idx].size(); j++, i++) if (pieces[idx][j] != arr[i]) return false;\n        }\n        return true;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},31503:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var t=r(30758);const i={},c=t.createContext(i);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);