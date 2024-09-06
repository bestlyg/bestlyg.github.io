"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[55472],{89168:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=t(86070),c=t(25710);const r={},o="1405.\u6700\u957f\u5feb\u4e50\u5b57\u7b26\u4e32",i={id:"leetcode/1401-1500/\u6700\u957f\u5feb\u4e50\u5b57\u7b26\u4e32",title:"1405.\u6700\u957f\u5feb\u4e50\u5b57\u7b26\u4e32",description:"\u94fe\u63a5\uff1a1405.\u6700\u957f\u5feb\u4e50\u5b57\u7b26\u4e32",source:"@site/docs/leetcode/1401-1500/1405.\u6700\u957f\u5feb\u4e50\u5b57\u7b26\u4e32.md",sourceDirName:"leetcode/1401-1500",slug:"/leetcode/1401-1500/\u6700\u957f\u5feb\u4e50\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/1401-1500/\u6700\u957f\u5feb\u4e50\u5b57\u7b26\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1405,frontMatter:{},sidebar:"journal",previous:{title:"1403.\u975e\u9012\u589e\u987a\u5e8f\u7684\u6700\u5c0f\u5b50\u5e8f\u5217",permalink:"/docs/leetcode/1401-1500/\u975e\u9012\u589e\u987a\u5e8f\u7684\u6700\u5c0f\u5b50\u5e8f\u5217"},next:{title:"1408.\u6570\u7ec4\u4e2d\u7684\u5b57\u7b26\u4e32\u5339\u914d",permalink:"/docs/leetcode/1401-1500/\u6570\u7ec4\u4e2d\u7684\u5b57\u7b26\u4e32\u5339\u914d"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"1405\u6700\u957f\u5feb\u4e50\u5b57\u7b26\u4e32",children:"1405.\u6700\u957f\u5feb\u4e50\u5b57\u7b26\u4e32"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/longest-happy-string",children:"1405.\u6700\u957f\u5feb\u4e50\u5b57\u7b26\u4e32"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u5b57\u7b26\u4e32\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e09\u4e2a\u6574\u6570 a\uff0cb \uff0cc\uff0c\u8bf7\u4f60\u8fd4\u56de \u4efb\u610f\u4e00\u4e2a \u6ee1\u8db3\u4e0b\u5217\u5168\u90e8\u6761\u4ef6\u7684\u5b57\u7b26\u4e32 s\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-07"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8d2a\u5fc3,\u5806,\u6bcf\u6b21\u53d6\u6700\u5927\u7684\u5143\u7d20\u8fdb\u884c\u585e\u5165\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    typedef pair<char, int> node;\n    string longestDiverseString(int a, int b, int c) {\n        auto cmp = [&](node x, node y) -> bool { return x.second < y.second; };\n        priority_queue<node, vector<node>, decltype(cmp)> q(cmp);\n        q.push(make_pair('a', a));\n        q.push(make_pair('b', b));\n        q.push(make_pair('c', c));\n        string ans = \"\";\n        while (1) {\n            node v = q.top();\n            int prev_cnt = 0;  // \u770b\u770b\u524d\u9762\u6709\u51e0\u4e2a\u4e00\u6837\u7684\n            for (int i = ans.size() - 1; i >= 0 && ans[i] == v.first; i--)\n                prev_cnt++;\n            if (v.second == 0 || prev_cnt >= 2)\n                break;  // \u5982\u679c\u6240\u6709\u7684\u90fd\u6ca1\u4e86\u6216\u8005\u524d\u9762\u6709\u4e24\u4e2a\u4e00\u6837\u7684\uff0c\u5c31\u4e0d\u8981\u4e86\n            q.pop();\n            int cnt = prev_cnt == 1 ? 1 : v.second >= 2 ? 2 : 1;\n            v.second -= cnt;\n            while (cnt--) ans += v.first;  // \u585e\u8fdb\u53bb\n            node nv = q.top();  // \u5c1d\u8bd5\u4ece\u4e0b\u4e00\u4e2a\u5b57\u7b26\u62ff\u4e00\u4e2a\u505a\u95f4\u9694\n            q.pop();\n            if (nv.second >= 1) {\n                ans += nv.first;\n                nv.second -= 1;\n            }\n            q.push(nv);\n            q.push(v);\n        }\n        return ans;\n    }\n};\n"})})]})}function a(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>i});var s=t(30758);const c={},r=s.createContext(c);function o(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:o(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);