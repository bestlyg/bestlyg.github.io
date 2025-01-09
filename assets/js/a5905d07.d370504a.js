"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[71262],{45803:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>o,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"\u6570\u636e\u7ed3\u6784/\u6811/\u6811","title":"\u6811(Tree)","description":"\u6811\u5f62\u7ed3\u6784\uff0c\u73b0\u5b9e\u4e16\u754c\u7684\u6811\u662f\u6839\u5728\u5e95\u90e8\uff0c\u5f80\u4e0a\u751f\u957f\uff0c\u7a0b\u5e8f\u8bed\u8a00\u4e2d\u7684\u6811\u662f\u6839\u5728\u9876\u90e8\uff0c\u5f80\u4e0b\u751f\u957f\u3002","source":"@site/docs/\u6570\u636e\u7ed3\u6784/\u6811/\u6811.mdx","sourceDirName":"\u6570\u636e\u7ed3\u6784/\u6811","slug":"/\u6570\u636e\u7ed3\u6784/\u6811/","permalink":"/docs/\u6570\u636e\u7ed3\u6784/\u6811/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"journal","previous":{"title":"\u6808(Stack)","permalink":"/docs/\u6570\u636e\u7ed3\u6784/\u6808/"},"next":{"title":"AVL \u6811(AVLTree)","permalink":"/docs/\u6570\u636e\u7ed3\u6784/\u6811/AVL\u6811"}}');var r=l(25105),d=l(8556);const t={},s="\u6811(Tree)",h={},c=[{value:"\u5ea6(degree)",id:"\u5ea6degree",level:2},{value:"\u8282\u70b9\u7684\u5ea6",id:"\u8282\u70b9\u7684\u5ea6",level:3},{value:"\u6811\u7684\u5ea6",id:"\u6811\u7684\u5ea6",level:3},{value:"\u53f6\u5b50\u8282\u70b9(leaf)",id:"\u53f6\u5b50\u8282\u70b9leaf",level:2},{value:"\u5c42\u6570(level)",id:"\u5c42\u6570level",level:2},{value:"\u8282\u70b9\u7684\u6df1\u5ea6(depth)",id:"\u8282\u70b9\u7684\u6df1\u5ea6depth",level:2},{value:"\u8282\u70b9\u7684\u997f\u9ad8\u5ea6(height)",id:"\u8282\u70b9\u7684\u997f\u9ad8\u5ea6height",level:2},{value:"\u6811\u7684\u6df1\u5ea6",id:"\u6811\u7684\u6df1\u5ea6",level:2},{value:"\u6811\u7684\u9ad8\u5ea6",id:"\u6811\u7684\u9ad8\u5ea6",level:2},{value:"\u6709\u5e8f\u6811",id:"\u6709\u5e8f\u6811",level:2},{value:"\u65e0\u5e8f\u6811",id:"\u65e0\u5e8f\u6811",level:2},{value:"\u68ee\u6797",id:"\u68ee\u6797",level:2}];function a(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u6811tree",children:"\u6811(Tree)"})}),"\n",(0,r.jsx)(n.p,{children:"\u6811\u5f62\u7ed3\u6784\uff0c\u73b0\u5b9e\u4e16\u754c\u7684\u6811\u662f\u6839\u5728\u5e95\u90e8\uff0c\u5f80\u4e0a\u751f\u957f\uff0c\u7a0b\u5e8f\u8bed\u8a00\u4e2d\u7684\u6811\u662f\u6839\u5728\u9876\u90e8\uff0c\u5f80\u4e0b\u751f\u957f\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5ea6degree",children:"\u5ea6(degree)"}),"\n",(0,r.jsx)(n.h3,{id:"\u8282\u70b9\u7684\u5ea6",children:"\u8282\u70b9\u7684\u5ea6"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5b50\u6811\u7684\u4e2a\u6570"}),"\n",(0,r.jsx)(n.li,{children:"\u6709\u591a\u5c11\u4e2a\u5b50\u6811\u79f0\u8be5\u8282\u70b9\u6709\u591a\u5c11\u5ea6"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6811\u7684\u5ea6",children:"\u6811\u7684\u5ea6"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6240\u6709\u8282\u70b9\u4e2d\u5ea6\u7684\u6700\u5927\u503c"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u53f6\u5b50\u8282\u70b9leaf",children:"\u53f6\u5b50\u8282\u70b9(leaf)"}),"\n",(0,r.jsx)(n.p,{children:"\u5ea6\u4e3a 0 \u7684\u8282\u70b9"}),"\n",(0,r.jsx)(n.h2,{id:"\u5c42\u6570level",children:"\u5c42\u6570(level)"}),"\n",(0,r.jsx)(n.p,{children:"\u6839\u8282\u70b9\u5728\u7b2c 1 \u5c42(\u4e5f\u6709\u8bf4\u7b2c 0 \u5c42)"}),"\n",(0,r.jsx)(n.h2,{id:"\u8282\u70b9\u7684\u6df1\u5ea6depth",children:"\u8282\u70b9\u7684\u6df1\u5ea6(depth)"}),"\n",(0,r.jsx)(n.p,{children:"\u4ece\u5f53\u524d\u8282\u70b9\u5230\u6839\u8282\u70b9\u7684\u8def\u5f84\u4e0a\u7684\u8282\u70b9\u603b\u6570"}),"\n",(0,r.jsx)(n.h2,{id:"\u8282\u70b9\u7684\u997f\u9ad8\u5ea6height",children:"\u8282\u70b9\u7684\u997f\u9ad8\u5ea6(height)"}),"\n",(0,r.jsx)(n.p,{children:"\u4ece\u5f53\u524d\u8282\u70b9\u5230\u6700\u8fdc\u7684\u53f6\u5b50\u8282\u70b9\u7684\u8def\u5f84\u4e0a\u7684\u8282\u70b9\u603b\u6570"}),"\n",(0,r.jsx)(n.h2,{id:"\u6811\u7684\u6df1\u5ea6",children:"\u6811\u7684\u6df1\u5ea6"}),"\n",(0,r.jsx)(n.p,{children:"\u6240\u6709\u8282\u70b9\u6df1\u5ea6\u4e2d\u7684\u6700\u5927\u503c"}),"\n",(0,r.jsx)(n.h2,{id:"\u6811\u7684\u9ad8\u5ea6",children:"\u6811\u7684\u9ad8\u5ea6"}),"\n",(0,r.jsx)(n.p,{children:"\u6240\u6709\u8282\u70b9\u9ad8\u5ea6\u4e2d\u7684\u6700\u5927\u503c"}),"\n",(0,r.jsx)(n.h2,{id:"\u6709\u5e8f\u6811",children:"\u6709\u5e8f\u6811"}),"\n",(0,r.jsx)(n.p,{children:"\u6811\u4e2d\u4efb\u610f\u8282\u70b9\u7684\u5b50\u8282\u70b9\u4e4b\u95f4\u6709\u987a\u5e8f\u5173\u7cfb"}),"\n",(0,r.jsx)(n.h2,{id:"\u65e0\u5e8f\u6811",children:"\u65e0\u5e8f\u6811"}),"\n",(0,r.jsx)(n.p,{children:'\u6811\u4e2d\u4efb\u610f\u8282\u70b9\u4e4b\u95f4\u6ca1\u6709\u987a\u5e8f\u5173\u7cfb\uff0c\u4e5f\u79f0"\u81ea\u7531\u6811"'}),"\n",(0,r.jsx)(n.h2,{id:"\u68ee\u6797",children:"\u68ee\u6797"}),"\n",(0,r.jsx)(n.p,{children:"\u7531 m(m>=0)\u8bfe\u4e92\u4e0d\u76f8\u4ea4\u7684\u6811\u7ec4\u6210"})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8556:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>s});var i=l(58101);const r={},d=i.createContext(r);function t(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);