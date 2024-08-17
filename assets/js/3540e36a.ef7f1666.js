"use strict";(self.webpackChunk_bestlyg_site=self.webpackChunk_bestlyg_site||[]).push([[34808],{20693:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=t(86070),l=t(25710);const i={},r="234.\u56de\u6587\u94fe\u8868",c={id:"leetcode/201-300/\u56de\u6587\u94fe\u8868",title:"234.\u56de\u6587\u94fe\u8868",description:"\u94fe\u63a5\uff1a234.\u56de\u6587\u94fe\u8868",source:"@site/docs/leetcode/201-300/234.\u56de\u6587\u94fe\u8868.md",sourceDirName:"leetcode/201-300",slug:"/leetcode/201-300/\u56de\u6587\u94fe\u8868",permalink:"/docs/leetcode/201-300/\u56de\u6587\u94fe\u8868",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:234,frontMatter:{},sidebar:"journal",previous:{title:"233.\u6570\u5b571\u7684\u4e2a\u6570",permalink:"/docs/leetcode/201-300/\u6570\u5b571\u7684\u4e2a\u6570"},next:{title:"235.\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148",permalink:"/docs/leetcode/201-300/\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148"}},a={},o=[{value:"\u9898\u89e3 1 - typescript",id:"\u9898\u89e3-1---typescript",level:2},{value:"\u9898\u89e3 2 - typescript",id:"\u9898\u89e3-2---typescript",level:2},{value:"\u9898\u89e3 3 - javascript",id:"\u9898\u89e3-3---javascript",level:2},{value:"\u9898\u89e3 4 - javascript",id:"\u9898\u89e3-4---javascript",level:2},{value:"\u9898\u89e3 5 - c",id:"\u9898\u89e3-5---c",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"234\u56de\u6587\u94fe\u8868",children:"234.\u56de\u6587\u94fe\u8868"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u94fe\u63a5\uff1a",(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/palindrome-linked-list",children:"234.\u56de\u6587\u94fe\u8868"}),(0,s.jsx)(e.br,{}),"\n","\u96be\u5ea6\uff1aEasy",(0,s.jsx)(e.br,{}),"\n","\u6807\u7b7e\uff1a\u6808\u3001\u9012\u5f52\u3001\u94fe\u8868\u3001\u53cc\u6307\u9488",(0,s.jsx)(e.br,{}),"\n","\u7b80\u4ecb\uff1a","\u8bf7\u5224\u65ad\u4e00\u4e2a\u94fe\u8868\u662f\u5426\u4e3a\u56de\u6587\u94fe\u8868\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-1---typescript",children:"\u9898\u89e3 1 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2020-10-23"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a104ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a43MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5feb\u6162\u6307\u9488\u4e00\u6b21\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function isPalindrome(head: ListNode | null): boolean {\n  if (head === null) return true;\n  let fast: ListNode | null = head;\n  let slow: ListNode | null = head;\n  const cache: number[] = [];\n  while (fast !== null && fast.next !== null) {\n    fast = fast.next.next;\n    cache.push(slow!.val);\n    slow = slow!.next;\n  }\n  if (fast?.next === null) slow = slow!.next;\n  while (slow) {\n    const val = cache.pop();\n    if (slow.val !== val) return false;\n    slow = slow.next;\n  }\n  return true;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-2---typescript",children:"\u9898\u89e3 2 - typescript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-08-20"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a260ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a66.2MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1atypescript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u5229\u7528\u5b57\u7b26\u4e32\u4fdd\u5b58\u7ffb\u8f6c\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"function isPalindrome(head: ListNode): boolean {\n  let str1 = '';\n  let str2 = '';\n  let p: ListNode | null = head;\n  while (p) {\n    str1 = str1 + p.val;\n    str2 = p.val + str2;\n    p = p.next;\n  }\n  return str1 === str2;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-3---javascript",children:"\u9898\u89e3 3 - javascript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-22"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a228ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a69.9MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cd\u8f6c\u540e\u534a\u90e8\u5206\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"function isPalindrome(head: ListNode): boolean {\n        let slow = head;\n        let fast = head.next;\n        if (!fast) return true;\n        while (fast && fast.next) {\n          slow = slow.next!;\n          fast = fast.next.next;\n        }\n        fast = reverse(slow.next!)[0];\n        slow = head;\n        while (fast) {\n          if (slow.val !== fast.val) return false;\n          slow = slow.next!;\n          fast = fast.next!;\n        }\n        return true;\n        function reverse(node: ListNode): [ListNode, ListNode] {\n          if (node.next === null) return [node, node];\n          const [first, last] = reverse(node.next);\n          last.next = node;\n          node.next = null;\n          return [first, node];\n        }\n      }\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-4---javascript",children:"\u9898\u89e3 4 - javascript"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-09-22"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a152ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a60.7MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ajavascript"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u53cd\u8f6c\u540e\u534a\u90e8\u5206\uff0c\u904d\u5386\u53cd\u8f6c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"function isPalindrome(head: ListNode): boolean {\n        let slow = head;\n        let fast = head.next;\n        if (!fast) return true;\n        while (fast && fast.next) {\n          slow = slow.next!;\n          fast = fast.next.next;\n        }\n        fast = reverse(slow.next!);\n        slow = head;\n        while (fast) {\n          if (slow.val !== fast.val) return false;\n          slow = slow.next!;\n          fast = fast.next!;\n        }\n        return true;\n        function reverse(node: ListNode): ListNode {\n          const head = new ListNode();\n          let p: ListNode | null = node;\n          while (p) {\n            const oldNext = head.next;\n            const next = p.next;\n            head.next = p;\n            p.next = oldNext;\n            p = next;\n          }\n          return head.next!;\n        }\n      }\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9898\u89e3-5---c",children:"\u9898\u89e3 5 - c"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u65f6\u95f4\uff1a2021-11-19"}),"\n",(0,s.jsx)(e.li,{children:"\u6267\u884c\u7528\u65f6\uff1a164ms"}),"\n",(0,s.jsx)(e.li,{children:"\u5185\u5b58\u6d88\u8017\uff1a40.8MB"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u7a0b\u8bed\u8a00\uff1ac"}),"\n",(0,s.jsxs)(e.li,{children:["\u89e3\u6cd5\u4ecb\u7ecd\uff1a","\u50a8\u5b58\u6570\u7ec4\u518d\u904d\u5386\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"bool isPalindrome(struct ListNode* head){\n    int nums[100000] = {0}, len = 0;\n    struct ListNode *p = head;\n    while(p){\n        nums[len++] = p->val;\n        p = p->next;\n    }\n    for (int i = 0; i < len / 2; i++) {\n        if (nums[i] != nums[len - 1 - i]) return 0;\n    }\n    return 1;\n}\n"})})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var s=t(30758);const l={},i=s.createContext(l);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);