"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[87005],{36546:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(86070),c=t(25710);const s={},o="1252.\u5947\u6570\u503c\u5355\u5143\u683c\u7684\u6570\u76ee",l={id:"leetcode/1201-1300/\u5947\u6570\u503c\u5355\u5143\u683c\u7684\u6570\u76ee",title:"1252.\u5947\u6570\u503c\u5355\u5143\u683c\u7684\u6570\u76ee",description:"\u94fe\u63a5\uff1a1252.\u5947\u6570\u503c\u5355\u5143\u683c\u7684\u6570\u76ee",source:"@site/docs/leetcode/1201-1300/1252.\u5947\u6570\u503c\u5355\u5143\u683c\u7684\u6570\u76ee.md",sourceDirName:"leetcode/1201-1300",slug:"/leetcode/1201-1300/\u5947\u6570\u503c\u5355\u5143\u683c\u7684\u6570\u76ee",permalink:"/docs/leetcode/1201-1300/\u5947\u6570\u503c\u5355\u5143\u683c\u7684\u6570\u76ee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1252,frontMatter:{},sidebar:"journal",previous:{title:"1250.\u68c0\u67e5\u300c\u597d\u6570\u7ec4\u300d",permalink:"/docs/leetcode/1201-1300/\u68c0\u67e5\u300c\u597d\u6570\u7ec4\u300d"},next:{title:"1253.\u91cd\u67842\u884c\u4e8c\u8fdb\u5236\u77e9\u9635",permalink:"/docs/leetcode/1201-1300/\u91cd\u67842\u884c\u4e8c\u8fdb\u5236\u77e9\u9635"}},r={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"1252\u5947\u6570\u503c\u5355\u5143\u683c\u7684\u6570\u76ee",children:"1252.\u5947\u6570\u503c\u5355\u5143\u683c\u7684\u6570\u76ee"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/cells-with-odd-values-in-a-matrix",children:"1252.\u5947\u6570\u503c\u5355\u5143\u683c\u7684\u6570\u76ee"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6570\u5b66\u3001\u6a21\u62df",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60 m\u3001n \u548c indices \u3002\u8bf7\u4f60\u5728\u6267\u884c\u5b8c\u6240\u6709 indices \u6307\u5b9a\u7684\u589e\u91cf\u64cd\u4f5c\u540e\uff0c\u8fd4\u56de\u77e9\u9635\u4e2d \u5947\u6570\u503c\u5355\u5143\u683c \u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-07-12"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.9MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6a21\u62df\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int oddCells(int m, int n, vector<vector<int>>& indices) {\n        vector<vector<int>> list(m, vector<int>(n, 0));\n        for (auto& item : indices) {\n            for (int i = 0; i < n; i++) list[item[0]][i]++;\n            for (int i = 0; i < m; i++) list[i][item[1]]++;\n        }\n        int ans = 0;\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                if (list[i][j] & 1) ans++;\n            }\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-07-12"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.5MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u7edf\u8ba1\u5947\u6570\u884c\u548c\u5947\u6570\u5217\u518d\u51cf\u53bb\u91cd\u590d\u90e8\u5206\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int oddCells(int m, int n, vector<vector<int>> &indices) {\n        vector<int> rows(m), cols(n);\n        for (auto &item : indices) {\n            rows[item[0]]++;\n            cols[item[1]]++;\n        }\n        int rowCnt = 0, colCnt = 0;\n        for (auto &row : rows)\n            if (row & 1) rowCnt++;\n        for (auto &col : cols)\n            if (col & 1) colCnt++;\n        return rowCnt * n + colCnt * m - 2 * rowCnt * colCnt;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>l});var i=t(30758);const c={},s=i.createContext(c);function o(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:o(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);