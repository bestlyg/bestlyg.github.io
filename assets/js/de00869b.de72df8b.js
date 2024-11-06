"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[9449],{93354:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=i(86070),s=i(31503);const r={},o="952.\u6309\u516c\u56e0\u6570\u8ba1\u7b97\u6700\u5927\u7ec4\u4ef6\u5927\u5c0f",c={id:"leetcode/901-1000/\u6309\u516c\u56e0\u6570\u8ba1\u7b97\u6700\u5927\u7ec4\u4ef6\u5927\u5c0f",title:"952.\u6309\u516c\u56e0\u6570\u8ba1\u7b97\u6700\u5927\u7ec4\u4ef6\u5927\u5c0f",description:"\u94fe\u63a5\uff1a952.\u6309\u516c\u56e0\u6570\u8ba1\u7b97\u6700\u5927\u7ec4\u4ef6\u5927\u5c0f",source:"@site/docs/leetcode/901-1000/952.\u6309\u516c\u56e0\u6570\u8ba1\u7b97\u6700\u5927\u7ec4\u4ef6\u5927\u5c0f.md",sourceDirName:"leetcode/901-1000",slug:"/leetcode/901-1000/\u6309\u516c\u56e0\u6570\u8ba1\u7b97\u6700\u5927\u7ec4\u4ef6\u5927\u5c0f",permalink:"/docs/leetcode/901-1000/\u6309\u516c\u56e0\u6570\u8ba1\u7b97\u6700\u5927\u7ec4\u4ef6\u5927\u5c0f",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:952,frontMatter:{},sidebar:"journal",previous:{title:"947.\u79fb\u9664\u6700\u591a\u7684\u540c\u884c\u6216\u540c\u5217\u77f3\u5934",permalink:"/docs/leetcode/901-1000/\u79fb\u9664\u6700\u591a\u7684\u540c\u884c\u6216\u540c\u5217\u77f3\u5934"},next:{title:"953.\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178",permalink:"/docs/leetcode/901-1000/\u9a8c\u8bc1\u5916\u661f\u8bed\u8bcd\u5178"}},l={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"952\u6309\u516c\u56e0\u6570\u8ba1\u7b97\u6700\u5927\u7ec4\u4ef6\u5927\u5c0f",children:"952.\u6309\u516c\u56e0\u6570\u8ba1\u7b97\u6700\u5927\u7ec4\u4ef6\u5927\u5c0f"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/largest-component-size-by-common-factor",children:"952.\u6309\u516c\u56e0\u6570\u8ba1\u7b97\u6700\u5927\u7ec4\u4ef6\u5927\u5c0f"}),(0,t.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aHard",(0,t.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u5e76\u67e5\u96c6\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u6570\u5b66\u3001\u6570\u8bba",(0,t.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de \u56fe\u4e2d\u6700\u5927\u8fde\u901a\u7ec4\u4ef6\u7684\u5927\u5c0f \u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-07-31"}),"\n",(0,t.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a308ms"}),"\n",(0,t.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a128.8MB"}),"\n",(0,t.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,t.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5bf9\u4e8e\u5408\u6570\u5148\u8fdb\u884c\u5408\u5e76\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class UnionFind {\n   public:\n    vector<int> list;\n    UnionFind(int len) {\n        list = vector<int>(len);\n        for (int i = 0; i < len; i++) list[i] = i;\n    }\n    int find(int idx) {\n        if (list[idx] == idx) return idx;\n        int p = find(list[idx]);\n        list[idx] = p;\n        return p;\n    }\n    void uni(int idx1, int idx2) {\n        int p1 = find(idx1), p2 = find(idx2);\n        if (p1 == p2) return;\n        list[p1] = p2;\n    }\n};\n#define MAX 2e5\nclass Solution {\n   public:\n    int largestComponentSize(vector<int>& nums) {\n        int n = nums.size();\n        UnionFind uf(MAX);\n        for (int num : nums) {\n            for (int i = 2; i * i <= num; i++) {\n                if (num % i == 0) {\n                    uf.uni(num, i);\n                    uf.uni(num, num / i);\n                }\n            }\n        }\n        int ans = 0;\n        unordered_map<int, int> m;\n        for (auto& num : nums) {\n            int p = uf.find(num);\n            m[p]++;\n            ans = max(ans, m[p]);\n        }\n        return ans;\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},31503:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>c});var t=i(30758);const s={},r=t.createContext(s);function o(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);