"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[32628],{74240:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var s=t(86070),c=t(25710);const r={},l="481.\u795e\u5947\u5b57\u7b26\u4e32",i={id:"leetcode/401-500/\u795e\u5947\u5b57\u7b26\u4e32",title:"481.\u795e\u5947\u5b57\u7b26\u4e32",description:"\u94fe\u63a5\uff1a481.\u795e\u5947\u5b57\u7b26\u4e32",source:"@site/docs/leetcode/401-500/481.\u795e\u5947\u5b57\u7b26\u4e32.md",sourceDirName:"leetcode/401-500",slug:"/leetcode/401-500/\u795e\u5947\u5b57\u7b26\u4e32",permalink:"/docs/leetcode/401-500/\u795e\u5947\u5b57\u7b26\u4e32",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:481,frontMatter:{},sidebar:"journal",previous:{title:"480.\u6ed1\u52a8\u7a97\u53e3\u4e2d\u4f4d\u6570",permalink:"/docs/leetcode/401-500/\u6ed1\u52a8\u7a97\u53e3\u4e2d\u4f4d\u6570"},next:{title:"482.\u5bc6\u94a5\u683c\u5f0f\u5316",permalink:"/docs/leetcode/401-500/\u5bc6\u94a5\u683c\u5f0f\u5316"}},o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"481\u795e\u5947\u5b57\u7b26\u4e32",children:"481.\u795e\u5947\u5b57\u7b26\u4e32"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/magical-string",children:"481.\u795e\u5947\u5b57\u7b26\u4e32"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u53cc\u6307\u9488\u3001\u5b57\u7b26\u4e32",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570 n \uff0c\u8fd4\u56de\u5728\u795e\u5947\u5b57\u7b26\u4e32 s \u7684\u524d n \u4e2a\u6570\u5b57\u4e2d 1 \u7684\u6570\u76ee\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-31"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a8.5MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u8bb0\u5f55\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int magicalString(int n) {\n        vector<int> list(max(3, n));\n        list[0] = 1; list[1] = list[2] = 2;\n        int ans = 1, i1 = 2, i2 = 3, surplus = 2, curVal = 1, curMode = 1;\n        while (i2 < n) {\n            if (surplus == 0) {\n                surplus = list[++i1];\n                curVal += curMode;\n                curMode = -curMode;\n            }\n            list[i2++] = curVal;\n            surplus--;\n            if (curVal == 1) ans++;\n        }\n        return ans;\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(30758);const c={},r=s.createContext(c);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);