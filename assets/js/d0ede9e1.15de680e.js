"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[83844],{95875:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var s=t(86070),r=t(31503);const c={},i="1716.\u8ba1\u7b97\u529b\u6263\u94f6\u884c\u7684\u94b1",l={id:"leetcode/1701-1800/\u8ba1\u7b97\u529b\u6263\u94f6\u884c\u7684\u94b1",title:"1716.\u8ba1\u7b97\u529b\u6263\u94f6\u884c\u7684\u94b1",description:"\u94fe\u63a5\uff1a1716.\u8ba1\u7b97\u529b\u6263\u94f6\u884c\u7684\u94b1",source:"@site/docs/leetcode/1701-1800/1716.\u8ba1\u7b97\u529b\u6263\u94f6\u884c\u7684\u94b1.md",sourceDirName:"leetcode/1701-1800",slug:"/leetcode/1701-1800/\u8ba1\u7b97\u529b\u6263\u94f6\u884c\u7684\u94b1",permalink:"/docs/leetcode/1701-1800/\u8ba1\u7b97\u529b\u6263\u94f6\u884c\u7684\u94b1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1716,frontMatter:{},sidebar:"journal",previous:{title:"1711.\u5927\u9910\u8ba1\u6570",permalink:"/docs/leetcode/1701-1800/\u5927\u9910\u8ba1\u6570"},next:{title:"1719.\u91cd\u6784\u4e00\u68f5\u6811\u7684\u65b9\u6848\u6570",permalink:"/docs/leetcode/1701-1800/\u91cd\u6784\u4e00\u68f5\u6811\u7684\u65b9\u6848\u6570"}},o={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1716\u8ba1\u7b97\u529b\u6263\u94f6\u884c\u7684\u94b1",children:"1716.\u8ba1\u7b97\u529b\u6263\u94f6\u884c\u7684\u94b1"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/calculate-money-in-leetcode-bank",children:"1716.\u8ba1\u7b97\u529b\u6263\u94f6\u884c\u7684\u94b1"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u5b66",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60 n \uff0c\u8bf7\u4f60\u8fd4\u56de\u5728\u7b2c n \u5929\u7ed3\u675f\u7684\u65f6\u5019\u4ed6\u5728\u529b\u6263\u94f6\u884c\u603b\u5171\u5b58\u4e86\u591a\u5c11\u5757\u94b1\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-01-16"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a16ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.3MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u968f\u673a\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    vector<int> arr;\n    Solution(ListNode* head) {\n        srand(time(0));\n        ListNode* p = head;\n        while (p) {\n            arr.push_back(p->val);\n            p = p->next;\n        }\n    }\n    int getRandom() { return arr[rand() % arr.size()]; }\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-01-16"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a16.2MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6c34\u5858\u62bd\u6837\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    ListNode *node;\n    Solution(ListNode *head) {\n        srand(time(0));\n        node = head;\n    }\n    int getRandom() {\n        int ans, i = 1;\n        for (ListNode *p = node; p; p = p->next, i++) {\n            if (rand() % i == 0) ans = p->val;\n        }\n        return ans;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(30758);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);