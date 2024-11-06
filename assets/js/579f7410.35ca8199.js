"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[60220],{44998:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var i=t(86070),r=t(31503);const c={},o="846.\u4e00\u624b\u987a\u5b50",s={id:"leetcode/801-900/\u4e00\u624b\u987a\u5b50",title:"846.\u4e00\u624b\u987a\u5b50",description:"\u94fe\u63a5\uff1a846.\u4e00\u624b\u987a\u5b50",source:"@site/docs/leetcode/801-900/846.\u4e00\u624b\u987a\u5b50.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u4e00\u624b\u987a\u5b50",permalink:"/docs/leetcode/801-900/\u4e00\u624b\u987a\u5b50",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:846,frontMatter:{},sidebar:"journal",previous:{title:"845.\u6570\u7ec4\u4e2d\u7684\u6700\u957f\u5c71\u8109",permalink:"/docs/leetcode/801-900/\u6570\u7ec4\u4e2d\u7684\u6700\u957f\u5c71\u8109"},next:{title:"847.\u8bbf\u95ee\u6240\u6709\u8282\u70b9\u7684\u6700\u77ed\u8def\u5f84",permalink:"/docs/leetcode/801-900/\u8bbf\u95ee\u6240\u6709\u8282\u70b9\u7684\u6700\u77ed\u8def\u5f84"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"846\u4e00\u624b\u987a\u5b50",children:"846.\u4e00\u624b\u987a\u5b50"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/hand-of-straights",children:"846.\u4e00\u624b\u987a\u5b50"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8d2a\u5fc3\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u6392\u5e8f",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 hand \u5176\u4e2d hand[i] \u662f\u5199\u5728\u7b2c i \u5f20\u724c\uff0c\u548c\u4e00\u4e2a\u6574\u6570 groupSize \u3002\u5982\u679c\u5979\u53ef\u80fd\u91cd\u65b0\u6392\u5217\u8fd9\u4e9b\u724c\uff0c\u8fd4\u56de true \uff1b\u5426\u5219\uff0c\u8fd4\u56de false \u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-30"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a32ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19.9MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u540e\u6807\u8bb0\u4f7f\u7528\u8fc7\u7684\u503c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    bool isNStraightHand(vector<int>& hand, int groupSize) {\n        int n = hand.size(), ans = 0, *check = (int*)calloc(n, sizeof(int)),\n            *nums = (int*)calloc(groupSize, sizeof(int));\n        sort(hand.begin(), hand.end());\n        for (int i = 0; i < n; i++) {\n            if (check[i]) continue;\n            int len = 0, pre = hand[i];\n            nums[len++] = i;\n            for (int j = i + 1; j < n && len < groupSize && hand[j] <= pre + 1;\n                 j++) {\n                if (check[j] || pre == hand[j]) continue;\n                pre = hand[j];\n                nums[len++] = j;\n            }\n            if (len < groupSize) continue;\n            ans++;\n            for (int j = 0; j < groupSize; j++) check[nums[j]] = 1;\n        }\n        return ans * groupSize == n;\n    }\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},31503:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>s});var i=t(30758);const r={},c=i.createContext(r);function o(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);