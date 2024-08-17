"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[71472],{54097:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(86070),c=t(25710);const r={},s="661.\u56fe\u7247\u5e73\u6ed1\u5668",o={id:"leetcode/601-700/\u56fe\u7247\u5e73\u6ed1\u5668",title:"661.\u56fe\u7247\u5e73\u6ed1\u5668",description:"\u94fe\u63a5\uff1a661.\u56fe\u7247\u5e73\u6ed1\u5668",source:"@site/docs/leetcode/601-700/661.\u56fe\u7247\u5e73\u6ed1\u5668.md",sourceDirName:"leetcode/601-700",slug:"/leetcode/601-700/\u56fe\u7247\u5e73\u6ed1\u5668",permalink:"/docs/leetcode/601-700/\u56fe\u7247\u5e73\u6ed1\u5668",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:661,frontMatter:{},sidebar:"journal",previous:{title:"658.\u627e\u5230K\u4e2a\u6700\u63a5\u8fd1\u7684\u5143\u7d20",permalink:"/docs/leetcode/601-700/\u627e\u5230K\u4e2a\u6700\u63a5\u8fd1\u7684\u5143\u7d20"},next:{title:"664.\u5947\u602a\u7684\u6253\u5370\u673a",permalink:"/docs/leetcode/601-700/\u5947\u602a\u7684\u6253\u5370\u673a"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"661\u56fe\u7247\u5e73\u6ed1\u5668",children:"661.\u56fe\u7247\u5e73\u6ed1\u5668"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/image-smoother",children:"661.\u56fe\u7247\u5e73\u6ed1\u5668"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u77e9\u9635",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u8868\u793a\u56fe\u50cf\u7070\u5ea6\u7684 m x n \u6574\u6570\u77e9\u9635 img \uff0c\u8fd4\u56de\u5bf9\u56fe\u50cf\u7684\u6bcf\u4e2a\u5355\u5143\u683c\u5e73\u6ed1\u5904\u7406\u540e\u7684\u56fe\u50cf \u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-16"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a44ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a21.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    constexpr static int dirs[8][2] = {{0, 1}, {0, -1}, {1, 0},  {-1, 0},\n                                       {1, 1}, {1, -1}, {-1, 1}, {-1, -1}};\n    vector<vector<int>> imageSmoother(vector<vector<int>>& img) {\n        int n = img.size(), m = img[0].size();\n        vector<vector<int>> ans(n, vector<int>(m));\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < m; j++) {\n                int val = img[i][j], cnt = 1;\n                for (int k = 0; k < 8; k++) {\n                    int ni = i + dirs[k][0], nj = j + dirs[k][1];\n                    if (ni < 0 || ni == n || nj < 0 || nj == m) continue;\n                    val += img[ni][nj];\n                    cnt++;\n                }\n                ans[i][j] = val / cnt;\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>o});var i=t(30758);const c={},r=i.createContext(c);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);