"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[40207],{75936:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var s=t(86070),c=t(25710);const r={},o="1710.\u5361\u8f66\u4e0a\u7684\u6700\u5927\u5355\u5143\u6570",i={id:"leetcode/1701-1800/\u5361\u8f66\u4e0a\u7684\u6700\u5927\u5355\u5143\u6570",title:"1710.\u5361\u8f66\u4e0a\u7684\u6700\u5927\u5355\u5143\u6570",description:"\u94fe\u63a5\uff1a1710.\u5361\u8f66\u4e0a\u7684\u6700\u5927\u5355\u5143\u6570",source:"@site/docs/leetcode/1701-1800/1710.\u5361\u8f66\u4e0a\u7684\u6700\u5927\u5355\u5143\u6570.md",sourceDirName:"leetcode/1701-1800",slug:"/leetcode/1701-1800/\u5361\u8f66\u4e0a\u7684\u6700\u5927\u5355\u5143\u6570",permalink:"/docs/leetcode/1701-1800/\u5361\u8f66\u4e0a\u7684\u6700\u5927\u5355\u5143\u6570",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1710,frontMatter:{},sidebar:"journal",previous:{title:"1707.\u4e0e\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u6700\u5927\u5f02\u6216\u503c",permalink:"/docs/leetcode/1701-1800/\u4e0e\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u6700\u5927\u5f02\u6216\u503c"},next:{title:"1711.\u5927\u9910\u8ba1\u6570",permalink:"/docs/leetcode/1701-1800/\u5927\u9910\u8ba1\u6570"}},l={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1710\u5361\u8f66\u4e0a\u7684\u6700\u5927\u5355\u5143\u6570",children:"1710.\u5361\u8f66\u4e0a\u7684\u6700\u5927\u5355\u5143\u6570"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/maximum-units-on-a-truck",children:"1710.\u5361\u8f66\u4e0a\u7684\u6700\u5927\u5355\u5143\u6570"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u6392\u5e8f",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u5361\u8f66\u53ef\u4ee5\u88c5\u8f7d \u5355\u5143 \u7684 \u6700\u5927 \u603b\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-11-15"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a44ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.6MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6392\u5e8f\u540e\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maximumUnits(vector<vector<int>>& boxTypes, int truckSize) {\n        sort(boxTypes.begin(), boxTypes.end(), [](auto &a, auto &b){ return a[1] > b[1]; });\n        int ans = 0, cur = 0;\n        while (truckSize && cur < boxTypes.size()) {\n            if (boxTypes[cur][0] >= truckSize) {\n                ans += truckSize * boxTypes[cur][1];\n                truckSize = 0;\n            } else {\n                truckSize -= boxTypes[cur][0];\n                ans += boxTypes[cur][0] * boxTypes[cur][1];\n            }\n            cur++;\n        }\n        return ans;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(30758);const c={},r=s.createContext(c);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);