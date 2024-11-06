"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[53368],{83479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var s=n(86070),r=n(31503);const c={},o="973.\u6700\u63a5\u8fd1\u539f\u70b9\u7684K\u4e2a\u70b9",i={id:"leetcode/901-1000/\u6700\u63a5\u8fd1\u539f\u70b9\u7684K\u4e2a\u70b9",title:"973.\u6700\u63a5\u8fd1\u539f\u70b9\u7684K\u4e2a\u70b9",description:"\u94fe\u63a5\uff1a973.\u6700\u63a5\u8fd1\u539f\u70b9\u7684K\u4e2a\u70b9",source:"@site/docs/leetcode/901-1000/973.\u6700\u63a5\u8fd1\u539f\u70b9\u7684K\u4e2a\u70b9.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u6700\u63a5\u8fd1\u539f\u70b9\u7684K\u4e2a\u70b9",permalink:"/docs/leetcode/901-1000/\u6700\u63a5\u8fd1\u539f\u70b9\u7684K\u4e2a\u70b9",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:973,frontMatter:{},sidebar:"journal",previous:{title:"971.\u7ffb\u8f6c\u4e8c\u53c9\u6811\u4ee5\u5339\u914d\u5148\u5e8f\u904d\u5386",permalink:"/docs/leetcode/901-1000/\u7ffb\u8f6c\u4e8c\u53c9\u6811\u4ee5\u5339\u914d\u5148\u5e8f\u904d\u5386"},next:{title:"974.\u548c\u53ef\u88abK\u6574\u9664\u7684\u5b50\u6570\u7ec4",permalink:"/docs/leetcode/901-1000/\u548c\u53ef\u88abK\u6574\u9664\u7684\u5b50\u6570\u7ec4"}},l={},d=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"973\u6700\u63a5\u8fd1\u539f\u70b9\u7684k\u4e2a\u70b9",children:"973.\u6700\u63a5\u8fd1\u539f\u70b9\u7684K\u4e2a\u70b9"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(t.a,{href:"https://leetcode.cn/problems/k-closest-points-to-origin",children:"973.\u6700\u63a5\u8fd1\u539f\u70b9\u7684K\u4e2a\u70b9"}),(0,s.jsx)(t.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(t.br,{}),"\n","\u6807\u7b7e\uff1a\u51e0\u4f55\u3001\u6570\u7ec4\u3001\u6570\u5b66\u3001\u5206\u6cbb\u3001\u5feb\u901f\u9009\u62e9\u3001\u6392\u5e8f\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,s.jsx)(t.br,{}),"\n","\u7b80\u4ecb\uff1a","\u6211\u4eec\u6709\u4e00\u4e2a\u7531\u5e73\u9762\u4e0a\u7684\u70b9\u7ec4\u6210\u7684\u5217\u8868 points\u3002\u9700\u8981\u4ece\u4e2d\u627e\u51fa K \u4e2a\u8ddd\u79bb\u539f\u70b9 (0, 0) \u6700\u8fd1\u7684\u70b9\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-11-09"}),"\n",(0,s.jsx)(t.li,{children:"\u6267\u884c\u7528\u65f6\uff1a280ms"}),"\n",(0,s.jsx)(t.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a51.1MB"}),"\n",(0,s.jsx)(t.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(t.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u8ba1\u7b97\u8ddd\u79bb\u540e\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"function kClosest(points: number[][], K: number): number[][] {\n  return points\n    .sort(([x1, y1], [x2, y2]) => Math.sqrt(x1 ** 2 + y1 ** 2) - Math.sqrt(x2 ** 2 + y2 ** 2))\n    .slice(0, K);\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},31503:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(30758);const r={},c=s.createContext(r);function o(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);