"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[68303],{92190:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var s=t(86070),i=t(25710);const c={},r="717.1\u6bd4\u7279\u4e0e2\u6bd4\u7279\u5b57\u7b26",l={id:"leetcode/701-800/717.1\u6bd4\u7279\u4e0e2\u6bd4\u7279\u5b57\u7b26",title:"717.1\u6bd4\u7279\u4e0e2\u6bd4\u7279\u5b57\u7b26",description:"\u94fe\u63a5\uff1a717.1\u6bd4\u7279\u4e0e2\u6bd4\u7279\u5b57\u7b26",source:"@site/docs/leetcode/701-800/717.1\u6bd4\u7279\u4e0e2\u6bd4\u7279\u5b57\u7b26.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/717.1\u6bd4\u7279\u4e0e2\u6bd4\u7279\u5b57\u7b26",permalink:"/web/site/docs/leetcode/701-800/717.1\u6bd4\u7279\u4e0e2\u6bd4\u7279\u5b57\u7b26",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"799.\u9999\u69df\u5854",permalink:"/web/site/docs/leetcode/701-800/\u9999\u69df\u5854"},next:{title:"801.\u4f7f\u5e8f\u5217\u9012\u589e\u7684\u6700\u5c0f\u4ea4\u6362\u6b21\u6570",permalink:"/web/site/docs/leetcode/801-900/\u4f7f\u5e8f\u5217\u9012\u589e\u7684\u6700\u5c0f\u4ea4\u6362\u6b21\u6570"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"7171\u6bd4\u7279\u4e0e2\u6bd4\u7279\u5b57\u7b26",children:"717.1\u6bd4\u7279\u4e0e2\u6bd4\u7279\u5b57\u7b26"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/1-bit-and-2-bit-characters",children:"717.1\u6bd4\u7279\u4e0e2\u6bd4\u7279\u5b57\u7b26"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u4ee5 0 \u7ed3\u5c3e\u7684\u4e8c\u8fdb\u5236\u6570\u7ec4 bits \uff0c\u5982\u679c\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u5fc5\u987b\u662f\u4e00\u4f4d\u5b57\u7b26\uff0c\u5219\u8fd4\u56de true \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-02-20"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a9.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\uff0c \u5224\u65ad\u6700\u540e\u7684\u4e0b\u6807\u662f\u5426\u7b49\u4e8e\u672b\u5c3e\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    bool isOneBitCharacter(vector<int>& bits) {\n        int idx = 0;\n        while (idx < bits.size() - 1) {\n            if (bits[idx] == 0)\n                idx += 1;\n            else\n                idx += 2;\n        }\n        return idx == bits.size() - 1;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(30758);const i={},c=s.createContext(i);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);