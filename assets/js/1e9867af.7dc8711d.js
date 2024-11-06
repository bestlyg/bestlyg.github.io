"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[3486],{44320:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(86070),i=t(31503);const r={},c="1446.\u8fde\u7eed\u5b57\u7b26",l={id:"leetcode/1401-1500/\u8fde\u7eed\u5b57\u7b26",title:"1446.\u8fde\u7eed\u5b57\u7b26",description:"\u94fe\u63a5\uff1a1446.\u8fde\u7eed\u5b57\u7b26",source:"@site/docs/leetcode/1401-1500/1446.\u8fde\u7eed\u5b57\u7b26.md",sourceDirName:"leetcode/1401-1500",slug:"/leetcode/1401-1500/\u8fde\u7eed\u5b57\u7b26",permalink:"/docs/leetcode/1401-1500/\u8fde\u7eed\u5b57\u7b26",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1446,frontMatter:{},sidebar:"journal",previous:{title:"1444.\u5207\u62ab\u8428\u7684\u65b9\u6848\u6570",permalink:"/docs/leetcode/1401-1500/\u5207\u62ab\u8428\u7684\u65b9\u6848\u6570"},next:{title:"1447.\u6700\u7b80\u5206\u6570",permalink:"/docs/leetcode/1401-1500/\u6700\u7b80\u5206\u6570"}},o={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1446\u8fde\u7eed\u5b57\u7b26",children:"1446.\u8fde\u7eed\u5b57\u7b26"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/consecutive-characters",children:"1446.\u8fde\u7eed\u5b57\u7b26"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u5b57\u7b26\u4e32",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 s \uff0c\u5b57\u7b26\u4e32\u7684\u300c\u80fd\u91cf\u300d\u5b9a\u4e49\u4e3a\uff1a\u53ea\u5305\u542b\u4e00\u79cd\u5b57\u7b26\u7684\u6700\u957f\u975e\u7a7a\u5b50\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-01"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a88ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a39.9MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function maxPower(s: string): number {\n  let ans = 0;\n  for (let i = 0, n = s.length; i < n; i++) {\n    let cnt = 1;\n    const ch = s[i];\n    while (i + 1 < n && s[i + 1] === ch) {\n      i++;\n      cnt++;\n    }\n    ans = Math.max(ans, cnt);\n  }\n  return ans;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-01"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a5.9MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"int maxPower(char * s){\n    int ans = 0;\n    for (int i = 0; i < strlen(s); i++) {\n        int cnt = 1;\n        char ch = s[i];\n        while (i + 1 < strlen(s) && s[i + 1] == ch) {\n            i++;\n            cnt++;\n        }\n        if (cnt > ans) ans = cnt;\n    }\n    return ans;\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var s=t(30758);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);