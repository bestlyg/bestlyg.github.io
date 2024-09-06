"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[57108],{11322:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=s(86070),t=s(25710);const l={},r="2315.\u7edf\u8ba1\u661f\u53f7",c={id:"leetcode/2301-2400/\u7edf\u8ba1\u661f\u53f7",title:"2315.\u7edf\u8ba1\u661f\u53f7",description:"\u94fe\u63a5\uff1a2315.\u7edf\u8ba1\u661f\u53f7",source:"@site/docs/leetcode/2301-2400/2315.\u7edf\u8ba1\u661f\u53f7.md",sourceDirName:"leetcode/2301-2400",slug:"/leetcode/2301-2400/\u7edf\u8ba1\u661f\u53f7",permalink:"/docs/leetcode/2301-2400/\u7edf\u8ba1\u661f\u53f7",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2315,frontMatter:{},sidebar:"journal",previous:{title:"2312.\u5356\u6728\u5934\u5757",permalink:"/docs/leetcode/2301-2400/\u5356\u6728\u5934\u5757"},next:{title:"2316.\u7edf\u8ba1\u65e0\u5411\u56fe\u4e2d\u65e0\u6cd5\u4e92\u76f8\u5230\u8fbe\u70b9\u5bf9\u6570",permalink:"/docs/leetcode/2301-2400/\u7edf\u8ba1\u65e0\u5411\u56fe\u4e2d\u65e0\u6cd5\u4e92\u76f8\u5230\u8fbe\u70b9\u5bf9\u6570"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - python",id:"\u9898\u89e3-2---python",level:2},{value:"\u9898\u89e3 3 - rust",id:"\u9898\u89e3-3---rust",level:2},{value:"\u9898\u89e3 4 - typescript",id:"\u9898\u89e3-4---typescript",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"2315\u7edf\u8ba1\u661f\u53f7",children:"2315.\u7edf\u8ba1\u661f\u53f7"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/count-asterisks",children:"2315.\u7edf\u8ba1\u661f\u53f7"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u4f60\u8fd4\u56de \u4e0d\u5728 \u7ad6\u7ebf\u5bf9\u4e4b\u95f4\uff0cs \u4e2d '*' \u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-29"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a6.5MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int countAsterisks(string s) {\n        istringstream iss(s);\n        string tmp;\n        int ans = 0;\n        for (int i = 0; getline(iss, tmp, '|'); i++) {\n            if (i % 2 == 0) \n                for (auto &c : tmp) if (c == '*') ans++;\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---python",children:"\u9898\u89e3 2 - python"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-29"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a48ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def countAsterisks(self, s: str) -> int:\n        list = s.split('|')\n        ans = 0\n        for i in range(len(list)):\n            if i % 2 == 0:\n                for c in list[i]:\n                    if c == '*':\n                        ans += 1\n        return ans\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---rust",children:"\u9898\u89e3 3 - rust"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-29"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a2.1MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1arust"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn count_asterisks(s: String) -> i32 {\n        let list = s.split('|').collect::<Vec<_>>();\n        let mut ans = 0;\n        for i in 0..list.len() {\n            if i % 2 == 0 {\n                for c in list[i].chars() {\n                    if c == '*' {\n                        ans += 1\n                    }\n                }\n            }\n        }\n        ans\n    }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-4---typescript",children:"\u9898\u89e3 4 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-01-29"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a68ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43.9MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function countAsterisks(s: string): number {\n        return s.split('|').filter((_, i) => i % 2 === 0).reduce((sum, cur) => sum + cur.split('').filter(v => v === '*').length, 0)\n    };\n"})})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>c});var i=s(30758);const t={},l=i.createContext(t);function r(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);