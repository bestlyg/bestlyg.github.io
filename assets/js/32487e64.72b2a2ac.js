"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[21066],{13693:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=s(86070),t=s(25710);const r={},c="905.\u6309\u5947\u5076\u6392\u5e8f\u6570\u7ec4",l={id:"leetcode/901-1000/\u6309\u5947\u5076\u6392\u5e8f\u6570\u7ec4",title:"905.\u6309\u5947\u5076\u6392\u5e8f\u6570\u7ec4",description:"\u94fe\u63a5\uff1a905.\u6309\u5947\u5076\u6392\u5e8f\u6570\u7ec4",source:"@site/docs/leetcode/901-1000/905.\u6309\u5947\u5076\u6392\u5e8f\u6570\u7ec4.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u6309\u5947\u5076\u6392\u5e8f\u6570\u7ec4",permalink:"/web/site/docs/leetcode/901-1000/\u6309\u5947\u5076\u6392\u5e8f\u6570\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:905,frontMatter:{},sidebar:"journal",previous:{title:"904.\u6c34\u679c\u6210\u7bee",permalink:"/web/site/docs/leetcode/901-1000/\u6c34\u679c\u6210\u7bee"},next:{title:"907.\u5b50\u6570\u7ec4\u7684\u6700\u5c0f\u503c\u4e4b\u548c",permalink:"/web/site/docs/leetcode/901-1000/\u5b50\u6570\u7ec4\u7684\u6700\u5c0f\u503c\u4e4b\u548c"}},o={},u=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - go",id:"\u9898\u89e3-2---go",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"905\u6309\u5947\u5076\u6392\u5e8f\u6570\u7ec4",children:"905.\u6309\u5947\u5076\u6392\u5e8f\u6570\u7ec4"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://leetcode.cn/problems/sort-array-by-parity",children:"905.\u6309\u5947\u5076\u6392\u5e8f\u6570\u7ec4"}),(0,i.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u7b80\u5355",(0,i.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u53cc\u6307\u9488\u3001\u6392\u5e8f",(0,i.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u975e\u8d1f\u6574\u6570\u6570\u7ec4 A\uff0c\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5728\u8be5\u6570\u7ec4\u4e2d\uff0c A \u7684\u6240\u6709\u5076\u6570\u5143\u7d20\u4e4b\u540e\u8ddf\u7740\u6240\u6709\u5947\u6570\u5143\u7d20\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-03-23"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a56ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a15.8MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n   public:\n    vector<int> sortArrayByParity(vector<int>& nums) {\n        vector<int> ans;\n        ans.reserve(nums.size());\n        for (auto& num : nums) {\n            if (num & 1)\n                ans.push_back(num);\n            else\n                ans.insert(ans.begin(), num);\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9898\u89e3-2---go",children:"\u9898\u89e3 2 - go"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-04-28"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a4ms"}),"\n",(0,i.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a4.6MB"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ago"}),"\n",(0,i.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cc\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func sortArrayByParity(nums []int) []int {\n    var i1, i2 = 0, len(nums) - 1\n    for i1 < i2 {\n        for i1 < i2 && nums[i1]&1 == 0 {\n            i1 += 1\n        }\n        for i1 < i2 && nums[i2]&1 == 1 {\n            i2 -= 1\n        }\n        nums[i1], nums[i2] = nums[i2], nums[i1]\n    }\n    return nums\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},25710:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>l});var i=s(30758);const t={},r=i.createContext(t);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);