"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[99070],{80068:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=s(86070),r=s(31503);const c={},o="884.\u4e24\u53e5\u8bdd\u4e2d\u7684\u4e0d\u5e38\u89c1\u5355\u8bcd",i={id:"leetcode/801-900/\u4e24\u53e5\u8bdd\u4e2d\u7684\u4e0d\u5e38\u89c1\u5355\u8bcd",title:"884.\u4e24\u53e5\u8bdd\u4e2d\u7684\u4e0d\u5e38\u89c1\u5355\u8bcd",description:"\u94fe\u63a5\uff1a884.\u4e24\u53e5\u8bdd\u4e2d\u7684\u4e0d\u5e38\u89c1\u5355\u8bcd",source:"@site/docs/leetcode/801-900/884.\u4e24\u53e5\u8bdd\u4e2d\u7684\u4e0d\u5e38\u89c1\u5355\u8bcd.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u4e24\u53e5\u8bdd\u4e2d\u7684\u4e0d\u5e38\u89c1\u5355\u8bcd",permalink:"/docs/leetcode/801-900/\u4e24\u53e5\u8bdd\u4e2d\u7684\u4e0d\u5e38\u89c1\u5355\u8bcd",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:884,frontMatter:{},sidebar:"journal",previous:{title:"883.\u4e09\u7ef4\u5f62\u4f53\u6295\u5f71\u9762\u79ef",permalink:"/docs/leetcode/801-900/\u4e09\u7ef4\u5f62\u4f53\u6295\u5f71\u9762\u79ef"},next:{title:"886.\u53ef\u80fd\u7684\u4e8c\u5206\u6cd5",permalink:"/docs/leetcode/801-900/\u53ef\u80fd\u7684\u4e8c\u5206\u6cd5"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"884\u4e24\u53e5\u8bdd\u4e2d\u7684\u4e0d\u5e38\u89c1\u5355\u8bcd",children:"884.\u4e24\u53e5\u8bdd\u4e2d\u7684\u4e0d\u5e38\u89c1\u5355\u8bcd"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://leetcode.cn/problems/uncommon-words-from-two-sentences",children:"884.\u4e24\u53e5\u8bdd\u4e2d\u7684\u4e0d\u5e38\u89c1\u5355\u8bcd"}),(0,t.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,t.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32",(0,t.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e24\u4e2a \u53e5\u5b50 s1 \u548c s2 \uff0c\u8fd4\u56de\u6240\u6709 \u4e0d\u5e38\u7528\u5355\u8bcd \u7684\u5217\u8868\u3002\u8fd4\u56de\u5217\u8868\u4e2d\u5355\u8bcd\u53ef\u4ee5\u6309 \u4efb\u610f\u987a\u5e8f \u7ec4\u7ec7\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-01-30"}),"\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,t.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.5MB"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5206\u5272\u5b57\u7b26\u4e32\u540e\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    vector<string> uncommonFromSentences(string s1, string s2) {\n        vector<string> ans;\n        unordered_map<string, int> m;\n        istringstream iss1(s1), iss2(s2);\n        string buffer;\n        while (getline(iss1, buffer, ' ')) m[buffer]++;\n        while (getline(iss2, buffer, ' ')) m[buffer]++;\n        for (auto &data : m)\n            if (data.second == 1) ans.push_back(data.first);\n        return ans;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},31503:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var t=s(30758);const r={},c=t.createContext(r);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);