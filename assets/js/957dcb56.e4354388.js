"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[21170],{61958:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var i=r(86070),s=r(25710);const l={},t="278.\u7b2c\u4e00\u4e2a\u9519\u8bef\u7684\u7248\u672c",c={id:"leetcode/201-300/\u7b2c\u4e00\u4e2a\u9519\u8bef\u7684\u7248\u672c",title:"278.\u7b2c\u4e00\u4e2a\u9519\u8bef\u7684\u7248\u672c",description:"\u94fe\u63a5\uff1a278.\u7b2c\u4e00\u4e2a\u9519\u8bef\u7684\u7248\u672c",source:"@site/docs/leetcode/201-300/278.\u7b2c\u4e00\u4e2a\u9519\u8bef\u7684\u7248\u672c.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u7b2c\u4e00\u4e2a\u9519\u8bef\u7684\u7248\u672c",permalink:"/docs/leetcode/201-300/\u7b2c\u4e00\u4e2a\u9519\u8bef\u7684\u7248\u672c",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:278,frontMatter:{},sidebar:"journal",previous:{title:"275.H\u6307\u6570II",permalink:"/docs/leetcode/201-300/H\u6307\u6570II"},next:{title:"279.\u5b8c\u5168\u5e73\u65b9\u6570",permalink:"/docs/leetcode/201-300/\u5b8c\u5168\u5e73\u65b9\u6570"}},d={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - c",id:"\u9898\u89e3-2---c",level:2},{value:"\u9898\u89e3 3 - cpp",id:"\u9898\u89e3-3---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"278\u7b2c\u4e00\u4e2a\u9519\u8bef\u7684\u7248\u672c",children:"278.\u7b2c\u4e00\u4e2a\u9519\u8bef\u7684\u7248\u672c"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/first-bad-version",children:"278.\u7b2c\u4e00\u4e2a\u9519\u8bef\u7684\u7248\u672c"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u4e8c\u5206\u67e5\u627e\u3001\u4ea4\u4e92",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5b9e\u73b0\u4e00\u4e2a\u51fd\u6570\u6765\u67e5\u627e\u7b2c\u4e00\u4e2a\u9519\u8bef\u7684\u7248\u672c\u3002\u4f60\u5e94\u8be5\u5c3d\u91cf\u51cf\u5c11\u5bf9\u8c03\u7528 API \u7684\u6b21\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-06-14"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a84ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.2MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u641c\u7d22\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function solution(isBadVersion: (version: number) => boolean): (n: number) => number {\n  return (n: number): number => {\n    const find = (start = 1, end = n): number => {\n      if (start === end) return start;\n      const mid = ~~((start + end) / 2);\n      if (!isBadVersion(mid)) return find(mid + 1, end);\n      else if (mid === 1 || !isBadVersion(mid - 1)) return mid;\n      else return find(start, mid);\n    };\n    return find();\n  };\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---c",children:"\u9898\u89e3 2 - c"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-28"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.5MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:"int firstBadVersion(int n) {\n    long l = 1, r = 2147483647, m;\n    while (l < r) {\n        m = (r + l) / 2;\n        // \u6bcf\u6b21\u4e2d\u95f4\u503c\u662f\u9519\u8bef\u7248\u672c\uff0c\u5c31\u53f3\u4fa7\u503c\u5de6\u79fb\u5f53\u4e2d\u95f4\u503c\n        if (isBadVersion(m)) r = m;\n        // \u5426\u5219\u5c31\u5de6\u4fa7\u70b9\u662f\u6210\u529f\u7248\u672c\uff0c\u627e\u4e2d\u95f4\u503c\u7684\u540e\u4e00\u4e2a\n        else l = m + 1;\n    }\n    return l;\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-3---cpp",children:"\u9898\u89e3 3 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-20"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.9MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u4e8c\u5206\u67e5\u627e\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int firstBadVersion(int n) {\n        long long l = 0, r = 0x7fffffff, m;\n        while (l < r) {\n            m = (r + l) / 2;\n            if (isBadVersion(m))\n                r = m;\n            else\n                l = m + 1;\n        }\n        return l;\n    }\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},25710:(n,e,r)=>{r.d(e,{R:()=>t,x:()=>c});var i=r(30758);const s={},l=i.createContext(s);function t(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);