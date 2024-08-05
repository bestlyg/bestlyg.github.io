"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[32745],{86610:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var i=t(86070),d=t(25710);const l={},s="707.\u8bbe\u8ba1\u94fe\u8868",o={id:"leetcode/701-800/\u8bbe\u8ba1\u94fe\u8868",title:"707.\u8bbe\u8ba1\u94fe\u8868",description:"\u94fe\u63a5\uff1a707.\u8bbe\u8ba1\u94fe\u8868",source:"@site/docs/leetcode/701-800/707.\u8bbe\u8ba1\u94fe\u8868.md",sourceDirName:"leetcode/701-800",slug:"/leetcode/701-800/\u8bbe\u8ba1\u94fe\u8868",permalink:"/docs/leetcode/701-800/\u8bbe\u8ba1\u94fe\u8868",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:707,frontMatter:{},sidebar:"journal",previous:{title:"706.\u8bbe\u8ba1\u54c8\u5e0c\u6620\u5c04",permalink:"/docs/leetcode/701-800/\u8bbe\u8ba1\u54c8\u5e0c\u6620\u5c04"},next:{title:"709.\u8f6c\u6362\u6210\u5c0f\u5199\u5b57\u6bcd",permalink:"/docs/leetcode/701-800/\u8f6c\u6362\u6210\u5c0f\u5199\u5b57\u6bcd"}},a={},r=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"707\u8bbe\u8ba1\u94fe\u8868",children:"707.\u8bbe\u8ba1\u94fe\u8868"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/design-linked-list",children:"707.\u8bbe\u8ba1\u94fe\u8868"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1a\u4e2d\u7b49",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u94fe\u8868",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bbe\u8ba1\u94fe\u8868\u7684\u5b9e\u73b0\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-09-23"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a36ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a19.2MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u6784\u9020\u94fe\u8868\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Node {\npublic:\n    Node *next;\n    int val;\n    Node(int val): Node(val, nullptr) {}\n    Node(int val, Node *next): val(val), next(next) {}\n};\nclass MyLinkedList {\npublic:\n    int size;\n    Node *head, *tail;\n    MyLinkedList(): head(nullptr), tail(nullptr), size(0) {}\n    int get(int index) {\n        if (index < 0 || index >= size) return -1;\n        Node *p = head;\n        while (index--) p = p->next;\n        return p->val;\n    }\n    void addAtHead(int val) {\n        if (size == 0) return addFirst(val);\n        head = new Node(val, head);\n        size++;\n    }\n    void addAtTail(int val) {\n        if (size == 0) return addFirst(val);\n        Node *node = new Node(val);\n        tail->next = node;\n        tail = node;\n        size++;\n    }\n    void addAtIndex(int index, int val) {\n        if (index < 0 || index > size) return;\n        if (index == 0) return addAtHead(val);\n        if (index == size) return addAtTail(val);\n        Node *p = head;\n        while (--index) p = p->next;\n        Node *node = new Node(val, p->next);\n        p->next = node;\n        size++;\n    }\n    void deleteAtIndex(int index) {\n        if (index < 0 || index >= size) return;\n        if (size == 1) {\n            delete head;\n            head = tail = nullptr;\n        } else if (index == 0) {\n            Node *node = head;\n            head = head->next;\n            delete node;\n        } else {\n            bool isTail = index == size - 1;\n            Node *p = head;\n            while (--index) p = p->next;\n            Node *node = p->next;\n            p->next = node->next;\n            if (isTail) tail = p;\n            delete node;\n        }\n        size--;\n    }\n    void addFirst(int val){\n        head = tail = new Node(val);\n        size++;\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(30758);const d={},l=i.createContext(d);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);