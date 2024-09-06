"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[75606],{60396:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>r,toc:()=>h});var t=s(86070),i=s(25710);const d={},l="\u94fe\u8868(LinkedList)",r={id:"\u6570\u636e\u7ed3\u6784/\u94fe\u8868/\u94fe\u8868",title:"\u94fe\u8868(LinkedList)",description:"\u94fe\u5f0f\u50a8\u5b58\u7684\u7ebf\u6027\u8868\uff0c\u5143\u7d20\u5728\u5185\u5b58\u4e0a\u7684\u5730\u5740\u4e0d\u662f\u8fde\u7eed\u7684\u3002",source:"@site/docs/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/\u94fe\u8868.mdx",sourceDirName:"\u6570\u636e\u7ed3\u6784/\u94fe\u8868",slug:"/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/",permalink:"/docs/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"\u7ea2\u9ed1\u6811(RedBlackTree)",permalink:"/docs/\u6570\u636e\u7ed3\u6784/\u6811/\u7ea2\u9ed1\u6811"},next:{title:"\u5355\u94fe\u8868(SingleLinkedList)",permalink:"/docs/\u6570\u636e\u7ed3\u6784/\u94fe\u8868/\u5355\u94fe\u8868"}},c={},h=[{value:"\u5e38\u7528\u94fe\u8868",id:"\u5e38\u7528\u94fe\u8868",level:2},{value:"\u590d\u6742\u5ea6",id:"\u590d\u6742\u5ea6",level:2}];function x(n){const e={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"\u94fe\u8868linkedlist",children:"\u94fe\u8868(LinkedList)"})}),"\n",(0,t.jsx)(e.p,{children:"\u94fe\u5f0f\u50a8\u5b58\u7684\u7ebf\u6027\u8868\uff0c\u5143\u7d20\u5728\u5185\u5b58\u4e0a\u7684\u5730\u5740\u4e0d\u662f\u8fde\u7eed\u7684\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u5e38\u7528\u94fe\u8868",children:"\u5e38\u7528\u94fe\u8868"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u5355\u94fe\u8868","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u6bcf\u4e2a\u8282\u70b9\u6307\u5411\u4e0b\u4e00\u4e2a\u8282\u70b9\uff0c\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u6307\u5411 null"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\u5355\u94fe\u8868\uff08\u5e26\u5934\u8282\u70b9\uff09","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7531\u4e8e\u5b58\u5728\u5934\u8282\u70b9\uff0c\u5728\u589e\u5220\u9996\u4e2a\u8282\u70b9\u65f6\u4f1a\u66f4\u7b80\u5316\u4ee3\u7801"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\u53cc\u94fe\u8868","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u6bcf\u4e2a\u8282\u70b9\u5305\u542b\u4e24\u4e2a\u6307\u9488\uff0c\u4e00\u4e2a\u6307\u9488\u6307\u5411\u4e0b\u4e00\u4e2a\u8282\u70b9\uff0c\u4e00\u4e2a\u6307\u9488\u6307\u5411\u524d\u4e00\u4e2a\u8282\u70b9"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\u5faa\u73af\u5355\u94fe\u8868","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5728\u5355\u94fe\u8868\u7684\u57fa\u7840\u4e0a\uff0c\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u7684\u4e0b\u4e00\u4e2a\u8282\u70b9\u6307\u5411\u5934\u8282\u70b9"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\u5faa\u73af\u53cc\u94fe\u8868","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5728\u53cc\u94fe\u8868\u7684\u57fa\u7840\u4e0a\uff0c\u5934\u8282\u70b9\u7684\u524d\u4e00\u4e2a\u8282\u70b9\u6307\u5411\u5c3e\u8282\u70b9\uff0c\u5c3e\u8282\u70b9\u7684\u4e0b\u4e00\u4e2a\u8282\u70b9\u6307\u5411\u5934\u8282\u70b9"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u590d\u6742\u5ea6",children:"\u590d\u6742\u5ea6"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u64cd\u4f5c\u7c7b\u578b"}),(0,t.jsx)(e.th,{children:"\u6700\u597d"}),(0,t.jsx)(e.th,{children:"\u6700\u574f"}),(0,t.jsx)(e.th,{children:"\u5e73\u5747"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u589e\u52a0"}),(0,t.jsx)(e.td,{children:"O(1)"}),(0,t.jsx)(e.td,{children:"O(n)"}),(0,t.jsx)(e.td,{children:"O(n)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u5220\u9664"}),(0,t.jsx)(e.td,{children:"O(1)"}),(0,t.jsx)(e.td,{children:"O(n)"}),(0,t.jsx)(e.td,{children:"O(n)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u4fee\u6539"}),(0,t.jsx)(e.td,{children:"O(1)"}),(0,t.jsx)(e.td,{children:"O(n)"}),(0,t.jsx)(e.td,{children:"O(n)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u67e5\u627e"}),(0,t.jsx)(e.td,{children:"O(1)"}),(0,t.jsx)(e.td,{children:"O(n)"}),(0,t.jsx)(e.td,{children:"O(n)"})]})]})]})]})}function j(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(x,{...n})}):x(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>r});var t=s(30758);const i={},d=t.createContext(i);function l(n){const e=t.useContext(d);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);