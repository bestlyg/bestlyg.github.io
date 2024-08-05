"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[53672],{26695:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(86070),i=t(25710);const s={},c="2120.\u6267\u884c\u6240\u6709\u540e\u7f00\u6307\u4ee4",o={id:"leetcode/2101-2200/\u6267\u884c\u6240\u6709\u540e\u7f00\u6307\u4ee4",title:"2120.\u6267\u884c\u6240\u6709\u540e\u7f00\u6307\u4ee4",description:"\u94fe\u63a5\uff1a2120.\u6267\u884c\u6240\u6709\u540e\u7f00\u6307\u4ee4",source:"@site/docs/leetcode/2101-2200/2120.\u6267\u884c\u6240\u6709\u540e\u7f00\u6307\u4ee4.md",sourceDirName:"leetcode/2101-2200",slug:"/leetcode/2101-2200/\u6267\u884c\u6240\u6709\u540e\u7f00\u6307\u4ee4",permalink:"/web/site/docs/leetcode/2101-2200/\u6267\u884c\u6240\u6709\u540e\u7f00\u6307\u4ee4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2120,frontMatter:{},sidebar:"journal",previous:{title:"2115.\u4ece\u7ed9\u5b9a\u539f\u6750\u6599\u4e2d\u627e\u5230\u6240\u6709\u53ef\u4ee5\u505a\u51fa\u7684\u83dc",permalink:"/web/site/docs/leetcode/2101-2200/\u4ece\u7ed9\u5b9a\u539f\u6750\u6599\u4e2d\u627e\u5230\u6240\u6709\u53ef\u4ee5\u505a\u51fa\u7684\u83dc"},next:{title:"2122.\u8fd8\u539f\u539f\u6570\u7ec4",permalink:"/web/site/docs/leetcode/2101-2200/\u8fd8\u539f\u539f\u6570\u7ec4"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"2120\u6267\u884c\u6240\u6709\u540e\u7f00\u6307\u4ee4",children:"2120.\u6267\u884c\u6240\u6709\u540e\u7f00\u6307\u4ee4"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/execution-of-all-suffix-instructions-staying-in-a-grid",children:"2120.\u6267\u884c\u6240\u6709\u540e\u7f00\u6307\u4ee4"}),(0,r.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32\u3001\u6a21\u62df",(0,r.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u4e00\u4e2a\u957f\u5ea6\u4e3a m \u7684\u6570\u7ec4 answer \uff0c\u5176\u4e2d answer[i] \u662f\u673a\u5668\u4eba\u4ece\u7b2c i \u6761\u6307\u4ee4 \u5f00\u59cb \uff0c\u53ef\u4ee5\u6267\u884c\u7684 \u6307\u4ee4\u6570\u76ee \u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-31"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a10.2MB"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int dirs[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};\n    int getDirIdx(char ch) {\n        if (ch == 'D') return 0;\n        if (ch == 'U') return 1;\n        if (ch == 'R') return 2;\n        if (ch == 'L') return 3;\n        return -1;\n    }\n    vector<int> executeInstructions(int n, vector<int>& startPos, string s) {\n        vector<int> ans;\n        int n_str = s.size();\n        for (int i = 0; i < n_str; i++) {\n            int cnt = 0, row = startPos[0], col = startPos[1];\n            for (int j = i; j < n_str; j++, cnt++) {\n                int diridx = getDirIdx(s[j]);\n                row += dirs[diridx][0];\n                col += dirs[diridx][1];\n                if (row < 0 || row >= n || col < 0 || col >= n) break;\n            }\n            ans.push_back(cnt);\n        }\n        return ans;\n    }\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var r=t(30758);const i={},s=r.createContext(i);function c(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);