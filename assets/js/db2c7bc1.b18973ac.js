"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[17403],{84836:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(86070),s=t(25710);const r={},o="1345.\u8df3\u8dc3\u6e38\u620fIV",c={id:"leetcode/1301-1400/\u8df3\u8dc3\u6e38\u620fIV",title:"1345.\u8df3\u8dc3\u6e38\u620fIV",description:"\u94fe\u63a5\uff1a1345.\u8df3\u8dc3\u6e38\u620fIV",source:"@site/docs/leetcode/1301-1400/1345.\u8df3\u8dc3\u6e38\u620fIV.md",sourceDirName:"leetcode/1301-1400",slug:"/leetcode/1301-1400/\u8df3\u8dc3\u6e38\u620fIV",permalink:"/web/site/docs/leetcode/1301-1400/\u8df3\u8dc3\u6e38\u620fIV",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1345,frontMatter:{},sidebar:"journal",previous:{title:"1342.\u5c06\u6570\u5b57\u53d8\u62100\u7684\u64cd\u4f5c\u6b21\u6570",permalink:"/web/site/docs/leetcode/1301-1400/\u5c06\u6570\u5b57\u53d8\u62100\u7684\u64cd\u4f5c\u6b21\u6570"},next:{title:"1349.\u53c2\u52a0\u8003\u8bd5\u7684\u6700\u5927\u5b66\u751f\u6570",permalink:"/web/site/docs/leetcode/1301-1400/\u53c2\u52a0\u8003\u8bd5\u7684\u6700\u5927\u5b66\u751f\u6570"}},d={},l=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"1345\u8df3\u8dc3\u6e38\u620fiv",children:"1345.\u8df3\u8dc3\u6e38\u620fIV"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/jump-game-iv",children:"1345.\u8df3\u8dc3\u6e38\u620fIV"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u56f0\u96be",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de\u5230\u8fbe\u6570\u7ec4\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u4e0b\u6807\u5904\u6240\u9700\u7684 \u6700\u5c11\u64cd\u4f5c\u6b21\u6570 \u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-01-21"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a248ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a95.7MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","bfs\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    struct node {\n        int idx, step;\n    };\n    int minJumps(vector<int>& arr) {\n        unordered_map<int, vector<int>> m;\n        unordered_set<int> s;\n        s.insert(0);\n        queue<node> q;\n        q.push((node){0, 0});\n        int n = arr.size();\n        for (int i = 0; i < n; i++) m[arr[i]].push_back(i);\n        while (q.size()) {\n            node v = q.front();\n            if (v.idx == n - 1) return v.step;\n            q.pop();\n            if (v.idx > 0 && !s.count(v.idx - 1)) {\n                q.push((node){v.idx - 1, v.step + 1});\n                s.insert(v.idx - 1);\n            }\n            if (v.idx < n - 1 && !s.count(v.idx + 1)) {\n                q.push((node){v.idx + 1, v.step + 1});\n                s.insert(v.idx + 1);\n            }\n            if (!m.count(arr[v.idx])) continue;\n            for (auto& next_idx : m[arr[v.idx]]) {\n                if (next_idx == v.idx || s.count(next_idx)) continue;\n                q.push((node){next_idx, v.step + 1});\n                s.insert(next_idx);\n            }\n            m.erase(arr[v.idx]);\n        }\n        return 0;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var i=t(30758);const s={},r=i.createContext(s);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);