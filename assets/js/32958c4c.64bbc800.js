"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[91634],{66428:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=t(86070),i=t(25710);const r={},o="855.\u8003\u573a\u5c31\u5ea7",c={id:"leetcode/801-900/\u8003\u573a\u5c31\u5ea7",title:"855.\u8003\u573a\u5c31\u5ea7",description:"\u94fe\u63a5\uff1a855.\u8003\u573a\u5c31\u5ea7",source:"@site/docs/leetcode/801-900/855.\u8003\u573a\u5c31\u5ea7.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u8003\u573a\u5c31\u5ea7",permalink:"/web/site/docs/leetcode/801-900/\u8003\u573a\u5c31\u5ea7",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:855,frontMatter:{},sidebar:"journal",previous:{title:"852.\u5c71\u8109\u6570\u7ec4\u7684\u5cf0\u9876\u7d22\u5f15",permalink:"/web/site/docs/leetcode/801-900/\u5c71\u8109\u6570\u7ec4\u7684\u5cf0\u9876\u7d22\u5f15"},next:{title:"856.\u62ec\u53f7\u7684\u5206\u6570",permalink:"/web/site/docs/leetcode/801-900/\u62ec\u53f7\u7684\u5206\u6570"}},l={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"855\u8003\u573a\u5c31\u5ea7",children:"855.\u8003\u573a\u5c31\u5ea7"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/exam-room",children:"855.\u8003\u573a\u5c31\u5ea7"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u6709\u5e8f\u96c6\u5408\u3001\u5806\uff08\u4f18\u5148\u961f\u5217\uff09",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u5f53\u5b66\u751f\u8fdb\u5165\u8003\u573a\u540e\uff0c\u4ed6\u5fc5\u987b\u5750\u5728\u80fd\u591f\u4f7f\u4ed6\u4e0e\u79bb\u4ed6\u6700\u8fd1\u7684\u4eba\u4e4b\u95f4\u7684\u8ddd\u79bb\u8fbe\u5230\u6700\u5927\u5316\u7684\u5ea7\u4f4d\u4e0a\u3002\u5982\u679c\u6709\u591a\u4e2a\u8fd9\u6837\u7684\u5ea7\u4f4d\uff0c\u4ed6\u4f1a\u5750\u5728\u7f16\u53f7\u6700\u5c0f\u7684\u5ea7\u4f4d\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-30"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a612ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19.8MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class ExamRoom {\npublic:\n    int n;\n    set<int> s;\n    ExamRoom(int n): n(n) {}\n    int seat() {\n        if (s.size() == 0) { s.insert(0); return 0; }\n        auto it = s.begin(), prev = it;\n        int ans = 0, val = 0;\n        if (*it != 0) {\n            ans = 0;\n            val = *it;\n        }\n        for (it++; it != s.end(); prev = it++) {\n            int mid = (*it + *prev) / 2;\n            if (mid - *prev > val) {\n                ans = mid;\n                val = mid - *prev;\n            }\n        }\n        if (*s.rbegin() != n - 1 && n - *s.rbegin() - 1 > val) {\n            ans = n - 1;\n            val = n - *s.rbegin() - 1;\n        }\n        s.insert(ans);\n        return ans;\n    }\n    void leave(int p) {\n        s.erase(p);\n    }\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var s=t(30758);const i={},r=s.createContext(i);function o(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);