"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[8593],{28969:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var i=r(86070),t=r(31503);const c={},s="1200.\u6700\u5c0f\u7edd\u5bf9\u5dee",l={id:"leetcode/1101-1200/\u6700\u5c0f\u7edd\u5bf9\u5dee",title:"1200.\u6700\u5c0f\u7edd\u5bf9\u5dee",description:"\u94fe\u63a5\uff1a1200.\u6700\u5c0f\u7edd\u5bf9\u5dee",source:"@site/docs/leetcode/1101-1200/1200.\u6700\u5c0f\u7edd\u5bf9\u5dee.md",sourceDirName:"leetcode/1101-1200",slug:"/leetcode/1101-1200/\u6700\u5c0f\u7edd\u5bf9\u5dee",permalink:"/docs/leetcode/1101-1200/\u6700\u5c0f\u7edd\u5bf9\u5dee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1200,frontMatter:{},sidebar:"journal",previous:{title:"1190.\u53cd\u8f6c\u6bcf\u5bf9\u62ec\u53f7\u95f4\u7684\u5b50\u4e32",permalink:"/docs/leetcode/1101-1200/\u53cd\u8f6c\u6bcf\u5bf9\u62ec\u53f7\u95f4\u7684\u5b50\u4e32"},next:{title:"1201.\u4e11\u6570III",permalink:"/docs/leetcode/1201-1300/\u4e11\u6570III"}},o={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"1200\u6700\u5c0f\u7edd\u5bf9\u5dee",children:"1200.\u6700\u5c0f\u7edd\u5bf9\u5dee"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/minimum-absolute-difference",children:"1200.\u6700\u5c0f\u7edd\u5bf9\u5dee"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u6392\u5e8f",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u627e\u5230\u6240\u6709\u5177\u6709\u6700\u5c0f\u7edd\u5bf9\u5dee\u7684\u5143\u7d20\u5bf9\uff0c\u5e76\u4e14\u6309\u5347\u5e8f\u7684\u987a\u5e8f\u8fd4\u56de\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-29"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a52ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a32.3MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    vector<vector<int>> minimumAbsDifference(vector<int>& arr) {\n        vector<vector<int>> ans;\n        sort(arr.begin(), arr.end());\n        int prev = arr[0], nmax = INT_MAX;\n        for (int i = 1; i < arr.size(); i++) {\n            int num = arr[i];\n            if (num - prev <= nmax) {\n                if (num - prev < nmax) ans.clear();\n                vector<int> item;\n                item.push_back(prev);\n                item.push_back(num);\n                ans.push_back(item);\n                nmax = num - prev;\n            }\n            prev = num;\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-07-04"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a60ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a31.8MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u70b9\u627e\u5230\u4ed6\u7684\u6700\u5c0f\u503c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n  public:\n    vector<vector<int>> minimumAbsDifference(vector<int>& arr) {\n        vector<vector<int>> ans;\n        sort(arr.begin(), arr.end());\n        int nmin = INT_MAX;\n        for (int l = 0, r = 1; r < arr.size(); r++) {\n            while (l < r && abs(arr[l] - arr[r]) > nmin) l++;\n            if (l == r) continue;\n            int nextmin = abs(arr[l] - arr[r]);\n            if (nextmin < nmin) ans.clear();\n            nmin = nextmin;\n            vector<int> item(2);\n            item[0] = arr[l];\n            item[1] = arr[r];\n            ans.push_back(item);\n        }\n        return ans;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},31503:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>l});var i=r(30758);const t={},c=i.createContext(t);function s(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);