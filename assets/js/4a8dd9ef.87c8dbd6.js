"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[88786],{72559:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var s=i(86070),l=i(31503);const t={},r="2491.\u5212\u5206\u6280\u80fd\u70b9\u76f8\u7b49\u7684\u56e2\u961f",o={id:"leetcode/2401-2500/\u5212\u5206\u6280\u80fd\u70b9\u76f8\u7b49\u7684\u56e2\u961f",title:"2491.\u5212\u5206\u6280\u80fd\u70b9\u76f8\u7b49\u7684\u56e2\u961f",description:"\u94fe\u63a5\uff1a2491.\u5212\u5206\u6280\u80fd\u70b9\u76f8\u7b49\u7684\u56e2\u961f",source:"@site/docs/leetcode/2401-2500/2491.\u5212\u5206\u6280\u80fd\u70b9\u76f8\u7b49\u7684\u56e2\u961f.md",sourceDirName:"leetcode/2401-2500",slug:"/leetcode/2401-2500/\u5212\u5206\u6280\u80fd\u70b9\u76f8\u7b49\u7684\u56e2\u961f",permalink:"/docs/leetcode/2401-2500/\u5212\u5206\u6280\u80fd\u70b9\u76f8\u7b49\u7684\u56e2\u961f",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2491,frontMatter:{},sidebar:"journal",previous:{title:"2490.\u56de\u73af\u53e5",permalink:"/docs/leetcode/2401-2500/\u56de\u73af\u53e5"},next:{title:"2492.\u4e24\u4e2a\u57ce\u5e02\u95f4\u8def\u5f84\u7684\u6700\u5c0f\u5206\u6570",permalink:"/docs/leetcode/2401-2500/\u4e24\u4e2a\u57ce\u5e02\u95f4\u8def\u5f84\u7684\u6700\u5c0f\u5206\u6570"}},c={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2491\u5212\u5206\u6280\u80fd\u70b9\u76f8\u7b49\u7684\u56e2\u961f",children:"2491.\u5212\u5206\u6280\u80fd\u70b9\u76f8\u7b49\u7684\u56e2\u961f"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/divide-players-into-teams-of-equal-skill",children:"2491.\u5212\u5206\u6280\u80fd\u70b9\u76f8\u7b49\u7684\u56e2\u961f"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u53cc\u6307\u9488\u3001\u6392\u5e8f",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6b63\u6574\u6570\u6570\u7ec4 skill \uff0c\u6570\u7ec4\u957f\u5ea6\u4e3a \u5076\u6570 n \uff0c\u5176\u4e2d skill[i] \u8868\u793a\u7b2c i \u4e2a\u73a9\u5bb6\u7684\u6280\u80fd\u70b9\u3002\u5c06\u6240\u6709\u73a9\u5bb6\u5206\u6210 n / 2 \u4e2a 2 \u4eba\u56e2\u961f\uff0c\u4f7f\u6bcf\u4e00\u4e2a\u56e2\u961f\u7684\u6280\u80fd\u70b9\u4e4b\u548c \u76f8\u7b49 \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-04"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a72ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a51.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u8d2a\u5fc3\u5224\u65ad\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n#include <vector>\n// bestlyg\n# define X first\n# define Y second\n# define lb(x) ((x) & (-x))\n# define mem(a,b) memset(a,b,sizeof(a))\n# define debug freopen("r.txt","r",stdin)\n# define pi pair<int,int>\n#ifdef DEBUG\n#define log(frm, args...) {    printf(frm, ##args); }\n#else\n#define log(frm, args...)\n#endif\ntypedef long long ll;\nusing namespace std;\nclass Solution {\npublic:\n    long long dividePlayers(vector<int>& skill) {\n        int n = skill.size();\n        sort(skill.begin(), skill.end());\n        int sum = skill[0] + skill[n - 1];\n        long long ans = 0;\n        for (int i = 0; i < n / 2; i++) {\n            if (skill[i] + skill[n - 1 - i] != sum) return -1;\n            ans += skill[i] * skill[n - 1 - i];\n        }\n        return ans;\n    }\n};\n'})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},31503:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var s=i(30758);const l={},t=s.createContext(l);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);