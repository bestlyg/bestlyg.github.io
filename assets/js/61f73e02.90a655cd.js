"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[56427],{16218:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var s=t(86070),c=t(25710);const r={},o="2456.\u6700\u6d41\u884c\u7684\u89c6\u9891\u521b\u4f5c\u8005",l={id:"leetcode/2401-2500/\u6700\u6d41\u884c\u7684\u89c6\u9891\u521b\u4f5c\u8005",title:"2456.\u6700\u6d41\u884c\u7684\u89c6\u9891\u521b\u4f5c\u8005",description:"\u94fe\u63a5\uff1a2456.\u6700\u6d41\u884c\u7684\u89c6\u9891\u521b\u4f5c\u8005",source:"@site/docs/leetcode/2401-2500/2456.\u6700\u6d41\u884c\u7684\u89c6\u9891\u521b\u4f5c\u8005.md",sourceDirName:"leetcode/2401-2500",slug:"/leetcode/2401-2500/\u6700\u6d41\u884c\u7684\u89c6\u9891\u521b\u4f5c\u8005",permalink:"/docs/leetcode/2401-2500/\u6700\u6d41\u884c\u7684\u89c6\u9891\u521b\u4f5c\u8005",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2456,frontMatter:{},sidebar:"journal",previous:{title:"2455.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u5076\u6570\u7684\u5e73\u5747\u503c",permalink:"/docs/leetcode/2401-2500/\u53ef\u88ab\u4e09\u6574\u9664\u7684\u5076\u6570\u7684\u5e73\u5747\u503c"},next:{title:"2457.\u7f8e\u4e3d\u6574\u6570\u7684\u6700\u5c0f\u589e\u91cf",permalink:"/docs/leetcode/2401-2500/\u7f8e\u4e3d\u6574\u6570\u7684\u6700\u5c0f\u589e\u91cf"}},i={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"2456\u6700\u6d41\u884c\u7684\u89c6\u9891\u521b\u4f5c\u8005",children:"2456.\u6700\u6d41\u884c\u7684\u89c6\u9891\u521b\u4f5c\u8005"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/most-popular-video-creator",children:"2456.\u6700\u6d41\u884c\u7684\u89c6\u9891\u521b\u4f5c\u8005"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u7b26\u4e32\u3001\u6392\u5e8f\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u7531\u6b63\u6574\u6570\u7ec4\u6210\u7684\u6574\u6570\u6570\u7ec4 nums \uff0c\u8fd4\u56de\u5176\u4e2d\u53ef\u88ab 3 \u6574\u9664\u7684\u6240\u6709\u5076\u6570\u7684\u5e73\u5747\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-30"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a13.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int averageValue(vector<int>& nums) {\n        int sum = 0, cnt = 0;\n        for (auto &num : nums) {\n            if (num % 3 == 0 && num % 2 == 0) {\n                sum += num;\n                cnt += 1;\n            }\n        }\n        return cnt == 0 ? 0 : sum / cnt;\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(30758);const c={},r=s.createContext(c);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);