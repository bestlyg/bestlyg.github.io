"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[24129],{82760:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=t(86070),r=t(25710);const s={},l="1823.\u627e\u51fa\u6e38\u620f\u7684\u83b7\u80dc\u8005",c={id:"leetcode/1801-1900/\u627e\u51fa\u6e38\u620f\u7684\u83b7\u80dc\u8005",title:"1823.\u627e\u51fa\u6e38\u620f\u7684\u83b7\u80dc\u8005",description:"\u94fe\u63a5\uff1a1823.\u627e\u51fa\u6e38\u620f\u7684\u83b7\u80dc\u8005",source:"@site/docs/leetcode/1801-1900/1823.\u627e\u51fa\u6e38\u620f\u7684\u83b7\u80dc\u8005.md",sourceDirName:"leetcode/1801-1900",slug:"/leetcode/1801-1900/\u627e\u51fa\u6e38\u620f\u7684\u83b7\u80dc\u8005",permalink:"/docs/leetcode/1801-1900/\u627e\u51fa\u6e38\u620f\u7684\u83b7\u80dc\u8005",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1823,frontMatter:{},sidebar:"journal",previous:{title:"1822.\u6570\u7ec4\u5143\u7d20\u79ef\u7684\u7b26\u53f7",permalink:"/docs/leetcode/1801-1900/\u6570\u7ec4\u5143\u7d20\u79ef\u7684\u7b26\u53f7"},next:{title:"1824.\u6700\u5c11\u4fa7\u8df3\u6b21\u6570",permalink:"/docs/leetcode/1801-1900/\u6700\u5c11\u4fa7\u8df3\u6b21\u6570"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - go",id:"\u9898\u89e3-2---go",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"1823\u627e\u51fa\u6e38\u620f\u7684\u83b7\u80dc\u8005",children:"1823.\u627e\u51fa\u6e38\u620f\u7684\u83b7\u80dc\u8005"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/find-the-winner-of-the-circular-game",children:"1823.\u627e\u51fa\u6e38\u620f\u7684\u83b7\u80dc\u8005"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u9012\u5f52\u3001\u961f\u5217\u3001\u6570\u7ec4\u3001\u6570\u5b66\u3001\u6a21\u62df",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u53c2\u4e0e\u6e38\u620f\u7684\u5c0f\u4f19\u4f34\u603b\u6570 n \uff0c\u548c\u4e00\u4e2a\u6574\u6570 k \uff0c\u8fd4\u56de\u6e38\u620f\u7684\u83b7\u80dc\u8005\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-04"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.4MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"int findTheWinner(int n, int k) {\n    int list[n], current = n - 1;\n    for (int i = 0; i < n; i++) list[i] = i + 1;\n    list[n - 1] = 0;\n    for (int jump = 0; n > 1; n--) {\n        jump = (k - 1) % n;\n        while (jump > 0) current = list[current], jump--;\n        list[current] = list[list[current]];\n    }\n    return current + 1;\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---go",children:"\u9898\u89e3 2 - go"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-05-04"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a0ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a1.9MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ago"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func findTheWinner(n int, k int) int {\n    list := make([]int, n)\n    for i := 0; i < n; i++ {\n        list[i] = i + 1\n    }\n    list[n-1] = 0\n    current := n - 1\n    for jump := 0; n > 1; n-- {\n        jump = (k - 1) % n\n        for ; jump > 0; jump-- {\n            current = list[current]\n        }\n        list[current] = list[list[current]]\n    }\n    return current + 1\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var i=t(30758);const r={},s=i.createContext(r);function l(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);