"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[37784],{92290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var l=t(86070),s=t(31503);const i={},r="143.\u91cd\u6392\u94fe\u8868",o={id:"leetcode/101-200/\u91cd\u6392\u94fe\u8868",title:"143.\u91cd\u6392\u94fe\u8868",description:"\u94fe\u63a5\uff1a143.\u91cd\u6392\u94fe\u8868",source:"@site/docs/leetcode/101-200/143.\u91cd\u6392\u94fe\u8868.md",sourceDirName:"leetcode/101-200",slug:"/leetcode/101-200/\u91cd\u6392\u94fe\u8868",permalink:"/docs/leetcode/101-200/\u91cd\u6392\u94fe\u8868",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:143,frontMatter:{},sidebar:"journal",previous:{title:"142.\u73af\u5f62\u94fe\u8868II",permalink:"/docs/leetcode/101-200/\u73af\u5f62\u94fe\u8868II"},next:{title:"144.\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386",permalink:"/docs/leetcode/101-200/\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386"}},d={},c=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - cpp",id:"\u9898\u89e3-2---cpp",level:2},{value:"\u9898\u89e3 3 - python",id:"\u9898\u89e3-3---python",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"143\u91cd\u6392\u94fe\u8868",children:"143.\u91cd\u6392\u94fe\u8868"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u94fe\u63a5\uff1a",(0,l.jsx)(n.a,{href:"https://leetcode.cn/problems/reorder-list",children:"143.\u91cd\u6392\u94fe\u8868"}),(0,l.jsx)(n.br,{}),"\n","\u96be\u5ea6\uff1aMedium",(0,l.jsx)(n.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u9012\u5f52\u3001\u94fe\u8868\u3001\u53cc\u6307\u9488",(0,l.jsx)(n.br,{}),"\n","\u7b80\u4ecb\uff1a","\u7ed9\u5b9a\u4e00\u4e2a\u5355\u94fe\u8868 L\uff1aL0\u2192L1\u2192\u2026\u2192Ln-1\u2192Ln \uff0c\u5c06\u5176\u91cd\u65b0\u6392\u5217\u540e\u53d8\u4e3a\uff1a L0\u2192Ln\u2192L1\u2192Ln-1\u2192L2\u2192Ln-2\u2192\u2026\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-10-20"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a208ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a47MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u961f\u5217\u524d\u540e\u53d6\u503c\u8fdb\u884c\u91cd\u65b0\u8d4b\u503c next\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"function reorderList(head: ListNode | null): void {\n  if (head === null) return;\n  const queue: ListNode[] = [];\n  let temp: ListNode | null = head;\n  while (temp !== null) {\n    queue.push(temp);\n    temp = temp.next;\n  }\n  queue.shift();\n  let tag = true;\n  temp = head;\n  while (queue.length !== 0) {\n    temp.next = (tag = !tag) ? queue.shift()! : queue.pop()!;\n    temp = temp!.next;\n  }\n  temp.next = null;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-2---cpp",children:"\u9898\u89e3 2 - cpp"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-31"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a40ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a17.2MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1acpp"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u627e\u5230\u4e2d\u70b9\uff0c\u7ffb\u8f6c\u540e\u534a\u90e8\u5206\uff0c\u5408\u5e76\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    void reorderList(ListNode* head) {\n        // mid\n        ListNode *slow = head, *fast = head;\n        while (fast && fast->next) {\n            slow = slow->next;\n            fast = fast->next->next;\n        }\n        // reverse\n        ListNode *last = slow->next;\n        if (!last) return;\n        while (last->next) {\n            ListNode *tmp = last->next;\n            last->next = tmp->next;\n            tmp->next = slow->next;\n            slow->next = tmp;\n        }\n        // merge\n        ListNode *l1 = head, *l2 = slow->next;\n        while (l1 && l2) {\n            ListNode *tmp1 = l1->next, *tmp2 = l2->next;\n            l1->next = l2;\n            l2->next = tmp1;\n            l1 = tmp1;\n            l2 = tmp2;\n        }\n        // last node\n        slow->next = nullptr;\n    }\n};\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9898\u89e3-3---python",children:"\u9898\u89e3 3 - python"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2023-07-31"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884c\u7528\u65f6\uff1a76ms"}),"\n",(0,l.jsx)(n.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a24.5MB"}),"\n",(0,l.jsx)(n.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1apython"}),"\n",(0,l.jsxs)(n.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u540c\u4e0a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def reorderList(self, head: Optional[ListNode]) -> None:\n        slow = fast = head\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n        last = slow.next\n        if not last:\n            return\n        while last.next:\n            tmp = last.next\n            last.next = tmp.next\n            tmp.next = slow.next\n            slow.next = tmp\n        l1 = head\n        l2 = slow.next\n        while l1 and l2:\n            tmp1 = l1.next\n            tmp2 = l2.next\n            l1.next = l2\n            l2.next = tmp1\n            l1 = tmp1\n            l2 = tmp2\n        slow.next = None\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},31503:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var l=t(30758);const s={},i=l.createContext(s);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);