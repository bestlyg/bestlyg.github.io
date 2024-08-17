"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[21718],{25847:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=t(86070),i=t(25710);const c={},s="LCR115.\u5e8f\u5217\u91cd\u5efa",o={id:"leetcode/LCR/LCR115.\u5e8f\u5217\u91cd\u5efa",title:"LCR115.\u5e8f\u5217\u91cd\u5efa",description:"\u94fe\u63a5\uff1aLCR115.\u5e8f\u5217\u91cd\u5efa",source:"@site/docs/leetcode/LCR/LCR115.\u5e8f\u5217\u91cd\u5efa.md",sourceDirName:"leetcode/LCR",slug:"/leetcode/LCR/LCR115.\u5e8f\u5217\u91cd\u5efa",permalink:"/docs/leetcode/LCR/LCR115.\u5e8f\u5217\u91cd\u5efa",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"LCR114.\u706b\u661f\u8bcd\u5178",permalink:"/docs/leetcode/LCR/LCR114.\u706b\u661f\u8bcd\u5178"},next:{title:"LCR120.\u5bfb\u627e\u6587\u4ef6\u526f\u672c",permalink:"/docs/leetcode/LCR/LCR120.\u5bfb\u627e\u6587\u4ef6\u526f\u672c"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"lcr115\u5e8f\u5217\u91cd\u5efa",children:"LCR115.\u5e8f\u5217\u91cd\u5efa"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,r.jsx)(n.a,{href:"https://leetcode.cn/problems/ur2n8P",children:"LCR115.\u5e8f\u5217\u91cd\u5efa"}),(0,r.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,r.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u56fe\u3001\u62d3\u6251\u6392\u5e8f\u3001\u6570\u7ec4",(0,r.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u68c0\u67e5 nums \u662f\u5426\u662f\u552f\u4e00\u7684\u6700\u77ed \u8d85\u5e8f\u5217 \u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-07-23"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a188ms"}),"\n",(0,r.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a107.3MB"}),"\n",(0,r.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,r.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5224\u65ad\u662f\u5426\u53ea\u6709\u552f\u4e00\u7684\u62d3\u6251\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    struct node {\n        unordered_set<int> children, parent;\n    };\n    bool sequenceReconstruction(vector<int>& nums,\n                                vector<vector<int>>& sequences) {\n        int n = nums.size();\n        vector<node> m(n + 1, node());\n        for (auto& item : sequences) {\n            for (int i = 0; i < item.size() - 1; i++) {\n                int parent = item[i], child = item[i + 1];\n                m[parent].children.insert(child);\n                m[child].parent.insert(parent);\n            }\n        }\n        for (int i = 0; i < n; i++) {\n            int num = nums[i];\n            if (m[num].parent.size()) return false;\n            int nextcnt = 0;\n            for (auto& child : m[num].children) {\n                m[child].parent.erase(num);\n                if (m[child].parent.size() == 0) nextcnt++;\n            }\n            if (i < n - 1 && nextcnt != 1) return false;\n        }\n        return true;\n    }\n};\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(30758);const i={},c=r.createContext(i);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);