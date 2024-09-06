"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[27091],{99991:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(86070),c=t(25710);const o={},r="817.\u94fe\u8868\u7ec4\u4ef6",l={id:"leetcode/801-900/\u94fe\u8868\u7ec4\u4ef6",title:"817.\u94fe\u8868\u7ec4\u4ef6",description:"\u94fe\u63a5\uff1a817.\u94fe\u8868\u7ec4\u4ef6",source:"@site/docs/leetcode/801-900/817.\u94fe\u8868\u7ec4\u4ef6.md",sourceDirName:"leetcode/801-900",slug:"/leetcode/801-900/\u94fe\u8868\u7ec4\u4ef6",permalink:"/docs/leetcode/801-900/\u94fe\u8868\u7ec4\u4ef6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:817,frontMatter:{},sidebar:"journal",previous:{title:"816.\u6a21\u7cca\u5750\u6807",permalink:"/docs/leetcode/801-900/\u6a21\u7cca\u5750\u6807"},next:{title:"819.\u6700\u5e38\u89c1\u7684\u5355\u8bcd",permalink:"/docs/leetcode/801-900/\u6700\u5e38\u89c1\u7684\u5355\u8bcd"}},i={},d=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"817\u94fe\u8868\u7ec4\u4ef6",children:"817.\u94fe\u8868\u7ec4\u4ef6"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/linked-list-components",children:"817.\u94fe\u8868\u7ec4\u4ef6"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u94fe\u8868",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8fd4\u56de\u5217\u8868 nums \u4e2d\u7ec4\u4ef6\u7684\u4e2a\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-10-12"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a24ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a20.8MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int numComponents(ListNode* head, vector<int>& nums) {\n        unordered_set<int> s(nums.begin(), nums.end());\n        ListNode *p = head;\n        while (p && !s.count(p->val)) p = p->next;\n        int ans = 0;\n        while (p) {\n            while (p && s.count(p->val)) p = p->next;\n            ans++;\n            while (p && !s.count(p->val)) p = p->next;\n        }\n        return ans;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(30758);const c={},o=s.createContext(c);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);