"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[19666],{48258:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(86070),c=t(25710);const r={},i="1791.\u627e\u51fa\u661f\u578b\u56fe\u7684\u4e2d\u5fc3\u8282\u70b9",o={id:"leetcode/1701-1800/\u627e\u51fa\u661f\u578b\u56fe\u7684\u4e2d\u5fc3\u8282\u70b9",title:"1791.\u627e\u51fa\u661f\u578b\u56fe\u7684\u4e2d\u5fc3\u8282\u70b9",description:"\u94fe\u63a5\uff1a1791.\u627e\u51fa\u661f\u578b\u56fe\u7684\u4e2d\u5fc3\u8282\u70b9",source:"@site/docs/leetcode/1701-1800/1791.\u627e\u51fa\u661f\u578b\u56fe\u7684\u4e2d\u5fc3\u8282\u70b9.md",sourceDirName:"leetcode/1701-1800",slug:"/leetcode/1701-1800/\u627e\u51fa\u661f\u578b\u56fe\u7684\u4e2d\u5fc3\u8282\u70b9",permalink:"/web/site/docs/leetcode/1701-1800/\u627e\u51fa\u661f\u578b\u56fe\u7684\u4e2d\u5fc3\u8282\u70b9",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1791,frontMatter:{},sidebar:"journal",previous:{title:"1790.\u4ec5\u6267\u884c\u4e00\u6b21\u5b57\u7b26\u4e32\u4ea4\u6362\u80fd\u5426\u4f7f\u4e24\u4e2a\u5b57\u7b26\u4e32\u76f8\u7b49",permalink:"/web/site/docs/leetcode/1701-1800/\u4ec5\u6267\u884c\u4e00\u6b21\u5b57\u7b26\u4e32\u4ea4\u6362\u80fd\u5426\u4f7f\u4e24\u4e2a\u5b57\u7b26\u4e32\u76f8\u7b49"},next:{title:"1792.\u6700\u5927\u5e73\u5747\u901a\u8fc7\u7387",permalink:"/web/site/docs/leetcode/1701-1800/\u6700\u5927\u5e73\u5747\u901a\u8fc7\u7387"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1791\u627e\u51fa\u661f\u578b\u56fe\u7684\u4e2d\u5fc3\u8282\u70b9",children:"1791.\u627e\u51fa\u661f\u578b\u56fe\u7684\u4e2d\u5fc3\u8282\u70b9"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/find-center-of-star-graph",children:"1791.\u627e\u51fa\u661f\u578b\u56fe\u7684\u4e2d\u5fc3\u8282\u70b9"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u56fe",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u4e8c\u7ef4\u6574\u6570\u6570\u7ec4 edges \uff0c\u5176\u4e2d \xa0edges[i] = [ui, vi] \u8868\u793a\u5728\u8282\u70b9 ui \u548c vi \u4e4b\u95f4\u5b58\u5728\u4e00\u6761\u8fb9\u3002\u8bf7\u4f60\u627e\u51fa\u5e76\u8fd4\u56de \xa0edges \u6240\u8868\u793a\u661f\u578b\u56fe\u7684\u4e2d\u5fc3\u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-18"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a144ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a65.7MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u76f4\u63a5\u5224\u65ad\u524d\u4e24\u4e2a\u8fb9\u4e2d\uff0c\u5b58\u5728\u76f8\u540c\u7684\u70b9\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int findCenter(vector<vector<int>>& edges) {\n        return edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]\n                   ? edges[0][0]\n                   : edges[0][1];\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(30758);const c={},r=s.createContext(c);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);