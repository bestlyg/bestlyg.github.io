"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[82223],{17115:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var r=t(86070),s=t(25710);const c={},i="873.\u6700\u957f\u7684\u6590\u6ce2\u90a3\u5951\u5b50\u5e8f\u5217\u7684\u957f\u5ea6",o={id:"leetcode/801-900/\u6700\u957f\u7684\u6590\u6ce2\u90a3\u5951\u5b50\u5e8f\u5217\u7684\u957f\u5ea6",title:"873.\u6700\u957f\u7684\u6590\u6ce2\u90a3\u5951\u5b50\u5e8f\u5217\u7684\u957f\u5ea6",description:"\u94fe\u63a5\uff1a873.\u6700\u957f\u7684\u6590\u6ce2\u90a3\u5951\u5b50\u5e8f\u5217\u7684\u957f\u5ea6",source:"@site/docs/leetcode/801-900/873.\u6700\u957f\u7684\u6590\u6ce2\u90a3\u5951\u5b50\u5e8f\u5217\u7684\u957f\u5ea6.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u6700\u957f\u7684\u6590\u6ce2\u90a3\u5951\u5b50\u5e8f\u5217\u7684\u957f\u5ea6",permalink:"/web/site/docs/leetcode/801-900/\u6700\u957f\u7684\u6590\u6ce2\u90a3\u5951\u5b50\u5e8f\u5217\u7684\u957f\u5ea6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:873,frontMatter:{},sidebar:"journal",previous:{title:"870.\u4f18\u52bf\u6d17\u724c",permalink:"/web/site/docs/leetcode/801-900/\u4f18\u52bf\u6d17\u724c"},next:{title:"874.\u6a21\u62df\u884c\u8d70\u673a\u5668\u4eba",permalink:"/web/site/docs/leetcode/801-900/\u6a21\u62df\u884c\u8d70\u673a\u5668\u4eba"}},l={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"873\u6700\u957f\u7684\u6590\u6ce2\u90a3\u5951\u5b50\u5e8f\u5217\u7684\u957f\u5ea6",children:"873.\u6700\u957f\u7684\u6590\u6ce2\u90a3\u5951\u5b50\u5e8f\u5217\u7684\u957f\u5ea6"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/length-of-longest-fibonacci-subsequence",children:"873.\u6700\u957f\u7684\u6590\u6ce2\u90a3\u5951\u5b50\u5e8f\u5217\u7684\u957f\u5ea6"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u52a8\u6001\u89c4\u5212",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u4e25\u683c\u9012\u589e\u7684\u6b63\u6574\u6570\u6570\u7ec4\u5f62\u6210\u5e8f\u5217 arr \uff0c\u627e\u5230 arr \u4e2d\u6700\u957f\u7684\u6590\u6ce2\u90a3\u5951\u5f0f\u7684\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\u3002\u5982\u679c\u4e00\u4e2a\u4e0d\u5b58\u5728\uff0c\u8fd4\u56de 0 \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-07-11"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a480ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a11.6MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u54c8\u5e0c\u5b58\u50a8\u540e\u904d\u5386\u6bcf\u6761\u6700\u957f\u94fe\u8def\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int lenLongestFibSubseq(vector<int> &arr) {\n        unordered_set<int> s;\n        for (auto &num : arr) s.insert(num);\n        int ans = 0;\n        for (int i = 0; i < arr.size(); i++) {\n            for (int j = 0; j < i; j++) {\n                ans = max(ans, check(s, arr[j], arr[i]) + 2);\n            }\n        }\n        return ans < 3 ? 0 : ans;\n    }\n    int check(unordered_set<int> &s, int num1, int num2) {\n        if (s.count(num1 + num2)) return 1 + check(s, num2, num1 + num2);\n        return 0;\n    }\n};\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(30758);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);