"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[96378],{42380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var s=t(86070),l=t(25710);const i={},r="LCR029.\u5faa\u73af\u6709\u5e8f\u5217\u8868\u7684\u63d2\u5165",o={id:"leetcode/1-100/LCR029.\u5faa\u73af\u6709\u5e8f\u5217\u8868\u7684\u63d2\u5165",title:"LCR029.\u5faa\u73af\u6709\u5e8f\u5217\u8868\u7684\u63d2\u5165",description:"\u94fe\u63a5\uff1aLCR029.\u5faa\u73af\u6709\u5e8f\u5217\u8868\u7684\u63d2\u5165",source:"@site/docs/leetcode/1-100/LCR029.\u5faa\u73af\u6709\u5e8f\u5217\u8868\u7684\u63d2\u5165.md",sourceDirName:"leetcode/1-100",slug:"/leetcode/1-100/LCR029.\u5faa\u73af\u6709\u5e8f\u5217\u8868\u7684\u63d2\u5165",permalink:"/web/site/docs/leetcode/1-100/LCR029.\u5faa\u73af\u6709\u5e8f\u5217\u8868\u7684\u63d2\u5165",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"journal",previous:{title:"LCR019.\u9a8c\u8bc1\u56de\u6587\u4e32II",permalink:"/web/site/docs/leetcode/1-100/LCR019.\u9a8c\u8bc1\u56de\u6587\u4e32II"},next:{title:"LCR033.\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4",permalink:"/web/site/docs/leetcode/1-100/LCR033.\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4"}},c={},a=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"lcr029\u5faa\u73af\u6709\u5e8f\u5217\u8868\u7684\u63d2\u5165",children:"LCR029.\u5faa\u73af\u6709\u5e8f\u5217\u8868\u7684\u63d2\u5165"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(n.a,{href:"https://leetcode.cn/problems/4ueAj6",children:"LCR029.\u5faa\u73af\u6709\u5e8f\u5217\u8868\u7684\u63d2\u5165"}),(0,s.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,s.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u94fe\u8868",(0,s.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u5faa\u73af\u5355\u8c03\u975e\u9012\u51cf\u5217\u8868\u4e2d\u7684\u4e00\u4e2a\u70b9\uff0c\u5199\u4e00\u4e2a\u51fd\u6570\u5411\u8fd9\u4e2a\u5217\u8868\u4e2d\u63d2\u5165\u4e00\u4e2a\u65b0\u5143\u7d20 insertVal \uff0c\u4f7f\u8fd9\u4e2a\u5217\u8868\u4ecd\u7136\u662f\u5faa\u73af\u5347\u5e8f\u7684\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-06-18"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a8ms"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a7.9MB"}),"\n",(0,s.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,s.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u904d\u5386\uff0c\u8003\u8651\u5c0f\u4e8e\u6700\u5c0f\u503c\u548c\u5927\u4e8e\u6700\u5927\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\n   public:\n    Node* insert(Node* head, int insertVal) {\n        if (!head) {\n            Node* ans = new Node(insertVal);\n            ans->next = ans;\n            return ans;\n        }\n        Node *p = head, *node = new Node(insertVal);\n        if (p->next != head) {\n            int nmin = INT_MAX, nmax = INT_MIN;\n            do {\n                nmin = min(nmin, p->val);\n                nmax = max(nmax, p->val);\n                p = p->next;\n            } while (p != head);\n            if (nmin >= insertVal || nmax <= insertVal) {\n                while (p->val <= p->next->val && p->next != head) p = p->next;\n            } else {\n                while (!(p->val <= insertVal && p->next->val >= insertVal))\n                    p = p->next;\n            }\n        }\n        node->next = p->next;\n        p->next = node;\n        return head;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(30758);const l={},i=s.createContext(l);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);