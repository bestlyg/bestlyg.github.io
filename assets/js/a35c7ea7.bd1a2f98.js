"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[3827],{3374:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(86070),s=t(31503);const l={},c="LCR008.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",i={id:"leetcode/LCR/LCR008.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",title:"LCR008.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",description:"\u94fe\u63a5\uff1aLCR008.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",source:"@site/docs/leetcode/LCR/LCR008.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4.md",sourceDirName:"leetcode/LCR",slug:"/leetcode/LCR/LCR008.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",permalink:"/docs/leetcode/LCR/LCR008.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"LCR007.\u4e09\u6570\u4e4b\u548c",permalink:"/docs/leetcode/LCR/LCR007.\u4e09\u6570\u4e4b\u548c"},next:{title:"LCR009.\u4e58\u79ef\u5c0f\u4e8eK\u7684\u5b50\u6570\u7ec4",permalink:"/docs/leetcode/LCR/LCR009.\u4e58\u79ef\u5c0f\u4e8eK\u7684\u5b50\u6570\u7ec4"}},o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"lcr008\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4",children:"LCR008.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/2VG8Kg",children:"LCR008.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u4e8c\u5206\u67e5\u627e\u3001\u524d\u7f00\u548c\u3001\u6ed1\u52a8\u7a97\u53e3",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u542b\u6709 \xa0n\xa0 \u4e2a\u6b63\u6574\u6570\u7684\u6570\u7ec4\u548c\u4e00\u4e2a\u6b63\u6574\u6570 target \u3002\u627e\u51fa\u8be5\u6570\u7ec4\u4e2d\u6ee1\u8db3\u5176\u548c \u2265 target \u7684\u957f\u5ea6\u6700\u5c0f\u7684 \u8fde\u7eed\u5b50\u6570\u7ec4 \xa0[numsl, numsl+1, ..., numsr-1, numsr] \uff0c\u5e76\u8fd4\u56de\u5176\u957f\u5ea6\u3002\u5982\u679c\u4e0d\u5b58\u5728\u7b26\u5408\u6761\u4ef6\u7684\u5b50\u6570\u7ec4\uff0c\u8fd4\u56de 0 \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-24"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a10.4MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int minSubArrayLen(int target, vector<int>& nums) {\n        int l = 0, r = 0, num = 0, ans = INT_MAX, n = nums.size();\n        while (r < n) {\n            while (r < n && num < target) num += nums[r++];\n            while (l < r && num - nums[l] >= target) num -= nums[l++];\n            if (num >= target) ans = min(ans, r - l);\n            num -= nums[l++];\n        }\n        return ans == INT_MAX ? 0 : ans;\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(30758);const s={},l=r.createContext(s);function c(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);