"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[47256],{86961:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var i=t(86070),s=t(25710);const c={},r="498.\u5bf9\u89d2\u7ebf\u904d\u5386",o={id:"leetcode/401-500/\u5bf9\u89d2\u7ebf\u904d\u5386",title:"498.\u5bf9\u89d2\u7ebf\u904d\u5386",description:"\u94fe\u63a5\uff1a498.\u5bf9\u89d2\u7ebf\u904d\u5386",source:"@site/docs/leetcode/401-500/498.\u5bf9\u89d2\u7ebf\u904d\u5386.md",sourceDirName:"leetcode/401-500",slug:"/leetcode/401-500/\u5bf9\u89d2\u7ebf\u904d\u5386",permalink:"/docs/leetcode/401-500/\u5bf9\u89d2\u7ebf\u904d\u5386",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:498,frontMatter:{},sidebar:"journal",previous:{title:"496.\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20I",permalink:"/docs/leetcode/401-500/\u4e0b\u4e00\u4e2a\u66f4\u5927\u5143\u7d20I"},next:{title:"500.\u952e\u76d8\u884c",permalink:"/docs/leetcode/401-500/\u952e\u76d8\u884c"}},l={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"498\u5bf9\u89d2\u7ebf\u904d\u5386",children:"498.\u5bf9\u89d2\u7ebf\u904d\u5386"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/diagonal-traverse",children:"498.\u5bf9\u89d2\u7ebf\u904d\u5386"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u77e9\u9635\u3001\u6a21\u62df",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5927\u5c0f\u4e3a m x n \u7684\u77e9\u9635 mat \uff0c\u8bf7\u4ee5\u5bf9\u89d2\u7ebf\u904d\u5386\u7684\u987a\u5e8f\uff0c\u7528\u4e00\u4e2a\u6570\u7ec4\u8fd4\u56de\u8fd9\u4e2a\u77e9\u9635\u4e2d\u7684\u6240\u6709\u5143\u7d20\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-06-14"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.9MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\uff0c\u5185\u5d4c\u4e24\u4e2a while \u8fdb\u884c\u53cd\u590d\u5faa\u73af\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    vector<int> findDiagonalOrder(vector<vector<int>>& mat) {\n        int n = mat.size(), m = mat[0].size(), i = 0, j = 0;\n        vector<int> ans;\n        while (i != n - 1 || j != m - 1) {\n            while (i != -1 && j != m) ans.push_back(mat[i--][j++]);\n            i++;\n            if (j == m) j--, i++;\n            if (i == n - 1 && j == m - 1) break;\n            while (i != n && j != -1) ans.push_back(mat[i++][j--]);\n            j++;\n            if (i == n) i--, j++;\n            if (i == n - 1 && j == m - 1) break;\n        }\n        ans.push_back(mat[i][j]);\n        return ans;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(30758);const s={},c=i.createContext(s);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);