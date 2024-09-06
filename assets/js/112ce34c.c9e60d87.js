"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[80663],{67067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=t(86070),r=t(25710);const o={},l="2502.\u8bbe\u8ba1\u5185\u5b58\u5206\u914d\u5668",d={id:"leetcode/2501-2600/\u8bbe\u8ba1\u5185\u5b58\u5206\u914d\u5668",title:"2502.\u8bbe\u8ba1\u5185\u5b58\u5206\u914d\u5668",description:"\u94fe\u63a5\uff1a2502.\u8bbe\u8ba1\u5185\u5b58\u5206\u914d\u5668",source:"@site/docs/leetcode/2501-2600/2502.\u8bbe\u8ba1\u5185\u5b58\u5206\u914d\u5668.md",sourceDirName:"leetcode/2501-2600",slug:"/leetcode/2501-2600/\u8bbe\u8ba1\u5185\u5b58\u5206\u914d\u5668",permalink:"/docs/leetcode/2501-2600/\u8bbe\u8ba1\u5185\u5b58\u5206\u914d\u5668",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2502,frontMatter:{},sidebar:"journal",previous:{title:"2501.\u6570\u7ec4\u4e2d\u6700\u957f\u7684\u65b9\u6ce2",permalink:"/docs/leetcode/2501-2600/\u6570\u7ec4\u4e2d\u6700\u957f\u7684\u65b9\u6ce2"},next:{title:"2503.\u77e9\u9635\u67e5\u8be2\u53ef\u83b7\u5f97\u7684\u6700\u5927\u5206\u6570",permalink:"/docs/leetcode/2501-2600/\u77e9\u9635\u67e5\u8be2\u53ef\u83b7\u5f97\u7684\u6700\u5927\u5206\u6570"}},s={},c=[{value:"\u9898\u89e3 1 - cpp",id:"\u9898\u89e3-1---cpp",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"2502\u8bbe\u8ba1\u5185\u5b58\u5206\u914d\u5668",children:"2502.\u8bbe\u8ba1\u5185\u5b58\u5206\u914d\u5668"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,i.jsx)(n.a,{href:"https://leetcode.cn/problems/design-memory-allocator",children:"2502.\u8bbe\u8ba1\u5185\u5b58\u5206\u914d\u5668"}),(0,i.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,i.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u8bbe\u8ba1\u3001\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u3001\u6a21\u62df",(0,i.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570 n \uff0c\u8868\u793a\u4e0b\u6807\u4ece 0 \u5f00\u59cb\u7684\u5185\u5b58\u6570\u7ec4\u7684\u5927\u5c0f\u3002\u6240\u6709\u5185\u5b58\u5355\u5143\u5f00\u59cb\u90fd\u662f\u7a7a\u95f2\u7684\u3002\u8bf7\u4f60\u8bbe\u8ba1\u4e00\u4e2a\u5177\u5907\u4ee5\u4e0b\u529f\u80fd\u7684\u5185\u5b58\u5206\u914d\u5668\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9898\u89e3-1---cpp",children:"\u9898\u89e3 1 - cpp"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2022-12-11"}),"\n",(0,i.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a29.7MB"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,i.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u94fe\u8868\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#include <vector>\n#include <set>\n#include <iostream>\n#include <unordered_map>\n#define X first\n#define Y second\n#define lb(x) ((x) & (-x))\n#define mem(a,b) memset(a,b,sizeof(a))\n#define debug freopen("input","r",stdin)\nusing namespace std;\ntypedef long long ll;\n\nclass Node {\npublic:\n    int l, r, mID;\n    Node *next, *prev;\n    Node() {}\n    Node(int l, int r, int mID): l(l), r(r), mID(mID), next(nullptr), prev(nullptr) {}\n    void insert(Node *node) {\n      node->next = next;\n      node->prev = prev;\n      if (next) next = node;\n      if (prev) prev->prev = node;\n    }\n    void remove() {\n      Node *nextNode = next;\n      next = nextNode->next;\n      nextNode->prev = this;\n    }\n};\nclass Allocator {\npublic:\n    int n;\n    Node *head, *tail;\n    Allocator(int n): n(n), head(new Node(-1, -1, 0)), tail(new Node(n, n, 0)){\n      head->next = tail;\n      tail->prev = head;\n    }\n    int allocate(int size, int mID) {\n        Node *p = head;\n        while (p != tail) {\n            int s = p->next->l - p->r - 1;\n            if (s >= size) {\n              Node *newNode = new Node(p->r + 1, p->r + size, mID);\n              p->insert(newNode);\n              return p->r + 1;\n            }\n            p = p->next;\n        }\n        return -1;\n    }\n\n    int free(int mID) {\n        Node *p = head;\n        int sum = 0;\n        while (p != tail) {\n          if (p->next->mID == mID) {\n            sum += p->next->r - p->next->l + 1;\n            p->remove();\n            continue;\n          }\n          p = p->next;\n        }\n        print();\n        return sum;\n    }\n    void print() {\n      Node *p = head;\n      while (true) {\n        if (p == tail) {\n          break;\n        }\n        p = p->next;\n      }\n    }\n};\n'})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},25710:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var i=t(30758);const r={},o=i.createContext(r);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);