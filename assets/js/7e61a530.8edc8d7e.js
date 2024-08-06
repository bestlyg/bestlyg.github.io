"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[11084],{4440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var c=t(86070),s=t(25710);const o={},r="1672.\u6700\u5bcc\u6709\u5ba2\u6237\u7684\u8d44\u4ea7\u603b\u91cf",l={id:"leetcode/1601-1700/\u6700\u5bcc\u6709\u5ba2\u6237\u7684\u8d44\u4ea7\u603b\u91cf",title:"1672.\u6700\u5bcc\u6709\u5ba2\u6237\u7684\u8d44\u4ea7\u603b\u91cf",description:"\u94fe\u63a5\uff1a1672.\u6700\u5bcc\u6709\u5ba2\u6237\u7684\u8d44\u4ea7\u603b\u91cf",source:"@site/docs/leetcode/1601-1700/1672.\u6700\u5bcc\u6709\u5ba2\u6237\u7684\u8d44\u4ea7\u603b\u91cf.md",sourceDirName:"leetcode/1601-1700",slug:"/leetcode/1601-1700/\u6700\u5bcc\u6709\u5ba2\u6237\u7684\u8d44\u4ea7\u603b\u91cf",permalink:"/docs/leetcode/1601-1700/\u6700\u5bcc\u6709\u5ba2\u6237\u7684\u8d44\u4ea7\u603b\u91cf",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1672,frontMatter:{},sidebar:"journal",previous:{title:"1671.\u5f97\u5230\u5c71\u5f62\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6b21\u6570",permalink:"/docs/leetcode/1601-1700/\u5f97\u5230\u5c71\u5f62\u6570\u7ec4\u7684\u6700\u5c11\u5220\u9664\u6b21\u6570"},next:{title:"1673.\u627e\u51fa\u6700\u5177\u7ade\u4e89\u529b\u7684\u5b50\u5e8f\u5217",permalink:"/docs/leetcode/1601-1700/\u627e\u51fa\u6700\u5177\u7ade\u4e89\u529b\u7684\u5b50\u5e8f\u5217"}},i={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"1672\u6700\u5bcc\u6709\u5ba2\u6237\u7684\u8d44\u4ea7\u603b\u91cf",children:"1672.\u6700\u5bcc\u6709\u5ba2\u6237\u7684\u8d44\u4ea7\u603b\u91cf"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,c.jsx)(n.a,{href:"https://leetcode.cn/problems/richest-customer-wealth",children:"1672.\u6700\u5bcc\u6709\u5ba2\u6237\u7684\u8d44\u4ea7\u603b\u91cf"}),(0,c.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,c.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u77e9\u9635",(0,c.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5ba2\u6237\u7684 \u8d44\u4ea7\u603b\u91cf \u5c31\u662f\u4ed6\u4eec\u5728\u5404\u5bb6\u94f6\u884c\u6258\u7ba1\u7684\u8d44\u4ea7\u6570\u91cf\u4e4b\u548c\u3002\u6700\u5bcc\u6709\u5ba2\u6237\u5c31\u662f \u8d44\u4ea7\u603b\u91cf \u6700\u5927\u7684\u5ba2\u6237\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-04-14"}),"\n",(0,c.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,c.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.5MB"}),"\n",(0,c.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,c.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int maximumWealth(vector<vector<int>> &accounts) {\n        int ans = -1;\n        ;\n        for (auto &account : accounts) {\n            int sum = 0;\n            for (auto &data : account) sum += data;\n            ans = max(ans, sum);\n        }\n        return ans;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var c=t(30758);const s={},o=c.createContext(s);function r(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);