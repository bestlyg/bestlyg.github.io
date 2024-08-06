"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[50341],{2901:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(86070),c=t(25710);const r={},i="LCR011.\u8fde\u7eed\u6570\u7ec4",o={id:"leetcode/1-100/LCR011.\u8fde\u7eed\u6570\u7ec4",title:"LCR011.\u8fde\u7eed\u6570\u7ec4",description:"\u94fe\u63a5\uff1aLCR011.\u8fde\u7eed\u6570\u7ec4",source:"@site/docs/leetcode/1-100/LCR011.\u8fde\u7eed\u6570\u7ec4.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/LCR011.\u8fde\u7eed\u6570\u7ec4",permalink:"/docs/leetcode/1-100/LCR011.\u8fde\u7eed\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"LCR010.\u548c\u4e3aK\u7684\u5b50\u6570\u7ec4",permalink:"/docs/leetcode/1-100/LCR010.\u548c\u4e3aK\u7684\u5b50\u6570\u7ec4"},next:{title:"LCR012.\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807",permalink:"/docs/leetcode/1-100/LCR012.\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"lcr011\u8fde\u7eed\u6570\u7ec4",children:"LCR011.\u8fde\u7eed\u6570\u7ec4"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/A1NYOS",children:"LCR011.\u8fde\u7eed\u6570\u7ec4"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u524d\u7f00\u548c",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u4e8c\u8fdb\u5236\u6570\u7ec4 nums , \u627e\u5230\u542b\u6709\u76f8\u540c\u6570\u91cf\u7684 0 \u548c 1 \u7684\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4\uff0c\u5e76\u8fd4\u56de\u8be5\u5b50\u6570\u7ec4\u7684\u957f\u5ea6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-12-23"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a116ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a81.7MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u524d\u7f00\u548c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    int findMaxLength(vector<int>& nums) {\n        int ans = 0, sum = 0;\n        unordered_map<int, int> mmap;\n        mmap[0] = -1;\n        for (int i = 0; i < nums.size(); i++) {\n            sum += nums[i] == 1 ? 1 : -1;\n            if (mmap.count(sum)) {\n                ans = max(ans, i - mmap[sum]);\n            } else {\n                mmap[sum] = i;\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(30758);const c={},r=s.createContext(c);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);